(this["webpackJsonpbook-author"]=this["webpackJsonpbook-author"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),a=n.n(o),i=n(7),r=n.n(i),s=(n(14),n(15),n(6)),l=n(4),u=n(8);var d=function(e){var t=e.todos,n=e.removeTodo,o=e.completedTodo;return Object(c.jsx)("div",{className:"fairly",children:t.map((function(e,t){return Object(c.jsxs)("div",{className:e.isComplete?"row complete":"row",children:[Object(c.jsx)("div",{className:"display",onClick:function(){return o(e.id)},children:e.value},e.id),Object(c.jsx)(u.a,{className:"icons",onClick:function(){return n(e.id)}})]},t)}))})};var j=function(e){var t=Object(o.useState)(""),n=Object(l.a)(t,2),a=n[0],i=n[1];return Object(c.jsxs)("div",{className:"input",children:[Object(c.jsx)("input",{type:"text",value:a,placeholder:"  Update Todo",onChange:function(e){return i(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){e.onSubmit({id:Math.floor(1e3*Math.random()),value:a,isComplete:!1}),i("")},children:"Update"})]})};var b=function(){var e=JSON.parse(localStorage.getItem("DataBase"))||[],t=Object(o.useState)(e),n=Object(l.a)(t,2),a=n[0],i=n[1];return Object(o.useEffect)((function(){localStorage.setItem("DataBase",JSON.stringify(a))}),[a]),Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("h1",{className:"title",children:"Todo App"}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(j,{onSubmit:function(e){""!==e.value&&i([].concat(Object(s.a)(a),[e]))}}),Object(c.jsx)(d,{todos:a,removeTodo:function(e){console.log(e);var t=Object(s.a)(a).filter((function(t){return t.id!==e}));i(t)},completedTodo:function(e){var t=a.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));i(t)}})]})]})};var m=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(b,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.3095c285.chunk.js.map