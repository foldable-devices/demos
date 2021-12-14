try{self["workbox:core:6.4.1"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:6.4.1"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=s(e)}}class i extends n{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class r{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let a=r&&r.handler;const c=e.method;if(!a&&this.i.has(c)&&(a=this.i.get(c)),!a)return;let o;try{o=a.handle({url:s,request:e,event:t,params:i})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this.o||h)&&(o=o.catch((async n=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:i})}catch(e){e instanceof Error&&(n=e)}if(this.o)return this.o.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const i=this.t.get(s.method)||[];for(const r of i){let i;const a=r.match({url:e,sameOrigin:t,request:s,event:n});if(a)return i=a,(Array.isArray(i)&&0===i.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(e,t="GET"){this.i.set(t,s(e))}setCatchHandler(e){this.o=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let a;const c=()=>(a||(a=new r,a.addFetchListener(),a.addCacheListener()),a);function o(e,s,r){let a;if("string"==typeof e){const t=new URL(e,location.href);a=new n((({url:e})=>e.href===t.href),s,r)}else if(e instanceof RegExp)a=new i(e,s,r);else if("function"==typeof e)a=new n(e,s,r);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return c().registerRoute(a),a}const h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=e=>[h.prefix,e,h.suffix].filter((e=>e&&e.length>0)).join("-"),l=e=>e||u(h.precache),f=e=>e||u(h.runtime);function d(e){e.then((()=>{}))}const w=new Set;function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},p.apply(this,arguments)}let b,g;const m=new WeakMap,y=new WeakMap,v=new WeakMap,R=new WeakMap,k=new WeakMap;let q={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return y.get(e);if("objectStoreNames"===t)return e.objectStoreNames||v.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return j(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function D(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(g||(g=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(U(this),t),j(m.get(this))}:function(...t){return j(e.apply(U(this),t))}:function(t,...s){const n=e.call(U(this),t,...s);return v.set(n,t.sort?t.sort():[t]),j(n)}}function x(e){return"function"==typeof e?D(e):(e instanceof IDBTransaction&&function(e){if(y.has(e))return;const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",r),e.removeEventListener("abort",r)},i=()=>{t(),n()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",r),e.addEventListener("abort",r)}));y.set(e,t)}(e),t=e,(b||(b=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,q):e);var t}function j(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",r)},i=()=>{t(j(e.result)),n()},r=()=>{s(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&m.set(t,e)})).catch((()=>{})),k.set(t,e),t}(e);if(R.has(e))return R.get(e);const t=x(e);return t!==e&&(R.set(e,t),k.set(t,e)),t}const U=e=>k.get(e);const E=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],L=new Map;function N(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(L.get(t))return L.get(t);const s=t.replace(/FromIndex$/,""),n=t!==s,i=I.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!E.includes(s))return;const r=async function(e,...t){const r=this.transaction(e,i?"readwrite":"readonly");let a=r.store;return n&&(a=a.index(t.shift())),(await Promise.all([a[s](...t),i&&r.done]))[0]};return L.set(t,r),r}q=(e=>p({},e,{get:(t,s,n)=>N(t,s)||e.get(t,s,n),has:(t,s)=>!!N(t,s)||e.has(t,s)}))(q);try{self["workbox:expiration:6.4.1"]&&_()}catch(e){}const C=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class O{constructor(e){this.h=null,this.u=e}l(e){const t=e.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}p(e){this.l(e),this.u&&function(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(()=>t())),j(s).then((()=>{}))}(this.u)}async setTimestamp(e,t){const s={url:e=C(e),timestamp:t,cacheName:this.u,id:this.g(e)},n=(await this.getDb()).transaction("cache-entries","readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get("cache-entries",this.g(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let n=await s.transaction("cache-entries").store.index("timestamp").openCursor(null,"prev");const i=[];let r=0;for(;n;){const s=n.value;s.cacheName===this.u&&(e&&s.timestamp<e||t&&r>=t?i.push(n.value):r++),n=await n.continue()}const a=[];for(const e of i)await s.delete("cache-entries",e.id),a.push(e.url);return a}g(e){return this.u+"|"+C(e)}async getDb(){return this.h||(this.h=await function(e,t,{blocked:s,upgrade:n,blocking:i,terminated:r}={}){const a=indexedDB.open(e,t),c=j(a);return n&&a.addEventListener("upgradeneeded",(e=>{n(j(a.result),e.oldVersion,e.newVersion,j(a.transaction))})),s&&a.addEventListener("blocked",(()=>s())),c.then((e=>{r&&e.addEventListener("close",(()=>r())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),c}("workbox-expiration",1,{upgrade:this.p.bind(this)})),this.h}}class B{constructor(e,t={}){this.m=!1,this.v=!1,this.R=t.maxEntries,this.k=t.maxAgeSeconds,this.q=t.matchOptions,this.u=e,this.D=new O(e)}async expireEntries(){if(this.m)return void(this.v=!0);this.m=!0;const e=this.k?Date.now()-1e3*this.k:0,t=await this.D.expireEntries(e,this.R),s=await self.caches.open(this.u);for(const e of t)await s.delete(e,this.q);this.m=!1,this.v&&(this.v=!1,d(this.expireEntries()))}async updateTimestamp(e){await this.D.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.k){const t=await this.D.getTimestamp(e),s=Date.now()-1e3*this.k;return void 0===t||t<s}return!1}async delete(){this.v=!1,await this.D.expireEntries(1/0)}}function T(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class M{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}try{self["workbox:strategies:6.4.1"]&&_()}catch(e){}function W(e){return"string"==typeof e?new Request(e):e}class P{constructor(e,t){this._={},Object.assign(this,t),this.event=t.event,this.j=e,this.U=new M,this.I=[],this.L=[...e.plugins],this.N=new Map;for(const e of this.L)this.N.set(e,{});this.event.waitUntil(this.U.promise)}async fetch(e){const{event:s}=this;let n=W(e);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this.j.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw i&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:i.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=W(e);let s;const{cacheName:n,matchOptions:i}=this.j,r=await this.getCacheKey(t,"read"),a=Object.assign(Object.assign({},i),{cacheName:n});s=await caches.match(r,a);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,s){const n=W(e);var i;await(i=0,new Promise((e=>setTimeout(e,i))));const r=await this.getCacheKey(n,"write");if(!s)throw new t("cache-put-with-no-response",{url:(a=r.url,new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var a;const c=await this.C(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this.j,u=await self.caches.open(o),l=this.hasCallback("cacheDidUpdate"),f=l?await async function(e,t,s,n){const i=T(t.url,s);if(t.url===i)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),a=await e.keys(t,r);for(const t of a)if(i===T(t.url,s))return e.match(t,n)}(u,r.clone(),["__WB_REVISION__"],h):null;try{await u.put(r,l?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=W(await e({mode:t,request:n,event:this.event,params:this.params}));this._[s]=n}return this._[s]}hasCallback(e){for(const t of this.j.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this.j.plugins)if("function"==typeof t[e]){const s=this.N.get(t),n=n=>{const i=Object.assign(Object.assign({},n),{state:s});return t[e](i)};yield n}}waitUntil(e){return this.I.push(e),e}async doneWaiting(){let e;for(;e=this.I.shift();)await e}destroy(){this.U.resolve(null)}async C(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class S{constructor(e={}){this.cacheName=f(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,i=new P(this,{event:t,request:s,params:n}),r=this.O(i,s,t);return[r,this.B(r,i,s,t)]}async O(e,s,n){let i;await e.runCallbacks("handlerWillStart",{event:n,request:s});try{if(i=await this.T(s,e),!i||"error"===i.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const r of e.iterateCallbacks("handlerDidError"))if(i=await r({error:t,event:n,request:s}),i)break;if(!i)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))i=await t({event:n,request:s,response:i});return i}async B(e,t,s,n){let i,r;try{i=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:r}),t.destroy(),r)throw r}}const K={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class A extends S{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(K)}async T(e,s){const n=s.fetchAndCachePut(e).catch((()=>{}));let i,r=await s.cacheMatch(e);if(r);else try{r=await n}catch(e){e instanceof Error&&(i=e)}if(!r)throw new t("no-response",{url:e.url,error:i});return r}}function F(e,t){const s=t();return e.waitUntil(s),s}try{self["workbox:precaching:6.4.1"]&&_()}catch(e){}function $(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:r.href}}class H{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class G{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this.M.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this.M=e}}let z,V;async function J(e,s){let n=null;if(e.url){n=new URL(e.url).origin}if(n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const i=e.clone(),r={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},a=s?s(r):r,c=function(){if(void 0===z){const e=new Response("");if("body"in e)try{new Response(e.body),z=!0}catch(e){z=!1}z=!1}return z}()?i.body:await i.blob();return new Response(c,a)}class Q extends S{constructor(e={}){e.cacheName=l(e.cacheName),super(e),this.W=!1!==e.fallbackToNetwork,this.plugins.push(Q.copyRedirectedCacheableResponsesPlugin)}async T(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this.P(e,t):await this.S(e,t))}async S(e,s){let n;const i=s.params||{};if(!this.W)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const t=i.integrity,r=e.integrity,a=!r||r===t;n=await s.fetch(new Request(e,{integrity:r||t})),t&&a&&(this.K(),await s.cachePut(e,n.clone()))}return n}async P(e,s){this.K();const n=await s.fetch(e);if(!await s.cachePut(e,n.clone()))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}K(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==Q.copyRedirectedCacheableResponsesPlugin&&(n===Q.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(Q.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}Q.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},Q.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await J(e):e};class X{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this.A=new Map,this.F=new Map,this.$=new Map,this.j=new Q({cacheName:l(e),plugins:[...t,new G({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.j}precache(e){this.addToCacheList(e),this.H||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.H=!0)}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:i}=$(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.A.has(i)&&this.A.get(i)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.A.get(i),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.$.has(e)&&this.$.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:i});this.$.set(e,n.integrity)}if(this.A.set(i,e),this.F.set(i,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return F(e,(async()=>{const t=new H;this.strategy.plugins.push(t);for(const[t,s]of this.A){const n=this.$.get(s),i=this.F.get(t),r=new Request(t,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return F(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this.A.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.A}getCachedURLs(){return[...this.A.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.A.get(t.href)}getIntegrityForCacheKey(e){return this.$.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}const Y=()=>(V||(V=new X),V);class Z extends n{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const i of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const a=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield a.href,s&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=s,yield e.href}if(n){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(i);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}var ee;self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),ee={},function(e){Y().precache(e)}([{url:"_snowpack/pkg/@material/mwc-button.js",revision:"0c9268d5b1f35cdfe1a9443c8e66ef05"},{url:"_snowpack/pkg/@material/mwc-icon-button.js",revision:"325d45c0a93df9956d7f38c50e04905f"},{url:"_snowpack/pkg/@material/mwc-snackbar.js",revision:"be1a32cf30a71be41078083dff5d0d13"},{url:"_snowpack/pkg/common/class-map-18cd616a.js",revision:"61ee19740800137d8aef148a131c8ff9"},{url:"_snowpack/pkg/common/if-defined-d3cd822e.js",revision:"1a0d9408d11235c5498fe1c79871efa1"},{url:"_snowpack/pkg/common/lit-element-1e559655.js",revision:"e28289740fc7f4af045f067855abc2d8"},{url:"_snowpack/pkg/foldable-device-configurator.js",revision:"e31d2ced1cd11938e05d57b043886f44"},{url:"_snowpack/pkg/lit.js",revision:"a5403cc61dd81db82d4dfcc64da08b87"},{url:"_snowpack/pkg/viewportsegments-css-polyfill.js",revision:"290a71dff5bda6cf2a63c00a3ecaf975"},{url:"_snowpack/pkg/workbox-window.js",revision:"1b410e8876188018ec4ebb4dd612006e"},{url:"dist/dialogbox.js",revision:"2ddae71be00c539766b9f54612facd1c"},{url:"dist/enemy-grid.js",revision:"6a6c38bea2aa6ed13582ea4d5517d2d9"},{url:"dist/enemy-ship.js",revision:"aa06b94ebf877f744f1e0deb0b8d1a44"},{url:"dist/game-grid.js",revision:"01103e0a5f165c6f243bfa7296c27890"},{url:"dist/howto.js",revision:"0b690ccc560ec9ca909ba0f6e48f28a9"},{url:"dist/infoxbox.js",revision:"142af7f9114489f2dc3052797c30f6cd"},{url:"dist/main-application.js",revision:"5d5e49834c27427a07eb9367098eac92"},{url:"dist/player-grid.js",revision:"fe73120f1a5724c8ca280c62d1b55002"},{url:"dist/rotatebox.js",revision:"c5835d3a94241b27f69cbba317bc5078"},{url:"dist/ship.js",revision:"929763c8b520ac9645752ef04c5ed1f5"},{url:"favicon.ico",revision:"10d0c41dac9fef3399dd5f0daa20f5c2"},{url:"index.html",revision:"ea1c88ba7c7d513d26df130fa61b90d8"},{url:"style.css",revision:"4e3399678080dcd26b1ea70ab6eee91a"},{url:"images/manifest/icon-512x512.png",revision:"aa9ef546dc38c10ccce4309015060e68"},{url:"images/manifest/icon-192x192.png",revision:"656d5bfb327f895a68ca523dc0a97ec4"},{url:"images/manifest/safari-pinned-tab.svg",revision:"3365a71f685766ccbe2ac15eee196ba1"},{url:"manifest.json",revision:"60681d86578c7832368a1404d3cc2681"},{url:"images/battleship-top-horizontal.webp",revision:"9ac98e393363c3b5f3277f519cfdb680"},{url:"images/battleship-top-vertical.webp",revision:"113cf0b692acfae06c3058198442262b"},{url:"images/carrier-top-horizontal.webp",revision:"123de838a394cc5682f5438f36711c0c"},{url:"images/carrier-top-vertical.webp",revision:"c761b8037db0ddd6b1c6551b3d973b64"},{url:"images/destroyer-top-horizontal.webp",revision:"a87d85316f447cad5641639af1c31fe6"},{url:"images/destroyer-top-vertical.webp",revision:"6e063d196cf2d0ba053be82979ecc992"},{url:"images/rescue-top-horizontal.webp",revision:"28678f3a21936295941cdbf840b13ab0"},{url:"images/rescue-top-vertical.webp",revision:"a8bdf39060a3fb65d1ee6f41b0cc322b"},{url:"images/submarine-top-horizontal.webp",revision:"b9ba2c6beb4bbd99471c95f93b7d8923"},{url:"images/submarine-top-vertical.webp",revision:"ecf48493bc833fd7e0eac0dfe33d6364"},{url:"images/ocean-1024.webp",revision:"611051274c0047b2e6e6d97ead40e31e"},{url:"images/captain.webp",revision:"c6fa7403444ae3be1016bfbad68e155d"},{url:"images/close-button.webp",revision:"68986a0664e0acce9005805fc4e711f4"},{url:"images/restart-button.webp",revision:"8ca6ea7368cd26595dee8fda84e0e779"},{url:"images/new-game-button.webp",revision:"8fc31696f6987c3b04e7aa22b1380022"},{url:"images/how-to-button.webp",revision:"25e41beb8a1e0549f1a85f85c3435894"},{url:"_snowpack/pkg/import-map.json",revision:"1dc77190e35502882d944280256c3898"}]),function(e){const t=Y();o(new Z(t,e))}(ee),o(/\.(?:png|jpg|jpeg|svg|webp)$/,new class extends S{async T(e,s){let n,i=await s.cacheMatch(e);if(!i)try{i=await s.fetchAndCachePut(e)}catch(e){e instanceof Error&&(n=e)}if(!i)throw new t("no-response",{url:e.url,error:n});return i}}({cacheName:"images",plugins:[new class{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.G(n),r=this.V(s);d(r.expireEntries());const a=r.updateTimestamp(t.url);if(e)try{e.waitUntil(a)}catch(e){}return i?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.V(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.J=e,this.k=e.maxAgeSeconds,this.X=new Map,e.purgeOnQuotaError&&function(e){w.add(e)}((()=>this.deleteCacheAndMetadata()))}V(e){if(e===f())throw new t("expire-custom-caches-only");let s=this.X.get(e);return s||(s=new B(e,this.J),this.X.set(e,s)),s}G(e){if(!this.k)return!0;const t=this.Y(e);if(null===t)return!0;return t>=Date.now()-1e3*this.k}Y(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.X)await self.caches.delete(e),await t.delete();this.X=new Map}}({maxEntries:15})]}),"GET"),o(/^https:\/\/fonts\.googleapis\.com/,new A({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),o(/^https:\/\/fonts\.gstatic\.com/,new A({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET");
//# sourceMappingURL=sw.js.map
