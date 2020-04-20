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
    if (element.shot === true) {
      // TODO : Show a dialog.
      console.log('You shot there already.');
      return;
    }
    element.shot = true;
    this.updateGrid();
    this.playerPlayed(x, y);
  }

  shipDestroyed(event) {
    this.playerSankShip(event.detail.type);
    this.dispatchGameOverIfNecessary();
  }

  shipHit(event) {
    this.playerHitShip(event.detail.type);
  }

  render() {
    return html`
      <div class="title">Enemy's fleet</div>
      <div class="grid">
          ${this.grid.map((row, x) =>
            row.map((cell, y) => {
                if (this.isShip(this.grid[x][y])) {
                  if(!this.isShipPlaced(cell.type)) {
                    this._shipPlaced.push(cell.type);
                    return html`
                      <enemy-ship id="${cell.type}" x="${cell.x}" y="${cell.y}"
                        type="${cell.type}" orientation="${cell.orientation}" @ship-destroyed="${this.shipDestroyed}"
                        @ship-hit="${this.shipHit}">
                      </enemy-ship>`
                  }
                } else
                  return html`<empty-cell ?hit="${cell.shot}" @click="${() => this.fireAt(x, y)}">${cell.text}</empty-cell>`;
              })
          )}
      </div>
    `;
  }
}

customElements.define("enemy-grid", EnemyGrid);