(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{137:function(e,a,t){"use strict";t.r(a);var n=t(151),r=t(0),o=t.n(r),l=t(144);a.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement("h2",null,"Q3 2019 goals"),o.a.createElement(l.b,{query:"145702619",render:function(e){return e.allJson.edges.map(function(e,a){var t,n,r=e.node,l=(t=r.completed,n=r.total,""+Math.floor(t/n*100));return o.a.createElement("div",{className:"goal__container",key:a,"aria-label":"progress bars for goals"},r.title,parseInt(l)<=94?o.a.createElement("span",{className:"goal__percentage"},l,"%"):o.a.createElement("span",{className:"goal__percentage goal__percentage--filled"},l,"%"),o.a.createElement("progress",{max:"100",value:l,id:r.goalId}))})},data:n}))}},143:function(e,a,t){var n;e.exports=(n=t(146))&&n.default||n},144:function(e,a,t){"use strict";t.d(a,"b",function(){return s});var n=t(0),r=t.n(n),o=t(4),l=t.n(o),d=t(28),u=t.n(d);t.d(a,"a",function(){return u.a});t(143);var c=r.a.createContext({}),s=function(e){return r.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},146:function(e,a,t){"use strict";t.r(a);t(29);var n=t(0),r=t.n(n),o=t(4),l=t.n(o),d=t(48),u=t(2),c=function(e){var a=e.location,t=u.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(d.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=c},151:function(e){e.exports={data:{allJson:{edges:[{node:{goalId:"personalProject",title:"Complete MVP stories for personal app",total:8,completed:0,quarter:3}},{node:{goalId:"meditate",title:"Meditate for 5 hours",total:300,completed:10,quarter:3}},{node:{goalId:"read",title:"Read 3 books",total:3,completed:0,quarter:3}},{node:{goalId:"run2",title:"Run 45 miles",total:45,completed:1.25,quarter:3}},{node:{goalId:"learning1",title:"Advanced Redux course on redux",total:100,completed:25,quarter:3}},{node:{goalId:"learning2",title:"GraphQL track on Frontend Masters",total:100,completed:0,quarter:3}},{node:{goalId:"learning3",title:"D3 course on Pluralsight",total:100,completed:45,quarter:3}}]}}}}}]);
//# sourceMappingURL=component---src-pages-goals-js-6717227d955465d7608c.js.map