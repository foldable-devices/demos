function g(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function d(a,b,c){return typeof Reflect!=="undefined"&&Reflect.get?d=Reflect.get:d=function R(n,j,o){var k=l(n,j);if(!k)return;var f=Object.getOwnPropertyDescriptor(k,j);return f.get?f.get.call(o):f.value},d(a,b,c||a)}function l(a,b){for(;!Object.prototype.hasOwnProperty.call(a,b);){a=e(a);if(a===null)break}return a}function e(a){return e=Object.setPrototypeOf?Object.getPrototypeOf:function b(c){return c.__proto__||Object.getPrototypeOf(c)},e(a)}import{html as h,css as m}from"../web_modules/lit-element.js";import*as i from"./ship.js";export class EnemyShip extends i.Ship{firstUpdated(){super.firstUpdated(),this._image=this.shadowRoot.querySelector("#image")}reset(){Array.from({length:this.size}).map((a,b)=>{const c=this.shadowRoot.querySelector("#hit-"+b);c.style.visibility="hidden"}),this.hitCount=0,this._image.style.display="none"}shootAt(a){let b=this.shadowRoot.querySelector("#hit-"+a);if(b.style.visibility==="visible"&&b.style.visibility!="")return;this.hitCount=this.hitCount+1,b.style.visibility="visible",this.hitCount===this.size?(this._image.style.display="inline",this.shipDestroyed()):this.shipHit()}constructor(){super();g(this,"_image",void 0)}render(){return h`
      <div class="hit-zone ${this.orientation===i.Orientation.Horizontal?"hit-zone-horizontal":"hit-zone-vertical"}">
        ${Array.from({length:this.size}).map((a,b)=>h`
            <div class="cell" @click="${()=>this.shootAt(b)}"><div class="hit-area" id="hit-${b}"></div></div>
        `)}
      </div>
      <picture>
          <source srcset="images/${this.type}-top-${this.orientation}.webp" type="image/webp">
          <img id="image" src="images/${this.type}-top-${this.orientation}.png" alt="${this.type}"/>
      </picture>
    `}}g(EnemyShip,"styles",[d(e(EnemyShip),"styles",EnemyShip),m`
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
`]),customElements.define("enemy-ship",EnemyShip);
