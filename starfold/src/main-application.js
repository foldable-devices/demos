import { LitElement, html, css } from '/web_modules/lit-element.js';
import { FoldablesFeature } from '/web_modules/windowsegments-polyfill.js';
import '/web_modules/@material/mwc-button.js';
import '/web_modules/@material/mwc-icon-button.js';
import '/web_modules/@material/mwc-snackbar.js';
import { Workbox, messageSW} from '/web_modules/workbox-window.js';
import '/web_modules/foldable-device-configurator.js';
import "./menu.js"

export class MainApplication extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
      height: 100vh;
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

    #fullscreen-rotate {
      width: 100%;
      height: 100%;
      z-index: 99;
      position: absolute;
      top: 0;
      left: 0;
      background-color: black;
      color: white;
      display: none;
    }
  `;

  _snackbar;
  _wb;
  _wbRegistration = undefined;
  _menu;
  _ship;
  _shipSize = 80;
  _controllerSize= 80;
  _shipObject= {x: 0, y: 0};
  _background1Y = 0;
  _background2Y = 0;
  _meteorSize = 80;
  _meteorImage;
  _meteorImage2;
  _meteors = [];
  _explosionImage;
  _currentTime = 0;
  _startTime = 0;
  _timeSize;
  _timeX;
  _timeY;
  _velocity = 1;
  _paused = true;
  _dead = false;
  _spanning = false;
  _playAreaSize = undefined;
  _controllerArea = undefined;
  _enableDebug = false;
  _pointerDown = false;
  _currentPointerTimeout;
  _pointerId;

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
    console.log('canvas size : ' + this._canvas.width + 'x' + this._canvas.height);
    this._context.font = '20px serif';
    window.addEventListener('resize', this._onResize);
    this._menu = this.shadowRoot.querySelector('#menu');
    this._ship = this.shadowRoot.querySelector('#ship');
    this._meteorImage = this.shadowRoot.querySelector('#meteor');
    this._meteorImage2 = this.shadowRoot.querySelector('#meteor2');
    this._background = this.shadowRoot.querySelector('#background');
    this._explosionImage = this.shadowRoot.querySelector('#explosion');
    this._controllerLeftImage = this.shadowRoot.querySelector('#left-controller');
    this._controllerRightImage = this.shadowRoot.querySelector('#right-controller');
    document.addEventListener('keydown', this._handleKeyDown, false);
    this._canvas.onpointerdown = this._onPointerDown.bind(this);
    this._canvas.onpointerup = this._onPointerUp.bind(this);

    this._updateGameLayout();
    this._background.onload = this._drawBackground.bind(this);

    const foldablesFeat = new FoldablesFeature;
    // This is specific for the polyfill, the browser window won't be resized.
    foldablesFeat.onchange = () => this._handleSpanning();
  }

  constructor() {
    super();
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
    this._paused = false;
    this._dead = false;
    this._meteors = [];
    this._currentTime = 0;
    this._velocity = 2;
    this._startTime = Math.round(window.performance.now() / 1000);
    this._updateGameLayout();
    this._shipObject = { x: this._playAreaSize.width / 2 - this._shipSize / 2,
      y: this._playAreaSize.height - this._shipSize, size: this._shipSize};
    this._background2Y = -this._playAreaSize.height;
    this._background1Y = -this._playAreaSize.height;
    this._addNewMeteors();
    requestAnimationFrame(this._drawCanvas);
  }

  _pauseGame() {
    if (this._paused)
      return;
    this._paused = true;
  }

  _lostGame() {
    if (this._paused)
      return;
    this._paused = true;
    this._dead = true;
    this._menu.open();
  }

  _addNewMeteors() {
    let numberMeteorToAdd = 6;
    // Screen estate is smaller, let's add less.
    if (this._spanning)
      numberMeteorToAdd = 3;
    for (let i = 0 ; i < numberMeteorToAdd; ++i)
      this._addRandomMeteor();
  }

  _addRandomMeteor() {
    let x = this._getRandomInt(0, this._playAreaSize.width - this._meteorSize);
    let y = this._getRandomInt(0, -500);
    for (const meteor of this._meteors) {
      if (this._checkCollision(meteor, {x: x, y: y, size: this._meteorSize}))
        return this._addRandomMeteor();
    }
    this._meteors.push({x: x, y: y, size: this._meteorSize, spriteId: Math.random() >= 0.5})
  }

  _getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  _drawShip() {
    if (this._dead)
      this._context.drawImage(this._explosionImage, this._shipObject.x, this._shipObject.y, this._shipObject.size + 10, this._shipObject.size + 10);
    else
      this._context.drawImage(this._ship, this._shipObject.x, this._shipObject.y, this._shipObject.size, this._shipObject.size);
  }

  _drawBackground() {
    this._background1Y = this._background1Y - 1;
    this._background2Y = this._background2Y + 1;
    if (this._background1Y < -2 * this._playAreaSize.height)
      this._background1Y = 0;
    if (this._background2Y > this._playAreaSize.height)
      this._background2Y = -this._playAreaSize.height;
    this._context.drawImage(this._background, 0, this._background2Y, this._playAreaSize.width, this._playAreaSize.height);
    this._context.save();
    this._context.scale(-1, -1);
    this._context.drawImage(this._background, -this._playAreaSize.width, this._background1Y, this._playAreaSize.width, this._playAreaSize.height);
    this._context.restore();
  }

  _drawMeteors() {
    for (const meteor of this._meteors) {
      const imagePath = meteor.spriteId ? this._meteorImage : this._meteorImage2;
      this._context.drawImage(imagePath, meteor.x, meteor.y, meteor.size, meteor.size);
      if (this._enableDebug) {
        let coord = meteor.x + ' ' + meteor.y;
        this._context.font = '20px serif';
        this._context.strokeStyle = '#ffffff';
        this._context.strokeText(coord, meteor.x, meteor.y + meteor.size / 2)
      }
      meteor.y += this._velocity;
      if (this._checkCollision(meteor, this._shipObject))
         this._lostGame();
    }
    // Get rid of out of bounds meteors
    for (let i = this._meteors.length; i--; ) {
      let meteor = this._meteors[i];
      if (meteor.y > this._playAreaSize.height) {
        this._meteors.splice(i, 1);
      }
    }
  }

  _checkCollision(object1, object2) {
    const overlap = object1.x + object1.size >= object2.x &&
                    object1.x <= object2.x + object2.size &&
                    object1.y + object1.size >= object2.y &&
                    object1.y <= object2.y + object2.size
     return overlap;
  }

  _drawTime() {
    const elapsedText = 'Elapsed Time : ' + this._currentTime + 's';
    this._context.font = '20px serif';
    this._context.fillStyle = '#fbc02d';
    this._context.fillText(elapsedText, this._timeX, this._timeY);
  }

  _drawController() {
    this._context.save();
    this._context.fillStyle = 'black';
    this._context.fillRect(this._controllerArea.left, this._controllerArea.top, this._controllerArea.width, this._controllerArea.height)
    this._context.restore();
    this._leftControllerPos = {
      x: this._controllerArea.left + this._controllerArea.width / 2 - this._controllerSize,
      y: this._controllerArea.top + this._controllerArea.height / 2 };
    this._context.drawImage(this._controllerLeftImage,
      this._leftControllerPos.x,
      this._leftControllerPos.y,
      this._controllerSize, this._controllerSize);
    this._rightControllerPos = {
        x: this._controllerArea.left + this._controllerArea.width / 2 + this._controllerSize,
        y: this._controllerArea.top + this._controllerArea.height / 2};
    this._context.drawImage(this._controllerRightImage,
      this._rightControllerPos.x,
      this._rightControllerPos.y,
      this._controllerSize, this._controllerSize);
  }

  _handleKeyDown = (event) => {
    if (this._paused)
      return;
    if (event.keyCode == 37) { // Left
      this._moveShipLeft();
    } else if (event.keyCode == 39) { // Right
      this._moveShipRight();
    } else if (event.keyCode == 32) { // space
      this._pauseGame();
    }
  }

  _isTouchingLeftController(event) {
    return event.clientX >= this._leftControllerPos.x &&
      event.clientX <= this._leftControllerPos.x + this._controllerSize &&
      event.clientY >= this._leftControllerPos.y &&
      event.clientY <= this._leftControllerPos.y + this._controllerSize;
  }

  _isTouchingRightController(event) {
    return event.clientX >= this._rightControllerPos.x &&
      event.clientX <= this._rightControllerPos.x + this._controllerSize &&
      event.clientY >= this._rightControllerPos.y &&
      event.clientY <= this._rightControllerPos.y + this._controllerSize;
  }

  _onPointerDown = async (event) => {
    if (!this._spanning)
      return;
    const isTouchingLeftController = this._isTouchingLeftController(event);
    const isTouchingRightController = this._isTouchingRightController(event);
    if (isTouchingLeftController || isTouchingRightController) {
      this._pointerDown = true;
      this._pointerId = event.pointerId;
      this._canvas.setPointerCapture(this._pointerId);
      event.preventDefault();
      if (isTouchingLeftController)
        this._moveShipLeft();
      else
        this._moveShipRight();
        this._currentPointerTimeout = setTimeout((direction) => this._simulateLongPress(isTouchingLeftController), 1000);
    }
  }

  _onPointerUp = async (event) => {
    if (!this._spanning)
      return;
    this._pointerDown = false;
    clearTimeout(this._currentPointerTimeout);
    if (this._pointerId)
      this._canvas.releasePointerCapture(this._pointerId);
  }

  _simulateLongPress = async (isTouchingLeftController) => {
    if(!this._pointerDown)
      return;
    if (isTouchingLeftController)
      this._moveShipLeft();
    else
      this._moveShipRight();
    this._currentPointerTimeout = setTimeout((direction) => this._simulateLongPress(isTouchingLeftController), 50);
  }

  _drawCanvas = (event) => {
    if (this._paused)
        return;
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._drawBackground();
    this._drawMeteors();
    this._drawShip();
    this._drawTime();
    if (this._spanning)
      this._drawController();
    let newTime =  Math.round(window.performance.now() / 1000) - this._startTime;
    if (this._currentTime == newTime) {
      requestAnimationFrame(this._drawCanvas);
      return;
    }
    this._currentTime = newTime;
    const newMeteorSeconds = (5 - this._velocity) <= 0 ? 1 : (5 - this._velocity);
    if (this._currentTime % newMeteorSeconds === 0)
      this._addNewMeteors();
    if (this._currentTime % 30 == 0)
      this._velocity++;
    requestAnimationFrame(this._drawCanvas);
  }

  _moveShipLeft() {
    if (this._shipObject.x <= 10  || this._paused)
       return;
    this._shipObject.x -= 10;
 }

  _moveShipRight() {
      if (this._shipObject.x + 10 >= this._playAreaSize.width - this._shipObject.size || this._paused)
        return;
      this._shipObject.x += 10;
  }

  _onResize = async (event) => {
    const style = window.getComputedStyle(this._canvas);
    this._canvas.width = parseInt(style.width, 10);
    this._canvas.height = parseInt(style.height, 10);
    this._updateGameLayout();
    if (this._paused)
      this._drawBackground();
  }

  _handleSpanning() {
    this._spanning = window.getWindowSegments().length > 1;
    if (this._spanning)
      this._updateGameLayout();
    else
      this._updateGameLayout();
    this._menu.handleSpanning();
  }

  _updateGameLayout() {
    let oldPlayArea;
    if (this._playAreaSize)
      oldPlayArea = { width: this._playAreaSize.width, height:  this._playAreaSize.height };
    const segments = window.getWindowSegments();
    if (segments.length === 1) {
      this._playAreaSize = { width: this._canvas.width, height: this._canvas.height };
      this._controllerArea = { left: 0, top: 0, width: 0, height: 0 };
    } else {
      this._playAreaSize = {
        left: segments[0].left,
        top: segments[0].top,
        width: segments[0].width,
        height: segments[0].height };
      this._controllerArea = {
        left: segments[1].left,
        top: segments[1].top,
        width: segments[1].width,
        height: segments[1].height };
    }
    if (oldPlayArea) {
      // Update ship position
      const currentX = this._shipObject.x / oldPlayArea.width;
      this._shipObject.x = this._playAreaSize.width * currentX;
      const currentY = this._shipObject.y / oldPlayArea.height;
      this._shipObject.y = this._playAreaSize.height * currentY;
      this._makeObjectFitInPlayBoundaries(this._shipObject);

      // Update meteors positions
      for (const meteor of this._meteors) {
        const currentX = meteor.x / oldPlayArea.width;
        meteor.x = this._playAreaSize.width * currentX;
        let currentY = meteor.y / oldPlayArea.height;
        meteor.y = this._playAreaSize.height * currentY;
        this._makeObjectFitInPlayBoundaries(meteor);
      }

      //Update backgrounds positions
      const currentBackground1Y = this._background1Y / oldPlayArea.height;
      this._background1Y = this._playAreaSize.height * currentBackground1Y;
      const currentBackground2Y = this._background2Y / oldPlayArea.height;
      this._background2Y = this._playAreaSize.height * currentBackground2Y;
    }
    this._timeX = this._playAreaSize.width - this._timeSize;
    this._timeY = 30;
    this._timeSize = this._context.measureText('Elapsed Time : 22222s').width;
  }

  _makeObjectFitInPlayBoundaries(object) {
    if (object.x < this._playAreaSize.left)
      object.x = this._playAreaSize.left
    else if (object.x + object.size > this._playAreaSize.width)
      object.x = this._playAreaSize.width - object.size;
    if (object.y < this._playAreaSize.top)
      object.y = this._playAreaSize.top
    else if (object.y + object.size > this._playAreaSize.height)
      object.y = this._playAreaSize.height - object.size;
  }

  render() {
    return html`
      <canvas id="canvas"></canvas>
      <picture class="hidden">
        <source srcset="images/ship.webp" type="image/webp"/>
        <img id="ship" src="images/ship.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/meteor.webp" type="image/webp"/>
        <img id="meteor" src="images/meteor.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/meteor2.webp" type="image/webp"/>
        <img id="meteor2" src="images/meteor2.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/explosion.webp" type="image/webp"/>
        <img id="explosion" src="images/explosion.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/left-controller.webp" type="image/webp"/>
        <img id="left-controller" src="images/left-controller.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/right-controller.webp" type="image/webp"/>
        <img id="right-controller" src="images/right-controller.png">
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
      <main-menu id="menu" @start-clicked=${this._startGame}></main-menu>
    `;
  }
}

customElements.define("main-application", MainApplication);