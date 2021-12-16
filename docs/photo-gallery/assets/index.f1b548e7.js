var u=Object.defineProperty;var p=(r,e,i)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i;var t=(r,e,i)=>(p(r,typeof e!="symbol"?e+"":e,i),i);import{s as c,p as n,n as w,v as f,a as b,o as _,w as v,r as y}from"./vendor.385f9852.js";const k=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}};k();const h=(r,...e)=>{const i=v(r[0],"main-application");return y([i],...e)};class m extends c{render(){return n`
      <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
    `}}t(m,"styles",h`
    .spinner {
      width: 65px;
      height: 65px;
      animation: rotator 1.4s linear infinite;
    }

    @keyframes rotator {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(270deg); }
    }

    .path {
      stroke-dasharray: 187;
      stroke-dashoffset: 0;
      transform-origin: center;
      animation:
        dash 1.4s ease-in-out infinite,
        colors 6.4s ease-in-out infinite;
    }

    @keyframes colors {
      0% { stroke: #4285F4; }
      25% { stroke: #DE3E35; }
      50% { stroke: #F7C223; }
      75% { stroke: #1B9A59; }
      100% { stroke: #4285F4; }
    }

    @keyframes dash {
      0% {
        stroke-dashoffset: 187;
      }
      50% {
        stroke-dashoffset: 46.75;
        transform: rotate(135deg);
      }
      100% {
        stroke-dashoffset: 187;
        transform: rotate(450deg);
      }
    }
  `);customElements.define("mwc-circular-progress",m);class d extends c{constructor(){super(...arguments);t(this,"_spinner");t(this,"_image");t(this,"_legend")}firstUpdated(){this._spinner=this.shadowRoot.querySelector("mwc-circular-progress"),this._image=this.shadowRoot.querySelector("img"),this._legend=this.shadowRoot.querySelector("#text")}updated(e){e.has("src")&&(this._spinner.style.visibility="visible",this._image.addEventListener("load",()=>{this._spinner.style.visibility="hidden",this.style.visibility="visible",this._legend.innerText=this.description},{once:!0}),this._image.src=this.src)}render(){return n`
      <div id="wrapper">
        <img/>
        <div id="text"></div>
        <mwc-circular-progress></mwc-circular-progress>
      </div>
    `}}t(d,"styles",h`
    :host {
      width: 100%;
      height: 100%;
    }

    #wrapper {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: start;
      align-items: center;
    }

    #text {
      margin: 16px;
      color: white;
      font-size: 1.5em;
      word-wrap: break-word;
      text-align: center;
      height: 20%;
      margin-top: 15px;
    }

    img {
      min-height: 75%;
      height: 90%;
      width: 90%;
      object-fit: contain;
      margin-top: 40px;
    }

    mwc-circular-progress {
      position: absolute;
      top: 50%;
    }
  `),t(d,"properties",{src:{type:String},description:{type:String}});customElements.define("detail-img",d);class g extends c{constructor(){super();t(this,"_full_img");t(this,"_detail_img");t(this,"_detail_container");t(this,"_detail");t(this,"_detail_select");t(this,"_drawer");t(this,"_spinner");t(this,"_styleCheckbox");t(this,"_fold");t(this,"_gallery");t(this,"_fullview_container");t(this,"_snackbar");t(this,"_wb");t(this,"_wbRegistration");t(this,"_styleChanged",e=>{if(this._styleCheckbox.checked)this._fullview_container.style.height="100vh",this._detail_container.style.display="flex",this._fold.style.display="flex";else{let i=window.getComputedStyle(this._gallery).getPropertyValue("height");this._fullview_container.style.height=i,this._detail_container.style.display="none",this._fold.style.display="none",this._gallery.style.height="100vh",this._gallery.style.width="100vw"}});this._full_view_container_classes={hidden:!0}}firstUpdated(){this._gallery=this.shadowRoot.querySelector(".gallery"),this._full_img=this.shadowRoot.querySelector("#full-img"),this._detail_img=this.shadowRoot.querySelector("detail-img"),this._detail_container=this.shadowRoot.querySelector(".detail-container"),this._detail=this.shadowRoot.querySelector(".detail"),this._detail_select=this.shadowRoot.querySelector(".detail-select"),this._spinner=this.shadowRoot.querySelector("mwc-circular-progress"),this._drawer=this.shadowRoot.querySelector("#drawer"),this._snackbar=this.shadowRoot.querySelector("#snackbar"),this._fold=this.shadowRoot.querySelector(".fold"),this._styleCheckbox=this.shadowRoot.querySelector("mwc-checkbox"),this._styleCheckbox.addEventListener("change",this._styleChanged),this._fullview_container=this.shadowRoot.querySelector(".fullview-container"),this._snackbar.addEventListener("MDCSnackbar:closed",e=>{e.detail.reason==="action"&&(this._wb.addEventListener("controlling",i=>{console.log("reloading"),window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&w(this._wbRegistration.waiting,{type:"SKIP_WAITING"}))}),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new f("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSnackbar()),this._wb.addEventListener("externalwaiting",()=>this._showSnackbar()),this._wbRegistration=await this._wb.register()})}connectedCallback(){super.connectedCallback(),b(this)}_openDrawer(){this._drawer.open=!0}_showSnackbar(){this._snackbar.show()}_openPicture(e){const o=e.currentTarget.children[1].currentSrc.replace("-l","");if(window.getComputedStyle(this._detail_container).width!="0px"&&this._styleCheckbox.checked){if(this._detail_select.style.display="none",this._detail.style.visibility="visible",this._detail_img.src===o)return;this._detail_img.description=e.currentTarget.children[1].alt,this._detail_img.src=o,this._detail_img.style.visibility="hidden"}else this._full_view_container_classes={hidden:!1},this._full_img.setAttribute("src",o),this._spinner.style.visibility="visible",this._full_img.addEventListener("load",()=>{this._spinner.style.visibility="hidden"},{once:!0}),this._current_image=e.currentTarget}_closePicture(){this._full_view_container_classes={hidden:!0}}_previousPicture(e){if(e.stopPropagation(),this._current_image.parentNode.previousElementSibling){const i=this._current_image.parentNode.previousElementSibling.children[0],a=i.children[1].currentSrc.replace("-l","");this._full_img.setAttribute("src",a),this._current_image=i}}_nextPicture(e){if(e.stopPropagation(),this._current_image.parentNode.nextElementSibling){const i=this._current_image.parentNode.nextElementSibling.children[0],a=i.children[1].currentSrc.replace("-l","");this._full_img.setAttribute("src",a),this._current_image=i}}render(){const e=[{name:"images/air-balloon-l",alt:"This is a beautiful picture of an air balloon in the sky."},{name:"images/asia-l",alt:"This photo depicts a woman on a boat somewhere in Asia."},{name:"images/china-l",alt:"Architecture in China, a tower of a building."},{name:"images/church-l",alt:"A black church in the middle of nowhere."},{name:"images/city-l",alt:"A modern city somewhere in Asia."},{name:"images/waterfall2-l",alt:"River with a tiny waterfall."},{name:"images/cloud-l",alt:"Clouds in the sky, view from high altitude."},{name:"images/desert-l",alt:"A desert with cactus."},{name:"images/river2-l",alt:"A river inside a canyon."},{name:"images/disney-l",alt:"The Disney castle in Orlando"},{name:"images/forest-l",alt:"A road crossing a green forest"},{name:"images/greece-l",alt:"Greece architecture"},{name:"images/city2-l",alt:"A city street with an arch"},{name:"images/lake-l",alt:"Women coming out of a lake somewhere lost in the nature"},{name:"images/mountain-l",alt:"Peak of a high mountain and a cloudy sky"},{name:"images/new-york-l",alt:"A street in New York"},{name:"images/pool-l",alt:"Relaxing pool in a luxury hotel"},{name:"images/restaurant-l",alt:"Restaurant on the edge of a river somewhere in France"},{name:"images/river-l",alt:"River with people kayaking"},{name:"images/road-l",alt:"Long straight road somewhere in USA"},{name:"images/sand-l",alt:"Desert with rocky mountains on the background"},{name:"images/sea-l",alt:"Beautiful transparent sea water somewhere in the pacific"},{name:"images/sfo-l",alt:"Golden gate in San Francisco"},{name:"images/stars-l",alt:"Wonderful astronomy shot of stars in the sky"},{name:"images/tents-l",alt:"Camping tents hanging on a cliff"},{name:"images/waterfall-l",alt:"Picture of a waterfall between big rocks"},{name:"images/mountain2-l",alt:"Beautiful picture of a mountain landscape"},{name:"images/wave-l",alt:"This is a picture from a wave in the ocean"},{name:"images/aerial-l",alt:"This is an aerial picture of a city"},{name:"images/building-l",alt:"This is a picture from inside a building"},{name:"images/catamaran-l",alt:"This is a picture of a catamaran with blue water"},{name:"images/cats-l",alt:"Thisa picture of two cats sleeping"},{name:"images/egypt-l",alt:"This is a picture from somewhere in Egypt"},{name:"images/feather-l",alt:"This is a picture of colorful feathers"},{name:"images/fruits-l",alt:"This is a picture of a water bottle and fruits"},{name:"images/golden-gate-l",alt:"This is a picture of the Golden Gate"},{name:"images/marocco-l",alt:"This is a picture of ancient building in Marocco"},{name:"images/milky-way-l",alt:"This is a picture from the Milky Way"},{name:"images/palm-tree-l",alt:"This is a picture of palm trees with beautiful weather"},{name:"images/rainbow-l",alt:"This is a picture of a rainbow from a light"},{name:"images/road2-l",alt:"This is a picture from a road with a lot of trees"},{name:"images/surf-l",alt:"This is a picture of a surfer"},{name:"images/volcano-l",alt:"This is an aerial picture of a volcano"}];return n`
      <foldable-device-configurator></foldable-device-configurator>
      <mwc-drawer type="modal" hasHeader id="drawer">
        <span slot="title">Configuration</span>
        <div class="drawer">
            Split UX : <mwc-checkbox checked></mwc-checkbox>
        </div>
        <div slot="appContent" class="content">
          <mwc-snackbar id="snackbar" labelText="A newer version of the application is available." leading>
            <mwc-button slot="action">RELOAD</mwc-button>
            <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
          </mwc-snackbar>
          <mwc-icon-button icon="menu" class="menu-icon" @click="${this._openDrawer}"></mwc-icon-button>
          <div class="gallery">
            ${e.map(i=>n`
              <figure class="gallery-item">
                <picture @click="${this._openPicture}">
                  <source srcset="${i.name}.webp" type="image/webp">
                  <img src="${i.name}.jpg" class="gallery-img" alt=${i.alt}>
                </picture>
              </figure>
            `)}
          </div>

          <div class="fold angled stripes"></div>

          <div class="detail-container">
            <div class="detail-select">Select an image in the gallery.</div>
            <div class="detail">
              <detail-img></detail-img>
            </div>
          </div>

          <div class="fullview-container ${_(this._full_view_container_classes)}" @click="${this._closePicture}">
            <div class="close" @click="${this._closePicture}"></div>
            <div class="arrow-left" @click="${this._previousPicture}"></div>
            <mwc-circular-progress></mwc-circular-progress>
            <img id="full-img">
            <div class="arrow-right" @click="${this._nextPicture}"></div>
          </div>
        </div>
      </mwc-drawer>
    `}}t(g,"styles",h`
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

    .fullview-container {
      height: 100%;
      width: 100%;
      backdrop-filter: blur(5px) contrast(.8);
      -webkit-backdrop-filter: blur(5px) contrast(.8);
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .content {
      display: flex;
      flex-direction: row;
    }

    .fullview-container.hidden {
      display: none;
    }

    .arrow-left {
      width: 30px;
      height: 30px;
      border-bottom: solid 10px white;
      border-left: solid 10px white;
      opacity: 0.7;
      border-radius: 15%;
      transform: rotate(45deg);
    }

    .arrow-right {
      width: 30px;
      height: 30px;
      border-top: solid 10px white;
      border-right: solid 10px white;
      opacity: 0.7;
      border-radius: 15%;
      transform: rotate(45deg);
    }

    .arrow-right:hover, .arrow-left:hover {
      opacity: 1;
    }

    #full-img {
      height: 95%;
      width: 85%;
      object-fit: contain;
      user-select: none;
    }

    .loading {
      min-height: 70%;
      height: 70%;
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      visibility: hidden;
    }

    .close {
      position: absolute;
      right: 20px;
      top: 20px;
      width: 32px;
      height: 32px;
      opacity: 0.3;
      background-color: white;
    }

    .close:hover {
      opacity: 1;
    }

    .close:before, .close:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 33px;
      width: 2px;
      background-color: #333;
    }

    .close:before {
      transform: rotate(45deg);
    }

    .close:after {
      transform: rotate(-45deg);
    }

    .gallery {
      width: 100vw;
      height: 100vh;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-template-rows: repeat(auto-fit, 1fr);
      grid-gap: 2px;
      background-color: black;
      grid-auto-flow: dense;
      overflow-y: scroll;
      scrollbar-width: thin;
      --scrollbar-background: #dfdfdf;
      --scrollbar-thumb: #84898b;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
      .gallery {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      }
    }

    .gallery::-webkit-scrollbar {
      width: 11px;
    }
    .gallery {
      scrollbar-width: thin;
      scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-background);
    }
    .gallery::-webkit-scrollbar-track {
      background: var(--scrollbar-background);
    }
    .gallery::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-thumb) ;
      border-radius: 10px;
      border: 3px solid var(--scrollbar-background);
    }

    .detail-container {
      height: 0vh;
      width: 0vw;
      background-color: black;
      color: white;
      overflow: hidden;
    }

    .stripes {
      height: 250px;
      width: 200px;
      background-size: 40px 40px;
    }

    .angled {
      background-color: #737373;
      background-image:
        linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,
        transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,
        transparent 75%, transparent);
    }

    .fold {
      height: 0;
      width: 0;
    }

    .detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      visibility: hidden;
    }

    .detail-select {
      color: white;
      font-size: 2em;
      text-align: center;
      margin-top : 20px;
    }

    .gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    mwc-circular-progress {
      position: absolute;
      top: 50%;
    }

    mwc-checkbox {
      --mdc-theme-secondary: black;
    }

    mwc-icon-button {
      z-index: 2;
    }

    mwc-drawer {
      z-index: 3;
    }

    mwc-snackbar {
      --mdc-snackbar-action-color: white;
    }

    .menu-icon {
      position: absolute;
      top: 5px;
      left: 5px;
      color: white;
    }

    .drawer {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-left: 12px;
    }

    @media (horizontal-viewport-segments: 2) {
      .gallery {
        width: env(viewport-segment-right 0 0);
        height: 100vh;
      }

      .fold {
        height: env(viewport-segment-height 0 0);
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
      }

      .content {
        flex-direction: row;
      }

      .detail-container {
        height: 100vh;
        width: env(viewport-segment-width 1 0);
      }
    }

    @media (vertical-viewport-segments: 2) {
      .gallery {
        width: 100vw;
        height: var(--zenbook-span1-height, env(viewport-segment-top 0 1));
      }

      .fold {
        height: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));
        width: env(viewport-segment-width 0 0);
      }

      .content {
        flex-direction: column-reverse;
      }

      .detail-container {
        height: var(--zenbook-span2-height, env(viewport-segment-height 0 0));
        width: 100vw;
      }
    }

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .gallery {
        width: 100vw;
        height: 100vh;
      }

      .fold {
        height: 0;
        width: 0;
      }

      .content {
        flex-direction: row;
      }

      .detail-container {
        height: 0vh;
        width: 0vw;
      }

      /* This is only temporary for the Neo emulator, otherwise background blur is awfully slow */
      .fullview-container {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        background: rgb(0, 0, 0, 0.5);
        height: 100vh;
      }
    }
  `),t(g,"properties",{_full_view_container_classes:{type:String}});customElements.define("main-application",g);
