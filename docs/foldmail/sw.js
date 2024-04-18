try{self["workbox:core:7.0.0"]&&_()}catch(t){}const t=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class e extends Error{constructor(e,s){super(t(e,s)),this.name=e,this.details=s}}try{self["workbox:routing:7.0.0"]&&_()}catch(t){}const s=t=>t&&"object"==typeof t?t:{handle:t};class n{constructor(t,e,n="GET"){this.handler=s(e),this.match=t,this.method=n}setCatchHandler(t){this.catchHandler=s(t)}}class i extends n{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class r{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:s});let a=r&&r.handler;const o=t.method;if(!a&&this.i.has(o)&&(a=this.i.get(o)),!a)return;let c;try{c=a.handle({url:s,request:t,event:e,params:i})}catch(t){c=Promise.reject(t)}const h=r&&r.catchHandler;return c instanceof Promise&&(this.o||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:s,request:t,event:e,params:i})}catch(t){t instanceof Error&&(n=t)}if(this.o)return this.o.handle({url:s,request:t,event:e});throw n}))),c}findMatchingRoute({url:t,sameOrigin:e,request:s,event:n}){const i=this.t.get(s.method)||[];for(const r of i){let i;const a=r.match({url:t,sameOrigin:e,request:s,event:n});if(a)return i=a,(Array.isArray(i)&&0===i.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,s(t))}setCatchHandler(t){this.o=s(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this.t.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this.t.get(t.method).splice(s,1)}}let a;const o=()=>(a||(a=new r,a.addFetchListener(),a.addCacheListener()),a);function c(t,s,r){let a;if("string"==typeof t){const e=new URL(t,location.href);a=new n((({url:t})=>t.href===e.href),s,r)}else if(t instanceof RegExp)a=new i(t,s,r);else if("function"==typeof t)a=new n(t,s,r);else{if(!(t instanceof n))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return o().registerRoute(a),a}const h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=t=>[h.prefix,t,h.suffix].filter((t=>t&&t.length>0)).join("-"),l=t=>t||u(h.precache),f=t=>t||u(h.runtime);function w(t){t.then((()=>{}))}const d=new Set;function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},p.apply(this,arguments)}const y=(t,e)=>e.some((e=>t instanceof e));let g,m;const b=new WeakMap,v=new WeakMap,R=new WeakMap,q=new WeakMap,D=new WeakMap;let x={get(t,e,s){if(t instanceof IDBTransaction){if("done"===e)return v.get(t);if("objectStoreNames"===e)return t.objectStoreNames||R.get(t);if("store"===e)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return I(t[e])},set:(t,e,s)=>(t[e]=s,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function U(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(m||(m=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(L(this),e),I(b.get(this))}:function(...e){return I(t.apply(L(this),e))}:function(e,...s){const n=t.call(L(this),e,...s);return R.set(n,e.sort?e.sort():[e]),I(n)}}function E(t){return"function"==typeof t?U(t):(t instanceof IDBTransaction&&function(t){if(v.has(t))return;const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),n()},r=()=>{s(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));v.set(t,e)}(t),y(t,g||(g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,x):t)}function I(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(I(t.result)),n()},r=()=>{s(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&b.set(e,t)})).catch((()=>{})),D.set(e,t),e}(t);if(q.has(t))return q.get(t);const e=E(t);return e!==t&&(q.set(t,e),D.set(e,t)),e}const L=t=>D.get(t);const N=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],O=new Map;function B(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(O.get(e))return O.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,i=C.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!N.includes(s))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let a=r.store;return n&&(a=a.index(e.shift())),(await Promise.all([a[s](...e),i&&r.done]))[0]};return O.set(e,r),r}x=(t=>p({},t,{get:(e,s,n)=>B(e,s)||t.get(e,s,n),has:(e,s)=>!!B(e,s)||t.has(e,s)}))(x);try{self["workbox:expiration:7.0.0"]&&_()}catch(t){}const T="cache-entries",k=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class j{constructor(t){this.h=null,this.u=t}l(t){const e=t.createObjectStore(T,{keyPath:"id"});e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1})}p(t){this.l(t),this.u&&function(t,{blocked:e}={}){const s=indexedDB.deleteDatabase(t);e&&s.addEventListener("blocked",(t=>e(t.oldVersion,t))),I(s).then((()=>{}))}(this.u)}async setTimestamp(t,e){const s={url:t=k(t),timestamp:e,cacheName:this.u,id:this.m(t)},n=(await this.getDb()).transaction(T,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(t){const e=await this.getDb(),s=await e.get(T,this.m(t));return null==s?void 0:s.timestamp}async expireEntries(t,e){const s=await this.getDb();let n=await s.transaction(T).store.index("timestamp").openCursor(null,"prev");const i=[];let r=0;for(;n;){const s=n.value;s.cacheName===this.u&&(t&&s.timestamp<t||e&&r>=e?i.push(n.value):r++),n=await n.continue()}const a=[];for(const t of i)await s.delete(T,t.id),a.push(t.url);return a}m(t){return this.u+"|"+k(t)}async getDb(){return this.h||(this.h=await function(t,e,{blocked:s,upgrade:n,blocking:i,terminated:r}={}){const a=indexedDB.open(t,e),o=I(a);return n&&a.addEventListener("upgradeneeded",(t=>{n(I(a.result),t.oldVersion,t.newVersion,I(a.transaction),t)})),s&&a.addEventListener("blocked",(t=>s(t.oldVersion,t.newVersion,t))),o.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),o}("workbox-expiration",1,{upgrade:this.p.bind(this)})),this.h}}class M{constructor(t,e={}){this.v=!1,this.R=!1,this.q=e.maxEntries,this.D=e.maxAgeSeconds,this.U=e.matchOptions,this.u=t,this.I=new j(t)}async expireEntries(){if(this.v)return void(this.R=!0);this.v=!0;const t=this.D?Date.now()-1e3*this.D:0,e=await this.I.expireEntries(t,this.q),s=await self.caches.open(this.u);for(const t of e)await s.delete(t,this.U);this.v=!1,this.R&&(this.R=!1,w(this.expireEntries()))}async updateTimestamp(t){await this.I.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.D){const e=await this.I.getTimestamp(t),s=Date.now()-1e3*this.D;return void 0===e||e<s}return!1}async delete(){this.R=!1,await this.I.expireEntries(1/0)}}function W(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class P{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}try{self["workbox:strategies:7.0.0"]&&_()}catch(t){}function S(t){return"string"==typeof t?new Request(t):t}class K{constructor(t,e){this._={},Object.assign(this,e),this.event=e.event,this.L=t,this.N=new P,this.C=[],this.O=[...t.plugins],this.B=new Map;for(const t of this.O)this.B.set(t,{});this.event.waitUntil(this.N.promise)}async fetch(t){const{event:s}=this;let n=S(t);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const t=await s.preloadResponse;if(t)return t}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:s})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const r=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this.L.fetchOptions);for(const e of this.iterateCallbacks("fetchDidSucceed"))t=await e({event:s,request:r,response:t});return t}catch(t){throw i&&await this.runCallbacks("fetchDidFail",{error:t,event:s,originalRequest:i.clone(),request:r.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}async cacheMatch(t){const e=S(t);let s;const{cacheName:n,matchOptions:i}=this.L,r=await this.getCacheKey(e,"read"),a=Object.assign(Object.assign({},i),{cacheName:n});s=await caches.match(r,a);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:n,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(t,s){const n=S(t);var i;await(i=0,new Promise((t=>setTimeout(t,i))));const r=await this.getCacheKey(n,"write");if(!s)throw new e("cache-put-with-no-response",{url:(a=r.url,new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var a;const o=await this.T(s);if(!o)return!1;const{cacheName:c,matchOptions:h}=this.L,u=await self.caches.open(c),l=this.hasCallback("cacheDidUpdate"),f=l?await async function(t,e,s,n){const i=W(e.url,s);if(e.url===i)return t.match(e,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),a=await t.keys(e,r);for(const e of a)if(i===W(e.url,s))return t.match(e,n)}(u,r.clone(),["__WB_REVISION__"],h):null;try{await u.put(r,l?o.clone():o)}catch(t){if(t instanceof Error)throw"QuotaExceededError"===t.name&&await async function(){for(const t of d)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:c,oldResponse:f,newResponse:o.clone(),request:r,event:this.event});return!0}async getCacheKey(t,e){const s=`${t.url} | ${e}`;if(!this._[s]){let n=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))n=S(await t({mode:e,request:n,event:this.event,params:this.params}));this._[s]=n}return this._[s]}hasCallback(t){for(const e of this.L.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.L.plugins)if("function"==typeof e[t]){const s=this.B.get(e),n=n=>{const i=Object.assign(Object.assign({},n),{state:s});return e[t](i)};yield n}}waitUntil(t){return this.C.push(t),t}async doneWaiting(){let t;for(;t=this.C.shift();)await t}destroy(){this.N.resolve(null)}async T(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class A{constructor(t={}){this.cacheName=f(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,i=new K(this,{event:e,request:s,params:n}),r=this.k(i,s,e);return[r,this.j(r,i,s,e)]}async k(t,s,n){let i;await t.runCallbacks("handlerWillStart",{event:n,request:s});try{if(i=await this.M(s,t),!i||"error"===i.type)throw new e("no-response",{url:s.url})}catch(e){if(e instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(i=await r({error:e,event:n,request:s}),i)break;if(!i)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))i=await e({event:n,request:s,response:i});return i}async j(t,e,s,n){let i,r;try{i=await t}catch(r){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await e.doneWaiting()}catch(t){t instanceof Error&&(r=t)}if(await e.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:r}),e.destroy(),r)throw r}}const F={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null};class $ extends A{constructor(t={}){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(F)}async M(t,s){const n=s.fetchAndCachePut(t).catch((()=>{}));s.waitUntil(n);let i,r=await s.cacheMatch(t);if(r);else try{r=await n}catch(t){t instanceof Error&&(i=t)}if(!r)throw new e("no-response",{url:t.url,error:i});return r}}function G(t,e){const s=e();return t.waitUntil(s),s}try{self["workbox:precaching:7.0.0"]&&_()}catch(t){}function H(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:n}=t;if(!n)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:r.href}}class J{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:s})=>{if("install"===t.type&&e&&e.originalRequest&&e.originalRequest instanceof Request){const t=e.originalRequest.url;s?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return s}}}class V{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const s=(null==e?void 0:e.cacheKey)||this.W.getCacheKeyForURL(t.url);return s?new Request(s,{headers:t.headers}):t},this.W=t}}let Q,z;async function X(t,s){let n=null;if(t.url){n=new URL(t.url).origin}if(n!==self.location.origin)throw new e("cross-origin-copy-response",{origin:n});const i=t.clone(),r={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},a=s?s(r):r,o=function(){if(void 0===Q){const t=new Response("");if("body"in t)try{new Response(t.body),Q=!0}catch(t){Q=!1}Q=!1}return Q}()?i.body:await i.blob();return new Response(o,a)}class Y extends A{constructor(t={}){t.cacheName=l(t.cacheName),super(t),this.P=!1!==t.fallbackToNetwork,this.plugins.push(Y.copyRedirectedCacheableResponsesPlugin)}async M(t,e){const s=await e.cacheMatch(t);return s||(e.event&&"install"===e.event.type?await this.S(t,e):await this.K(t,e))}async K(t,s){let n;const i=s.params||{};if(!this.P)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=i.integrity,r=t.integrity,a=!r||r===e;n=await s.fetch(new Request(t,{integrity:"no-cors"!==t.mode?r||e:void 0})),e&&a&&"no-cors"!==t.mode&&(this.A(),await s.cachePut(t,n.clone()))}return n}async S(t,s){this.A();const n=await s.fetch(t);if(!await s.cachePut(t,n.clone()))throw new e("bad-precaching-response",{url:t.url,status:n.status});return n}A(){let t=null,e=0;for(const[s,n]of this.plugins.entries())n!==Y.copyRedirectedCacheableResponsesPlugin&&(n===Y.defaultPrecacheCacheabilityPlugin&&(t=s),n.cacheWillUpdate&&e++);0===e?this.plugins.push(Y.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}Y.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:t})=>!t||t.status>=400?null:t},Y.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await X(t):t};class Z{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:s=!0}={}){this.F=new Map,this.$=new Map,this.G=new Map,this.L=new Y({cacheName:l(t),plugins:[...e,new V({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.L}precache(t){this.addToCacheList(t),this.H||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.H=!0)}addToCacheList(t){const s=[];for(const n of t){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:t,url:i}=H(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.F.has(i)&&this.F.get(i)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this.F.get(i),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.G.has(t)&&this.G.get(t)!==n.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:i});this.G.set(t,n.integrity)}if(this.F.set(i,t),this.$.set(i,r),s.length>0){const t=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return G(t,(async()=>{const e=new J;this.strategy.plugins.push(e);for(const[e,s]of this.F){const n=this.G.get(s),i=this.$.get(e),r=new Request(e,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:t}))}const{updatedURLs:s,notUpdatedURLs:n}=e;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(t){return G(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),s=new Set(this.F.values()),n=[];for(const i of e)s.has(i.url)||(await t.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.F}getCachedURLs(){return[...this.F.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.F.get(e.href)}getIntegrityForCacheKey(t){return this.G.get(t)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:s},e.params),this.strategy.handle(e))}}const tt=()=>(z||(z=new Z),z);class et extends n{constructor(t,e){super((({request:s})=>{const n=t.getURLsToCacheKeys();for(const i of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const r=new URL(t,location.href);r.hash="",yield r.href;const a=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some((t=>t.test(s)))&&t.searchParams.delete(s);return t}(r,e);if(yield a.href,s&&a.pathname.endsWith("/")){const t=new URL(a.href);t.pathname+=s,yield t.href}if(n){const t=new URL(a.href);t.pathname+=".html",yield t.href}if(i){const t=i({url:r});for(const e of t)yield e.href}}(s.url,e)){const e=n.get(i);if(e){return{cacheKey:e,integrity:t.getIntegrityForCacheKey(e)}}}}),t.strategy)}}var st;self.addEventListener("message",(t=>{t.data&&"SKIP_WAITING"===t.data.type&&self.skipWaiting()})),st={},function(t){tt().precache(t)}([{url:"assets/index-B-O1Ab9P.js",revision:"aa1e59aa1cd6d9535a86e794b366375b"},{url:"assets/index-CuteGJC0.css",revision:"e88ac9cc59b3d1edf2fbf209ae87206e"},{url:"favicon.ico",revision:"1ca917dea7ccef2ea48548ef1e15fdf7"},{url:"index.html",revision:"eda365b0d8ac2b1b4f4771d9abe6b75d"},{url:"images/manifest/icon-512x512.png",revision:"1aad17a798bfd0b5ec60f241f223d5bc"},{url:"images/manifest/icon-192x192.png",revision:"2e5374f0acff858306cdce848ff3edf4"},{url:"images/manifest/safari-pinned-tab.svg",revision:"84a23cce3397f90de3f265e6132a07e5"},{url:"manifest.json",revision:"0f25383300878ac41c19e35f8863ffe9"}]),function(t){const e=tt();c(new et(e,t))}(st),c(/\.(?:png|jpg|jpeg|svg|webp)$/,new class extends A{async M(t,s){let n,i=await s.cacheMatch(t);if(!i)try{i=await s.fetchAndCachePut(t)}catch(t){t instanceof Error&&(n=t)}if(!i)throw new e("no-response",{url:t.url,error:n});return i}}({cacheName:"images",plugins:[new class{constructor(t={}){this.cachedResponseWillBeUsed=async({event:t,request:e,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.J(n),r=this.V(s);w(r.expireEntries());const a=r.updateTimestamp(e.url);if(t)try{t.waitUntil(a)}catch(t){}return i?n:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const s=this.V(t);await s.updateTimestamp(e.url),await s.expireEntries()},this.X=t,this.D=t.maxAgeSeconds,this.Y=new Map,t.purgeOnQuotaError&&function(t){d.add(t)}((()=>this.deleteCacheAndMetadata()))}V(t){if(t===f())throw new e("expire-custom-caches-only");let s=this.Y.get(t);return s||(s=new M(t,this.X),this.Y.set(t,s)),s}J(t){if(!this.D)return!0;const e=this.Z(t);if(null===e)return!0;return e>=Date.now()-1e3*this.D}Z(t){if(!t.headers.has("date"))return null;const e=t.headers.get("date"),s=new Date(e).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[t,e]of this.Y)await self.caches.delete(t),await e.delete();this.Y=new Map}}({maxEntries:15})]}),"GET"),c(/^https:\/\/fonts\.googleapis\.com/,new $({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),c(/^https:\/\/fonts\.gstatic\.com/,new $({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET");
//# sourceMappingURL=sw.js.map
