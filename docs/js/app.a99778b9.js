(function(t){function a(a){for(var s,l,c=a[0],i=a[1],o=a[2],_=0,b=[];_<c.length;_++)l=c[_],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&b.push(r[l][0]),r[l]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);u&&u(a);while(b.length)b.shift()();return n.push.apply(n,o||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,c=1;c<e.length;c++){var i=e[c];0!==r[i]&&(s=!1)}s&&(n.splice(a--,1),t=l(l.s=e[0]))}return t}var s={},r={app:0},n=[];function l(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=s,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)l.d(e,s,function(a){return t[a]}.bind(null,s));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var u=i;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0490":function(t,a,e){"use strict";var s=e("6e53"),r=e.n(s);r.a},"14b6":function(t,a,e){},"188a":function(t,a,e){"use strict";var s=e("7d47"),r=e.n(s);r.a},"210b":function(t,a,e){"use strict";var s=e("b21a"),r=e.n(s);r.a},"2cc7":function(t,a,e){"use strict";var s=e("ebcb"),r=e.n(s);r.a},"350a":function(t,a,e){},"433d":function(t,a,e){"use strict";var s=e("350a"),r=e.n(s);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"vue"},[e("Header"),e("MyProfile"),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1),e("Footer")],1)},n=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"l-h"},[e("div",{staticClass:"l-h__in"},[e("div",{staticClass:"logo"},[e("router-link",{staticClass:"logo__link",attrs:{to:"/"}},[e("i",{staticClass:"fas fa-home"})])],1),e("nav",{staticClass:"nav"},[e("ul",{staticClass:"nav-list"},[e("li",{staticClass:"nav__item"},[e("router-link",{staticClass:"nav__link",attrs:{to:"/about"}},[e("span",{staticClass:"nav__txt"},[t._v("About")])])],1),e("li",{staticClass:"nav__item"},[e("router-link",{staticClass:"nav__link",attrs:{to:"/works"}},[e("span",{staticClass:"nav__txt"},[t._v("Works")])])],1),e("li",{staticClass:"nav__item"},[e("router-link",{staticClass:"nav__link",attrs:{to:"/career"}},[e("span",{staticClass:"nav__txt"},[t._v("Career")])])],1)])])])])},c=[],i={data:function(){return{}}},o=i,u=(e("433d"),e("2877")),_=Object(u["a"])(o,l,c,!1,null,"6eb4e65c",null),b=_.exports,f=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"profile"},[s("div",{staticClass:"profile__in"},[s("div",{staticClass:"profile__main"},[s("h1",{staticClass:"ttl"},t._l(t.chars,(function(a,e){return s("span",{key:e,staticClass:"ttl__char",class:["ttl__char-delay"+e]},[t._v(t._s(a))])})),0),s("p",{staticClass:"profile__img-wrap",on:{click:t.changeImage}},[s("img",{staticClass:"profile__img",attrs:{src:e("bfca"),alt:"プロフィール画像"}})])]),s("transition",[s("MyProfileTxt")],1)],1)])},d=[],h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"profile-des"},[e("h2",{staticClass:"profile-des__heading"},[t._v(t._s(t.greeting))]),"/"===this.$route.path?e("p",{staticClass:"profile-des__txt"},[t._v(" 大学の時にプログラミングに興味を持ち学んできました。"),e("br"),t._v(" フロントエンドエンジニアとしてさらに成長していきたいと思っています。"),e("br"),t._v(" 様々なものに触れてより良いものを作れるよう楽しんで作っていきたいと思います。 ")]):"/about"===this.$route.path?e("p",{staticClass:"profile-des__txt"},[t._v(" このページでは、私についての情報を載せております。"),e("br"),t._v(" 何かありましたら、下記のメールアドレスからご連絡をお願いいたします。 ")]):"/works"===this.$route.path?e("p",{staticClass:"profile-des__txt"},[t._v(" このページではこれまでに作った作品を載せております。"),e("br"),t._v(" ここには載せられないものもありますので、直接お会いした時に話をさせていただければと思います。 ")]):"/career"===this.$route.path?e("p",{staticClass:"profile-des__txt"},[t._v(" このページではこれまでの経歴や所有資格情報、スキルの情報を載せております。"),e("br"),t._v(" 詳細につきましては直接お会いした時にお話しさせていただければと思います。 ")]):t._e()])},p=[],v={data:function(){return{greeting:"こんにちは、角川拓夢です。"}}},m=v,C=(e("938b"),Object(u["a"])(m,h,p,!1,null,"17bab995",null)),g=C.exports,x={data:function(){return{greeting:"こんにちは、角川拓夢です。",chars:"My Portfolio",imgFlag:0,colorList:["#f0e68c","#b0e0e6","#008080","#ffc0cb","#32cd32","#9370db","#8b0000"],colorNum:0}},watch:{$route:function(t,a){t.path!==a.path&&this.changeBg(t.path)}},mounted:function(){this.changeBg()},methods:{changeImage:function(t){0===this.imgFlag?(this.imgFlag=1,t.currentTarget.style.transform="rotateY(360deg)",t.currentTarget.childNodes[0].src=e("9a8f")):1===this.imgFlag&&(this.imgFlag=0,t.currentTarget.style.transform="rotateY(0deg)",t.currentTarget.childNodes[0].src=e("bfca"))},changeBg:function(t){var a=this.$el;"/about"===t?a.style.backgroundColor="#222":(this.selectNum(t),a.style.backgroundColor=this.colorList[this.colorNum])},selectNum:function(){var t=this.colorNum,a=Math.floor(7*Math.random());t===a?this.selectNum():this.colorNum=a}},components:{MyProfileTxt:g}},y=x,k=(e("188a"),Object(u["a"])(y,f,d,!1,null,"899d86ba",null)),w=k.exports,$=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"l-f"},[e("p",{staticClass:"copy"},[t._v("©角川拓夢")])])}],O={},j=O,M=(e("639e"),Object(u["a"])(j,$,E,!1,null,"4827add1",null)),P=M.exports,N={data:function(){return{heading:"Hello Vue",thiscomp:""}},components:{Header:b,MyProfile:w,Footer:P},methods:{}},T=N,F=(e("eeec"),Object(u["a"])(T,r,n,!1,null,"05a30039",null)),I=F.exports,S=e("8c4f"),B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._v(" Home ")])},H=[],L={},W=Object(u["a"])(L,B,H,!1,null,null,null),A=W.exports,J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("h2",{staticClass:"about__ttl"},[t._v("About")]),e("table",{staticClass:"about-table"},[e("tbody",{staticClass:"about-table__tbody"},[e("tr",{staticClass:"about-table__tr"},[t._m(0),e("td",{staticClass:"about-table__td"},[e("ruby",[e("rb",[t._v("角川 拓夢")]),e("rp",[t._v("(")]),e("rt",[t._v("すみかわ たくむ")]),e("rp",[t._v(")")])],1)])]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9)])])])},Y=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("th",{staticClass:"about-table__th"},[e("span",{staticClass:"about-table__th-txt"},[t._v("名前")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"about-table__tr"},[e("th",{staticClass:"about-table__th"},[e("span",{staticClass:"about-table__th-txt"},[t._v("生年月日")])]),e("td",{staticClass:"about-table__td"},[t._v("1997年10月11日")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"about-table__tr"},[e("th",{staticClass:"about-table__th"},[e("span",{staticClass:"about-table__th-txt"},[t._v("年齢")])]),e("td",{staticClass:"about-table__td"},[t._v("22歳")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"about-table__tr"},[e("th",{staticClass:"about-table__th"},[e("span",{staticClass:"about-table__th-txt"},[t._v("血液型")])]),e("td",{staticClass:"about-table__td"},[t._v("A型")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"about-table__tr"},[e("th",{staticClass:"about-table__th"},[e("span",{staticClass:"about-table__th-txt"},[t._v("干支")])]),e("td",{staticClass:"about-table__td"},[t._v("丑")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"about-table__tr"},[e("th",{staticClass:"about-table__th"},[e("span",{staticClass:"about-table__th-txt"},[t._v("星座")])]),e("td",{staticClass:"about-table__td"},[t._v("てんびん座")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"about-table__tr"},[e("th",{staticClass:"about-table__th"},[e("span",{staticClass:"about-table__th-txt"},[t._v("出身地")])]),e("td",{staticClass:"about-table__td"},[t._v("愛媛県")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"about-table__tr"},[e("th",{staticClass:"about-table__th"},[e("span",{staticClass:"about-table__th-txt"},[t._v("趣味")])]),e("td",{staticClass:"about-table__td"},[t._v("書店に行くこと")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"about-table__tr"},[e("th",{staticClass:"about-table__th"},[e("span",{staticClass:"about-table__th-txt"},[t._v("好きなスポーツ")])]),e("td",{staticClass:"about-table__td"},[t._v("サッカー")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"about-table__tr"},[e("th",{staticClass:"about-table__th"},[e("span",{staticClass:"about-table__th-txt"},[t._v("メールアドレス")])]),e("td",{staticClass:"about-table__td"},[e("a",{attrs:{href:"mailto:sumikawa.web@gmail.com",target:"_blank",rel:"noopener"}},[t._v("sumikawa.web@gmail.com")])])])}],V={},q=V,z=(e("0490"),Object(u["a"])(q,J,Y,!1,null,"4e32e80c",null)),D=z.exports,G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"works"},[e("h2",{staticClass:"works__ttl"},[t._v("Works")]),e("ul",{staticClass:"works-list"},t._l(t.cards,(function(t){return e("li",{key:t.id,staticClass:"works-list__item"},[e("WorksCard",{attrs:{card:t}})],1)})),0)])},K=[],Q=(e("4160"),e("159b"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("a",{staticClass:"card__link",attrs:{href:t.card.url,target:"_blank"}},[e("img",{staticClass:"card__img",attrs:{src:t.card.img}}),e("div",{staticClass:"card__txt"},[e("h3",{staticClass:"card__ttl"},[e("span",{staticClass:"card__ttl-in"},[t._v(t._s(t.card.title))])]),e("p",{staticClass:"card__date"},[t._v(t._s(t.card.date))])])])])}),R=[],U={props:["card"],data:function(){return{}}},X=U,Z=(e("2cc7"),Object(u["a"])(X,Q,R,!1,null,"aaea5606",null)),tt=Z.exports,at={data:function(){return{cardNum:"0",cards:[{id:1,url:"https://google.com",title:"作品1",img:e("cf05"),date:"2020年2月2日"},{id:2,title:"作品2",img:e("cf05"),date:"2020年10月11日"},{id:3,url:"",title:"作品3",img:e("cf05"),date:"2020年5月5日"}]}},mounted:function(){var t=this,a=document.getElementsByClassName("works-list__item"),e={root:null,rootMargin:"-20px 0px -100px 0px"};a.forEach((function(a){return t.onIntersect(a,e)}))},methods:{onIntersect:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=new IntersectionObserver(this.addClass,a);e.observe(t)},addClass:function(t){t.forEach((function(t){t.isIntersecting?t.target.classList.add("fadeup"):t.target.classList.remove("fadeup")}))}},components:{WorksCard:tt}},et=at,st=(e("210b"),Object(u["a"])(et,G,K,!1,null,"4eedd930",null)),rt=st.exports,nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._v(" career ")])},lt=[],ct={},it=Object(u["a"])(ct,nt,lt,!1,null,null,null),ot=it.exports;s["a"].use(S["a"]);var ut=new S["a"]({routes:[{path:"/",component:A},{path:"/about",component:D},{path:"/works",component:rt},{path:"/career",component:ot},{path:"*",redirect:"/"}]});s["a"].config.productionTip=!1,new s["a"]({router:ut,render:function(t){return t(I)}}).$mount("#app")},"639e":function(t,a,e){"use strict";var s=e("cf93"),r=e.n(s);r.a},"6e53":function(t,a,e){},"7d47":function(t,a,e){},"890e":function(t,a,e){},"938b":function(t,a,e){"use strict";var s=e("890e"),r=e.n(s);r.a},"9a8f":function(t,a,e){t.exports=e.p+"img/cat04.44a30a8e.png"},b21a:function(t,a,e){},bfca:function(t,a,e){t.exports=e.p+"img/cat02.5d3a9feb.png"},cf05:function(t,a,e){t.exports=e.p+"img/logo.82b9c7a5.png"},cf93:function(t,a,e){},ebcb:function(t,a,e){},eeec:function(t,a,e){"use strict";var s=e("14b6"),r=e.n(s);r.a}});
//# sourceMappingURL=app.a99778b9.js.map