(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/bg.fb4c7466.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/pcBG.a5f9e157.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/image0.12605d55.jpeg"},37:function(e,t,a){e.exports=a.p+"static/media/image1.9db4d0ee.jpeg"},38:function(e,t,a){e.exports=a.p+"static/media/image2.500d6197.jpeg"},39:function(e,t,a){e.exports=a.p+"static/media/imagePC0.17bf0afc.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/imagePC1.d0322002.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/imagePC2.9cf6c282.jpg"},42:function(e,t,a){e.exports=a(84)},49:function(e,t,a){},51:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},52:function(e,t,a){},81:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(30),l=a.n(c),o=(a(49),a(51),a(52),a(7)),s=a(2),u=a(4),i=a.n(u),m=a(3),d=a(19),w=Object(d.b)({name:"loginInfo",initialState:{username:"",password:"",tasksState:[]},reducers:{setLoginData:function(e,t){e.username=t.payload.username,e.password=t.payload.password},updateTasks:function(e,t){e.tasksState=Object(o.a)(t.payload.data)}}}),b=w.actions,g=Object(d.a)({reducer:w.reducer}),f=a(33),p=function(e){var t=Object(n.useState)("scale-in-center"),a=Object(s.a)(t,2),c=a[0],l=a[1],u=(Object(m.c)(function(e){return e.tasksState}),Object(m.b)()),d=(Object(m.b)(),Object(n.useRef)());return r.a.createElement("div",{className:"w3-display-container ".concat(c)},r.a.createElement("span",{onClick:function(){l("scale-out-center"),setTimeout(function(){e.close(),l("scale-in-center")},500)},className:"fa fa-close w3-xxlarge w3-text-red w3-display-topright"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"w3-container w3-black "},r.a.createElement("br",null),r.a.createElement("textarea",{ref:d,onKeyPress:function(t){"Enter"===t.key&&(d.current.value,i.a.post("/updateNote",{username:e.username,id:e.id,notes:d.current.value}).then(function(t){i.a.post("/getNotes",{username:e.username}).then(function(t){u(b.updateTasks({data:Object(o.a)(t.data)})),e.close()})}).catch(function(e){return console.log("Err Msg",e)}))},className:"w3-input w3-xlarge dancingFont",type:"textarea",defaultValue:e.text}),r.a.createElement("br",null),r.a.createElement("div",{onClick:function(){d.current.value,i.a.post("/updateNote",{username:e.username,id:e.id,notes:d.current.value}).then(function(t){i.a.post("/getNotes",{username:e.username}).then(function(e){u(b.updateTasks({data:Object(o.a)(e.data)}))})}).catch(function(e){return console.log("Err Msg",e)}),e.close()},className:"w3-button w3-white w3-right fa  fa-save w3-xxlarge w3-round-large"}),r.a.createElement("div",{onClick:function(){i.a.post("/deleteNote",{username:e.username,id:e.id}).then(function(t){i.a.post("/getNotes",{username:e.username}).then(function(e){console.log(e),u(b.updateTasks({data:Object(o.a)(e.data)}))})}),e.close()},className:"w3-button w3-red  fa fa-trash w3-xxlarge w3-round-large"}),r.a.createElement("br",null),r.a.createElement("br",null)))},E=function(e){var t=Object(n.useState)({status:!1,color:""}),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),u=Object(s.a)(o,2),d=u[0],w=u[1],b=Object(m.c)(function(e){return e.username});Object(n.useEffect)(function(){i.a.post("/getNoteStatus",{id:e.number,username:b}).then(function(e){l(e.data?{status:!0,color:"w3-text-red"}:{status:!1,color:""})})},[]);var g=Object(f.useLongPress)(function(){w(!0)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",Object.assign({},g(),{onContextMenu:function(e){e.preventDefault(),w(!0)},onClick:function(){d||(l(c.status?{status:!1,color:""}:{status:!0,color:"w3-text-red"}),i.a.post("/completeStatus",{id:e.number,username:b}).then(function(e){}))},className:"w3-container dancingFont w3-xlarge  scale-in-center  w3-large w3-border-bottom w3-margin "}),!c.status&&r.a.createElement("span",{className:c.color},"  ",r.a.createElement("span",{className:"w3-wide fa fa-circle "}," ")," ","  ",e.text," "," "),c.status&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement("span",{className:"w3-wide fa fa-check-circle"}," ")," ",r.a.createElement("strike",{className:c.color},"   ","  ",e.text," "," "))),d&&r.a.createElement(p,{close:function(){w(!1)},username:b,id:e.number,text:e.text}))},h=a(9),v=function(e){var t,a=Object(h.a)("(min-width:700px)"),c=Object(n.useRef)(),l=Object(m.b)(),s=Object(m.c)(function(e){return e.username}),u=Object(m.c)(function(e){return e.tasksState});a?t="50%":a||(t="100%");return r.a.createElement("div",{style:{width:t,position:"fixed"},className:" w3-container w3-card-4 w3-black w3-display-bottommiddle"},r.a.createElement("br",null),r.a.createElement("input",{ref:c,onKeyPress:function(e){"Enter"===e.key&&c.current.value.replace(/\s+/g,"").length>0&&i.a.post("/addNote",{text:c.current.value,username:s}).then(function(e){l(b.updateTasks({data:[].concat(Object(o.a)(u),[{id:e.data.id,notes:e.data.notes}])})),c.current.value=""})},className:"w3-input  w3-center w3-large w3-white",type:"text",placeholder:"Write Task..."}),r.a.createElement("br",null),r.a.createElement("div",{onClick:e.cancelHandler,className:"w3-red w3-wide w3-button fa fa-close w3-xxlarge w3-round-large w3-center  w3-padding-small"}),r.a.createElement("div",{onClick:function(){e.saveTaskHandler(c.current.value),c.current.value=""},className:"w3-white fa fa-save w3-xxlarge w3-round-large w3-wide w3-button w3-right  w3-padding-small"}),r.a.createElement("br",null),r.a.createElement("br",null))},j=a(0),x=(a(80),function(){var e=Object(m.c)(function(e){return e.username}),t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(!1),d=Object(s.a)(u,2),w=d[0],g=d[1],f=Object(m.c)(function(e){return e.tasksState}),p=Object(m.b)(),x="";x=Object(h.a)("(min-width:700px)")?"50%":"";var O=function(){l(!c)};Object(n.useEffect)(function(){i.a.post("/getNotes",{username:e}).then(function(e){p(b.updateTasks({data:Object(o.a)(e.data)}))})},[]);if(w)return r.a.createElement(j.a,{to:"/"});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w3-center  w3-container w3-black w3-wide w3-xlarge"},"Daily ToDo"),r.a.createElement("br",null),r.a.createElement("div",{className:"w3-bar"},r.a.createElement("div",{onClick:function(){i.a.post("/endTheDay",{username:e}).then(function(t){i.a.post("/getNotes",{username:e}).then(function(e){p(b.updateTasks({data:Object(o.a)(e.data)}))})})},className:"w3-button w3-bar-item w3-black w3-card-4 w3-round w3-hover-black w3-badge"},"END DAY"),r.a.createElement("div",{onClick:function(){localStorage.setItem("todoUserName",""),localStorage.setItem("todoPassword",""),g(!0)},className:"w3-button w3-bar-item w3-right w3-black w3-xlarge w3-card-4 w3-round w3-hover-black fa fa-sign-out w3-badge"})),r.a.createElement("br",null),r.a.createElement("div",{id:"tasks",style:{width:x,margin:"auto"},className:"w3-container w3-padding"},f.map(function(e){return r.a.createElement(E,{key:e.id,number:e.id,text:e.notes})}),r.a.createElement("br",null),"  ",r.a.createElement("br",null),"  ",r.a.createElement("br",null),"  ",r.a.createElement("br",null),"  ",r.a.createElement("br",null),"  ",r.a.createElement("br",null),"  ",r.a.createElement("br",null)),c&&r.a.createElement(v,{cancelHandler:O,saveTaskHandler:function(t){t.replace(/\s+/g,"").length>0&&i.a.post("/addNote",{text:t,username:e}).then(function(e){p(b.updateTasks({data:[].concat(Object(o.a)(f),[{id:e.data.id,notes:e.data.notes}])}))})}}),!c&&r.a.createElement("div",{onClick:O,style:{position:"fixed",width:"80px",height:"80px",marginRight:"10px",marginBottom:"10px"},className:" roll-in-left  w3-center w3-badge w3-hover-transparent w3-display-bottomright w3-jumbo w3-text-black fa fa-pencil w3-transparent"}))}),O=a(11),k=a(34),N=a.n(k),y=a(35),S=a.n(y),C=function(){var e,t,a,c,l=Object(h.a)("(min-width:700px)");l?(c="tutorialViewPC",a="/tutorialPC",e=S.a,t="50%"):l||(c="tutorialViewPhone",a="/tutorialPhone ",e=N.a,t="90%");var o=Object(n.useState)(!1),u=Object(s.a)(o,2),d=u[0],w=u[1],g=Object(m.b)(),f=Object(n.useState)(!0),p=Object(s.a)(f,2),E=p[0],v=p[1],x=Object(n.useState)(!1),k=Object(s.a)(x,2),y=k[0],C=k[1],P=Object(n.useState)(!1),I=Object(s.a)(P,2),T=I[0],F=I[1],D=Object(n.useState)(r.a.createElement(r.a.Fragment,null)),R=Object(s.a)(D,2),L=R[0],U=R[1],H=Object(n.useRef)(),V=Object(n.useRef)(),A=Object(n.useState)(!0),B=Object(s.a)(A,2),K=B[0],M=B[1],z=Object(n.useState)(!1),W=Object(s.a)(z,2),J=W[0],Y=W[1];Object(n.useEffect)(function(){var e=localStorage.getItem("todoUserName"),t=localStorage.getItem("todoPassword");g(b.setLoginData({username:e,password:t})),i.a.post("/auth",{username:e,password:t}).then(function(e){!0===e.data.authorized?w(!0):w(!1)})},[]);var G=Object(n.useState)({characters:r.a.createElement("li",null,"atleast 8 characters."),uppercase:r.a.createElement("li",null,"atlease 1 uppercase letter."),numbers:r.a.createElement("li",null,"at least one number")}),Z=Object(s.a)(G,2),q=Z[0],Q=Z[1];return d?"true"==localStorage.getItem(c)?r.a.createElement(j.a,{to:"/home"}):r.a.createElement(j.a,{to:a}):r.a.createElement("div",{style:{backgroundImage:"url(".concat(e,")"),minWidth:window.innerWidth,minHeight:window.innerHeight,backgroundSize:"cover",backgroundRepeat:"no-repeat"}},r.a.createElement("div",{className:"w3-black w3-xlarge w3-wide w3-center"},"Daily ToDo"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),!E&&r.a.createElement("div",{className:"w3-wide w3-text-red w3-center rotate-hor-center"},"invalid password or username. ",r.a.createElement("br",null)," if you are a new user the try creating account."),T&&r.a.createElement("div",{className:"w3-wide w3-text-red w3-center rotate-hor-center"},"Username Already exists!!!",r.a.createElement("br",null)," try another..."),L,y&&r.a.createElement("div",{className:"w3-wide w3-text-green w3-center rotate-hor-center"},"Congratulations!",r.a.createElement("br",null)," You are Registered Now...",r.a.createElement("br",null),r.a.createElement("br",null),"Try Logging In Now..."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{style:{width:t,margin:"auto"},className:"w3-card-4 w3-round-xlarge w3-container"},r.a.createElement("br",null),r.a.createElement("div",{className:"w3-display-container"},r.a.createElement("input",{onKeyUp:function(){Y(!0),H.current.value.length>7&&Y(!1)},ref:H,type:"text",style:{width:"100%",margin:"auto"},className:"w3-input w3-center w3-wide w3-black",placeholder:"Enter UserName..."}),r.a.createElement("br",null),J&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement("div",{className:" w3-round-large w3-padding bounce-in-top  w3-red"},r.a.createElement("span",{className:"fa fa-circle"})," must be atleast 8 characters"),r.a.createElement("br",null)),r.a.createElement("input",{onKeyUp:function(){M(!1);var e=new RegExp("^(?=.*\\d)"),t=new RegExp("^(?=.*[A-Z])");t.test(V.current.value)?Q(function(e){return Object(O.a)({},e,{uppercase:""})}):(M(!1),Q(function(e){return Object(O.a)({},e,{uppercase:r.a.createElement("li",null,"atlease 1 uppercase letter.")})})),V.current.value.length>7?Q(function(e){return Object(O.a)({},e,{characters:""})}):(M(!1),Q(function(e){return Object(O.a)({},e,{characters:r.a.createElement("li",null,"atleast 8 characters.")})})),e.test(V.current.value)?Q(function(e){return Object(O.a)({},e,{numbers:""})}):(M(!1),Q(function(e){return Object(O.a)({},e,{numbers:r.a.createElement("li",null,"at least one number")})})),t.test(V.current.value)&&V.current.value.length>7&&e.test(V.current.value)?M(!0):M(!1)},ref:V,type:"password",style:{width:"100%",margin:"auto"},className:"w3-input w3-center w3-wide w3-black",placeholder:"Enter Password..."}),r.a.createElement("br",null),!K&&r.a.createElement("ul",{className:"w3-red w3-round-large bounce-in-top"},q.characters,q.uppercase,q.numbers),r.a.createElement("br",null),"  ",r.a.createElement("br",null),"  ",r.a.createElement("br",null),r.a.createElement("div",{style:{width:"100%"},className:"w3-display-bottommiddle"},r.a.createElement("div",{onClick:function(){!J&&K&&H.current.value.length>0&&V.current.value.length>0&&(localStorage.setItem("todoUserName",H.current.value),localStorage.setItem("todoPassword",V.current.value),g(b.setLoginData({username:H.current.value,password:V.current.value})),i.a.post("/auth",{username:H.current.value,password:V.current.value}).then(function(e){!0===e.data.authorized?w(!0):(U(r.a.createElement(r.a.Fragment,null)),w(!1),C(!1),F(!1),v(!1))}))},style:{width:"100%"},className:"w3-button w3-black w3-round w3-wide "},"login"),"  ",r.a.createElement("br",null),"  ",r.a.createElement("br",null),r.a.createElement("div",{onClick:function(){!J&&K&&""!=H.current.value&&""!=V.current.value?(localStorage.setItem("todoUserName",H.current.value),localStorage.setItem("todoPassword",V.current.value),g(b.setLoginData({username:H.current.value,password:V.current.value})),i.a.post("/register",{username:H.current.value,password:V.current.value}).then(function(e){e.data.userCreated?(U(r.a.createElement(r.a.Fragment,null)),C(!0),v(!0),F(!1)):(U(r.a.createElement(r.a.Fragment,null)),C(!1),F(!0),v(!0))})):U(r.a.createElement("div",{className:"w3-wide w3-text-red w3-center w3-margin rotate-hor-center"},"Please fill the username and choose the password and then click create account..."))},style:{width:"100%"},className:"w3-button w3-black w3-round w3-wide "},"create Account")),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("br",null)))},P=(a(81),a(36)),I=a.n(P),T=a(37),F=a.n(T),D=a(38),R=a.n(D),L=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],l=[I.a,F.a,R.a],o=Object(n.useState)(0),u=Object(s.a)(o,2),i=u[0],m=u[1],d=!0,w=!1;0==i&&(d=!0),1==i&&(w=!0,d=!0),2==i&&(d=!1,w=!0);return a?r.a.createElement(j.a,{to:"/home"}):r.a.createElement("div",{className:"w3-container w3-black"},r.a.createElement("div",{style:{animationDuration:"2s",animationIterationCount:"infinite"},className:"w3-xlarge heartbeat w3-text-red w3-black dancingFont w3-center w3-wide w3-margin"},["Click pencil to add tasks","Click task to mark it done","Long press to edit or delete"][i]," "),r.a.createElement("div",{className:"w3-display-container"},r.a.createElement("div",{className:"w3-display-container w3-opacity-min w3-middle w3-margin-left w3-margin-bottom w3-margin-right"},r.a.createElement("img",{className:"w3-image scale-in-center",src:l[i]})),d&&r.a.createElement("div",{onClick:function(){m(function(e){return e+1})},className:"w3-display-right fa fa-arrow-right  w3-center w3-blue w3-button w3-card-4 w3-xxlarge"}),w&&r.a.createElement("div",{onClick:function(){m(function(e){return e-1})},className:"w3-display-left fa fa-arrow-left  w3-center w3-blue w3-button w3-card-4 w3-xxlarge"}),r.a.createElement("div",{onClick:function(){localStorage.setItem("tutorialViewPhone","true"),c(!0)},className:"w3-display-bottomleft fa fa-close  w3-center w3-round   w3-blue w3-button w3-card-4 w3-wide w3-xxlarge"}," ")),r.a.createElement("br",null)," ",r.a.createElement("br",null))},U=a(39),H=a.n(U),V=a(40),A=a.n(V),B=a(41),K=a.n(B),M=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],l=[H.a,A.a,K.a],o=Object(n.useState)(0),u=Object(s.a)(o,2),i=u[0],m=u[1],d=!0,w=!1;0==i&&(d=!0),1==i&&(w=!0,d=!0),2==i&&(d=!1,w=!0);return a?r.a.createElement(j.a,{to:"/home"}):r.a.createElement("div",{className:"w3-container w3-black"},r.a.createElement("div",{style:{animationDuration:"2s",animationIterationCount:"infinite"},className:"w3-xlarge heartbeat w3-text-red w3-black dancingFont w3-center w3-wide w3-margin"},["Click pencil to add tasks","Click task to mark it done","Right click to edit or delete"][i]," "),r.a.createElement("div",{className:"w3-display-container"},r.a.createElement("div",{className:"w3-display-container w3-opacity-min w3-middle w3-margin-left w3-margin-bottom w3-margin-right"},r.a.createElement("img",{className:"w3-image scale-in-center",src:l[i]})),d&&r.a.createElement("div",{onClick:function(){m(function(e){return e+1})},className:"w3-display-right fa fa-arrow-right  w3-center w3-blue w3-button w3-card-4 w3-xxlarge"}),w&&r.a.createElement("div",{onClick:function(){m(function(e){return e-1})},className:"w3-display-left fa fa-arrow-left  w3-center w3-blue w3-button w3-card-4 w3-xxlarge"}),r.a.createElement("div",{onClick:function(){localStorage.setItem("tutorialViewPC","true"),c(!0)},className:"w3-display-bottomleft fa fa-close  w3-center w3-round   w3-blue w3-button w3-card-4 w3-wide w3-xxlarge"}," ")),r.a.createElement("br",null)," ",r.a.createElement("br",null))};var z=function(){return Object(m.c)(function(e){return e.username}),Object(m.c)(function(e){return e.password}),Object(h.a)("(min-width:700px)"),r.a.createElement(r.a.Fragment,null,r.a.createElement(j.d,null,r.a.createElement(j.b,{path:"/",element:r.a.createElement(C,null)}),r.a.createElement(j.b,{path:"/home",element:r.a.createElement(x,null)}),r.a.createElement(j.b,{path:"/tutorialPhone",element:r.a.createElement(L,null)}),r.a.createElement(j.b,{path:"/tutorialPC",element:r.a.createElement(M,null)})))},W=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,85)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)})},J=a(10);l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J.a,null,r.a.createElement(m.a,{store:g}," ",r.a.createElement(z,null))))),W()}},[[42,3,2]]]);
//# sourceMappingURL=main.27232841.chunk.js.map