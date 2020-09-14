import { LitElement, html, css as litCSS } from 'lit-element';
import { adjustCSS, observe } from "spanning-css-polyfill";

const css = (strings, ...values) => {
  const string = adjustCSS(strings[0], "dialog-box");
  return litCSS([string], ...values);
};

export class DialogBox extends LitElement {
  static styles = css`
    :host {
      width: 15vw;
      height: 15vh;
      position: absolute;
      top: calc(50vh - 7.5vh);
      left: calc(50vw - 7.5vw);
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

    .text {
      background-color: white;
      display: flex;
      height: 100%;
      border-radius: 1em;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .label {
      font-size: 1vw;
      line-height: 200%;
      text-align: center;
    }

    .picture {
      width: 20%;
      margin-bottom: 5px;
    }

    .button {
      width: 100%;
    }

    .button:hover {
      filter: drop-shadow(5px 5px 5px black) saturate(30%);
    }

    @media (screen-spanning: single-fold-horizontal) {
      :host {
        width: 15vw;
        height: 15vh;
        top: calc(75vh - 7.5vh);
        left: calc(50vw - 7.5vw);
      }
    }

    @media (screen-spanning: none) {
      :host {
        width: 15vw;
        height: 15vh;
        top: calc(50vh - 7.5vh);
        left: calc(50vw - 7.5vw);
      }
    }

    @media (screen-spanning: single-fold-vertical) {
      :host {
        width: 15vw;
        height: 15vh;
        top: calc(50vh - 7.5vh);
        left: calc(75vw - 7.5vw);
      }
    }

  `;

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

  buttonClicked() {
    let event = new CustomEvent('button-clicked', {
      detail: { message: 'Button clicked.'},
      bubbles: true,
      composed: true });
    this.dispatchEvent(event);
    this.close();
  }

  render() {
    return html`
      <div class="content">
        <div class="text">
          <div class="label">You won!</div>
          <picture class="picture">
            <source srcset="images/restart-button.webp" type="image/webp">
            <img class="button" src="images/restart-button.png" @click="${this.buttonClicked}"/>
          </picture>
        </div>
      </div>
    `;
  }
}

customElements.define("dialog-box", DialogBox);