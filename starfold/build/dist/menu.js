function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}import{LitElement as o,html as s,css as l}from"../web_modules/lit-element.js";import"../web_modules/windowsegments-polyfill.js";export class Menu extends o{firstUpdated(){}constructor(){super();n(this,"_spanning",!1)}handleSpanning(){this._spanning=window.getWindowSegments().length>1;let e=this.shadowRoot.host.style;if(this._spanning){const t=window.getWindowSegments()[0];t.width>t.height?(e.top="calc(25vh - 12.5vh)",e.left="calc(50vw - 20vw)",e.width="40vw",e.height=t.height/3+"px"):(e.top="calc(50vh - 12.5vh)",e.width="25vw",e.left="calc(25vw - 12.5vw)",e.height=window.getWindowSegments()[0].height/4+"px")}else e.top="calc(50vh - 12.5vh)",e.left="calc(50vw - 12.5vw)",e.width="25vw",e.height="25vh"}close(){this.shadowRoot.host.style.visibility="hidden"}open(){this.shadowRoot.host.style.visibility="visible"}_startClicked(){let e=new CustomEvent("start-clicked",{detail:{message:"Start clicked."},bubbles:!0,composed:!0});this.dispatchEvent(e),this.close()}render(){return s`
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
    `}}n(Menu,"styles",l`
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
  `),customElements.define("main-menu",Menu);
