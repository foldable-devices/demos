import { LitElement, html, css as litCSS } from '../web_modules/lit-element.js';
import { adjustCSS, observe } from "../web_modules/spanning-css-polyfill.js";

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "main-application");
  return litCSS([string], ...values);
};

export class InfoBox extends LitElement {
  static styles = css`
    :host {
      width: 40vw;
      position: absolute;
      top: 0px;
      left: calc(100vw - 70vw);
      transition: all 1s ease-out;
      z-index: 3;
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
      height: 100px;
      border-radius: 1em;
    }

    .text {
      background-color: white;
      display: flex;
      height: 100px;
      border-radius: 1em;
      align-items: center;
      justify-content: center;
    }

    .label {
      font-size: 1.5em;
    }

  `;

  constructor() {
    super();
  }

  firstUpdated() {
    this._label = this.shadowRoot.querySelector('.label');
    setTimeout(() => this.close(), 2000);
  }

  showMessage(text) {
    this._label.innerHTML = text;
    this.open();
  }

  close() {
    this.shadowRoot.host.style.top = '-200px';
  }

  open() {
    this.shadowRoot.host.style.top = '0';
    setTimeout(() => this.close(), 2000);
  }

  render() {
    return html`
      <div class="content">
        <div class="text"><div class="label">Let's get started, fire first.</div></div>
      </div>
    `;
  }
}

customElements.define("info-box", InfoBox);