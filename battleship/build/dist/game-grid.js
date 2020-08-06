function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}import{LitElement as l,css as m,html as n}from"../web_modules/lit-element.js";import*as d from"./ship.js";export class EmptyCell extends l{static get properties(){return{hit:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set hit(a){let b=this._hit;this._hit=a,this.requestUpdate("hit",b)}get hit(){return this._hit}constructor(){super();this._hit=!1}render(){return n`
      <div class="cell">
        <slot></slot>
        <div class="hit-water-area ${this.hit?"visible":""}"></div>
      </div>`}}k(EmptyCell,"styles",m`
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
  `),customElements.define("empty-cell",EmptyCell);export class GameGrid extends l{static get properties(){return{grid:{type:Array,hasChanged(){return!0}}}}set grid(a){let b=this._grid;this._grid=a,this.requestUpdate("grid",b)}get grid(){return this._grid}getRandomCoordinate(){return Math.floor(Math.random()*(10-1+1)+1)}getRandomOrientation(){const a=Math.random()>=.5;return a?d.Orientation.Vertical:d.Orientation.Horizontal}firstUpdated(){this.initGrid()}constructor(){super();k(this,"_shipPlaced",[]),this._grid=[]}initGrid(){this.grid=[[{text:"/"},{text:"1"},{text:"2"},{text:"3"},{text:"4"},{text:"5"},{text:"6"},{text:"7"},{text:"8"},{text:"9"},{text:"10"}],[{text:"A"},"","","","","","","","","",""],[{text:"B"},"","","","","","","","","",""],[{text:"C"},"","","","","","","","","",""],[{text:"D"},"","","","","","","","","",""],[{text:"E"},"","","","","","","","","",""],[{text:"F"},"","","","","","","","","",""],[{text:"G"},"","","","","","","","","",""],[{text:"H"},"","","","","","","","","",""],[{text:"I"},"","","","","","","","","",""],[{text:"J"},"","","","","","","","","",""]];for(let a=1;a<=10;++a)for(let b=1;b<=10;b++)this.grid[a][b]={text:"",shot:!1}}restart(){this.initGrid(),this._shipPlaced=[],this._submarine.reset(),this._destroyer.reset(),this._carrier.reset(),this._battleship.reset(),this._rescue.reset(),this.generateRandomGrid()}generateRandomGrid(){Object.values(d.ShipType).map(a=>{this.placeShipRandomly(a)})}placeShipRandomly(a){const b=this.getRandomCoordinate(),c=this.getRandomCoordinate(),f=this.getRandomOrientation(),h=d.getShipSize(a);if(f===d.Orientation.Horizontal){if(c+h>10)return this.placeShipRandomly(a)}else if(b+h>10)return this.placeShipRandomly(a);if(f===d.Orientation.Horizontal){for(let e=c;e<=c+h;++e)if(this.grid[b][e]!=void 0&&this.isShip(this.grid[b][e]))return this.placeShipRandomly(a)}else for(let e=b;e<=b+h;++e)if(this.grid[e][c]!=void 0&&this.isShip(this.grid[e][c]))return this.placeShipRandomly(a);this.addShip(a,b,c,f,h)}addShip(a,b,c,f,h){if(b===0||c===0){console.error("Adding ship in the wrong column/row.");return}const e={type:a,orientation:f,x:b,y:c,shot:!1};this.grid[b][c]=e;if(f===d.Orientation.Horizontal)for(let g=c;g<c+h;++g)this.grid[b][g]={type:a,orientation:f,x:b,y:g,shot:!1};else if(f===d.Orientation.Vertical)for(let g=b;g<b+h;++g)this.grid[g][c]={type:a,orientation:f,x:g,y:c,shot:!1}}updateGrid(){this._shipPlaced=[],this.requestUpdate("grid",this.grid)}isShip(a){return a.type===d.ShipType.Submarine||a.type===d.ShipType.Destroyer||a.type===d.ShipType.Battleship||a.type===d.ShipType.Carrier||a.type===d.ShipType.Rescue?!0:!1}isShipPlaced(a){return this._shipPlaced.includes(a)}isGameOver(){return this._submarine.destroyed&&this._destroyer.destroyed&&this._carrier.destroyed&&this._battleship.destroyed&&this._rescue.destroyed}dispatchGameOverIfNecessary(){if(this.isGameOver()){let a=new CustomEvent("game-over",{detail:{message:"Game Over"},bubbles:!0,composed:!0});this.dispatchEvent(a)}}playerPlayed(a,b){let c=new CustomEvent("player-played",{detail:{message:"player played.",x:a,y:b},bubbles:!0,composed:!0});this.dispatchEvent(c),this.dispatchGameOverIfNecessary()}playerHitShip(a){let b=new CustomEvent("player-hit",{detail:{message:"player played.",type:a},bubbles:!0,composed:!0});this.dispatchEvent(b)}playerSankShip(a){let b=new CustomEvent("player-sank",{detail:{message:"player played.",type:a},bubbles:!0,composed:!0});this.dispatchEvent(b),this.dispatchGameOverIfNecessary()}update(){super.update(),this._submarine=this.shadowRoot.querySelector("#submarine"),this._destroyer=this.shadowRoot.querySelector("#destroyer"),this._carrier=this.shadowRoot.querySelector("#carrier"),this._battleship=this.shadowRoot.querySelector("#battleship"),this._rescue=this.shadowRoot.querySelector("#rescue")}}k(GameGrid,"styles",m`
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
  `);
