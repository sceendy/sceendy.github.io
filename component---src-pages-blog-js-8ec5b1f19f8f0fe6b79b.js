(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{243:function(e,t,n){"use strict";n.r(t),n(135);var a=n(281),r=n(1),o=n.n(r),i=n(260),l=n(256);t.default=function(e){var t=e.location;return o.a.createElement(i.b,{query:"3665311183",render:function(e){var n=e.allMarkdownRemark.edges,a=t&&"undefined"!==t,r=[],d=[],c=[],f=[],s=[],u=[];return n.forEach(function(e){var t=e.node;switch(t.fields.year){case 2019:r.push({node:t});break;case 2018:d.push({node:t});break;case 2017:c.push({node:t});break;case 2016:f.push({node:t});break;case 2015:s.push({node:t});break;case 2014:u.push({node:t})}}),o.a.createElement(l.a,{showFooter:a,title:"Blog Posts"},a&&o.a.createElement("div",null,o.a.createElement("ul",{className:"breadcrumbs"},o.a.createElement("li",null,o.a.createElement(i.a,{to:"/"},"Home")),o.a.createElement("li",null,"Blog")),o.a.createElement("h2",null,"Blog Posts")),!a&&o.a.createElement("h2",null,"blog posts"),o.a.createElement("strong",null,"2019"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},r.map(function(e,t){var n=e.node;return o.a.createElement("li",{key:t},o.a.createElement(i.a,{to:n.fields.slug},o.a.createElement("div",null,n.frontmatter.title),o.a.createElement("div",null,n.fields.date)))})),o.a.createElement("strong",null,"2018"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},d.map(function(e,t){var n=e.node;return o.a.createElement("li",{key:t},o.a.createElement(i.a,{to:n.fields.slug},o.a.createElement("div",null,n.frontmatter.title),o.a.createElement("div",null,n.fields.date)))})),a&&o.a.createElement("div",null,o.a.createElement("strong",null,"2017"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},c.map(function(e,t){var n=e.node;return o.a.createElement("li",{key:t},o.a.createElement(i.a,{to:n.fields.slug},o.a.createElement("div",null,n.frontmatter.title),o.a.createElement("div",null,n.fields.date)))})),o.a.createElement("strong",null,"2016"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},f.map(function(e,t){var n=e.node;return o.a.createElement("li",{key:t},o.a.createElement(i.a,{to:n.fields.slug},o.a.createElement("div",null,n.frontmatter.title),o.a.createElement("div",null,n.fields.date)))})),o.a.createElement("strong",null,"2015"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},s.map(function(e,t){var n=e.node;return o.a.createElement("li",{key:t},o.a.createElement(i.a,{to:n.fields.slug},o.a.createElement("div",null,n.frontmatter.title),o.a.createElement("div",null,n.fields.date)))})),o.a.createElement("strong",null,"2014"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},u.map(function(e,t){var n=e.node;return o.a.createElement("li",{key:t},o.a.createElement(i.a,{to:n.fields.slug},o.a.createElement("div",null,n.frontmatter.title),o.a.createElement("div",null,n.fields.date)))}))))},data:a})}},249:function(e,t,n){"use strict";var a=n(33);t.__esModule=!0,t.withPrefix=function(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)},t.navigateTo=t.replace=t.push=t.default=void 0;var r=a(n(261)),o=a(n(252)),i=a(n(269)),l=a(n(43)),d=a(n(85)),c=a(n(23)),f=a(n(1)),s=n(12),u=n(86),g=n(30),b={activeClassName:c.default.string,activeStyle:c.default.object,exact:c.default.bool,strict:c.default.bool,isActive:c.default.func,location:c.default.object},p=function(e){function t(t,n){var a;a=e.call(this)||this;var r=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0);var o=n.router.history.location,i=(0,g.createLocation)(t.to,null,null,o);return a.state={path:(0,g.createPath)(i),to:i,IOSupported:r,location:o},a.handleRef=a.handleRef.bind((0,d.default)((0,d.default)(a))),a}(0,l.default)(t,e),t.getDerivedStateFromProps=function(e,t){if(t.to===e.to)return null;var n=(0,g.createLocation)(e.to,null,null,t.location);return{path:(0,g.createPath)(n),to:n}};var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue(this.state.path)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue(r.state.to.pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e,t=this,n=this.props,a=n.onClick,l=n.onMouseEnter,d=(0,i.default)(n,["onClick","onMouseEnter"]);return e=(0,o.default)(b).some(function(e){return t.props[e]})?s.NavLink:s.Link,f.default.createElement(e,(0,r.default)({onMouseEnter:function(e){l&&l(e),___loader.hovering(t.state.path)},onClick:function(e){if(a&&a(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var n=t.state.path;if(n.split("#").length>1&&(n=n.split("#").slice(0,-1).join("")),n===window.location.pathname){var r=t.state.path.split("#").slice(1).join("#"),o=r?document.getElementById(r):null;return null!==o?(o.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___push(t.state.to)}return!0}},d,{to:this.state.to,innerRef:this.handleRef}))},t}(f.default.Component);p.propTypes=(0,r.default)({},b,{innerRef:c.default.func,onClick:c.default.func,to:c.default.oneOfType([c.default.string,c.default.object]).isRequired}),p.contextTypes={router:c.default.object};var m=(0,u.polyfill)(p);t.default=m;var y=function(e){window.___push(e)};t.push=y,t.replace=function(e){window.___replace(e)},t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),y(e)}},250:function(e,t){t.f={}.propertyIsEnumerable},251:function(e,t){t.f=Object.getOwnPropertySymbols},252:function(e,t,n){e.exports=n(266)},253:function(e,t,n){t.f=n(11)},254:function(e,t,n){var a=n(133),r=n(84).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,r)}},255:function(e,t,n){var a;e.exports=(a=n(279))&&a.default||a},256:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(23),i=n.n(o),l=n(280),d=n.n(l),c=n(257),f=n.n(c),s=(n(258),function(e){var t=e.children,n=e.showFooter,a=e.title;return r.a.createElement("div",null,r.a.createElement(d.a,{title:(n?a+" - ":"")+"Cindy - Front-end Engineer",meta:[{name:"description",content:"I build web applications using JavaScript."},{name:"keywords",content:"software engineer, front-end, web development, javascript, angular, react, front-end engineer, front-end dev"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("link",{rel:"icon",type:"image/png",href:f.a})),r.a.createElement("main",{style:n?{margin:"0 auto",maxWidth:"50.8rem",padding:"2.5rem 1.0875rem .05rem"}:{}},t),n&&r.a.createElement("footer",{className:"u--text-center"},r.a.createElement("p",null,"built using ",r.a.createElement("a",{href:"https://gatsbyjs.org/",rel:"noopener noreferrer",target:"_blank"},"gatsby v2"),r.a.createElement("br",null),"© 2018")))});s.propTypes={children:i.a.any,showFooter:i.a.bool,title:i.a.string},t.a=s},257:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFwSURBVHjavJfBrYMwDEDTry7Av/0rHYEV0hFYoRx7/BkBjj2GFTJCuwIjfK69lRGovxSkCDmJSU0sWQhDyKvt2s5hnmcRktfPzb2VoBd7LVavPkANaL8Yvp9XEZOjoMsvaBt4Lq1WoAp0onz0i7h5HdnclYuFFZwArdgm/wAlF0Dt+VgHegZtQAePJ1hyANu8t3F2E/Bv9U7F5QGJ2MzqfrQQsXXJObCbHBPXFYht2AtgQNwpkTCoFABKCEZPhpccIaAAGI9d5wKY3Pq+CoPOAbAUnckTCp0DYAwk2UcQW+pAbz3BCrG1ECluiJRKqGwD8kG0ewMs4WgCrVjuDRCD0DkAsLbstvA6VzfsPOWaFAZKM7ojzUkhEDplIKEAUH6JSQXgGkim1IUpAAXRxgbwQFxbIpNzbB3rRHR3sr/yHERII9qBcDYskZGbIic4G45cI1nHVBuSk1B5pqIt1fHjf0Fjj2ImUAvOgf6AyluAAQBrFE4nht1sxgAAAABJRU5ErkJggg=="},258:function(e,t,n){},260:function(e,t,n){"use strict";n.d(t,"b",function(){return f});var a=n(1),r=n.n(a),o=n(23),i=n.n(o),l=n(249),d=n.n(l);n.d(t,"a",function(){return d.a}),n(255);var c=r.a.createContext({}),f=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},261:function(e,t,n){var a=n(262);function r(){return e.exports=r=a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}e.exports=r},262:function(e,t,n){e.exports=n(263)},263:function(e,t,n){n(264),e.exports=n(13).Object.assign},264:function(e,t,n){var a=n(24);a(a.S+a.F,"Object",{assign:n(265)})},265:function(e,t,n){"use strict";var a=n(128),r=n(251),o=n(250),i=n(130),l=n(134),d=Object.assign;e.exports=!d||n(78)(function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach(function(e){t[e]=e}),7!=d({},e)[n]||Object.keys(d({},t)).join("")!=a})?function(e,t){for(var n=i(e),d=arguments.length,c=1,f=r.f,s=o.f;d>c;)for(var u,g=l(arguments[c++]),b=f?a(g).concat(f(g)):a(g),p=b.length,m=0;p>m;)s.call(g,u=b[m++])&&(n[u]=g[u]);return n}:d},266:function(e,t,n){n(267),e.exports=n(13).Object.keys},267:function(e,t,n){var a=n(130),r=n(128);n(268)("keys",function(){return function(e){return r(a(e))}})},268:function(e,t,n){var a=n(24),r=n(13),o=n(78);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],i={};i[e]=t(n),a(a.S+a.F*o(function(){n(1)}),"Object",i)}},269:function(e,t,n){var a=n(270),r=n(252);e.exports=function(e,t){if(null==e)return{};var n,o,i={},l=r(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(i[n]=e[n]);if(a){var d=a(e);for(o=0;o<d.length;o++)n=d[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},270:function(e,t,n){e.exports=n(271)},271:function(e,t,n){n(272),e.exports=n(13).Object.getOwnPropertySymbols},272:function(e,t,n){"use strict";var a=n(10),r=n(41),o=n(25),i=n(24),l=n(132),d=n(273).KEY,c=n(78),f=n(83),s=n(56),u=n(81),g=n(11),b=n(253),p=n(274),m=n(275),y=n(276),h=n(20),v=n(32),w=n(55),E=n(129),k=n(80),A=n(82),O=n(277),S=n(278),j=n(31),F=n(128),C=S.f,x=j.f,J=O.f,P=a.Symbol,I=a.JSON,R=I&&I.stringify,D=g("_hidden"),N=g("toPrimitive"),B={}.propertyIsEnumerable,_=f("symbol-registry"),T=f("symbols"),q=f("op-symbols"),M=Object.prototype,G="function"==typeof P,H=a.QObject,K=!H||!H.prototype||!H.prototype.findChild,U=o&&c(function(){return 7!=A(x({},"a",{get:function(){return x(this,"a",{value:7}).a}})).a})?function(e,t,n){var a=C(M,t);a&&delete M[t],x(e,t,n),a&&e!==M&&x(M,t,a)}:x,W=function(e){var t=T[e]=A(P.prototype);return t._k=e,t},Q=G&&"symbol"==typeof P.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof P},L=function(e,t,n){return e===M&&L(q,t,n),h(e),t=E(t,!0),h(n),r(T,t)?(n.enumerable?(r(e,D)&&e[D][t]&&(e[D][t]=!1),n=A(n,{enumerable:k(0,!1)})):(r(e,D)||x(e,D,k(1,{})),e[D][t]=!0),U(e,t,n)):x(e,t,n)},Y=function(e,t){h(e);for(var n,a=m(t=w(t)),r=0,o=a.length;o>r;)L(e,n=a[r++],t[n]);return e},V=function(e){var t=B.call(this,e=E(e,!0));return!(this===M&&r(T,e)&&!r(q,e))&&(!(t||!r(this,e)||!r(T,e)||r(this,D)&&this[D][e])||t)},z=function(e,t){if(e=w(e),t=E(t,!0),e!==M||!r(T,t)||r(q,t)){var n=C(e,t);return!n||!r(T,t)||r(e,D)&&e[D][t]||(n.enumerable=!0),n}},Z=function(e){for(var t,n=J(w(e)),a=[],o=0;n.length>o;)r(T,t=n[o++])||t==D||t==d||a.push(t);return a},X=function(e){for(var t,n=e===M,a=J(n?q:w(e)),o=[],i=0;a.length>i;)!r(T,t=a[i++])||n&&!r(M,t)||o.push(T[t]);return o};G||(l((P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var e=u(arguments.length>0?arguments[0]:void 0),t=function(n){this===M&&t.call(q,n),r(this,D)&&r(this[D],e)&&(this[D][e]=!1),U(this,e,k(1,n))};return o&&K&&U(M,e,{configurable:!0,set:t}),W(e)}).prototype,"toString",function(){return this._k}),S.f=z,j.f=L,n(254).f=O.f=Z,n(250).f=V,n(251).f=X,o&&!n(79)&&l(M,"propertyIsEnumerable",V,!0),b.f=function(e){return W(g(e))}),i(i.G+i.W+i.F*!G,{Symbol:P});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)g($[ee++]);for(var te=F(g.store),ne=0;te.length>ne;)p(te[ne++]);i(i.S+i.F*!G,"Symbol",{for:function(e){return r(_,e+="")?_[e]:_[e]=P(e)},keyFor:function(e){if(!Q(e))throw TypeError(e+" is not a symbol!");for(var t in _)if(_[t]===e)return t},useSetter:function(){K=!0},useSimple:function(){K=!1}}),i(i.S+i.F*!G,"Object",{create:function(e,t){return void 0===t?A(e):Y(A(e),t)},defineProperty:L,defineProperties:Y,getOwnPropertyDescriptor:z,getOwnPropertyNames:Z,getOwnPropertySymbols:X}),I&&i(i.S+i.F*(!G||c(function(){var e=P();return"[null]"!=R([e])||"{}"!=R({a:e})||"{}"!=R(Object(e))})),"JSON",{stringify:function(e){for(var t,n,a=[e],r=1;arguments.length>r;)a.push(arguments[r++]);if(n=t=a[1],(v(t)||void 0!==e)&&!Q(e))return y(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!Q(t))return t}),a[1]=t,R.apply(I,a)}}),P.prototype[N]||n(26)(P.prototype,N,P.prototype.valueOf),s(P,"Symbol"),s(Math,"Math",!0),s(a.JSON,"JSON",!0)},273:function(e,t,n){var a=n(81)("meta"),r=n(32),o=n(41),i=n(31).f,l=0,d=Object.isExtensible||function(){return!0},c=!n(78)(function(){return d(Object.preventExtensions({}))}),f=function(e){i(e,a,{value:{i:"O"+ ++l,w:{}}})},s=e.exports={KEY:a,NEED:!1,fastKey:function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,a)){if(!d(e))return"F";if(!t)return"E";f(e)}return e[a].i},getWeak:function(e,t){if(!o(e,a)){if(!d(e))return!0;if(!t)return!1;f(e)}return e[a].w},onFreeze:function(e){return c&&s.NEED&&d(e)&&!o(e,a)&&f(e),e}}},274:function(e,t,n){var a=n(10),r=n(13),o=n(79),i=n(253),l=n(31).f;e.exports=function(e){var t=r.Symbol||(r.Symbol=o?{}:a.Symbol||{});"_"==e.charAt(0)||e in t||l(t,e,{value:i.f(e)})}},275:function(e,t,n){var a=n(128),r=n(251),o=n(250);e.exports=function(e){var t=a(e),n=r.f;if(n)for(var i,l=n(e),d=o.f,c=0;l.length>c;)d.call(e,i=l[c++])&&t.push(i);return t}},276:function(e,t,n){var a=n(42);e.exports=Array.isArray||function(e){return"Array"==a(e)}},277:function(e,t,n){var a=n(55),r=n(254).f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?function(e){try{return r(e)}catch(e){return i.slice()}}(e):r(a(e))}},278:function(e,t,n){var a=n(250),r=n(80),o=n(55),i=n(129),l=n(41),d=n(131),c=Object.getOwnPropertyDescriptor;t.f=n(25)?c:function(e,t){if(e=o(e),t=i(t,!0),d)try{return c(e,t)}catch(e){}if(l(e,t))return r(!a.f.call(e,t),e[t])}},279:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(23),i=n.n(o),l=n(57),d=n(6),c=function(e){var t=e.location,n=d.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:n})};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},281:function(e){e.exports={data:{allMarkdownRemark:{totalCount:42,edges:[{node:{id:"d10fbff1-a0da-53bc-9d16-f926304e55ba",frontmatter:{title:"Front-end Friday: React Hooks"},fields:{slug:"blog/2019/01-25-2019-front-end-friday-react-hooks/",date:"Jan 25",year:2019}}},{node:{id:"b965c5b0-dc83-5fe2-93b4-3e2fed9acfa5",frontmatter:{title:"2018 in review"},fields:{slug:"blog/2018/12-31-2018-in-review/",date:"Dec 31",year:2018}}},{node:{id:"f47fa189-2f04-54ec-8f76-7a6a6c1dbe72",frontmatter:{title:"Extra Life 2018"},fields:{slug:"blog/2018/08-27-extra-life-2018/",date:"Aug 27",year:2018}}},{node:{id:"8e6540e6-61a4-5d97-9c5d-73a6c44f5079",frontmatter:{title:"Things I like doing in Austin"},fields:{slug:"blog/2018/07-20-what-i-like-doing-in-austin/",date:"Jul 20",year:2018}}},{node:{id:"f291d12c-56d0-5ec8-945b-1ac243b66fdd",frontmatter:{title:"Book List 2018"},fields:{slug:"blog/2018/05-19-book-list-2018/",date:"May 19",year:2018}}},{node:{id:"d4ecc502-c4ae-5c49-a9fb-7216c02b4a48",frontmatter:{title:"Front-end Friday: Launching a small app"},fields:{slug:"blog/2018/04-27-front-end-friday-public-project/",date:"Apr 27",year:2018}}},{node:{id:"c8d22100-b4f8-5ea4-a3e9-6ad84764b8aa",frontmatter:{title:"Front-end Friday: How I got started in web dev"},fields:{slug:"blog/2018/02-26-front-end-friday-how-i-got-started/",date:"Feb 26",year:2018}}},{node:{id:"c8501e90-3bf6-56cf-a90d-ba00583b501a",frontmatter:{title:"Front-end Friday: Design systems"},fields:{slug:"blog/2018/02-02-front-end-friday-design-systems/",date:"Feb 02",year:2018}}},{node:{id:"b27942f7-18d9-566d-a2c5-d3b14f58a3f7",frontmatter:{title:"New project: ATX Paw Finder"},fields:{slug:"blog/2018/01-17-new-project-atx-pet-finder/",date:"Jan 17",year:2018}}},{node:{id:"ebe5a237-323c-52bf-a906-c5e31a99f107",frontmatter:{title:"new gatsby site!"},fields:{slug:"blog/2017/12-28-new-gatsby-site/",date:"Dec 28",year:2017}}},{node:{id:"63da7246-4a66-5f3a-a48a-dfdbd69e008d",frontmatter:{title:"JS tutorial #3 - setup webpack"},fields:{slug:"blog/2017/12-11-setup-webpack/",date:"Dec 11",year:2017}}},{node:{id:"7ca94e88-fc30-5850-a27b-c84dd8f38ad5",frontmatter:{title:"JS tutorial #2 - a five day forecast widget"},fields:{slug:"blog/2017/09-27-weather-widget-tutorial/",date:"Sep 27",year:2017}}},{node:{id:"e7cef153-94ea-528d-abcb-2dcb287ee808",frontmatter:{title:"Why I am currently a free agent"},fields:{slug:"blog/2017/09-20-why-i-am-currently-a-free-agent/",date:"Sep 20",year:2017}}},{node:{id:"cb2b6174-69a0-580f-956e-88e0abc5e327",frontmatter:{title:"JS Tutorial #1 - a basic JS music player"},fields:{slug:"blog/2017/01-27-a-basic-js-music-player/",date:"Jan 29",year:2017}}},{node:{id:"5a1f9e58-b020-57d3-ac48-c768ae9c5d2c",frontmatter:{title:"perks and relocation"},fields:{slug:"blog/2016/09-13-perks-and-relocation/",date:"Sep 13",year:2016}}},{node:{id:"7192a1a9-319b-5991-b81a-55cb0ed62587",frontmatter:{title:"Getting Fit"},fields:{slug:"blog/2016/06-29-getting-fit/",date:"Jul 02",year:2016}}},{node:{id:"aee23d41-743d-5aa7-8ac8-7d90f6b32bab",frontmatter:{title:"Former Coworkers"},fields:{slug:"blog/2016/05-19-former-coworkers/",date:"May 19",year:2016}}},{node:{id:"bf9af2a1-d89d-58dd-84ed-b20fc45fda94",frontmatter:{title:"Quick Look @ Stocks"},fields:{slug:"blog/2016/04-27-quick-look-stocks/",date:"Apr 27",year:2016}}},{node:{id:"27d64f10-e6ce-50da-947a-84f5f2945c9e",frontmatter:{title:"Hello Seattle"},fields:{slug:"blog/2016/04-01-hello-seattle/",date:"Apr 01",year:2016}}},{node:{id:"dac3b765-1542-5897-855f-1ba7209f1e35",frontmatter:{title:"Building a Chrome Extension"},fields:{slug:"blog/2016/03-16-creating-my-first-chrome-extension/",date:"Mar 18",year:2016}}},{node:{id:"c62aa751-50f6-5a44-ae4a-b035efd64c9a",frontmatter:{title:"I am done with contracting"},fields:{slug:"blog/2016/02-16-done-with-contracting/",date:"Feb 16",year:2016}}},{node:{id:"966ccb83-19e9-5000-98c1-4e8c323533b6",frontmatter:{title:"Open Source Contribution"},fields:{slug:"blog/2015/11-13-open-source-contribution/",date:"Nov 13",year:2015}}},{node:{id:"71e03aa0-b5dc-5b1c-989d-af4764c3344b",frontmatter:{title:"From AngularJS to Jekyll"},fields:{slug:"blog/2015/11-04-from-angularjs-to-jekyll/",date:"Nov 04",year:2015}}},{node:{id:"46582933-f2b9-55ad-8aef-2d8ac4d7e2da",frontmatter:{title:"Burning out and refueling"},fields:{slug:"blog/2015/09-25-burning-out-and-refueling/",date:"Sep 25",year:2015}}},{node:{id:"6afb5635-12b2-52aa-9bfe-4922a4044e73",frontmatter:{title:"Designing and the process #2"},fields:{slug:"blog/2015/09-09-designing-and-the-process-2/",date:"Sep 09",year:2015}}},{node:{id:"f901d652-9967-59ba-8d9b-99320a1dccfb",frontmatter:{title:"Designing and the process #1"},fields:{slug:"blog/2015/09-04-designing-and-the-process-1/",date:"Sep 04",year:2015}}},{node:{id:"343815aa-86c4-50ae-9692-56018f6e0c37",frontmatter:{title:"Code Challenge #7"},fields:{slug:"blog/2015/08-20-code-challenge-7/",date:"Aug 20",year:2015}}},{node:{id:"ddfce678-9225-5645-8ff2-6f5a21d22cd9",frontmatter:{title:"Code Challenge #6"},fields:{slug:"blog/2015/08-14-code-challenge-6/",date:"Aug 14",year:2015}}},{node:{id:"aa733a28-923e-55c4-bfad-2dc686d9d22e",frontmatter:{title:"Code Challenge #4"},fields:{slug:"blog/2015/08-07-code-challenge-4/",date:"Aug 07",year:2015}}},{node:{id:"5aa47a08-669c-5a25-87b6-d52c59125a34",frontmatter:{title:"Code Challenge #3"},fields:{slug:"blog/2015/07-29-code-challenge-3/",date:"Jul 29",year:2015}}},{node:{id:"23bc6586-d6d3-523a-8ffa-d75bc7a99546",frontmatter:{title:"Code Challenge #2"},fields:{slug:"blog/2015/07-24-code-challenge-2/",date:"Jul 24",year:2015}}},{node:{id:"76f4c7de-079c-56e1-96ca-3356fecb1a55",frontmatter:{title:"Code Challenge #1"},fields:{slug:"blog/2015/07-20-code-challenge-1/",date:"Jul 20",year:2015}}},{node:{id:"05bb389b-a1c4-5d4e-a4f4-0c232b7ebb33",frontmatter:{title:"#coffee"},fields:{slug:"blog/2015/06-29-coffee/",date:"Jun 29",year:2015}}},{node:{id:"b94a4ea1-d888-5f05-856f-7ea7cb963bf9",frontmatter:{title:"Home Office Workspace"},fields:{slug:"blog/2015/05-31-home-office-workspace/",date:"May 31",year:2015}}},{node:{id:"879d0b8c-500c-5938-88a6-9cd2b0d85303",frontmatter:{title:"I'm a problem solver"},fields:{slug:"blog/2015/01-29-im-a-problem-solver/",date:"Mar 24",year:2015}}},{node:{id:"e22e24b7-0c49-5b0e-aeea-f14775f1b52c",frontmatter:{title:"Working Remotely"},fields:{slug:"blog/2015/01-29-working-remotely/",date:"Jan 29",year:2015}}},{node:{id:"3a1398bc-58e0-5239-80e3-7135a83c87e2",frontmatter:{title:"Goals for 2015"},fields:{slug:"blog/2015/01-09-goals-for-2015/",date:"Jan 09",year:2015}}},{node:{id:"738af8e0-7cba-56b8-b873-d254ec372b3b",frontmatter:{title:"Messing around with the Tumblr API"},fields:{slug:"blog/2014/12-17-messing-around-with-the-tumblr-api/",date:"Dec 17",year:2014}}},{node:{id:"d0cd177a-09e1-5c88-a88a-c34c330bf26f",frontmatter:{title:"Graceful Degradation"},fields:{slug:"blog/2014/12-30-graceful-degradation/",date:"Dec 17",year:2014}}},{node:{id:"c1a1bcf8-d7e9-5aeb-af25-ad920d49f569",frontmatter:{title:"Day in the Life of a Frontend Developer"},fields:{slug:"blog/2014/10-16-day-in-the-life-of-a-frontend-dev/",date:"Oct 16",year:2014}}},{node:{id:"d3d3c279-5436-5075-a8d7-44889477e743",frontmatter:{title:"New website - using jekyll"},fields:{slug:"blog/2014/10-15-new/",date:"Oct 15",year:2014}}},{node:{id:"1f2e5827-4d34-53ca-8fab-19d5a23f6d4f",frontmatter:{title:"Front Porch Frontend Conference"},fields:{slug:"blog/2014/10-08-front-porch-frontend-conference/",date:"Oct 08",year:2014}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-8ec5b1f19f8f0fe6b79b.js.map