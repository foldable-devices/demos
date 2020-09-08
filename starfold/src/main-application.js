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
      color: white;
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

    .menu-button {
      width: 80%;
      display: block;
      margin: auto;
    }

    .menu-button:hover {
      filter: drop-shadow(5px 5px 5px black) contrast(150%);
    }

    .detail-about {
      font-size: 0.8em;
      margin: 5px;
      text-align: justify;
      text-justify: inter-character;
    }

    .score {
      color: white;
      font-family: 'Russo One', sans-serif;
      font-size: 1em;
      margin-bottom: 20px;
    }

    #pause-button {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 60px;
      height: 60px;
      user-select: none;
    }
  `;

  _snackbar;
  _wb;
  _wbRegistration = undefined;
  _mainMenu;
  _pauseMenu;
  _aboutMenu;
  _lostMenu;
  _pauseButton;
  _pauseButtonPos = {x: 0, y: 0};
  _pauseButtonSize = 80;
  _ship;
  _shipSize = 80;
  _controllerSize= 70;
  _controllerSizeTouch = 60;
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
  _dead = true;
  _spanning = false;
  _playAreaSize = undefined;
  _controllerArea = undefined;
  _enableDebug = false;
  _pointerDown = false;
  _currentPointerTimeout = [];
  _pointerId;
  _touchSensitivity = 10;
  _touchingLeftController = false;
  _touchingRightController = false;
  _touchingUpController = false;
  _touchingDownController = false;
  _yButtonImage;
  _yButtonSize = 100;
  _yButtonPos = {x: 0, y: 0};
  _touchingYButton = false;
   _missileImage;
  _missileWidth = 20;
  _missileHeight = 30;
  _missiles = [];

  static get properties() {
    return { currentTime: { type: String} };
  }

  set currentTime(time) {
    let oldTime = this._currentTime;
    this._currentTime = time;
    this.requestUpdate('currentTime', oldTime);
  }

  get currentTime() { return this._currentTime; }

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
    this._context.font = '20px Russo One';
    window.addEventListener('resize', this._onResize);
    this._mainMenu = this.shadowRoot.querySelector('#main-menu');
    this._mainMenu.open();
    this._pauseMenu = this.shadowRoot.querySelector('#pause-menu');
    this._aboutMenu = this.shadowRoot.querySelector('#about-menu');
    this._lostMenu = this.shadowRoot.querySelector('#lost-menu');
    this._pauseButton = this.shadowRoot.querySelector('#pause-button');
    this._ship = this.shadowRoot.querySelector('#ship');
    this._meteorImage = this.shadowRoot.querySelector('#meteor');
    this._meteorImage2 = this.shadowRoot.querySelector('#meteor2');
    this._background = this.shadowRoot.querySelector('#background');
    this._explosionImage = this.shadowRoot.querySelector('#explosion');
    this._controllerLeftImage = this.shadowRoot.querySelector('#left-controller');
    this._controllerRightImage = this.shadowRoot.querySelector('#right-controller');
    this._controllerUpImage = this.shadowRoot.querySelector('#up-controller');
    this._controllerDownImage = this.shadowRoot.querySelector('#down-controller');
    this._missileImage = this.shadowRoot.querySelector('#missile');
    this._yButtonImage = this.shadowRoot.querySelector('#y-button');
    document.addEventListener('keydown', this._handleKeyDown, false);
    this._canvas.onpointerdown = this._onPointerDown.bind(this);
    this._canvas.onpointermove = this._onPointerMove.bind(this);
    this._canvas.onpointercancel = this._onPointerUp.bind(this);
    this._canvas.onpointerup = this._onPointerUp.bind(this);
    this._timeSize = this._context.measureText('Elapsed Time : 2222s').width;

    this._updateGameLayout();
    this._background.onload = this._drawBackground.bind(this);

    const foldablesFeat = new FoldablesFeature;
    // This is specific for the polyfill, the browser window won't be resized.
    foldablesFeat.onchange = () => this._handleSpanning();

    window.onorientationchange = (event) => this._handleOrientationChange(event);
  }

  constructor() {
    super();
    this._currentTime = 0;
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
    this._mainMenu.close();
    this._lostMenu.close();
    this._pauseMenu.close();
    this._paused = false;
    this._dead = false;
    this._meteors = [];
    this._missiles = [];
    this.currentTime = 0;
    this._velocity = 2;
    this._startTime = Math.round(window.performance.now() / 1000);
    this._updateGameLayout();
    this._shipObject = { x: this._playAreaSize.width / 2 - this._shipSize / 2,
      y: this._playAreaSize.height - this._shipSize, size: this._shipSize};
    this._background2Y = -this._playAreaSize.height;
    this._background1Y = -this._playAreaSize.height;
    this._touchingYButton = this._touchingLeftController = this._touchingRightController =
    this._touchingUpController = this._touchingDownController = false;
    this._pointerDown = false;
    this._addNewMeteors();
    if (!this._spanning)
      this._showPauseButton();
    requestAnimationFrame(this._drawCanvas);
  }

  _hidePauseButton() {
    this._pauseButton.classList.add("hidden");
  }

  _showPauseButton() {
    this._pauseButton.classList.remove("hidden");
  }

  _pauseGame() {
    if (this._paused)
      return;
    this._paused = true;
    this._touchingYButton = this._touchingLeftController =
    this._touchingRightController = this._touchingUpController =
    this._touchingDownController = false;
    this._hidePauseButton();
    this._pauseMenu.open();
  }

  _resumeGame() {
    if (!this._paused)
      return;
    this._paused = false;
    this._pauseMenu.close();
    if (!this._spanning)
      this._showPauseButton();
    requestAnimationFrame(this._drawCanvas);
  }

  _lostGame() {
    if (this._paused)
      return;
    this._paused = true;
    this._dead = true;
    this._clearPointerTimeout();
    this._lostMenu.open();
  }

  _showAbout() {
    this._mainMenu.close();
    this._aboutMenu.open();
  }

  _openMainMenu() {
    this._mainMenu.open();
    this._aboutMenu.close();
  }

  _addNewMeteors() {
    let numberMeteorToAdd = Math.round(this._playAreaSize.width / this._meteorSize / 4);
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
    this._meteors.push({x: x, y: y, destroyed: false,
        size: this._meteorSize, spriteId: Math.random() >= 0.5})
  }

  _removeMeteor(meteorToRemove) {
    for (let i = this._meteors.length; i--; ) {
      const meteor = this._meteors[i];
      if (meteor.destroyed &&
          meteorToRemove.y ==  meteor.y &&
          meteorToRemove.x ==  meteor.x) {
        this._meteors.splice(i, 1);
        break;
      }
    }
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
      if (meteor.destroyed)
        this._context.drawImage(this._explosionImage, meteor.x, meteor.y, meteor.size, meteor.size);
      else
        this._context.drawImage(imagePath, meteor.x, meteor.y, meteor.size, meteor.size);
      if (this._enableDebug) {
        this._context.save();
        const coord = meteor.x + ' ' + meteor.y;
        this._context.font = '20px serif';
        this._context.strokeStyle = '#ffffff';
        this._context.strokeText(coord, meteor.x, meteor.y + meteor.size / 2);
        this._context.restore();
      }
      if (!meteor.destroyed && this._checkCollision(meteor, this._shipObject))
         this._lostGame();
      meteor.y += this._velocity;
    }
    // Get rid of out of bounds meteors
    for (let i = this._meteors.length; i--; ) {
      const meteor = this._meteors[i];
      if (meteor.y > this._playAreaSize.height) {
        this._meteors.splice(i, 1);
      }
    }
  }

  _drawMissiles() {
    for (let i = this._missiles.length; i--; ) {
      const missile = this._missiles[i];
      this._context.drawImage(this._missileImage, missile.x, missile.y, this._missileWidth, this._missileHeight);
      if (this._enableDebug) {
        this._context.save();
        const coord = missile.x + ' ' + missile.y;
        this._context.font = '20px serif';
        this._context.strokeStyle = '#ffffff';
        this._context.strokeText(coord, missile.x, missile.y + this._missileWidth / 2);
        this._context.restore();
      }
      for (const meteor of this._meteors) {
        if (this._checkCollision(missile, meteor)) {
          meteor.destroyed = true;
          this._missiles.splice(i, 1);
          setTimeout(() => this._removeMeteor(meteor), 300);
          break;
        }
      }
      missile.y -= 10;
    }
    // Get rid of out of bounds missiles
    for (let i = this._missiles.length; i--; ) {
      let missile = this._missiles[i];
      if (missile.y < 0) {
        this._missiles.splice(i, 1);
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
    const elapsedText = 'Elapsed Time : ' + this.currentTime + 's';
    this._context.font = '20px Russo One';
    this._context.fillStyle = '#fbc02d';
    this._context.fillText(elapsedText, this._timeX, this._timeY);
  }

  _drawControllerSegment() {
    this._context.save();
    this._context.fillStyle = 'black';
    this._context.fillRect(
      this._controllerArea.left, this._controllerArea.top,
      this._controllerArea.width, this._controllerArea.height);
    this._context.restore();
  }

  _drawController(size) {
    this._context.save();
    this._context.drawImage(this._controllerLeftImage,
      this._leftControllerPos.x, this._leftControllerPos.y, size, size);
    this._drawMiddleController(size);
    this._context.drawImage(this._controllerRightImage,
      this._rightControllerPos.x, this._rightControllerPos.y, size, size);
    this._context.drawImage(this._controllerUpImage,
      this._upControllerPos.x, this._upControllerPos.y, size, size);
    this._context.drawImage(this._controllerDownImage,
      this._downControllerPos.x, this._downControllerPos.y, size, size);
    this._context.restore();
  }

  _drawMiddleController(size) {
    this._context.fillStyle = 'white';
    this._context.strokeStyle = "#333333";
    this._context.lineWidth = "3";
    this._context.fillRect(
      this._leftControllerPos.x + size,
      this._leftControllerPos.y + 1, size, size - 2);
    this._context.beginPath()
    this._context.rect(
      this._leftControllerPos.x + size,
      this._leftControllerPos.y + 1, size, size - 2);
    this._context.stroke();
  }

  _drawControllerHighlight(size) {
    this._context.save();
    this._context.globalAlpha = 0.7;
    this._context.fillStyle = 'black';
    if (this._touchingLeftController)
      this._context.fillRect(this._leftControllerPos.x, this._leftControllerPos.y, size, size);
    else if (this._touchingRightController)
      this._context.fillRect(this._rightControllerPos.x, this._rightControllerPos.y, size, size);
    else if (this._touchingUpController)
      this._context.fillRect(this._upControllerPos.x, this._upControllerPos.y, size, size);
    else if (this._touchingDownController)
      this._context.fillRect(this._downControllerPos.x, this._downControllerPos.y, size, size);
    this._context.restore();
  }

  _drawPauseButton() {
    this._context.drawImage(this._pauseButton,
      this._pauseButtonPos.x,
      this._pauseButtonPos.y,
      this._pauseButtonSize, this._pauseButtonSize);
  }

  _drawYButton() {
    this._context.drawImage(this._yButtonImage,
      this._yButtonPos.x,
      this._yButtonPos.y,
      this._yButtonSize, this._yButtonSize);
    if(this._touchingYButton) {
      this._context.save();
      this._context.globalAlpha = 0.7;
      this._context.beginPath();
      this._context.arc(this._yButtonPos.x + this._yButtonSize / 2,
        this._yButtonPos.y + this._yButtonSize / 2, this._yButtonSize  / 2, 0, 2 * Math.PI);
      this._context.strokeStyle = 'black';
      this._context.stroke();
      this._context.fillStyle = 'black';
      this._context.fill();
      this._context.restore();
    }
  }

  _handleKeyDown = (event) => {
    if (this._paused)
      return;
    if (event.keyCode == 37) { // Left
      this._moveShipLeft();
    } else if (event.keyCode == 39) { // Right
      this._moveShipRight();
    } else if (event.keyCode == 27) { // Esc
      this._pauseGame();
    } else if (event.keyCode == 40) { // Down
      this._moveShipDown();
    } else if (event.keyCode == 38) { // Up
      this._moveShipUp();
    } else if (event.keyCode == 32) { // Space
      this._fireMissile();
    }
  }

  _isTouchingPauseButton(event) {
    return event.clientX >= this._pauseButtonPos.x - this._touchSensitivity &&
      event.clientX <= this._pauseButtonPos.x + this._pauseButtonSize + this._touchSensitivity &&
      event.clientY >= this._pauseButtonPos.y - this._touchSensitivity &&
      event.clientY <= this._pauseButtonPos.y + this._pauseButtonSize + this._touchSensitivity;
  }

  _isTouchingYButton(event) {
    return event.clientX >= this._yButtonPos.x - this._touchSensitivity &&
      event.clientX <= this._yButtonPos.x + this._yButtonSize + this._touchSensitivity &&
      event.clientY >= this._yButtonPos.y - this._touchSensitivity &&
      event.clientY <= this._yButtonPos.y + this._yButtonSize + this._touchSensitivity;
  }

  _isTouchingAController(controller, event) {
    return event.clientX >= controller.x - this._touchSensitivity &&
      event.clientX <= controller.x + this._controllerSize + this._touchSensitivity &&
      event.clientY >= controller.y - this._touchSensitivity &&
      event.clientY <= controller.y + this._controllerSize + this._touchSensitivity;
  }

  _isTouchingController(event) {
    const isTouchingLeftController = this._isTouchingAController(this._leftControllerPos, event);
    const isTouchingRightController = this._isTouchingAController(this._rightControllerPos, event);
    const isTouchingUpController = this._isTouchingAController(this._upControllerPos, event);
    const isTouchingDownController = this.  _isTouchingAController(this._downControllerPos, event);
    return isTouchingLeftController || isTouchingRightController ||
      isTouchingUpController || isTouchingDownController;
  }

  _onPointerDown = async (event) => {
    if (this._paused || this._dead)
      return;
    this._clearPointerTimeout();
    if(this._isTouchingPauseButton(event)) {
      this._pauseGame();
      return;
    }
    this._touchingLeftController = this._isTouchingAController(this._leftControllerPos, event);
    this._touchingRightController  = this._isTouchingAController(this._rightControllerPos, event);
    this._touchingUpController  = this._isTouchingAController(this._upControllerPos, event);
    this._touchingDownController = this._isTouchingAController(this._downControllerPos, event);
    if (this._touchingLeftController || this._touchingRightController ||
        this._touchingUpController ||  this._touchingDownController) {
      this._pointerDown = true;
      this._pointerId = event.pointerId;
      this._canvas.setPointerCapture(this._pointerId);
      event.preventDefault();
      if (this._touchingLeftController) {
        this._moveShipLeft();
      } else if (this._touchingRightController)
        this._moveShipRight();
      else if (this._touchingUpController)
        this._moveShipUp();
      else if (this._touchingDownController)
        this._moveShipDown();
      this._currentPointerTimeout.push(
        setTimeout((direction) => this._simulateLongPress(
          this._touchingLeftController,
          this._touchingRightController,
          this._touchingUpController,
          this._touchingDownController), 300));
    }
    this._touchingYButton = this._isTouchingYButton(event);
    if (this._touchingYButton)
      this._fireMissile();
  }

  _onPointerMove = async (event) => {
    if (this._paused || this._dead)
      return;
    if (!this._isTouchingController(event)) {
      this._pointerDown = false;
      this._clearPointerTimeout();
    }
  }

  _onPointerUp = async (event) => {
    if (this._paused || this._dead)
      return;
    this._pointerDown = false;
    this._touchingLeftController = this._touchingRightController =
    this._touchingUpController = this._touchingDownController =
    this._touchingYButton = false;
    this._clearPointerTimeout();
    if (this._pointerId)
      this._canvas.releasePointerCapture(this._pointerId);
  }

  _simulateLongPress = async (isTouchingLeftController, isTouchingRightController,
    isTouchingUpController, isTouchingDownController) => {
    if(!this._pointerDown)
      return;
    if (isTouchingLeftController)
      this._moveShipLeft();
    else if (isTouchingRightController)
      this._moveShipRight();
    else if (isTouchingUpController)
      this._moveShipUp();
    else if (isTouchingDownController)
      this._moveShipDown();
    this._currentPointerTimeout.push(
      setTimeout((direction) => this._simulateLongPress(
        isTouchingLeftController,
        isTouchingRightController,
        isTouchingUpController,
        isTouchingDownController), 50));
  }

  _clearPointerTimeout() {
    for (const timer of this._currentPointerTimeout)
      clearTimeout(timer);
    this._currentPointerTimeout = []
  }

  _drawCanvas = (event) => {
    if (this._paused)
        return;
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._drawBackground();
    this._drawMeteors();
    this._drawMissiles();
    this._drawShip();
    this._drawTime();
    if (this._spanning) {
      this._drawControllerSegment();
      this._drawController(this._controllerSize);
      this._drawControllerHighlight(this._controllerSize);
      this._drawPauseButton();
    } else {
      this._drawController(this._controllerSizeTouch);
      this._drawControllerHighlight(this._controllerSizeTouch);
    }
    this._drawYButton();
    let newTime =  Math.round(window.performance.now() / 1000) - this._startTime;
    if (this.currentTime == newTime) {
      requestAnimationFrame(this._drawCanvas);
      return;
    }
    this.currentTime = newTime;
    const newMeteorSeconds = (5 - this._velocity) <= 0 ? 1 : (5 - this._velocity);
    if (this.currentTime % newMeteorSeconds === 0)
      this._addNewMeteors();
    if (this.currentTime % 30 == 0)
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

  _moveShipDown() {
    if (this._shipObject.y + 10 >= this._playAreaSize.height - this._shipObject.size || this._paused)
      return;
    this._shipObject.y += 10;
  }

  _moveShipUp() {
    if (this._shipObject.y <= 10 || this._paused)
      return;
    this._shipObject.y -= 10;
  }

  _fireMissile() {
    this._missiles.push({
      x: this._shipObject.x + this._shipSize / 2 - this._missileWidth / 2,
      y: this._shipObject.y - 10, size: this._missileWidth});
  }

  _onResize = async (event) => {
    const style = window.getComputedStyle(this._canvas);
    this._canvas.width = parseInt(style.width, 10);
    this._canvas.height = parseInt(style.height, 10);
    this._handleSpanning();
    if (this._paused)
      this._drawBackground();
  }

  _handleSpanning() {
    this._spanning = window.getWindowSegments().length > 1;
    this._updateGameLayout();
    if (!this._spanning)
      this._showPauseButton();
    else
      this._hidePauseButton();
    this._mainMenu.handleSpanning();
    this._pauseMenu.handleSpanning();
    this._aboutMenu.handleSpanning();
    this._lostMenu.handleSpanning();
  }

  _handleOrientationChange(event) {
    this._pauseGame();
    this._updateGameLayout();
    this._mainMenu.handleSpanning();
    this._pauseMenu.handleSpanning();
    this._aboutMenu.handleSpanning();
    this._lostMenu.handleSpanning();
  }

  _updateGameLayout() {
    let oldPlayArea;
    if (this._playAreaSize)
      oldPlayArea = { width: this._playAreaSize.width, height:  this._playAreaSize.height };
    const segments = window.getWindowSegments();
    if (segments.length === 1) {
      this._playAreaSize = { width: this._canvas.width, height: this._canvas.height };
      this._controllerArea = { left: 0, top: 0, width: 0, height: 0 };
      this._leftControllerPos = {
        x: 0,
        y: this._playAreaSize.height - 2 * this._controllerSizeTouch};
      this._rightControllerPos = {
        x: 2 * this._controllerSizeTouch,
        y: this._playAreaSize.height - 2 * this._controllerSizeTouch};
      this._upControllerPos = {
        x: this._controllerSizeTouch,
        y: this._playAreaSize.height - 3 * this._controllerSizeTouch};
      this._rightControllerPos = {
        x: 2 * this._controllerSizeTouch,
        y: this._playAreaSize.height - 2 * this._controllerSizeTouch};
      this._downControllerPos = {
        x: this._controllerSizeTouch,
        y: this._playAreaSize.height - this._controllerSizeTouch};
      this._pauseButtonPos = {x: 0, y: 0};
      this._yButtonPos = {x: this._playAreaSize.width - this._yButtonSize - 10,
        y: this._playAreaSize.height - this._yButtonSize - 10};
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
      this._pauseButtonPos = {
        x: this._controllerArea.left + this._controllerArea.width / 2 - this._pauseButtonSize / 2,
        y: this._controllerArea.top + this._controllerArea.height / 2 - this._pauseButtonSize / 2};
      this._yButtonPos = {
          x: this._controllerArea.left + this._controllerArea.width - this._yButtonSize * 1.5,
          y: this._controllerArea.top + this._controllerArea.height / 2 - this._yButtonSize / 2};
      this._leftControllerPos = {
        x: this._controllerArea.left,
        y: this._controllerArea.top + this._controllerArea.height / 2 - this._controllerSize / 2};
      this._rightControllerPos = {
        x: this._controllerArea.left + 2 * this._controllerSize,
        y: this._controllerArea.top + this._controllerArea.height / 2 - this._controllerSize / 2};
      this._upControllerPos = {
          x: this._controllerArea.left + this._controllerSize,
          y: this._controllerArea.top + this._controllerArea.height / 2 - this._controllerSize * 3 / 2};
      this._downControllerPos = {
          x: this._controllerArea.left + this._controllerSize,
          y: this._controllerArea.top + this._controllerArea.height / 2 + this._controllerSize / 2};
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
      <picture>
        <source srcset="images/pause-button.webp" type="image/webp"/>
        <img class="hidden" id="pause-button" src="images/pause-button.png" @click="${this._pauseGame}">
      </picture>
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
        <source srcset="images/up-controller.webp" type="image/webp"/>
        <img id="up-controller" src="images/up-controller.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/down-controller.webp" type="image/webp"/>
        <img id="down-controller" src="images/down-controller.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/y-button.webp" type="image/webp"/>
        <img id="y-button" src="images/y-button.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/missile.webp" type="image/webp"/>
        <img id="missile" src="images/missile.png">
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
      <game-menu id="main-menu">
        <div slot="title">Welcome to Star Fold</div>
        <picture slot="button">
          <source srcset="images/play-button.webp" type="image/webp"/>
          <img alt="Image of a play button" class="menu-button" src="images/play-button.jpg" @click="${this._startGame}">
        </picture>
        <picture slot="button2">
          <source srcset="images/about-button.webp" type="image/webp"/>
          <img alt="Image of an about button" class="menu-button" src="images/about-button.jpg" @click="${this._showAbout}">
        </picture>
      </game-menu>
      <game-menu id="pause-menu">
        <div slot="title">Game paused</div>
        <picture slot="button">
          <source srcset="images/resume-button.webp" type="image/webp"/>
          <img alt="Image of a resume button" class="menu-button" src="images/resume-button.jpg" @click="${this._resumeGame}">
        </picture>
        <picture slot="button2">
          <source srcset="images/restart-button.webp" type="image/webp"/>
          <img alt="Image of a restart button" class="menu-button" src="images/restart-button.jpg" @click="${this._startGame}">
        </picture>
      </game-menu>
      <game-menu id="about-menu">
        <div slot="title">
           <div class="detail-about">About<br><br>This demo provides a specific experience on dual screens and foldable devices. Make sure to span the window.
           </div>
        </div>
        <picture slot="button">
          <source srcset="images/close-button.webp" type="image/webp"/>
          <img alt="Image of a close button" class="menu-button" src="images/close-button.jpg" @click="${this._openMainMenu}">
        </picture>
      </game-menu>
      <game-menu id="lost-menu">
        <div slot="title">You Lost!</div>
        <div slot="button" class="score">Your time was ${this.currentTime} seconds</div>
        <picture slot="button2">
          <source srcset="images/restart-button.webp" type="image/webp"/>
          <img alt="Image of a restart button" class="menu-button" src="images/restart-button.jpg" @click="${this._startGame}">
        </picture>
      </game-menu>
    `;
  }
}

customElements.define("main-application", MainApplication);