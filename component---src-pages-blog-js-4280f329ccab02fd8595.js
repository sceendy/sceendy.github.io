(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t);var n=a(158),l=a(0),r=a.n(l),d=a(152),o=a(153);t.default=function(e){var t=e.location;return r.a.createElement(d.b,{query:"3665311183",render:function(e){var a=e.allMarkdownRemark.edges,n=t&&"undefined"!==t,l=[],i=[],s=[],c=[],f=[],u=[];return a.forEach(function(e){var t=e.node;switch(t.fields.year){case 2019:l.push({node:t});break;case 2018:i.push({node:t});break;case 2017:s.push({node:t});break;case 2016:c.push({node:t});break;case 2015:f.push({node:t});break;case 2014:u.push({node:t})}}),r.a.createElement(o.a,{showFooter:n,title:"Blog Posts"},n&&r.a.createElement("div",null,r.a.createElement("ul",{className:"breadcrumbs"},r.a.createElement("li",null,r.a.createElement(d.a,{to:"/"},"Home")),r.a.createElement("li",null,"Blog")),r.a.createElement("h2",null,"Blog Posts")),!n&&r.a.createElement("h2",null,"blog posts"),r.a.createElement("strong",null,"2019"),r.a.createElement("ul",{className:"list--side-pink list--no-style"},l.map(function(e,t){var a=e.node;return r.a.createElement("li",{key:t},r.a.createElement(d.a,{to:"/"+a.fields.slug},r.a.createElement("div",null,a.frontmatter.title),r.a.createElement("div",null,a.fields.date)))})),r.a.createElement("strong",null,"2018"),r.a.createElement("ul",{className:"list--side-pink list--no-style"},i.map(function(e,t){var a=e.node;return r.a.createElement("li",{key:t},r.a.createElement(d.a,{to:"/"+a.fields.slug},r.a.createElement("div",null,a.frontmatter.title),r.a.createElement("div",null,a.fields.date)))})),n&&r.a.createElement("div",null,r.a.createElement("strong",null,"2017"),r.a.createElement("ul",{className:"list--side-pink list--no-style"},s.map(function(e,t){var a=e.node;return r.a.createElement("li",{key:t},r.a.createElement(d.a,{to:"/"+a.fields.slug},r.a.createElement("div",null,a.frontmatter.title),r.a.createElement("div",null,a.fields.date)))})),r.a.createElement("strong",null,"2016"),r.a.createElement("ul",{className:"list--side-pink list--no-style"},c.map(function(e,t){var a=e.node;return r.a.createElement("li",{key:t},r.a.createElement(d.a,{to:a.fields.slug},r.a.createElement("div",null,a.frontmatter.title),r.a.createElement("div",null,a.fields.date)))})),r.a.createElement("strong",null,"2015"),r.a.createElement("ul",{className:"list--side-pink list--no-style"},f.map(function(e,t){var a=e.node;return r.a.createElement("li",{key:t},r.a.createElement(d.a,{to:a.fields.slug},r.a.createElement("div",null,a.frontmatter.title),r.a.createElement("div",null,a.fields.date)))})),r.a.createElement("strong",null,"2014"),r.a.createElement("ul",{className:"list--side-pink list--no-style"},u.map(function(e,t){var a=e.node;return r.a.createElement("li",{key:t},r.a.createElement(d.a,{to:a.fields.slug},r.a.createElement("div",null,a.frontmatter.title),r.a.createElement("div",null,a.fields.date)))}))))},data:n})}},151:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},152:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),l=a.n(n),r=a(4),d=a.n(r),o=a(33),i=a.n(o);a.d(t,"a",function(){return i.a});a(151);var s=l.a.createContext({}),c=function(e){return l.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:d.a.object,query:d.a.string.isRequired,render:d.a.func,children:d.a.func}},153:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(4),d=a.n(r),o=a(156),i=a.n(o),s=a(155),c=a.n(s),f=(a(157),function(e){var t=e.children,a=e.showFooter,n=e.title;return l.a.createElement("div",null,l.a.createElement(i.a,{title:(a?n+" - ":"")+"Cindy - Front-end Engineer",meta:[{name:"description",content:"I build web applications using JavaScript."},{name:"keywords",content:"software engineer, front-end, web development, javascript, angular, react, front-end engineer, front-end dev"}]},l.a.createElement("html",{lang:"en"}),l.a.createElement("link",{rel:"icon",type:"image/png",href:c.a})),l.a.createElement("main",{style:a?{margin:"0 auto",maxWidth:"50.8rem",padding:"2.5rem 1.0875rem .05rem"}:{}},t),a&&l.a.createElement("footer",{className:"u--text-center"},l.a.createElement("p",null,"built using ",l.a.createElement("a",{href:"https://gatsbyjs.org/",rel:"noopener noreferrer",target:"_blank"},"gatsby v2"),l.a.createElement("br",null),"© 2019")))});f.propTypes={children:d.a.any,showFooter:d.a.bool,title:d.a.string},t.a=f},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),l=a.n(n),r=a(4),d=a.n(r),o=a(55),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return l.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:d.a.shape({pathname:d.a.string.isRequired}).isRequired},t.default=s},155:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFwSURBVHjavJfBrYMwDEDTry7Av/0rHYEV0hFYoRx7/BkBjj2GFTJCuwIjfK69lRGovxSkCDmJSU0sWQhDyKvt2s5hnmcRktfPzb2VoBd7LVavPkANaL8Yvp9XEZOjoMsvaBt4Lq1WoAp0onz0i7h5HdnclYuFFZwArdgm/wAlF0Dt+VgHegZtQAePJ1hyANu8t3F2E/Bv9U7F5QGJ2MzqfrQQsXXJObCbHBPXFYht2AtgQNwpkTCoFABKCEZPhpccIaAAGI9d5wKY3Pq+CoPOAbAUnckTCp0DYAwk2UcQW+pAbz3BCrG1ECluiJRKqGwD8kG0ewMs4WgCrVjuDRCD0DkAsLbstvA6VzfsPOWaFAZKM7ojzUkhEDplIKEAUH6JSQXgGkim1IUpAAXRxgbwQFxbIpNzbB3rRHR3sr/yHERII9qBcDYskZGbIic4G45cI1nHVBuSk1B5pqIt1fHjf0Fjj2ImUAvOgf6AyluAAQBrFE4nht1sxgAAAABJRU5ErkJggg=="},158:function(e){e.exports={data:{allMarkdownRemark:{totalCount:43,edges:[{node:{id:"790bdf3a-06c7-588e-b4df-88ac420d984a",frontmatter:{title:"Book List 2019"},fields:{slug:"blog/2019/05-13-2019-book-list-2019/",date:"May 13",year:2019}}},{node:{id:"c1055376-9341-5dad-b79a-2db0559dc196",frontmatter:{title:"Front-end Friday: React Hooks"},fields:{slug:"blog/2019/01-25-2019-front-end-friday-react-hooks/",date:"Jan 25",year:2019}}},{node:{id:"04c78b0c-0a7d-5e26-b76a-c9f692b3b257",frontmatter:{title:"2018 in review"},fields:{slug:"blog/2018/12-31-2018-in-review/",date:"Dec 31",year:2018}}},{node:{id:"4af917cd-ece5-58ca-8eec-99718775c170",frontmatter:{title:"Extra Life 2018"},fields:{slug:"blog/2018/08-27-extra-life-2018/",date:"Aug 27",year:2018}}},{node:{id:"97af3c01-2f47-5d80-a871-4ca160c291cd",frontmatter:{title:"Things I like doing in Austin"},fields:{slug:"blog/2018/07-20-what-i-like-doing-in-austin/",date:"Jul 20",year:2018}}},{node:{id:"94013882-98a1-52e8-8af1-2b220b922540",frontmatter:{title:"Book List 2018"},fields:{slug:"blog/2018/05-19-book-list-2018/",date:"May 19",year:2018}}},{node:{id:"170db337-eca4-5b7a-9c7a-e2fee3f9f977",frontmatter:{title:"Front-end Friday: Launching a small app"},fields:{slug:"blog/2018/04-27-front-end-friday-public-project/",date:"Apr 27",year:2018}}},{node:{id:"ca69ce16-2163-531f-8bcb-b6cd3836f8aa",frontmatter:{title:"Front-end Friday: How I got started in web dev"},fields:{slug:"blog/2018/02-26-front-end-friday-how-i-got-started/",date:"Feb 26",year:2018}}},{node:{id:"4dcfdeff-a635-5bc7-ada0-abaf98795dcb",frontmatter:{title:"Front-end Friday: Design systems"},fields:{slug:"blog/2018/02-02-front-end-friday-design-systems/",date:"Feb 02",year:2018}}},{node:{id:"12d774ad-8c7a-5a56-ae1d-2e05e85ef401",frontmatter:{title:"New project: ATX Paw Finder"},fields:{slug:"blog/2018/01-17-new-project-atx-pet-finder/",date:"Jan 17",year:2018}}},{node:{id:"014f9de1-ef28-512f-b86e-26818ddbfb92",frontmatter:{title:"new gatsby site!"},fields:{slug:"blog/2017/12-28-new-gatsby-site/",date:"Dec 28",year:2017}}},{node:{id:"f61bc0b3-8793-589c-8a1f-b95639585075",frontmatter:{title:"JS tutorial #3 - setup webpack"},fields:{slug:"blog/2017/12-11-setup-webpack/",date:"Dec 11",year:2017}}},{node:{id:"736eada5-ceb3-526b-b9ae-ebc14c58ee1a",frontmatter:{title:"JS tutorial #2 - a five day forecast widget"},fields:{slug:"blog/2017/09-27-weather-widget-tutorial/",date:"Sep 27",year:2017}}},{node:{id:"4c324872-941d-5dab-862e-92d47e7474b2",frontmatter:{title:"Why I am currently a free agent"},fields:{slug:"blog/2017/09-20-why-i-am-currently-a-free-agent/",date:"Sep 20",year:2017}}},{node:{id:"b17d2eae-0ae0-5289-879e-5793c5cfc8d3",frontmatter:{title:"JS Tutorial #1 - a basic JS music player"},fields:{slug:"blog/2017/01-27-a-basic-js-music-player/",date:"Jan 29",year:2017}}},{node:{id:"80f35c08-b847-5fb5-9a02-a8cb7d3a957b",frontmatter:{title:"perks and relocation"},fields:{slug:"blog/2016/09-13-perks-and-relocation/",date:"Sep 13",year:2016}}},{node:{id:"a70125bd-2c55-53d3-8d03-a14e6a38de83",frontmatter:{title:"Getting Fit"},fields:{slug:"blog/2016/06-29-getting-fit/",date:"Jul 02",year:2016}}},{node:{id:"72800fe3-41ce-5769-97c4-86c51d288d3f",frontmatter:{title:"Former Coworkers"},fields:{slug:"blog/2016/05-19-former-coworkers/",date:"May 19",year:2016}}},{node:{id:"050ccf9c-8e48-5df3-a320-fbcd7f2a9c41",frontmatter:{title:"Quick Look @ Stocks"},fields:{slug:"blog/2016/04-27-quick-look-stocks/",date:"Apr 27",year:2016}}},{node:{id:"75994265-4bc3-55f5-839c-5f79054e1e26",frontmatter:{title:"Hello Seattle"},fields:{slug:"blog/2016/04-01-hello-seattle/",date:"Apr 01",year:2016}}},{node:{id:"090f1230-b11f-57fd-96e7-b4bda8956324",frontmatter:{title:"Building a Chrome Extension"},fields:{slug:"blog/2016/03-16-creating-my-first-chrome-extension/",date:"Mar 18",year:2016}}},{node:{id:"3e39e99e-f4e4-56c9-8849-e6c4e0768612",frontmatter:{title:"I am done with contracting"},fields:{slug:"blog/2016/02-16-done-with-contracting/",date:"Feb 16",year:2016}}},{node:{id:"87a9c7ab-1f16-519d-b7d9-c928d30d53e9",frontmatter:{title:"Open Source Contribution"},fields:{slug:"blog/2015/11-13-open-source-contribution/",date:"Nov 13",year:2015}}},{node:{id:"0db3f501-937a-5908-a7e4-4aa1b1131f38",frontmatter:{title:"From AngularJS to Jekyll"},fields:{slug:"blog/2015/11-04-from-angularjs-to-jekyll/",date:"Nov 04",year:2015}}},{node:{id:"153d897f-8696-5d67-8f20-5eae4c596976",frontmatter:{title:"Burning out and refueling"},fields:{slug:"blog/2015/09-25-burning-out-and-refueling/",date:"Sep 25",year:2015}}},{node:{id:"6c52087e-3e9e-5b67-ba77-44ef8b9036f2",frontmatter:{title:"Designing and the process #2"},fields:{slug:"blog/2015/09-09-designing-and-the-process-2/",date:"Sep 09",year:2015}}},{node:{id:"5e759e4c-0a2b-57f6-abf1-86fe026c2837",frontmatter:{title:"Designing and the process #1"},fields:{slug:"blog/2015/09-04-designing-and-the-process-1/",date:"Sep 04",year:2015}}},{node:{id:"fbfb3795-7985-5933-a19c-1d941e604f2d",frontmatter:{title:"Code Challenge #7"},fields:{slug:"blog/2015/08-20-code-challenge-7/",date:"Aug 20",year:2015}}},{node:{id:"86dc7d08-e287-5a72-b7b6-05823696d1f3",frontmatter:{title:"Code Challenge #6"},fields:{slug:"blog/2015/08-14-code-challenge-6/",date:"Aug 14",year:2015}}},{node:{id:"f6d76031-4acd-5a21-9d0e-b822e98890cd",frontmatter:{title:"Code Challenge #4"},fields:{slug:"blog/2015/08-07-code-challenge-4/",date:"Aug 07",year:2015}}},{node:{id:"84096dc8-8de0-5106-a7c1-df1cd9013e95",frontmatter:{title:"Code Challenge #3"},fields:{slug:"blog/2015/07-29-code-challenge-3/",date:"Jul 29",year:2015}}},{node:{id:"f8df4458-4fe1-5448-917e-05165735681c",frontmatter:{title:"Code Challenge #2"},fields:{slug:"blog/2015/07-24-code-challenge-2/",date:"Jul 24",year:2015}}},{node:{id:"03d0912c-97ed-57ca-a509-c1f6da52a0bc",frontmatter:{title:"Code Challenge #1"},fields:{slug:"blog/2015/07-20-code-challenge-1/",date:"Jul 20",year:2015}}},{node:{id:"4d8a5891-cdef-56de-b353-d4e03406178e",frontmatter:{title:"#coffee"},fields:{slug:"blog/2015/06-29-coffee/",date:"Jun 29",year:2015}}},{node:{id:"eeb48f5e-ebdc-5327-b358-9432e658fb0e",frontmatter:{title:"Home Office Workspace"},fields:{slug:"blog/2015/05-31-home-office-workspace/",date:"May 31",year:2015}}},{node:{id:"c73346d4-7219-53ca-a25b-1476789a6e9e",frontmatter:{title:"I'm a problem solver"},fields:{slug:"blog/2015/01-29-im-a-problem-solver/",date:"Mar 24",year:2015}}},{node:{id:"8cf8da64-61d9-5651-8503-4446e96a60b7",frontmatter:{title:"Working Remotely"},fields:{slug:"blog/2015/01-29-working-remotely/",date:"Jan 29",year:2015}}},{node:{id:"3d85e08c-0a2b-5617-b71a-49a01ffd9792",frontmatter:{title:"Goals for 2015"},fields:{slug:"blog/2015/01-09-goals-for-2015/",date:"Jan 09",year:2015}}},{node:{id:"96479f87-c3d5-52f7-84f1-2e2f207361fe",frontmatter:{title:"Messing around with the Tumblr API"},fields:{slug:"blog/2014/12-17-messing-around-with-the-tumblr-api/",date:"Dec 17",year:2014}}},{node:{id:"2fbb7639-4978-52c9-a776-c97699e276c4",frontmatter:{title:"Graceful Degradation"},fields:{slug:"blog/2014/12-30-graceful-degradation/",date:"Dec 17",year:2014}}},{node:{id:"c7fa5ade-3f14-5272-b2cb-c97852f9582b",frontmatter:{title:"Day in the Life of a Frontend Developer"},fields:{slug:"blog/2014/10-16-day-in-the-life-of-a-frontend-dev/",date:"Oct 16",year:2014}}},{node:{id:"e7e98c89-4631-5247-b236-9764fd3cada0",frontmatter:{title:"New website - using jekyll"},fields:{slug:"blog/2014/10-15-new/",date:"Oct 15",year:2014}}},{node:{id:"c2adb355-42a3-5803-afa6-547460ad81b7",frontmatter:{title:"Front Porch Frontend Conference"},fields:{slug:"blog/2014/10-08-front-porch-frontend-conference/",date:"Oct 08",year:2014}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-4280f329ccab02fd8595.js.map