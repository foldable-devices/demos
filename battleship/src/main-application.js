import { LitElement, html, css as litCSS } from 'lit';
import { adjustCSS, observe } from "spanning-css-polyfill";
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-snackbar';
import "./player-grid.js";
import "./enemy-grid.js";
import "./howto.js";
import "./infoxbox.js";
import "./dialogbox.js";
import "./rotatebox.js";
import '@material/mwc-snackbar';
import 'foldable-device-configurator';
import { Workbox, messageSW} from 'workbox-window';

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
      z-index: 2;
      visibility: hidden;
    }

    .enemy-fleet {
      width: 50%;
      height: 100%;
      z-index: 1;
      visibility: hidden;
    }

    .fleet {
      width: 50%;
      height: 100%;
      z-index: 1;
      visibility: hidden;
    }

    mwc-snackbar {
      --mdc-snackbar-action-color: #2d89ef;
    }

    #infobox {
      visibility: hidden;
    }

    .menu-button {
      width: 80%;
      display: block;
      margin: auto;
    }

    how-to-screen {
      visibility: hidden;
    }

    @media all and (orientation:portrait) {
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
      .background {
        z-index: 0;
      }
    }

    @media (screen-spanning: single-fold-vertical) {
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
      }

      .fleet {
        height: 100%;
        width: calc(100vw - env(fold-left) - env(fold-width));
      }

      .background {
        z-index: 0;
      }
   }

    @media (screen-spanning: single-fold-horizontal) {
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
        flex-grow: 0;
        flex-shrink: 0;
      }

      .fleet {
        width: 100%;
        height: var(--zenbook-span1-height, calc(100vh - env(fold-top) - env(fold-height)));
      }

      .background {
        z-index: 0;
      }
    }

    @media (screen-spanning: none) and (orientation:landscape) {
      .fold {
        height: 100%;
        width: 15px;
      }

      .content {
        flex-direction: row;
      }

      .blocked {
        pointer-events: none;
      }
    }

    @media (screen-spanning: none) and (orientation:portrait) {
      .background {
        z-index: 4;
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
  `;

  _timeBetweenRounds = 1500;
  _snackbar;
  _playMessage;
  _playing = false;
  _wb;
  _wbRegistration = undefined;

  firstUpdated() {
    this._enemyGrid = this.shadowRoot.querySelector('#enemy-grid');
    this._playerGrid = this.shadowRoot.querySelector('#player-grid');
    this._playMessage = this.shadowRoot.querySelector('#play-message');
    this._endGameMenu = this.shadowRoot.querySelector('#end-game-menu');
    this._welcomeMenu = this.shadowRoot.querySelector('#welcome-menu');
    this._endGameMessage = this.shadowRoot.querySelector('#end-game-message');
    this._endGameTitle = this.shadowRoot.querySelector('#end-game-title');
    this._welcomeMenu.open();
    this._snackbar = this.shadowRoot.querySelector('#snackbar');
    this._infobox = this.shadowRoot.querySelector('#infobox');
    this._fullscreenRotate = this.shadowRoot.querySelector('#fullscreen-rotate');
    this._fullscreenRotate.hide();
    this._howTo = this.shadowRoot.querySelector('#how-to');

    this._snackbar.addEventListener('MDCSnackbar:closed', event => {
      if (event.detail.reason === "action") {
        this._wb.addEventListener('controlling', () => {
          window.location.reload();
          this._wbRegistration = undefined;
        });
        // Send a message to the waiting service worker instructing
        // it to skip waiting, which will trigger the `controlling`
        // event listener above.
        if (this._wbRegistration && this._wbRegistration.waiting) {
          messageSW(this._wbRegistration.waiting, {type: 'SKIP_WAITING'})
        }
      }
    });

    // Check that service workers are supported
    if ('serviceWorker' in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener('load', async () => {
        this._wb = new Workbox('./sw.js');
        this._wb.addEventListener('waiting', () => this._showSnackbar());
        this._wb.addEventListener('externalwaiting', () => this._showSnackbar());
        this._wbRegistration = await this._wb.register();
      });
    }
  }

  constructor() {
    super();
    this._round = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    observe(this);
  }

  _showSnackbar() {
    this._snackbar.show();
  }

  _deviceSupportsSpanningMQs() {
    const hasBrowserSupport =
      window.matchMedia('(screen-spanning: single-fold-horizontal)').matches ||
      window.matchMedia('(screen-spanning: single-fold-vertical)').matches ||
      window.matchMedia('(screen-spanning: none)').matches || false;
    return hasBrowserSupport;
  }

  startGame() {
    if (this._deviceSupportsSpanningMQs()) {
      this._fullscreenRotate.setLabel('Ahoy Captain!<br>Please rotate your device to play. \
                                <br> You can also span the window to play.');
    }
    this._fullscreenRotate.show();
    this._welcomeMenu.close();
    this._enemyGrid.classList.remove('blocked');
    this._playerGrid.style.visibility = 'visible';
    this._enemyGrid.style.visibility = 'visible';
    this._infobox.style.visibility = 'visible';
    this._playing = true;
  }

  restartGame() {
    this._round = 0;
    this._enemyGrid.classList.remove('blocked');
    this._enemyGrid.restart();
    this._playerGrid.restart();
    this._playMessage.innerHTML = 'Let\'s get started, fire first.';
    this._endGameMenu.close();
    this.startGame();
  }

  showHowTo() {
    this._welcomeMenu.close();
    this._endGameMenu.close();
    this._howTo.style.visibility = 'visible';
  }

  closeHowTo() {
    if (this._round > 0)
      this._endGameMenu.open();
    else
      this._welcomeMenu.open();
    this._howTo.style.visibility = 'hidden';
  }

  playerPlayed() {
    this._enemyGrid.classList.add('blocked');
    this._playMessage.innerHTML = 'You missed!';
    setTimeout( () => this._playerGrid.enemyShoot(), this._timeBetweenRounds);
    this._round++;
  }

  enemyPlayed(event) {
    this._playMessage.innerHTML = 'I shot at ' + alphabeticalCells[event.detail.x] + '-' + event.detail.y;
    setTimeout( () => this.nextPlayerTurn(), this._timeBetweenRounds);
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
    this._playMessage.innerHTML = 'I sank your ' + event.detail.type + '!<br> I\'ll shoot again.';
  }

  playerWin() {
    this._playing = false;
    this._fullscreenRotate.hide();
    this._enemyGrid.classList.add('blocked');
    this._endGameTitle.innerHTML = 'You won!';
    this._endGameMessage.innerHTML = 'You defeated your enemy in ' + this._round + ' rounds.';
    this._endGameMenu.open();
    this._playMessage.innerHTML = 'Oh no :(, you won...';
  }

  playerLost() {
    this._playing = false;
    this._fullscreenRotate.hide();
    this._enemyGrid.classList.add('blocked');
    this._endGameTitle.innerHTML = 'You won!';
    this._endGameMessage.innerHTML = 'Your enemy defeated you in ' + this._round + ' rounds.';
    this._endGameMenu.open();
    this._playMessage.innerHTML = 'Yeah, I won!';
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
      <dialog-box id="welcome-menu">
        <div slot="title">Welcome to FoldShip!</div>
        <picture class="menu-picture" slot="menu-1">
          <source srcset="images/new-game-button.webp" type="image/webp">
          <img class="menu-button" src="images/new-game-button.png" @click="${this.startGame}"/>
        </picture>
        <picture class="menu-picture" slot="menu-2">
          <source srcset="images/how-to-button.webp" type="image/webp">
          <img class="menu-button" src="images/how-to-button.png" @click="${this.showHowTo}"/>
        </picture>
      </dialog-box>
      <dialog-box id="end-game-menu">
        <div slot="title" id="end-game-title">You won!</div>
        <div slot="label" id="end-game-message">You won!</div>
        <picture class="menu-picture" slot="menu-1">
          <source srcset="images/restart-button.webp" type="image/webp">
          <img class="menu-button" src="images/restart-button.png" @click="${this.restartGame}"/>
        </picture>
        <picture class="menu-picture" slot="menu-2">
          <source srcset="images/how-to-button.webp" type="image/webp">
          <img class="menu-button" src="images/how-to-button.png" @click="${this.showHowTo}"/>
        </picture>
      </dialog-box>
      <mwc-snackbar id="snackbar" labelText="A newer version of the application is available." leading>
        <mwc-button slot="action">RELOAD</mwc-button>
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
      <how-to-screen id="how-to" @howto-closed="${this.closeHowTo}"></how-to-screen>
      <rotate-box id="fullscreen-rotate"></rotate-box>
    `;
  }
}

customElements.define("main-application", MainApplication);