var w=Object.defineProperty;var f=(n,t,e)=>t in n?w(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var i=(n,t,e)=>(f(n,typeof t!="symbol"?t+"":t,e),e);import{s as l,r as c,p as _,n as y,v as x,a as u}from"./vendor.0c5e9729.js";const b=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}};b();class p extends l{constructor(){super();i(this,"_spanning",!1)}firstUpdated(){}handleSpanning(){const t=window.visualViewport.segments;this._spanning=t&&t.length>1;let e=this.shadowRoot.host.style;if(this._spanning){const s=t[0];s.width>s.height?(e.top="calc(25vh - 12.5vh)",e.left="calc(50vw - 20vw)",e.width="40vw",e.height=s.height/2+"px"):(e.top="calc(50vh - 12.5vh)",e.width="25vw",e.left="calc(25vw - 12.5vw)",e.height=t[0].height/3+"px")}else e.top="",e.left="",e.width="",e.height=""}close(){this.shadowRoot.host.style.visibility="hidden"}open(){this.shadowRoot.host.style.visibility="visible"}render(){return _`
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
    `}}i(p,"styles",c`
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
  `);customElements.define("game-menu",p);class d extends l{constructor(){super();i(this,"_snackbar");i(this,"_wb");i(this,"_wbRegistration");i(this,"_mainMenu");i(this,"_pauseMenu");i(this,"_aboutMenu");i(this,"_lostMenu");i(this,"_pauseButton");i(this,"_pauseButtonPos",{x:0,y:0});i(this,"_pauseButtonSize",80);i(this,"_ship");i(this,"_shipSize",80);i(this,"_controllerSize",70);i(this,"_controllerSizeTouch",60);i(this,"_shipObject",{x:0,y:0});i(this,"_background1Y",0);i(this,"_background2Y",0);i(this,"_meteorSize",80);i(this,"_meteorImage");i(this,"_meteorImage2");i(this,"_meteors",[]);i(this,"_explosionImage");i(this,"_currentTime",0);i(this,"_startTime",0);i(this,"_timeSize");i(this,"_timeX");i(this,"_timeY");i(this,"_velocity",1);i(this,"_paused",!0);i(this,"_dead",!0);i(this,"_spanning",!1);i(this,"_playAreaSize");i(this,"_controllerArea");i(this,"_enableDebug",!1);i(this,"_pointerDown",!1);i(this,"_currentPointerTimeout",[]);i(this,"_pointerId");i(this,"_touchSensitivity",10);i(this,"_touchingLeftController",!1);i(this,"_touchingRightController",!1);i(this,"_touchingUpController",!1);i(this,"_touchingDownController",!1);i(this,"_yButtonImage");i(this,"_yButtonSize",100);i(this,"_yButtonPos",{x:0,y:0});i(this,"_touchingYButton",!1);i(this,"_missileImage");i(this,"_missileWidth",20);i(this,"_missileHeight",30);i(this,"_missiles",[]);i(this,"_handleKeyDown",t=>{this._paused||(t.keyCode==37?this._moveShipLeft():t.keyCode==39?this._moveShipRight():t.keyCode==27?this._pauseGame():t.keyCode==40?this._moveShipDown():t.keyCode==38?this._moveShipUp():t.keyCode==32&&this._fireMissile())});i(this,"_onPointerDown",async t=>{if(!(this._paused||this._dead)){if(this._clearPointerTimeout(),this._isTouchingPauseButton(t)){this._pauseGame();return}this._touchingLeftController=this._isTouchingAController(this._leftControllerPos,t),this._touchingRightController=this._isTouchingAController(this._rightControllerPos,t),this._touchingUpController=this._isTouchingAController(this._upControllerPos,t),this._touchingDownController=this._isTouchingAController(this._downControllerPos,t),(this._touchingLeftController||this._touchingRightController||this._touchingUpController||this._touchingDownController)&&(this._pointerDown=!0,this._pointerId=t.pointerId,this._canvas.setPointerCapture(this._pointerId),t.preventDefault(),this._touchingLeftController?this._moveShipLeft():this._touchingRightController?this._moveShipRight():this._touchingUpController?this._moveShipUp():this._touchingDownController&&this._moveShipDown(),this._currentPointerTimeout.push(setTimeout(e=>this._simulateLongPress(this._touchingLeftController,this._touchingRightController,this._touchingUpController,this._touchingDownController),300))),this._touchingYButton=this._isTouchingYButton(t),this._touchingYButton&&this._fireMissile()}});i(this,"_onPointerMove",async t=>{this._paused||this._dead||this._isTouchingController(t)||(this._pointerDown=!1,this._clearPointerTimeout())});i(this,"_onPointerUp",async t=>{this._paused||this._dead||(this._pointerDown=!1,this._touchingLeftController=this._touchingRightController=this._touchingUpController=this._touchingDownController=this._touchingYButton=!1,this._clearPointerTimeout(),this._pointerId&&this._canvas.releasePointerCapture(this._pointerId))});i(this,"_simulateLongPress",async(t,e,s,o)=>{!this._pointerDown||(t?this._moveShipLeft():e?this._moveShipRight():s?this._moveShipUp():o&&this._moveShipDown(),this._currentPointerTimeout.push(setTimeout(r=>this._simulateLongPress(t,e,s,o),50)))});i(this,"_drawCanvas",t=>{if(this._paused)return;this._context.clearRect(0,0,this._canvas.width,this._canvas.height),this._drawBackground(),this._drawMeteors(),this._drawMissiles(),this._drawShip(),this._drawTime(),this._spanning?(this._drawControllerSegment(),this._drawController(this._controllerSize),this._drawControllerHighlight(this._controllerSize),this._drawPauseButton()):(this._drawController(this._controllerSizeTouch),this._drawControllerHighlight(this._controllerSizeTouch)),this._drawYButton();let e=Math.round(window.performance.now()/1e3)-this._startTime;if(this.currentTime==e){requestAnimationFrame(this._drawCanvas);return}this.currentTime=e;const s=5-this._velocity<=0?1:5-this._velocity;this.currentTime%s==0&&this._addNewMeteors(),this.currentTime%30==0&&this._velocity++,requestAnimationFrame(this._drawCanvas)});i(this,"_onResize",async t=>{const e=window.getComputedStyle(this._canvas);this._canvas.width=parseInt(e.width,10),this._canvas.height=parseInt(e.height,10),this._handleSpanning(),this._paused&&this._drawBackground()});this._currentTime=0}static get properties(){return{currentTime:{type:String}}}set currentTime(t){let e=this._currentTime;this._currentTime=t,this.requestUpdate("currentTime",e)}get currentTime(){return this._currentTime}firstUpdated(){if(this._canvas=this.shadowRoot.querySelector("#canvas"),this._canvas&&this._canvas.getContext&&(this._context=this._canvas.getContext("2d")),!this._context){console.error("Your browser doesn't support canvas, this demo won't work");return}this._snackbar=this.shadowRoot.querySelector("#snackbar"),this._snackbar.addEventListener("MDCSnackbar:closed",e=>{e.detail.reason==="action"&&(this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&y(this._wbRegistration.waiting,{type:"SKIP_WAITING"}))}),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new x("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSnackbar()),this._wb.addEventListener("externalwaiting",()=>this._showSnackbar()),this._wbRegistration=await this._wb.register()});const t=window.getComputedStyle(this._canvas);if(this._canvas.width=parseInt(t.width,10),this._canvas.height=parseInt(t.height,10),console.log("canvas size : "+this._canvas.width+"x"+this._canvas.height),this._context.font="20px Russo One",window.addEventListener("resize",this._onResize),this._mainMenu=this.shadowRoot.querySelector("#main-menu"),this._mainMenu.open(),this._pauseMenu=this.shadowRoot.querySelector("#pause-menu"),this._aboutMenu=this.shadowRoot.querySelector("#about-menu"),this._lostMenu=this.shadowRoot.querySelector("#lost-menu"),this._pauseButton=this.shadowRoot.querySelector("#pause-button"),this._ship=this.shadowRoot.querySelector("#ship"),this._meteorImage=this.shadowRoot.querySelector("#meteor"),this._meteorImage2=this.shadowRoot.querySelector("#meteor2"),this._background=this.shadowRoot.querySelector("#background"),this._explosionImage=this.shadowRoot.querySelector("#explosion"),this._controllerLeftImage=this.shadowRoot.querySelector("#left-controller"),this._controllerRightImage=this.shadowRoot.querySelector("#right-controller"),this._controllerUpImage=this.shadowRoot.querySelector("#up-controller"),this._controllerDownImage=this.shadowRoot.querySelector("#down-controller"),this._missileImage=this.shadowRoot.querySelector("#missile"),this._yButtonImage=this.shadowRoot.querySelector("#y-button"),document.addEventListener("keydown",this._handleKeyDown,!1),this._canvas.onpointerdown=this._onPointerDown.bind(this),this._canvas.onpointermove=this._onPointerMove.bind(this),this._canvas.onpointercancel=this._onPointerUp.bind(this),this._canvas.onpointerup=this._onPointerUp.bind(this),this._timeSize=this._context.measureText("Elapsed Time : 2222s").width,this._handleSpanning(),this._background.onload=this._drawBackground.bind(this),typeof u!="undefined"){const e=new u;e.onchange=()=>this._handleSpanning()}window.onorientationchange=e=>this._handleOrientationChange(e)}_showSnackbar(){this._snackbar.show()}_deviceSupportsSpanningMQs(){return window.matchMedia("(spanning: single-fold-horizontal)").matches||window.matchMedia("(spanning: single-fold-vertical)").matches||window.matchMedia("(spanning: none)").matches||!1}_startGame(){this._mainMenu.close(),this._lostMenu.close(),this._pauseMenu.close(),this._paused=!1,this._dead=!1,this._meteors=[],this._missiles=[],this.currentTime=0,this._velocity=2,this._startTime=Math.round(window.performance.now()/1e3),this._updateGameLayout(),this._shipObject={x:this._playAreaSize.width/2-this._shipSize/2,y:this._playAreaSize.height-this._shipSize,size:this._shipSize},this._background2Y=-this._playAreaSize.height,this._background1Y=-this._playAreaSize.height,this._touchingYButton=this._touchingLeftController=this._touchingRightController=this._touchingUpController=this._touchingDownController=!1,this._pointerDown=!1,this._addNewMeteors(),this._spanning||this._showPauseButton(),requestAnimationFrame(this._drawCanvas)}_hidePauseButton(){this._pauseButton.classList.add("hidden")}_showPauseButton(){this._pauseButton.classList.remove("hidden")}_pauseGame(){this._paused||(this._paused=!0,this._touchingYButton=this._touchingLeftController=this._touchingRightController=this._touchingUpController=this._touchingDownController=!1,this._hidePauseButton(),this._pauseMenu.open())}_resumeGame(){!this._paused||(this._paused=!1,this._pauseMenu.close(),this._spanning||this._showPauseButton(),requestAnimationFrame(this._drawCanvas))}_lostGame(){this._paused||(this._paused=!0,this._dead=!0,this._clearPointerTimeout(),this._lostMenu.open())}_showAbout(){this._mainMenu.close(),this._aboutMenu.open()}_openMainMenu(){this._mainMenu.open(),this._aboutMenu.close()}_addNewMeteors(){let t=Math.round(this._playAreaSize.width/this._meteorSize/4);for(let e=0;e<t;++e)this._addRandomMeteor()}_addRandomMeteor(){let t=this._getRandomInt(0,this._playAreaSize.width-this._meteorSize),e=this._getRandomInt(0,-500);for(const s of this._meteors)if(this._checkCollision(s,{x:t,y:e,size:this._meteorSize}))return this._addRandomMeteor();this._meteors.push({x:t,y:e,destroyed:!1,size:this._meteorSize,spriteId:Math.random()>=.5})}_removeMeteor(t){for(let e=this._meteors.length;e--;){const s=this._meteors[e];if(s.destroyed&&t.y==s.y&&t.x==s.x){this._meteors.splice(e,1);break}}}_getRandomInt(t,e){return Math.floor(Math.random()*(e-t+1))+t}_drawShip(){this._dead?this._context.drawImage(this._explosionImage,this._shipObject.x,this._shipObject.y,this._shipObject.size+10,this._shipObject.size+10):this._context.drawImage(this._ship,this._shipObject.x,this._shipObject.y,this._shipObject.size,this._shipObject.size)}_drawBackground(){this._background1Y=this._background1Y-1,this._background2Y=this._background2Y+1,this._background1Y<-2*this._playAreaSize.height&&(this._background1Y=0),this._background2Y>this._playAreaSize.height&&(this._background2Y=-this._playAreaSize.height),this._context.drawImage(this._background,0,this._background2Y,this._playAreaSize.width,this._playAreaSize.height),this._context.save(),this._context.scale(-1,-1),this._context.drawImage(this._background,-this._playAreaSize.width,this._background1Y,this._playAreaSize.width,this._playAreaSize.height),this._context.restore()}_drawMeteors(){for(const t of this._meteors){const e=t.spriteId?this._meteorImage:this._meteorImage2;if(t.destroyed?this._context.drawImage(this._explosionImage,t.x,t.y,t.size,t.size):this._context.drawImage(e,t.x,t.y,t.size,t.size),this._enableDebug){this._context.save();const s=t.x+" "+t.y;this._context.font="20px serif",this._context.strokeStyle="#ffffff",this._context.strokeText(s,t.x,t.y+t.size/2),this._context.restore()}!t.destroyed&&this._checkCollision(t,this._shipObject)&&this._lostGame(),t.y+=this._velocity}for(let t=this._meteors.length;t--;)this._meteors[t].y>this._playAreaSize.height&&this._meteors.splice(t,1)}_drawMissiles(){for(let t=this._missiles.length;t--;){const e=this._missiles[t];if(this._context.drawImage(this._missileImage,e.x,e.y,this._missileWidth,this._missileHeight),this._enableDebug){this._context.save();const s=e.x+" "+e.y;this._context.font="20px serif",this._context.strokeStyle="#ffffff",this._context.strokeText(s,e.x,e.y+this._missileWidth/2),this._context.restore()}for(const s of this._meteors)if(this._checkCollision(e,s)){s.destroyed=!0,this._missiles.splice(t,1),setTimeout(()=>this._removeMeteor(s),300);break}e.y-=10}for(let t=this._missiles.length;t--;)this._missiles[t].y<0&&this._missiles.splice(t,1)}_checkCollision(t,e){return t.x+t.size>=e.x&&t.x<=e.x+e.size&&t.y+t.size>=e.y&&t.y<=e.y+e.size}_drawTime(){const t="Elapsed Time : "+this.currentTime+"s";this._context.font="20px Russo One",this._context.fillStyle="#fbc02d",this._context.fillText(t,this._timeX,this._timeY)}_drawControllerSegment(){this._context.save(),this._context.fillStyle="black",this._context.fillRect(this._controllerArea.left,this._controllerArea.top,this._controllerArea.width,this._controllerArea.height),this._context.restore()}_drawController(t){this._context.save(),this._context.drawImage(this._controllerLeftImage,this._leftControllerPos.x,this._leftControllerPos.y,t,t),this._drawMiddleController(t),this._context.drawImage(this._controllerRightImage,this._rightControllerPos.x,this._rightControllerPos.y,t,t),this._context.drawImage(this._controllerUpImage,this._upControllerPos.x,this._upControllerPos.y,t,t),this._context.drawImage(this._controllerDownImage,this._downControllerPos.x,this._downControllerPos.y,t,t),this._context.restore()}_drawMiddleController(t){this._context.fillStyle="white",this._context.strokeStyle="#333333",this._context.lineWidth="3",this._context.fillRect(this._leftControllerPos.x+t,this._leftControllerPos.y+1,t,t-2),this._context.beginPath(),this._context.rect(this._leftControllerPos.x+t,this._leftControllerPos.y+1,t,t-2),this._context.stroke()}_drawControllerHighlight(t){this._context.save(),this._context.globalAlpha=.7,this._context.fillStyle="black",this._touchingLeftController?this._context.fillRect(this._leftControllerPos.x,this._leftControllerPos.y,t,t):this._touchingRightController?this._context.fillRect(this._rightControllerPos.x,this._rightControllerPos.y,t,t):this._touchingUpController?this._context.fillRect(this._upControllerPos.x,this._upControllerPos.y,t,t):this._touchingDownController&&this._context.fillRect(this._downControllerPos.x,this._downControllerPos.y,t,t),this._context.restore()}_drawPauseButton(){this._context.drawImage(this._pauseButton,this._pauseButtonPos.x,this._pauseButtonPos.y,this._pauseButtonSize,this._pauseButtonSize)}_drawYButton(){this._context.drawImage(this._yButtonImage,this._yButtonPos.x,this._yButtonPos.y,this._yButtonSize,this._yButtonSize),this._touchingYButton&&(this._context.save(),this._context.globalAlpha=.7,this._context.beginPath(),this._context.arc(this._yButtonPos.x+this._yButtonSize/2,this._yButtonPos.y+this._yButtonSize/2,this._yButtonSize/2,0,2*Math.PI),this._context.strokeStyle="black",this._context.stroke(),this._context.fillStyle="black",this._context.fill(),this._context.restore())}_isTouchingPauseButton(t){return t.clientX>=this._pauseButtonPos.x-this._touchSensitivity&&t.clientX<=this._pauseButtonPos.x+this._pauseButtonSize+this._touchSensitivity&&t.clientY>=this._pauseButtonPos.y-this._touchSensitivity&&t.clientY<=this._pauseButtonPos.y+this._pauseButtonSize+this._touchSensitivity}_isTouchingYButton(t){return t.clientX>=this._yButtonPos.x-this._touchSensitivity&&t.clientX<=this._yButtonPos.x+this._yButtonSize+this._touchSensitivity&&t.clientY>=this._yButtonPos.y-this._touchSensitivity&&t.clientY<=this._yButtonPos.y+this._yButtonSize+this._touchSensitivity}_isTouchingAController(t,e){return e.clientX>=t.x-this._touchSensitivity&&e.clientX<=t.x+this._controllerSize+this._touchSensitivity&&e.clientY>=t.y-this._touchSensitivity&&e.clientY<=t.y+this._controllerSize+this._touchSensitivity}_isTouchingController(t){const e=this._isTouchingAController(this._leftControllerPos,t),s=this._isTouchingAController(this._rightControllerPos,t),o=this._isTouchingAController(this._upControllerPos,t),r=this._isTouchingAController(this._downControllerPos,t);return e||s||o||r}_clearPointerTimeout(){for(const t of this._currentPointerTimeout)clearTimeout(t);this._currentPointerTimeout=[]}_moveShipLeft(){this._shipObject.x<=5||this._paused||(this._shipObject.x-=5)}_moveShipRight(){this._shipObject.x+5>=this._playAreaSize.width-this._shipObject.size||this._paused||(this._shipObject.x+=5)}_moveShipDown(){this._shipObject.y+5>=this._playAreaSize.height-this._shipObject.size||this._paused||(this._shipObject.y+=5)}_moveShipUp(){this._shipObject.y<=5||this._paused||(this._shipObject.y-=5)}_fireMissile(){this._missiles.push({x:this._shipObject.x+this._shipSize/2-this._missileWidth/2,y:this._shipObject.y-10,size:this._missileWidth})}_handleSpanning(){this._spanning=window.visualViewport.segments&&window.visualViewport.segments.length>1,this._updateGameLayout(),this._spanning?this._hidePauseButton():this._showPauseButton(),this._mainMenu.handleSpanning(),this._pauseMenu.handleSpanning(),this._aboutMenu.handleSpanning(),this._lostMenu.handleSpanning()}_handleOrientationChange(t){this._pauseGame(),this._updateGameLayout(),this._mainMenu.handleSpanning(),this._pauseMenu.handleSpanning(),this._aboutMenu.handleSpanning(),this._lostMenu.handleSpanning()}_updateGameLayout(){let t;this._playAreaSize&&(t={width:this._playAreaSize.width,height:this._playAreaSize.height});const e=window.visualViewport.segments;if(e&&e.length>1?(this._playAreaSize={left:e[0].left,top:e[0].top,width:e[0].width,height:e[0].height},this._controllerArea={left:e[1].left,top:e[1].top,width:e[1].width,height:e[1].height},this._pauseButtonPos={x:this._controllerArea.left+this._controllerArea.width/2-this._pauseButtonSize/2,y:this._controllerArea.top+this._controllerArea.height/2-this._pauseButtonSize/2},this._yButtonPos={x:this._controllerArea.left+this._controllerArea.width-this._yButtonSize*1.5,y:this._controllerArea.top+this._controllerArea.height/2-this._yButtonSize/2},this._leftControllerPos={x:this._controllerArea.left,y:this._controllerArea.top+this._controllerArea.height/2-this._controllerSize/2},this._rightControllerPos={x:this._controllerArea.left+2*this._controllerSize,y:this._controllerArea.top+this._controllerArea.height/2-this._controllerSize/2},this._upControllerPos={x:this._controllerArea.left+this._controllerSize,y:this._controllerArea.top+this._controllerArea.height/2-this._controllerSize*3/2},this._downControllerPos={x:this._controllerArea.left+this._controllerSize,y:this._controllerArea.top+this._controllerArea.height/2+this._controllerSize/2}):(this._playAreaSize={width:this._canvas.width,height:this._canvas.height},this._controllerArea={left:0,top:0,width:0,height:0},this._leftControllerPos={x:0,y:this._playAreaSize.height-2*this._controllerSizeTouch},this._rightControllerPos={x:2*this._controllerSizeTouch,y:this._playAreaSize.height-2*this._controllerSizeTouch},this._upControllerPos={x:this._controllerSizeTouch,y:this._playAreaSize.height-3*this._controllerSizeTouch},this._rightControllerPos={x:2*this._controllerSizeTouch,y:this._playAreaSize.height-2*this._controllerSizeTouch},this._downControllerPos={x:this._controllerSizeTouch,y:this._playAreaSize.height-this._controllerSizeTouch},this._pauseButtonPos={x:0,y:0},this._yButtonPos={x:this._playAreaSize.width-this._yButtonSize-10,y:this._playAreaSize.height-this._yButtonSize-10}),t){const s=this._shipObject.x/t.width;this._shipObject.x=this._playAreaSize.width*s;const o=this._shipObject.y/t.height;this._shipObject.y=this._playAreaSize.height*o,this._makeObjectFitInPlayBoundaries(this._shipObject);for(const a of this._meteors){const g=a.x/t.width;a.x=this._playAreaSize.width*g;let m=a.y/t.height;a.y=this._playAreaSize.height*m,this._makeObjectFitInPlayBoundaries(a)}const r=this._background1Y/t.height;this._background1Y=this._playAreaSize.height*r;const h=this._background2Y/t.height;this._background2Y=this._playAreaSize.height*h}this._timeX=this._playAreaSize.width-this._timeSize,this._timeY=30}_makeObjectFitInPlayBoundaries(t){t.x<this._playAreaSize.left?t.x=this._playAreaSize.left:t.x+t.size>this._playAreaSize.width&&(t.x=this._playAreaSize.width-t.size),t.y<this._playAreaSize.top?t.y=this._playAreaSize.top:t.y+t.size>this._playAreaSize.height&&(t.y=this._playAreaSize.height-t.size)}render(){return _`
      <foldable-device-configurator></foldable-device-configurator>
      <canvas id="canvas"></canvas>
      <picture>
        <source srcset="images/pause-button.webp" type="image/webp"/>
        <img class="hidden" id="pause-button" src="images/pause-button.png" @click="${this._pauseGame}">
      </picture>
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
        <source srcset="images/up-controller.webp" type="image/webp"/>
        <img id="up-controller" src="images/up-controller.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/down-controller.webp" type="image/webp"/>
        <img id="down-controller" src="images/down-controller.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/y-button.webp" type="image/webp"/>
        <img id="y-button" src="images/y-button.png">
      </picture>
      <picture class="hidden">
        <source srcset="images/missile.webp" type="image/webp"/>
        <img id="missile" src="images/missile.png">
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
           <div class="detail-about">About<br><br>This demo provides a specific experience on dual screens and foldable devices. Make sure to span the window.
           </div>
        </div>
        <picture slot="button">
          <source srcset="images/close-button.webp" type="image/webp"/>
          <img alt="Image of a close button" class="menu-button" src="images/close-button.jpg" @click="${this._openMainMenu}">
        </picture>
      </game-menu>
      <game-menu id="lost-menu">
        <div slot="title">You Lost!</div>
        <div slot="button" class="score">Your time was ${this.currentTime} seconds</div>
        <picture slot="button2">
          <source srcset="images/restart-button.webp" type="image/webp"/>
          <img alt="Image of a restart button" class="menu-button" src="images/restart-button.jpg" @click="${this._startGame}">
        </picture>
      </game-menu>
    `}}i(d,"styles",c`
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
      cursor: pointer;
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
      font-size: 1em;
      margin-bottom: 20px;
    }

    #pause-button {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 60px;
      height: 60px;
      user-select: none;
      cursor: pointer;
    }
  `);customElements.define("main-application",d);
