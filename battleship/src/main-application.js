import { LitElement, html, css as litCSS, customElement } from '../web_modules/lit-element.js';
import { classMap } from '../web_modules/lit-html/directives/class-map.js';
import { adjustCSS, observe } from "../web_modules/spanning-css-polyfill.js";

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "main-application");
  return litCSS([string], ...values);
};

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

    @media (spanning: single-fold-vertical) {}

    @media (spanning: single-fold-horizontal) {}

    @media (spanning: none) {}
  `;

  firstUpdated() {
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    observe(this);
  }
  render() {
    return html`
      <div>Hello Battleship</div>
    `;
  }
}

customElements.define("main-application", MainApplication);