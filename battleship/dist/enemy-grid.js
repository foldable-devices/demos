function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import { html, css } from '../build/web_modules/lit-element.js';
import { GameGrid } from './game-grid.js';
import './enemy-ship.js';
export class EnemyGrid extends GameGrid {
  firstUpdated() {
    super.firstUpdated();
    this.generateRandomGrid();
  }

  constructor() {
    super();
  }

  fireAt(x, y) {
    let element = this.grid[x][y];
    if (this.isShip(element) || element.text != '') return;

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
          ${this.grid.map((row, x) => row.map((cell, y) => {
      if (this.isShip(this.grid[x][y])) {
        if (!this.isShipPlaced(cell.type)) {
          this._shipPlaced.push(cell.type);

          return html`
                      <enemy-ship id="${cell.type}" x="${cell.x}" y="${cell.y}"
                        type="${cell.type}" orientation="${cell.orientation}" @ship-destroyed="${this.shipDestroyed}"
                        @ship-hit="${this.shipHit}">
                      </enemy-ship>`;
        }
      } else return html`<empty-cell ?hit="${cell.shot}" @click="${() => this.fireAt(x, y)}">${cell.text}</empty-cell>`;
    }))}
      </div>
    `;
  }

}

_defineProperty(EnemyGrid, "styles", [_get(_getPrototypeOf(EnemyGrid), "styles", EnemyGrid), css`
    .cell {
      cursor:pointer;
    }
  `]);

customElements.define("enemy-grid", EnemyGrid);