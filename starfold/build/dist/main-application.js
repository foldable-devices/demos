function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}import{LitElement as s,html as a,css as o}from"../web_modules/lit-element.js";import{adjustCSS as r,observe as c}from"../web_modules/spanning-css-polyfill.js";import"../web_modules/@material/mwc-button.js";import"../web_modules/@material/mwc-icon-button.js";import"../web_modules/@material/mwc-snackbar.js";import{Workbox as l,messageSW as w}from"../web_modules/workbox-window.js";const d=(t,...e)=>{const i=r(t[0],"main-application");return o([i],...e)};export class MainApplication extends s{firstUpdated(){this._snackbar=this.shadowRoot.querySelector("#snackbar"),this._snackbar.addEventListener("MDCSnackbar:closed",t=>{t.detail.reason==="action"&&(this._wb.addEventListener("controlling",()=>{window.location.reload(),this._wbRegistration=void 0}),this._wbRegistration&&this._wbRegistration.waiting&&w(this._wbRegistration.waiting,{type:"SKIP_WAITING"}))}),"serviceWorker"in navigator&&window.addEventListener("load",async()=>{this._wb=new l("./sw.js"),this._wb.addEventListener("waiting",()=>this._showSnackbar()),this._wb.addEventListener("externalwaiting",()=>this._showSnackbar()),this._wbRegistration=await this._wb.register()})}constructor(){super();n(this,"_snackbar",void 0),n(this,"_wb",void 0),n(this,"_wbRegistration",void 0)}connectedCallback(){super.connectedCallback(),c(this)}_showSnackbar(){this._snackbar.show()}_deviceSupportsSpanningMQs(){const t=window.matchMedia("(spanning: single-fold-horizontal)").matches||window.matchMedia("(spanning: single-fold-vertical)").matches||window.matchMedia("(spanning: none)").matches||!1;return t}render(){return a`
      <div class="content">
        <mwc-button>Hello</mwc-button>
      </div>
      <mwc-snackbar id="snackbar" labelText="A newer version of the application is available." leading>
        <mwc-button slot="action">RELOAD</mwc-button>
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
    `}}n(MainApplication,"styles",d`
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
  `),customElements.define("main-application",MainApplication);
