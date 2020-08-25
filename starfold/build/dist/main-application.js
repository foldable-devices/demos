function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}import{LitElement as a,html as h,css as r}from"../web_modules/lit-element.js";import{adjustCSS as o,observe as n}from"../web_modules/spanning-css-polyfill.js";import"../web_modules/@material/mwc-button.js";import"../web_modules/@material/mwc-icon-button.js";import"../web_modules/@material/mwc-snackbar.js";import{Workbox as d,messageSW as c}from"../web_modules/workbox-window.js";import"../web_modules/foldable-device-configurator.js";const m=(e,...t)=>{const s=o(e[0],"main-application");return r([s],...t)};export class MainApplication extends a{firstUpdated(){if(this._canvas=this.shadowRoot.querySelector("#canvas"),this._canvas&&this._canvas.getContext&&(this._context=this._canvas.getContext("2d")),!this._context){console.error("Your browser doesn't support canvas, this demo won't work");return}this._snackbar=this.shadowRoot.querySelector("#snackbar"),this._snackbar.addEventListener("MDCSnackbar:closed",t=>{t.detail.reason==="action"&&(this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&c(this._wbRegistration.waiting,{type:"SKIP_WAITING"}))}),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new d("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSnackbar()),this._wb.addEventListener("externalwaiting",()=>this._showSnackbar()),this._wbRegistration=await this._wb.register()});const e=window.getComputedStyle(this._canvas);this._canvas.width=parseInt(e.width,10),this._canvas.height=parseInt(e.height,10),window.addEventListener("resize",this._onResize),this._ship=this.shadowRoot.querySelector("#ship"),this._meteorImage=this.shadowRoot.querySelector("#meteor"),this._meteorImage2=this.shadowRoot.querySelector("#meteor2"),this._background=this.shadowRoot.querySelector("#background"),this._explosionImage=this.shadowRoot.querySelector("#explosion"),this._ship.onload=this._startGame.bind(this),document.addEventListener("keydown",this._handleKeyDown,!1)}constructor(){super();i(this,"_snackbar",void 0),i(this,"_wb",void 0),i(this,"_wbRegistration",void 0),i(this,"_ship",void 0),i(this,"_shipSize",80),i(this,"_shipObject",void 0),i(this,"_background1Y",0),i(this,"_background2Y",0),i(this,"_meteorSize",80),i(this,"_meteorImage",void 0),i(this,"_meteorImage2",void 0),i(this,"_meteors",[]),i(this,"_explosionImage",void 0),i(this,"_currentTime",0),i(this,"_startTime",0),i(this,"_timeSize",void 0),i(this,"_timeX",void 0),i(this,"_timeY",void 0),i(this,"_velocity",1),i(this,"_paused",!1),i(this,"_dead",!1),i(this,"_enableDebug",!1),i(this,"_handleKeyDown",e=>{e.keyCode==37?this._moveShipLeft():e.keyCode==39?this._moveShipRight():e.keyCode==32&&this._pauseGame()}),i(this,"_drawCanvas",e=>{if(this._paused)return;this._context.clearRect(0,0,this._canvas.width,this._canvas.height),this._drawBackground(),this._drawMeteors(),this._drawShip(),this._drawTime();let t=Math.round(window.performance.now()/1e3)-this._startTime;if(this._currentTime==t){requestAnimationFrame(this._drawCanvas);return}this._currentTime=t;const s=5-this._velocity<=0?1:5-this._velocity;this._currentTime%s===0&&this._addNewMeteors(),this._currentTime%30==0&&this._velocity++,requestAnimationFrame(this._drawCanvas)}),i(this,"_onResize",async e=>{const t=window.getComputedStyle(this._canvas);this._canvas.width=parseInt(t.width,10),this._canvas.height=parseInt(t.height,10),this._timeSize=this._context.measureText("Elapsed Time : 22222s").width,this._timeX=this._canvas.width-this._timeSize,this._timeY=30})}connectedCallback(){super.connectedCallback(),n(this)}_showSnackbar(){this._snackbar.show()}_deviceSupportsSpanningMQs(){const e=window.matchMedia("(spanning: single-fold-horizontal)").matches||window.matchMedia("(spanning: single-fold-vertical)").matches||window.matchMedia("(spanning: none)").matches||!1;return e}_startGame(){this._paused=!1,this._dead=!1,this._shipObject={x:this._canvas.width/2-this._shipSize/2,y:this._canvas.height-this._shipSize,size:this._shipSize},this._background2Y=-this._canvas.height,this._background1Y=-this._canvas.height,this._currentTime=0,this._velocity=2,this._context.font="20px serif",this._timeSize=this._context.measureText("Elapsed Time : 22222s").width,this._timeX=this._canvas.width-this._timeSize,this._timeY=30,this._startTime=Math.round(window.performance.now()/1e3),this._addNewMeteors(),requestAnimationFrame(this._drawCanvas)}_pauseGame(){if(this._paused)return;this._paused=!0}_lostGame(){if(this._paused)return;this._paused=!0,this._dead=!0,console.log("You lost")}_addNewMeteors(){for(let e=0;e<6;++e)this._addRandomMeteor()}_addRandomMeteor(){let e=this._getRandomInt(0,this._canvas.width-this._meteorSize),t=this._getRandomInt(0,-500);for(const s of this._meteors)if(this._checkCollision(s,{x:e,y:t,size:this._meteorSize}))return this._addRandomMeteor();this._meteors.push({x:e,y:t,size:this._meteorSize,spriteId:Math.random()>=.5})}_getRandomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}_drawShip(){this._dead?this._context.drawImage(this._explosionImage,this._shipObject.x,this._shipObject.y,this._shipObject.size+10,this._shipObject.size+10):this._context.drawImage(this._ship,this._shipObject.x,this._shipObject.y,this._shipObject.size,this._shipObject.size)}_drawBackground(){this._background1Y=this._background1Y-1,this._background2Y=this._background2Y+1,this._background1Y<-2*this._canvas.height&&(this._background1Y=0),this._background2Y>this._canvas.height&&(this._background2Y=-this._canvas.height),this._context.drawImage(this._background,0,this._background2Y,this._canvas.width,this._canvas.height),this._context.save(),this._context.scale(-1,-1),this._context.drawImage(this._background,-this._canvas.width,this._background1Y,this._canvas.width,this._canvas.height),this._context.restore()}_drawMeteors(){for(const e of this._meteors){const t=e.spriteId?this._meteorImage:this._meteorImage2;if(this._context.drawImage(t,e.x,e.y,e.size,e.size),this._enableDebug){let s=e.x+" "+e.y;this._context.font="20px serif",this._context.strokeStyle="#ffffff",this._context.strokeText(s,e.x,e.y+e.size/2)}e.y+=this._velocity,this._checkCollision(e,this._shipObject)&&this._lostGame()}for(let e=this._meteors.length;e--;){let t=this._meteors[e];t.y>this._canvas.height&&this._meteors.splice(e,1)}}_checkCollision(e,t){const s=e.x+e.size>=t.x&&e.x<=t.x+t.size&&e.y+e.size>=t.y&&e.y<=t.y+t.size;return s}_drawTime(){const e="Elapsed Time : "+this._currentTime+"s";this._context.font="20px serif",this._context.fillStyle="#fbc02d",this._context.fillText(e,this._timeX,this._timeY)}_moveShipLeft(){if(this._shipObject.x<=10||this._paused)return;this._shipObject.x-=10}_moveShipRight(){if(this._shipObject.x+10>=this._canvas.width-this._shipObject.size||this._paused)return;this._shipObject.x+=10}render(){return h`
      <canvas id="canvas"></canvas>
      <picture class="hidden">
        <source srcset="images/ship.webp" type="image/webp"/>
        <img id="ship" src="images/ship.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/meteor.webp" type="image/webp"/>
        <img id="meteor" src="images/meteor.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/meteor2.webp" type="image/webp"/>
        <img id="meteor2" src="images/meteor2.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/explosion.webp" type="image/webp"/>
        <img id="explosion" src="images/explosion.png">
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
    `}}i(MainApplication,"styles",m`
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
