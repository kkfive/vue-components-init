!function(){var e={457:function(e,t,n){"use strict";n.r(t);var r=n(533),o=n.n(r);r=n(740),(o=n.n(r)()(o())).push([e.id,".example[data-v-1e64dfb0]{color:#f00;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}","",{version:3,sources:["webpack://./src/components/head/head.styl"],names:[],mappings:"AAAA,0BACE,UAAM,CACN,mBAAQ,CAAR,oBAAQ,CAAR,mBAAQ,CAAR,YAAQ",sourcesContent:[".example\r\n  color red\r\n  display flex"],sourceRoot:""}]),t.default=o},740:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},533:function(e){"use strict";function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n=t(e,4),r=n[1],o=n[3];return"function"!=typeof btoa?[r].join("\n"):(e=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),e="/*# ".concat(n," */"),n=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")})),[r].concat(n).concat([e]).join("\n"))}},729:function(e,t,n){var r=n(457);(r="string"==typeof(r=r.__esModule?r.default:r)?[[e.id,r,""]]:r).locals&&(e.exports=r.locals),(0,n(950).Z)("10f828b2",r,!0,{})},950:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=(i=t[o])[0],i={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(i):n.push(r[a]={id:a,parts:[i]})}return n}if(n.d(t,{Z:function(){return p}}),t="undefined"!=typeof document,"undefined"!=typeof DEBUG&&DEBUG&&!t)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=t&&(document.head||document.getElementsByTagName("head")[0]),i=null,s=0,c=!1,u=function(){},l=null,f="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,a){c=n,l=a||{};var i=r(e,t);return v(i),function(t){for(var n=[],a=0;a<i.length;a++){var s=i[a];(c=o[s.id]).refs--,n.push(c)}var c;for(t?v(i=r(e,t)):i=[],a=0;a<n.length;a++)if(0===(c=n[a]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete o[c.id]}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(m(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(a=0;a<n.parts.length;a++)i.push(m(n.parts[a]));o[n.id]={id:n.id,refs:1,parts:i}}}}function h(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var t,n,r,o=document.querySelector("style["+f+'~="'+e.id+'"]');if(o){if(c)return u;o.parentNode.removeChild(o)}return r=d?(t=s++,o=i=i||h(),n=b.bind(null,o,t,!1),b.bind(null,o,t,!0)):(o=h(),n=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),l.ssrId&&e.setAttribute(f,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,o),function(){o.parentNode.removeChild(o)}),n(e),function(t){t?t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap||n(e=t):r()}}var y,g=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function b(e,t,n,r){n=n?"":r.css,e.styleSheet?e.styleSheet.cssText=g(t,n):(r=document.createTextNode(n),(n=e.childNodes)[t]&&e.removeChild(n[t]),n.length?e.insertBefore(r,n[t]):e.appendChild(r))}}},t={};function n(r){var o=t[r];return void 0!==o||(o=t[r]={id:r,exports:{}},e[r](o,o.exports,n)),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";n(729);var e,t,r,o,a,i,s,c,u=(t=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"example"},[e._v(e._s(e.msg))])},o=!(r=[]),"1e64dfb0",null,c="function"==typeof(e={props:["msg"],data:()=>({})})?e.options:e,t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),o&&(c.functional=!0),c._scopeId="data-v-1e64dfb0",i&&(c.functional?(c._injectStyles=i,s=c.render,c.render=function(e,t){return i.call(t),s(e,t)}):(a=c.beforeCreate,c.beforeCreate=a?[].concat(a,i):[i])),{exports:e,options:c});Vue,Vue.component("xk-head",u.exports),Vue.config.devtools=!0,window.Vue=Vue}()}();