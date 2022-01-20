"use strict";(self.webpackChunksceendy_com=self.webpackChunksceendy_com||[]).push([[678],{932:function(e,t,n){var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(7294),i=d(r),l=d(n(3935)),a=d(n(5697)),u=n(2208),c=d(n(8062)),s=d(n(1116)),f=d(n(5152));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=0,b=0,y=0,w=0,g="data-lazyload-listened",E=[],_=[],O=!1;try{var N=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("test",null,N)}catch(A){}var M=!!O&&{capture:!1,passive:!0},j=function(e){var t=l.default.findDOMNode(e);if(t instanceof HTMLElement){var n=(0,c.default)(t),o=e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=l.default.findDOMNode(e),o=void 0,r=void 0,i=void 0,a=void 0;try{var u=t.getBoundingClientRect();o=u.top,r=u.left,i=u.height,a=u.width}catch(A){o=v,r=b,i=w,a=y}var c=window.innerHeight||document.documentElement.clientHeight,s=window.innerWidth||document.documentElement.clientWidth,f=Math.max(o,0),d=Math.max(r,0),p=Math.min(c,o+i)-f,m=Math.min(s,r+a)-d,h=void 0,g=void 0,E=void 0,_=void 0;try{var O=n.getBoundingClientRect();h=O.top,g=O.left,E=O.height,_=O.width}catch(A){h=v,g=b,E=w,_=y}var N=h-f,M=g-d,j=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return N-j[0]<=p&&N+E+j[1]>=0&&M-j[0]<=m&&M+_+j[1]>=0}(e,n):function(e){var t=l.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(A){n=v,o=w}var i=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=i&&n+o+a[1]>=0}(e);o?e.visible||(e.props.once&&_.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},k=function(){for(var e=0;e<E.length;++e){var t=E[e];j(t)}_.forEach((function(e){var t=E.indexOf(e);-1!==t&&E.splice(t,1)})),_=[]},T=void 0,C=null,D=function(e){function t(e){p(this,t);var n=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return h(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===T||"debounce"===T&&void 0===this.props.debounce;if(n&&((0,u.off)(e,"scroll",C,M),(0,u.off)(window,"resize",C,M),C=null),C||(void 0!==this.props.debounce?(C=(0,s.default)(k,"number"==typeof this.props.debounce?this.props.debounce:300),T="debounce"):void 0!==this.props.throttle?(C=(0,f.default)(k,"number"==typeof this.props.throttle?this.props.throttle:300),T="throttle"):C=k),this.props.overflow){var o=(0,c.default)(l.default.findDOMNode(this));if(o&&"function"==typeof o.getAttribute){var r=+o.getAttribute(g)+1;1===r&&o.addEventListener("scroll",C,M),o.setAttribute(g,r)}}else if(0===E.length||n){var i=this.props,a=i.scroll,d=i.resize;a&&(0,u.on)(e,"scroll",C,M),d&&(0,u.on)(window,"resize",C,M)}E.push(this),j(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,c.default)(l.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(g)-1;0===t?(e.removeEventListener("scroll",C,M),e.removeAttribute(g)):e.setAttribute(g,t)}}var n=E.indexOf(this);-1!==n&&E.splice(n,1),0===E.length&&"undefined"!=typeof window&&((0,u.off)(window,"resize",C,M),(0,u.off)(window,"scroll",C,M))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:i.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(r.Component);D.propTypes={once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool},D.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var P=function(e){return e.displayName||e.name||"Component"};t.ZP=D},1116:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,i=void 0,l=void 0,a=void 0,u=function u(){var c=+new Date-l;c<t&&c>=0?o=setTimeout(u,t-c):(o=null,n||(a=e.apply(i,r),o||(i=null,r=null)))};return function(){i=this,r=arguments,l=+new Date;var c=n&&!o;return o||(o=setTimeout(u,t)),c&&(a=e.apply(i,r),i=null,r=null),a}}},2208:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},8062:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),i=r.position,l=r.overflow,a=r["overflow-x"],u=r["overflow-y"];if("static"===i&&t)o=o.parentNode;else{if(n.test(l)&&n.test(a)&&n.test(u))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},5152:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var i=n||this,l=+new Date,a=arguments;o&&l<o+t?(clearTimeout(r),r=setTimeout((function(){o=l,e.apply(i,a)}),t)):(o=l,e.apply(i,a))}}},4539:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var o=n(7294),r=n(932),i=n(5444),l=n(1818),a=n(223),u=n.p+"static/italy-me-b92e0bcc55bf3e1bd69083bff1c6181d.jpg",c=n.p+"static/web-resume-cf89ccae0b773c891bd958e66206b7bb.pdf",s=function(){return o.createElement(l.Z,{showFooter:!0,className:"home-layout__container"},o.createElement("div",{className:"home-layout__main-img"},o.createElement(r.ZP,{height:312},o.createElement("img",{src:u,alt:"me stretching",className:"u--media-center"}))),o.createElement("section",{className:"home-layout__about"},o.createElement("header",{className:"u--media-center u--text-center"},o.createElement("h1",null,"hi, my name is cindy"," ",o.createElement("span",{role:"img","aria-label":"waving hand"},"👋"))),o.createElement("p",null,"I am a senior front-end engineer and team lead for the core features web team at a big healthcare company."),o.createElement("ul",null,o.createElement("li",null,"One day I'll make time to write more blog posts."),o.createElement("li",null,"If you have health insurance from a specific company, you can see my most recent work."),o.createElement("li",null,"I enjoy running, reading, playing video games, and traveling for food.")),o.createElement("a",{href:c,className:"btn",target:"_blank",title:"Resume PDF, 80kb",rel:"noopener noreferrer"},"View Resume")),o.createElement("section",{className:"home-layout__blog-list"},o.createElement(a.default,null),o.createElement(i.Link,{to:"/blog",className:"u--text-center"},"read older posts...")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-cb1e366bb976c4c755e9.js.map