function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { LitElement, html, css as litCSS } from '../_snowpack/pkg/lit.js';
import { adjustCSS, observe } from "../_snowpack/pkg/viewportsegments-css-polyfill.js";

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "dialog-box");
  return litCSS([string], ...values);
};

export class DialogBox extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    observe(this);
  }

  firstUpdated() {
    this._label = this.shadowRoot.querySelector('.label');
  }

  showMessage(text) {
    this._label.innerHTML = text;
    this.open();
  }

  close() {
    this.shadowRoot.host.style.visibility = 'hidden';
  }

  open() {
    this.shadowRoot.host.style.visibility = 'visible';
  }

  render() {
    return html`
      <div class="content">
        <div class="items">
          <div class="title">
            <slot name="title"></slot>
          </div>
          <div class="label">
            <slot name="label"></slot>
          </div>
          <div class="button">
            <slot name="menu-1"></slot>
          </div>
          <div class="button">
            <slot name="menu-2"></slot>
          </div>
        </div>
      </div>
    `;
  }

}

_defineProperty(DialogBox, "styles", css`
    :host {
      width: 25vw;
      height: 30vh;
      position: absolute;
      top: calc(50vh - 15vh);
      left: calc(50vw - 12.5vw);
      z-index: 4;
      visibility: hidden;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .content {
      background: linear-gradient(to bottom, rgba(94,205,199,1) 0%, rgba(41,184,229,1) 53%, rgba(56,136,192,1) 100%);
      padding: 4px;
      height: 100%;
      border-radius: 1em;
    }

    .items {
      background-color: white;
      display: flex;
      height: 100%;
      border-radius: 1em;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .label {
      font-size: 1.5vw;
      text-align: center;
      margin-bottom: 10px;
    }

    .title {
      font-size: 2vw;
      text-align: center;
      margin-bottom: 10px;
    }

    .button {
      margin-bottom: 10px;
    }

    .button:hover {
      filter: drop-shadow(5px 5px 5px black) saturate(30%);
    }

    @media (vertical-viewport-segments: 2) {
      :host {
        width: 32vw;
        height: 15vh;
        top: calc(env(viewport-segment-top 0 1) + (100vh - env(viewport-segment-top 0 1) + calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0))) / 2 - 10vh);
        left: calc(50vw - 15vw);
      }
    }

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      :host {
        width: 25vw;
        height: 30vh;
        top: calc(50vh - 15vh);
        left: calc(50vw - 12.5vw);
      }
    }

    @media (horizontal-viewport-segments: 2) {
      :host {
        width: 20vw;
        height: 30vh;
        top: calc(50vh - 20vh);
        left: calc(env(viewport-segment-right 0 0) + (100vw - env(viewport-segment-right 0 0) + calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0))) / 2 - 10vw);
      }
    }

    @media (max-width: 1024px) and (orientation: landscape) and (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .title {
        font-size: 1em;
      }

      :host {
        width: 50vw;
        height: 55vh;
        top: calc(50vh - 35vh);
        left: calc(50vw - 25vw);
      }
    }

    @media (max-width: 1024px) and (orientation: portrait) and (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .title {
        font-size: 1em;
      }

      :host {
        width: 50vw;
        height: 25vh;
        top: calc(50vh - 20vh);
        left: calc(50vw - 25vw);
      }
    }

  `);

customElements.define("dialog-box", DialogBox);