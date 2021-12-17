var V=Object.defineProperty;var N=Object.getPrototypeOf;var J=Reflect.get;var K=(r,t,e)=>t in r?V(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var n=(r,t,e)=>(K(r,typeof t!="symbol"?t+"":t,e),e);var G=(r,t)=>J(N(r),t,r);import{s as m,r as u,p,a as _,w as S,n as Q,v as W}from"./vendor.af160429.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}};X();const g={Horizontal:"horizontal",Vertical:"vertical"},l={Submarine:"submarine",Carrier:"carrier",Rescue:"rescue",Battleship:"battleship",Destroyer:"destroyer"};function k(r){switch(r){case l.Submarine:return 3;case l.Carrier:return 5;case l.Battleship:return 4;case l.Destroyer:return 3;case l.Rescue:return 2;default:return 0}}class M extends m{constructor(){super();n(this,"_image");this._x=0,this._y=0,this._orientation=g.Horizontal,this._type=l.Submarine,this._size=0,this._destroyed=!1,this._hitCount=0}static get properties(){return{type:{type:String,reflectToAttribute:!0,attribute:!0},orientation:{type:String,reflectToAttribute:!0,attribute:!0},x:{type:Number,reflectToAttribute:!0,attribute:!0},y:{type:Number,reflectToAttribute:!0,attribute:!0},size:{type:Number},hitCount:{type:Number},destroyed:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set type(t){let e=this._type;this._type=t,this.requestUpdate("type",e),this.size=k(this._type),this.shadowRoot&&this.shadowRoot.host.style.setProperty("--size",this._size)}get type(){return this._type}set destroyed(t){let e=this._destroyed;this._destroyed=t,this.requestUpdate("destroyed",e)}get destroyed(){return this._destroyed}set hitCount(t){let e=this._hitCount;this._hitCount=t,this.requestUpdate("hitCount",e)}get hitCount(){return this._hitCount}set orientation(t){let e=this._orientation;this._orientation=t,this.requestUpdate("orientation",e),!!this.shadowRoot&&(t==g.Horizontal?(this.shadowRoot.host.classList.add("horizontal"),this.shadowRoot.host.classList.remove("vertical")):(this.shadowRoot.host.classList.remove("horizontal"),this.shadowRoot.host.classList.add("vertical")))}get orientation(){return this._orientation}set x(t){let e=this._x;this._x=t,this.requestUpdate("x",e),this.shadowRoot&&this.shadowRoot.host.style.setProperty("--x",this.x+1)}get x(){return this._x}set y(t){let e=this._y;this._y=t,this.requestUpdate("y",e),this.shadowRoot&&this.shadowRoot.host.style.setProperty("--y",t+1)}get y(){return this._y}set size(t){let e=this._size;this._size=t,this.requestUpdate("size",e),this.shadowRoot&&this.shadowRoot.host.style.setProperty("--size",this._size)}get size(){return this._size}firstUpdated(){this._image=this.shadowRoot.querySelector("#image"),this.size=k(this._type),this.y=this._y,this.x=this._x,this.orientation=this._orientation}reset(){Array.from({length:this.size}).map((t,e)=>{this.renderRoot.querySelector("#hit-"+e).classList.remove("hit")}),this.hitCount=0,this.destroyed=!1}enemyShootAt(t,e){let i;this.orientation===g.Horizontal?i=e-this.y:i=t-this.x,this.renderRoot.querySelector("#hit-"+i).classList.add("hit"),this.hitCount++,this.hitCount===this.size?this.shipDestroyed():this.shipHit()}shipDestroyed(){this.destroyed=!0;let t=new CustomEvent("ship-destroyed",{detail:{message:"Ship Destroyed",type:this.type},bubbles:!0,composed:!0});this.dispatchEvent(t)}shipHit(){let t=new CustomEvent("ship-hit",{detail:{message:"Ship Hit",type:this.type},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return p`
      <div class="hit-zone ${this.orientation===g.Horizontal?"hit-zone-horizontal":"hit-zone-vertical"}">
        ${Array.from({length:this.size}).map((t,e)=>p`
            <div class="cell"><div class="hit-area" id="hit-${e}"></div></div>
        `)}
      </div>
      <picture>
          <source srcset="images/${this.type}-top-${this.orientation}.webp" type="image/webp">
          <img id="image" src="images/${this.type}-top-${this.orientation}.png" alt="${this.type}"/>
      </picture>
    `}}n(M,"styles",u`
    :host {
      overflow: hidden;
      position: relative;
      border: var(--my-ship-border);

      --x: 0;
      --y: 0;
      --size: 0;
      --my-ship-border: solid 2px #910101;
    }

    :host(.horizontal) {
      grid-column-start: var(--y);
      grid-column-end: calc(var(--y) + var(--size));
      grid-row-start: var(--x);
      grid-row-end: var(--x);
    }

    :host(.vertical) {
      grid-column-start: var(--y);
      grid-column-end: var(--y);
      grid-row-start: var(--x);
      grid-row-end: calc(var(--x) + var(--size));
    }

    img {
      max-width: 100%;
      max-height: 100%;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .cell {
      border: var(--my-ship-border);
      border-style: dotted;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
    }


    .hit-area {
      height: 2vw;
      width: 2vw;
      background-color: black;
      border-radius: 50%;
      z-index: 3;
      opacity: 0.85;
    }

    .hit {
      background-color: red;
    }

    .hit-zone {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      height: 100%;
    }

    .hit-zone-vertical {
      flex-direction: column;
    }
  `);customElements.define("ship-element",M);class P extends m{static get properties(){return{hit:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set hit(t){let e=this._hit;this._hit=t,this.requestUpdate("hit",e)}get hit(){return this._hit}constructor(){super();this._hit=!1}render(){return p`
      <div class="cell">
        <slot></slot>
        <div class="hit-water-area ${this.hit?"visible":""}"></div>
      </div>`}}n(P,"styles",u`
    :host {
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1vw;
    }

    .hit-water-area {
      height: 2vw;
      width: 2vw;
      background-color: white;
      border-radius: 50%;
      display: none;
    }

    .visible {
      display: block;
    }
  `);customElements.define("empty-cell",P);class L extends m{constructor(){super();n(this,"_shipPlaced",[]);this._grid=[]}static get properties(){return{grid:{type:Array,hasChanged(){return!0}}}}set grid(t){let e=this._grid;this._grid=t,this.requestUpdate("grid",e)}get grid(){return this._grid}getRandomCoordinate(){return Math.floor(Math.random()*(10-1+1)+1)}getRandomOrientation(){return Math.random()>=.5?g.Vertical:g.Horizontal}firstUpdated(){this.initGrid()}initGrid(){this.grid=[[{text:"/"},{text:"1"},{text:"2"},{text:"3"},{text:"4"},{text:"5"},{text:"6"},{text:"7"},{text:"8"},{text:"9"},{text:"10"}],[{text:"A"},"","","","","","","","","",""],[{text:"B"},"","","","","","","","","",""],[{text:"C"},"","","","","","","","","",""],[{text:"D"},"","","","","","","","","",""],[{text:"E"},"","","","","","","","","",""],[{text:"F"},"","","","","","","","","",""],[{text:"G"},"","","","","","","","","",""],[{text:"H"},"","","","","","","","","",""],[{text:"I"},"","","","","","","","","",""],[{text:"J"},"","","","","","","","","",""]];for(let t=1;t<=10;++t)for(let e=1;e<=10;e++)this.grid[t][e]={text:"",shot:!1}}restart(){this.initGrid(),this._shipPlaced=[],this._submarine.reset(),this._destroyer.reset(),this._carrier.reset(),this._battleship.reset(),this._rescue.reset(),this.generateRandomGrid()}generateRandomGrid(){Object.values(l).map(t=>{this.placeShipRandomly(t)})}placeShipRandomly(t){const e=this.getRandomCoordinate(),i=this.getRandomCoordinate(),s=this.getRandomOrientation(),o=k(t);if(s===g.Horizontal){if(i+o>10)return this.placeShipRandomly(t)}else if(e+o>10)return this.placeShipRandomly(t);if(s===g.Horizontal){for(let h=i;h<=i+o;++h)if(this.grid[e][h]!=null&&this.isShip(this.grid[e][h]))return this.placeShipRandomly(t)}else for(let h=e;h<=e+o;++h)if(this.grid[h][i]!=null&&this.isShip(this.grid[h][i]))return this.placeShipRandomly(t);this.addShip(t,e,i,s,o)}addShip(t,e,i,s,o){if(e===0||i===0){console.error("Adding ship in the wrong column/row.");return}const h={type:t,orientation:s,x:e,y:i,shot:!1};if(this.grid[e][i]=h,s===g.Horizontal)for(let d=i;d<i+o;++d)this.grid[e][d]={type:t,orientation:s,x:e,y:d,shot:!1};else if(s===g.Vertical)for(let d=e;d<e+o;++d)this.grid[d][i]={type:t,orientation:s,x:d,y:i,shot:!1}}updateGrid(){this._shipPlaced=[],this.requestUpdate("grid",this.grid)}isShip(t){return t.type===l.Submarine||t.type===l.Destroyer||t.type===l.Battleship||t.type===l.Carrier||t.type===l.Rescue}isShipPlaced(t){return this._shipPlaced.includes(t)}isGameOver(){return this._submarine.destroyed&&this._destroyer.destroyed&&this._carrier.destroyed&&this._battleship.destroyed&&this._rescue.destroyed}dispatchGameOverIfNecessary(){if(this.isGameOver()){let t=new CustomEvent("game-over",{detail:{message:"Game Over"},bubbles:!0,composed:!0});this.dispatchEvent(t)}}playerPlayed(t,e){let i=new CustomEvent("player-played",{detail:{message:"player played.",x:t,y:e},bubbles:!0,composed:!0});this.dispatchEvent(i),this.dispatchGameOverIfNecessary()}playerHitShip(t){let e=new CustomEvent("player-hit",{detail:{message:"player played.",type:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}playerSankShip(t){let e=new CustomEvent("player-sank",{detail:{message:"player played.",type:t},bubbles:!0,composed:!0});this.dispatchEvent(e),this.dispatchGameOverIfNecessary()}update(){super.update(),this._submarine=this.shadowRoot.querySelector("#submarine"),this._destroyer=this.shadowRoot.querySelector("#destroyer"),this._carrier=this.shadowRoot.querySelector("#carrier"),this._battleship=this.shadowRoot.querySelector("#battleship"),this._rescue=this.shadowRoot.querySelector("#rescue")}}n(L,"styles",u`
    :host {
      width: 100%;
      height: 100%;
      --border-grid: solid 2px white;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    empty-cell {
      border: var(--border-grid);
    }

    .grid {
      display: grid;
      width: 100%;
      height: 97%;
      grid-template-columns: repeat(11, 1fr);
      grid-template-rows: repeat(11, 1fr);
    }

    .title {
      font-size: 1vw;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3%;
    }
  `);const a={Top:"Top",Bottom:"Bottom",Left:"Left",Right:"Right"},E=class extends L{constructor(){super();n(this,"_pendingSanks",[]);n(this,"_boatsToSink",[]);this._previousShot={x:0,y:0}}firstUpdated(){super.firstUpdated(),this.generateRandomGrid(),this._boatsToSink=[l.Carrier,l.Battleship,l.Submarine,l.Destroyer,l.Rescue]}restart(){super.restart(),this._previousShot={x:0,y:0},this._pendingSanks=[],this._boatsToSink=[l.Carrier,l.Battleship,l.Submarine,l.Destroyer,l.Rescue]}isCellAPreviouslyMissedShot(t){return t.shot&&t.type===void 0}isCellABoatPreviouslyShot(t){return t.shot&&t.type!=null&&t.type===this.grid[this._previousShot.x][this._previousShot.y].type}biggestBoatLeft(){return k(this._boatsToSink[0])}smallestBoatLeft(){return k(this._boatsToSink[this._boatsToSink.length-1])}boatsLeftFitAround(t,e){let i=this.biggestBoatLeft();const s={x:t,y:e},o=this.walkGridAndCountEmptySpaces(a.Left,s,i-1,0),h=this.walkGridAndCountEmptySpaces(a.Right,s,i-1,0),d=this.walkGridAndCountEmptySpaces(a.Top,s,i-1,0),w=this.walkGridAndCountEmptySpaces(a.Bottom,s,i-1,0);return o+1===i||h+1===i||d+1===i||w+1===i||o+h+1>=i||d+w+1>=i}walkGridAndCountEmptySpaces(t,e,i,s){if(this.isCellAtTheEge(t,e))return s;const o=this.getNeighborCell(t,e);return this.grid[o.x][o.y].shot===!0||(s++,s===i)?s:this.walkGridAndCountEmptySpaces(t,o,i,s)}isCellAtTheEge(t,e){return t===a.Left&&e.y-1==0||t===a.Right&&e.y+1===11||t===a.Top&&e.x-1==0||t===a.Bottom&&e.x+1===11}getNeighborCell(t,e){let i=e;switch(t){case a.Left:i={x:e.x,y:Math.max(e.y-1,1)};break;case a.Right:i={x:e.x,y:Math.min(e.y+1,10)};break;case a.Top:i={x:Math.max(e.x-1,1),y:e.y};break;case a.Bottom:i={x:Math.min(e.x+1,10),y:e.y};break;default:console.error("wrong direction");return}return i}walkGridToFindEmptyCell(t,e){if(this.isCellAtTheEge(t,e))return null;const i=this.getNeighborCell(t,e);return this.isCellAPreviouslyMissedShot(this.grid[i.x][i.y])?null:this.isCellABoatPreviouslyShot(this.grid[i.x][i.y])?this.walkGridToFindEmptyCell(t,i):this.grid[i.x][i.y].shot===!0?null:i}walkGridToFindCandidateToShoot(t,e,i,s){if(this.isCellAtTheEge(t,e))return s;const o=this.getNeighborCell(t,e);return this.isCellAPreviouslyMissedShot(this.grid[o.x][o.y])?s:this.isCellABoatPreviouslyShot(this.grid[o.x][o.y])?this.walkGridToFindCandidateToShoot(t,o,i,++s):this.grid[o.x][o.y].shot===!0||(s++,s>=i)?s:this.walkGridToFindCandidateToShoot(t,o,i,s)}isBoatHorizontal(t){let e=null;if(!this.isCellAtTheEge(a.Left,t)){let i=this.getNeighborCell(a.Left,t);this.isCellABoatPreviouslyShot(this.grid[i.x][i.y])&&(e=!0)}if(!this.isCellAtTheEge(a.Right,t)){let i=this.getNeighborCell(a.Right,t);this.isCellABoatPreviouslyShot(this.grid[i.x][i.y])&&(e=!0)}return e}isBoatVertical(t){let e=null;if(!this.isCellAtTheEge(a.Top,t)){let i=this.getNeighborCell(a.Top,t);this.isCellABoatPreviouslyShot(this.grid[i.x][i.y])&&(e=!0)}if(!this.isCellAtTheEge(a.Bottom,t)){let i=this.getNeighborCell(a.Bottom,t);this.isCellABoatPreviouslyShot(this.grid[i.x][i.y])&&(e=!0)}return e}enemyShoot(){if(this.isGameOver())return;let t,e;if(this._previousShot.x!=0&&this._previousShot.y!=0){let i,s,o,h,d=!1,w=!1,f=!1,x=!1,y,c=this.smallestBoatLeft();const z=this.walkGridToFindCandidateToShoot(a.Left,this._previousShot,c-1,0),C=this.walkGridToFindCandidateToShoot(a.Right,this._previousShot,c-1,0),R=this.walkGridToFindCandidateToShoot(a.Top,this._previousShot,c-1,0),T=this.walkGridToFindCandidateToShoot(a.Bottom,this._previousShot,c-1,0);let b=this.isBoatVertical(this._previousShot),v=this.isBoatHorizontal(this._previousShot);z>0&&(v===null||v)&&(z+1===c||C+z+1>=c)&&(i=this.walkGridToFindEmptyCell(a.Left,this._previousShot),i&&(d=!0)),C>0&&(v===null||v)&&(C+1===c||C+z+1>=c)&&(s=this.walkGridToFindEmptyCell(a.Right,this._previousShot),s&&(w=!0)),R>0&&(b===null||b)&&(R+1===c||R+T+1>=c)&&(o=this.walkGridToFindEmptyCell(a.Top,this._previousShot),o&&(f=!0)),T>0&&(b===null||b)&&(T+1===c||R+T+1>=c)&&(h=this.walkGridToFindEmptyCell(a.Bottom,this._previousShot),h&&(x=!0)),b===null&&v===null?y=Math.random()>=.5:v?y=!1:b&&(y=!0),y&&!x&&!f&&(y=!1),!y&&!d&&!w&&(y=!0),y&&(f||x)?(f&&x?Math.random()>=.5?t=o.x:t=h.x:f?t=o.x:x&&(t=h.x),e=this._previousShot.y):(d&&w?Math.random()>=.5?e=i.y:e=s.y:w?e=s.y:d&&(e=i.y),t=this._previousShot.x)}else for(t=this.getRandomCoordinate(),e=this.getRandomCoordinate();this.grid[t][e].shot===!0||this.grid[t][e].shot===!1&&!this.boatsLeftFitAround(t,e);)t=this.getRandomCoordinate(),e=this.getRandomCoordinate();if(this.isShip(this.grid[t][e])){const i=this.shadowRoot.querySelector("#"+this.grid[t][e].type);i.enemyShootAt(t,e),this.grid[t][e].shot=!0,this.grid[t][e].type!=this._previousShot.type&&this._previousShot.type!=null&&this._pendingSanks.push(Object.create(this._previousShot)),this._previousShot={x:t,y:e,type:i.type},i.destroyed&&(this._pendingSanks.length>0?this._previousShot=this._pendingSanks.pop():this._previousShot={x:0,y:0}),setTimeout(()=>this.enemyShoot(),2e3);return}this.grid[t][e].shot=!0,this.updateGrid(),this.playerPlayed(t,e)}shipDestroyed(t){this._boatsToSink=this._boatsToSink.filter(e=>e!=t.detail.type),this.playerSankShip(t.detail.type)}shipHit(t){this.playerHitShip(t.detail.type)}render(){return p`
      <div class="title">Your fleet</div>
      <div class="grid">
          ${this.grid.map((t,e)=>t.map((i,s)=>{if(this.isShip(this.grid[e][s])){if(!this.isShipPlaced(i.type))return this._shipPlaced.push(i.type),p`
                      <ship-element id="${i.type}" x="${i.x}" y="${i.y}"
                        type="${i.type}" orientation="${i.orientation}" @ship-hit="${this.shipHit}"
                        @ship-destroyed="${this.shipDestroyed}">
                      </ship-element>`}else return p`<empty-cell ?hit="${i.shot}">${i.text}</empty-cell>`}))}
      </div>
    `}};let A=E;n(A,"styles",[G(E,"styles"),u`
    :host {
      pointer-events:none;
    }
  `]);customElements.define("player-grid",A);const B=class extends M{constructor(){super();n(this,"_image")}firstUpdated(){super.firstUpdated(),this._image=this.shadowRoot.querySelector("#image")}reset(){Array.from({length:this.size}).map((t,e)=>{const i=this.shadowRoot.querySelector("#hit-"+e);i.style.visibility="hidden"}),this.hitCount=0,this._image.style.display="none"}shootAt(t){let e=this.shadowRoot.querySelector("#hit-"+t);e.style.visibility==="visible"&&e.style.visibility!=""||(this.hitCount=this.hitCount+1,e.style.visibility="visible",this.hitCount===this.size?(this._image.style.display="inline",this.shipDestroyed()):this.shipHit())}render(){return p`
      <div class="hit-zone ${this.orientation===g.Horizontal?"hit-zone-horizontal":"hit-zone-vertical"}">
        ${Array.from({length:this.size}).map((t,e)=>p`
            <div class="cell" @click="${()=>this.shootAt(e)}"><div class="hit-area" id="hit-${e}"></div></div>
        `)}
      </div>
      <picture>
          <source srcset="images/${this.type}-top-${this.orientation}.webp" type="image/webp">
          <img id="image" src="images/${this.type}-top-${this.orientation}.png" alt="${this.type}"/>
      </picture>
    `}};let $=B;n($,"styles",[G(B,"styles"),u`
    :host {
      border: 0;
    }

    .cell {
      border: var(--border-grid);
    }

    .hit-area {
      visibility: hidden;
      background-color: red;
    }

    img {
      display: none;
      opacity: 0.7;
    }
`]);customElements.define("enemy-ship",$);const q=class extends L{firstUpdated(){super.firstUpdated(),this.generateRandomGrid()}constructor(){super()}fireAt(t,e){let i=this.grid[t][e];if(!(this.isShip(i)||i.text!="")){if(i.shot===!0){console.log("You shot there already.");return}i.shot=!0,this.updateGrid(),this.playerPlayed(t,e)}}shipDestroyed(t){this.playerSankShip(t.detail.type),this.dispatchGameOverIfNecessary()}shipHit(t){this.playerHitShip(t.detail.type)}render(){return p`
      <div class="title">Enemy's fleet</div>
      <div class="grid">
          ${this.grid.map((t,e)=>t.map((i,s)=>{if(this.isShip(this.grid[e][s])){if(!this.isShipPlaced(i.type))return this._shipPlaced.push(i.type),p`
                      <enemy-ship id="${i.type}" x="${i.x}" y="${i.y}"
                        type="${i.type}" orientation="${i.orientation}" @ship-destroyed="${this.shipDestroyed}"
                        @ship-hit="${this.shipHit}">
                      </enemy-ship>`}else return p`<empty-cell ?hit="${i.shot}" @click="${()=>this.fireAt(e,s)}">${i.text}</empty-cell>`}))}
      </div>
    `}};let H=q;n(H,"styles",[G(q,"styles"),u`
    .cell {
      cursor:pointer;
    }
  `]);customElements.define("enemy-grid",H);const Z=(r,...t)=>{const e=S(r[0],"how-to-screen");return u([e],...t)};class j extends m{constructor(){super()}connectedCallback(){super.connectedCallback(),_(this)}close(){let t=new CustomEvent("howto-closed",{bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return p`
      <div class="content">
        <div class="items">
          <div class="title">Summary</div>
          <p>
            FoldShip is a game where you try to guess the oponent's ships location and sink them.
            Each player has two grids in front of them : yours, where your own ships are placed and
            the opponent's grid, which starts empty. Each grid has vertical and horizontal coordinates. 
          </p>
          <p>The mechanic of the game is simple: each player
            take turn firing at the coordinate of their choice to try to find the opponent's ships.
          </p>
          <div class="title">Setup</div>
          <p>
            Each player have their ship positioned in their grid. The setup is as follow:
          </p>
          <p>
            <picture class="how-to-grid">
              <source srcset="images/grid-how-to.webp" type="image/webp">
              <img class="how-to-grid-img" src="images/grid-how-to.png" alt="example of fold ship grid"/>
            </picture>
          </p>
          <p>
            Each ship can receive a certain amount of hits before they sink. Here are all
            the ships in the game:
          </p>
          <li>
            <div class="boat-legend">
              <picture>
              <source srcset="images/carrier-top-horizontal.webp" type="image/webp">
              <img class="ship-image" src="images/carrier-top-horizontal.webp" alt="picture of a carrier ship"/>
              </picture>
              &rarr; carrier (5 hits before sinking)
            </div>
          </li>
          <li>
            <div class="boat-legend">
              <picture>
                <source srcset="images/battleship-top-horizontal.webp" type="image/webp">
                <img class="ship-image" src="images/battleship-top-horizontal.webp" alt="picture of a battleship"/>
              </picture>
              &rarr; battleship (4 hits before sinking)
            </div>
          </li>
          <li>
          <picture>
            <source srcset="images/destroyer-top-horizontal.webp" type="image/webp">
            <img class="ship-image" src="images/destroyer-top-horizontal.webp" alt="picture of a destroyer ship"/>
            </picture>
            &rarr; destroyer (3 hits before sinking)
          </li>
          <li>
          <picture>
            <source srcset="images/submarine-top-horizontal.webp" type="image/webp">
            <img class="ship-image" src="images/submarine-top-horizontal.webp" alt="picture of a submarine ship"/>
            </picture>
            &rarr; submarine (3 hits before sinking)
          </li>
          <li>
          <picture>
            <source srcset="images/rescue-top-horizontal.webp" type="image/webp">
            <img class="ship-image" src="images/rescue-top-horizontal.webp" alt="picture of a rescue ship"/>
            </picture>
            &rarr; rescue (2 hits before sinking)
          </li>
          <div class="title">Gameplay</div>
          <p>
            Each player takes turns firing shots in an attempt to find the opponent's ships.
            In FoldShip just click into the square you want to fire at. If you hit an opponent's
            boat it will display a red circle. However if you hit the water it will display a white
            circle. If you hit a boat you can fire again.
            The first player who sink the five boats first wins.
          </p>
          <picture>
            <source srcset="images/close-button.webp" type="image/webp">
            <img class="menu-button" src="images/close-button.png" @click="${this.close}" alt="image of a close button"/>
          </picture>
        </div>
      </div>
    `}}n(j,"styles",Z`
    :host {
      width: 98vw;
      height: 98vh;
      position: absolute;
      top: 1vh;
      left: 1vw;
      z-index: 4;
      font-size: 1vw;
    }

    .content {
      background: linear-gradient(to bottom, rgba(94,205,199,1) 0%, rgba(41,184,229,1) 53%, rgba(56,136,192,1) 100%);
      border-radius: 1em;
      padding: 4px;
      height: 100%;
    }

    .items {
      display: flex;
      flex-direction: column;
      background-color: white;
      border-radius: 1em;
      height: 100%;
      font-size: 1.3em;
      overflow-y: auto;
      scrollbar-width: thin;
    }

    .title {
      font-size: 1.9em;
      text-align: center;
    }

    p {
      margin: 10px;
    }

    li {
      margin-left: 10px;
      margin-bottom: 5px;
    }

    .menu-button {
      width: 15%;
      display: block;
      margin: auto;
    }

    .menu-button:hover {
      filter: drop-shadow(5px 5px 5px black) saturate(30%);
    }

    .how-to-grid {
      width: 60%;
      margin: auto;
    }

    .how-to-grid-img {
      width: 60%;
      display: block;
      margin: auto;
    }

    .ship-image {
      width: 10%;
      vertical-align: middle;
    }

    .boat-legend {
      display: inline;
    }

    @media (max-width: 1024px) and (orientation: landscape) {
      :host {
        width: 98vw;
        height: 85vh;
      }

      .items {
        font-size: 1.7em;
      }
    }

    @media (horizontal-viewport-segments: 2) {
      :host {
        width: env(viewport-segment-width 0 0);
        height: 90vh;
        top: 0;
        left: 0;
      }

      .items {
        font-size: 1.6em;
      }

      .how-to-grid {
        width: 80%;
        margin: auto;
      }

      .menu-button {
        width: 30%;
      }
    }

    @media (vertical-viewport-segments: 2) {
      :host {
        width: 100vw;
        height: 94vh;
        top: 0;
        left: 0;
      }

      .items {
        font-size: 2.5em;
      }

      .title {
        font-size: 2.8em;
      }

      .how-to-grid {
        width: 80%;
        margin: auto;
      }

      .how-to-grid-img {
        width: 80%;
        display: block;
        margin: auto;
      }

      .menu-button {
        width: 30%;
      }
    }
  `);customElements.define("how-to-screen",j);const tt=(r,...t)=>{const e=S(r[0],"info-box");return u([e],...t)};class I extends m{constructor(){super()}render(){return p`
      <div class="content">
        <svg  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 132 136">
          <path class="path" d="M66.1 1.5C30.4 1.5 1.5 22.9 1.5 46c0 18.1 17.9 33.5 42.8 39.3 1.5 14.8-1.3 39-8.5 48.1 10.8-12.5 22.4-33.6 26.6-45.7 1.2 0 2.5.1 3.7.1 35.7 0 64.6-18.7 64.6-41.8S101.8 1.5 66.1 1.5zM35.8 133.4c-.3.4-.7.8-1 1.1.4-.3.7-.7 1-1.1z"/>
        </svg>
        <div class="label">
          <slot name="text"></slot>
        </div>
      </div>
    `}}n(I,"styles",u`
    :host {
      width: 100%;
      height: 100%;
    }

    path {
      fill: white;
      stroke: rgba(94,205,199,1);
      stroke-width: 4;
      stroke-linejoin: bevel;
      vector-effect: non-scaling-stroke;
    }

    svg {
      transform: rotateY(180deg);
    }

    .content {
      position: relative;
    }

    .label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 62%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `);customElements.define("speech-bubble",I);class F extends m{constructor(){super()}connectedCallback(){super.connectedCallback(),_(this)}render(){return p`
      <div class="content">
        <speech-bubble class="bubble">
            <slot name="label" slot="text"></slot>
        </speech-bubble>
        <picture class="picture">
          <source srcset="images/captain.webp" type="image/webp">
          <img class="captain" src="images/captain.png" alt="captain face"/>
        </picture>
      </div>
    `}}n(F,"styles",tt`
    :host {
      width: 15vw;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 3;
      opacity: 0.8;
      font-size: 1vw;
    }

    .content {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .bubble {
      width: 80%;
      height: auto;
    }

    ::slotted(*) {
      line-height: 200%;
      margin: 5px;
      font-size: inherit;
    }

    .picture {
      width: 30%;
      align-self: flex-end;
      margin-top: -3em;
    }

    .captain {
      width: 100%;
      transform: rotateY(180deg);
      opacity: 0.8;
    }
  `);customElements.define("info-box",F);const et=(r,...t)=>{const e=S(r[0],"dialog-box");return u([e],...t)};class U extends m{constructor(){super()}connectedCallback(){super.connectedCallback(),_(this)}firstUpdated(){this._label=this.shadowRoot.querySelector(".label")}showMessage(t){this._label.innerHTML=t,this.open()}close(){this.shadowRoot.host.style.visibility="hidden"}open(){this.shadowRoot.host.style.visibility="visible"}render(){return p`
      <div class="content">
        <div class="items">
          <div class="title">
            <slot name="title"></slot>
          </div>
          <div class="label">
            <slot name="label"></slot>
          </div>
          <div class="button">
            <slot name="menu-1"></slot>
          </div>
          <div class="button">
            <slot name="menu-2"></slot>
          </div>
        </div>
      </div>
    `}}n(U,"styles",et`
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

    .content {
      background: linear-gradient(to bottom, rgba(94,205,199,1) 0%, rgba(41,184,229,1) 53%, rgba(56,136,192,1) 100%);
      padding: 4px;
      height: 100%;
      border-radius: 1em;
    }

    .items {
      background-color: white;
      display: flex;
      height: 100%;
      border-radius: 1em;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .label {
      font-size: 1.5vw;
      text-align: center;
      margin-bottom: 10px;
    }

    .title {
      font-size: 2vw;
      text-align: center;
      margin-bottom: 10px;
    }

    .button {
      margin-bottom: 10px;
    }

    .button:hover {
      filter: drop-shadow(5px 5px 5px black) saturate(30%);
    }

    @media (vertical-viewport-segments: 2) {
      :host {
        width: 32vw;
        height: 15vh;
        top: calc(env(viewport-segment-top 0 1) + (100vh - env(viewport-segment-top 0 1) + calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0))) / 2 - 10vh);
        left: calc(50vw - 15vw);
      }
    }

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      :host {
        width: 25vw;
        height: 30vh;
        top: calc(50vh - 15vh);
        left: calc(50vw - 12.5vw);
      }
    }

    @media (horizontal-viewport-segments: 2) {
      :host {
        width: 20vw;
        height: 30vh;
        top: calc(50vh - 20vh);
        left: calc(env(viewport-segment-right 0 0) + (100vw - env(viewport-segment-right 0 0) + calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0))) / 2 - 10vw);
      }
    }

    @media (max-width: 1024px) and (orientation: landscape) and (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .title {
        font-size: 1em;
      }

      :host {
        width: 50vw;
        height: 55vh;
        top: calc(50vh - 35vh);
        left: calc(50vw - 25vw);
      }
    }

    @media (max-width: 1024px) and (orientation: portrait) and (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) {
      .title {
        font-size: 1em;
      }

      :host {
        width: 50vw;
        height: 25vh;
        top: calc(50vh - 20vh);
        left: calc(50vw - 25vw);
      }
    }

  `);customElements.define("dialog-box",U);const it=(r,...t)=>{const e=S(r[0],"rotate-box");return u([e],...t)};class O extends m{constructor(){super()}connectedCallback(){super.connectedCallback(),_(this)}firstUpdated(){this._text=this.shadowRoot.querySelector("#rotate-message")}setLabel(t){this._text.innerHTML=t}hide(){this.shadowRoot.host.style.visibility="hidden"}show(){this.shadowRoot.host.style.visibility=""}render(){return p`
      <div id="fullscreen-rotate">
        <info-box id="rotate-infobox">
          <div slot="label" id="rotate-message">Ahoy Captain!<br>Please rotate your device to play.</div>
        </info-box>
      </div>
    `}}n(O,"styles",it`
    :host {
      width: 100%;
      height: 100%;
      z-index: 99;
      position: absolute;
      top: 0;
      left: 0;
      visibility: hidden;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    #rotate-infobox {
        width: 90%;
        height: 90%;
        position: absolute;
        top: 5%;
        left: 5%;
        font-size: 2vmax;
        opacity: 1;
        text-align: center;
    }

    @media all and (orientation:landscape) {
      :host {
        visibility: hidden;
      }
    }

    @media all and (orientation:portrait) {
      :host {
        visibility: visible;
      }
    }

    @media (horizontal-viewport-segments: 2) {
      :host {
        visibility: hidden;
      }
    }

    @media (vertical-viewport-segments: 2) {
      :host {
        visibility: hidden;
      }
    }
  `);customElements.define("rotate-box",O);const st=(r,...t)=>{const e=S(r[0],"main-application");return u([e],...t)},ot=["","A","B","C","D","E","F","G","H","I","J"];class D extends m{constructor(){super();n(this,"_timeBetweenRounds",1500);n(this,"_snackbar");n(this,"_playMessage");n(this,"_playing",!1);n(this,"_wb");n(this,"_wbRegistration");this._round=0}firstUpdated(){this._enemyGrid=this.shadowRoot.querySelector("#enemy-grid"),this._playerGrid=this.shadowRoot.querySelector("#player-grid"),this._playMessage=this.shadowRoot.querySelector("#play-message"),this._endGameMenu=this.shadowRoot.querySelector("#end-game-menu"),this._welcomeMenu=this.shadowRoot.querySelector("#welcome-menu"),this._endGameMessage=this.shadowRoot.querySelector("#end-game-message"),this._endGameTitle=this.shadowRoot.querySelector("#end-game-title"),this._welcomeMenu.open(),this._snackbar=this.shadowRoot.querySelector("#snackbar"),this._infobox=this.shadowRoot.querySelector("#infobox"),this._fullscreenRotate=this.shadowRoot.querySelector("#fullscreen-rotate"),this._fullscreenRotate.hide(),this._howTo=this.shadowRoot.querySelector("#how-to"),this._snackbar.addEventListener("MDCSnackbar:closed",t=>{t.detail.reason==="action"&&(this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&Q(this._wbRegistration.waiting,{type:"SKIP_WAITING"}))}),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new W("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSnackbar()),this._wb.addEventListener("externalwaiting",()=>this._showSnackbar()),this._wbRegistration=await this._wb.register()})}connectedCallback(){super.connectedCallback(),_(this)}_showSnackbar(){this._snackbar.show()}_deviceSupportsSpanningMQs(){return window.matchMedia("(vertical-viewport-segments)").matches||window.matchMedia("(horizontal-viewport-segments)").matches||!1}startGame(){this._deviceSupportsSpanningMQs()&&this._fullscreenRotate.setLabel("Ahoy Captain!<br>Please rotate your device to play.                                 <br> You can also span the window to play."),this._fullscreenRotate.show(),this._welcomeMenu.close(),this._enemyGrid.classList.remove("blocked"),this._playerGrid.style.visibility="visible",this._enemyGrid.style.visibility="visible",this._infobox.style.visibility="visible",this._playing=!0}restartGame(){this._round=0,this._enemyGrid.classList.remove("blocked"),this._enemyGrid.restart(),this._playerGrid.restart(),this._playMessage.innerHTML="Let's get started, fire first.",this._endGameMenu.close(),this.startGame()}showHowTo(){this._welcomeMenu.close(),this._endGameMenu.close(),this._howTo.style.visibility="visible"}closeHowTo(){this._round>0?this._endGameMenu.open():this._welcomeMenu.open(),this._howTo.style.visibility="hidden"}playerPlayed(){this._enemyGrid.classList.add("blocked"),this._playMessage.innerHTML="You missed!",setTimeout(()=>this._playerGrid.enemyShoot(),this._timeBetweenRounds),this._round++}enemyPlayed(t){this._playMessage.innerHTML="I shot at "+ot[t.detail.x]+"-"+t.detail.y,setTimeout(()=>this.nextPlayerTurn(),this._timeBetweenRounds)}nextPlayerTurn(){this._playMessage.innerHTML="Your turn...",this._enemyGrid.classList.remove("blocked")}playerHit(t){this._playMessage.innerHTML="You hit my "+t.detail.type+"!<br> Shoot again."}playerSank(t){this._playMessage.innerHTML="You sank my "+t.detail.type+" :( !<br> Shoot again."}enemyHit(t){this._playMessage.innerHTML="Ah! I hit your "+t.detail.type+"!<br> I'll shoot again."}enemySank(t){this._playMessage.innerHTML="I sank your "+t.detail.type+"!<br> I'll shoot again."}playerWin(){this._playing=!1,this._fullscreenRotate.hide(),this._enemyGrid.classList.add("blocked"),this._endGameTitle.innerHTML="You won!",this._endGameMessage.innerHTML="You defeated your enemy in "+this._round+" rounds.",this._endGameMenu.open(),this._playMessage.innerHTML="Oh no :(, you won..."}playerLost(){this._playing=!1,this._fullscreenRotate.hide(),this._enemyGrid.classList.add("blocked"),this._endGameTitle.innerHTML="You won!",this._endGameMessage.innerHTML="Your enemy defeated you in "+this._round+" rounds.",this._endGameMenu.open(),this._playMessage.innerHTML="Yeah, I won!"}render(){return p`
      <foldable-device-configurator></foldable-device-configurator>
      <div class="content">
        <picture>
          <source media="(max-width: 767px)"
                  srcset="images/ocean-412.webp 412w, images/ocean-768.webp 768w, images/ocean-800.webp 800w"
                  sizes="(max-width: 767px) 412px, 768px, 800px" type="image/webp"/>
          <source media="(max-width: 767px)"
                  srcset="images/ocean-412.jpg 412w, images/ocean-768.jpg 768w, images/ocean-800.jpg 800w"
                  sizes="(max-width: 767px) 412px, 768px, 800px" type="image/jpeg"/>
          <source media="(max-width: 1366px)"
                  srcset="images/ocean-1024.webp 1024w, images/ocean-1366.webp 1366w"
                  sizes="(max-width: 1366px) 1024px, 1366px" type="image/webp"/>
          <source media="(max-width: 1366px)"
                  srcset="images/ocean-1024.jpg 1024w, images/ocean-1366.jpg 1366w"
                  sizes="(max-width: 1366px) 1024px, 1366px" type="image/jpeg"/>
          <source media="(max-width: 1440px)"
                  srcset="images/ocean-1440.webp 1440w, images/ocean-1366.webp 1366w"
                  sizes="(max-width: 1440px) 1440px, 1366px" type="image/webp"/>
          <source media="(max-width: 1440px)"
                  srcset="images/ocean-1440.jpg 1440w, images/ocean-1366.jpg 1366w"
                  sizes="(max-width: 1440px) 1440px, 1366px" type="image/jpeg"/>
          <source media="(max-width: 1920px)"
                  srcset="images/ocean-1920.webp 1920w, images/ocean-1440.webp 1440w"
                  sizes="(max-width: 1920px) 1920px, 1440px" type="image/webp"/>
          <source media="(max-width: 1920px)"
                  srcset="images/ocean-1920.jpg 1920w, images/ocean-1440.jpg 1440w"
                  sizes="(max-width: 1920px) 1920px, 1440px" type="image/jpeg"/>
          <source media="(min-width: 1920px)"
                  srcset="images/ocean-4k.webp 2560w, images/ocean-1920.webp 1920w"
                  sizes="(max-width: 1920px) 2560px, 1920px" type="image/webp"/>
          <source media="(min-width: 1920px)"
                  srcset="images/ocean-4k.jpg 2560w, images/ocean-1920.jpg 1920w"
                  sizes="(max-width: 1920px) 2560px, 1920px" type="image/jpeg"/>
          <img class="background" src="images/ocean-1024.jpg" alt="Background of an ocean">
        </picture>
        <div class="enemy-fleet">
          <enemy-grid id="enemy-grid" @player-played=${this.playerPlayed} @player-sank=${this.playerSank} @player-hit=${this.playerHit} @game-over=${this.playerWin}></enemy-grid>
        </div>
        <div class="fold angled stripes"></div>
        <div class="fleet">
          <player-grid id="player-grid" @player-played=${this.enemyPlayed} @game-over=${this.playerLost} @player-hit=${this.enemyHit} @player-sank=${this.enemySank}></player-grid>
        </div>
      </div>
      <info-box id="infobox">
        <div slot="label" id="play-message">Let's get started, fire first.</div>
      </info-box>
      <dialog-box id="welcome-menu">
        <div slot="title">Welcome to FoldShip!</div>
        <picture class="menu-picture" slot="menu-1">
          <source srcset="images/new-game-button.webp" type="image/webp">
          <img class="menu-button" src="images/new-game-button.png" @click="${this.startGame}"/>
        </picture>
        <picture class="menu-picture" slot="menu-2">
          <source srcset="images/how-to-button.webp" type="image/webp">
          <img class="menu-button" src="images/how-to-button.png" @click="${this.showHowTo}"/>
        </picture>
      </dialog-box>
      <dialog-box id="end-game-menu">
        <div slot="title" id="end-game-title">You won!</div>
        <div slot="label" id="end-game-message">You won!</div>
        <picture class="menu-picture" slot="menu-1">
          <source srcset="images/restart-button.webp" type="image/webp">
          <img class="menu-button" src="images/restart-button.png" @click="${this.restartGame}"/>
        </picture>
        <picture class="menu-picture" slot="menu-2">
          <source srcset="images/how-to-button.webp" type="image/webp">
          <img class="menu-button" src="images/how-to-button.png" @click="${this.showHowTo}"/>
        </picture>
      </dialog-box>
      <mwc-snackbar id="snackbar" labelText="A newer version of the application is available." leading>
        <mwc-button slot="action">RELOAD</mwc-button>
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
      <how-to-screen id="how-to" @howto-closed="${this.closeHowTo}"></how-to-screen>
      <rotate-box id="fullscreen-rotate"></rotate-box>
    `}}n(D,"styles",st`
    :host {
      width: 100vw;
      height: 100vh;
      font-family: 'Bangers', sans-serif;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    .background {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
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
      height: 100%;
      width: 15px;
      z-index: 2;
      visibility: hidden;
    }

    .enemy-fleet {
      width: 50%;
      height: 100%;
      z-index: 1;
      visibility: hidden;
    }

    .fleet {
      width: 50%;
      height: 100%;
      z-index: 1;
      visibility: hidden;
    }

    mwc-snackbar {
      --mdc-snackbar-action-color: #2d89ef;
    }

    #infobox {
      visibility: hidden;
    }

    .menu-button {
      width: 80%;
      display: block;
      margin: auto;
    }

    how-to-screen {
      visibility: hidden;
    }

    @media all and (orientation:portrait) {
      .fold {
        visibility: hidden;
      }

      .enemy-fleet {
        visibility: hidden;
      }

      .fleet {
        visibility: hidden;
      }

      #infobox {
        visibility: hidden;
      }
    }

    @media all and (orientation:landscape) {
      .background {
        z-index: 0;
      }
    }

    @media (horizontal-viewport-segments: 2) {
      .fold {
        height: env(viewport-segment-height 0 0);
        width: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));
        visibility: visible;
      }

      .content {
        flex-direction: row;
      }

      .enemy-fleet {
        width: env(viewport-segment-width 0 0);
        height: 100%;
      }

      .fleet {
        height: 100%;
        width: env(viewport-segment-width 1 0);
      }

      .background {
        z-index: 0;
      }
   }

    @media (vertical-viewport-segments: 2) {
      .fold {
        height: calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));
        width: env(viewport-segment-width 0 0);
        visibility: visible;
      }

      .content {
        flex-direction: column;
      }

      .enemy-fleet {
        height: var(--zenbook-span2-height, env(viewport-segment-height 0 0));
        width: 100%;
        flex-grow: 0;
        flex-shrink: 0;
      }

      .fleet {
        width: 100%;
        height: var(--zenbook-span1-height, env(viewport-segment-height 0 1));
      }

      .background {
        z-index: 0;
      }
    }

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) and (orientation:landscape) {
      .fold {
        height: 100%;
        width: 15px;
      }

      .content {
        flex-direction: row;
      }

      .blocked {
        pointer-events: none;
      }
    }

    @media (horizontal-viewport-segments: 1) and (vertical-viewport-segments: 1) and (orientation:portrait) {
      .background {
        z-index: 4;
      }

      .enemy-fleet {
        visibility: hidden;
      }

      .fleet {
        visibility: hidden;
      }

      .fold {
        visibility: hidden;
      }

      #infobox {
        visibility: hidden;
      }
    }
  `);customElements.define("main-application",D);
