(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,a,t){"use strict";t.r(a);var r=t(159),n=t(0),o=t.n(n),l=t(152);a.default=function(){return o.a.createElement(n.Fragment,null,o.a.createElement("h2",null,"Q3 2019 goals"),o.a.createElement(l.b,{query:"145702619",render:function(e){return e.allJson.edges.map(function(e,a){var t,r,n=e.node,l=(t=n.completed,r=n.total,""+Math.floor(t/r*100));return o.a.createElement("div",{className:"goal__container",key:a,"aria-label":"progress bars for goals"},n.title,parseInt(l)<=94?o.a.createElement("span",{className:"goal__percentage"},l,"%"):o.a.createElement("span",{className:"goal__percentage goal__percentage--filled"},l,"%"),o.a.createElement("progress",{max:"100",value:l,id:n.goalId}))})},data:r}))}},151:function(e,a,t){var r;e.exports=(r=t(154))&&r.default||r},152:function(e,a,t){"use strict";t.d(a,"b",function(){return s});var r=t(0),n=t.n(r),o=t(4),l=t.n(o),d=t(33),u=t.n(d);t.d(a,"a",function(){return u.a});t(151);var c=n.a.createContext({}),s=function(e){return n.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},154:function(e,a,t){"use strict";t.r(a);t(34);var r=t(0),n=t.n(r),o=t(4),l=t.n(o),d=t(55),u=t(2),c=function(e){var a=e.location,t=u.default.getResourcesForPathnameSync(a.pathname);return n.a.createElement(d.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=c},159:function(e){e.exports={data:{allJson:{edges:[{node:{goalId:"personalProject",title:"Complete MVP stories for personal app",total:8,completed:0,quarter:3}},{node:{goalId:"meditate",title:"Meditate for 5 hours",total:300,completed:50,quarter:3}},{node:{goalId:"read",title:"Read 3 books",total:3,completed:.5,quarter:3}},{node:{goalId:"run2",title:"Run 45 miles",total:45,completed:12.43,quarter:3}},{node:{goalId:"learning1",title:"Advanced Redux course / Pluralsight",total:100,completed:29,quarter:3}},{node:{goalId:"learning2",title:"GraphQL track / Frontend Masters",total:100,completed:0,quarter:3}},{node:{goalId:"learning3",title:"D3 course / Pluralsight",total:100,completed:45,quarter:3}}]}}}}}]);
//# sourceMappingURL=component---src-pages-goals-js-050419bf7597811f3f5e.js.map