import { LitElement, html, css as litCSS } from '../build/web_modules/lit-element.js';
import { adjustCSS, observe } from "../build/web_modules/spanning-css-polyfill.js";

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "info-box");
  return litCSS([string], ...values);
};

export class SpeechBubble extends LitElement {
  static styles = litCSS`
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

    .label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 62%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="content">
        <svg  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 132 136">
          <path class="path" d="M66.1 1.5C30.4 1.5 1.5 22.9 1.5 46c0 18.1 17.9 33.5 42.8 39.3 1.5 14.8-1.3 39-8.5 48.1 10.8-12.5 22.4-33.6 26.6-45.7 1.2 0 2.5.1 3.7.1 35.7 0 64.6-18.7 64.6-41.8S101.8 1.5 66.1 1.5zM35.8 133.4c-.3.4-.7.8-1 1.1.4-.3.7-.7 1-1.1z"/>
        </svg>
        <div class="label">
          <slot name="text"></slot>
        </div>
      </div>
    `;
  }
}
customElements.define("speech-bubble", SpeechBubble);

export class InfoBox extends LitElement {
  static styles = css`
    :host {
      width: 15vw;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 3;
      opacity: 0.8;
      font-size: 1vw;
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

    .bubble {
      width: 80%;
      height: auto;
    }

    ::slotted(*) {
      line-height: 200%;
      margin: 5px;
      font-size: inherit;
    }

    .picture {
      width: 30%;
      align-self: flex-end;
      margin-top: -3em;
    }

    .captain {
      width: 100%;
      transform: rotateY(180deg);
      opacity: 0.8;
    }
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    observe(this);
  }

  render() {
    return html`
      <div class="content">
        <speech-bubble class="bubble">
            <slot name="label" slot="text"></slot>
        </speech-bubble>
        <picture class="picture">
          <source srcset="images/captain.webp" type="image/webp">
          <img class="captain" src="images/captain.png" alt="captain face"/>
        </picture>
      </div>
    `;
  }
}

customElements.define("info-box", InfoBox);