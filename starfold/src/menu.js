import { LitElement, html, css } from 'lit';

export class Menu extends LitElement {
  static styles = css`
    :host {
      width: 25vw;
      height: 30vh;
      position: absolute;
      top: calc(50vh - 15vh);
      left: calc(50vw - 12.5vw);
      z-index: 4;
      visibility: hidden;
      user-select: none;
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

    .title {
      color: white;
      font-family: 'Russo One', sans-serif;
      font-size: 1.2em;
      margin-top: 20px;
    }

    .grow {
      flex-grow: 2;
    }

    .menu-button {
      margin-top: 10px;
    }

    .last-item {
      margin-bottom: 20px;
    }

    @media (min-width: 320px) and (max-width: 1024px) and (orientation: portrait) {
      .title {
        font-size: 1em;
      }

      :host {
        width: 60vw;
        height: 30vh;
        top: calc(50vh - 20vh);
        left: calc(50vw - 35vw);
      }
    }

    @media (min-width: 320px) and (max-width: 1024px) and (orientation: landscape) {
      .title {
        font-size: 1em;
      }

      :host {
        width: 50vw;
        height: 60vh;
        top: 10vh;
        left: calc(50vw - 30vw);
      }
    }
  `;

  _spanning = false;

  firstUpdated() {  }

  constructor() {
    super();
  }

  handleSpanning() {
    const segments = window.visualViewport.segments();
    this._spanning = segments.length > 1;
    let rootStyle = this.shadowRoot.host.style;
    if (this._spanning) {
      const segment =  segments[0];
      if (segment.width > segment.height) {
        rootStyle.top = 'calc(25vh - 12.5vh)';
        rootStyle.left = 'calc(50vw - 20vw)';
        rootStyle.width = '40vw';
        rootStyle.height = segment.height / 2 + 'px';
      } else {
        rootStyle.top = 'calc(50vh - 12.5vh)';
        rootStyle.width = '25vw';
        rootStyle.left = 'calc(25vw - 12.5vw)';
        rootStyle.height = segments[0].height / 3 + 'px';
      }
    } else {
      rootStyle.top = '';
      rootStyle.left = '';
      rootStyle.width = '';
      rootStyle.height = '';
    }
  }

  close() {
    this.shadowRoot.host.style.visibility = 'hidden';
  }

  open() {
    this.shadowRoot.host.style.visibility = 'visible';
  }

  render() {
    return html`
      <div id="content">
          <div id="menu">
            <div class="title">
              <slot name="title"></slot>
            </div>
            <div class="grow"></div>
            <div class="menu-button">
              <slot name="button"></slot>
            </div>
            <div class="menu-button">
              <slot name="button2"></slot>
            </div>
            <div class="grow last-item"></div>
          </div>
      </div>
    `;
  }
}

customElements.define("game-menu", Menu);