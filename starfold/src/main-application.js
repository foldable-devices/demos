import { LitElement, html, css as litCSS } from '/web_modules/lit-element.js';
import { adjustCSS, observe } from "/web_modules/spanning-css-polyfill.js";
import '/web_modules/@material/mwc-button.js';
import '/web_modules/@material/mwc-icon-button.js';
import '/web_modules/@material/mwc-snackbar.js';
import { Workbox, messageSW} from '/web_modules/workbox-window.js';

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "main-application");
  return litCSS([string], ...values);
};

export class MainApplication extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
      height: 100vh;
      --background-color: #f9f7f1;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    #canvas {
      width: 100%;
      height: 100%;
    }

    .hidden {
      display: none;
    }
  `;

  _snackbar;
  _wb;
  _wbRegistration = undefined;
  _ship;
  _shipSize = 80;
  _shipY = 0;
  _shipX = 0;
  _background1Y = 0;
  _background2Y = 0;

  firstUpdated() {
    this._canvas = this.shadowRoot.querySelector('#canvas');
    if (this._canvas && this._canvas.getContext)
      this._context = this._canvas.getContext('2d');

    // Check that we have a valid context to draw on/with before adding event handlers
    if (!this._context) {
      console.error('Your browser doesn\'t support canvas, this demo won\'t work');
      return;
    }

    this._snackbar = this.shadowRoot.querySelector('#snackbar');
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

    const style = window.getComputedStyle(this._canvas);
    this._canvas.width  = parseInt(style.width, 10);
    this._canvas.height =  parseInt(style.height, 10);
    window.addEventListener('resize', this._onResize);
    this._ship = this.shadowRoot.querySelector('#ship');
    this._background = this.shadowRoot.querySelector('#background');
    this._ship.onload = this._startGame.bind(this);
    document.addEventListener('keydown', this._handleKeyDown, false);
    requestAnimationFrame(this._drawCanvas);
  }

  constructor() {
    super();
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
      window.matchMedia('(spanning: single-fold-horizontal)').matches ||
      window.matchMedia('(spanning: single-fold-vertical)').matches ||
      window.matchMedia('(spanning: none)').matches || false;
    return hasBrowserSupport;
  }

  _startGame() {
    this._shipX = this._canvas.width / 2 - this._shipSize / 2;
    this._shipY = this._canvas.height - this._shipSize;
    this._background2Y = -this._canvas.height;
    this._background1Y = -this._canvas.height;
  }

  _drawShip() {
    this._context.drawImage(this._ship, this._shipX, this._shipY, this._shipSize, this._shipSize);
  }

  _drawBackground() {
    this._background1Y = this._background1Y - 1;
    this._background2Y = this._background2Y + 1;
    if (this._background1Y < -2 * this._canvas.height)
      this._background1Y = 0;
    if (this._background2Y > this._canvas.height)
      this._background2Y = -this._canvas.height;
    this._context.drawImage(this._background, 0, this._background2Y, this._canvas.width, this._canvas.height);
    this._context.save();
    this._context.scale(-1, -1);
    this._context.drawImage(this._background, -this._canvas.width, this._background1Y, this._canvas.width, this._canvas.height);
    this._context.restore();
  }

  _handleKeyDown = (event) => {
    if (event.keyCode == 37) { // Left
      this._moveShipLeft();
    } else if (event.keyCode == 39) { // Right
      this._moveShipRight();
    }
  }

  _drawCanvas = (event) => {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._drawBackground();
    this._drawShip();
    requestAnimationFrame(this._drawCanvas);
  }

  _moveShipLeft() {
    if (this._shipX <= 10)
       return;
    this._shipX -= 10;
 }

 _moveShipRight() {
    if (this._shipX + 10 >= this._canvas.width - this._shipSize)
      return;
    this._shipX += 10;
 }
  _onResize = async (event) => {
    const style = window.getComputedStyle(this._canvas);
    this._canvas.width = parseInt(style.width, 10);
    this._canvas.height = parseInt(style.height, 10);
  }


  render() {
    return html`
      <canvas id="canvas"></canvas>
      <picture class="hidden">
        <source srcset="images/ship.webp" type="image/webp"/>
        <img id="ship" src="images/ship.png">
      </picture>
      <picture class="hidden">
          <source media="(max-width: 767px)"
                  srcset="images/starfield-412.webp 412w, images/starfield-768.webp 768w, images/starfield-800.webp 800w"
                  sizes="(max-width: 767px) 412px, 768px, 800px" type="image/webp"/>
          <source media="(max-width: 767px)"
                  srcset="images/starfield-412.jpg 412w, images/starfield-768.jpg 768w, images/starfield-800.jpg 800w"
                  sizes="(max-width: 767px) 412px, 768px, 800px" type="image/jpeg"/>
          <source media="(max-width: 1366px)"
                  srcset="images/starfield-1024.webp 1024w, images/starfield-1366.webp 1366w"
                  sizes="(max-width: 1366px) 1024px, 1366px" type="image/webp"/>
          <source media="(max-width: 1366px)"
                  srcset="images/starfield-1024.jpg 1024w, images/starfield-1366.jpg 1366w"
                  sizes="(max-width: 1366px) 1024px, 1366px" type="image/jpeg"/>
          <source media="(max-width: 1440px)"
                  srcset="images/starfield-1440.webp 1440w, images/starfield-1366.webp 1366w"
                  sizes="(max-width: 1440px) 1440px, 1366px" type="image/webp"/>
          <source media="(max-width: 1440px)"
                  srcset="images/starfield-1440.jpg 1440w, images/starfield-1366.jpg 1366w"
                  sizes="(max-width: 1440px) 1440px, 1366px" type="image/jpeg"/>
          <source media="(max-width: 1920px)"
                  srcset="images/starfield-1920.webp 1920w, images/starfield-1440.webp 1440w"
                  sizes="(max-width: 1920px) 1920px, 1440px" type="image/webp"/>
          <source media="(max-width: 1920px)"
                  srcset="images/starfield-1920.jpg 1920w, images/starfield-1440.jpg 1440w"
                  sizes="(max-width: 1920px) 1920px, 1440px" type="image/jpeg"/>
          <source media="(min-width: 1920px)"
                  srcset="images/starfield-4k.webp 2560w, images/starfield-1920.webp 1920w"
                  sizes="(max-width: 1920px) 2560px, 1920px" type="image/webp"/>
          <source media="(min-width: 1920px)"
                  srcset="images/starfield-4k.jpg 2560w, images/starfield-1920.jpg 1920w"
                  sizes="(max-width: 1920px) 2560px, 1920px" type="image/jpeg"/>
          <img id="background" src="images/starfield-1024.jpg" alt="Background of a starfield">
        </picture>
      <mwc-snackbar id="snackbar" labelText="A newer version of the application is available." leading>
        <mwc-button slot="action">RELOAD</mwc-button>
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
    `;
  }
}

customElements.define("main-application", MainApplication);