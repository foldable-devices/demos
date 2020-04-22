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

    .background {
      width: 100vw;
      height: 100vh;
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
      height: 100vh;
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

    if ('serviceWorker' in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('../sw.js');
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

  restartGame() {
    this._round = 0;
    this._enemyGrid.classList.remove('blocked');
    this._enemyGrid.restart();
    this._playerGrid.restart();
    this._infobox.showMessage('Let\'s get started, fire first.');
  }

  playerPlayed() {
    this._enemyGrid.classList.add('blocked');
    this._infobox.showMessage('You missed!');
    setTimeout( () => this._playerGrid.enemyShoot(), this._timeBetweenRounds);
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
    this._dialogbox.showMessage('You won! <br> You defeated your enemy in ' + this._round + ' rounds.');
  }

  playerLost() {
    this._enemyGrid.classList.add('blocked');
    this._dialogbox.showMessage('You lost! <br> Your enemy defeated you in ' + this._round + ' rounds.');
  }

  render() {
    return html`
      <div class="content">
        <picture>
          <source media="(max-width: 767px)"
                  srcset="images/ocean-412.webp 412w, images/ocean-768.webp 768w, images/ocean-800.webp 800w,
                          images/ocean-412.jpg 412w, images/ocean-768.jpg 768w, images/ocean-800.jpg 800w"
                  sizes="(max-width: 1366px) 1024px, 1366px" />
          <source media="(max-width: 1366px)"
                  srcset="images/ocean-1024.webp 1024w, images/ocean-1024.jpg 1024w,
                          images/ocean-1366.webp 1366w, images/ocean-1366.jpg 1366w"
                  sizes="(max-width: 1366px) 1024px, 1366px" />
          <source media="(max-width: 1440px)"
                  srcset="images/ocean-1440.webp 1440w, images/ocean-1366.webp 1366w,
                          images/ocean-1440.jpg 1440w, images/ocean-1366.jpg 1366w"
                  sizes="(max-width: 1440px) 1440px, 1366px" />
          <source media="(max-width: 1920px)"
                  srcset="images/ocean-1920.webp 1920w, images/ocean-1920.jpg 1920w"
                  sizes="(max-width: 1920px) 1920px" />
          <source media="(min-width: 1920px)"
                  srcset="images/ocean-4k.jpg 2560w, images/ocean-4k.webp 2560w, images/ocean-1920.jpg 1920vw"/>
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
      <info-box id="infobox"></info-box>
      <dialog-box id="dialogbox" @button-clicked=${this.restartGame}></dialog-box>
    `;
  }
}

customElements.define("main-application", MainApplication);