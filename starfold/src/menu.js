import { LitElement, html, css } from '/web_modules/lit-element.js';
import { FoldablesFeature } from '/web_modules/windowsegments-polyfill.js';

export class Menu extends LitElement {
  static styles = css`
    :host {
      width: 25vw;
      height: 25vh;
      position: absolute;
      top: calc(50vh - 12.5vh);
      left: calc(50vw - 12.5vw);
      z-index: 4;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    #content {
      width: 100%;
      height: 100%;
      background-image: url("images/menu.png");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: top left;
      padding: 20px;
    }

    #menu {
      border: solid 1px #5ac6bb;
      border-radius: 10px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      background-color: black;
      background-image: url("images/metal.jpg");
      background-repeat: no-repeat;
      background-position: top left;
      background-size: 100% 100%;
    }

    .menu-button {
      width: 80%;
      display: block;
      margin: auto;
    }

    .menu-button:hover {
      filter: drop-shadow(5px 5px 5px black) contrast(150%);
    }

    .title {
      color: white;
      font-family: 'Russo One', sans-serif;
      font-size: 1.2em;
      margin-top: 20px;
    }

    .grow {
      flex-grow: 2;
      margin-bottom: 20px;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
      .title {
        font-size: 1em;
      }
    }
  `;

  _spanning = false;

  firstUpdated() {  }

  constructor() {
    super();
  }

  handleSpanning() {
    this._spanning = window.getWindowSegments().length > 1;
    let rootStyle = this.shadowRoot.host.style;
    if (this._spanning) {
      const segment = window.getWindowSegments()[0];
      if (segment.width > segment.height) {
        rootStyle.top = "calc(25vh - 12.5vh)";
        rootStyle.left = "calc(50vw - 20vw)";
        rootStyle.width = '40vw';
        rootStyle.height = segment.height / 3 + 'px';
      } else {
        rootStyle.top = "calc(50vh - 12.5vh)";
        rootStyle.width = '25vw';
        rootStyle.left = "calc(25vw - 12.5vw)";
        rootStyle.height = window.getWindowSegments()[0].height / 4 + 'px';
      }
    } else {
      rootStyle.top = "calc(50vh - 12.5vh)";
      rootStyle.left = "calc(50vw - 12.5vw)";
      rootStyle.width = '25vw';
      rootStyle.height = '25vh';
    }
  }

  close() {
    this.shadowRoot.host.style.visibility = 'hidden';
  }

  open() {
    this.shadowRoot.host.style.visibility = 'visible';
  }

  _startClicked() {
    let event = new CustomEvent('start-clicked', {
      detail: { message: 'Start clicked.'},
      bubbles: true,
      composed: true });
    this.dispatchEvent(event);
    this.close();
  }

  render() {
    return html`
      <div id="content">
          <div id="menu">
            <div class="title">Welcome to Star Fold</div>
            <div class="grow"></div>
            <picture>
              <source srcset="images/play-button.webp" type="image/webp"/>
              <img  class="menu-button" src="images/play-button.png" @click="${this._startClicked}">
            </picture>
            <div class="grow"></div>
          </div>
      </div>
    `;
  }
}

customElements.define("main-menu", Menu);