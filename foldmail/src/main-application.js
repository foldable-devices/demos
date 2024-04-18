import { LitElement, html, css as litCSS } from 'lit';
import { adjustCSS, observe } from "viewportsegments-css-polyfill";
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import 'foldable-device-configurator';
import './list-item.js';
import './email-panel.js';
import { Workbox, messageSW} from 'workbox-window';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('/demos/foldmail/');

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "main-application");
  return litCSS([string], ...values);
};

export class MainApplication extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
      height: 100vh;
      --background-color: #ffffff;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      overflow: hidden;
    }

    .content {
      width: 100%;
      height: 100%;
      background-color: var(--background-color);
      display: flex;
      flex-direction: row;
    }

    .list {
      width: 30%;
      border: solid 1px lightgray;
      overflow-y: scroll;
    }

    .panel {
      width: 70%;
      border: solid 1px lightgray;
      height: 100%;
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

    .fold {
      background-color: lightgray;
    }

    @media (horizontal-viewport-segments: 2) and (device-posture: folded) {
      .list {
        width: env(viewport-segment-width 0 0);
      }

      .content {
        flex-direction: row;
      }

      .fold {
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
      }

      .panel {
        width: env(viewport-segment-width 1 0);
      }
    }

    @media (vertical-viewport-segments: 2) and (device-posture: folded) {
      .list {
        width: 100%;
        height: env(viewport-segment-height 0 0);
      }

      .content {
        flex-direction: column;
      }

      .fold {
        height: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));
      }

      .panel {
        width: 100%;
        height: env(viewport-segment-height 0 1);
      }
    }
  `;

  _swAlert;
  _wb;
  _wbRegistration = undefined;

  firstUpdated() {
    this._swAlert = this.shadowRoot.querySelector('#sw-alert');
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

  render() {
    return html`
      <foldable-device-configurator></foldable-device-configurator>
      <div class="content">
        <div class="list">
          <list-item></list-item>
          <list-item></list-item>
          <list-item></list-item>
          <list-item></list-item>
          <list-item></list-item>
          <list-item></list-item>
          <list-item></list-item>
          <list-item></list-item>
          <list-item></list-item>
          <list-item></list-item>
          <list-item></list-item>
        </div>
        <div class="fold"></div>
        <div class="panel">
          <email-panel></email-panel>
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