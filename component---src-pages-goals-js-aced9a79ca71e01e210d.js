(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{137:function(e,t,a){"use strict";a.r(t);var n=a(151),r=a(0),o=a.n(r),l=a(144);t.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement("h2",null,"Q2 2019 goals"),o.a.createElement(l.b,{query:"3088078058",render:function(e){return e.allJson.edges.map(function(e,t){var a,n,r=e.node,l=(a=r.completed,n=r.total,""+Math.floor(a/n*100));return o.a.createElement("div",{className:"goal__container",key:t,"aria-label":"progress bars for goals"},r.title,parseInt(l)<=94?o.a.createElement("span",{className:"goal__percentage"},l,"%"):o.a.createElement("span",{className:"goal__percentage goal__percentage--filled"},l),o.a.createElement("progress",{max:"100",value:l,id:r.goalId}))})},data:n}))}},143:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},144:function(e,t,a){"use strict";a.d(t,"b",function(){return i});var n=a(0),r=a.n(n),o=a(4),l=a.n(o),u=a(28),c=a.n(u);a.d(t,"a",function(){return c.a});a(143);var d=r.a.createContext({}),i=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};i.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},146:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),u=a(48),c=a(2),d=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=d},151:function(e){e.exports={data:{allJson:{edges:[{node:{goalId:"personalProject",title:"Complete MVP stories for personal app",total:9,completed:0,quarter:2}},{node:{goalId:"meditate",title:"Meditate for 5 hours",total:300,completed:45,quarter:2}},{node:{goalId:"run1",title:"Run 8:30/mile (5 times)",total:5,completed:0,quarter:2}},{node:{goalId:"run2",title:"Run 75 miles",total:75,completed:7.41,quarter:2}},{node:{goalId:"learning1",title:"Italian I college course",total:8,completed:4,quarter:2}},{node:{goalId:"learning2",title:"GraphQL track on Frontend Masters",total:100,completed:0,quarter:2}},{node:{goalId:"learning3",title:"D3 course on Pluralsight",total:100,completed:41,quarter:2}}]}}}}}]);
//# sourceMappingURL=component---src-pages-goals-js-aced9a79ca71e01e210d.js.map