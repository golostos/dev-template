(this["webpackJsonptodoapp-tsc"]=this["webpackJsonptodoapp-tsc"]||[]).push([[0],{84:function(e,t,r){},92:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(10),c=r.n(o),s=(r(84),r(133)),i=r(11),u=r(13),d=r.n(u),l=r(21),p=r(19),b=r(16),j=Object(p.b)("user/login",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/api/user/login",t);case 2:if(!(a=e.sent).ok){e.next=10;break}return e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.token);case 10:return e.abrupt("return",r.rejectWithValue("Incorrect name or password"));case 11:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),f=Object(p.c)({name:"users",initialState:{token:localStorage.getItem("Token")||"",isLogin:!!localStorage.getItem("Token"),userError:""},reducers:{logout:function(e){e.isLogin=!1,e.token="",localStorage.setItem("Token","")},setUserError:function(e,t){e.userError=t.payload}},extraReducers:function(e){e.addCase(j.fulfilled,(function(e,t){e.token=t.payload,e.isLogin=!0,e.userError="",localStorage.setItem("Token",t.payload)})),e.addCase(j.rejected,(function(e,t){e.token="",e.isLogin=!1,e.userError=t.payload,localStorage.setItem("Token","")}))}}),x=f.reducer,h=f.actions,m=h.logout,O=h.setUserError,g=function(e){return e.users.isLogin},k=function(e){return e.users.userError};function v(e,t,r){return fetch(e,{method:"POST",headers:{"Content-Type":"application/json",authorization:r||""},body:JSON.stringify(t)})}var y=Object(p.b)("tasks/fetchTasks",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var a,n,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.getState(),e.next=3,fetch("/api/tasks",{headers:{authorization:a.users.token}});case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return o=e.sent,e.abrupt("return",o);case 11:throw new Error("Response is not ok");case 12:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),w=Object(p.b)("tasks/createTask",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var a,n,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.getState(),e.next=3,v("/api/task",t,a.users.token);case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return o=e.sent,e.abrupt("return",o);case 11:throw new Error("Response is not ok");case 12:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),S=Object(p.b)("tasks/editTask",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.getState(),e.next=3,n="/api/task/"+t.id,o=t,c=a.users.token,fetch(n,{method:"PATCH",headers:{"Content-Type":"application/json",authorization:c||""},body:JSON.stringify(o)});case 3:if(!e.sent.ok){e.next=8;break}return e.abrupt("return",t);case 8:throw new Error("Response is not ok");case 9:case"end":return e.stop()}var n,o,c}),e)})));return function(t,r){return e.apply(this,arguments)}}()),C=Object(p.b)("tasks/removeTask",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.getState(),e.next=3,n="/api/task/"+t,o=a.users.token,fetch(n,{method:"DELETE",headers:{authorization:o||""}});case 3:if(!e.sent.ok){e.next=8;break}return e.abrupt("return",t);case 8:throw new Error("Response is not ok");case 9:case"end":return e.stop()}var n,o}),e)})));return function(t,r){return e.apply(this,arguments)}}()),T=Object(p.c)({name:"tasks",initialState:{status:"idle",error:null,tasks:[]},reducers:{resetTasks:function(e){e.status="idle",e.error=null,e.tasks=[]}},extraReducers:function(e){e.addCase(y.pending,(function(e,t){e.status="loading"})),e.addCase(y.fulfilled,(function(e,t){e.status="succeeded",e.tasks=e.tasks.concat(t.payload)})),e.addCase(y.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),e.addCase(w.fulfilled,(function(e,t){e.tasks.push(t.payload)})),e.addCase(C.fulfilled,(function(e,t){var r=e.tasks.filter((function(e){return e.id!==t.payload}));e.tasks=r})),e.addCase(S.fulfilled,(function(e,t){var r=e.tasks.find((function(e){return e.id===t.payload.id}));r&&(r.completed=t.payload.completed,r.text=t.payload.text)}))}}),N=T.actions.resetTasks,E=T.reducer,I=function(e){return e.tasks.tasks},L=function(e){return e.tasks.status},R=function(e){return e.tasks.error},z=r(38),D=r(129),H=r(139),P=r(136),B=r(138),W=r(144),F=r(147),A=r(134),J=r(5),G=Object(D.a)({root:{display:"flex",gap:".5rem",padding:"0 16px"},input:{flexGrow:1}});function U(e){var t=e.editTask,r=e.task,n=e.setOpen,o=G(),c=Object(a.useState)(r.text),s=Object(b.a)(c,2),i=s[0],u=s[1],d=Object(a.useState)(r.completed),l=Object(b.a)(d,2),p=l[0],j=l[1];return Object(J.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==i&&(t({id:r.id,text:i,completed:p}),n(!1))},className:o.root,children:[Object(J.jsx)(W.a,{className:o.input,value:i,onChange:function(e){u(e.target.value)},label:"Task",variant:"outlined"}),Object(J.jsx)(A.a,{control:Object(J.jsx)(F.a,{checked:p,onChange:function(e){return j(e.target.checked)},color:"primary"}),label:"Completed"}),Object(J.jsx)(P.a,{type:"submit",variant:"contained",color:"primary",children:"Save task"})]})}var M=r(148),V=r(145),q=r(137),K=r(94),Q=Object(D.a)((function(e){return Object(M.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:"#fff",border:"2px solid #000",boxShadow:"0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)",padding:"16px 32px 24px"}})}));function X(e){var t=e.children,r=e.open,a=e.setOpen,n=Q();return Object(J.jsx)(V.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:n.modal,open:r,onClose:function(){a(!1)},closeAfterTransition:!0,BackdropComponent:q.a,BackdropProps:{timeout:500},children:Object(J.jsx)(K.a,{in:r,children:Object(J.jsx)("div",{className:n.paper,children:t})})})}var Y=Object(D.a)({root:{gap:".5rem"}});function Z(e){var t=e.task,r=Y(),a=n.a.useState(!1),o=Object(b.a)(a,2),c=o[0],s=o[1],u=Object(i.b)();return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(B.a,{button:!0,className:r.root,children:[Object(J.jsx)(H.a,{onClick:function(){u(S(Object(z.a)(Object(z.a)({},t),{},{completed:!t.completed})))},style:{textDecoration:t.completed?"line-through":"none"},children:t.text}),Object(J.jsx)(P.a,{variant:"contained",color:"primary",onClick:function(){return s(!0)},children:"Edit"}),Object(J.jsx)(P.a,{variant:"contained",color:"secondary",onClick:function(){u(C(t.id))},children:"Remove"})]}),c&&Object(J.jsx)(X,{open:c,setOpen:s,children:Object(J.jsx)(U,{editTask:function(e){u(S(e))},task:t,setOpen:s})})]})}var $=r(140),_=r(146),ee=Object(D.a)({loader:{position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto"}});function te(){var e=ee(),t=Object(i.b)(),r=Object(i.c)(I),n=Object(i.c)(L),o=Object(i.c)(R);Object(a.useEffect)((function(){"idle"===n&&t(y())}),[n,t]);return"loading"===n?Object(J.jsx)($.a,{className:e.loader}):"succeeded"===n?Object(J.jsx)(s.a,{component:"ul",children:r.map((function(e){return Object(J.jsx)(Z,{task:e},e.id)}))}):"failed"===n?Object(J.jsx)(_.a,{severity:"error",children:o}):null}var re=Object(D.a)({root:{display:"flex",gap:".5rem",padding:"0 16px"},input:{flexGrow:1}});function ae(){var e=re(),t=Object(a.useState)(""),r=Object(b.a)(t,2),n=r[0],o=r[1],c=Object(i.b)();return Object(J.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==n&&(c(w({text:n,completed:!1})),o(""))},className:e.root,children:[Object(J.jsx)(W.a,{className:e.input,value:n,onChange:function(e){o(e.target.value)},label:"Task",variant:"outlined"}),Object(J.jsx)(P.a,{type:"submit",variant:"contained",color:"primary",children:"Add task"})]})}var ne=r(141);var oe=r(68),ce=Object(D.a)({card:{border:"0",borderRadius:"6px",color:"rgba(0, 0, 0, 0.87)",background:"#fff",width:"100%",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",position:"relative",display:"flex",flexDirection:"column",minWidth:"0",wordWrap:"break-word",fontSize:".875rem",transition:"all 300ms linear"}});function se(e){var t=ce(),r=e.className,a=e.children,n=Object(oe.a)(e,["className","children"]);return Object(J.jsx)("div",Object(z.a)(Object(z.a)({className:t.card+" "+r},n),{},{children:a}))}var ie,ue=(ie="/img/bg7.jpg",Object(D.a)({cardHidden:{opacity:"0",transform:"translate3d(0, -60px, 0)"},cardHeader:{padding:"20px 0",textAlign:"center",margin:"-40px 20px 15px 20px",background:"linear-gradient(60deg, #ab47bc, #8e24aa)",boxShadow:"0 12px 20px -10px rgb(156 39 176 / 28%), 0 4px 20px 0px rgb(0 0 0 / 12%), 0 7px 8px -5px rgb(156 39 176 / 20%)",color:"white",borderRadius:"3px","& h2":{fontWeight:300}},cardBody:{padding:"2rem 1.875rem",display:"flex",flex:"1 1 auto",flexDirection:"column",gap:"1rem"},gridContainer:{width:"auto",height:"100vh",zIndex:2,position:"relative"},gridItem:{paddingRight:"15px",paddingLeft:"15px"},pageHeader:{minHeight:"100vh",height:"auto",display:"inherit",position:"relative",margin:"0",padding:"0",border:"0",alignItems:"center",backgroundImage:"url('".concat(ie,"')"),backgroundSize:"cover",backgroundPosition:"top center","&:before":{background:"rgba(0, 0, 0, 0.5)"},"&:before,&:after":{position:"absolute",zIndex:"1",width:"100%",height:"100%",display:"block",left:"0",top:"0",content:'""'}}}));function de(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),r=t[0],n=t[1],o=Object(a.useState)(""),c=Object(b.a)(o,2),s=c[0],u=c[1],p=Object(i.b)(),f=Object(a.useState)(!1),x=Object(b.a)(f,2),h=x[0],m=x[1];setTimeout((function(){return m(!0)}),700);var g=ue(),y=Object(i.c)(k);function w(){return(w=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),p(j({name:r,password:s}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(l.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r.length>2&&s.length>3)){e.next=21;break}return e.next=3,v("/api/user",{name:r,password:s});case 3:if(!(t=e.sent).ok){e.next=8;break}p(j({name:r,password:s})),e.next=19;break;case 8:return e.prev=8,e.next=11,t.json();case 11:a=e.sent,n=a.message,p(O(n)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(8),p(O("Server error"));case 19:e.next=22;break;case 21:p(O("Name or password is very short"));case 22:case"end":return e.stop()}}),e,null,[[8,16]])})))).apply(this,arguments)}return Object(J.jsx)("div",{className:g.pageHeader,children:Object(J.jsx)(ne.a,{container:!0,justify:"center",alignItems:"center",className:g.gridContainer,children:Object(J.jsx)(ne.a,{item:!0,xs:12,sm:6,md:4,className:g.gridItem,children:Object(J.jsx)(se,{className:h?"":g.cardHidden,children:Object(J.jsxs)("form",{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(J.jsx)("div",{className:g.cardHeader,children:Object(J.jsx)("h2",{children:"Login"})}),Object(J.jsxs)("div",{className:g.cardBody,children:[y&&Object(J.jsx)(_.a,{severity:"error",children:y}),Object(J.jsx)(W.a,{value:r,onChange:function(e){return n(e.target.value)},label:"User name",variant:"outlined"}),Object(J.jsx)(W.a,{type:"password",value:s,onChange:function(e){return u(e.target.value)},label:"Password",variant:"outlined"}),Object(J.jsx)(P.a,{type:"submit",variant:"contained",color:"primary",children:"Login"}),Object(J.jsx)(P.a,{onClick:function(){return S.apply(this,arguments)},variant:"contained",color:"secondary",children:"Registration"})]})]})})})})})}var le=r(142),pe=r(143),be=r(47),je=Object(D.a)((function(e){return Object(M.a)({root:{margin:"1rem auto",minWidth:300,maxWidth:800},title:{flexGrow:1}})}));var fe=function(){var e=Object(i.c)(g),t=je(),r=Object(i.b)();return e?Object(J.jsxs)("div",{children:[Object(J.jsx)(le.a,{position:"static",children:Object(J.jsxs)(pe.a,{children:[Object(J.jsx)(be.a,{variant:"h6",className:t.title,children:"Tasks"}),Object(J.jsx)(P.a,{onClick:function(){r(m()),r(N())},color:"inherit",children:"Logout"})]})}),Object(J.jsxs)("div",{className:t.root,children:[Object(J.jsx)(ae,{}),Object(J.jsx)(te,{})]})]}):Object(J.jsx)(de,{})},xe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,149)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),o(e),c(e)}))},he=Object(p.a)({reducer:{tasks:E,users:x}});c.a.render(Object(J.jsx)(n.a.StrictMode,{children:Object(J.jsx)(i.a,{store:he,children:Object(J.jsx)(fe,{})})}),document.getElementById("root")),xe()}},[[92,1,2]]]);
//# sourceMappingURL=main.95909185.chunk.js.map