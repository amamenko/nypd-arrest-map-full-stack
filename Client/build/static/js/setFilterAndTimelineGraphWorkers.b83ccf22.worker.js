!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=3)}([function(t,e,r){(function(t,r){var n="__lodash_hash_undefined__",o=9007199254740991,u="[object Arguments]",i="[object Array]",a="[object Boolean]",c="[object Date]",f="[object Error]",l="[object Function]",s="[object Map]",p="[object Number]",h="[object Object]",v="[object Promise]",d="[object RegExp]",y="[object Set]",_="[object String]",b="[object Symbol]",g="[object WeakMap]",j="[object ArrayBuffer]",m="[object DataView]",O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,w=/^\w*$/,A=/^\./,R=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,S=/\\(\\)?/g,E=/^\[object .+?Constructor\]$/,P=/^(?:0|[1-9]\d*)$/,T={};T["[object Float32Array]"]=T["[object Float64Array]"]=T["[object Int8Array]"]=T["[object Int16Array]"]=T["[object Int32Array]"]=T["[object Uint8Array]"]=T["[object Uint8ClampedArray]"]=T["[object Uint16Array]"]=T["[object Uint32Array]"]=!0,T[u]=T[i]=T[j]=T[a]=T[m]=T[c]=T[f]=T[l]=T[s]=T[p]=T[h]=T[d]=T[y]=T[_]=T[g]=!1;var x="object"==typeof t&&t&&t.Object===Object&&t,L="object"==typeof self&&self&&self.Object===Object&&self,D=x||L||Function("return this")(),M=e&&!e.nodeType&&e,B=M&&"object"==typeof r&&r&&!r.nodeType&&r,F=B&&B.exports===M&&x.process,C=function(){try{return F&&F.binding("util")}catch(t){}}(),N=C&&C.isTypedArray;function k(t,e,r,n){for(var o=-1,u=t?t.length:0;++o<u;){var i=t[o];e(n,i,r(i),t)}return n}function $(t,e){for(var r=-1,n=t?t.length:0;++r<n;)if(e(t[r],r,t))return!0;return!1}function G(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(r){}return e}function U(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function I(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var q,z,V=Array.prototype,Q=Function.prototype,W=Object.prototype,K=D["__core-js_shared__"],X=function(){var t=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),H=Q.toString,J=W.hasOwnProperty,Y=W.toString,Z=RegExp("^"+H.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),tt=D.Symbol,et=D.Uint8Array,rt=W.propertyIsEnumerable,nt=V.splice,ot=(q=Object.keys,z=Object,function(t){return q(z(t))}),ut=Gt(D,"DataView"),it=Gt(D,"Map"),at=Gt(D,"Promise"),ct=Gt(D,"Set"),ft=Gt(D,"WeakMap"),lt=Gt(Object,"create"),st=Kt(ut),pt=Kt(it),ht=Kt(at),vt=Kt(ct),dt=Kt(ft),yt=tt?tt.prototype:void 0,_t=yt?yt.valueOf:void 0,bt=yt?yt.toString:void 0;function gt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function jt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function mt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Ot(t){var e=-1,r=t?t.length:0;for(this.__data__=new mt;++e<r;)this.add(t[e])}function wt(t){this.__data__=new jt(t)}function At(t,e){var r=ee(t)||te(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var u in t)!e&&!J.call(t,u)||o&&("length"==u||It(u,n))||r.push(u);return r}function Rt(t,e){for(var r=t.length;r--;)if(Zt(t[r][0],e))return r;return-1}function St(t,e,r,n){return Tt(t,(function(t,o,u){e(n,t,r(t),u)})),n}gt.prototype.clear=function(){this.__data__=lt?lt(null):{}},gt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},gt.prototype.get=function(t){var e=this.__data__;if(lt){var r=e[t];return r===n?void 0:r}return J.call(e,t)?e[t]:void 0},gt.prototype.has=function(t){var e=this.__data__;return lt?void 0!==e[t]:J.call(e,t)},gt.prototype.set=function(t,e){return this.__data__[t]=lt&&void 0===e?n:e,this},jt.prototype.clear=function(){this.__data__=[]},jt.prototype.delete=function(t){var e=this.__data__,r=Rt(e,t);return!(r<0)&&(r==e.length-1?e.pop():nt.call(e,r,1),!0)},jt.prototype.get=function(t){var e=this.__data__,r=Rt(e,t);return r<0?void 0:e[r][1]},jt.prototype.has=function(t){return Rt(this.__data__,t)>-1},jt.prototype.set=function(t,e){var r=this.__data__,n=Rt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},mt.prototype.clear=function(){this.__data__={hash:new gt,map:new(it||jt),string:new gt}},mt.prototype.delete=function(t){return $t(this,t).delete(t)},mt.prototype.get=function(t){return $t(this,t).get(t)},mt.prototype.has=function(t){return $t(this,t).has(t)},mt.prototype.set=function(t,e){return $t(this,t).set(t,e),this},Ot.prototype.add=Ot.prototype.push=function(t){return this.__data__.set(t,n),this},Ot.prototype.has=function(t){return this.__data__.has(t)},wt.prototype.clear=function(){this.__data__=new jt},wt.prototype.delete=function(t){return this.__data__.delete(t)},wt.prototype.get=function(t){return this.__data__.get(t)},wt.prototype.has=function(t){return this.__data__.has(t)},wt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof jt){var n=r.__data__;if(!it||n.length<199)return n.push([t,e]),this;r=this.__data__=new mt(n)}return r.set(t,e),this};var Et,Pt,Tt=(Et=function(t,e){return t&&xt(t,e,fe)},function(t,e){if(null==t)return t;if(!re(t))return Et(t,e);for(var r=t.length,n=Pt?r:-1,o=Object(t);(Pt?n--:++n<r)&&!1!==e(o[n],n,o););return t}),xt=function(t){return function(e,r,n){for(var o=-1,u=Object(e),i=n(e),a=i.length;a--;){var c=i[t?a:++o];if(!1===r(u[c],c,u))break}return e}}();function Lt(t,e){for(var r=0,n=(e=qt(e,t)?[e]:Nt(e)).length;null!=t&&r<n;)t=t[Wt(e[r++])];return r&&r==n?t:void 0}function Dt(t,e){return null!=t&&e in Object(t)}function Mt(t,e,r,n,o){return t===e||(null==t||null==e||!ue(t)&&!ie(e)?t!==t&&e!==e:function(t,e,r,n,o,l){var v=ee(t),g=ee(e),O=i,w=i;v||(O=(O=Ut(t))==u?h:O);g||(w=(w=Ut(e))==u?h:w);var A=O==h&&!G(t),R=w==h&&!G(e),S=O==w;if(S&&!A)return l||(l=new wt),v||ce(t)?kt(t,e,r,n,o,l):function(t,e,r,n,o,u,i){switch(r){case m:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case j:return!(t.byteLength!=e.byteLength||!n(new et(t),new et(e)));case a:case c:case p:return Zt(+t,+e);case f:return t.name==e.name&&t.message==e.message;case d:case _:return t==e+"";case s:var l=U;case y:var h=2&u;if(l||(l=I),t.size!=e.size&&!h)return!1;var v=i.get(t);if(v)return v==e;u|=1,i.set(t,e);var g=kt(l(t),l(e),n,o,u,i);return i.delete(t),g;case b:if(_t)return _t.call(t)==_t.call(e)}return!1}(t,e,O,r,n,o,l);if(!(2&o)){var E=A&&J.call(t,"__wrapped__"),P=R&&J.call(e,"__wrapped__");if(E||P){var T=E?t.value():t,x=P?e.value():e;return l||(l=new wt),r(T,x,n,o,l)}}if(!S)return!1;return l||(l=new wt),function(t,e,r,n,o,u){var i=2&o,a=fe(t),c=a.length,f=fe(e).length;if(c!=f&&!i)return!1;var l=c;for(;l--;){var s=a[l];if(!(i?s in e:J.call(e,s)))return!1}var p=u.get(t);if(p&&u.get(e))return p==e;var h=!0;u.set(t,e),u.set(e,t);var v=i;for(;++l<c;){var d=t[s=a[l]],y=e[s];if(n)var _=i?n(y,d,s,e,t,u):n(d,y,s,t,e,u);if(!(void 0===_?d===y||r(d,y,n,o,u):_)){h=!1;break}v||(v="constructor"==s)}if(h&&!v){var b=t.constructor,g=e.constructor;b==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof g&&g instanceof g||(h=!1)}return u.delete(t),u.delete(e),h}(t,e,r,n,o,l)}(t,e,Mt,r,n,o))}function Bt(t){return!(!ue(t)||function(t){return!!X&&X in t}(t))&&(ne(t)||G(t)?Z:E).test(Kt(t))}function Ft(t){return"function"==typeof t?t:null==t?le:"object"==typeof t?ee(t)?function(t,e){if(qt(t)&&zt(e))return Vt(Wt(t),e);return function(r){var n=function(t,e,r){var n=null==t?void 0:Lt(t,e);return void 0===n?r:n}(r,t);return void 0===n&&n===e?function(t,e){return null!=t&&function(t,e,r){e=qt(e,t)?[e]:Nt(e);var n,o=-1,u=e.length;for(;++o<u;){var i=Wt(e[o]);if(!(n=null!=t&&r(t,i)))break;t=t[i]}if(n)return n;return!!(u=t?t.length:0)&&oe(u)&&It(i,u)&&(ee(t)||te(t))}(t,e,Dt)}(r,t):Mt(e,n,void 0,3)}}(t[0],t[1]):function(t){var e=function(t){var e=fe(t),r=e.length;for(;r--;){var n=e[r],o=t[n];e[r]=[n,o,zt(o)]}return e}(t);if(1==e.length&&e[0][2])return Vt(e[0][0],e[0][1]);return function(r){return r===t||function(t,e,r,n){var o=r.length,u=o,i=!n;if(null==t)return!u;for(t=Object(t);o--;){var a=r[o];if(i&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++o<u;){var c=(a=r[o])[0],f=t[c],l=a[1];if(i&&a[2]){if(void 0===f&&!(c in t))return!1}else{var s=new wt;if(n)var p=n(f,l,c,t,e,s);if(!(void 0===p?Mt(l,f,n,3,s):p))return!1}}return!0}(r,t,e)}}(t):function(t){return qt(t)?(e=Wt(t),function(t){return null==t?void 0:t[e]}):function(t){return function(e){return Lt(e,t)}}(t);var e}(t)}function Ct(t){if(!function(t){var e=t&&t.constructor,r="function"==typeof e&&e.prototype||W;return t===r}(t))return ot(t);var e=[];for(var r in Object(t))J.call(t,r)&&"constructor"!=r&&e.push(r);return e}function Nt(t){return ee(t)?t:Qt(t)}function kt(t,e,r,n,o,u){var i=2&o,a=t.length,c=e.length;if(a!=c&&!(i&&c>a))return!1;var f=u.get(t);if(f&&u.get(e))return f==e;var l=-1,s=!0,p=1&o?new Ot:void 0;for(u.set(t,e),u.set(e,t);++l<a;){var h=t[l],v=e[l];if(n)var d=i?n(v,h,l,e,t,u):n(h,v,l,t,e,u);if(void 0!==d){if(d)continue;s=!1;break}if(p){if(!$(e,(function(t,e){if(!p.has(e)&&(h===t||r(h,t,n,o,u)))return p.add(e)}))){s=!1;break}}else if(h!==v&&!r(h,v,n,o,u)){s=!1;break}}return u.delete(t),u.delete(e),s}function $t(t,e){var r=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?r["string"==typeof e?"string":"hash"]:r.map}function Gt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Bt(r)?r:void 0}var Ut=function(t){return Y.call(t)};function It(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||P.test(t))&&t>-1&&t%1==0&&t<e}function qt(t,e){if(ee(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!ae(t))||(w.test(t)||!O.test(t)||null!=e&&t in Object(e))}function zt(t){return t===t&&!ue(t)}function Vt(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}}(ut&&Ut(new ut(new ArrayBuffer(1)))!=m||it&&Ut(new it)!=s||at&&Ut(at.resolve())!=v||ct&&Ut(new ct)!=y||ft&&Ut(new ft)!=g)&&(Ut=function(t){var e=Y.call(t),r=e==h?t.constructor:void 0,n=r?Kt(r):void 0;if(n)switch(n){case st:return m;case pt:return s;case ht:return v;case vt:return y;case dt:return g}return e});var Qt=Yt((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(ae(t))return bt?bt.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(e);var r=[];return A.test(t)&&r.push(""),t.replace(R,(function(t,e,n,o){r.push(n?o.replace(S,"$1"):e||t)})),r}));function Wt(t){if("string"==typeof t||ae(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Kt(t){if(null!=t){try{return H.call(t)}catch(e){}try{return t+""}catch(e){}}return""}var Xt,Ht,Jt=(Xt=function(t,e,r){J.call(t,r)?t[r].push(e):t[r]=[e]},function(t,e){var r=ee(t)?k:St,n=Ht?Ht():{};return r(t,Xt,Ft(e),n)});function Yt(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function r(){var n=arguments,o=e?e.apply(this,n):n[0],u=r.cache;if(u.has(o))return u.get(o);var i=t.apply(this,n);return r.cache=u.set(o,i),i};return r.cache=new(Yt.Cache||mt),r}function Zt(t,e){return t===e||t!==t&&e!==e}function te(t){return function(t){return ie(t)&&re(t)}(t)&&J.call(t,"callee")&&(!rt.call(t,"callee")||Y.call(t)==u)}Yt.Cache=mt;var ee=Array.isArray;function re(t){return null!=t&&oe(t.length)&&!ne(t)}function ne(t){var e=ue(t)?Y.call(t):"";return e==l||"[object GeneratorFunction]"==e}function oe(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}function ue(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ie(t){return!!t&&"object"==typeof t}function ae(t){return"symbol"==typeof t||ie(t)&&Y.call(t)==b}var ce=N?function(t){return function(e){return t(e)}}(N):function(t){return ie(t)&&oe(t.length)&&!!T[Y.call(t)]};function fe(t){return re(t)?At(t):Ct(t)}function le(t){return t}r.exports=Jt}).call(this,r(1),r(2)(t))},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}t.exports=r},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,e,r){return(u=o()?Reflect.construct:function(t,e,r){var o=[null];o.push.apply(o,e);var u=new(Function.bind.apply(t,o));return r&&n(u,r.prototype),u}).apply(null,arguments)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(e);var c=r(0),f=r.n(c);onmessage=function(t){var e=t.data;if(7===Object.entries(e).length){var r=e.category,n=e.offense,o=e.age,i=e.race,c=e.sex,l=e.borough,s=[e.suppliedData].map((function(t){return t.filter((function(t){return!(!r.includes(t.LAW_CAT_CD)&&0!==r.length||!n.includes(t.OFNS_DESC)&&0!==n.length||!o.includes(t.AGE_GROUP)&&0!==o.length||!i.includes(t.PERP_RACE)&&0!==i.length||!c.includes(t.PERP_SEX)&&0!==c.length||!i.includes(t.PERP_RACE)&&0!==i.length||!l.includes("K"===t.ARREST_BORO&&Number(t.Latitude)>40.77?"B":"M"===t.ARREST_BORO&&Number(t.Longitude)>-73.920961&&Number(t.Latitude)<40.800709?"Q":"B"===t.ARREST_BORO&&Number(t.Latitude)<40.697465?"K":"B"===t.ARREST_BORO&&Number(t.Latitude)>40.796669&&Number(t.Longitude)<-73.932786||"B"===t.ARREST_BORO&&Number(t.Latitude)<40.796669&&Number(t.Longitude)<-73.98||"Q"===t.ARREST_BORO&&Number(t.Longitude)<-73.962745?"M":"Q"===t.ARREST_BORO&&Number(t.Longitude)<-73.878559&&Number(t.Latitude)>40.787907?"B":t.ARREST_BORO)&&0!==l.length)}))}));postMessage({assignFilteredData:s})}else{var p=e.ageObj,h=e.raceObj,v=e.categoryObj,d=e.sexObj,y=e.boroughObj,_=function(t,e,r){var n=function(t){return"Date("+t[2]+", "+(t[0]-1)+", "+Number(t[1]).toString()+", 0, 0, 0, 0)"},o=f()(r,"date"),i=[],c=function(r){var u=r?r.split("/"):null;if("race"===t){var a=function(t){return t.split(" ").map((function(t){return t[0].toUpperCase()+t.slice(1).toLowerCase()})).join(" ").split("/").map((function(t){return t[0].toUpperCase()+t.slice(1,t.indexOf(" ")).toLowerCase()+t.slice(t.indexOf(" "))})).join("/")};i.push([n(u),e.map((function(e){var n=function(t){return a(t)}(e);return o[r].filter((function(e){return a(e[t])===n})).length}))].flat())}else if("category"===t){var c=e.filter((function(t){return"F"===t||"M"===t||"V"===t}));i.push([n(u),c.map((function(e){var n,u="F"===(n=e)?"Felony":"M"===n?"Misdemeanor":"Violation";return o[r].filter((function(e){return e[t]===u})).length}))].flat())}else"sex"===t?i.push([n(u),e.map((function(e){var n="F"===e?"Female":"Male";return o[r].filter((function(e){return e[t]===n})).length}))].flat()):i.push([n(u),e.map((function(e){return o[r].filter((function(r){return r[t]===e})).length}))].flat())};for(var l in o)c(l);return i.sort((function(t,e){var r=t[0].split(/[(),]+/),n=u(Date,a(r.slice(1,r.length))),o=e[0].split(/[(),]+/);return n-u(Date,a(o.slice(1,o.length)))}))};postMessage({ageGroupTimelineGraphData:_("age_group",p.unique,p.data.flat()),raceTimelineGraphData:_("race",h.unique,h.data.flat()),categoryTimelineGraphData:_("category",v.unique,v.data.flat()),genderTimelineGraphData:_("sex",d.unique,d.data.flat()),boroughTimelineGraphData:_("borough",y.unique,y.data.flat())})}}}]);
//# sourceMappingURL=setFilterAndTimelineGraphWorkers.b83ccf22.worker.js.map