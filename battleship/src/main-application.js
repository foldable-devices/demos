import { LitElement, html, css as litCSS } from 'lit';
import { adjustCSS, observe } from "viewportsegments-css-polyfill";
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import "./player-grid.js";
import "./enemy-grid.js";
import "./howto.js";
import "./infoxbox.js";
import "./dialogbox.js";
import "./rotatebox.js";
import 'foldable-device-configurator';
import { Workbox, messageSW} from 'workbox-window';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('/demos/foldship/');

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
      --fold-visibility: hidden;
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

    .fold {
      height: 100%;
      width: 15px;
      z-index: 2;
      visibility: hidden;
      background-color: black;
      display: flex;
      align-items: center;
    }

    .fold-content {
      visibility: hidden;
      width: 100%;
      height: 100%;
      background-image: url( 'images/brushed-metal.svg' );
      background-repeat: no-repeat;
    }

    .display {
      background-color: black;
      border-radius: 20px;
      padding: 5px;
      border: solid 2px gray;
    }

    .fold-text {
      color: #e35e20;
      margin-right: 10px;
      font-size: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 10px;
      padding-right: 10px;
    }

    .fold-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }

    .time {
      width: 4ch;
      text-align: center;
    }

    .rounds-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
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


    .alert-sw {
      position: absolute;
      bottom: 3vh;
      right: 1vw;
      z-index: 5;
    }

    .text-sw {
      padding-bottom: 10px;
    }

    .reload {
      margin-left: 5px;
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

    @media (horizontal-viewport-segments: 2) {
      .fold {
        height: env(viewport-segment-height 0 0);
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
        visibility: visible;
      }

      .fold-content {
        flex-direction: column;
      }

      .rounds-container {
        flex-direction: column;
      }

      .instruments {
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0) - 30px);
      }

      .fold-text {
        margin-bottom: 10px;
        margin-right: 0px;
        font-size: 0.9rem;
      }

      .fold-rounds {
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0) - 50px);
      }

      .content {
        flex-direction: row;
      }

      .enemy-fleet {
        width: env(viewport-segment-width 0 0);
        height: 100%;
      }

      .fleet {
        height: 100%;
        width: env(viewport-segment-width 1 0);
      }

      .background {
        z-index: 0;
      }
  }

    @media (vertical-viewport-segments: 2) {
      .fold {
        height: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));
        width: env(viewport-segment-width 0 0);
        visibility: visible;
      }

      .fold-content {
        flex-direction: row;
      }

      .fold-text {
        margin-right: 10px;
        margin-bottom: 0px;
        font-size: 3rem;
      }

      .fold-rounds {
        height: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0) - 55px);
      }

      .instruments {
        height: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0) - 30px);
      }

      .content {
        flex-direction: column;
      }

      .enemy-fleet {
        height: var(--zenbook-span2-height, env(viewport-segment-height 0 0));
        width: 100%;
        flex-grow: 0;
        flex-shrink: 0;
      }

      .fleet {
        width: 100%;
        height: var(--zenbook-span1-height, env(viewport-segment-height 0 1));
      }

      .background {
        z-index: 0;
      }
    }

    @media (device-posture: folded) {
      .fold {
        visibility: var(--fold-visibility);
      }

      .fold-content {
        visibility: var(--fold-visibility);
      }
    }

    @media (device-posture: continuous) {
      .fold-content {
        visibility: hidden;
      }
    }

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) and (orientation:landscape) {
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

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) and (orientation:portrait) {
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
  _playMessage;
  _swAlert;
  _playing = false;
  _wb;
  _wbRegistration = undefined;
  _currentTime = 0;

  static get properties() {
    return { round: { type: String},
             roundDigits: { type: Array},
             currentTime: { type: String} };
  }

  set round(round) {
    let oldRound = this._round;
    this._round = round;
    this.requestUpdate('round', oldRound);
    this.roundDigits = round.toString().split('');
  }

  get round() { return this._round; }

  set roundDigits(digits) {
    let oldDigits = this._roundDigits;
    this._roundDigits = digits;
    this.requestUpdate('roundDigits', oldDigits);
  }

  get roundDigits() { return this._roundDigits; }

  set currentTime(time) {
    let oldTime = this._currentTime;
    this._currentTime = time;
    this.requestUpdate('currentTime', oldTime);
  }

  get currentTime() { return this._currentTime; }

  firstUpdated() {
    this._enemyGrid = this.shadowRoot.querySelector('#enemy-grid');
    this._playerGrid = this.shadowRoot.querySelector('#player-grid');
    this._playMessage = this.shadowRoot.querySelector('#play-message');
    this._endGameMenu = this.shadowRoot.querySelector('#end-game-menu');
    this._welcomeMenu = this.shadowRoot.querySelector('#welcome-menu');
    this._endGameMessage = this.shadowRoot.querySelector('#end-game-message');
    this._endGameTitle = this.shadowRoot.querySelector('#end-game-title');
    this._welcomeMenu.open();
    this._infobox = this.shadowRoot.querySelector('#infobox');
    this._fullscreenRotate = this.shadowRoot.querySelector('#fullscreen-rotate');
    this._fullscreenRotate.hide();
    this._howTo = this.shadowRoot.querySelector('#how-to');
    this._swAlert = this.shadowRoot.querySelector('#sw-alert');
    this._fold = this.shadowRoot.querySelector('.fold');
    this._foldContent = this.shadowRoot.querySelector('.fold-content');
    // Check that service workers are supported
    if ('serviceWorker' in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener('load', async () => {
        this._wb = new Workbox('./sw.js');
        this._wb.addEventListener('waiting', () => this._showSWAlert());
        this._wb.addEventListener('externalwaiting', () => this._showSWAlert());
        this._wbRegistration = await this._wb.register();
      });
    }
  }

  constructor() {
    super();
    this._round = 0;
    this._roundDigits = ['0'];
  }

  connectedCallback() {
    super.connectedCallback();
    observe(this);
  }

  _showSWAlert() {
    this._swAlert.show();
  }

  _reloadSW() {
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

  _deviceSupportsSpanningMQs() {
    const hasBrowserSupport =
      window.matchMedia('(vertical-viewport-segments)').matches ||
      window.matchMedia('(horizontal-viewport-segments)').matches || false;
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
    this.shadowRoot.host.style.setProperty('--fold-visibility', 'visible');
    this._currentTime = 0;
    this._currentTimerId = setInterval(() => {this.currentTime++}, 1000);
  }

  restartGame() {
    this.round = 0;
    clearInterval(this._currentTimerId);
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
    if (this.round > 0)
      this._endGameMenu.open();
    else
      this._welcomeMenu.open();
    this._howTo.style.visibility = 'hidden';
  }

  playerPlayed() {
    this._enemyGrid.classList.add('blocked');
    this._playMessage.innerHTML = 'You missed!';
    setTimeout( () => this._playerGrid.enemyShoot(), this._timeBetweenRounds);
    this.round++;
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
    clearInterval(this._currentTimerId);
  }

  playerLost() {
    this._playing = false;
    this._fullscreenRotate.hide();
    this._enemyGrid.classList.add('blocked');
    this._endGameTitle.innerHTML = 'You lost!';
    this._endGameMessage.innerHTML = 'Your enemy defeated you in ' + this._round + ' rounds.';
    this._endGameMenu.open();
    this._playMessage.innerHTML = 'Yeah, I won!';
    clearInterval(this._currentTimerId);
  }

  render() {
    return html`
      <foldable-device-configurator></foldable-device-configurator>
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
        <div class="fold">
          <div class="fold-content">
            <img src="images/radar.svg" class="instruments display" alt="Image of a radar screen">
            <div class="fold-text display">
              Elapsed time: 
              <div class="time">${this.currentTime}</div>
              s
            </div>
            <div class="rounds-container display">
              <div class="fold-text">Number of rounds :</div>
                ${this.roundDigits.map(digit => html`
                    <img src="images/${digit}.svg" class="fold-rounds" alt="Image of digit ${digit}">
                `)}
            </div>
            <img src="images/tach.svg" class="instruments display" alt="Image of a tachimeter screen">
            <img src="images/amps.svg" class="instruments display" alt="Image of a amp measurement screen">
          </div>
        </div>
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
      <div class="alert-sw">
        <sl-alert id="sw-alert" variant="primary" closable duration="10000">
          <sl-icon slot="icon" name="info-circle"></sl-icon>
          <div class="text-sw">
            <strong>A newer version of the application is available</strong>
          </div>
          Please reload to update: 
          <sl-button class="reload" size="small" @click="${this._reloadSW}">Reload</sl-button>
        </sl-alert>
      </div>
      <how-to-screen id="how-to" @howto-closed="${this.closeHowTo}"></how-to-screen>
      <rotate-box id="fullscreen-rotate"></rotate-box>
    `;
  }
}

customElements.define("main-application", MainApplication);