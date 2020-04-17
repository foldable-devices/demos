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

  firstUpdated() {
    super.firstUpdated();
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
      this.shadowRoot.querySelector('#image').style.display = 'inline';
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
      <img id="image" src="images/${this.type}-top-${this.orientation}.png"/>
    `;
  }
}
customElements.define("enemy-ship", EnemyShip);