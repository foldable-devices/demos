import { LitElement, html, css } from 'lit';
import { Workbox, messageSW} from 'workbox-window';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
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
        margin-right: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
        background-color: steelblue;
      }

      #col2 {
        display: flex;
        background-color: green;
      }

      .segment-text {
        display: block;
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
        margin-bottom: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));
        background-color: pink;
      }

      #col2 {
        display: flex;
        background-color: seagreen;
      }

      .segment-text {
        display: block;
      }

      .posture-header {
        top: calc(25vh - 200px);
        left: calc(50vw - 200px);
        display: block;
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
  _colors = ["blue", "green", "yellow", "pink", "red"];

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
    this._swAlert = this.shadowRoot.querySelector('#sw-alert');
    this._segmentContainer = this.shadowRoot.querySelector('#segment-container');
    this._col1 = this.shadowRoot.querySelector('#col1');
    this._col1Text = this.shadowRoot.querySelector('#col1-text');
    this._col2 = this.shadowRoot.querySelector('#col1');
    this._col2Text = this.shadowRoot.querySelector('#col2-text');
    this._cardText = this.shadowRoot.querySelector('#card-text');
    this._continuousImage = this.shadowRoot.querySelector('#continuous-image');
    this._foldedImage = this.shadowRoot.querySelector('#folded-image');
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

    let mediaQueryList = window.matchMedia("(horizontal-viewport-segments: 2)");
    mediaQueryList.addEventListener("change", () => this._viewportSegmentsEnabled);
    if (mediaQueryList.matches)
      this._viewportSegmentsEnabled();

    mediaQueryList = window.matchMedia("(vertical-viewport-segments: 2)");
    mediaQueryList.addEventListener("change", () => this._viewportSegmentsEnabled);
    if (mediaQueryList.matches)
      this._viewportSegmentsEnabled();

    if (navigator.devicePosture != undefined) {
      console.log('Posture at page load : ' + navigator.devicePosture.type);
      this._cardText.innerHTML = navigator.devicePosture.type;
      this._showDevicePostureImage(navigator.devicePosture.type);
      navigator.devicePosture.onchange = () => {
        this._cardText.innerHTML = navigator.devicePosture.type;
        this._showDevicePostureImage(navigator.devicePosture.type);
      };
    } else {
      this._cardText.innerHTML = "Not supported by browser.";
      this._showDevicePostureImage();
    }
  }

  _showDevicePostureImage(posture) {
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
  }

  _viewportSegmentsEnabled() {
    let computedStyleCol1 = getComputedStyle(this._col1);
    let computedStyleCol2 = getComputedStyle(this._col2);
    this._col1Text.innerHTML = 'Viewport Segment #1 <br> Dimensions: ' + computedStyleCol1.width + ' - ' + computedStyleCol1.height;
    this._col2Text.innerHTML = 'Viewport Segment #2 <br> Dimensions: ' + computedStyleCol2.width + ' - ' + computedStyleCol2.height;
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

  render() {
    return html`
      <sl-card class="posture-header">
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
        The current posture of the device is : 
        <div id="card-text"></div>
      </sl-card>
      <div id="segment-css-container">
        <div class="not-supported"> CSS Viewport Segments and Device Posture APIs are not supported in this browser.</div>
        <div id="col1">
          <div id="col1-text" class="segment-text"></div>
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
    `;
  }
}

customElements.define("main-application", MainApplication);