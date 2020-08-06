function k(a,c,b){return c in a?Object.defineProperty(a,c,{value:b,enumerable:!0,configurable:!0,writable:!0}):a[c]=b,a}function d(a,c,b){return typeof Reflect!=="undefined"&&Reflect.get?d=Reflect.get:d=function h(o,i,p){var j=l(o,i);if(!j)return;var g=Object.getOwnPropertyDescriptor(j,i);return g.get?g.get.call(p):g.value},d(a,c,b||a)}function l(a,c){for(;!Object.prototype.hasOwnProperty.call(a,c);){a=e(a);if(a===null)break}return a}function e(a){return e=Object.setPrototypeOf?Object.getPrototypeOf:function c(b){return b.__proto__||Object.getPrototypeOf(b)},e(a)}import{html as f,css as m}from"../web_modules/lit-element.js";import{GameGrid as n}from"./game-grid.js";import"./enemy-ship.js";export class EnemyGrid extends n{firstUpdated(){super.firstUpdated(),this.generateRandomGrid()}constructor(){super()}fireAt(a,c){let b=this.grid[a][c];if(this.isShip(b)||b.text!="")return;if(b.shot===!0){console.log("You shot there already.");return}b.shot=!0,this.updateGrid(),this.playerPlayed(a,c)}shipDestroyed(a){this.playerSankShip(a.detail.type),this.dispatchGameOverIfNecessary()}shipHit(a){this.playerHitShip(a.detail.type)}render(){return f`
      <div class="title">Enemy's fleet</div>
      <div class="grid">
          ${this.grid.map((a,c)=>a.map((b,h)=>{if(this.isShip(this.grid[c][h])){if(!this.isShipPlaced(b.type))return this._shipPlaced.push(b.type),f`
                      <enemy-ship id="${b.type}" x="${b.x}" y="${b.y}"
                        type="${b.type}" orientation="${b.orientation}" @ship-destroyed="${this.shipDestroyed}"
                        @ship-hit="${this.shipHit}">
                      </enemy-ship>`}else return f`<empty-cell ?hit="${b.shot}" @click="${()=>this.fireAt(c,h)}">${b.text}</empty-cell>`}))}
      </div>
    `}}k(EnemyGrid,"styles",[d(e(EnemyGrid),"styles",EnemyGrid),m`
    .cell {
      cursor:pointer;
    }
  `]),customElements.define("enemy-grid",EnemyGrid);
