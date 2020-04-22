import { html, css } from '../web_modules/lit-element.js';
import * as Ship from './ship.js';

export class EnemyShip extends Ship.Ship {
  static styles = [super.styles, css`
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
`];

  _image;

  firstUpdated() {
    super.firstUpdated();
    this._image = this.shadowRoot.querySelector('#image')
  }

  reset() {
    Array.from({ length: this.size }).map((_, pos) => {
      const hitArea = this.shadowRoot.querySelector('#hit-' + pos);
      hitArea.style.visibility = 'hidden';
    });
    this.hitCount = 0;
    this._image.style.display = 'none';
  }

  shootAt(pos) {
    let hitArea = this.shadowRoot.querySelector('#hit-' + pos);
    // Already shot.
    if (hitArea.style.visibility === 'visible' && hitArea.style.visibility != '')
      return;
    this.hitCount = this.hitCount + 1;
    hitArea.style.visibility = 'visible';
    this.shipHit()
    if (this.hitCount === this.size) {
      this._image.style.display = 'inline';
      this.shipDestroyed();
    }
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="hit-zone ${this.orientation === Ship.Orientation.Horizontal?
                            "hit-zone-horizontal":
                            "hit-zone-vertical"}">
        ${Array.from({ length: this.size }).map((_, pos) => { return html`
            <div class="cell" @click="${() => this.shootAt(pos)}"><div class="hit-area" id="hit-${pos}"></div></div>
        `})}
      </div>
      <picture>
          <source srcset="images/${this.type}-top-${this.orientation}.webp" type="image/webp">
          <img id="image" src="images/${this.type}-top-${this.orientation}.png" alt="${this.type}"/>
      </picture>
    `;
  }
}
customElements.define("enemy-ship", EnemyShip);