import{d as j,A as k,P as l}from"../../common/lit-html-ec56d68b.js";/**
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
 */class m{constructor(a){this.classes=new Set(),this.changed=!1,this.element=a;const b=(a.getAttribute("class")||"").split(/\s+/);for(const f of b)this.classes.add(f)}add(a){this.classes.add(a),this.changed=!0}remove(a){this.classes.delete(a),this.changed=!0}commit(){if(this.changed){let a="";this.classes.forEach(b=>a+=b+" "),this.element.setAttribute("class",a)}}}const h=new WeakMap(),n=j(a=>b=>{if(!(b instanceof k)||b instanceof l||b.committer.name!=="class"||b.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:f}=b,{element:g}=f;let d=h.get(b);d===void 0&&(g.setAttribute("class",f.strings.join(" ")),h.set(b,d=new Set()));const e=g.classList||new m(g);d.forEach(c=>{c in a||(e.remove(c),d.delete(c))});for(const c in a){const i=a[c];i!=d.has(c)&&(i?(e.add(c),d.add(c)):(e.remove(c),d.delete(c)))}typeof e.commit==="function"&&e.commit()});export{n as classMap};
