(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,6],{144:function(e,t,a){"use strict";a.r(t);var n=a(158),r=a(0),o=a.n(r),l=a(152),i=a(153);t.default=function(e){var t=e.location;return o.a.createElement(l.b,{query:"3665311183",render:function(e){var a=e.allMarkdownRemark.edges,n=t&&"undefined"!==t,r=[],d=[],s=[],c=[],u=[],f=[];return a.forEach(function(e){var t=e.node;switch(t.fields.year){case 2019:r.push({node:t});break;case 2018:d.push({node:t});break;case 2017:s.push({node:t});break;case 2016:c.push({node:t});break;case 2015:u.push({node:t});break;case 2014:f.push({node:t})}}),o.a.createElement(i.a,{showFooter:n,title:"Blog Posts"},n&&o.a.createElement("div",null,o.a.createElement("ul",{className:"breadcrumbs"},o.a.createElement("li",null,o.a.createElement(l.a,{to:"/"},"Home")),o.a.createElement("li",null,"Blog")),o.a.createElement("h2",null,"Blog Posts")),!n&&o.a.createElement("h2",null,"blog posts"),o.a.createElement("strong",null,"2019"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},r.map(function(e,t){var a=e.node;return o.a.createElement("li",{key:t},o.a.createElement(l.a,{to:"/"+a.fields.slug},o.a.createElement("div",null,a.frontmatter.title),o.a.createElement("div",null,a.fields.date)))})),o.a.createElement("strong",null,"2018"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},d.map(function(e,t){var a=e.node;return o.a.createElement("li",{key:t},o.a.createElement(l.a,{to:"/"+a.fields.slug},o.a.createElement("div",null,a.frontmatter.title),o.a.createElement("div",null,a.fields.date)))})),n&&o.a.createElement("div",null,o.a.createElement("strong",null,"2017"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},s.map(function(e,t){var a=e.node;return o.a.createElement("li",{key:t},o.a.createElement(l.a,{to:"/"+a.fields.slug},o.a.createElement("div",null,a.frontmatter.title),o.a.createElement("div",null,a.fields.date)))})),o.a.createElement("strong",null,"2016"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},c.map(function(e,t){var a=e.node;return o.a.createElement("li",{key:t},o.a.createElement(l.a,{to:a.fields.slug},o.a.createElement("div",null,a.frontmatter.title),o.a.createElement("div",null,a.fields.date)))})),o.a.createElement("strong",null,"2015"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},u.map(function(e,t){var a=e.node;return o.a.createElement("li",{key:t},o.a.createElement(l.a,{to:a.fields.slug},o.a.createElement("div",null,a.frontmatter.title),o.a.createElement("div",null,a.fields.date)))})),o.a.createElement("strong",null,"2014"),o.a.createElement("ul",{className:"list--side-pink list--no-style"},f.map(function(e,t){var a=e.node;return o.a.createElement("li",{key:t},o.a.createElement(l.a,{to:a.fields.slug},o.a.createElement("div",null,a.frontmatter.title),o.a.createElement("div",null,a.fields.date)))}))))},data:n})}},145:function(e,t,a){"use strict";a.r(t);var n=a(159),r=a(0),o=a.n(r),l=a(152);t.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement("h2",null,"Q3 2019 goals"),o.a.createElement(l.b,{query:"145702619",render:function(e){return e.allJson.edges.map(function(e,t){var a,n,r=e.node,l=(a=r.completed,n=r.total,""+Math.floor(a/n*100));return o.a.createElement("div",{className:"goal__container",key:t,"aria-label":"progress bars for goals"},r.title,parseInt(l)<=94?o.a.createElement("span",{className:"goal__percentage"},l,"%"):o.a.createElement("span",{className:"goal__percentage goal__percentage--filled"},l,"%"),o.a.createElement("progress",{max:"100",value:l,id:r.goalId}))})},data:n}))}},149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(167),l=a.n(o),i=a(152),d=a(153),s=a(144),c=a(145),u=a(172),f=a.n(u),m=a(173),g=a.n(m);t.default=function(){return r.a.createElement(d.a,{showFooter:!0},r.a.createElement("div",{className:"home-layout__container"},r.a.createElement("div",{className:"home-layout__main-img"},r.a.createElement(l.a,{height:312},r.a.createElement("img",{src:f.a,alt:"me stretching",className:"u--media-center"}))),r.a.createElement("div",{className:"home-layout__about"},r.a.createElement("header",{className:"u--media-center u--text-center"},r.a.createElement("h1",null,"Hi, I’m Cindy! ",r.a.createElement("span",{role:"img","aria-label":"waving hand"},"👋"))),r.a.createElement("p",null,"I am a senior front-end engineer that works remotely at a big healthcare company. I enjoy building functional, efficient, and elegantly + thoughtfully designed UI's."),r.a.createElement("p",null,"I sometimes write about new stuff that I have learned recently, JS tutorials, and tips on working remotely. I enjoy running, reading, playing video games, and traveling."),r.a.createElement("a",{href:g.a,className:"btn",target:"_blank",title:"Resume PDF",rel:"noopener noreferrer"},"View Resume")),r.a.createElement("div",{className:"home-layout__blog-list"},r.a.createElement(s.default,null),r.a.createElement("div",{className:"u--text-center"},r.a.createElement(i.a,{to:"/blog"},"read older posts..."))),r.a.createElement("div",{className:"home-layout__sidebar"},r.a.createElement(c.default,null),r.a.createElement("p",{className:"u--text-center"},r.a.createElement("strong",null,"Public Side Projects"),": ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://atxpawfinder.com",target:"_blank",rel:"noopener noreferrer"},"ATX Paw Finder")))))}},151:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},152:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(33),d=a.n(i);a.d(t,"a",function(){return d.a});a(151);var s=r.a.createContext({}),c=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},153:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(156),d=a.n(i),s=a(155),c=a.n(s),u=(a(157),function(e){var t=e.children,a=e.showFooter,n=e.title;return r.a.createElement("div",null,r.a.createElement(d.a,{title:(a?n+" - ":"")+"Cindy - Front-end Engineer",meta:[{name:"description",content:"I build web applications using JavaScript."},{name:"keywords",content:"software engineer, front-end, web development, javascript, angular, react, front-end engineer, front-end dev"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("link",{rel:"icon",type:"image/png",href:c.a})),r.a.createElement("main",{style:a?{margin:"0 auto",maxWidth:"50.8rem",padding:"2.5rem 1.0875rem .05rem"}:{}},t),a&&r.a.createElement("footer",{className:"u--text-center"},r.a.createElement("p",null,"built using ",r.a.createElement("a",{href:"https://gatsbyjs.org/",rel:"noopener noreferrer",target:"_blank"},"gatsby v2"),r.a.createElement("br",null),"© 2019")))});u.propTypes={children:l.a.any,showFooter:l.a.bool,title:l.a.string},t.a=u},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(55),d=a(2),s=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},155:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFwSURBVHjavJfBrYMwDEDTry7Av/0rHYEV0hFYoRx7/BkBjj2GFTJCuwIjfK69lRGovxSkCDmJSU0sWQhDyKvt2s5hnmcRktfPzb2VoBd7LVavPkANaL8Yvp9XEZOjoMsvaBt4Lq1WoAp0onz0i7h5HdnclYuFFZwArdgm/wAlF0Dt+VgHegZtQAePJ1hyANu8t3F2E/Bv9U7F5QGJ2MzqfrQQsXXJObCbHBPXFYht2AtgQNwpkTCoFABKCEZPhpccIaAAGI9d5wKY3Pq+CoPOAbAUnckTCp0DYAwk2UcQW+pAbz3BCrG1ECluiJRKqGwD8kG0ewMs4WgCrVjuDRCD0DkAsLbstvA6VzfsPOWaFAZKM7ojzUkhEDplIKEAUH6JSQXgGkim1IUpAAXRxgbwQFxbIpNzbB3rRHR3sr/yHERII9qBcDYskZGbIic4G45cI1nHVBuSk1B5pqIt1fHjf0Fjj2ImUAvOgf6AyluAAQBrFE4nht1sxgAAAABJRU5ErkJggg=="},158:function(e){e.exports={data:{allMarkdownRemark:{totalCount:43,edges:[{node:{id:"790bdf3a-06c7-588e-b4df-88ac420d984a",frontmatter:{title:"Book List 2019"},fields:{slug:"blog/2019/05-13-2019-book-list-2019/",date:"May 13",year:2019}}},{node:{id:"c1055376-9341-5dad-b79a-2db0559dc196",frontmatter:{title:"Front-end Friday: React Hooks"},fields:{slug:"blog/2019/01-25-2019-front-end-friday-react-hooks/",date:"Jan 25",year:2019}}},{node:{id:"04c78b0c-0a7d-5e26-b76a-c9f692b3b257",frontmatter:{title:"2018 in review"},fields:{slug:"blog/2018/12-31-2018-in-review/",date:"Dec 31",year:2018}}},{node:{id:"4af917cd-ece5-58ca-8eec-99718775c170",frontmatter:{title:"Extra Life 2018"},fields:{slug:"blog/2018/08-27-extra-life-2018/",date:"Aug 27",year:2018}}},{node:{id:"97af3c01-2f47-5d80-a871-4ca160c291cd",frontmatter:{title:"Things I like doing in Austin"},fields:{slug:"blog/2018/07-20-what-i-like-doing-in-austin/",date:"Jul 20",year:2018}}},{node:{id:"94013882-98a1-52e8-8af1-2b220b922540",frontmatter:{title:"Book List 2018"},fields:{slug:"blog/2018/05-19-book-list-2018/",date:"May 19",year:2018}}},{node:{id:"170db337-eca4-5b7a-9c7a-e2fee3f9f977",frontmatter:{title:"Front-end Friday: Launching a small app"},fields:{slug:"blog/2018/04-27-front-end-friday-public-project/",date:"Apr 27",year:2018}}},{node:{id:"ca69ce16-2163-531f-8bcb-b6cd3836f8aa",frontmatter:{title:"Front-end Friday: How I got started in web dev"},fields:{slug:"blog/2018/02-26-front-end-friday-how-i-got-started/",date:"Feb 26",year:2018}}},{node:{id:"4dcfdeff-a635-5bc7-ada0-abaf98795dcb",frontmatter:{title:"Front-end Friday: Design systems"},fields:{slug:"blog/2018/02-02-front-end-friday-design-systems/",date:"Feb 02",year:2018}}},{node:{id:"12d774ad-8c7a-5a56-ae1d-2e05e85ef401",frontmatter:{title:"New project: ATX Paw Finder"},fields:{slug:"blog/2018/01-17-new-project-atx-pet-finder/",date:"Jan 17",year:2018}}},{node:{id:"014f9de1-ef28-512f-b86e-26818ddbfb92",frontmatter:{title:"new gatsby site!"},fields:{slug:"blog/2017/12-28-new-gatsby-site/",date:"Dec 28",year:2017}}},{node:{id:"f61bc0b3-8793-589c-8a1f-b95639585075",frontmatter:{title:"JS tutorial #3 - setup webpack"},fields:{slug:"blog/2017/12-11-setup-webpack/",date:"Dec 11",year:2017}}},{node:{id:"736eada5-ceb3-526b-b9ae-ebc14c58ee1a",frontmatter:{title:"JS tutorial #2 - a five day forecast widget"},fields:{slug:"blog/2017/09-27-weather-widget-tutorial/",date:"Sep 27",year:2017}}},{node:{id:"4c324872-941d-5dab-862e-92d47e7474b2",frontmatter:{title:"Why I am currently a free agent"},fields:{slug:"blog/2017/09-20-why-i-am-currently-a-free-agent/",date:"Sep 20",year:2017}}},{node:{id:"b17d2eae-0ae0-5289-879e-5793c5cfc8d3",frontmatter:{title:"JS Tutorial #1 - a basic JS music player"},fields:{slug:"blog/2017/01-27-a-basic-js-music-player/",date:"Jan 29",year:2017}}},{node:{id:"80f35c08-b847-5fb5-9a02-a8cb7d3a957b",frontmatter:{title:"perks and relocation"},fields:{slug:"blog/2016/09-13-perks-and-relocation/",date:"Sep 13",year:2016}}},{node:{id:"a70125bd-2c55-53d3-8d03-a14e6a38de83",frontmatter:{title:"Getting Fit"},fields:{slug:"blog/2016/06-29-getting-fit/",date:"Jul 02",year:2016}}},{node:{id:"72800fe3-41ce-5769-97c4-86c51d288d3f",frontmatter:{title:"Former Coworkers"},fields:{slug:"blog/2016/05-19-former-coworkers/",date:"May 19",year:2016}}},{node:{id:"050ccf9c-8e48-5df3-a320-fbcd7f2a9c41",frontmatter:{title:"Quick Look @ Stocks"},fields:{slug:"blog/2016/04-27-quick-look-stocks/",date:"Apr 27",year:2016}}},{node:{id:"75994265-4bc3-55f5-839c-5f79054e1e26",frontmatter:{title:"Hello Seattle"},fields:{slug:"blog/2016/04-01-hello-seattle/",date:"Apr 01",year:2016}}},{node:{id:"090f1230-b11f-57fd-96e7-b4bda8956324",frontmatter:{title:"Building a Chrome Extension"},fields:{slug:"blog/2016/03-16-creating-my-first-chrome-extension/",date:"Mar 18",year:2016}}},{node:{id:"3e39e99e-f4e4-56c9-8849-e6c4e0768612",frontmatter:{title:"I am done with contracting"},fields:{slug:"blog/2016/02-16-done-with-contracting/",date:"Feb 16",year:2016}}},{node:{id:"87a9c7ab-1f16-519d-b7d9-c928d30d53e9",frontmatter:{title:"Open Source Contribution"},fields:{slug:"blog/2015/11-13-open-source-contribution/",date:"Nov 13",year:2015}}},{node:{id:"0db3f501-937a-5908-a7e4-4aa1b1131f38",frontmatter:{title:"From AngularJS to Jekyll"},fields:{slug:"blog/2015/11-04-from-angularjs-to-jekyll/",date:"Nov 04",year:2015}}},{node:{id:"153d897f-8696-5d67-8f20-5eae4c596976",frontmatter:{title:"Burning out and refueling"},fields:{slug:"blog/2015/09-25-burning-out-and-refueling/",date:"Sep 25",year:2015}}},{node:{id:"6c52087e-3e9e-5b67-ba77-44ef8b9036f2",frontmatter:{title:"Designing and the process #2"},fields:{slug:"blog/2015/09-09-designing-and-the-process-2/",date:"Sep 09",year:2015}}},{node:{id:"5e759e4c-0a2b-57f6-abf1-86fe026c2837",frontmatter:{title:"Designing and the process #1"},fields:{slug:"blog/2015/09-04-designing-and-the-process-1/",date:"Sep 04",year:2015}}},{node:{id:"fbfb3795-7985-5933-a19c-1d941e604f2d",frontmatter:{title:"Code Challenge #7"},fields:{slug:"blog/2015/08-20-code-challenge-7/",date:"Aug 20",year:2015}}},{node:{id:"86dc7d08-e287-5a72-b7b6-05823696d1f3",frontmatter:{title:"Code Challenge #6"},fields:{slug:"blog/2015/08-14-code-challenge-6/",date:"Aug 14",year:2015}}},{node:{id:"f6d76031-4acd-5a21-9d0e-b822e98890cd",frontmatter:{title:"Code Challenge #4"},fields:{slug:"blog/2015/08-07-code-challenge-4/",date:"Aug 07",year:2015}}},{node:{id:"84096dc8-8de0-5106-a7c1-df1cd9013e95",frontmatter:{title:"Code Challenge #3"},fields:{slug:"blog/2015/07-29-code-challenge-3/",date:"Jul 29",year:2015}}},{node:{id:"f8df4458-4fe1-5448-917e-05165735681c",frontmatter:{title:"Code Challenge #2"},fields:{slug:"blog/2015/07-24-code-challenge-2/",date:"Jul 24",year:2015}}},{node:{id:"03d0912c-97ed-57ca-a509-c1f6da52a0bc",frontmatter:{title:"Code Challenge #1"},fields:{slug:"blog/2015/07-20-code-challenge-1/",date:"Jul 20",year:2015}}},{node:{id:"4d8a5891-cdef-56de-b353-d4e03406178e",frontmatter:{title:"#coffee"},fields:{slug:"blog/2015/06-29-coffee/",date:"Jun 29",year:2015}}},{node:{id:"eeb48f5e-ebdc-5327-b358-9432e658fb0e",frontmatter:{title:"Home Office Workspace"},fields:{slug:"blog/2015/05-31-home-office-workspace/",date:"May 31",year:2015}}},{node:{id:"c73346d4-7219-53ca-a25b-1476789a6e9e",frontmatter:{title:"I'm a problem solver"},fields:{slug:"blog/2015/01-29-im-a-problem-solver/",date:"Mar 24",year:2015}}},{node:{id:"8cf8da64-61d9-5651-8503-4446e96a60b7",frontmatter:{title:"Working Remotely"},fields:{slug:"blog/2015/01-29-working-remotely/",date:"Jan 29",year:2015}}},{node:{id:"3d85e08c-0a2b-5617-b71a-49a01ffd9792",frontmatter:{title:"Goals for 2015"},fields:{slug:"blog/2015/01-09-goals-for-2015/",date:"Jan 09",year:2015}}},{node:{id:"2fbb7639-4978-52c9-a776-c97699e276c4",frontmatter:{title:"Graceful Degradation"},fields:{slug:"blog/2014/12-30-graceful-degradation/",date:"Dec 17",year:2014}}},{node:{id:"96479f87-c3d5-52f7-84f1-2e2f207361fe",frontmatter:{title:"Messing around with the Tumblr API"},fields:{slug:"blog/2014/12-17-messing-around-with-the-tumblr-api/",date:"Dec 17",year:2014}}},{node:{id:"c7fa5ade-3f14-5272-b2cb-c97852f9582b",frontmatter:{title:"Day in the Life of a Frontend Developer"},fields:{slug:"blog/2014/10-16-day-in-the-life-of-a-frontend-dev/",date:"Oct 16",year:2014}}},{node:{id:"e7e98c89-4631-5247-b236-9764fd3cada0",frontmatter:{title:"New website - using jekyll"},fields:{slug:"blog/2014/10-15-new/",date:"Oct 15",year:2014}}},{node:{id:"c2adb355-42a3-5803-afa6-547460ad81b7",frontmatter:{title:"Front Porch Frontend Conference"},fields:{slug:"blog/2014/10-08-front-porch-frontend-conference/",date:"Oct 08",year:2014}}}]}}}},159:function(e){e.exports={data:{allJson:{edges:[{node:{goalId:"personalProject",title:"Complete MVP stories for personal app",total:8,completed:0,quarter:3}},{node:{goalId:"meditate",title:"Meditate for 5 hours",total:300,completed:100,quarter:3}},{node:{goalId:"read",title:"Read 3 books",total:3,completed:.75,quarter:3}},{node:{goalId:"run2",title:"Run 45 miles",total:45,completed:15,quarter:3}},{node:{goalId:"learning1",title:"Advanced Redux course / Pluralsight",total:100,completed:29,quarter:3}},{node:{goalId:"learning2",title:"GraphQL track / Frontend Masters",total:100,completed:0,quarter:3}},{node:{goalId:"learning3",title:"D3 course / Pluralsight",total:100,completed:45,quarter:3}}]}}}},167:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=f(r),l=f(a(50)),i=f(a(4)),d=a(168),s=f(a(169)),c=f(a(170)),u=f(a(171));function f(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=0,h=0,y="data-lazyload-listened",v=[],E=[],w=!1;try{var k=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("test",null,k)}catch(O){}var A=!!w&&{capture:!1,passive:!0},C=function(e){var t=l.default.findDOMNode(e);if(t instanceof HTMLElement){var a=(0,s.default)(t);(e.props.overflow&&a!==t.ownerDocument&&a!==document&&a!==document.documentElement?function(e,t){var a=l.default.findDOMNode(e),n=void 0,r=void 0;try{var o=t.getBoundingClientRect();n=o.top,r=o.height}catch(O){n=b,r=h}var i=window.innerHeight||document.documentElement.clientHeight,d=Math.max(n,0),s=Math.min(i,n+r)-d,c=void 0,u=void 0;try{var f=a.getBoundingClientRect();c=f.top,u=f.height}catch(O){c=b,u=h}var m=c-d,g=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return m-g[0]<=s&&m+u+g[1]>=0}(e,a):function(e){var t=l.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var a=void 0,n=void 0;try{var r=t.getBoundingClientRect();a=r.top,n=r.height}catch(O){a=b,n=h}var o=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return a-i[0]<=o&&a+n+i[1]>=0}(e))?e.visible||(e.props.once&&E.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},_=function(){for(var e=0;e<v.length;++e){var t=v[e];C(t)}E.forEach(function(e){var t=v.indexOf(e);-1!==t&&v.splice(t,1)}),E=[]},F=void 0,I=null,N=function(e){function t(e){m(this,t);var a=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.visible=!1,a}return p(t,r.Component),n(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var a=void 0!==this.props.debounce&&"throttle"===F||"debounce"===F&&void 0===this.props.debounce;if(a&&((0,d.off)(e,"scroll",I,A),(0,d.off)(window,"resize",I,A),I=null),I||(void 0!==this.props.debounce?(I=(0,c.default)(_,"number"==typeof this.props.debounce?this.props.debounce:300),F="debounce"):void 0!==this.props.throttle?(I=(0,u.default)(_,"number"==typeof this.props.throttle?this.props.throttle:300),F="throttle"):I=_),this.props.overflow){var n=(0,s.default)(l.default.findDOMNode(this));if(n&&"function"==typeof n.getAttribute){var r=+n.getAttribute(y)+1;1===r&&n.addEventListener("scroll",I,A),n.setAttribute(y,r)}}else if(0===v.length||a){var o=this.props,i=o.scroll,f=o.resize;i&&(0,d.on)(e,"scroll",I,A),f&&(0,d.on)(window,"resize",I,A)}v.push(this),C(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(l.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?(e.removeEventListener("scroll",I,A),e.removeAttribute(y)):e.setAttribute(y,t)}}var a=v.indexOf(this);-1!==a&&v.splice(a,1),0===v.length&&"undefined"!=typeof window&&((0,d.off)(window,"resize",I,A),(0,d.off)(window,"scroll",I,A))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:o.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}();N.propTypes={once:i.default.bool,height:i.default.oneOfType([i.default.number,i.default.string]),offset:i.default.oneOfType([i.default.number,i.default.arrayOf(i.default.number)]),overflow:i.default.bool,resize:i.default.bool,scroll:i.default.bool,children:i.default.node,throttle:i.default.oneOfType([i.default.number,i.default.bool]),debounce:i.default.oneOfType([i.default.number,i.default.bool]),placeholder:i.default.node,scrollContainer:i.default.oneOfType([i.default.string,i.default.object]),unmountIfInvisible:i.default.bool},N.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var j=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(a){function l(){m(this,l);var e=g(this,(l.__proto__||Object.getPrototypeOf(l)).call(this));return e.displayName="LazyLoad"+j(t),e}return p(l,r.Component),n(l,[{key:"render",value:function(){return o.default.createElement(N,e,o.default.createElement(t,this.props))}}]),l}()}},t.default=N,t.forceCheck=_},168:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,a,n){n=n||!1,e.addEventListener?e.addEventListener(t,a,n):e.attachEvent&&e.attachEvent("on"+t,function(t){a.call(e,t||window.event)})},t.off=function(e,t,a,n){n=n||!1,e.removeEventListener?e.removeEventListener(t,a,n):e.detachEvent&&e.detachEvent("on"+t,a)}},169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,a=/(scroll|auto)/,n=e;n;){if(!n.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(n),o=r.position,l=r.overflow,i=r["overflow-x"],d=r["overflow-y"];if("static"===o&&t)n=n.parentNode;else{if(a.test(l)&&a.test(i)&&a.test(d))return n;n=n.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},170:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var n=void 0,r=void 0,o=void 0,l=void 0,i=void 0,d=function d(){var s=+new Date-l;s<t&&s>=0?n=setTimeout(d,t-s):(n=null,a||(i=e.apply(o,r),n||(o=null,r=null)))};return function(){o=this,r=arguments,l=+new Date;var s=a&&!n;return n||(n=setTimeout(d,t)),s&&(i=e.apply(o,r),o=null,r=null),i}}},171:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var n,r;return t||(t=250),function(){var o=a||this,l=+new Date,i=arguments;n&&l<n+t?(clearTimeout(r),r=setTimeout(function(){n=l,e.apply(o,i)},t)):(n=l,e.apply(o,i))}}},172:function(e,t,a){e.exports=a.p+"static/me-stretching-07156a94b7baf70756389e555a2d460c.jpg"},173:function(e,t,a){e.exports=a.p+"static/web-resume-c3ebef361891318913d0196aa92457ed.pdf"}}]);
//# sourceMappingURL=component---src-pages-index-js-2c729f90e61df59720ce.js.map