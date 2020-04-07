import{a as t,e,j as s}from"../../common/lit-html-5735858c.js";
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class a{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const c=new WeakMap,i=t(t=>i=>{if(!(i instanceof e)||i instanceof s||"class"!==i.committer.name||i.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:n}=i,{element:o}=n;let r=c.get(i);void 0===r&&(o.setAttribute("class",n.strings.join(" ")),c.set(i,r=new Set));const l=o.classList||new a(o);r.forEach(e=>{e in t||(l.remove(e),r.delete(e))});for(const e in t){const s=t[e];s!=r.has(e)&&(s?(l.add(e),r.add(e)):(l.remove(e),r.delete(e)))}"function"==typeof l.commit&&l.commit()});export{i as classMap};
//# sourceMappingURL=class-map.js.map
