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
*/const g=h=>(a,i)=>{if(a.constructor._observers){if(!a.constructor.hasOwnProperty("_observers")){const c=a.constructor._observers;a.constructor._observers=new Map(),c.forEach((b,d)=>a.constructor._observers.set(d,b))}}else{a.constructor._observers=new Map();const c=a.updated;a.updated=function(b){c.call(this,b),b.forEach((d,e)=>{const j=this.constructor._observers,f=j.get(e);f!==void 0&&f.call(this,this[e],d)})}}a.constructor._observers.set(i,h)};export{g as o};
