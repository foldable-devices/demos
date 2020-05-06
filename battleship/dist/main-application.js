function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { LitElement, html, css as litCSS } from '../web_modules/lit-element.js';
import { adjustCSS, observe } from "../web_modules/spanning-css-polyfill.js";
import '../web_modules/@material/mwc-button.js';
import '../web_modules/@material/mwc-icon-button.js';
import '../web_modules/@material/mwc-snackbar.js';
import "./player-grid.js";
import "./enemy-grid.js";
import "./infoxbox.js";
import "./dialogbox.js";
import '../web_modules/@material/mwc-snackbar.js';
import { Workbox, messageSW } from '../web_modules/workbox-window.js';

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "main-application");
  return litCSS([string], ...values);
};

const alphabeticalCells = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
export class MainApplication extends LitElement {
  firstUpdated() {
    this._enemyGrid = this.shadowRoot.querySelector('#enemy-grid');
    this._playerGrid = this.shadowRoot.querySelector('#player-grid');
    this._playMessage = this.shadowRoot.querySelector('#play-message');
    this._dialogbox = this.shadowRoot.querySelector('#dialogbox');
    this._snackbar = this.shadowRoot.querySelector('#snackbar');

    this._snackbar.addEventListener('MDCSnackbar:closed', event => {
      if (event.detail.reason === "action") {
        this._wb.addEventListener('controlling', () => {
          window.location.reload();
          this._newSW = undefined;
        }); // Send a message to the waiting service worker instructing
        // it to skip waiting, which will trigger the `controlling`
        // event listener above.


        if (this._newSW) messageSW(this._newSW, {
          type: 'SKIP_WAITING'
        });
      }
    }); // Check that service workers are supported


    if ('serviceWorker' in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener('load', () => {
        this._wb = new Workbox('./sw.js');

        this._wb.addEventListener('waiting', event => this._showSnackbar(event));

        this._wb.addEventListener('externalwaiting', event => this._showSnackbar(event));

        this._wb.register();
      });
    }
  }

  constructor() {
    super();

    _defineProperty(this, "_timeBetweenRounds", 1500);

    _defineProperty(this, "_snackbar", void 0);

    _defineProperty(this, "_playMessage", void 0);

    _defineProperty(this, "_wb", void 0);

    _defineProperty(this, "_newSW", undefined);

    this._round = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    observe(this);
  }

  _showSnackbar(event) {
    if (event.originalEvent) this._newSW = event.originalEvent.currentTarget;

    this._snackbar.open();
  }

  restartGame() {
    this._round = 0;

    this._enemyGrid.classList.remove('blocked');

    this._enemyGrid.restart();

    this._playerGrid.restart();

    this._playMessage.innerHTML = 'Let\'s get started, fire first.';
  }

  playerPlayed() {
    this._enemyGrid.classList.add('blocked');

    this._playMessage.innerHTML = 'You missed!';
    setTimeout(() => this._playerGrid.enemyShoot(), this._timeBetweenRounds);
    this._round++;
  }

  enemyPlayed(event) {
    this._playMessage.innerHTML = 'I shot at ' + alphabeticalCells[event.detail.x] + '-' + event.detail.y;
    setTimeout(() => this.nextPlayerTurn(), this._timeBetweenRounds);
  }

  nextPlayerTurn() {
    this._playMessage.innerHTML = 'Your turn...';

    this._enemyGrid.classList.remove('blocked');
  }

  playerHit(event) {
    this._playMessage.innerHTML = 'You hit my ' + event.detail.type + '!<br> Shoot again.';
  }

  playerSank(event) {
    this._playMessage.innerHTML = 'You sank my ' + event.detail.type + ' :( !<br> Shoot again.';
  }

  enemyHit(event) {
    this._playMessage.innerHTML = 'Ah! I hit your ' + event.detail.type + '!<br> I\'ll shoot again.';
  }

  enemySank(event) {
    this._playMessage.innerHTML = 'Sank your ' + event.detail.type + '!<br> I\'ll shoot again.';
  }

  playerWin() {
    this._enemyGrid.classList.add('blocked');

    this._playMessage.innerHTML = 'You won! <br> You defeated your enemy in ' + this._round + ' rounds.';
  }

  playerLost() {
    this._enemyGrid.classList.add('blocked');

    this._playMessage.innerHTML = 'You lost! <br> Your enemy defeated you in ' + this._round + ' rounds.';
  }

