(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{17:function(e,n,t){e.exports=t(40)},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(16),c=t.n(u),o=t(6),l=t(2),i=function(e){var n=e.persons,t=e.onClick;return 0===n.length?r.a.createElement(r.a.Fragment,null,"No numbers found"):r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"name"),r.a.createElement("th",{scope:"col"},"phone number"))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.number),r.a.createElement("td",null,r.a.createElement("button",{onClick:t,value:e.id},"delete")))}))))},m=function(e){var n=e.onClick,t=e.newName,a=e.newNumber,u=e.onNewNameChange,c=e.onNewNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:u})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},f=function(e){var n=e.filter,t=e.onFilterChange;return r.a.createElement("div",null,"Filter: ",r.a.createElement("input",{value:n,onChange:t}))},s=t(4),d=t.n(s),h="https://phonebook-anysnk.herokuapp.com/api/phonebook",b=function(){return d.a.get(h).then((function(e){return e.data}))},p=function(e){return d.a.post(h,e).then((function(e){return e.data}))},E=function(e){return d.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},v=function(e,n){var t={name:e.name,number:n,id:e.id};return d.a.put("".concat(h,"/").concat(e.id),t).then((function(e){return e.data}))},g=function(e){var n=e.notification;return n==={}?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:n.type},n.message))},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),d=s[0],h=s[1],w=Object(a.useState)(""),N=Object(l.a)(w,2),k=N[0],C=N[1],y=Object(a.useState)(""),j=Object(l.a)(y,2),O=j[0],D=j[1],F=Object(a.useState)({}),S=Object(l.a)(F,2),x=S[0],P=S[1];Object(a.useEffect)((function(){b().then((function(e){return u(e)}))}),[]);var I=function(){return t.reduce((function(e,n){return e||n.name===d&&n.number===k}),!1)},J=function(e,n){P({type:e,message:n}),setTimeout((function(){P({})}),5e3)};return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(g,{notification:x}),r.a.createElement("h3",null,"Add a new person to Phonebook"),r.a.createElement(m,{onClick:function(e){e.preventDefault(),b().then((function(e){return u(e)})).then((function(e){if(I())J("error","identical entry already exists");else if(t.map((function(e){return e.name})).includes(d)){if(window.confirm("Person already exists with different number. Update?")){var n=t.filter((function(e){return e.name===d}))[0];v(n,k).then((function(e){var n=Object(o.a)(t),a=n.findIndex((function(e){return e.name===d}));n[a].number=k,u(n),J("success","Number updated")})).catch((function(e){console.log(e),J("error","couldnt update number, entry not found")}))}}else p({name:d,number:k}).then((function(e){J("success","added ".concat(d)),u(Object(o.a)(t).concat(e))})).catch((function(e){return J("error","there was a problem adding ".concat(d," to the server"))}))}))},newName:d,newNumber:k,onNewNameChange:function(e){e.preventDefault(),h(e.target.value)},onNewNumberChange:function(e){e.preventDefault(),C(e.target.value)}}),r.a.createElement("h3",null,"Numbers:"),r.a.createElement(f,{filter:O,onFilterChange:function(e){e.preventDefault(),D(e.target.value)}}),r.a.createElement(i,{persons:t.filter((function(e){return e.name.toLowerCase().includes(O.toLowerCase())||e.number.includes(O)})),onClick:function(e){if(e.preventDefault(),window.confirm("Do you really want to delete this entry?")){var n=Number(e.target.value);E(n).then((function(e){u(t.filter((function(e){return e.id!==n})))})).then((function(){return J("success","person was deleted")})).catch((function(e){J("error","could not delete this entry, not present on the server"),u(t.filter((function(e){return e.id!==n})))}))}}}))};t(39);c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.eac9d2f9.chunk.js.map