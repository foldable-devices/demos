import { html, css } from '../web_modules/lit-element.js';
import { GameGrid } from './game-grid.js';
import './enemy-ship.js';

export class EnemyGrid extends GameGrid {
  static styles = [super.styles, css`
    .cell {
      cursor:pointer;
    }
  `];

  firstUpdated() {
    super.firstUpdated();
    this.generateRandomGrid();
  }

  constructor() {
    super();
  }

  fireAt(x, y) {
    let element = this.grid[x][y];
    if (this.isShip(element) || element.text != '')
      return;
    if (element.shoot === true) {
      // TODO : Show a dialog.
      console.log('You shot there already.');
      return;
    }
    this.shadowRoot.querySelector('#hit-' + x + '-' + y).style.display = 'block';
    element.shoot = true;
    this.playerPlayed(x, y);
  }

  shipDestroyed() {
    this.dispatchGameOverIfNecessary();
  }

  render() {
    return html`
      <div class="grid">
        <div class="title">Enemy's fleet</div>
          ${this._grid.map((row, x) =>
            row.map((cell, y) => {
                if (this.isShip(this._grid[x][y])) {
                  if(!this.isShipPlaced(cell.type)) {
                    this._shipPlaced.push(cell.type);
                    return html`
                      <enemy-ship id="${cell.type}" x="${cell.x}" y="${cell.y}"
                        type="${cell.type}" orientation="${cell.orientation}" @ship-destroyed="${this.shipDestroyed}">
                      </enemy-ship>`
                  }
                } else
                  return html`
                    <div class="cell" id="${x}-${y}" @click="${() => this.fireAt(x, y)}">
                      ${cell.text}
                      <div class="hit-water-area" id="hit-${x}-${y}"></div>
                    </div>`
              })
          )}
      </div>
    `;
  }
}

customElements.define("enemy-grid", EnemyGrid);