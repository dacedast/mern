(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(52),n=a.n(r),i=(a(62),a(4)),l=a(6),o=a(29),d=a.n(o),j=function(e){return JSON.parse(localStorage.getItem(e))},b=function(e,t){var a,c;a="token",c=e,d.a.set(a,c,{expires:1}),function(e,t){localStorage.setItem(e,JSON.stringify(t))}("user",t)},u=function(){return e="token",!(!d.a.get(e)||!j("user"))&&j("user");var e},m=function(e){var t;t="token",d.a.remove(t),function(e){localStorage.removeItem(e)}("user"),e()},h=a(0),p=Object(l.h)((function(e){var t=e.history,a=function(e){m((function(){t.push("/signin")}))};return Object(h.jsx)("header",{id:"header",children:Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light colors",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)(i.b,{to:"/",className:"navbar-brand",children:"\u0418\u043d\u0444\u043e\u0428\u043a\u043e\u043b\u0430"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:Object(h.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[!u()&&Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsxs)(i.b,{to:"/",className:"nav-link cool-link","aria-current":"page",children:[Object(h.jsx)("i",{className:"fas fa-home"})," \u0413\u043b\u0430\u0432\u043d\u0430\u044f"]})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsxs)(i.b,{to:"/signup",className:"nav-link cool-link","aria-current":"page",children:[Object(h.jsx)("i",{className:"fas fa-edit"})," \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"]})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsxs)(i.b,{to:"/signin",className:"nav-link cool-link",children:[Object(h.jsx)("i",{className:"fas fa-sign-in-alt"})," \u0412\u0445\u043e\u0434"]})})]}),u()&&0===u().role&&Object(h.jsx)(c.Fragment,{children:Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsxs)(i.b,{to:"/user/dashboard",className:"nav-link cool-link","aria-current":"page",children:[Object(h.jsx)("i",{className:"fas fa-chalkboard"})," \u041e\u0441\u043d\u043e\u0432\u0430"]})})}),u()&&1===u().role&&Object(h.jsx)(c.Fragment,{children:Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsxs)(i.b,{to:"/admin/dashboard",className:"nav-link cool-link","aria-current":"page",children:[Object(h.jsx)("i",{className:"fas fa-chalkboard"})," \u041f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"]})})}),u()&&Object(h.jsx)(c.Fragment,{children:Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsxs)("button",{className:"btn btn-link text-secondary text-decoration-none ps-0","aria-current":"page",onClick:a,children:[Object(h.jsx)("i",{className:"fas fa-sign-out-alt"})," \u0412\u044b\u0445\u043e\u0434"]})})})]})})]})})})})),O=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"page-header text-white section",children:Object(h.jsx)("div",{className:"container pt-3 pb-3",children:Object(h.jsx)("div",{className:"justify-content-center align-items-center",children:Object(h.jsxs)("div",{className:"my-3",children:[Object(h.jsxs)("div",{className:"wavy",children:[Object(h.jsx)("span",{style:{"--i":1},children:"\u0413"}),Object(h.jsx)("span",{style:{"--i":2},children:"o"}),Object(h.jsx)("span",{style:{"--i":3},children:"\u0442"}),Object(h.jsx)("span",{style:{"--i":4},children:"\u043e"}),Object(h.jsx)("span",{style:{"--i":5},children:"\u0432"}),Object(h.jsx)("span",{style:{"--i":6},children:"\u044b"}),Object(h.jsx)("span",{style:{"--i":7},children:"?"})]}),Object(h.jsx)("p",{children:"\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0439\u0442\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u043d\u0438\u0436\u0435"}),Object(h.jsx)(i.b,{to:"/signin",className:"btn btn-outline-light btn-lg",type:"button",children:"\u0425\u043e\u0447\u0443 \u0443\u0447\u0438\u0442\u044c\u0441\u044f!"}),Object(h.jsxs)("div",{className:"mt-5",children:[Object(h.jsxs)("div",{className:"wavy",children:[Object(h.jsx)("span",{style:{"--i":1},children:"\u0411"}),Object(h.jsx)("span",{style:{"--i":2},children:"o"}),Object(h.jsx)("span",{style:{"--i":3},children:"\u043b"}),Object(h.jsx)("span",{style:{"--i":4},children:"\u044c"}),Object(h.jsx)("span",{style:{"--i":5},children:"\u0448"}),Object(h.jsx)("span",{style:{"--i":6},children:"\u0435"}),Object(h.jsx)("span",{style:{"--i":7},children:"!"})]}),Object(h.jsx)("a",{href:"http://infoshkola.tilda.ws/",className:"btn btn-outline-light btn-lg",type:"button",children:"\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435..."})]})]})})})})})})},x=a(17),f=a(2),g=a(18),v=function(e){return Object(h.jsx)("div",{className:"alert alert-danger",role:"alert",children:e})},N=function(e){return Object(h.jsx)("div",{className:"alert alert-success",role:"alert",children:e})},y=function(){return Object(h.jsx)(c.Fragment,{children:Object(h.jsx)("div",{className:"text-center m-5",children:Object(h.jsx)("div",{className:"spinner-border",role:"status",children:Object(h.jsx)("span",{className:"sr-only",children:"Loading..."})})})})},w=a(8),k=a.n(w),M=a(26),C=a.n(M),E=a(5),S=a.n(E),_=a(12),D=a(13),T=a.n(D),A=function(){var e=Object(_.a)(S.a.mark((function e(t){var a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.next=3,T.a.post("/api/auth/signup",t,a);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(_.a)(S.a.mark((function e(t){var a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.next=3,T.a.post("/api/auth/signin",t,a);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.g)();Object(c.useEffect)((function(){u()&&1===u().role?e.push("/admin/dashboard"):u()&&0===u().role&&e.push("/user/dashboard")}),[e]);var t=Object(c.useState)({email:"",password:"",errorMsg:!1,loading:!1}),a=Object(g.a)(t,2),s=a[0],r=a[1],n=s.email,o=s.password,d=s.errorMsg,j=s.loading,m=function(t){if(t.preventDefault(),k()(n)||k()(o))r(Object(f.a)(Object(f.a)({},s),{},{errorMsg:"All fields are required"}));else if(C()(n)){var a={email:s.email,password:s.password};r(Object(f.a)(Object(f.a)({},s),{},{loading:!0})),R(a).then((function(t){b(t.data.token,t.data.user),u()&&1===u().role?e.push("/admin/dashboard"):(console.log("Redirecting to UserDashboard"),e.push("/user/dashboard"))})).catch((function(e){console.log("signin api finction error",e),r(Object(f.a)(Object(f.a)({},s),{},{loading:!1,errorMsg:e.response.data.errorMessage}))}))}else r(Object(f.a)(Object(f.a)({},s),{},{errorMsg:"Invalid email"}))},p=function(e){var t;r(Object(f.a)(Object(f.a)({},s),{},(t={},Object(x.a)(t,e.target.name,e.target.value),Object(x.a)(t,"errorMsg",""),t)))};return Object(h.jsxs)("div",{className:"signup-container text-center",children:[d&&v(d),j&&y(),Object(h.jsx)("div",{className:"container mt-1 mb-5",children:Object(h.jsx)("form",{onSubmit:m,noValidate:!0,children:Object(h.jsx)("div",{className:"row d-flex align-items-center justify-content-center",children:Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"card px-5 py-3",children:[Object(h.jsx)("span",{className:"circle",children:Object(h.jsx)("i",{className:"fa fa-check"})}),Object(h.jsx)("h5",{children:"\u0412\u0445\u043e\u0434"}),Object(h.jsxs)("div",{className:"form-input",children:[Object(h.jsx)("i",{className:"fa fa-envelope"}),Object(h.jsx)("input",{name:"email",value:n,type:"email",className:"form-control",placeholder:"Email",onChange:p})]}),Object(h.jsxs)("div",{className:"form-input",children:[Object(h.jsx)("i",{className:"fa fa-lock"}),Object(h.jsx)("input",{name:"password",value:o,type:"password",className:"form-control",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:p})]}),Object(h.jsx)("button",{className:"btn btn-info mt-4 signup",children:"\u0412\u0445\u043e\u0434"}),Object(h.jsxs)("div",{className:"text-center mt-4",children:[Object(h.jsx)("span",{children:"\u0415\u0449\u0435 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? "}),Object(h.jsx)(i.b,{to:"/signup",className:"text-decoration-none",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0441\u044f \u0437\u0434\u0435\u0441\u044c"})]})]})})})})})]})},P=a(54),U=a.n(P),L=function(){var e=Object(l.g)();Object(c.useEffect)((function(){u()&&1===u().role?e.push("/admin/dashboard"):u()&&0===u().role&&e.push("/user/dashboard")}),[e]);var t=Object(c.useState)({username:"",email:"",password:"",password2:"",successMsg:!1,errorMsg:!1,loading:!1}),a=Object(g.a)(t,2),s=a[0],r=a[1],n=s.username,o=s.email,d=s.password,j=s.password2,b=s.successMsg,m=s.errorMsg,p=s.loading,O=function(e){var t;r(Object(f.a)(Object(f.a)({},s),{},(t={},Object(x.a)(t,e.target.name,e.target.value),Object(x.a)(t,"successMsg",""),Object(x.a)(t,"errorMsg",""),t)))},w=function(e){if(e.preventDefault(),k()(n)||k()(o)||k()(d)||k()(j))r(Object(f.a)(Object(f.a)({},s),{},{errorMsg:"All fields are required"}));else if(C()(o))if(U()(d,j)){var t={username:s.username,email:s.email,password:s.password};r(Object(f.a)(Object(f.a)({},s),{},{loading:!0})),A(t).then((function(e){console.log("Axios signup success: ",e),r({username:"",email:"",password:"",password2:"",loading:!1,successMsg:e.data.successMessage})})).catch((function(e){console.log("Axios signup error",e),r(Object(f.a)(Object(f.a)({},s),{},{loading:!1,errorMsg:e.response.data.errorMessage}))}))}else r(Object(f.a)(Object(f.a)({},s),{},{errorMsg:"Passwords do not match"}));else r(Object(f.a)(Object(f.a)({},s),{},{errorMsg:"Invalid email"}))};return Object(h.jsxs)("div",{className:"signup-container text-center",children:[b&&N(b),m&&v(m),p&&y(),Object(h.jsx)("div",{className:"container mt-1 mb-5",children:Object(h.jsx)("form",{onSubmit:w,noValidate:!0,children:Object(h.jsx)("div",{className:"row d-flex align-items-center justify-content-center",children:Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"card px-5 py-3",children:[Object(h.jsx)("span",{className:"circle",children:Object(h.jsx)("i",{className:"fa fa-check"})}),Object(h.jsx)("h5",{className:"mt-3",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(h.jsxs)("div",{className:"form-input",children:[Object(h.jsx)("i",{className:"fa fa-envelope"}),Object(h.jsx)("input",{name:"email",value:o,type:"email",className:"form-control",placeholder:"Email",onChange:O})]}),Object(h.jsxs)("div",{className:"form-input",children:[Object(h.jsx)("i",{className:"fa fa-user"}),Object(h.jsx)("input",{name:"username",value:n,type:"text",className:"form-control",placeholder:"\u041d\u0438\u043a\u043d\u0435\u0439\u043c",onChange:O})]}),Object(h.jsxs)("div",{className:"form-input",children:[Object(h.jsx)("i",{className:"fa fa-lock"}),Object(h.jsx)("input",{name:"password",value:d,type:"password",className:"form-control",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:O})]}),Object(h.jsxs)("div",{className:"form-input",children:[Object(h.jsx)("i",{className:"fa fa-lock"}),Object(h.jsx)("input",{name:"password2",value:j,type:"password",className:"form-control",placeholder:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",onChange:O})]}),Object(h.jsx)("button",{className:"btn btn-info mt-4 signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(h.jsxs)("div",{className:"text-center mt-4",children:[Object(h.jsx)("span",{children:"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?"}),Object(h.jsx)(i.b,{to:"/signin",className:"text-decoration-none",children:" \u0412\u0445\u043e\u0434"})]})]})})})})})]})},G=function(e){return Object(h.jsx)("div",{children:"NotFound"})},H=a(3),I=function(){var e=Object(H.c)((function(e){return e.categories})).categories;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u043b\u043e\u043a"}),Object(h.jsx)("div",{className:"row mt-3",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("div",{className:"list-group my-2",children:e.map((function(e){return Object(h.jsx)(i.b,{to:"/user/dashboard/"+e._id+"/"+e.category,className:" btn list-group-item myButton bg-light",children:e.category},e.category)}))})})})]})},V="START_LOADING",q="STOP_LOADING",z="SHOW_SUCCESS_MESSAGE",B="SHOW_ERROR_MESSAGE",J="CLEAR_MESSAGES",W="GET_CATEGORIES",Y="CREATE_CATEGORY",K=function(){return function(){var e=Object(_.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:V}),e.next=4,T.a.get("/api/category");case 4:a=e.sent,t({type:q}),t({type:W,payload:a.data.categories}),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("getCategories api error: ",e.t0),t({type:q}),t({type:B,payload:e.t0.response.data.errorMessage});case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},Q="CREATE_PRODUCT",X="GET_PRODUCTS",Z="DELETE_PRODUCT",$=function(){return function(){var e=Object(_.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:V}),e.next=4,T.a.get("/api/product");case 4:a=e.sent,t({type:q}),t({type:X,payload:a.data.products}),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("getProducts api error: ",e.t0),t({type:q}),t({type:B,payload:e.t0.response.data.errorMessage});case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},ee=function(){var e=Object(H.b)();return Object(c.useEffect)((function(){e(K())}),[e]),Object(c.useEffect)((function(){e($())}),[e]),Object(h.jsx)("section",{children:Object(h.jsx)(I,{})})},te=function(){return Object(h.jsx)("div",{id:"adminHeader",className:" text-white py-3",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("h1",{children:Object(h.jsx)("i",{className:"fas fa-chalkboard",children:" \u041f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"})})})})})})},ae=function(){return Object(h.jsx)("div",{className:"colors my-2",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row pb-3",children:Object(h.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto",children:[Object(h.jsx)("button",{className:"btn btn-outline-info btn-block","data-bs-toggle":"modal","data-bs-target":"#addCategoryModal",children:Object(h.jsx)("i",{className:"fas fa-file-alt",children:" \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u043b\u043e\u043a"})}),Object(h.jsx)("button",{className:"btn btn-outline-warning btn-block","data-bs-toggle":"modal","data-bs-target":"#addLessonModal",children:Object(h.jsx)("i",{className:"fas fa-plus",children:" \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0443\u0440\u043e\u043a"})}),Object(h.jsx)("button",{className:"btn btn-outline-success btn-block",children:Object(h.jsx)("i",{className:"fas fa-check-circle",children:" \u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"})}),Object(h.jsx)("button",{className:"btn btn-outline-dark btn-block","data-bs-toggle":"modal","data-bs-target":"#showUsersModal",children:Object(h.jsx)("i",{className:"fa fa-address-card",children:" \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})})]})})})})},ce=function(){return function(e){e({type:J})}},se=function(){var e=Object(H.c)((function(e){return e.messages})),t=e.successMsg,a=e.errorMsg,s=Object(H.c)((function(e){return e.loading})).loading,r=Object(H.b)(),n=Object(c.useState)(""),i=Object(g.a)(n,2),l=i[0],o=i[1],d=Object(c.useState)(""),j=Object(g.a)(d,2),b=j[0],u=j[1];return Object(h.jsx)("div",{id:"addCategoryModal",className:"modal",onClick:function(e){r(ce())},children:Object(h.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:Object(h.jsx)("div",{className:"modal-content",children:Object(h.jsxs)("form",{onSubmit:function(e){var t;(e.preventDefault(),k()(l))?u("Please enter a category"):(r((t={category:l},function(){var e=Object(_.a)(S.a.mark((function e(a){var c,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c={headers:{"Content-Type":"application/json"}},a({type:V}),e.next=5,T.a.post("/api/category",t,c);case 5:s=e.sent,a({type:q}),a({type:z,payload:s.data.successMessage}),a({type:Y,payload:s.data.category}),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("createCategory api error: ",e.t0),a({type:q}),a({type:B,payload:e.t0.response.data.errorMessage});case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())),o(""))},children:[Object(h.jsxs)("div",{className:"modal-header bg-info text-white",children:[Object(h.jsx)("h5",{className:"modal-title",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u043b\u043e\u043a"}),Object(h.jsx)("button",{className:"btn-close","data-bs-dismiss":"modal",children:Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:"far fa-times"})})})]}),Object(h.jsxs)("div",{className:"modal-body my-2",children:[b&&v(b),a&&v(a),t&&N(t),s?y():Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)("label",{className:"text-secondary",children:"\u0411\u043b\u043e\u043a"}),Object(h.jsx)("input",{type:"text",className:"form-control",name:"category",value:l,onChange:function(e){r(ce()),o(e.target.value)}})]})]}),Object(h.jsxs)("div",{className:"modal-footer",children:[Object(h.jsx)("button",{"data-bs-dismiss":"modal",className:"btn btn-secondary",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(h.jsx)("button",{type:"submit",className:"btn btn-info text-white",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})]})})})})},re=function(){var e=Object(H.c)((function(e){return e.loading})).loading,t=Object(H.c)((function(e){return e.messages})),a=t.errorMsg,s=t.successMsg,r=Object(H.c)((function(e){return e.categories})).categories,n=Object(H.b)(),i=Object(c.useState)(""),l=Object(g.a)(i,2),o=l[0],d=l[1],j=Object(c.useState)({productOrder:"",productName:"",productDesc:"",productVideo:"",productHomework:"",productCategory:""}),b=Object(g.a)(j,2),u=b[0],m=b[1],p=u.productOrder,O=u.productName,w=u.productDesc,M=u.productVideo,C=u.productHomework,E=u.productCategory,D=function(e){m(Object(f.a)(Object(f.a)({},u),{},Object(x.a)({},e.target.name,e.target.value)))};return Object(h.jsx)("div",{id:"addLessonModal",className:"modal",onClick:function(e){n(ce()),d("")},children:Object(h.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:Object(h.jsx)("div",{className:"modal-content",children:Object(h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),k()(p)||k()(O)||k()(w)||k()(M)||k()(C))d("All fields are required");else if(k()(E))d("Please select a category");else{n(function(e){return function(){var t=Object(_.a)(S.a.mark((function t(a){var c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:V}),t.next=4,T.a.post("/api/product",e);case 4:c=t.sent,a({type:q}),a({type:z,payload:c.data.successMessage}),a({type:Q,payload:c.data.product}),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("createProduct api error: ",t.t0),a({type:q}),a({type:B,payload:t.t0.response.data.errorMessage});case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}({productOrder:p,productName:O,productDesc:w,productVideo:M,productHomework:C,productCategory:E})),m({productOrder:"",productName:"",productDesc:"",productVideo:"",productHomework:"",productCategory:""})}},children:[Object(h.jsxs)("div",{className:"modal-header bg-warning text-white",children:[Object(h.jsx)("h5",{className:"modal-title",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0443\u0440\u043e\u043a"}),Object(h.jsx)("button",{className:"btn-close","data-bs-dismiss":"modal",children:Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:"far fa-times"})})})]}),Object(h.jsxs)("div",{className:"modal-body my-2",children:[o&&v(o),a&&v(a),s&&N(s),e?y():Object(h.jsxs)(c.Fragment,{children:[Object(h.jsxs)("div",{className:"form-group mt-2",children:[Object(h.jsx)("label",{className:"text-secondary",children:"\u041d\u043e\u043c\u0435\u0440 \u0443\u0440\u043e\u043a\u0430"}),Object(h.jsx)("input",{className:"form-control",type:"text",name:"productOrder",value:p,onChange:D})]}),Object(h.jsxs)("div",{className:"form-group mt-2",children:[Object(h.jsx)("label",{className:"text-secondary",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(h.jsx)("input",{className:"form-control",type:"text",name:"productName",value:O,onChange:D})]}),Object(h.jsxs)("div",{className:"form-group mt-2",children:[Object(h.jsx)("label",{className:"form-label",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(h.jsx)("textarea",{className:"form-control",rows:"3",name:"productDesc",value:w,onChange:D})]}),Object(h.jsxs)("div",{className:"form-group mt-2",children:[Object(h.jsx)("label",{className:"text-secondary",children:"Youtube URL"}),Object(h.jsx)("input",{className:"form-control",type:"text",name:"productVideo",value:M,onChange:D})]}),Object(h.jsxs)("div",{className:"form-group mt-2",children:[Object(h.jsx)("label",{className:"form-label",children:"\u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"}),Object(h.jsx)("textarea",{className:"form-control",rows:"3",name:"productHomework",value:C,onChange:D})]}),Object(h.jsxs)("div",{className:"form-group col-md-6 mt-2",children:[Object(h.jsx)("label",{className:"text-secondary",children:"\u0411\u043b\u043e\u043a"}),Object(h.jsx)("br",{}),Object(h.jsxs)("select",{className:"custom-select my-1 mr-sm-2",name:"productCategory",onChange:D,children:[Object(h.jsx)("option",{value:"",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443..."}),r&&r.map((function(e){return Object(h.jsx)("option",{value:e._id,children:e.category},e._id)}))]})]})]})]}),Object(h.jsxs)("div",{className:"modal-footer",children:[Object(h.jsx)("button",{"data-bs-dismiss":"modal",className:"btn btn-secondary",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(h.jsx)("button",{type:"submit",className:"btn btn-warning text-white",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})]})})})})},ne=a(27),ie=a.n(ne),le=function(e){var t=e.product,a=Object(H.b)();return Object(h.jsx)("div",{className:"d-flex justify-content-center my-3 border",children:Object(h.jsx)("div",{className:"card h-100 border-color-dark mb-3",style:{width:"600px"},children:Object(h.jsxs)("div",{className:"card-body text-center",children:[Object(h.jsx)("h5",{children:t.productOrder}),Object(h.jsx)("hr",{}),Object(h.jsx)("h3",{children:t.productName}),Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsx)(ie.a,{className:"player",playing:!1,controls:!0,url:t.productVideo,width:"100%",height:"100%"})}),Object(h.jsxs)("span",{className:"border border-white",children:[Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:t.productDesc})}),Object(h.jsx)("h5",{className:"mb-3 ",children:"\u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435: "}),Object(h.jsx)("p",{className:"border border-primary border-4",children:Object(h.jsx)("strong",{children:t.productHomework})})]}),Object(h.jsxs)("button",{className:"btn btn-primary btn-sm mt-2",onClick:function(){return a((e=t._id,function(){var t=Object(_.a)(S.a.mark((function t(a){var c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:V}),t.next=4,T.a.delete("/api/product/".concat(e));case 4:c=t.sent,a({type:q}),a({type:Z,payload:c.data}),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("deleteProduct api error: ",t.t0),a({type:q}),a({type:B,payload:t.t0.response.data.errorMessage});case 14:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(h.jsx)("i",{className:"far fa-trash-alt "}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]})]})})})},oe=function(){var e=Object(H.c)((function(e){return e.categories})).categories,t=Object(H.c)((function(e){return e.products})).products;return Object(h.jsxs)("div",{className:"container bg-light",children:[Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col",children:[Object(h.jsxs)("h4",{className:"text-center my-3 py-4",children:["\u0412\u0441\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 ",Object(h.jsx)("i",{className:"fas fa-angle-down"})]}),Object(h.jsxs)("div",{className:"accordion accordion-flush",id:"accordionFlushExample",children:[Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"flush-headingOne",children:e.map((function(e){return Object(h.jsx)("button",{className:"accordion-button collapsed btn-outline-secondary",children:e.category},e.category)}))}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:"container bg-light mt-5 py-5",children:[Object(h.jsxs)("h4",{className:"text-center",children:["\u0412\u0441\u0435 \u0443\u0440\u043e\u043a\u0438 ",Object(h.jsx)("i",{className:"fas fa-angle-down"})]}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"card-deck",children:t.map((function(e){return Object(h.jsx)(le,{product:e},e._id)}))})})]})]})]})})]})},de="GET_USERS",je=function(e){var t=e.user,a=Object(H.b)();return Object(h.jsxs)("div",{className:"list-group",children:[Object(h.jsx)("div",{className:"d-flex w-100 justify-content-between",children:Object(h.jsx)("h5",{className:"mb-1",children:Object(h.jsx)("strong",{children:t.username})})}),Object(h.jsx)("p",{className:"mb-1 text-secondary",children:t.email}),Object(h.jsxs)("button",{className:"btn btn-primary btn-sm mt-2",onClick:function(){return a((e=t._id,function(){var t=Object(_.a)(S.a.mark((function t(a){var c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:V}),t.next=4,T.a.delete("/api/user/".concat(e));case 4:c=t.sent,a({type:q}),a({type:"DELETE_USER",payload:c.data}),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("deleteUser api error: ",t.t0),a({type:q}),a({type:B,payload:t.t0.response.data.errorMessage});case 14:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(h.jsx)("i",{className:"far fa-trash-alt "}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]}),Object(h.jsx)("hr",{})]})},be=function(){var e=Object(H.c)((function(e){return e.users})).users;return Object(h.jsx)("div",{id:"showUsersModal",className:"modal",children:Object(h.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsxs)("div",{className:"modal-header bg-dark text-white",children:[Object(h.jsx)("h5",{className:"modal-title",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"}),Object(h.jsx)("button",{className:"btn-close","data-bs-dismiss":"modal",children:Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:"far fa-times"})})})]}),Object(h.jsx)("div",{className:"modal-body my-2",children:e.map((function(e){return Object(h.jsx)(je,{user:e},e._id)}))}),Object(h.jsx)("div",{className:"modal-footer",children:Object(h.jsx)("button",{"data-bs-dismiss":"modal",className:"btn btn-dark",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})]})})})},ue=function(){var e=Object(H.b)();return Object(c.useEffect)((function(){e(K())}),[e]),Object(c.useEffect)((function(){e($())}),[e]),Object(c.useEffect)((function(){e(function(){var e=Object(_.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:V}),e.next=4,T.a.get("/api/user");case 4:a=e.sent,t({type:q}),t({type:de,payload:a.data.users}),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("getUsers api error: ",e.t0),t({type:q}),t({type:B,payload:e.t0.response.data.errorMessage});case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(h.jsxs)("section",{children:[Object(h.jsx)(te,{}),Object(h.jsx)(ae,{}),Object(h.jsx)(se,{}),Object(h.jsx)(re,{}),Object(h.jsx)(oe,{}),Object(h.jsx)(be,{})]})},me=a(28),he=function(e){var t=e.component,a=Object(me.a)(e,["component"]);return Object(h.jsx)(l.b,Object(f.a)(Object(f.a)({},a),{},{render:function(e){return u()&&1===u().role?Object(h.jsx)(t,Object(f.a)({},e)):Object(h.jsx)(l.a,{to:"/signin"})}}))},pe=function(e){var t=e.component,a=Object(me.a)(e,["component"]);return Object(h.jsx)(l.b,Object(f.a)(Object(f.a)({},a),{},{render:function(e){return u()&&0===u().role?Object(h.jsx)(t,Object(f.a)({},e)):Object(h.jsx)(l.a,{to:"/signin"})}}))},Oe=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("footer",{className:"footer-bg text-white pt-5 pb-4 mt-5",children:Object(h.jsx)("div",{className:"container text-center text-md-left",children:Object(h.jsxs)("div",{className:"row text-center text-md-left",children:[Object(h.jsxs)("div",{className:"col-md-3 col-lg-3 col-xl-3 mx-auto mt-3",children:[Object(h.jsx)("h5",{className:"text-uppercase mb-4 font-weight-bold text-warning",children:"\u0418\u043d\u0444\u043e\u0428\u043a\u043e\u043b\u0430"}),Object(h.jsx)("p",{children:"\u0412\u0435\u0431\u0441\u0430\u0439\u0442, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u0443\u0447\u0430\u0442\u044c \u043b\u044e\u0434\u0435\u0439 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u043c \u043d\u0430\u0432\u044b\u043a\u0430\u043c"})]}),Object(h.jsxs)("div",{className:"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3",children:[Object(h.jsx)("h5",{className:"text-uppercase mb-4 font-weight-bold text-warning",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{className:"text-decoration-none text-white",href:"#",children:"\u0411\u0438\u0448\u043a\u0435\u043a, \u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d"})}),Object(h.jsx)("p",{children:Object(h.jsxs)("a",{className:"text-decoration-none text-white",href:"http://wa.me/+996501384447/",children:[Object(h.jsx)("i",{className:"fab fa-whatsapp"})," +996 501 384 447"]})}),Object(h.jsx)("p",{children:Object(h.jsxs)("a",{className:"text-decoration-none text-white",href:"https://www.instagram.com/nazik_coach/",children:[Object(h.jsx)("i",{className:"fab fa-instagram"})," nazik_coach"]})}),Object(h.jsx)("p",{children:Object(h.jsxs)("a",{className:"text-decoration-none text-white",href:"https://www.facebook.com/profile.php?id=100041772392314",children:[Object(h.jsx)("i",{className:"fab fa-facebook"}),"\u0418\u043d\u0444\u043e\u0448\u043a\u043e\u043b\u0430"]})}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{className:"text-decoration-none text-white",href:"https://www.gmail.com/",children:"karmyshakovanazira@gmail.com"})})]}),Object(h.jsx)("hr",{className:"mb-4"}),Object(h.jsx)("div",{className:"row align-items-center",children:Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:[" Copyright \xa92021 All rights reserved by:",Object(h.jsx)("strong",{className:"text-warning",children:" Dastan D."})]})})}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"justify-content-center text-center",children:Object(h.jsx)("div",{className:"iconSize",children:Object(h.jsxs)("ul",{className:"list-unstyled list-inline",children:[Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsx)("a",{className:"btn-floating btn-sm text-white",href:"https://www.gmail.com/",children:Object(h.jsx)("i",{className:"fab fa-google-plus"})})}),Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsx)("a",{className:"btn-floating btn-sm text-white",href:"https://www.instagram.com/d.hivervent/",children:Object(h.jsx)("i",{className:"fab fa-instagram"})})}),Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsx)("a",{className:"btn-floating btn-sm text-white btn-lg",href:"https://api.whatsapp.com/send?phone=420732268737 ",children:Object(h.jsx)("i",{className:"fab fa-whatsapp"})})})]})})})})]})})})})},xe=Object(l.h)((function(e){var t=Object(H.c)((function(e){return e.products})).products;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0423\u0440\u043e\u043a"}),t.map((function(t){return Object(h.jsx)("div",{className:"row mt-3",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("div",{className:"list-group my-2",children:t.productCategory._id===e.match.params.id&&Object(h.jsx)(i.b,{to:"/user/dashboard/"+t._id,className:"btn list-group-item myButton bg-light",children:t.productOrder})})})})}))]})})})),fe=function(e){var t=e.product,a=t.productVideo+"?mode=opaque&rel=0&autohide=1&showinfo=0&wmode=transparent";return Object(h.jsx)("div",{className:"d-flex justify-content-center my-3",children:Object(h.jsx)("div",{className:"card h-100 border-color-dark mb-3",style:{width:"900px"},children:Object(h.jsxs)("div",{className:"card-body text-center",children:[Object(h.jsx)("h1",{className:"mb-5",children:t.productName}),Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsx)(ie.a,{className:"player",playing:!1,controls:!0,url:a,width:"100%",height:"100%"})}),Object(h.jsxs)("span",{className:"border border-white",children:[Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:t.productDesc})}),Object(h.jsx)("hr",{}),Object(h.jsx)("h5",{className:"mb-3 display-5",children:"\u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435: "}),Object(h.jsx)("p",{className:"border border-primary border-4",children:Object(h.jsx)("strong",{children:t.productHomework})})]}),Object(h.jsx)("button",{className:"btn btn-info btn-block text-decoration-none",children:Object(h.jsx)("a",{href:"http://wa.me/+996500384447/",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"})})]})})})},ge=Object(l.h)((function(e){var t=Object(H.c)((function(e){return e.products})).products;return Object(h.jsx)("div",{children:t.map((function(t){return Object(h.jsx)("div",{className:"container",children:e.match.params.id===t._id&&Object(h.jsx)(fe,{product:t},t._id)})}))})})),ve=function(){return Object(h.jsxs)(i.a,{children:[Object(h.jsx)(p,{}),Object(h.jsx)("main",{children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/",component:O}),Object(h.jsx)(l.b,{exact:!0,path:"/signup",component:L}),Object(h.jsx)(l.b,{exact:!0,path:"/signin",component:F}),Object(h.jsx)(pe,{exact:!0,path:"/user/dashboard",component:ee}),Object(h.jsx)(pe,{path:"/user/dashboard/:id/:name",component:xe}),Object(h.jsx)(pe,{path:"/user/dashboard/:id",component:ge}),Object(h.jsx)(he,{exact:!0,path:"/admin/dashboard",component:ue}),Object(h.jsx)(l.b,{component:G})]})}),Object(h.jsx)(Oe,{})]})},Ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,122)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))},ye=a(20),we=a(56),ke=a(57),Me={loading:!1},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return{loading:!0};case q:return{loading:!1};default:return e}},Ee={successMsg:"",errorMsg:""},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(f.a)(Object(f.a)({},e),{},{successMsg:t.payload});case B:return Object(f.a)(Object(f.a)({},e),{},{errorMsg:t.payload});case J:return{successMsg:"",errorMsg:""};default:return e}},_e=a(21),De={categories:[]},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(f.a)(Object(f.a)({},e),{},{categories:t.payload});case Y:return Object(f.a)(Object(f.a)({},e),{},{categories:[].concat(Object(_e.a)(e.categories),[t.payload])});default:return e}},Ae={products:[]},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return{products:[].concat(Object(_e.a)(e.products),[t.payload])};case X:return{products:Object(_e.a)(t.payload)};case Z:return{products:e.products.filter((function(e){return e._id!==t.payload._id}))};default:return e}},Fe={users:[]},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return{users:Object(_e.a)(t.payload)};case de:return{users:e.users.filter((function(e){return e._id!==t.payload._id}))};default:return e}},Ue=Object(ye.combineReducers)({loading:Ce,messages:Se,categories:Te,products:Re,users:Pe}),Le=[we.a],Ge=Object(ye.createStore)(Ue,{},Object(ke.composeWithDevTools)(ye.applyMiddleware.apply(void 0,Le)));n.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(H.a,{store:Ge,children:Object(h.jsx)(ve,{})})}),document.getElementById("root")),Ne()},62:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.27e61ed4.chunk.js.map