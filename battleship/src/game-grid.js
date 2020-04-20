import { LitElement, css, html } from '../web_modules/lit-element.js';
import * as Ship from './ship.js';


export class EmptyCell extends LitElement {
  static styles = css`
    :host {
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1vw;
    }

    .hit-water-area {
      height: 30px;
      width: 30px;
      background-color: white;
      border-radius: 50%;
      display: none;
    }

    .visible {
      display: block;
    }
  `;

static get properties() {
  return { hit : {type: Boolean, reflectToAttribute: true, attribute: true} };
  }

  set hit(hit) {
    let oldHit = this._hit;
    this._hit = hit;
    this.requestUpdate('hit', oldHit);
  }

  get hit() { return this._hit; }

  constructor() {
    super();
    this._hit = false;
  }

  render() {
    return html`
      <div class="cell">
        <slot></slot>
        <div class="hit-water-area ${this.hit? "visible" : ""}"></div>
      </div>`;
  }
}

customElements.define("empty-cell", EmptyCell);

export class GameGrid extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      height: 100%;
      --border-grid: solid 2px white;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    empty-cell {
      border: var(--border-grid);
    }

    .grid {
      display: grid;
      width: 100%;
      height: 97%;
      grid-template-columns: repeat(11, 1fr);
      grid-template-rows: repeat(11, 1fr);
    }

    .title {
      font-size: 1vw;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3%;
    }

    .hit-water-area {
      height: 30px;
      width: 30px;
      background-color: white;
      border-radius: 50%;
      display: none;
    }
  `;

  _shipPlaced = [];

  static get properties() {
    return { grid: {
              type: Array,
              hasChanged() {
                return true;
              }
            }};
  }

  set grid(grid) {
    let oldVal = this._grid;
    this._grid = grid;
    this.requestUpdate('grid', oldVal);
  }

  get grid() { return this._grid; }

  getRandomCoordinate() {
    return Math.floor(Math.random() * (10 - 1 + 1) + 1);
  }

  getRandomOrientation() {
    const isVertical = Math.random() >= 0.5;
    return isVertical? Ship.Orientation.Vertical : Ship.Orientation.Horizontal;
  }

  firstUpdated() {
    this.initGrid();
  }

  constructor() {
    super();
    this._grid = [];
  }

  initGrid() {
    this.grid = [
      [{ text: '/'}, { text: '1'}, { text: '2'}, { text: '3'},
       { text: '4'}, { text: '5'}, { text: '6'}, { text: '7'},
       { text: '8'}, { text: '9'}, { text: '10'}],
      [{ text: 'A'}, '', '', '', '', '', '', '', '', '', ''],
      [{ text: 'B'}, '', '', '', '', '', '', '', '', '', ''],
      [{ text: 'C'}, '', '', '', '', '', '', '', '', '', ''],
      [{ text: 'D'}, '', '', '', '', '', '', '', '', '', ''],
      [{ text: 'E'}, '', '', '', '', '', '', '', '', '', ''],
      [{ text: 'F'}, '', '', '', '', '', '', '', '', '', ''],
      [{ text: 'G'}, '', '', '', '', '', '', '', '', '', ''],
      [{ text: 'H'}, '', '', '', '', '', '', '', '', '', ''],
      [{ text: 'I'}, '', '', '', '', '', '', '', '', '', ''],
      [{ text: 'J'}, '', '', '', '', '', '', '', '', '', ''],
    ];
    for (let i = 1; i <= 10; ++i)
      for (let j = 1; j <= 10; j++)
        this.grid[i][j] = { text:'', shot: false};
  }

  restart() {
    this.initGrid();
    this._shipPlaced = [];
    this._submarine.reset();
    this._destroyer.reset();
    this._carrier.reset();
    this._battleship.reset();
    this._rescue.reset();
    this.generateRandomGrid();
  }

  generateRandomGrid() {
    Object.values(Ship.ShipType).map((value) => {
      this.placeShipRandomly(value);
    });
  }

  placeShipRandomly(type) {
    const x = this.getRandomCoordinate();
    const y = this.getRandomCoordinate();
    const orientation = this.getRandomOrientation();
    const size = Ship.getShipSize(type);

    //Check if it fits in the grid.
    if (orientation === Ship.Orientation.Horizontal) {
      if (y + size > 10)
        return this.placeShipRandomly(type);
    } else {
      if (x + size > 10)
      return this.placeShipRandomly(type);
    }

    //Check if it doesn't collide with another ship.
    if (orientation === Ship.Orientation.Horizontal) {
      for (let i = y; i <= y + size; ++i) {
        if (this.grid[x][i] != undefined && this.isShip(this.grid[x][i]))
          return this.placeShipRandomly(type);
      }
    } else {
      for (let i = x; i <= x + size; ++i) {
        if (this.grid[i][y] != undefined && this.isShip(this.grid[i][y]))
          return this.placeShipRandomly(type);
      }
    }
    this.addShip(type, x, y, orientation, size);
  }

  addShip(type, x, y, orientation, size) {
    if (x === 0 || y === 0) {
      console.error('Adding ship in the wrong column/row.');
      return;
    }

    const ship = { type: type, orientation: orientation, x: x, y: y, shot: false};
    this.grid[x][y] = ship;
    if (orientation === Ship.Orientation.Horizontal) {
      for (let i = y; i < y + size; ++i)
        this.grid[x][i] = { type: type, orientation: orientation, x: x, y: i, shot: false};
    } else if (orientation === Ship.Orientation.Vertical) {
      for (let i = x; i < x + size; ++i)
        this.grid[i][y] = { type: type, orientation: orientation, x: i, y: y, shot: false};
    }
  }

  updateGrid() {
    this._shipPlaced = [];
    this.requestUpdate('grid', this.grid);
  }

  isShip(gridElement) {
    if (gridElement.type === Ship.ShipType.Submarine ||
        gridElement.type === Ship.ShipType.Destroyer ||
        gridElement.type === Ship.ShipType.Battleship ||
        gridElement.type === Ship.ShipType.Carrier ||
        gridElement.type === Ship.ShipType.Rescue)
      return true;
    return false;
  }

  isShipPlaced(type) {
    return this._shipPlaced.includes(type);
  }

  playerHit(type) {
    let event = new CustomEvent('player-hit', {
      detail: { message: 'player played.', type: type},
      bubbles: true,
      composed: true });
    this.dispatchEvent(event);

    this.dispatchGameOverIfNecessary();
  }

  dispatchGameOverIfNecessary() {
    const isGameOver = this._submarine.destroyed && this._destroyer.destroyed &&
      this._carrier.destroyed && this._battleship.destroyed && this._rescue.destroyed;
    if (isGameOver) {
      let event = new CustomEvent('game-over', {
        detail: { message: 'Game Over' },
        bubbles: true,
        composed: true });
      this.dispatchEvent(event);
    }
  }

  playerPlayed(x, y) {
    let event = new CustomEvent('player-played', {
      detail: { message: 'player played.', x: x, y: y},
      bubbles: true,
      composed: true });
    this.dispatchEvent(event);

    this.dispatchGameOverIfNecessary();
  }

  playerHitShip(type) {
    let event = new CustomEvent('player-hit', {
      detail: { message: 'player played.', type: type},
      bubbles: true,
      composed: true });
    this.dispatchEvent(event);
  }

  playerSankShip(type) {
    let event = new CustomEvent('player-sank', {
      detail: { message: 'player played.', type: type},
      bubbles: true,
      composed: true });
    this.dispatchEvent(event);
  }

  update() {
    super.update();
    this._submarine = this.shadowRoot.querySelector('#submarine');
    this._destroyer = this.shadowRoot.querySelector('#destroyer');
    this._carrier = this.shadowRoot.querySelector('#carrier');
    this._battleship = this.shadowRoot.querySelector('#battleship');
    this._rescue = this.shadowRoot.querySelector('#rescue');
  }
}