(function(t){function e(e){for(var n,a,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({About:"About",Career:"Career",Home:"Home",Works:"Works"}[t]||t)+"."+{About:"012765f3",Career:"a25e0b2f",Home:"f792b3b9",Works:"150c02b1"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={About:1,Home:1,Works:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({About:"About",Career:"Career",Home:"Home",Works:"Works"}[t]||t)+"."+{About:"10919e90",Career:"31d6cfe0",Home:"0e433876",Works:"c9551523"}[t]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],p.parentNode.removeChild(p),r(s)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var p=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},4408:function(t,e,r){"use strict";var n=r("5b43"),a=r.n(n);a.a},"53bf":function(t,e,r){"use strict";var n=r("5e6c"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue"},[r("Header"),r("MyProfile"),r("div",{staticClass:"layer"},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1),r("Footer")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"l-h"},[r("div",{staticClass:"l-h__in"},[r("div",{staticClass:"logo"},[r("router-link",{staticClass:"logo__link",attrs:{to:"/"}},[r("i",{staticClass:"fas fa-home"})])],1),r("nav",{staticClass:"nav"},[r("ul",{staticClass:"nav-list"},[r("li",{staticClass:"nav__item"},[r("router-link",{staticClass:"nav__link",attrs:{to:"/about"}},[r("span",{staticClass:"nav__txt"},[t._v("About")])])],1),r("li",{staticClass:"nav__item"},[r("router-link",{staticClass:"nav__link",attrs:{to:"/works"}},[r("span",{staticClass:"nav__txt"},[t._v("Works")])])],1),r("li",{staticClass:"nav__item"},[r("router-link",{staticClass:"nav__link",attrs:{to:"/career"}},[r("span",{staticClass:"nav__txt"},[t._v("Career")])])],1)])])])])},i=[],c={data:function(){return{}}},l=c,u=(r("4408"),r("2877")),f=Object(u["a"])(l,s,i,!1,null,"399ee3c9",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile"},[n("div",{staticClass:"profile__in"},[n("div",{staticClass:"profile__main"},[n("h1",{staticClass:"ttl"},t._l(t.chars,(function(e,r){return n("span",{key:r,staticClass:"ttl__char",class:["ttl__char-delay"+r]},[t._v(t._s(e))])})),0),n("p",{staticClass:"profile__img-wrap",on:{click:t.changeImage}},[n("img",{staticClass:"profile__img",attrs:{src:r("bfca"),alt:"プロフィール画像"}})])]),n("transition",[n("MyProfileTxt")],1)],1)])},h=[],m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-des"},[r("h2",{staticClass:"profile-des__heading"},[t._v(t._s(t.greeting))]),"/"===this.$route.path?r("p",{staticClass:"profile-des__txt"},[t._v(" 大学の時にプログラミングに興味を持ち学んできました。"),r("br"),t._v(" フロントエンドエンジニアとしてさらに成長していきたいと思っています。"),r("br"),t._v(" 様々なものに触れてより良いものを作れるよう楽しんで作っていきたいと思います。 ")]):"/about"===this.$route.path?r("p",{staticClass:"profile-des__txt"},[t._v(" このページでは、私についての情報を載せております。"),r("br"),t._v(" 何かありましたら、下記のメールアドレスからご連絡をお願いいたします。 ")]):"/works"===this.$route.path?r("p",{staticClass:"profile-des__txt"},[t._v(" このページではこれまでに作った作品を載せております。"),r("br"),t._v(" ここには載せられないものもありますので、直接お会いした時に話をさせていただければと思います。 ")]):"/career"===this.$route.path?r("p",{staticClass:"profile-des__txt"},[t._v(" このページではこれまでの経歴や所有資格情報、スキルの情報を載せております。"),r("br"),t._v(" 詳細につきましては直接お会いした時にお話しさせていただければと思います。 ")]):t._e()])},_=[],v={data:function(){return{greeting:"こんにちは、角川拓夢です。"}}},g=v,b=(r("ade8"),Object(u["a"])(g,m,_,!1,null,"eed08a28",null)),C=b.exports,y={data:function(){return{greeting:"こんにちは、角川拓夢です。",chars:"My Portfolio",imgFlag:0,colorList:["#f0e68c","#b0e0e6","#008080","#ffc0cb","#32cd32","#9370db","#8b0000"],colorNum:0}},watch:{$route:function(t,e){t.path!==e.path&&this.changeBg(t.path)}},mounted:function(){this.changeBg()},methods:{changeImage:function(t){0===this.imgFlag?(this.imgFlag=1,t.currentTarget.style.transform="rotateY(360deg)",t.currentTarget.childNodes[0].src=r("9a8f")):1===this.imgFlag&&(this.imgFlag=0,t.currentTarget.style.transform="rotateY(0deg)",t.currentTarget.childNodes[0].src=r("bfca"))},changeBg:function(t){var e=this.$el;this.selectNum(t),e.style.backgroundColor=this.colorList[this.colorNum]},selectNum:function(){var t=this.colorNum,e=Math.floor(7*Math.random());t===e?this.selectNum():this.colorNum=e}},components:{MyProfileTxt:C}},k=y,w=(r("d218"),Object(u["a"])(k,d,h,!1,null,"1c1bc1d1",null)),x=w.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"l-f"},[r("p",{staticClass:"copy"},[t._v("©角川拓夢")])])}],A={},E=A,P=(r("81e6"),Object(u["a"])(E,O,j,!1,null,"ad92f094",null)),N=P.exports,T={data:function(){return{heading:"Hello Vue",thiscomp:""}},components:{Header:p,MyProfile:x,Footer:N},methods:{}},$=T,H=(r("53bf"),Object(u["a"])($,a,o,!1,null,"94e1af1c",null)),M=H.exports,S=(r("d3b7"),r("8c4f")),W=function(){return r.e("Home").then(r.bind(null,"bb51"))},F=function(){return r.e("About").then(r.bind(null,"f820"))},L=function(){return r.e("Works").then(r.bind(null,"1822"))},B=function(){return r.e("Career").then(r.bind(null,"6990"))};n["a"].use(S["a"]);var I=new S["a"]({routes:[{path:"/",component:W},{path:"/about",component:F},{path:"/works",component:L},{path:"/career",component:B},{path:"*",redirect:"/"}]});n["a"].config.productionTip=!1,new n["a"]({router:I,render:function(t){return t(M)}}).$mount("#app")},"5b43":function(t,e,r){},"5e6c":function(t,e,r){},"81e6":function(t,e,r){"use strict";var n=r("b569"),a=r.n(n);a.a},"9a8f":function(t,e,r){t.exports=r.p+"img/cat04.44a30a8e.png"},ade8:function(t,e,r){"use strict";var n=r("d736"),a=r.n(n);a.a},b569:function(t,e,r){},bfca:function(t,e,r){t.exports=r.p+"img/cat02.5d3a9feb.png"},d218:function(t,e,r){"use strict";var n=r("de85"),a=r.n(n);a.a},d736:function(t,e,r){},de85:function(t,e,r){}});
//# sourceMappingURL=app.f9c427ae.js.map