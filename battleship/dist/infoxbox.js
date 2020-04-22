function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { LitElement, html, css as litCSS } from '../web_modules/lit-element.js';
import { adjustCSS, observe } from "../web_modules/spanning-css-polyfill.js";

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "info-box");
  return litCSS([string], ...values);
};

export class SpeechBubble extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="content">
        <svg  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 132 136">
          <path class="path" d="M66.1 1.5C30.4 1.5 1.5 22.9 1.5 46c0 18.1 17.9 33.5 42.8 39.3 1.5 14.8-1.3 39-8.5 48.1 10.8-12.5 22.4-33.6 26.6-45.7 1.2 0 2.5.1 3.7.1 35.7 0 64.6-18.7 64.6-41.8S101.8 1.5 66.1 1.5zM35.8 133.4c-.3.4-.7.8-1 1.1.4-.3.7-.7 1-1.1z"/>
        </svg>
        <slot></slot>
      </div>
    `;
  }

}

_defineProperty(SpeechBubble, "styles", litCSS`
    :host {
      width: 100%;
      height: 100%;
    }

    path {
      fill: white;
      stroke: rgba(94,205,199,1);
      stroke-width: 4;
      stroke-linejoin: bevel;
      vector-effect: non-scaling-stroke;
    }

    svg {
      transform: rotateY(180deg);
    }

    .content {
      position: relative;
    }

    ::slotted(*) {
      position: absolute;
      top: 19%;
      left: 3%;
      width: 90%;
      height: 40%;
      font-size: 1vw;
      text-align: center;
    }
  `);

customElements.define("speech-bubble", SpeechBubble);
export class InfoBox extends LitElement {
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
  }

  render() {
    return html`
      <div class="content">
        <speech-bubble class="bubble">
            <div class="label">Let's get started, fire first.</div>
        </speech-bubble>
        <img class="captain" src="images/captain.png"/>
      </div>
    `;
  }

}

_defineProperty(InfoBox, "styles", css`
    :host {
      width: 15vw;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 3;
      opacity: 0.8;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .content {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .label {
      font-size: 1vw;
      line-height: 200%;
      margin: 5px;
    }

    .bubble {
      width: 80%;
    }

    .captain {
      width: 30%;
      align-self: flex-end;
      transform: rotateY(180deg);
      margin-top: -30px;
    }
  `);

customElements.define("info-box", InfoBox);