(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),a=c.n(n),r=c(12),i=c.n(r),l=c(14),o=c(13),d=c.n(o),j=(c(38),function(e){return Object(s.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(s.jsx)("img",{src:"...",className:"card-img-top",alt:"..."}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{className:"card-title",children:e.first}),Object(s.jsx)("p",{className:"card-text",children:e.age})]})]})}),u=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){d.a.get("https://randomuser.me/api/?results=10").then((function(e){console.log(e.data.results),a(e.data.results)})).catch((function(e){console.log(e)}))}),[]),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("h1",{className:"text-center",children:"Employee Directory"})})}),Object(s.jsx)("div",{className:"row",children:c.map((function(e){return Object(s.jsx)(j,{name:e.results.name.first,last:e.results.name.last,age:e.results.dob.age},e.results.id.value)}))})]})},m=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(u,{})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),b()}},[[39,1,2]]]);
//# sourceMappingURL=main.39b4ded6.chunk.js.map