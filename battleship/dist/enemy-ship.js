function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import { html, css } from '../web_modules/lit-element.js';
import * as Ship from './ship.js';
export class EnemyShip extends Ship.Ship {
  firstUpdated() {
    super.firstUpdated();
    this._image = this.shadowRoot.querySelector('#image');
  }

  reset() {
    Array.from({
      length: this.size
    }).map((_, pos) => {
      const hitArea = this.shadowRoot.querySelector('#hit-' + pos);
      hitArea.style.visibility = 'hidden';
    });
    this.hitCount = 0;
    this._image.style.display = 'none';
  }

  shootAt(pos) {
    let hitArea = this.shadowRoot.querySelector('#hit-' + pos); // Already shot.

    if (hitArea.style.visibility === 'visible' && hitArea.style.visibility != '') return;
    this.hitCount = this.hitCount + 1;
    hitArea.style.visibility = 'visible';
    this.shipHit();

    if (this.hitCount === this.size) {
      this._image.style.display = 'inline';
      this.shipDestroyed();
    }
  }

  constructor() {
    super();

    _defineProperty(this, "_image", void 0);
  }

  render() {
    return html`
      <div class="hit-zone ${this.orientation === Ship.Orientation.Horizontal ? "hit-zone-horizontal" : "hit-zone-vertical"}">
        ${Array.from({
      length: this.size
    }).map((_, pos) => {
      return html`
            <div class="cell" @click="${() => this.shootAt(pos)}"><div class="hit-area" id="hit-${pos}"></div></div>
        `;
    })}
      </div>
      <picture>
          <source srcset="images/${this.type}-top-${this.orientation}.webp" type="image/webp">
          <img id="image" src="images/${this.type}-top-${this.orientation}.png" alt="${this.type}"/>
      </picture>
    `;
  }

}

_defineProperty(EnemyShip, "styles", [_get(_getPrototypeOf(EnemyShip), "styles", EnemyShip), css`
    :host {
      border: 0;
    }

    .cell {
      border: var(--border-grid);
    }

    .hit-area {
      visibility: hidden;
      background-color: red;
    }

    img {
      display: none;
      opacity: 0.7;
    }
`]);

customElements.define("enemy-ship", EnemyShip);