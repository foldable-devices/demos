import { html, css } from '../web_modules/lit-element.js';
import { GameGrid } from './game-grid.js';

export class PlayerGrid extends GameGrid {
  static styles = [super.styles, css`
    :host {
      pointer-events:none;
    }
  `];

  firstUpdated() {
    this.generateRandomGrid();
  }

  constructor() {
    super();
    this._previousShot = {x: 0, y: 0};
  }

  enemyShootRandomly() {
    let x;
    let y;
    if (this._previousShot.x != 0 && this._previousShot.y != 0) {
      //Successful shot, we'll try around.
      const leftCell = {x: this._previousShot.x, y: Math.max(this._previousShot.y - 1, 1)};
      const leftCandidate = this._grid[leftCell.x][leftCell.y].shot === false;
      const rightCell = {x: this._previousShot.x, y: Math.min(this._previousShot.y + 1, 10)};
      const rightCandidate = this._grid[rightCell.x][rightCell.y].shot === false;
      const topCell = {x: Math.max(this._previousShot.x - 1, 1), y: this._previousShot.y};
      const topCandidate = this._grid[topCell.x][topCell.y].shot === false;
      const bottomCell = {x: Math.min(this._previousShot.x + 1, 10), y: this._previousShot.y};
      const bottomCandidate = this._grid[bottomCell.x][bottomCell.y].shot === false;
      const tryVertical = Math.random() >= 0.5;
      if (tryVertical && (topCandidate || bottomCandidate)) {
        if (topCandidate && bottomCandidate) {
          const top = Math.random() >= 0.5;
          if (top)
            x = topCell.x;
          else
            x = bottomCell.x;
        } else if (topCandidate)
          x = topCell.x;
        else if (bottomCandidate)
          x = bottomCell.x;
        y = this._previousShot.y;
      } else {
        if (leftCandidate && rightCandidate) {
          const left = Math.random() >= 0.5;
          if (left)
            y = leftCell.y;
          else
            y = rightCell.y;
        } else if (rightCandidate)
          y = rightCell.y;
        else if (leftCandidate)
          y = leftCell.y;
        x = this._previousShot.x;
      }
      if (x === undefined || y === undefined) {
        x = this.getRandomCoordinate();
        y = this.getRandomCoordinate();
      }
    } else {
      x = this.getRandomCoordinate();
      y = this.getRandomCoordinate();
    }
    if (this._grid[x][y].shot === true) {
      this.enemyShootRandomly();
    }

    if(this.isShip(this._grid[x][y])) {
      //Fire at the boat.
      const ship = this.shadowRoot.querySelector('#' + this._grid[x][y].type);
      ship.enemyShootAt(x, y);
      this._grid[x][y].shot = true;
      this._previousShot = {x: x, y: y};
      this.playerHitShip(ship.type);
      setTimeout( () => this.enemyShootRandomly(), 2000);
      return;
    } else {
      const hitArea = this.shadowRoot.querySelector('#hit-' + x + '-' + y);
      hitArea.style.display = 'block';
    }
    this._grid[x][y].shot = true;
    this.playerPlayed(x, y);
  }

  shipDestroyed(event) {
    this._previousShot = {x: 0, y: 0};
    this.playerSankShip(event.detail.type);
  }

  render() {
    return html`
      <div class="title">Your fleet</div>
      <div class="grid">
          ${this._grid.map((row, x) =>
            row.map((cell, y) => {
                if (this.isShip(this._grid[x][y])) {
                  if(!this.isShipPlaced(cell.type)) {
                    this._shipPlaced.push(cell.type);
                    return html`
                      <ship-element id="${cell.type}" x="${cell.x}" y="${cell.y}"
                        type="${cell.type}" orientation="${cell.orientation}" @ship-destroyed="${this.shipDestroyed}">
                      </ship-element>`
                  }
                } else
                  return html`<div class="cell" id="${x}-${y}">
                    ${cell.text}
                    <div class="hit-water-area" id="hit-${x}-${y}"></div>
                  </div>`
              })
          )}
      </div>
    `;
  }
}

customElements.define("player-grid", PlayerGrid);