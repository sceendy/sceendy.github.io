(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4,5],{188:function(e,t,a){"use strict";a.r(t);var n=a(194),o=a(0),l=a.n(o),r=a(186),i=a(187);t.default=function(e){var t=e.location;return l.a.createElement(r.b,{query:"3665311183",render:function(e){var a=e.allMarkdownRemark.edges,n=t&&"undefined"!==t,o=[],d=[],s=[],c=[],f=[],u=[];return a.forEach((function(e){var t=e.node;switch(t.fields.year){case 2019:o.push({node:t});break;case 2018:d.push({node:t});break;case 2017:s.push({node:t});break;case 2016:c.push({node:t});break;case 2015:f.push({node:t});break;case 2014:u.push({node:t})}})),l.a.createElement(i.a,{showFooter:n,title:"Blog Posts"},n&&l.a.createElement("div",null,l.a.createElement("ul",{className:"breadcrumbs"},l.a.createElement("li",null,l.a.createElement(r.a,{to:"/"},"Home")),l.a.createElement("li",null,"Blog")),l.a.createElement("h2",null,"Blog Posts")),!n&&l.a.createElement("h2",null,"blog posts"),l.a.createElement("strong",null,"2019"),l.a.createElement("ul",{className:"list--side-pink list--no-style"},o.map((function(e,t){var a=e.node;return l.a.createElement("li",{key:t},l.a.createElement(r.a,{to:"/"+a.fields.slug},l.a.createElement("div",null,a.frontmatter.title),l.a.createElement("div",null,a.fields.date)))}))),l.a.createElement("strong",null,"2018"),l.a.createElement("ul",{className:"list--side-pink list--no-style"},d.map((function(e,t){var a=e.node;return l.a.createElement("li",{key:t},l.a.createElement(r.a,{to:"/"+a.fields.slug},l.a.createElement("div",null,a.frontmatter.title),l.a.createElement("div",null,a.fields.date)))}))),n&&l.a.createElement("div",null,l.a.createElement("strong",null,"2017"),l.a.createElement("ul",{className:"list--side-pink list--no-style"},s.map((function(e,t){var a=e.node;return l.a.createElement("li",{key:t},l.a.createElement(r.a,{to:"/"+a.fields.slug},l.a.createElement("div",null,a.frontmatter.title),l.a.createElement("div",null,a.fields.date)))}))),l.a.createElement("strong",null,"2016"),l.a.createElement("ul",{className:"list--side-pink list--no-style"},c.map((function(e,t){var a=e.node;return l.a.createElement("li",{key:t},l.a.createElement(r.a,{to:a.fields.slug},l.a.createElement("div",null,a.frontmatter.title),l.a.createElement("div",null,a.fields.date)))}))),l.a.createElement("strong",null,"2015"),l.a.createElement("ul",{className:"list--side-pink list--no-style"},f.map((function(e,t){var a=e.node;return l.a.createElement("li",{key:t},l.a.createElement(r.a,{to:a.fields.slug},l.a.createElement("div",null,a.frontmatter.title),l.a.createElement("div",null,a.fields.date)))}))),l.a.createElement("strong",null,"2014"),l.a.createElement("ul",{className:"list--side-pink list--no-style"},u.map((function(e,t){var a=e.node;return l.a.createElement("li",{key:t},l.a.createElement(r.a,{to:a.fields.slug},l.a.createElement("div",null,a.frontmatter.title),l.a.createElement("div",null,a.fields.date)))})))))},data:n})}},189:function(e,t,a){"use strict";a.r(t);var n=a(195),o=a(0),l=a.n(o),r=a(186);t.default=function(){return l.a.createElement(o.Fragment,null,l.a.createElement("h2",null,"Q4 2019 goals"),l.a.createElement(r.b,{query:"3072854753",render:function(e){return e.allGoalsJson.edges.map((function(e,t){var a,n,o=e.node,r=(a=o.completed,n=o.total,""+Math.floor(a/n*100));return l.a.createElement("div",{className:"goal__container",key:t,"aria-label":"progress bars for goals"},o.title,parseInt(r)<=94?l.a.createElement("span",{className:"goal__percentage"},r,"%"):l.a.createElement("span",{className:"goal__percentage goal__percentage--filled"},r,"%"),l.a.createElement("progress",{max:"100",value:r,id:o.goalId}))}))},data:n}))}},193:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(197),r=a.n(l),i=a(186),d=a(187),s=a(188),c=a(189),f=a(202),u=a.n(f),m=a(203),g=a.n(m);t.default=function(){return o.a.createElement(d.a,{showFooter:!0},o.a.createElement("div",{className:"home-layout__container"},o.a.createElement("div",{className:"home-layout__main-img"},o.a.createElement(r.a,{height:312},o.a.createElement("img",{src:u.a,alt:"me stretching",className:"u--media-center"}))),o.a.createElement("div",{className:"home-layout__about"},o.a.createElement("header",{className:"u--media-center u--text-center"},o.a.createElement("h1",null,"hi, my name is cindy ",o.a.createElement("span",{role:"img","aria-label":"waving hand"},"👋"))),o.a.createElement("p",null,"I am a senior front-end engineer that works remotely at a big healthcare company. I enjoy building functional, efficient, and elegantly + thoughtfully designed UI's."),o.a.createElement("p",null,"I write about stuff that I have recently learned about, JS tutorials, and about working remotely. I enjoy running, reading, playing video games, and traveling for food."),o.a.createElement("a",{href:g.a,className:"btn",target:"_blank",title:"Resume PDF",rel:"noopener noreferrer"},"View Resume")),o.a.createElement("div",{className:"home-layout__blog-list"},o.a.createElement(s.default,null),o.a.createElement("div",{className:"u--text-center"},o.a.createElement(i.a,{to:"/blog"},"read older posts..."))),o.a.createElement("div",{className:"home-layout__sidebar"},o.a.createElement(c.default,null),o.a.createElement("h2",null,"Links"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/sceendy",target:"_blank",rel:"noopener noreferrer"},"github"),", ",o.a.createElement("a",{href:"https://www.linkedin.com/in/sceendy/",target:"_blank",rel:"noopener noreferrer"},"linkedin")))))}},194:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"totalCount":43,"edges":[{"node":{"id":"790bdf3a-06c7-588e-b4df-88ac420d984a","frontmatter":{"title":"Book List 2019"},"fields":{"slug":"blog/2019/05-13-2019-book-list-2019/","date":"May 13","year":2019}}},{"node":{"id":"c1055376-9341-5dad-b79a-2db0559dc196","frontmatter":{"title":"Front-end Friday: React Hooks"},"fields":{"slug":"blog/2019/01-25-2019-front-end-friday-react-hooks/","date":"Jan 25","year":2019}}},{"node":{"id":"04c78b0c-0a7d-5e26-b76a-c9f692b3b257","frontmatter":{"title":"2018 in review"},"fields":{"slug":"blog/2018/12-31-2018-in-review/","date":"Dec 31","year":2018}}},{"node":{"id":"4af917cd-ece5-58ca-8eec-99718775c170","frontmatter":{"title":"Extra Life 2018"},"fields":{"slug":"blog/2018/08-27-extra-life-2018/","date":"Aug 27","year":2018}}},{"node":{"id":"97af3c01-2f47-5d80-a871-4ca160c291cd","frontmatter":{"title":"Things I like doing in Austin"},"fields":{"slug":"blog/2018/07-20-what-i-like-doing-in-austin/","date":"Jul 20","year":2018}}},{"node":{"id":"94013882-98a1-52e8-8af1-2b220b922540","frontmatter":{"title":"Book List 2018"},"fields":{"slug":"blog/2018/05-19-book-list-2018/","date":"May 19","year":2018}}},{"node":{"id":"170db337-eca4-5b7a-9c7a-e2fee3f9f977","frontmatter":{"title":"Front-end Friday: Launching a small app"},"fields":{"slug":"blog/2018/04-27-front-end-friday-public-project/","date":"Apr 27","year":2018}}},{"node":{"id":"ca69ce16-2163-531f-8bcb-b6cd3836f8aa","frontmatter":{"title":"Front-end Friday: How I got started in web dev"},"fields":{"slug":"blog/2018/02-26-front-end-friday-how-i-got-started/","date":"Feb 26","year":2018}}},{"node":{"id":"4dcfdeff-a635-5bc7-ada0-abaf98795dcb","frontmatter":{"title":"Front-end Friday: Design systems"},"fields":{"slug":"blog/2018/02-02-front-end-friday-design-systems/","date":"Feb 02","year":2018}}},{"node":{"id":"12d774ad-8c7a-5a56-ae1d-2e05e85ef401","frontmatter":{"title":"New project: ATX Paw Finder"},"fields":{"slug":"blog/2018/01-17-new-project-atx-pet-finder/","date":"Jan 17","year":2018}}},{"node":{"id":"014f9de1-ef28-512f-b86e-26818ddbfb92","frontmatter":{"title":"new gatsby site!"},"fields":{"slug":"blog/2017/12-28-new-gatsby-site/","date":"Dec 28","year":2017}}},{"node":{"id":"f61bc0b3-8793-589c-8a1f-b95639585075","frontmatter":{"title":"JS tutorial #3 - setup webpack"},"fields":{"slug":"blog/2017/12-11-setup-webpack/","date":"Dec 11","year":2017}}},{"node":{"id":"736eada5-ceb3-526b-b9ae-ebc14c58ee1a","frontmatter":{"title":"JS tutorial #2 - a five day forecast widget"},"fields":{"slug":"blog/2017/09-27-weather-widget-tutorial/","date":"Sep 27","year":2017}}},{"node":{"id":"4c324872-941d-5dab-862e-92d47e7474b2","frontmatter":{"title":"Why I am currently a free agent"},"fields":{"slug":"blog/2017/09-20-why-i-am-currently-a-free-agent/","date":"Sep 20","year":2017}}},{"node":{"id":"b17d2eae-0ae0-5289-879e-5793c5cfc8d3","frontmatter":{"title":"JS Tutorial #1 - a basic JS music player"},"fields":{"slug":"blog/2017/01-27-a-basic-js-music-player/","date":"Jan 29","year":2017}}},{"node":{"id":"80f35c08-b847-5fb5-9a02-a8cb7d3a957b","frontmatter":{"title":"perks and relocation"},"fields":{"slug":"blog/2016/09-13-perks-and-relocation/","date":"Sep 13","year":2016}}},{"node":{"id":"a70125bd-2c55-53d3-8d03-a14e6a38de83","frontmatter":{"title":"Getting Fit"},"fields":{"slug":"blog/2016/06-29-getting-fit/","date":"Jul 02","year":2016}}},{"node":{"id":"72800fe3-41ce-5769-97c4-86c51d288d3f","frontmatter":{"title":"Former Coworkers"},"fields":{"slug":"blog/2016/05-19-former-coworkers/","date":"May 19","year":2016}}},{"node":{"id":"050ccf9c-8e48-5df3-a320-fbcd7f2a9c41","frontmatter":{"title":"Quick Look @ Stocks"},"fields":{"slug":"blog/2016/04-27-quick-look-stocks/","date":"Apr 27","year":2016}}},{"node":{"id":"75994265-4bc3-55f5-839c-5f79054e1e26","frontmatter":{"title":"Hello Seattle"},"fields":{"slug":"blog/2016/04-01-hello-seattle/","date":"Apr 01","year":2016}}},{"node":{"id":"090f1230-b11f-57fd-96e7-b4bda8956324","frontmatter":{"title":"Building a Chrome Extension"},"fields":{"slug":"blog/2016/03-16-creating-my-first-chrome-extension/","date":"Mar 18","year":2016}}},{"node":{"id":"3e39e99e-f4e4-56c9-8849-e6c4e0768612","frontmatter":{"title":"I am done with contracting"},"fields":{"slug":"blog/2016/02-16-done-with-contracting/","date":"Feb 16","year":2016}}},{"node":{"id":"87a9c7ab-1f16-519d-b7d9-c928d30d53e9","frontmatter":{"title":"Open Source Contribution"},"fields":{"slug":"blog/2015/11-13-open-source-contribution/","date":"Nov 13","year":2015}}},{"node":{"id":"0db3f501-937a-5908-a7e4-4aa1b1131f38","frontmatter":{"title":"From AngularJS to Jekyll"},"fields":{"slug":"blog/2015/11-04-from-angularjs-to-jekyll/","date":"Nov 04","year":2015}}},{"node":{"id":"153d897f-8696-5d67-8f20-5eae4c596976","frontmatter":{"title":"Burning out and refueling"},"fields":{"slug":"blog/2015/09-25-burning-out-and-refueling/","date":"Sep 25","year":2015}}},{"node":{"id":"6c52087e-3e9e-5b67-ba77-44ef8b9036f2","frontmatter":{"title":"Designing and the process #2"},"fields":{"slug":"blog/2015/09-09-designing-and-the-process-2/","date":"Sep 09","year":2015}}},{"node":{"id":"5e759e4c-0a2b-57f6-abf1-86fe026c2837","frontmatter":{"title":"Designing and the process #1"},"fields":{"slug":"blog/2015/09-04-designing-and-the-process-1/","date":"Sep 04","year":2015}}},{"node":{"id":"fbfb3795-7985-5933-a19c-1d941e604f2d","frontmatter":{"title":"Code Challenge #7"},"fields":{"slug":"blog/2015/08-20-code-challenge-7/","date":"Aug 20","year":2015}}},{"node":{"id":"86dc7d08-e287-5a72-b7b6-05823696d1f3","frontmatter":{"title":"Code Challenge #6"},"fields":{"slug":"blog/2015/08-14-code-challenge-6/","date":"Aug 14","year":2015}}},{"node":{"id":"f6d76031-4acd-5a21-9d0e-b822e98890cd","frontmatter":{"title":"Code Challenge #4"},"fields":{"slug":"blog/2015/08-07-code-challenge-4/","date":"Aug 07","year":2015}}},{"node":{"id":"84096dc8-8de0-5106-a7c1-df1cd9013e95","frontmatter":{"title":"Code Challenge #3"},"fields":{"slug":"blog/2015/07-29-code-challenge-3/","date":"Jul 29","year":2015}}},{"node":{"id":"f8df4458-4fe1-5448-917e-05165735681c","frontmatter":{"title":"Code Challenge #2"},"fields":{"slug":"blog/2015/07-24-code-challenge-2/","date":"Jul 24","year":2015}}},{"node":{"id":"03d0912c-97ed-57ca-a509-c1f6da52a0bc","frontmatter":{"title":"Code Challenge #1"},"fields":{"slug":"blog/2015/07-20-code-challenge-1/","date":"Jul 20","year":2015}}},{"node":{"id":"4d8a5891-cdef-56de-b353-d4e03406178e","frontmatter":{"title":"#coffee"},"fields":{"slug":"blog/2015/06-29-coffee/","date":"Jun 29","year":2015}}},{"node":{"id":"eeb48f5e-ebdc-5327-b358-9432e658fb0e","frontmatter":{"title":"Home Office Workspace"},"fields":{"slug":"blog/2015/05-31-home-office-workspace/","date":"May 31","year":2015}}},{"node":{"id":"c73346d4-7219-53ca-a25b-1476789a6e9e","frontmatter":{"title":"I\'m a problem solver"},"fields":{"slug":"blog/2015/01-29-im-a-problem-solver/","date":"Mar 24","year":2015}}},{"node":{"id":"8cf8da64-61d9-5651-8503-4446e96a60b7","frontmatter":{"title":"Working Remotely"},"fields":{"slug":"blog/2015/01-29-working-remotely/","date":"Jan 29","year":2015}}},{"node":{"id":"3d85e08c-0a2b-5617-b71a-49a01ffd9792","frontmatter":{"title":"Goals for 2015"},"fields":{"slug":"blog/2015/01-09-goals-for-2015/","date":"Jan 09","year":2015}}},{"node":{"id":"96479f87-c3d5-52f7-84f1-2e2f207361fe","frontmatter":{"title":"Messing around with the Tumblr API"},"fields":{"slug":"blog/2014/12-17-messing-around-with-the-tumblr-api/","date":"Dec 17","year":2014}}},{"node":{"id":"2fbb7639-4978-52c9-a776-c97699e276c4","frontmatter":{"title":"Graceful Degradation"},"fields":{"slug":"blog/2014/12-30-graceful-degradation/","date":"Dec 17","year":2014}}},{"node":{"id":"c7fa5ade-3f14-5272-b2cb-c97852f9582b","frontmatter":{"title":"Day in the Life of a Frontend Developer"},"fields":{"slug":"blog/2014/10-16-day-in-the-life-of-a-frontend-dev/","date":"Oct 16","year":2014}}},{"node":{"id":"e7e98c89-4631-5247-b236-9764fd3cada0","frontmatter":{"title":"New website - using jekyll"},"fields":{"slug":"blog/2014/10-15-new/","date":"Oct 15","year":2014}}},{"node":{"id":"c2adb355-42a3-5803-afa6-547460ad81b7","frontmatter":{"title":"Front Porch Frontend Conference"},"fields":{"slug":"blog/2014/10-08-front-porch-frontend-conference/","date":"Oct 08","year":2014}}}]}}}')},195:function(e){e.exports=JSON.parse('{"data":{"allGoalsJson":{"edges":[{"node":{"goalId":"personalProject","title":"Complete MVP stories for personal app","total":6,"completed":0,"quarter":4}},{"node":{"goalId":"meditate","title":"Meditate for 5 hours","total":300,"completed":120,"quarter":4}},{"node":{"goalId":"read","title":"Read 3 books","total":3,"completed":1,"quarter":4}},{"node":{"goalId":"run2","title":"Run 45 miles","total":45,"completed":18.85,"quarter":4}},{"node":{"goalId":"learning1","title":"Advanced Redux course / Pluralsight","total":100,"completed":100,"quarter":4}},{"node":{"goalId":"learning2","title":"GraphQL track / Frontend Masters","total":656,"completed":21,"quarter":4}},{"node":{"goalId":"learning3","title":"D3.js track / Frontend Masters","total":100,"completed":100,"quarter":4}}]}}}')},197:function(e,t,a){"use strict";a(37),a(84),Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),l=u(o),r=u(a(79)),i=u(a(38)),d=a(198),s=u(a(199)),c=u(a(200)),f=u(a(201));function u(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=0,h=0,y=0,v=0,E="data-lazyload-listened",w=[],k=[],_=!1;try{var N=Object.defineProperty({},"passive",{get:function(){_=!0}});window.addEventListener("test",null,N)}catch(J){}var O=!!_&&{capture:!1,passive:!0},C=function(e){var t=r.default.findDOMNode(e);if(t instanceof HTMLElement){var a=(0,s.default)(t);(e.props.overflow&&a!==t.ownerDocument&&a!==document&&a!==document.documentElement?function(e,t){var a=r.default.findDOMNode(e),n=void 0,o=void 0,l=void 0,i=void 0;try{var d=t.getBoundingClientRect();n=d.top,o=d.left,l=d.height,i=d.width}catch(J){n=b,o=h,l=v,i=y}var s=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,f=Math.max(n,0),u=Math.max(o,0),m=Math.min(s,n+l)-f,g=Math.min(c,o+i)-u,p=void 0,E=void 0,w=void 0,k=void 0;try{var _=a.getBoundingClientRect();p=_.top,E=_.left,w=_.height,k=_.width}catch(J){p=b,E=h,w=v,k=y}var N=p-f,O=E-u,C=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return N-C[0]<=m&&N+w+C[1]>=0&&O-C[0]<=g&&O+k+C[1]>=0}(e,a):function(e){var t=r.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var a=void 0,n=void 0;try{var o=t.getBoundingClientRect();a=o.top,n=o.height}catch(J){a=b,n=v}var l=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return a-i[0]<=l&&a+n+i[1]>=0}(e))?e.visible||(e.props.once&&k.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},M=function(){for(var e=0;e<w.length;++e){var t=w[e];C(t)}k.forEach((function(e){var t=w.indexOf(e);-1!==t&&w.splice(t,1)})),k=[]},j=void 0,I=null,D=function(e){function t(e){m(this,t);var a=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.visible=!1,a}return p(t,e),n(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var a=void 0!==this.props.debounce&&"throttle"===j||"debounce"===j&&void 0===this.props.debounce;if(a&&((0,d.off)(e,"scroll",I,O),(0,d.off)(window,"resize",I,O),I=null),I||(void 0!==this.props.debounce?(I=(0,c.default)(M,"number"==typeof this.props.debounce?this.props.debounce:300),j="debounce"):void 0!==this.props.throttle?(I=(0,f.default)(M,"number"==typeof this.props.throttle?this.props.throttle:300),j="throttle"):I=M),this.props.overflow){var n=(0,s.default)(r.default.findDOMNode(this));if(n&&"function"==typeof n.getAttribute){var o=+n.getAttribute(E)+1;1===o&&n.addEventListener("scroll",I,O),n.setAttribute(E,o)}}else if(0===w.length||a){var l=this.props,i=l.scroll,u=l.resize;i&&(0,d.on)(e,"scroll",I,O),u&&(0,d.on)(window,"resize",I,O)}w.push(this),C(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(r.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(E)-1;0===t?(e.removeEventListener("scroll",I,O),e.removeAttribute(E)):e.setAttribute(E,t)}}var a=w.indexOf(this);-1!==a&&w.splice(a,1),0===w.length&&"undefined"!=typeof window&&((0,d.off)(window,"resize",I,O),(0,d.off)(window,"scroll",I,O))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:l.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(o.Component);D.propTypes={once:i.default.bool,height:i.default.oneOfType([i.default.number,i.default.string]),offset:i.default.oneOfType([i.default.number,i.default.arrayOf(i.default.number)]),overflow:i.default.bool,resize:i.default.bool,scroll:i.default.bool,children:i.default.node,throttle:i.default.oneOfType([i.default.number,i.default.bool]),debounce:i.default.oneOfType([i.default.number,i.default.bool]),placeholder:i.default.node,scrollContainer:i.default.oneOfType([i.default.string,i.default.object]),unmountIfInvisible:i.default.bool},D.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var F=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(a){function o(){m(this,o);var e=g(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.displayName="LazyLoad"+F(t),e}return p(o,a),n(o,[{key:"render",value:function(){return l.default.createElement(D,e,l.default.createElement(t,this.props))}}]),o}(o.Component)}},t.default=D,t.forceCheck=M},198:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,a,n){n=n||!1,e.addEventListener?e.addEventListener(t,a,n):e.attachEvent&&e.attachEvent("on"+t,(function(t){a.call(e,t||window.event)}))},t.off=function(e,t,a,n){n=n||!1,e.removeEventListener?e.removeEventListener(t,a,n):e.detachEvent&&e.detachEvent("on"+t,a)}},199:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,a=/(scroll|auto)/,n=e;n;){if(!n.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(n),l=o.position,r=o.overflow,i=o["overflow-x"],d=o["overflow-y"];if("static"===l&&t)n=n.parentNode;else{if(a.test(r)&&a.test(i)&&a.test(d))return n;n=n.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},200:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var n=void 0,o=void 0,l=void 0,r=void 0,i=void 0,d=function d(){var s=+new Date-r;s<t&&s>=0?n=setTimeout(d,t-s):(n=null,a||(i=e.apply(l,o),n||(l=null,o=null)))};return function(){l=this,o=arguments,r=+new Date;var s=a&&!n;return n||(n=setTimeout(d,t)),s&&(i=e.apply(l,o),l=null,o=null),i}}},201:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var n,o;return t||(t=250),function(){var l=a||this,r=+new Date,i=arguments;n&&r<n+t?(clearTimeout(o),o=setTimeout((function(){n=r,e.apply(l,i)}),t)):(n=r,e.apply(l,i))}}},202:function(e,t,a){e.exports=a.p+"static/me-eating-in-japan-237a29075c01fee4841c5d3a8ce8b6dd.jpg"},203:function(e,t,a){e.exports=a.p+"static/web-resume-99d76201421aa0a1b22e7976c7e7f90c.pdf"}}]);
//# sourceMappingURL=component---src-pages-index-js-365d2bdeebc9c3e9f6ae.js.map