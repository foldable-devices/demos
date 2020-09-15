try{self["workbox:core:5.1.4"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.4"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class i extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class r{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:i}=this.findMatchingRoute({url:s,request:e,event:t});let r,a=i&&i.handler;if(!a&&this.s&&(a=this.s),a){try{r=a.handle({url:s,request:e,event:t,params:n})}catch(e){r=Promise.reject(e)}return r instanceof Promise&&this.i&&(r=r.catch(n=>this.i.handle({url:s,request:e,event:t}))),r}}findMatchingRoute({url:e,request:t,event:s}){const n=this.t.get(t.method)||[];for(const i of n){let n;const r=i.match({url:e,request:t,event:s});if(r)return n=r,(Array.isArray(r)&&0===r.length||r.constructor===Object&&0===Object.keys(r).length||"boolean"==typeof r)&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(e){this.s=s(e)}setCatchHandler(e){this.i=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let a;const c=()=>(a||(a=new r,a.addFetchListener(),a.addCacheListener()),a);try{self["workbox:core:5.1.4"]&&_()}catch(e){}const o=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class u extends Error{constructor(e,t){super(o(e,t)),this.name=e,this.details=t}}const h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=e=>[h.prefix,e,h.suffix].filter(e=>e&&e.length>0).join("-"),f=e=>e||l(h.runtime);function d(e){e.then(()=>{})}const w=new Set;class p{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.u=e,this.h=t,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.u,this.h);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this.p.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:i,includeKeys:r=!1}={}){return await this.transaction([e],"readonly",(a,c)=>{const o=a.objectStore(e),u=t?o.index(t):o,h=[],l=u.openCursor(s,n);l.onsuccess=()=>{const e=l.result;e?(h.push(r?e:e.value),i&&h.length>=i?c(h):e.continue()):c(h)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,i)=>{const r=this.o.transaction(e,t);r.onabort=()=>i(r.error),r.oncomplete=()=>n(),s(r,e=>n(e))})}async g(e,t,s,...n){return await this.transaction([t],s,(s,i)=>{const r=s.objectStore(t),a=r[e].apply(r,n);a.onsuccess=()=>i(a.result)})}close(){this.o&&(this.o.close(),this.o=null)}}p.prototype.OPEN_TIMEOUT=2e3;const g={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(g))for(const s of t)s in IDBObjectStore.prototype&&(p.prototype[s]=async function(t,...n){return await this.g(s,t,e,...n)});try{self["workbox:expiration:5.1.4"]&&_()}catch(e){}const y=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class m{constructor(e){this.m=e,this.o=new p("workbox-expiration",1,{onupgradeneeded:e=>this.v(e)})}v(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this.m)}async setTimestamp(e,t){const s={url:e=y(e),timestamp:t,cacheName:this.m,id:this.q(e)};await this.o.put("cache-entries",s)}async getTimestamp(e){return(await this.o.get("cache-entries",this.q(e))).timestamp}async expireEntries(e,t){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),r=[];let a=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.m&&(e&&n.timestamp<e||t&&a>=t?r.push(s.value):a++),s.continue()}else n(r)}}),n=[];for(const e of s)await this.o.delete("cache-entries",e.id),n.push(e.url);return n}q(e){return this.m+"|"+y(e)}}class b{constructor(e,t={}){this.R=!1,this.U=!1,this.L=t.maxEntries,this.N=t.maxAgeSeconds,this.m=e,this._=new m(e)}async expireEntries(){if(this.R)return void(this.U=!0);this.R=!0;const e=this.N?Date.now()-1e3*this.N:0,t=await this._.expireEntries(e,this.L),s=await self.caches.open(this.m);for(const e of t)await s.delete(e);this.R=!1,this.U&&(this.U=!1,d(this.expireEntries()))}async updateTimestamp(e){await this._.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.N){return await this._.getTimestamp(e)<Date.now()-1e3*this.N}return!1}async delete(){this.U=!1,await this._.expireEntries(1/0)}}try{self["workbox:core:5.1.4"]&&_()}catch(e){}const v=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class q extends Error{constructor(e,t){super(v(e,t)),this.name=e,this.details=t}}const R={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},x=e=>[R.prefix,e,R.suffix].filter(e=>e&&e.length>0).join("-"),U=e=>e||x(R.runtime),L=new Set;const N=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),""),E=(e,t)=>e.filter(e=>t in e),O=async({request:e,mode:t,plugins:s=[]})=>{const n=E(s,"cacheKeyWillBeUsed");let i=e;for(const e of n)i=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:i}),"string"==typeof i&&(i=new Request(i));return i},K=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:i=[]})=>{const r=await self.caches.open(e),a=await O({plugins:i,request:t,mode:"read"});let c=await r.match(a,n);for(const t of i)if("cachedResponseWillBeUsed"in t){const i=t.cachedResponseWillBeUsed;c=await i.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:c,request:a})}return c},D=async({cacheName:e,request:t,response:s,event:n,plugins:i=[],matchOptions:r})=>{const a=await O({plugins:i,request:t,mode:"write"});if(!s)throw new q("cache-put-with-no-response",{url:N(a.url)});const c=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let i=t,r=!1;for(const t of n)if("cacheWillUpdate"in t){r=!0;const n=t.cacheWillUpdate;if(i=await n.call(t,{request:e,response:i,event:s}),!i)break}return r||(i=i&&200===i.status?i:void 0),i||null})({event:n,plugins:i,response:s,request:a});if(!c)return;const o=await self.caches.open(e),u=E(i,"cacheDidUpdate"),h=u.length>0?await K({cacheName:e,matchOptions:r,request:a}):null;try{await o.put(a,c)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of L)await e()}(),e}for(const t of u)await t.cacheDidUpdate.call(t,{cacheName:e,event:n,oldResponse:h,newResponse:c,request:a})},S=K,j=async({request:e,fetchOptions:t,event:s,plugins:n=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const i=E(n,"fetchDidFail"),r=i.length>0?e.clone():null;try{for(const t of n)if("requestWillFetch"in t){const n=t.requestWillFetch,i=e.clone();e=await n.call(t,{request:i,event:s})}}catch(e){throw new q("plugin-error-request-will-fetch",{thrownError:e})}const a=e.clone();try{let i;i="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of n)"fetchDidSucceed"in e&&(i=await e.fetchDidSucceed.call(e,{event:s,request:a,response:i}));return i}catch(e){for(const t of i)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:r.clone(),request:a.clone()});throw e}};try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}try{self["workbox:core:5.1.4"]&&_()}catch(e){}const M={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},T=e=>[M.prefix,e,M.suffix].filter(e=>e&&e.length>0).join("-"),A=e=>e||T(M.precache),P=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),""),k=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class W extends Error{constructor(e,t){super(k(e,t)),this.name=e,this.details=t}}const C=new Set;const F=(e,t)=>e.filter(e=>t in e),I=async({request:e,mode:t,plugins:s=[]})=>{const n=F(s,"cacheKeyWillBeUsed");let i=e;for(const e of n)i=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:i}),"string"==typeof i&&(i=new Request(i));return i},B=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:i=[]})=>{const r=await self.caches.open(e),a=await I({plugins:i,request:t,mode:"read"});let c=await r.match(a,n);for(const t of i)if("cachedResponseWillBeUsed"in t){const i=t.cachedResponseWillBeUsed;c=await i.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:c,request:a})}return c},H=async({cacheName:e,request:t,response:s,event:n,plugins:i=[],matchOptions:r})=>{const a=await I({plugins:i,request:t,mode:"write"});if(!s)throw new W("cache-put-with-no-response",{url:P(a.url)});const c=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let i=t,r=!1;for(const t of n)if("cacheWillUpdate"in t){r=!0;const n=t.cacheWillUpdate;if(i=await n.call(t,{request:e,response:i,event:s}),!i)break}return r||(i=i&&200===i.status?i:void 0),i||null})({event:n,plugins:i,response:s,request:a});if(!c)return;const o=await self.caches.open(e),u=F(i,"cacheDidUpdate"),h=u.length>0?await B({cacheName:e,matchOptions:r,request:a}):null;try{await o.put(a,c)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of C)await e()}(),e}for(const t of u)await t.cacheDidUpdate.call(t,{cacheName:e,event:n,oldResponse:h,newResponse:c,request:a})},z=async({request:e,fetchOptions:t,event:s,plugins:n=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const i=F(n,"fetchDidFail"),r=i.length>0?e.clone():null;try{for(const t of n)if("requestWillFetch"in t){const n=t.requestWillFetch,i=e.clone();e=await n.call(t,{request:i,event:s})}}catch(e){throw new W("plugin-error-request-will-fetch",{thrownError:e})}const a=e.clone();try{let i;i="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of n)"fetchDidSucceed"in e&&(i=await e.fetchDidSucceed.call(e,{event:s,request:a,response:i}));return i}catch(e){for(const t of i)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:r.clone(),request:a.clone()});throw e}};let J;async function G(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=t?t(n):n,r=function(){if(void 0===J){const e=new Response("");if("body"in e)try{new Response(e.body),J=!0}catch(e){J=!1}J=!1}return J}()?s.body:await s.blob();return new Response(r,i)}try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}function Q(e){if(!e)throw new W("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new W("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),i=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:i.href}}class ${constructor(e){this.m=A(e),this.O=new Map,this.K=new Map,this.D=new Map}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=Q(s),i="string"!=typeof s&&s.revision?"reload":"default";if(this.O.has(n)&&this.O.get(n)!==e)throw new W("add-to-cache-list-conflicting-entries",{firstEntry:this.O.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this.D.has(e)&&this.D.get(e)!==s.integrity)throw new W("add-to-cache-list-conflicting-integrities",{url:n});this.D.set(e,s.integrity)}if(this.O.set(n,e),this.K.set(n,i),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],i=await self.caches.open(this.m),r=await i.keys(),a=new Set(r.map(e=>e.url));for(const[e,t]of this.O)a.has(t)?n.push(e):s.push({cacheKey:t,url:e});const c=s.map(({cacheKey:s,url:n})=>{const i=this.D.get(s),r=this.K.get(n);return this.S({cacheKey:s,cacheMode:r,event:e,integrity:i,plugins:t,url:n})});await Promise.all(c);return{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.m),t=await e.keys(),s=new Set(this.O.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}async S({cacheKey:e,url:t,cacheMode:s,event:n,plugins:i,integrity:r}){const a=new Request(t,{integrity:r,cache:s,credentials:"same-origin"});let c,o=await z({event:n,plugins:i,request:a});for(const e of i||[])"cacheWillUpdate"in e&&(c=e);if(!(c?await c.cacheWillUpdate({event:n,request:a,response:o}):o.status<400))throw new W("bad-precaching-response",{url:t,status:o.status});o.redirected&&(o=await G(o)),await H({event:n,plugins:i,response:o,request:e===t?a:new Request(e),cacheName:this.m,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.O}getCachedURLs(){return[...this.O.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.O.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.m)).match(s)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new W("missing-precache-entry",{cacheName:this.m,url:t instanceof Request?t.url:t})}catch(s){if(e)return fetch(t);throw s}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new W("non-precached-url",{url:e});const s=this.createHandler(t),n=new Request(e);return()=>s({request:n})}}let V;const X=()=>(V||(V=new $),V);const Y=(e,t)=>{const s=X().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:i}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const a=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(r,t);if(yield a.href,s&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=s,yield e.href}if(n){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:r});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let Z=!1;function ee(e){Z||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const i=A();self.addEventListener("fetch",r=>{const a=Y(r.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!a)return;let c=self.caches.open(i).then(e=>e.match(a)).then(e=>e||fetch(a));r.respondWith(c)})})(e),Z=!0)}const te=[],se={get:()=>te,add(e){te.push(...e)}},ne=e=>{const t=X(),s=se.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},ie=e=>{const t=X();e.waitUntil(t.activate())};var re;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),re={},function(e){X().addToCacheList(e),e.length>0&&(self.addEventListener("install",ne),self.addEventListener("activate",ie))}([{url:"favicon.ico",revision:"10d0c41dac9fef3399dd5f0daa20f5c2"},{url:"index.html",revision:"5dfe77537a3333c1d4915682ae8d18a0"},{url:"style.css",revision:"4e3399678080dcd26b1ea70ab6eee91a"},{url:"images/manifest/icon-512x512.png",revision:"aa9ef546dc38c10ccce4309015060e68"},{url:"images/manifest/icon-192x192.png",revision:"656d5bfb327f895a68ca523dc0a97ec4"},{url:"images/manifest/safari-pinned-tab.svg",revision:"3365a71f685766ccbe2ac15eee196ba1"},{url:"manifest.json",revision:"484c652625e5c9a77c2e474a855bb2c7"},{url:"images/battleship-top-horizontal.webp",revision:"9ac98e393363c3b5f3277f519cfdb680"},{url:"images/battleship-top-vertical.webp",revision:"113cf0b692acfae06c3058198442262b"},{url:"images/carrier-top-horizontal.webp",revision:"123de838a394cc5682f5438f36711c0c"},{url:"images/carrier-top-vertical.webp",revision:"c761b8037db0ddd6b1c6551b3d973b64"},{url:"images/destroyer-top-horizontal.webp",revision:"a87d85316f447cad5641639af1c31fe6"},{url:"images/destroyer-top-vertical.webp",revision:"6e063d196cf2d0ba053be82979ecc992"},{url:"images/rescue-top-horizontal.webp",revision:"28678f3a21936295941cdbf840b13ab0"},{url:"images/rescue-top-vertical.webp",revision:"a8bdf39060a3fb65d1ee6f41b0cc322b"},{url:"images/submarine-top-horizontal.webp",revision:"b9ba2c6beb4bbd99471c95f93b7d8923"},{url:"images/submarine-top-vertical.webp",revision:"ecf48493bc833fd7e0eac0dfe33d6364"},{url:"images/ocean-1024.webp",revision:"611051274c0047b2e6e6d97ead40e31e"},{url:"images/captain.webp",revision:"c6fa7403444ae3be1016bfbad68e155d"},{url:"images/restart-button.webp",revision:"8443686c9106abcd62e935f975016289"},{url:"web_modules/import-map.json",revision:"1afb36a5adfffd4bc06882a65ddef9e2"},{url:"dist/dialogbox.js",revision:"b816e1479e7c8f421a9e44fca1510eba"},{url:"dist/enemy-grid.js",revision:"ede961d40b61ae9e4c18cbea287c2e71"},{url:"dist/enemy-ship.js",revision:"2467a1841ab58ed15079c733ad3b9370"},{url:"dist/game-grid.js",revision:"a5c6db4eac9d1ea98aec5b81eaa0dbd6"},{url:"dist/infoxbox.js",revision:"1532d6957f3a02463cdf5c2e0779074f"},{url:"dist/main-application.js",revision:"d845edd00d8f3fbd535508a39d01a726"},{url:"dist/player-grid.js",revision:"8e75f8227403e0113151553bde470cb1"},{url:"dist/ship.js",revision:"e625751870908db8740e5b3e4ed95ea5"}]),ee(re),function(e,s,r){let a;if("string"==typeof e){const t=new URL(e,location.href);a=new n(({url:e})=>e.href===t.href,s,r)}else if(e instanceof RegExp)a=new i(e,s,r);else if("function"==typeof e)a=new n(e,s,r);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}c().registerRoute(a)}(/\.(?:png|jpg|jpeg|svg|webp)$/,new class{constructor(e={}){this.m=U(e.cacheName),this.j=e.plugins||[],this.M=e.fetchOptions,this.T=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));let s,n=await S({cacheName:this.m,request:t,event:e,matchOptions:this.T,plugins:this.j});if(!n)try{n=await this.A(t,e)}catch(e){s=e}if(!n)throw new q("no-response",{url:t.url,error:s});return n}async A(e,t){const s=await j({request:e,event:t,fetchOptions:this.M,plugins:this.j}),n=s.clone(),i=D({cacheName:this.m,request:e,response:n,event:t,plugins:this.j});if(t)try{t.waitUntil(i)}catch(e){}return s}}({cacheName:"images",plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.P(n),r=this.k(s);d(r.expireEntries());const a=r.updateTimestamp(t.url);if(e)try{e.waitUntil(a)}catch(e){}return i?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.k(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.W=e,this.N=e.maxAgeSeconds,this.C=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),w.add(t))}k(e){if(e===f())throw new u("expire-custom-caches-only");let t=this.C.get(e);return t||(t=new b(e,this.W),this.C.set(e,t)),t}P(e){if(!this.N)return!0;const t=this.F(e);if(null===t)return!0;return t>=Date.now()-1e3*this.N}F(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.C)await self.caches.delete(e),await t.delete();this.C=new Map}}({maxEntries:15,purgeOnQuotaError:!0})]}),"GET");
//# sourceMappingURL=sw.js.map
