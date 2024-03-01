import { LitElement, html, css } from 'lit';
import { Workbox, messageSW} from 'workbox-window';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('/demos/simple/');

export class MainApplication extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
      height: 100vh;
      color: black;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
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

    .posture-header {
      position: absolute;
      top: calc(50vh - 200px);
      width: 400px;
      left: calc(25vw - 200px);
      display: none;
      bottom: auto;
    }

    .posture-header [slot='image'] {
      margin: 10px;
    }

    #segment-css-container {
        display: flex;
        height: 100%;
        width: 100%;
        background-color: black;
    }

    .not-supported {
      background-color: black;
      color: white;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    #card-text {
      display: inline;
      font-weight: bold;
    }

    #col1 {
      flex: 0 0 200px;
      transition: background-color .2s linear;
      align-items: top;
      display: flex;
      justify-content: center;
    }

    #col2 {
      flex: 1;
      transition: background-color .2s linear;
      align-items: top;
      display: flex;
      justify-content: center;
    }

    .segment-text {
      margin: 20px;
      padding: 10px;
      font-size: 1.2rem;
      font-weight: bold;
      background-color: white;
      height: 5%;
      border-radius: 20px;
      line-height: 30px;
      text-align: center;
      display: none;
    }

    #fold {
      visibility: hidden;
      background-color: black;
      color: yellow;
      font-size: 1.4rem;
      font-style: italic;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .stripes {
      height: 250px;
      width: 200px;
      background-size: 40px 40px;
    }

    .angled {
      background-color: #737373;
      background-image: linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
      transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
      transparent 75%, transparent);
    }

    #iframe-switch {
      color: white;
      position: absolute;
      top: 20px;
      right: 20px;
    }

    #iframe {
      position: absolute;
      bottom: 20px;
      right: 20px;
      z-index: 20;
      display: none;
    }

    @media(device-posture: folded) {
      .not-supported {
        display: none;
      }

      .posture-header {
        bottom: 0;
        left: calc(50vw - 200px);
        display: block;
      }
    }

    @media(device-posture: continuous) {
      .not-supported {
        display: none;
      }

      #col1 {
        display: none;
      }

      #col2 {
        display: none;
      }

      .posture-header {
        top: calc(50vh - 200px);
        left: calc(50vw - 200px);
        display: block;
      }
    }

    @media (horizontal-viewport-segments: 2) {
      .not-supported {
        display: none;
      }

      #col1 {
        display: flex;
        flex: 0 0 env(viewport-segment-right 0 0);
        background-color: steelblue;
      }

      #fold {
        visibility: visible;
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
        height: 100%;
        font-size: 1rem;
      }

      #col2 {
        display: flex;
        background-color: green;
      }

      .segment-text {
        display: block;
        margin-top: 50px;
      }

      .posture-header {
        top: calc(50vh - 200px);
        left: calc(25vw - 200px);
        display: block;
      }
    }

    @media (vertical-viewport-segments: 2) {
      .not-supported {
        display: none;
      }

      .segment-text {
        height: 10%;
      }

      #segment-css-container {
        flex-direction: column;
      }

      #col1 {
        display: flex;
        flex: 0 0 env(viewport-segment-bottom 0 0);
        background-color: pink;
      }

      #fold {
        visibility: visible;
        width: 100%;
        height: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));
      }

      #col2 {
        display: flex;
        background-color: seagreen;
      }

      .segment-text {
        display: block;
      }

      .posture-header {
        top: auto;
        bottom: 30px;
        left: calc(50vw - 200px);
        display: block;
      }
    }

    /* This block is for smaller foldable devices */
    @media (vertical-viewport-segments: 2) and (max-width: 1024px) {
      .posture-header {
        height: 200px;
        left: 50px;
      }

      .posture-header [slot='image'] {
        height: 100px;
      }

      /* Unfortunately on Android the fold is 0 */
      #fold {
        visibility: hidden;
      }

      .segment-text {
        height: 50px;
      }
    }

    @media (horizontal-viewport-segments: 2) and (max-width: 1024px) {
      .posture-header {
        width: env(viewport-segment-left 1 0);
        left: 0;
      }

      .posture-header [slot='image'] {
        width: env(viewport-segment-left 1 0);
      }

      /* Unfortunately on Android the fold is 0 */
      #fold {
        visibility: hidden;
      }

      .segment-text {
        height: 50px;
      }
    }
  `;

  _swAlert;
  _wb;
  _wbRegistration = undefined;
  _segmentContainer;
  _col1;
  _col1Text;
  _col2;
  _col2Text;
  _cardText;
  _foldedImage;
  _continuousImage;
  _iframe;

  static get properties() {
    return { viewportWidth: { type: String}, viewportHeight: { type: String} };
  }

  set viewportHeight(height) {
    let oldHeight = this._viewportHeight;
    this._viewportHeight = height;
    this.requestUpdate('viewportHeight', oldHeight);
  }

  get viewportHeight() { return this._viewportHeight; }

  set viewportWidth(width) {
    let oldWidth = this._viewportWidth;
    this._viewportWidth = width;
    this.requestUpdate('viewportWidth', oldWidth);
  }

  get viewportWidth() { return this._viewportWidth; }

  firstUpdated() {
    this._swAlert = this.shadowRoot.querySelector('#sw-alert');
    this._segmentContainer = this.shadowRoot.querySelector('#segment-container');
    this._col1 = this.shadowRoot.querySelector('#col1');
    this._col1Text = this.shadowRoot.querySelector('#col1-text');
    this._col2 = this.shadowRoot.querySelector('#col1');
    this._col2Text = this.shadowRoot.querySelector('#col2-text');
    this._cardText = this.shadowRoot.querySelector('#card-text');
    this._continuousImage = this.shadowRoot.querySelector('#continuous-image');
    this._foldedImage = this.shadowRoot.querySelector('#folded-image');
    this._iframe = this.shadowRoot.querySelector('#iframe');
    this._iframeSwitch = this.shadowRoot.querySelector('#iframe-switch');
    console.log('Viewport Size : ' + window.innerWidth + 'x' + window.innerHeight);
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

    this._mediaQueryHorizontalSegments = window.matchMedia("(horizontal-viewport-segments: 2)");
    this._mediaQueryHorizontalSegments.onchange = () => {
        this._viewportSegmentsEnabled();
    }
    if (this._mediaQueryHorizontalSegments.matches)
      this._viewportSegmentsEnabled();

    this._mediaQueryVerticalSegments = window.matchMedia("(vertical-viewport-segments: 2)");
    this._mediaQueryVerticalSegments.onchange = () => {
      this._viewportSegmentsEnabled();
    }
    if (this._mediaQueryVerticalSegments.matches)
      this._viewportSegmentsEnabled();

    if (navigator.devicePosture != undefined) {
      console.log('Posture at page load : ' + navigator.devicePosture.type);
      this._cardText.innerHTML = navigator.devicePosture.type;
      this._showDevicePostureImage(navigator.devicePosture.type);
      navigator.devicePosture.onchange = () => {
        this._cardText.innerHTML = navigator.devicePosture.type;
        this._showDevicePostureImage(navigator.devicePosture.type);
        this._viewportSegmentsEnabled();
      };
    } else {
      this._cardText.innerHTML = "Not supported by browser.";
      this._showDevicePostureImage();
    }
    this.viewportWidth = window.innerWidth;
    this.viewportHeight = window.innerHeight;
  }

  _showDevicePostureImage(posture) {
    console.log('Posture Changed ' + posture);
    if (posture === 'continuous') {
      this._foldedImage.style.display = 'none';
      this._continuousImage.style.display = 'block';
    } else if (posture === 'folded') {
      this._foldedImage.style.display = 'block';
      this._continuousImage.style.display = 'none';
    } else {
      this._foldedImage.style.display = 'none';
      this._continuousImage.style.display = 'none';
    }
  }

  constructor() {
    super();
    this._viewportWidth = 0;
    this._viewportHeight = 0;
  }

  _viewportSegmentsEnabled() {
    console.log("Viewport Segments changed");
    let computedStyleCol1 = getComputedStyle(this._col1);
    let computedStyleCol2 = getComputedStyle(this._col2);
    this._col1Text.innerHTML = 'Viewport Segment #1 <br> Dimensions: ' + computedStyleCol1.width + ' - ' + computedStyleCol1.height;
    this._col2Text.innerHTML = 'Viewport Segment #2 <br> Dimensions: ' + computedStyleCol2.width + ' - ' + computedStyleCol2.height;
    this.viewportWidth = window.innerWidth;
    this.viewportHeight = window.innerHeight;
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

  _toggleIframe() {
    if (this._iframeSwitch.checked) {
      this._iframe.style.display = 'block';
    } else {
      this._iframe.style.display = 'none';
    }
  }

  render() {
    return html`
      <sl-card class="posture-header">
        The viewport dimension is ${this.viewportWidth} x ${this.viewportHeight}. <br>
        <img
          slot="image"
          src="images/folded-posture.svg"
          id="folded-image"
          alt="A picture showing a foldable device folded."
        />
        <img
          slot="image"
          src="images/continuous-posture.svg"
          alt="A picture showing a flat device like a tablet."
          id="continuous-image"
        />
        <br>
        The current posture of the device is : 
        <div id="card-text"></div>
      </sl-card>
      <div id="segment-css-container">
        <div class="not-supported"> CSS Viewport Segments and Device Posture APIs are not supported in this browser.</div>
        <div id="col1">
          <div id="col1-text" class="segment-text"></div>
        </div>
        <div id="fold" class="angled stripes">
          Folded Area
        </div>
        <div id="col2">
          <div id="col2-text" class="segment-text"></div>
        </div>
      </div>
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
      <sl-switch id="iframe-switch" @click="${this._toggleIframe}">Toggle iframe</sl-switch>
      <iframe id="iframe" src="iframe-test.html" width="300" height="150" frameborder="0"></iframe>
    `;
  }
}

customElements.define("main-application", MainApplication);