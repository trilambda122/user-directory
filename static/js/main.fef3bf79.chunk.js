(this["webpackJsonphw19-user-directory"]=this["webpackJsonphw19-user-directory"]||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),s=c.n(a),r=c(7),o=c.n(r),i=(c(24),c(10),c(14)),l=c(15),j=c.n(l),d=c(18),u=c(17),b=c(8),m=c(4),h=c(5),O=c(6),x=function(e){var t=e.data,c=e.updateVisUsers,r=Object(a.useState)(""),o=Object(b.a)(r,2),i=o[0],l=o[1];return Object(n.jsx)(s.a.Fragment,{children:Object(n.jsxs)("div",{className:"input-group mb-1 mt-3",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",id:"basic-addon1",onClick:function(){window.location.href="/hw19-user-directory"},children:Object(n.jsx)(O.a,{icon:h.e})})}),Object(n.jsx)("input",{type:"text",value:i,className:"form-control",placeholder:"Seach by lastname","aria-label":"Search","aria-describedby":"search-box",onChange:function(e){l(e.target.value),function(e){var n=t.filter((function(t){var c="^".concat(e),n=new RegExp(c,"gi");return t.name.last.match(n)}));c(n)}(e.target.value)}})]})})},f=(c(32),{}),p=function(){var e,t=Object(a.useState)([]),c=Object(b.a)(t,2),r=c[0],o=c[1],l=Object(a.useState)([]),p=Object(b.a)(l,2),g=p[0],N=p[1],w=s.a.useState(!1),v=Object(b.a)(w,2),y=v[0],C=v[1],S=function(){C(!1)},k=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://randomuser.me/api/?results=100&nat=us&seed=userdir");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,o(c.results),N(c.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){k()}),[]),Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsxs)(m.a,{show:y,onHide:S,children:[Object(n.jsxs)(m.a.Header,{children:[Object(n.jsx)(m.a.Title,{className:"font-weight-bold",children:f.name}),Object(n.jsx)(m.a.Title,{children:Object(n.jsx)("img",{src:f.image,className:"rounded-circle border border-secondary shadow-lg row-effect"})})]}),Object(n.jsxs)("p",{className:"ml-2 mr-2",children:[Object(n.jsx)(O.a,{icon:h.d,className:"mr-2"}),f.email]}),Object(n.jsxs)("p",(e={className:"ml-2 mr-2"},Object(i.a)(e,"className","ml-2"),Object(i.a)(e,"children",[Object(n.jsx)(O.a,{icon:h.g,className:"mr-2"}),f.phone]),e)),Object(n.jsxs)("p",{className:"ml-2 mr-2",children:[Object(n.jsx)(O.a,{icon:h.f,className:"mr-2"}),f.cell]}),Object(n.jsxs)("p",{className:"ml-2 mr-2 font-weight-light",children:[Object(n.jsx)(O.a,{icon:h.a,className:"mr-2"}),f.streetAddress,Object(n.jsx)("p",{className:"ml-4 font-weight-light",children:f.cityState}),"   "]}),Object(n.jsx)(m.a.Footer,{children:Object(n.jsx)("button",{class:"btn btn-secondary",onClick:S,children:"Close"})})]}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(x,{data:r,updateVisUsers:function(e){return N(e)}}),Object(n.jsxs)("table",{className:"table table-hover",children:[Object(n.jsx)("thead",{className:"thead-light",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col"}),Object(n.jsxs)("th",{scope:"col",children:["Name  ",Object(n.jsx)(O.a,{icon:h.c,onClick:function(e){!function(e){var t=Object(u.a)(r).sort((function(e,t){return e.name.last>t.name.last?1:-1}));o(t)}()}}),Object(n.jsx)(O.a,{icon:h.b,onClick:function(e){!function(e){var t=Object(u.a)(r).sort((function(e,t){return t.name.last>e.name.last?1:-1}));o(t)}()}})]}),Object(n.jsx)("th",{scope:"col",children:"Phone"})]})}),Object(n.jsx)("tbody",{children:g.map((function(e){return Object(n.jsxs)("tr",{className:"row-effect",onClick:function(t){!function(e,t,c,n,a,s,r){f={image:e,name:t,streetAddress:c,cityState:n,email:a,phone:s,cell:r},C(!0),console.log("---showing----"),console.log(f),console.log("---showing----")}(e.picture.large,"".concat(e.name.first," ").concat(e.name.last),"".concat(e.location.street.number," ").concat(e.location.street.name),"".concat(e.location.city,", ").concat(e.location.state,", ").concat(e.location.country),e.email,e.phone,e.cell)},children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:e.picture.thumbnail,alt:e.name.last,className:"rounded-circle border border-secondary shadow-lg"})}),Object(n.jsxs)("td",{children:[e.name.last,",",e.name.first]}),Object(n.jsx)("td",{className:"",children:e.phone})]},e.login.uuid)}))})]})]})]})};var g=function(){return Object(n.jsx)(s.a.Fragment,{children:Object(n.jsx)(p,{})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),N()}},[[33,1,2]]]);
//# sourceMappingURL=main.fef3bf79.chunk.js.map