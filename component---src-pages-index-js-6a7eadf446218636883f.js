(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,6],{136:function(e,t,n){"use strict";n.r(t);n(68);var a=n(150),r=n(0),o=n.n(r),l=n(144),i=n(145);t.default=function(e){var t=e.location;return o.a.createElement(l.b,{query:"3665311183",render:function(e){var n=e.allMarkdownRemark.edges,a=t&&"undefined"!==t,r=[],d=[],c=[],s=[],u=[],f=[];return n.forEach(function(e){var t=e.node;switch(t.fields.year){case 2019:r.push({node:t});break;case 2018:d.push({node:t});break;case 2017:c.push({node:t});break;case 2016:s.push({node:t});break;case 2015:u.push({node:t});break;case 2014:f.push({node:t})}}),o.a.createElement(i.a,{showFooter:a,title:"Blog Posts"},a&&o.a.createElement("div",null,o.a.createElement("ul",{className:"breadcrumbs"},o.a.createElement("li",null,o.a.createElement(l.a,{to:"/"},"Home")),o.a.createElement("li",null,"Blog")),o.a.createElement("h2",null,"Blog Posts")),!a&&o.a.createElement("h2",null,"blog posts"),o.a.createElement("strong",null,"2019"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},r.map(function(e,t){var n=e.node;return o.a.createElement("li",{key:t},o.a.createElement(l.a,{to:n.fields.slug},o.a.createElement("div",null,n.frontmatter.title),o.a.createElement("div",null,n.fields.date)))})),o.a.createElement("strong",null,"2018"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},d.map(function(e,t){var n=e.node;return o.a.createElement("li",{key:t},o.a.createElement(l.a,{to:n.fields.slug},o.a.createElement("div",null,n.frontmatter.title),o.a.createElement("div",null,n.fields.date)))})),a&&o.a.createElement("div",null,o.a.createElement("strong",null,"2017"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},c.map(function(e,t){var n=e.node;return o.a.createElement("li",{key:t},o.a.createElement(l.a,{to:n.fields.slug},o.a.createElement("div",null,n.frontmatter.title),o.a.createElement("div",null,n.fields.date)))})),o.a.createElement("strong",null,"2016"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},s.map(function(e,t){var n=e.node;return o.a.createElement("li",{key:t},o.a.createElement(l.a,{to:n.fields.slug},o.a.createElement("div",null,n.frontmatter.title),o.a.createElement("div",null,n.fields.date)))})),o.a.createElement("strong",null,"2015"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},u.map(function(e,t){var n=e.node;return o.a.createElement("li",{key:t},o.a.createElement(l.a,{to:n.fields.slug},o.a.createElement("div",null,n.frontmatter.title),o.a.createElement("div",null,n.fields.date)))})),o.a.createElement("strong",null,"2014"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},f.map(function(e,t){var n=e.node;return o.a.createElement("li",{key:t},o.a.createElement(l.a,{to:n.fields.slug},o.a.createElement("div",null,n.frontmatter.title),o.a.createElement("div",null,n.fields.date)))}))))},data:a})}},137:function(e,t,n){"use strict";n.r(t);var a=n(151),r=n(0),o=n.n(r),l=n(144);t.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement("h2",null,"Q1 2019 goals"),o.a.createElement(l.b,{query:"1720493361",render:function(e){return e.allJson.edges.map(function(e,t){var n,a,r=e.node,l=(n=r.completed,a=r.total,Math.floor(n/a*100)+"%");return o.a.createElement("div",{className:"goal__container",key:t},r.title,parseInt(l)<=94?o.a.createElement("span",{className:"goal__percentage"},l):o.a.createElement("span",{className:"goal__percentage goal__percentage--filled"},l),o.a.createElement("progress",{max:"100",value:r.completed/r.total*100,id:r.goalId}))})},data:a}))}},141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(153),l=n.n(o),i=n(144),d=n(145),c=n(136),s=n(137),u=n(175),f=n.n(u),m=n(176),p=n.n(m);t.default=function(){return r.a.createElement(d.a,{showFooter:!0},r.a.createElement("div",{className:"home-layout__container"},r.a.createElement("div",{className:"home-layout__main-img"},r.a.createElement(l.a,{height:312},r.a.createElement("img",{src:f.a,alt:"me stretching",className:"u--media-center"}))),r.a.createElement("div",{className:"home-layout__about"},r.a.createElement("header",{className:"u--media-center u--text-center"},r.a.createElement("h1",null,"Hi, I’m Cindy! ",r.a.createElement("span",{role:"img","aria-label":"waving hand"},"👋"))),r.a.createElement("p",null,"I am a front-end engineer that works remotely for a healthcare company. I enjoy building functional, efficient, and elegantly + thoughtfully designed user interfaces."),r.a.createElement("p",null,"Sometimes I write about projects, step-by-step JS tutorials, and tips on working remotely. I enjoy running, reading, playing video games, and traveling."),r.a.createElement("a",{href:p.a,className:"btn",target:"_blank",title:"Resume PDF",rel:"noopener noreferrer"},"View Resume")),r.a.createElement("div",{className:"home-layout__blog-list"},r.a.createElement(c.default,null),r.a.createElement("div",{className:"u--text-center"},r.a.createElement(i.a,{to:"/blog"},"read older posts..."))),r.a.createElement("div",{className:"home-layout__sidebar"},r.a.createElement(s.default,null),r.a.createElement("p",{className:"u--text-center"},r.a.createElement("strong",null,"Public Side Projects"),": ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://atxpawfinder.com",target:"_blank",rel:"noopener noreferrer"},"ATX Paw Finder")))))}},143:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},144:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=n(28),d=n.n(i);n.d(t,"a",function(){return d.a});n(143);var c=r.a.createContext({}),s=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},145:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=n(148),d=n.n(i),c=n(147),s=n.n(c),u=(n(149),function(e){var t=e.children,n=e.showFooter,a=e.title;return r.a.createElement("div",null,r.a.createElement(d.a,{title:(n?a+" - ":"")+"Cindy - Front-end Engineer",meta:[{name:"description",content:"I build web applications using JavaScript."},{name:"keywords",content:"software engineer, front-end, web development, javascript, angular, react, front-end engineer, front-end dev"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("link",{rel:"icon",type:"image/png",href:s.a})),r.a.createElement("main",{style:n?{margin:"0 auto",maxWidth:"50.8rem",padding:"2.5rem 1.0875rem .05rem"}:{}},t),n&&r.a.createElement("footer",{className:"u--text-center"},r.a.createElement("p",null,"built using ",r.a.createElement("a",{href:"https://gatsbyjs.org/",rel:"noopener noreferrer",target:"_blank"},"gatsby v2"),r.a.createElement("br",null),"© 2019")))});u.propTypes={children:l.a.any,showFooter:l.a.bool,title:l.a.string},t.a=u},146:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=n(48),d=n(2),c=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},147:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFwSURBVHjavJfBrYMwDEDTry7Av/0rHYEV0hFYoRx7/BkBjj2GFTJCuwIjfK69lRGovxSkCDmJSU0sWQhDyKvt2s5hnmcRktfPzb2VoBd7LVavPkANaL8Yvp9XEZOjoMsvaBt4Lq1WoAp0onz0i7h5HdnclYuFFZwArdgm/wAlF0Dt+VgHegZtQAePJ1hyANu8t3F2E/Bv9U7F5QGJ2MzqfrQQsXXJObCbHBPXFYht2AtgQNwpkTCoFABKCEZPhpccIaAAGI9d5wKY3Pq+CoPOAbAUnckTCp0DYAwk2UcQW+pAbz3BCrG1ECluiJRKqGwD8kG0ewMs4WgCrVjuDRCD0DkAsLbstvA6VzfsPOWaFAZKM7ojzUkhEDplIKEAUH6JSQXgGkim1IUpAAXRxgbwQFxbIpNzbB3rRHR3sr/yHERII9qBcDYskZGbIic4G45cI1nHVBuSk1B5pqIt1fHjf0Fjj2ImUAvOgf6AyluAAQBrFE4nht1sxgAAAABJRU5ErkJggg=="},150:function(e){e.exports={data:{allMarkdownRemark:{totalCount:42,edges:[{node:{id:"d10fbff1-a0da-53bc-9d16-f926304e55ba",frontmatter:{title:"Front-end Friday: React Hooks"},fields:{slug:"blog/2019/01-25-2019-front-end-friday-react-hooks/",date:"Jan 25",year:2019}}},{node:{id:"b965c5b0-dc83-5fe2-93b4-3e2fed9acfa5",frontmatter:{title:"2018 in review"},fields:{slug:"blog/2018/12-31-2018-in-review/",date:"Dec 31",year:2018}}},{node:{id:"f47fa189-2f04-54ec-8f76-7a6a6c1dbe72",frontmatter:{title:"Extra Life 2018"},fields:{slug:"blog/2018/08-27-extra-life-2018/",date:"Aug 27",year:2018}}},{node:{id:"8e6540e6-61a4-5d97-9c5d-73a6c44f5079",frontmatter:{title:"Things I like doing in Austin"},fields:{slug:"blog/2018/07-20-what-i-like-doing-in-austin/",date:"Jul 20",year:2018}}},{node:{id:"f291d12c-56d0-5ec8-945b-1ac243b66fdd",frontmatter:{title:"Book List 2018"},fields:{slug:"blog/2018/05-19-book-list-2018/",date:"May 19",year:2018}}},{node:{id:"d4ecc502-c4ae-5c49-a9fb-7216c02b4a48",frontmatter:{title:"Front-end Friday: Launching a small app"},fields:{slug:"blog/2018/04-27-front-end-friday-public-project/",date:"Apr 27",year:2018}}},{node:{id:"c8d22100-b4f8-5ea4-a3e9-6ad84764b8aa",frontmatter:{title:"Front-end Friday: How I got started in web dev"},fields:{slug:"blog/2018/02-26-front-end-friday-how-i-got-started/",date:"Feb 26",year:2018}}},{node:{id:"c8501e90-3bf6-56cf-a90d-ba00583b501a",frontmatter:{title:"Front-end Friday: Design systems"},fields:{slug:"blog/2018/02-02-front-end-friday-design-systems/",date:"Feb 02",year:2018}}},{node:{id:"b27942f7-18d9-566d-a2c5-d3b14f58a3f7",frontmatter:{title:"New project: ATX Paw Finder"},fields:{slug:"blog/2018/01-17-new-project-atx-pet-finder/",date:"Jan 17",year:2018}}},{node:{id:"ebe5a237-323c-52bf-a906-c5e31a99f107",frontmatter:{title:"new gatsby site!"},fields:{slug:"blog/2017/12-28-new-gatsby-site/",date:"Dec 28",year:2017}}},{node:{id:"63da7246-4a66-5f3a-a48a-dfdbd69e008d",frontmatter:{title:"JS tutorial #3 - setup webpack"},fields:{slug:"blog/2017/12-11-setup-webpack/",date:"Dec 11",year:2017}}},{node:{id:"7ca94e88-fc30-5850-a27b-c84dd8f38ad5",frontmatter:{title:"JS tutorial #2 - a five day forecast widget"},fields:{slug:"blog/2017/09-27-weather-widget-tutorial/",date:"Sep 27",year:2017}}},{node:{id:"e7cef153-94ea-528d-abcb-2dcb287ee808",frontmatter:{title:"Why I am currently a free agent"},fields:{slug:"blog/2017/09-20-why-i-am-currently-a-free-agent/",date:"Sep 20",year:2017}}},{node:{id:"cb2b6174-69a0-580f-956e-88e0abc5e327",frontmatter:{title:"JS Tutorial #1 - a basic JS music player"},fields:{slug:"blog/2017/01-27-a-basic-js-music-player/",date:"Jan 29",year:2017}}},{node:{id:"5a1f9e58-b020-57d3-ac48-c768ae9c5d2c",frontmatter:{title:"perks and relocation"},fields:{slug:"blog/2016/09-13-perks-and-relocation/",date:"Sep 13",year:2016}}},{node:{id:"7192a1a9-319b-5991-b81a-55cb0ed62587",frontmatter:{title:"Getting Fit"},fields:{slug:"blog/2016/06-29-getting-fit/",date:"Jul 02",year:2016}}},{node:{id:"aee23d41-743d-5aa7-8ac8-7d90f6b32bab",frontmatter:{title:"Former Coworkers"},fields:{slug:"blog/2016/05-19-former-coworkers/",date:"May 19",year:2016}}},{node:{id:"bf9af2a1-d89d-58dd-84ed-b20fc45fda94",frontmatter:{title:"Quick Look @ Stocks"},fields:{slug:"blog/2016/04-27-quick-look-stocks/",date:"Apr 27",year:2016}}},{node:{id:"27d64f10-e6ce-50da-947a-84f5f2945c9e",frontmatter:{title:"Hello Seattle"},fields:{slug:"blog/2016/04-01-hello-seattle/",date:"Apr 01",year:2016}}},{node:{id:"dac3b765-1542-5897-855f-1ba7209f1e35",frontmatter:{title:"Building a Chrome Extension"},fields:{slug:"blog/2016/03-16-creating-my-first-chrome-extension/",date:"Mar 18",year:2016}}},{node:{id:"c62aa751-50f6-5a44-ae4a-b035efd64c9a",frontmatter:{title:"I am done with contracting"},fields:{slug:"blog/2016/02-16-done-with-contracting/",date:"Feb 16",year:2016}}},{node:{id:"966ccb83-19e9-5000-98c1-4e8c323533b6",frontmatter:{title:"Open Source Contribution"},fields:{slug:"blog/2015/11-13-open-source-contribution/",date:"Nov 13",year:2015}}},{node:{id:"71e03aa0-b5dc-5b1c-989d-af4764c3344b",frontmatter:{title:"From AngularJS to Jekyll"},fields:{slug:"blog/2015/11-04-from-angularjs-to-jekyll/",date:"Nov 04",year:2015}}},{node:{id:"46582933-f2b9-55ad-8aef-2d8ac4d7e2da",frontmatter:{title:"Burning out and refueling"},fields:{slug:"blog/2015/09-25-burning-out-and-refueling/",date:"Sep 25",year:2015}}},{node:{id:"6afb5635-12b2-52aa-9bfe-4922a4044e73",frontmatter:{title:"Designing and the process #2"},fields:{slug:"blog/2015/09-09-designing-and-the-process-2/",date:"Sep 09",year:2015}}},{node:{id:"f901d652-9967-59ba-8d9b-99320a1dccfb",frontmatter:{title:"Designing and the process #1"},fields:{slug:"blog/2015/09-04-designing-and-the-process-1/",date:"Sep 04",year:2015}}},{node:{id:"343815aa-86c4-50ae-9692-56018f6e0c37",frontmatter:{title:"Code Challenge #7"},fields:{slug:"blog/2015/08-20-code-challenge-7/",date:"Aug 20",year:2015}}},{node:{id:"ddfce678-9225-5645-8ff2-6f5a21d22cd9",frontmatter:{title:"Code Challenge #6"},fields:{slug:"blog/2015/08-14-code-challenge-6/",date:"Aug 14",year:2015}}},{node:{id:"aa733a28-923e-55c4-bfad-2dc686d9d22e",frontmatter:{title:"Code Challenge #4"},fields:{slug:"blog/2015/08-07-code-challenge-4/",date:"Aug 07",year:2015}}},{node:{id:"5aa47a08-669c-5a25-87b6-d52c59125a34",frontmatter:{title:"Code Challenge #3"},fields:{slug:"blog/2015/07-29-code-challenge-3/",date:"Jul 29",year:2015}}},{node:{id:"23bc6586-d6d3-523a-8ffa-d75bc7a99546",frontmatter:{title:"Code Challenge #2"},fields:{slug:"blog/2015/07-24-code-challenge-2/",date:"Jul 24",year:2015}}},{node:{id:"76f4c7de-079c-56e1-96ca-3356fecb1a55",frontmatter:{title:"Code Challenge #1"},fields:{slug:"blog/2015/07-20-code-challenge-1/",date:"Jul 20",year:2015}}},{node:{id:"05bb389b-a1c4-5d4e-a4f4-0c232b7ebb33",frontmatter:{title:"#coffee"},fields:{slug:"blog/2015/06-29-coffee/",date:"Jun 29",year:2015}}},{node:{id:"b94a4ea1-d888-5f05-856f-7ea7cb963bf9",frontmatter:{title:"Home Office Workspace"},fields:{slug:"blog/2015/05-31-home-office-workspace/",date:"May 31",year:2015}}},{node:{id:"879d0b8c-500c-5938-88a6-9cd2b0d85303",frontmatter:{title:"I'm a problem solver"},fields:{slug:"blog/2015/01-29-im-a-problem-solver/",date:"Mar 24",year:2015}}},{node:{id:"e22e24b7-0c49-5b0e-aeea-f14775f1b52c",frontmatter:{title:"Working Remotely"},fields:{slug:"blog/2015/01-29-working-remotely/",date:"Jan 29",year:2015}}},{node:{id:"3a1398bc-58e0-5239-80e3-7135a83c87e2",frontmatter:{title:"Goals for 2015"},fields:{slug:"blog/2015/01-09-goals-for-2015/",date:"Jan 09",year:2015}}},{node:{id:"d0cd177a-09e1-5c88-a88a-c34c330bf26f",frontmatter:{title:"Graceful Degradation"},fields:{slug:"blog/2014/12-30-graceful-degradation/",date:"Dec 17",year:2014}}},{node:{id:"738af8e0-7cba-56b8-b873-d254ec372b3b",frontmatter:{title:"Messing around with the Tumblr API"},fields:{slug:"blog/2014/12-17-messing-around-with-the-tumblr-api/",date:"Dec 17",year:2014}}},{node:{id:"c1a1bcf8-d7e9-5aeb-af25-ad920d49f569",frontmatter:{title:"Day in the Life of a Frontend Developer"},fields:{slug:"blog/2014/10-16-day-in-the-life-of-a-frontend-dev/",date:"Oct 16",year:2014}}},{node:{id:"d3d3c279-5436-5075-a8d7-44889477e743",frontmatter:{title:"New website - using jekyll"},fields:{slug:"blog/2014/10-15-new/",date:"Oct 15",year:2014}}},{node:{id:"1f2e5827-4d34-53ca-8fab-19d5a23f6d4f",frontmatter:{title:"Front Porch Frontend Conference"},fields:{slug:"blog/2014/10-08-front-porch-frontend-conference/",date:"Oct 08",year:2014}}}]}}}},151:function(e){e.exports={data:{allJson:{edges:[{node:{goalId:"personalProject",title:"Work on personal project for 20 hours",total:20,completed:13,quarter:1}},{node:{goalId:"meditate",title:"Meditate for 4 hours",total:240,completed:240,quarter:1}},{node:{goalId:"run",title:"Run 50 miles",total:50,completed:38.51,quarter:1}},{node:{goalId:"loseWeight",title:"Lose 15lbs",total:15,completed:3,quarter:1}},{node:{goalId:"learning1",title:"Complete Udacitys' Intro to CS course",total:100,completed:52,quarter:1}},{node:{goalId:"learning2",title:"Complete Pluralsights' React Path",total:100,completed:100,quarter:1}}]}}}},153:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=m(r),l=m(n(43)),i=m(n(4)),d=n(170),c=m(n(171)),s=m(n(172)),u=m(n(173)),f=m(n(174));function m(e){return e&&e.__esModule?e:{default:e}}var p=0,g=0,b="data-lazyload-listened",h=[],y=[],v=!1;try{var w=Object.defineProperty({},"passive",{get:function(){v=!0}});window.addEventListener("test",null,w)}catch(O){}var E=!!v&&{capture:!1,passive:!0},k=function(e){var t=l.default.findDOMNode(e);if(t){var n=(0,c.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=l.default.findDOMNode(e),a=void 0,r=void 0;try{var o=t.getBoundingClientRect();a=o.top,r=o.height}catch(O){a=p,r=g}var i=window.innerHeight||document.documentElement.clientHeight,d=Math.max(a,0),c=Math.min(i,a+r)-d,s=void 0,u=void 0;try{var f=n.getBoundingClientRect();s=f.top,u=f.height}catch(O){s=p,u=g}var m=s-d,b=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return m-b[0]<=c&&m+u+b[1]>=0}(e,n):function(e){var t=l.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,a=void 0;try{var r=t.getBoundingClientRect();n=r.top,a=r.height}catch(O){n=p,a=g}var o=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-i[0]<=o&&n+a+i[1]>=0}(e))?e.visible||(e.props.once&&y.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},A=function(){for(var e=0;e<h.length;++e){var t=h[e];k(t)}y.forEach(function(e){var t=h.indexOf(e);-1!==t&&h.splice(t,1)}),y=[]},_=void 0,C=null,j=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){var e=!1;if(void 0!==this.props.debounce&&"throttle"===_?(console.warn("[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously"),e=!0):"debounce"===_&&void 0===this.props.debounce&&(console.warn("[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously"),e=!0),e&&((0,d.off)(window,"scroll",C,E),(0,d.off)(window,"resize",C,E),C=null),C||(void 0!==this.props.debounce?(C=(0,s.default)(A,"number"==typeof this.props.debounce?this.props.debounce:300),_="debounce"):void 0!==this.props.throttle?(C=(0,u.default)(A,"number"==typeof this.props.throttle?this.props.throttle:300),_="throttle"):C=A),this.props.overflow){var t=(0,c.default)(l.default.findDOMNode(this));if(t&&"function"==typeof t.getAttribute){var n=+t.getAttribute(b)+1;1===n&&t.addEventListener("scroll",C,E),t.setAttribute(b,n)}}else if(0===h.length||e){var a=this.props,r=a.scroll,o=a.resize;r&&(0,d.on)(window,"scroll",C,E),o&&(0,d.on)(window,"resize",C,E)}h.push(this),k(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,c.default)(l.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(b)-1;0===t?(e.removeEventListener("scroll",C,E),e.removeAttribute(b)):e.setAttribute(b,t)}}var n=h.indexOf(this);-1!==n&&h.splice(n,1),0===h.length&&((0,d.off)(window,"resize",C,E),(0,d.off)(window,"scroll",C,E))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:o.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}();j.propTypes={once:i.default.bool,height:i.default.oneOfType([i.default.number,i.default.string]),offset:i.default.oneOfType([i.default.number,i.default.arrayOf(i.default.number)]),overflow:i.default.bool,resize:i.default.bool,scroll:i.default.bool,children:i.default.node,throttle:i.default.oneOfType([i.default.number,i.default.bool]),debounce:i.default.oneOfType([i.default.number,i.default.bool]),placeholder:i.default.node,unmountIfInvisible:i.default.bool},j.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};t.lazyload=f.default;t.default=j,t.forceCheck=A}).call(this,n(169))},169:function(e,t){var n,a,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{a="function"==typeof clearTimeout?clearTimeout:l}catch(e){a=l}}();var d,c=[],s=!1,u=-1;function f(){s&&d&&(s=!1,d.length?c=d.concat(c):u=-1,c.length&&m())}function m(){if(!s){var e=i(f);s=!0;for(var t=c.length;t;){for(d=c,c=[];++u<t;)d&&d[u].run();u=-1,t=c.length}d=null,s=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===l||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||s||i(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,a){a=a||!1,e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})},t.off=function(e,t,n,a){a=a||!1,e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent&&e.detachEvent("on"+t,n)}},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,a=e;a;){if(!a.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(a),o=r.position,l=r.overflow,i=r["overflow-x"],d=r["overflow-y"];if("static"===o&&t)a=a.parentNode;else{if(n.test(l)&&n.test(i)&&n.test(d))return a;a=a.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var a=void 0,r=void 0,o=void 0,l=void 0,i=void 0,d=function d(){var c=+new Date-l;c<t&&c>=0?a=setTimeout(d,t-c):(a=null,n||(i=e.apply(o,r),a||(o=null,r=null)))};return function(){o=this,r=arguments,l=+new Date;var c=n&&!a;return a||(a=setTimeout(d,t)),c&&(i=e.apply(o,r),o=null,r=null),i}}},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var a,r;return t||(t=250),function(){var o=n||this,l=+new Date,i=arguments;a&&l<a+t?(clearTimeout(r),r=setTimeout(function(){a=l,e.apply(o,i)},t)):(a=l,e.apply(o,i))}}},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=i(r),l=i(n(153));function i(e){return e&&e.__esModule?e:{default:e}}var d=function(e){return e.displayName||e.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function i(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return e.displayName="LazyLoad"+d(t),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,r.Component),a(i,[{key:"render",value:function(){return o.default.createElement(l.default,e,o.default.createElement(t,this.props))}}]),i}()}}},175:function(e,t,n){e.exports=n.p+"static/me-stretching-07156a94b7baf70756389e555a2d460c.jpg"},176:function(e,t,n){e.exports=n.p+"static/web-resume-71d306d136e71ac82d6bfbba239a2ace.pdf"}}]);
//# sourceMappingURL=component---src-pages-index-js-6a7eadf446218636883f.js.map