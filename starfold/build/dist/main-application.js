function e(i,t,s){return t in i?Object.defineProperty(i,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[t]=s,i}import{LitElement as a,html as n,css as h}from"../web_modules/lit-element.js";import{adjustCSS as r,observe as o}from"../web_modules/spanning-css-polyfill.js";import"../web_modules/@material/mwc-button.js";import"../web_modules/@material/mwc-icon-button.js";import"../web_modules/@material/mwc-snackbar.js";import{Workbox as d,messageSW as c}from"../web_modules/workbox-window.js";const p=(i,...t)=>{const s=r(i[0],"main-application");return h([s],...t)};export class MainApplication extends a{firstUpdated(){if(this._canvas=this.shadowRoot.querySelector("#canvas"),this._canvas&&this._canvas.getContext&&(this._context=this._canvas.getContext("2d")),!this._context){console.error("Your browser doesn't support canvas, this demo won't work");return}this._snackbar=this.shadowRoot.querySelector("#snackbar"),this._snackbar.addEventListener("MDCSnackbar:closed",t=>{t.detail.reason==="action"&&(this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&c(this._wbRegistration.waiting,{type:"SKIP_WAITING"}))}),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new d("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSnackbar()),this._wb.addEventListener("externalwaiting",()=>this._showSnackbar()),this._wbRegistration=await this._wb.register()});const i=window.getComputedStyle(this._canvas);this._canvas.width=parseInt(i.width,10),this._canvas.height=parseInt(i.height,10),window.addEventListener("resize",this._onResize),this._ship=this.shadowRoot.querySelector("#ship"),this._background=this.shadowRoot.querySelector("#background"),this._ship.onload=this._startGame.bind(this),document.addEventListener("keydown",this._handleKeyDown,!1),requestAnimationFrame(this._drawCanvas)}constructor(){super();e(this,"_snackbar",void 0),e(this,"_wb",void 0),e(this,"_wbRegistration",void 0),e(this,"_ship",void 0),e(this,"_shipSize",80),e(this,"_shipY",0),e(this,"_shipX",0),e(this,"_background1Y",0),e(this,"_background2Y",0),e(this,"_handleKeyDown",i=>{i.keyCode==37?this._moveShipLeft():i.keyCode==39&&this._moveShipRight()}),e(this,"_drawCanvas",i=>{this._context.clearRect(0,0,this._canvas.width,this._canvas.height),this._drawBackground(),this._drawShip(),requestAnimationFrame(this._drawCanvas)}),e(this,"_onResize",async i=>{const t=window.getComputedStyle(this._canvas);this._canvas.width=parseInt(t.width,10),this._canvas.height=parseInt(t.height,10)})}connectedCallback(){super.connectedCallback(),o(this)}_showSnackbar(){this._snackbar.show()}_deviceSupportsSpanningMQs(){const i=window.matchMedia("(spanning: single-fold-horizontal)").matches||window.matchMedia("(spanning: single-fold-vertical)").matches||window.matchMedia("(spanning: none)").matches||!1;return i}_startGame(){this._shipX=this._canvas.width/2-this._shipSize/2,this._shipY=this._canvas.height-this._shipSize,this._background2Y=-this._canvas.height,this._background1Y=-this._canvas.height}_drawShip(){this._context.drawImage(this._ship,this._shipX,this._shipY,this._shipSize,this._shipSize)}_drawBackground(){this._background1Y=this._background1Y-1,this._background2Y=this._background2Y+1,this._background1Y<-2*this._canvas.height&&(this._background1Y=0),this._background2Y>this._canvas.height&&(this._background2Y=-this._canvas.height),this._context.drawImage(this._background,0,this._background2Y,this._canvas.width,this._canvas.height),this._context.save(),this._context.scale(-1,-1),this._context.drawImage(this._background,-this._canvas.width,this._background1Y,this._canvas.width,this._canvas.height),this._context.restore()}_moveShipLeft(){if(this._shipX<=10)return;this._shipX-=10}_moveShipRight(){if(this._shipX+10>=this._canvas.width-this._shipSize)return;this._shipX+=10}render(){return n`
      <canvas id="canvas"></canvas>
      <picture class="hidden">
        <source srcset="images/ship.webp" type="image/webp"/>
        <img id="ship" src="images/ship.png">
      </picture>
      <picture class="hidden">
          <source media="(max-width: 767px)"
                  srcset="images/starfield-412.webp 412w, images/starfield-768.webp 768w, images/starfield-800.webp 800w"
                  sizes="(max-width: 767px) 412px, 768px, 800px" type="image/webp"/>
          <source media="(max-width: 767px)"
                  srcset="images/starfield-412.jpg 412w, images/starfield-768.jpg 768w, images/starfield-800.jpg 800w"
                  sizes="(max-width: 767px) 412px, 768px, 800px" type="image/jpeg"/>
          <source media="(max-width: 1366px)"
                  srcset="images/starfield-1024.webp 1024w, images/starfield-1366.webp 1366w"
                  sizes="(max-width: 1366px) 1024px, 1366px" type="image/webp"/>
          <source media="(max-width: 1366px)"
                  srcset="images/starfield-1024.jpg 1024w, images/starfield-1366.jpg 1366w"
                  sizes="(max-width: 1366px) 1024px, 1366px" type="image/jpeg"/>
          <source media="(max-width: 1440px)"
                  srcset="images/starfield-1440.webp 1440w, images/starfield-1366.webp 1366w"
                  sizes="(max-width: 1440px) 1440px, 1366px" type="image/webp"/>
          <source media="(max-width: 1440px)"
                  srcset="images/starfield-1440.jpg 1440w, images/starfield-1366.jpg 1366w"
                  sizes="(max-width: 1440px) 1440px, 1366px" type="image/jpeg"/>
          <source media="(max-width: 1920px)"
                  srcset="images/starfield-1920.webp 1920w, images/starfield-1440.webp 1440w"
                  sizes="(max-width: 1920px) 1920px, 1440px" type="image/webp"/>
          <source media="(max-width: 1920px)"
                  srcset="images/starfield-1920.jpg 1920w, images/starfield-1440.jpg 1440w"
                  sizes="(max-width: 1920px) 1920px, 1440px" type="image/jpeg"/>
          <source media="(min-width: 1920px)"
                  srcset="images/starfield-4k.webp 2560w, images/starfield-1920.webp 1920w"
                  sizes="(max-width: 1920px) 2560px, 1920px" type="image/webp"/>
          <source media="(min-width: 1920px)"
                  srcset="images/starfield-4k.jpg 2560w, images/starfield-1920.jpg 1920w"
                  sizes="(max-width: 1920px) 2560px, 1920px" type="image/jpeg"/>
          <img id="background" src="images/starfield-1024.jpg" alt="Background of a starfield">
        </picture>
      <mwc-snackbar id="snackbar" labelText="A newer version of the application is available." leading>
        <mwc-button slot="action">RELOAD</mwc-button>
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
    `}}e(MainApplication,"styles",p`
    :host {
      width: 100vw;
      height: 100vh;
      --background-color: #f9f7f1;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    #canvas {
      width: 100%;
      height: 100%;
    }

    .hidden {
      display: none;
    }
  `),customElements.define("main-application",MainApplication);
