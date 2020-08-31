function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}import{LitElement as c,html as d,css as _}from"../web_modules/lit-element.js";import{FoldablesFeature as p}from"../web_modules/windowsegments-polyfill.js";import"../web_modules/@material/mwc-button.js";import"../web_modules/@material/mwc-icon-button.js";import"../web_modules/@material/mwc-snackbar.js";import{Workbox as u,messageSW as m}from"../web_modules/workbox-window.js";import"../web_modules/foldable-device-configurator.js";import"./menu.js";export class MainApplication extends c{static get properties(){return{currentTime:{type:String}}}set currentTime(e){let t=this._currentTime;this._currentTime=e,this.requestUpdate("currentTime",t)}get currentTime(){return this._currentTime}firstUpdated(){if(this._canvas=this.shadowRoot.querySelector("#canvas"),this._canvas&&this._canvas.getContext&&(this._context=this._canvas.getContext("2d")),!this._context){console.error("Your browser doesn't support canvas, this demo won't work");return}this._snackbar=this.shadowRoot.querySelector("#snackbar"),this._snackbar.addEventListener("MDCSnackbar:closed",s=>{s.detail.reason==="action"&&(this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&m(this._wbRegistration.waiting,{type:"SKIP_WAITING"}))}),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new u("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSnackbar()),this._wb.addEventListener("externalwaiting",()=>this._showSnackbar()),this._wbRegistration=await this._wb.register()});const e=window.getComputedStyle(this._canvas);this._canvas.width=parseInt(e.width,10),this._canvas.height=parseInt(e.height,10),console.log("canvas size : "+this._canvas.width+"x"+this._canvas.height),this._context.font="20px Russo One",window.addEventListener("resize",this._onResize),this._mainMenu=this.shadowRoot.querySelector("#main-menu"),this._mainMenu.open(),this._pauseMenu=this.shadowRoot.querySelector("#pause-menu"),this._aboutMenu=this.shadowRoot.querySelector("#about-menu"),this._lostMenu=this.shadowRoot.querySelector("#lost-menu"),this._ship=this.shadowRoot.querySelector("#ship"),this._meteorImage=this.shadowRoot.querySelector("#meteor"),this._meteorImage2=this.shadowRoot.querySelector("#meteor2"),this._background=this.shadowRoot.querySelector("#background"),this._explosionImage=this.shadowRoot.querySelector("#explosion"),this._controllerLeftImage=this.shadowRoot.querySelector("#left-controller"),this._controllerRightImage=this.shadowRoot.querySelector("#right-controller"),document.addEventListener("keydown",this._handleKeyDown,!1),this._canvas.onpointerdown=this._onPointerDown.bind(this),this._canvas.onpointermove=this._onPointerMove.bind(this),this._canvas.onpointercancel=this._onPointerUp.bind(this),this._canvas.onpointerup=this._onPointerUp.bind(this),this._timeSize=this._context.measureText("Elapsed Time : 2222s").width,this._updateGameLayout(),this._background.onload=this._drawBackground.bind(this);const t=new p();t.onchange=()=>this._handleSpanning(),window.onorientationchange=s=>this._handleOrientationChange(s)}constructor(){super();i(this,"_snackbar",void 0),i(this,"_wb",void 0),i(this,"_wbRegistration",void 0),i(this,"_mainMenu",void 0),i(this,"_pauseMenu",void 0),i(this,"_aboutMenu",void 0),i(this,"_lostMenu",void 0),i(this,"_ship",void 0),i(this,"_shipSize",80),i(this,"_controllerSize",80),i(this,"_controllerSizeTouch",60),i(this,"_shipObject",{x:0,y:0}),i(this,"_background1Y",0),i(this,"_background2Y",0),i(this,"_meteorSize",80),i(this,"_meteorImage",void 0),i(this,"_meteorImage2",void 0),i(this,"_meteors",[]),i(this,"_explosionImage",void 0),i(this,"_currentTime",0),i(this,"_startTime",0),i(this,"_timeSize",void 0),i(this,"_timeX",void 0),i(this,"_timeY",void 0),i(this,"_velocity",1),i(this,"_paused",!0),i(this,"_dead",!0),i(this,"_spanning",!1),i(this,"_playAreaSize",void 0),i(this,"_controllerArea",void 0),i(this,"_enableDebug",!1),i(this,"_pointerDown",!1),i(this,"_currentPointerTimeout",[]),i(this,"_pointerId",void 0),i(this,"_handleKeyDown",e=>{if(this._paused)return;e.keyCode==37?this._moveShipLeft():e.keyCode==39?this._moveShipRight():e.keyCode==27&&this._pauseGame()}),i(this,"_onPointerDown",async e=>{if(this._paused||this._dead)return;this._clearPointerTimeout();const t=this._isTouchingLeftController(e),s=this._isTouchingRightController(e);(t||s)&&(this._pointerDown=!0,this._pointerId=e.pointerId,this._canvas.setPointerCapture(this._pointerId),e.preventDefault(),t?this._moveShipLeft():this._moveShipRight(),this._currentPointerTimeout.push(setTimeout(r=>this._simulateLongPress(t),300)))}),i(this,"_onPointerMove",async e=>{if(this._paused||this._dead)return;const t=this._isTouchingLeftController(e),s=this._isTouchingRightController(e);!t&&!s&&(this._pointerDown=!1,this._clearPointerTimeout())}),i(this,"_onPointerUp",async e=>{if(this._paused||this._dead)return;this._pointerDown=!1,this._clearPointerTimeout(),this._pointerId&&this._canvas.releasePointerCapture(this._pointerId)}),i(this,"_simulateLongPress",async e=>{if(!this._pointerDown)return;e?this._moveShipLeft():this._moveShipRight(),this._currentPointerTimeout.push(setTimeout(t=>this._simulateLongPress(e),50))}),i(this,"_drawCanvas",e=>{if(this._paused)return;this._context.clearRect(0,0,this._canvas.width,this._canvas.height),this._drawBackground(),this._drawMeteors(),this._drawShip(),this._drawTime(),this._spanning?(this._leftControllerPos={x:this._controllerArea.left+this._controllerArea.width/2-this._controllerSize,y:this._controllerArea.top+this._controllerArea.height/2},this._rightControllerPos={x:this._controllerArea.left+this._controllerArea.width/2+this._controllerSize,y:this._controllerArea.top+this._controllerArea.height/2},this._drawControllerSegment(),this._drawController(this._controllerSize)):(this._leftControllerPos={x:0,y:this._playAreaSize.height-2*this._controllerSizeTouch},this._rightControllerPos={x:2*this._controllerSizeTouch,y:this._playAreaSize.height-2*this._controllerSizeTouch},this._drawController(this._controllerSizeTouch));let t=Math.round(window.performance.now()/1e3)-this._startTime;if(this.currentTime==t){requestAnimationFrame(this._drawCanvas);return}this.currentTime=t;const s=5-this._velocity<=0?1:5-this._velocity;this.currentTime%s===0&&this._addNewMeteors(),this.currentTime%30==0&&this._velocity++,requestAnimationFrame(this._drawCanvas)}),i(this,"_onResize",async e=>{const t=window.getComputedStyle(this._canvas);this._canvas.width=parseInt(t.width,10),this._canvas.height=parseInt(t.height,10),this._handleSpanning(),this._paused&&this._drawBackground()}),this._currentTime=0}_showSnackbar(){this._snackbar.show()}_deviceSupportsSpanningMQs(){const e=window.matchMedia("(spanning: single-fold-horizontal)").matches||window.matchMedia("(spanning: single-fold-vertical)").matches||window.matchMedia("(spanning: none)").matches||!1;return e}_startGame(){this._mainMenu.close(),this._lostMenu.close(),this._pauseMenu.close(),this._paused=!1,this._dead=!1,this._meteors=[],this.currentTime=0,this._velocity=2,this._startTime=Math.round(window.performance.now()/1e3),this._updateGameLayout(),this._shipObject={x:this._playAreaSize.width/2-this._shipSize/2,y:this._playAreaSize.height-this._shipSize,size:this._shipSize},this._background2Y=-this._playAreaSize.height,this._background1Y=-this._playAreaSize.height,this._addNewMeteors(),requestAnimationFrame(this._drawCanvas)}_pauseGame(){if(this._paused)return;this._paused=!0,this._pauseMenu.open()}_resumeGame(){if(!this._paused)return;this._paused=!1,this._pauseMenu.close(),requestAnimationFrame(this._drawCanvas)}_lostGame(){if(this._paused)return;this._paused=!0,this._dead=!0,this._clearPointerTimeout(),this._lostMenu.open()}_showAbout(){this._mainMenu.close(),this._aboutMenu.open()}_openMainMenu(){this._mainMenu.open(),this._aboutMenu.close()}_addNewMeteors(){let e=Math.round(this._playAreaSize.width/this._meteorSize/4);for(let t=0;t<e;++t)this._addRandomMeteor()}_addRandomMeteor(){let e=this._getRandomInt(0,this._playAreaSize.width-this._meteorSize),t=this._getRandomInt(0,-500);for(const s of this._meteors)if(this._checkCollision(s,{x:e,y:t,size:this._meteorSize}))return this._addRandomMeteor();this._meteors.push({x:e,y:t,size:this._meteorSize,spriteId:Math.random()>=.5})}_getRandomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}_drawShip(){this._dead?this._context.drawImage(this._explosionImage,this._shipObject.x,this._shipObject.y,this._shipObject.size+10,this._shipObject.size+10):this._context.drawImage(this._ship,this._shipObject.x,this._shipObject.y,this._shipObject.size,this._shipObject.size)}_drawBackground(){this._background1Y=this._background1Y-1,this._background2Y=this._background2Y+1,this._background1Y<-2*this._playAreaSize.height&&(this._background1Y=0),this._background2Y>this._playAreaSize.height&&(this._background2Y=-this._playAreaSize.height),this._context.drawImage(this._background,0,this._background2Y,this._playAreaSize.width,this._playAreaSize.height),this._context.save(),this._context.scale(-1,-1),this._context.drawImage(this._background,-this._playAreaSize.width,this._background1Y,this._playAreaSize.width,this._playAreaSize.height),this._context.restore()}_drawMeteors(){for(const e of this._meteors){const t=e.spriteId?this._meteorImage:this._meteorImage2;if(this._context.drawImage(t,e.x,e.y,e.size,e.size),this._enableDebug){let s=e.x+" "+e.y;this._context.font="20px Russo One",this._context.strokeStyle="#ffffff",this._context.strokeText(s,e.x,e.y+e.size/2)}e.y+=this._velocity,this._checkCollision(e,this._shipObject)&&this._lostGame()}for(let e=this._meteors.length;e--;){let t=this._meteors[e];t.y>this._playAreaSize.height&&this._meteors.splice(e,1)}}_checkCollision(e,t){const s=e.x+e.size>=t.x&&e.x<=t.x+t.size&&e.y+e.size>=t.y&&e.y<=t.y+t.size;return s}_drawTime(){const e="Elapsed Time : "+this.currentTime+"s";this._context.font="20px Russo One",this._context.fillStyle="#fbc02d",this._context.fillText(e,this._timeX,this._timeY)}_drawControllerSegment(){this._context.save(),this._context.fillStyle="black",this._context.fillRect(this._controllerArea.left,this._controllerArea.top,this._controllerArea.width,this._controllerArea.height),this._context.restore()}_drawController(e){this._context.save(),this._context.drawImage(this._controllerLeftImage,this._leftControllerPos.x,this._leftControllerPos.y,e,e),this._drawMiddleController(e),this._context.drawImage(this._controllerRightImage,this._rightControllerPos.x,this._rightControllerPos.y,e,e),this._context.restore()}_drawMiddleController(e){this._context.fillStyle="white",this._context.strokeStyle="#333333",this._context.lineWidth="3",this._context.fillRect(this._leftControllerPos.x+e,this._leftControllerPos.y+1,e,e-2),this._context.beginPath(),this._context.rect(this._leftControllerPos.x+e,this._leftControllerPos.y+1,e,e-2),this._context.stroke()}_isTouchingLeftController(e){return e.clientX>=this._leftControllerPos.x&&e.clientX<=this._leftControllerPos.x+this._controllerSize&&e.clientY>=this._leftControllerPos.y&&e.clientY<=this._leftControllerPos.y+this._controllerSize}_isTouchingRightController(e){return e.clientX>=this._rightControllerPos.x&&e.clientX<=this._rightControllerPos.x+this._controllerSize+10&&e.clientY>=this._rightControllerPos.y&&e.clientY<=this._rightControllerPos.y+this._controllerSize+10}_clearPointerTimeout(){for(const e of this._currentPointerTimeout)clearTimeout(e);this._currentPointerTimeout=[]}_moveShipLeft(){if(this._shipObject.x<=10||this._paused)return;this._shipObject.x-=10}_moveShipRight(){if(this._shipObject.x+10>=this._playAreaSize.width-this._shipObject.size||this._paused)return;this._shipObject.x+=10}_handleSpanning(){this._spanning=window.getWindowSegments().length>1,this._updateGameLayout(),this._mainMenu.handleSpanning(),this._pauseMenu.handleSpanning(),this._aboutMenu.handleSpanning(),this._lostMenu.handleSpanning()}_handleOrientationChange(e){this._pauseGame(),this._updateGameLayout(),this._mainMenu.handleSpanning(),this._pauseMenu.handleSpanning(),this._aboutMenu.handleSpanning(),this._lostMenu.handleSpanning()}_updateGameLayout(){let e;this._playAreaSize&&(e={width:this._playAreaSize.width,height:this._playAreaSize.height});const t=window.getWindowSegments();if(t.length===1?(this._playAreaSize={width:this._canvas.width,height:this._canvas.height},this._controllerArea={left:0,top:0,width:0,height:0}):(this._playAreaSize={left:t[0].left,top:t[0].top,width:t[0].width,height:t[0].height},this._controllerArea={left:t[1].left,top:t[1].top,width:t[1].width,height:t[1].height}),e){const s=this._shipObject.x/e.width;this._shipObject.x=this._playAreaSize.width*s;const r=this._shipObject.y/e.height;this._shipObject.y=this._playAreaSize.height*r,this._makeObjectFitInPlayBoundaries(this._shipObject);for(const o of this._meteors){const h=o.x/e.width;o.x=this._playAreaSize.width*h;let l=o.y/e.height;o.y=this._playAreaSize.height*l,this._makeObjectFitInPlayBoundaries(o)}const a=this._background1Y/e.height;this._background1Y=this._playAreaSize.height*a;const n=this._background2Y/e.height;this._background2Y=this._playAreaSize.height*n}this._timeX=this._playAreaSize.width-this._timeSize,this._timeY=30}_makeObjectFitInPlayBoundaries(e){e.x<this._playAreaSize.left?e.x=this._playAreaSize.left:e.x+e.size>this._playAreaSize.width&&(e.x=this._playAreaSize.width-e.size),e.y<this._playAreaSize.top?e.y=this._playAreaSize.top:e.y+e.size>this._playAreaSize.height&&(e.y=this._playAreaSize.height-e.size)}render(){return d`
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
        <source srcset="images/left-controller.webp" type="image/webp"/>
        <img id="left-controller" src="images/left-controller.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/right-controller.webp" type="image/webp"/>
        <img id="right-controller" src="images/right-controller.png">
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
      <game-menu id="main-menu">
        <div slot="title">Welcome to Star Fold</div>
        <picture slot="button">
          <source srcset="images/play-button.webp" type="image/webp"/>
          <img alt="Image of a play button" class="menu-button" src="images/play-button.jpg" @click="${this._startGame}">
        </picture>
        <picture slot="button2">
          <source srcset="images/about-button.webp" type="image/webp"/>
          <img alt="Image of an about button" class="menu-button" src="images/about-button.jpg" @click="${this._showAbout}">
        </picture>
      </game-menu>
      <game-menu id="pause-menu">
        <div slot="title">Game paused</div>
        <picture slot="button">
          <source srcset="images/resume-button.webp" type="image/webp"/>
          <img alt="Image of a resume button" class="menu-button" src="images/resume-button.jpg" @click="${this._resumeGame}">
        </picture>
        <picture slot="button2">
          <source srcset="images/restart-button.webp" type="image/webp"/>
          <img alt="Image of a restart button" class="menu-button" src="images/restart-button.jpg" @click="${this._startGame}">
        </picture>
      </game-menu>
      <game-menu id="about-menu">
        <div slot="title">
           <div class="detail-about">About<br>This demo provides a specific experience on dual screens and foldable devices.
           </div>
        </div>
        <picture slot="button">
          <source srcset="images/close-button.webp" type="image/webp"/>
          <img alt="Image of a close button" class="menu-button" src="images/close-button.jpg" @click="${this._openMainMenu}">
        </picture>
      </game-menu>
      <game-menu id="lost-menu">
        <div slot="title">You Lost!</div>
        <div slot="button" class="score">Your time was ${this.currentTime}</div>
        <picture slot="button2">
          <source srcset="images/restart-button.webp" type="image/webp"/>
          <img alt="Image of a restart button" class="menu-button" src="images/restart-button.jpg" @click="${this._startGame}">
        </picture>
      </game-menu>
    `}}i(MainApplication,"styles",_`
    :host {
      width: 100vw;
      height: 100vh;
      color: white;
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

    #fullscreen-rotate {
      width: 100%;
      height: 100%;
      z-index: 99;
      position: absolute;
      top: 0;
      left: 0;
      background-color: black;
      color: white;
      display: none;
    }

    .menu-button {
      width: 80%;
      display: block;
      margin: auto;
    }

    .menu-button:hover {
      filter: drop-shadow(5px 5px 5px black) contrast(150%);
    }

    .detail-about {
      font-size: 0.8em;
      margin: 5px;
      text-align: justify;
      text-justify: inter-character;
    }

    .score {
      color: white;
      font-family: 'Russo One', sans-serif;
      font-size: 1.2em;
      margin-bottom: 20px;
    }
  `),customElements.define("main-application",MainApplication);