  render() {
    return html`
      <div class="content">
        <picture>
          <source media="(max-width: 767px)"
                  srcset="images/ocean-412.webp 412w, images/ocean-768.webp 768w, images/ocean-800.webp 800w"
                  sizes="(max-width: 767px) 412px, 768px, 800px" type="image/webp"/>
          <source media="(max-width: 767px)"
                  srcset="images/ocean-412.jpg 412w, images/ocean-768.jpg 768w, images/ocean-800.jpg 800w"
                  sizes="(max-width: 767px) 412px, 768px, 800px" type="image/jpeg"/>
          <source media="(max-width: 1366px)"
                  srcset="images/ocean-1024.webp 1024w, images/ocean-1366.webp 1366w"
                  sizes="(max-width: 1366px) 1024px, 1366px" type="image/webp"/>
          <source media="(max-width: 1366px)"
                  srcset="images/ocean-1024.jpg 1024w, images/ocean-1366.jpg 1366w"
                  sizes="(max-width: 1366px) 1024px, 1366px" type="image/jpeg"/>
          <source media="(max-width: 1440px)"
                  srcset="images/ocean-1440.webp 1440w, images/ocean-1366.webp 1366w"
                  sizes="(max-width: 1440px) 1440px, 1366px" type="image/webp"/>
          <source media="(max-width: 1440px)"
                  srcset="images/ocean-1440.jpg 1440w, images/ocean-1366.jpg 1366w"
                  sizes="(max-width: 1440px) 1440px, 1366px" type="image/jpeg"/>
          <source media="(max-width: 1920px)"
                  srcset="images/ocean-1920.webp 1920w, images/ocean-1440.webp 1440w"
                  sizes="(max-width: 1920px) 1920px, 1440px" type="image/webp"/>
          <source media="(max-width: 1920px)"
                  srcset="images/ocean-1920.jpg 1920w, images/ocean-1440.jpg 1440w"
                  sizes="(max-width: 1920px) 1920px, 1440px" type="image/jpeg"/>
          <source media="(min-width: 1920px)"
                  srcset="images/ocean-4k.webp 2560w, images/ocean-1920.webp 1920w"
                  sizes="(max-width: 1920px) 2560px, 1920px" type="image/webp"/>
          <source media="(min-width: 1920px)"
                  srcset="images/ocean-4k.jpg 2560w, images/ocean-1920.jpg 1920w"
                  sizes="(max-width: 1920px) 2560px, 1920px" type="image/jpeg"/>
          <img class="background" src="images/ocean-1024.jpg" alt="Background of an ocean">
        </picture>
        <div class="enemy-fleet">
          <enemy-grid id="enemy-grid" @player-played=${this.playerPlayed} @player-sank=${this.playerSank} @player-hit=${this.playerHit} @game-over=${this.playerWin}></enemy-grid>
        </div>
        <div class="fold angled stripes"></div>
        <div class="fleet">
          <player-grid id="player-grid" @player-played=${this.enemyPlayed} @game-over=${this.playerLost} @player-hit=${this.enemyHit} @player-sank=${this.enemySank}></player-grid>
        </div>
      </div>
      <info-box id="infobox">
        <div slot="label" id="play-message">Let's get started, fire first.</div>
      </info-box>
      <dialog-box id="dialogbox" @button-clicked=${this.restartGame}></dialog-box>
      <mwc-snackbar id="snackbar" labelText="A newer version of the application is available." leading>
        <mwc-button slot="action">RELOAD</mwc-button>
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
      <div id="fullscreen-rotate">
        <info-box id="rotate-infobox">
          <div slot="label">Ahoy Captain!<br>Please rotate your device to play.</div>
        </info-box>
      </div>
    `;
  }

}

_defineProperty(MainApplication, "styles", css`
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
      width: 100%;
      height: 100%;
    }

    .background {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
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
      height: 100%;
      width: 15px;
    }

    .enemy-fleet {
      width: 50%;
      height: 100%;
    }

    .fleet {
      width: 50%;
      height: 100%;
    }

    mwc-snackbar {
      --mdc-snackbar-action-color: #2d89ef;
    }

    #fullscreen-rotate {
      width: 100%;
      height: 100%;
      z-index: 99;
      position: absolute;
      top: 0;
      left: 0;
    }

    #rotate-infobox {
      width: 70%;
      height: 70%;
      position: absolute;
      top: 15%;
      left: 15%;
      font-size: 2vmax;
      opacity: 1;
    }

    @media all and (orientation:portrait) {
      #fullscreen-rotate {
        display: block;
      }

      .fold {
        visibility: hidden;
      }

      .enemy-fleet {
        visibility: hidden;
      }

      .fleet {
        visibility: hidden;
      }

      #infobox {
        visibility: hidden;
      }
    }

    @media all and (orientation:landscape) {
      #fullscreen-rotate {
        display: none;
      }

      .fold {
        visibility: visible;
      }

      .enemy-fleet {
        visibility: visible;
      }

      .fleet {
        visibility: visible;
      }

      #infobox {
        visibility: visible;
      }
    }

    @media (spanning: single-fold-vertical) {
      .fold {
        height: env(fold-height);
        width: env(fold-width);
        visibility: visible;
      }

      .content {
        flex-direction: row;
      }

      .enemy-fleet {
        width: env(fold-left);
        height: 100%;
        visibility: visible;
      }

      .fleet {
        height: 100%;
        width: calc(100vw - env(fold-left) - env(fold-width));
        visibility: visible;
      }

      #fullscreen-rotate {
        display: none;
      }

      #infobox {
        visibility: visible;
      }
    }

    @media (spanning: single-fold-horizontal) {
      .fold {
        height: env(fold-height);
        width: env(fold-width);
        visibility: visible;
      }

      .content {
        flex-direction: column;
      }

      .enemy-fleet {
        height: var(--zenbook-span2-height, env(fold-top));
        width: 100%;
        visibility: visible;
      }

      .fleet {
        width: 100%;
        height: var(--zenbook-span1-height, calc(100vh - env(fold-top) - env(fold-height)));
        visibility: visible;
      }

      #fullscreen-rotate {
        display: none;
      }

      #infobox {
        visibility: visible;
      }
    }

    @media (spanning: none) and (orientation:landscape) {
      .fold {
        height: 100%;
        width: 15px;
        visibility: visible;
      }

      .content {
        flex-direction: row;
      }

      .enemy-fleet {
        visibility: visible;
      }

      .fleet {
        visibility: visible;
      }

      .blocked {
        pointer-events: none;
      }

      #infobox {
        visibility: visible;
      }
    }

    @media (spanning: none) and (orientation:portrait) {

      #fullscreen-rotate {
        display: block;
      }

      .enemy-fleet {
        visibility: hidden;
      }

      .fleet {
        visibility: hidden;
      }

      .fold {
        visibility: hidden;
      }

      #infobox {
        visibility: hidden;
      }
    }
  `);

customElements.define("main-application", MainApplication);