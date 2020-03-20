import"./ponyfill-792d38b8.js";import{LitElement as s}from"../lit-element.js";const t=s=>(t,o)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const s=t.constructor._observers;t.constructor._observers=new Map,s.forEach((s,o)=>t.constructor._observers.set(o,s))}}else{t.constructor._observers=new Map;const s=t.updated;t.updated=function(t){s.call(this,t),t.forEach((s,t)=>{const o=this.constructor._observers.get(t);void 0!==o&&o.call(this,this[t],s)})}}t.constructor._observers.set(o,s)}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;function o(s){return{addClass:t=>{s.classList.add(t)},removeClass:t=>{s.classList.remove(t)},hasClass:t=>s.classList.contains(t)}}const e=()=>{},r={get passive(){return!1}};document.addEventListener("x",e,r),document.removeEventListener("x",e);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class n extends s{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init()}firstUpdated(){this.createFoundation()}}export{n as B,o as a,t as o};
//# sourceMappingURL=base-element-48526550.js.map
