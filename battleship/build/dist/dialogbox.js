function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}import{LitElement as e,html as f,css as g}from"../web_modules/lit-element.js";import{adjustCSS as h,observe as i}from"../web_modules/spanning-css-polyfill.js";const j=(a,...b)=>{const c=h(a[0],"dialog-box");return g([c],...b)};export class DialogBox extends e{constructor(){super()}connectedCallback(){super.connectedCallback(),i(this)}firstUpdated(){this._label=this.shadowRoot.querySelector(".label")}showMessage(a){this._label.innerHTML=a,this.open()}close(){this.shadowRoot.host.style.visibility="hidden"}open(){this.shadowRoot.host.style.visibility="visible"}buttonClicked(){let a=new CustomEvent("button-clicked",{detail:{message:"Button clicked."},bubbles:!0,composed:!0});this.dispatchEvent(a),this.close()}render(){return f`
      <div class="content">
        <div class="text">
          <div class="label">You won!</div>
          <picture class="picture">
            <source srcset="images/restart-button.webp" type="image/webp">
            <img class="button" src="images/restart-button.png" @click="${this.buttonClicked}"/>
          </picture>
        </div>
      </div>
    `}}d(DialogBox,"styles",j`
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

    @media (spanning: single-fold-horizontal) {
      :host {
        width: 15vw;
        height: 15vh;
        top: calc(75vh - 7.5vh);
        left: calc(50vw - 7.5vw);
      }
    }

    @media (spanning: none) {
      :host {
        width: 15vw;
        height: 15vh;
        top: calc(50vh - 7.5vh);
        left: calc(50vw - 7.5vw);
      }
    }

    @media (spanning: single-fold-vertical) {
      :host {
        width: 15vw;
        height: 15vh;
        top: calc(50vh - 7.5vh);
        left: calc(75vw - 7.5vw);
      }
    }

  `),customElements.define("dialog-box",DialogBox);
