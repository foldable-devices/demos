function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}import{LitElement as o,html as s,css as l}from"../web_modules/lit-element.js";import"../web_modules/windowsegments-polyfill.js";export class Menu extends o{firstUpdated(){}constructor(){super();n(this,"_spanning",!1)}handleSpanning(){this._spanning=window.getWindowSegments().length>1;let t=this.shadowRoot.host.style;if(this._spanning){const e=window.getWindowSegments()[0];e.width>e.height?(t.top="calc(25vh - 12.5vh)",t.left="calc(50vw - 20vw)",t.width="40vw",t.height=e.height/2+"px"):(t.top="calc(50vh - 12.5vh)",t.width="25vw",t.left="calc(25vw - 12.5vw)",t.height=window.getWindowSegments()[0].height/3+"px")}else t.top="",t.left="",t.width="",t.height=""}close(){this.shadowRoot.host.style.visibility="hidden"}open(){this.shadowRoot.host.style.visibility="visible"}render(){return s`
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
    `}}n(Menu,"styles",l`
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
        width: 50vw;
        height: 30vh;
        top: calc(50vh - 20vh);
        left: calc(50vw - 30vw);
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
  `),customElements.define("game-menu",Menu);
