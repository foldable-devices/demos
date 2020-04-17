import { LitElement, html, css as litCSS } from '../web_modules/lit-element.js';
import { adjustCSS, observe } from "../web_modules/spanning-css-polyfill.js";
import "./player-grid.js";
import "./enemy-grid.js";
import "./infoxbox.js";
import "./dialogbox.js";

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "main-application");
  return litCSS([string], ...values);
};

const alphabeticalCells = ['', 'A', 'B', 'C', 'D' ,'E', 'F', 'G', 'H', 'I', 'J'];

export class MainApplication extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
      height: 100vh;
      font-family: 'Bangers', sans-serif;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100vw;
      height: 100vh;
    }

    .stripes {
      height: 250px;
      width: 200px;
      background-size: 40px 40px;
    }

    .angled {
      background-color: #737373;
      background-image:
        linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
        transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
        transparent 75%, transparent);
    }

    .fold {
      height: 100vh;
      width: 15px;
    }

    .enemy-fleet {
      background-image: url("images/ocean.png");
      width: 50%;
      height: 100%;
    }

    .fleet {
      background-image: url("images/ocean.png");
      width: 50%;
      height: 100%;
    }

    @media (spanning: single-fold-vertical) {
      .fold {
        height: env(fold-height);
        width: env(fold-width);
      }

      .content {
        flex-direction: row;
      }

      .enemy-fleet {
        width: env(fold-left);
        height: 100vh;
      }

      .fleet {
        height: 100vh;
        width: calc(100vw - env(fold-left) - env(fold-width));
      }
    }

    @media (spanning: single-fold-horizontal) {
      .fold {
        height: env(fold-height);
        width: env(fold-width);
      }

      .content {
        flex-direction: column;
      }

      .enemy-fleet {
        height: var(--zenbook-span2-height, env(fold-top));
        width: 100vw;
      }

      .fleet {
        width: 100vw;
        height: var(--zenbook-span1-height, calc(100vh - env(fold-top) - env(fold-height)));
      }
    }

    @media (spanning: none) {
      .fold {
        height: 100vh;
        width: 15px;
      }

      .content {
        flex-direction: row;
      }

      .blocked {
        pointer-events:none;
      }
    }
  `;

  _timeBetweenRounds = 1500;

  firstUpdated() {
    this._enemyGrid = this.shadowRoot.querySelector('#enemy-grid');
    this._playerGrid = this.shadowRoot.querySelector('#player-grid');
    this._infobox = this.shadowRoot.querySelector('#infobox');
    this._dialogbox = this.shadowRoot.querySelector('#dialogbox');
  }

  constructor() {
    super();
    this._round = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    observe(this);
  }

  playerPlayed() {
    this._enemyGrid.classList.add('blocked');
    this._infobox.showMessage('You missed!');
    setTimeout( () => this._playerGrid.enemyShootRandomly(), this._timeBetweenRounds);
    this._round++;
  }

  enemyPlayed(event) {
    this._infobox.showMessage('I shot at ' + alphabeticalCells[event.detail.x] + '-' + event.detail.y);
    setTimeout( () => this.nextPlayerTurn(), this._timeBetweenRounds);
  }

  nextPlayerTurn() {
    this._infobox.showMessage('Your turn...');
    this._enemyGrid.classList.remove('blocked');
  }

  playerHit(event) {
    this._infobox.showMessage('You hit my ' + event.detail.type + '!<br> Shoot again.');
  }

  playerSank(event) {
    this._infobox.showMessage('You sank my ' + event.detail.type + ' :( !<br> Shoot again.');
  }

  enemyHit(event) {
    this._infobox.showMessage('Ah! I hit your ' + event.detail.type + '!<br> I\'ll shoot again.');
  }

  enemySank(event) {
    this._infobox.showMessage('Sank your ' + event.detail.type + '!<br> I\'ll shoot again.');
  }

  playerWin() {
    this._enemyGrid.classList.add('blocked');
    this._dialogbox.showMessage('You won!');
  }

  playerLost() {
    this._enemyGrid.classList.add('blocked');
    this._dialogbox.showMessage('You lost!');
  }

  render() {
    return html`
      <div class="content">
        <div class="enemy-fleet">
          <enemy-grid id="enemy-grid" @player-played=${this.playerPlayed} @player-sank=${this.playerSank} @player-hit=${this.playerHit} @game-over=${this.playerWin}></enemy-grid>
        </div>
        <div class="fold angled stripes"></div>
        <div class="fleet">
          <player-grid id="player-grid" @player-played=${this.enemyPlayed} @game-over=${this.playerLost} @player-hit=${this.enemyHit} @player-sank=${this.enemySank}></player-grid>
        </div>
      </div>
      <info-box id="infobox"></info-box>
      <dialog-box id="dialogbox"></dialog-box>
    `;
  }
}

customElements.define("main-application", MainApplication);