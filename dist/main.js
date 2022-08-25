(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"html,body{\n    background-color: #E6AA68\n   \n    \n}\n#headerContainer{\n    background-color: #7FB069 ;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    \n    margin: 0px;\n    padding: 40px;\n}\n\n#bigHeader{\n    font-size: 2rem;\n    padding: 20px;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n align-items: center;\n}\n\n\n\n.aboutHead{\n    font-size: 2rem;\n    color: yellow;\n}\n\n.aboutPar{\n    font-size: 1rem;\n    color: yellow;\n}\n\n\n.menuItem{\n    \n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var d=r(e,a),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),d=t.n(c),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,document.getElementById("content");let v=document.getElementById("header"),h=document.createElement("button");h.innerHTML="about",v.appendChild(h);let b=document.createElement("button");b.innerHTML="menu",v.appendChild(b);let y=document.createElement("button");y.innerHTML="Contact",v.appendChild(y),h.onclick=function(){!function(){let e=document.getElementById("content");e.innerHTML="";let n=document.createElement("div");n.classList.add("aboutHead"),n.innerHTML="About",e.appendChild(n);let t=document.createElement("div");t.classList.add("aboutPar"),t.innerHTML="This is a store that sells acai bowls in old candle holders for some reason. The hoes gonn love this",e.appendChild(t)}()},b.onclick=function(){!function(){let e=document.getElementById("content");e.innerHTML="";let n=document.createElement("div");n.classList.add("aboutHead"),n.innerHTML="Menu",e.appendChild(n);let t=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div");t.classList.add("menuItem"),r.classList.add("menuItem"),a.classList.add("menuItem"),o.classList.add("menuItem"),t.innerHTML="Candle item - coconut and bananas - $12",r.innerHTML="Candle acai bowl - strawberries and peanut butter - $15",a.innerHTML="Candle acai bowl - strawberries and peanut butter - $15",o.innerHTML="Candle acai bowl - strawberries and peanut butter - $15",e.appendChild(t),e.appendChild(r),e.appendChild(a),e.appendChild(o)}()},y.onclick=function(){!function(){let e=document.getElementById("content");e.innerHTML="";let n=document.createElement("div");n.classList.add("aboutHead"),n.innerHTML="Contact Us",e.appendChild(n);let t=document.createElement("div"),r=document.createElement("div");t.classList.add("contactInfo"),r.classList.add("contactInfo"),t.innerHTML="(479)222-2222",r.innerHTML="owner@candle.com",e.appendChild(t),e.appendChild(r)}()}})()})();