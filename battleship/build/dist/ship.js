function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}import{LitElement as f,html as e,css as g}from"../web_modules/lit-element.js";export const Orientation={Horizontal:"horizontal",Vertical:"vertical"},ShipType={Submarine:"submarine",Carrier:"carrier",Rescue:"rescue",Battleship:"battleship",Destroyer:"destroyer"};export function getShipSize(a){switch(a){case ShipType.Submarine:return 3;case ShipType.Carrier:return 5;case ShipType.Battleship:return 4;case ShipType.Destroyer:return 3;case ShipType.Rescue:return 2;default:return 0}}export class Ship extends f{static get properties(){return{type:{type:String,reflectToAttribute:!0,attribute:!0},orientation:{type:String,reflectToAttribute:!0,attribute:!0},x:{type:Number,reflectToAttribute:!0,attribute:!0},y:{type:Number,reflectToAttribute:!0,attribute:!0},size:{type:Number},hitCount:{type:Number},destroyed:{type:Boolean,reflectToAttribute:!0,attribute:!0}}}set type(a){let b=this._type;this._type=a,this.requestUpdate("type",b),this.size=getShipSize(this._type),this.shadowRoot.host.style.setProperty("--size",this._size)}get type(){return this._type}set destroyed(a){let b=this._destroyed;this._destroyed=a,this.requestUpdate("destroyed",b)}get destroyed(){return this._destroyed}set hitCount(a){let b=this._hitCount;this._hitCount=a,this.requestUpdate("hitCount",b)}get hitCount(){return this._hitCount}set orientation(a){let b=this._orientation;this._orientation=a,this.requestUpdate("orientation",b),a==Orientation.Horizontal?(this.shadowRoot.host.classList.add("horizontal"),this.shadowRoot.host.classList.remove("vertical")):(this.shadowRoot.host.classList.remove("horizontal"),this.shadowRoot.host.classList.add("vertical"))}get orientation(){return this._orientation}set x(a){let b=this._x;this._x=a,this.requestUpdate("x",b),this.shadowRoot.host.style.setProperty("--x",this.x+1)}get x(){return this._x}set y(a){let b=this._y;this._y=a,this.requestUpdate("y",b),this.shadowRoot.host.style.setProperty("--y",a+1)}get y(){return this._y}set size(a){let b=this._size;this._size=a,this.requestUpdate("size",b),this.shadowRoot.host.style.setProperty("--size",this._size)}get size(){return this._size}firstUpdated(){this._image=this.shadowRoot.querySelector("#image"),this.size=getShipSize(this._type)}constructor(){super();d(this,"_image",void 0),this._x=0,this._y=0,this._orientation=Orientation.Horizontal,this._type=ShipType.Submarine,this._size=0,this._destroyed=!1,this._hitCount=0}reset(){Array.from({length:this.size}).map((a,b)=>{const c=this.shadowRoot.querySelector("#hit-"+b);c.classList.remove("hit")}),this.hitCount=0,this.destroyed=!1}enemyShootAt(a,b){let c;this.orientation===Orientation.Horizontal?c=b-this.y:c=a-this.x;const h=this.shadowRoot.querySelector("#hit-"+c);h.classList.add("hit"),this.hitCount++,this.hitCount===this.size?this.shipDestroyed():this.shipHit()}shipDestroyed(){this.destroyed=!0;let a=new CustomEvent("ship-destroyed",{detail:{message:"Ship Destroyed",type:this.type},bubbles:!0,composed:!0});this.dispatchEvent(a)}shipHit(){let a=new CustomEvent("ship-hit",{detail:{message:"Ship Hit",type:this.type},bubbles:!0,composed:!0});this.dispatchEvent(a)}render(){return e`
      <div class="hit-zone ${this.orientation===Orientation.Horizontal?"hit-zone-horizontal":"hit-zone-vertical"}">
        ${Array.from({length:this.size}).map((a,b)=>e`
            <div class="cell"><div class="hit-area" id="hit-${b}"></div></div>
        `)}
      </div>
      <picture>
          <source srcset="images/${this.type}-top-${this.orientation}.webp" type="image/webp">
          <img id="image" src="images/${this.type}-top-${this.orientation}.png" alt="${this.type}"/>
      </picture>
    `}}d(Ship,"styles",g`
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
  `),customElements.define("ship-element",Ship);
