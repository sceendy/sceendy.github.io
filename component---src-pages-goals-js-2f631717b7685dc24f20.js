(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{137:function(e,t,a){"use strict";a.r(t);var n=a(151),r=a(0),o=a.n(r),l=a(144);t.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement("h2",null,"Q1 2019 goals"),o.a.createElement(l.b,{query:"1720493361",render:function(e){return e.allJson.edges.map(function(e,t){var a,n,r=e.node;return o.a.createElement("div",{className:"goal__container",key:t},r.title,r.completed!==r.total?o.a.createElement("span",{className:"goal__percentage"},(a=r.completed,n=r.total,Math.floor(a/n*100)+"%")):o.a.createElement("span",{className:"goal__percentage goal__percentage--filled"},"100%"),o.a.createElement("progress",{max:"100",value:r.completed/r.total*100,id:r.goalId}))})},data:n}))}},143:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},144:function(e,t,a){"use strict";a.d(t,"b",function(){return i});var n=a(0),r=a.n(n),o=a(4),l=a.n(o),c=a(28),u=a.n(c);a.d(t,"a",function(){return u.a});a(143);var d=r.a.createContext({}),i=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};i.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},146:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),c=a(48),u=a(2),d=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=d},151:function(e){e.exports={data:{allJson:{edges:[{node:{goalId:"personalProject",title:"Work on personal project for 20 hours",total:20,completed:8,quarter:1}},{node:{goalId:"meditate",title:"Meditate for 4 hours",total:240,completed:210,quarter:1}},{node:{goalId:"run",title:"Run 50 miles",total:50,completed:32.98,quarter:1}},{node:{goalId:"loseWeight",title:"Lose 15lbs",total:15,completed:3,quarter:1}},{node:{goalId:"learning1",title:"Complete Udacitys' Intro to CS course",total:100,completed:52,quarter:1}},{node:{goalId:"learning2",title:"Complete Pluralsights' React Path",total:100,completed:100,quarter:1}}]}}}}}]);
//# sourceMappingURL=component---src-pages-goals-js-2f631717b7685dc24f20.js.map