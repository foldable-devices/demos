import { LitElement, html, css } from '../build/web_modules/lit-element.js';

export const Orientation = {
  Horizontal: 'horizontal',
  Vertical: 'vertical'
};

export const ShipType = {
  Submarine: 'submarine',
  Carrier: 'carrier',
  Rescue: 'rescue',
  Battleship: 'battleship',
  Destroyer: 'destroyer'
};

export function getShipSize(type)  {
  switch(type) {
    case ShipType.Submarine:
      return 3;
    case ShipType.Carrier:
      return 5;
    case ShipType.Battleship:
      return 4;
    case ShipType.Destroyer:
      return 3;
    case ShipType.Rescue:
      return 2;
    default:
      return 0;
  }
}


export class Ship extends LitElement {
  static styles = css`
    :host {
      overflow: hidden;
      position: relative;
      border: var(--my-ship-border);

      --x: 0;
      --y: 0;
      --size: 0;
      --my-ship-border: solid 2px #910101;
    }

    :host(.horizontal) {
      grid-column-start: var(--y);
      grid-column-end: calc(var(--y) + var(--size));
      grid-row-start: var(--x);
      grid-row-end: var(--x);
    }

    :host(.vertical) {
      grid-column-start: var(--y);
      grid-column-end: var(--y);
      grid-row-start: var(--x);
      grid-row-end: calc(var(--x) + var(--size));
    }

    img {
      max-width: 100%;
      max-height: 100%;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .cell {
      border: var(--my-ship-border);
      border-style: dotted;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
    }


    .hit-area {
      height: 2vw;
      width: 2vw;
      background-color: black;
      border-radius: 50%;
      z-index: 3;
      opacity: 0.85;
    }

    .hit {
      background-color: red;
    }

    .hit-zone {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      height: 100%;
    }

    .hit-zone-vertical {
      flex-direction: column;
    }
  `;

  static get properties() {
    return { type: { type: String, reflectToAttribute: true, attribute: true},
             orientation: { type: String, reflectToAttribute: true, attribute: true },
             x: { type: Number, reflectToAttribute: true, attribute: true },
             y: { type: Number, reflectToAttribute: true, attribute: true },
            size: { type: Number},
            hitCount: { type: Number},
            destroyed: {type: Boolean, reflectToAttribute: true, attribute: true }
          };
  }

  set type(type) {
    let oldType = this._type;
    this._type = type;
    this.requestUpdate('type', oldType);
    this.size = getShipSize(this._type);
    this.shadowRoot.host.style.setProperty('--size', this._size);
  }

  get type() { return this._type; }

  set destroyed(isDestroyed) {
    let oldVal = this._destroyed;
    this._destroyed = isDestroyed;
    this.requestUpdate('destroyed', oldVal);
  }

  get destroyed() { return this._destroyed; }

  set hitCount(hitCount) {
    let oldVal = this._hitCount;
    this._hitCount = hitCount;
    this.requestUpdate('hitCount', oldVal);
  }

  get hitCount() { return this._hitCount; }

  set orientation(orientation) {
    let oldOrientation = this._orientation;
    this._orientation = orientation;
    this.requestUpdate('orientation', oldOrientation);
    if (orientation == Orientation.Horizontal) {
      this.shadowRoot.host.classList.add('horizontal');
      this.shadowRoot.host.classList.remove('vertical');
    } else {
      this.shadowRoot.host.classList.remove('horizontal');
      this.shadowRoot.host.classList.add('vertical');
    }
  }

  get orientation() { return this._orientation; }

  set x(x) {
    let oldX = this._x;
    this._x = x;
    this.requestUpdate('x', oldX);
    // +1 because grid do not start at 0.
    this.shadowRoot.host.style.setProperty('--x', this.x + 1);
  }

  get x() { return this._x; }

  set y(y) {
    let oldY = this._y;
    this._y = y;
    this.requestUpdate('y', oldY);
    // +1 because grid do not start at 0.
    this.shadowRoot.host.style.setProperty('--y', y + 1);
  }

  get y() { return this._y; }

  set size(size) {
    let oldSize = this._size;
    this._size = size;
    this.requestUpdate('size', oldSize);
    this.shadowRoot.host.style.setProperty('--size', this._size);
  }

  get size() { return this._size; }

  _image;

  firstUpdated() {
    this._image = this.shadowRoot.querySelector('#image');
    this.size = getShipSize(this._type);
  }

  constructor() {
    super();
    this._x = 0;
    this._y = 0;
    this._orientation = Orientation.Horizontal;
    this._type = ShipType.Submarine;
    this._size = 0;
    this._destroyed = false;
    this._hitCount = 0;
  }

  reset() {
    Array.from({ length: this.size }).map((_, pos) => {
      const hitArea = this.shadowRoot.querySelector('#hit-' + pos);
      hitArea.classList.remove('hit');
    });
    this.hitCount = 0;
    this.destroyed = false;
  }

  enemyShootAt(x, y) {
    let hitZoneId;
    if (this.orientation === Orientation.Horizontal) {
      hitZoneId = y - this.y;
   } else {
      hitZoneId = x - this.x;
   }
   const hitArea = this.shadowRoot.querySelector('#hit-' + hitZoneId);
   hitArea.classList.add('hit');
   this.hitCount++;
   if (this.hitCount === this.size)
      this.shipDestroyed();
   else
      this.shipHit();
  }

  shipDestroyed() {
    this.destroyed = true;
    let event = new CustomEvent('ship-destroyed', {
      detail: { message: 'Ship Destroyed', type: this.type },
      bubbles: true,
      composed: true });
    this.dispatchEvent(event);
  }

  shipHit() {
    let event = new CustomEvent('ship-hit', {
      detail: { message: 'Ship Hit', type: this.type },
      bubbles: true,
      composed: true });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="hit-zone ${this.orientation === Orientation.Horizontal?
                            "hit-zone-horizontal":
                            "hit-zone-vertical"}">
        ${Array.from({ length: this.size }).map((_, pos) => html`
            <div class="cell"><div class="hit-area" id="hit-${pos}"></div></div>
        `)}
      </div>
      <picture>
          <source srcset="images/${this.type}-top-${this.orientation}.webp" type="image/webp">
          <img id="image" src="images/${this.type}-top-${this.orientation}.png" alt="${this.type}"/>
      </picture>
    `;
  }
}
customElements.define("ship-element", Ship);