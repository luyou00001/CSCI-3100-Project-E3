(this["webpackJsonpmagic-maze"]=this["webpackJsonpmagic-maze"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n.n(r),s=n(27),c=n.n(s),i=n(6),u=n(12),o=n(0),l=n.n(o),j=n(2),p=n(1),d=new u.a({id:"application-0-exwhb"});function b(e){var t=e.setUser,n=function(){var e=Object(j.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.logIn(u.b.anonymous());case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Failed to connect");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("a",{onClick:n,children:"login as guest"})}function h(e){var t=e.email,n=e.password,r=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.emailPasswordAuth.registerUser(t,n);case 3:alert("A confirmation mail has been sent to the mailbox."),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Invalid email or password");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("button",{onClick:r,children:"Register"})}function v(e){var t=e.setUser,n=e.email,r=e.password,a=function(){var e=Object(j.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.logIn(u.b.emailPassword(n,r));case 3:a=e.sent,t(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Invalid email or password");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("button",{onClick:a,children:"Login"})}function x(e){var t=e.setUser,n=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.currentUser.logOut();case 3:t(null),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Failed to connect");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("button",{onClick:n,children:"Log out"})}function m(e){var t=e.setUser,n=a.a.useState("signIn"),r=Object(i.a)(n,2),s=r[0],c=r[1],u=a.a.useState(""),o=Object(i.a)(u,2),l=o[0],j=o[1],d=a.a.useState(""),x=Object(i.a)(d,2),m=x[0],f=x[1],O=a.a.useState(""),g=Object(i.a)(O,2),w=g[0],k=g[1];return a.a.useEffect((function(){j(""),f(""),k("")}),[s]),Object(p.jsxs)("div",{children:["signIn"===s?Object(p.jsxs)("div",{className:"login_form",children:[Object(p.jsx)("input",{type:"email",placeholder:"email",value:m,onChange:function(e){return f(e.target.value)},className:"form_input"}),Object(p.jsx)("input",{type:"password",placeholder:"password",value:w,onChange:function(e){return k(e.target.value)},className:"form_input"}),Object(p.jsx)(v,{setUser:t,email:m,password:w})]}):Object(p.jsxs)("div",{className:"login_form",children:[Object(p.jsx)("input",{type:"username",placeholder:"username",value:l,onChange:function(e){return j(e.target.value)},className:"form_input"}),Object(p.jsx)("input",{type:"email",placeholder:"email",value:m,onChange:function(e){return f(e.target.value)},className:"form_input"}),Object(p.jsx)("input",{type:"password",placeholder:"password",value:w,onChange:function(e){return k(e.target.value)},className:"form_input"}),Object(p.jsx)(h,{email:m,password:w})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"You may also "}),Object(p.jsx)("a",{onClick:function(){c((function(e){return"signIn"===e?"signUp":"signIn"}))},children:"signIn"===s?"register a new account":"go to login"}),Object(p.jsx)("span",{children:" or "}),Object(p.jsx)(b,{setUser:t})]})]})}function f(e){var t=e.user,n=e.setUser;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"Navbar",children:[Object(p.jsxs)("div",{className:"App_header",children:[Object(p.jsx)("h1",{children:"Magic Maze"}),Object(p.jsx)("div",{children:"A game created by CSCI3100 Project Group E3"})]}),Object(p.jsx)("div",{className:"User_header",children:t?Object(p.jsxs)("div",{children:[Object(p.jsxs)("h2",{children:["Your id: ",t.id]}),Object(p.jsx)(x,{setUser:n})]}):Object(p.jsx)(m,{setUser:n})})]}),Object(p.jsx)("hr",{})]})}n(41);var O=new u.a({id:"application-0-exwhb"});var g=function(){var e=a.a.useState(O.currentUser),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(f,{user:n,setUser:r})})};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.8430789b.chunk.js.map