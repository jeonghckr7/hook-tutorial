(this["webpackJsonphooks-tutorial"]=this["webpackJsonphooks-tutorial"]||[]).push([[0],{10:function(e,t,a){e.exports=a(24)},15:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),r=a.n(c),i=(a(15),a(9)),s=a(1),u=a(8),l=a.n(u),p=(a(20),l.a.initializeApp({apiKey:"AIzaSyBLHYeag273-F8L_funDb_8iUZO7BGZZW8",authDomain:"chat-app-55e32.firebaseapp.com",databaseURL:"https://chat-app-55e32.firebaseio.com",projectId:"chat-app-55e32",storageBucket:"chat-app-55e32.appspot.com",messagingSenderId:"485337347226"}).database());var d=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=(t[0],t[1],Object(n.useState)("")),c=Object(s.a)(a,2),r=(c[0],c[1],Object(n.useState)(!1)),u=Object(s.a)(r,2),l=(u[0],u[1],Object(n.useState)("")),d=Object(s.a)(l,2),h=d[0],b=d[1],m=Object(n.useState)({}),f=Object(s.a)(m,2),g=(f[0],f[1],Object(n.useState)([])),j=Object(s.a)(g,2),O=j[0],v=j[1],k=p.ref("clinets");Object(n.useEffect)((function(){var e=function(e){var t=e.val();t.key=e.key,v((function(e){return[].concat(Object(i.a)(e),[t])})),console.log("child_added-> "+e.key+" "+e.val().msg)};return k.on("child_added",e),function(){k.off("child_added",e)}}),[]);return o.a.createElement("div",null,Object.keys(O).map((function(e){return o.a.createElement("div",null,e,O[e].msg)})),o.a.createElement("input",{placeholder:"msg",onChange:function(e){return b(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(k.push({msg:h}),b(""))},value:h}),o.a.createElement("br",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.16092f46.chunk.js.map