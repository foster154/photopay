webpackJsonp([0,2],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),a=r(o),l=n(30),i=r(l),u=n(163),c=n(170),s=n(190),f=n(251),d=r(f),p=n(252),m=r(p),h=n(258),v=r(h),y=n(259),b=r(y),E=n(461),_=r(E),O=n(464),g=r(O),w=n(465),P=r(w),j=n(466),N=r(j),k=n(473),I=r(k),S=n(481),C=r(S),M=n(499),T=r(M),R=n(460);n(503);var U=(0,c.createStore)(T["default"],(0,c.compose)((0,c.applyMiddleware)(d["default"]),window.devToolsExtension?window.devToolsExtension():function(e){return e})),x=localStorage.getItem("token");x&&U.dispatch({type:R.AUTH_USER}),i["default"].render(a["default"].createElement(u.Provider,{store:U},a["default"].createElement(s.Router,{history:s.browserHistory},a["default"].createElement(s.Route,{path:"/",component:m["default"]},a["default"].createElement(s.IndexRoute,{component:P["default"]}),a["default"].createElement(s.Route,{path:"signin",component:_["default"]}),a["default"].createElement(s.Route,{path:"signup",component:b["default"]}),a["default"].createElement(s.Route,{path:"signout",component:g["default"]}),a["default"].createElement(s.Route,{path:"invoices",component:(0,v["default"])(N["default"])}),a["default"].createElement(s.Route,{path:"/invoices/new",component:C["default"]})),a["default"].createElement(s.Route,{path:"/invoices/:id",component:I["default"]}))),document.querySelector("#root"))},252:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(253),f=r(s),d=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("div",null,c["default"].createElement(f["default"],null),this.props.children)}}]),t}(u.Component);t["default"]=d},253:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{authenticated:e.auth.authenticated}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),f=n(163),d=n(190);n(254);var p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"renderLinks",value:function(){return this.props.authenticated?[s["default"].createElement("li",{key:1},s["default"].createElement(d.Link,{to:"/"},"Dashboard")),s["default"].createElement("li",{key:2},s["default"].createElement(d.Link,{to:"/invoices"},"Invoices")),s["default"].createElement("li",{key:3},s["default"].createElement(d.Link,{to:"/signout"},"Sign Out"))]:[s["default"].createElement("li",{key:1},s["default"].createElement(d.Link,{to:"/signin"},"Sign In")),s["default"].createElement("li",{key:2},s["default"].createElement(d.Link,{to:"/signup"},"Sign Up"))]}},{key:"render",value:function(){return s["default"].createElement("nav",{className:"main-nav"},s["default"].createElement("ul",null,s["default"].createElement("li",{className:"logo"},s["default"].createElement(d.Link,{to:"/",className:"logo-text"},"Photo Invoice")),this.renderLinks()))}}]),t}(c.Component);t["default"]=(0,f.connect)(i)(p)},254:function(e,t){},258:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t["default"]=function(e){function t(e){return{authenticated:e.auth.authenticated}}var n,r,f=(r=n=function(t){function n(){return o(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,t),i(n,[{key:"componentWillMount",value:function(){this.props.authenticated||this.context.router.push("/")}},{key:"componentWillUpdate",value:function(e){e.authenticated||this.context.router.push("/")}},{key:"render",value:function(){return c["default"].createElement(e,this.props)}}]),n}(u.Component),n.contextTypes={router:c["default"].PropTypes.object},r);return(0,s.connect)(t)(f)};var u=n(1),c=r(u),s=n(163)},259:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){var t={};return e.email||(t.email="Please enter an email"),e.password||(t.password="Please enter a password"),e.passwordConfirm||(t.passwordConfirm="Please enter a password confirmation"),e.password!==e.passwordConfirm&&(t.password="Passwords must match"),t}function c(e){return{errorMessage:e.auth.error}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(1),p=o(d),m=n(260),h=n(436),v=r(h),y=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"handleFormSubmit",value:function(e){this.props.signupUser(e)}},{key:"renderAlert",value:function(){if(this.props.errorMessage)return p["default"].createElement("div",{className:"alert alert-danger"},p["default"].createElement("strong",null,"Oops!")," ",this.props.errorMessage)}},{key:"render",value:function(){var e=this.props,t=e.handleSubmit,n=e.fields,r=n.email,o=n.password,a=n.passwordConfirm;return p["default"].createElement("form",{onSubmit:t(this.handleFormSubmit.bind(this))},p["default"].createElement("fieldset",{className:"form-group"},p["default"].createElement("label",null,"Email:"),p["default"].createElement("input",s({className:"form-control"},r)),r.touched&&r.error&&p["default"].createElement("div",{className:"error"},r.error)),p["default"].createElement("fieldset",{className:"form-group"},p["default"].createElement("label",null,"Password:"),p["default"].createElement("input",s({className:"form-control"},o,{type:"password"})),o.touched&&o.error&&p["default"].createElement("div",{className:"error"},o.error)),p["default"].createElement("fieldset",{className:"form-group"},p["default"].createElement("label",null,"Confirm Password:"),p["default"].createElement("input",s({className:"form-control"},a,{type:"password"})),a.touched&&a.error&&p["default"].createElement("div",{className:"error"},a.error)),this.renderAlert(),p["default"].createElement("button",{action:"submit",className:"btn btn-primary"},"Sign up!"))}}]),t}(d.Component);t["default"]=(0,m.reduxForm)({form:"signup",fields:["email","password","passwordConfirm"],validate:u},c,v)(y)},436:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.email,n=e.password;return function(e){h["default"].post(p.API_URL+"/signin",{email:t,password:n}).then(function(t){e({type:y.AUTH_USER}),localStorage.setItem("token",t.data.token),v.browserHistory.push("/invoices")})["catch"](function(){e(l("Incorrect email/password. Please try again."))})}}function a(e){var t=e.email,n=e.password;return function(e){h["default"].post(p.API_URL+"/signup",{email:t,password:n}).then(function(t){e({type:y.AUTH_USER}),localStorage.setItem("token",t.data.token),v.browserHistory.push("/invoices")})["catch"](function(t){e(l(t.response.data.error))})}}function l(e){return{type:y.AUTH_ERROR,payload:e}}function i(){return localStorage.removeItem("token"),{type:y.UNAUTH_USER}}function u(){return function(e){h["default"].get(p.API_URL+"/",{headers:{authorization:localStorage.getItem("token")}}).then(function(t){e({type:y.FETCH_MESSAGE,payload:t.data.message})})}}function c(){return function(e){h["default"].get(p.API_URL+"/invoices",{headers:{authorization:localStorage.getItem("token")}}).then(function(t){e({type:y.FETCH_INVOICES,payload:t.data})})}}function s(e){var t=e.customerName,n=e.customerEmail,r=e.invoiceNumber,o=e.item,a=e.amount,l=e.shareUrl,i=e.displayShareLinkImmediately,u=e.paid;return console.log("Action creator params:",t,n,r,o,a,l,i,u),function(e){(0,h["default"])({method:"post",url:p.API_URL+"/invoices",data:{invoiceNumber:r,billTo:{name:t,email:n},billFrom:{name:"Panoractives",email:"info@panoractives.com"},lineItems:[{item:o,amount:a}],shareUrl:l,invoiceSettings:{displayShareLinkImmediately:i||!1},paid:u||!1},headers:{authorization:localStorage.getItem("token")}}).then(function(t){e({type:y.CREATE_INVOICE,payload:t.data}),v.browserHistory.push("/invoices")})}}function f(e){return function(t){h["default"].get(p.API_URL+"/invoices/"+e).then(function(e){t({type:y.FETCH_INVOICE,payload:e.data})})}}function d(e,t){return console.log("action creator id",t),function(n){(0,h["default"])({method:"post",url:p.API_URL+"/invoices/"+t+"/charge",data:JSON.stringify(e)}).then(function(e){console.log(e),n({type:y.CREATE_CHARGE,payload:e.data})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.signinUser=o,t.signupUser=a,t.authError=l,t.signoutUser=i,t.fetchMessage=u,t.fetchInvoices=c,t.createInvoice=s,t.fetchInvoice=f,t.createCharge=d;var p=n(437),m=n(438),h=r(m),v=n(190),y=n(460)},437:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.API_URL="https://api.photoinvoice.com"},460:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.AUTH_USER="auth_user",t.UNAUTH_USER="unauth_user",t.AUTH_ERROR="auth_error",t.FETCH_MESSAGE="fetch_message",t.FETCH_INVOICES="fetch_invoices",t.FETCH_INVOICE="fetch_invoice",t.CREATE_INVOICE="create_invoice",t.CREATE_CHARGE="create_charge",t.FETCH_CUSTOMERS="fetch_customers"},461:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{errorMessage:e.auth.error}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=o(s),d=n(260),p=n(163),m=n(436),h=r(m);n(462);var v=(0,d.reduxForm)({form:"Signin"}),y=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"handleFormSubmit",value:function(e){this.props.signinUser(e)}},{key:"renderAlert",value:function(){if(this.props.errorMessage)return f["default"].createElement("div",{className:"msg-red"},this.props.errorMessage)}},{key:"render",value:function(){var e=this.props.handleSubmit;return f["default"].createElement("div",{className:"signin-background"},f["default"].createElement("div",{className:"overlay"},f["default"].createElement("form",{className:"clearfix",onSubmit:e(this.handleFormSubmit.bind(this))},f["default"].createElement("h2",null,"Sign In"),this.renderAlert(),f["default"].createElement("fieldset",null,f["default"].createElement("label",{htmlFor:"email"},"Email:"),f["default"].createElement(d.Field,{className:"signin-input",name:"email",component:"input",type:"input"})),f["default"].createElement("fieldset",null,f["default"].createElement("label",{htmlFor:"password"},"Password:"),f["default"].createElement(d.Field,{className:"signin-input",name:"password",component:"input",type:"password"})),f["default"].createElement("button",{action:"submit"},"Sign In"))))}}]),t}(s.Component);t["default"]=(0,p.connect)(u,h)(v(y))},462:254,464:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=o(c),f=n(163),d=n(436),p=r(d),m=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"componentWillMount",value:function(){this.props.signoutUser()}},{key:"render",value:function(){return s["default"].createElement("div",null,"Sorry to see you go...")}}]),t}(c.Component);t["default"]=(0,f.connect)(null,p)(m)},465:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);t["default"]=function(){return a["default"].createElement("div",null,"Welcome to PhotoPay!",a["default"].createElement("br",null)," ",a["default"].createElement("br",null),"Dead simple invoicing for photographers. Get paid on time, every time.")}},466:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(467),f=r(s),d=n(190);n(471);var p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"invoices-wrapper"},c["default"].createElement(d.Link,{to:"/invoices/new",className:"new-invoice-btn"},"New Invoice"),c["default"].createElement("h1",null,"Invoices"),c["default"].createElement(f["default"],null))}}]),t}(u.Component);t["default"]=p},467:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{invoices:e.invoicing.invoices}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=o(s),d=n(163),p=n(190),m=n(436),h=r(m),v=n(468),y=o(v),b=n(469),E=o(b);n(471);var _=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"componentWillMount",value:function(){this.props.fetchInvoices(),console.log(this.props.invoices)}},{key:"renderInvoices",value:function(){return this.props.invoices.length>0?this.props.invoices.map(function(e){return f["default"].createElement("tr",{key:e._id},f["default"].createElement("td",null,(0,y["default"])(e.date,"m/d/yy")),f["default"].createElement("td",null,e.invoiceNumber?e.invoiceNumber:""),f["default"].createElement("td",null,e.billTo?e.billTo.name:""),f["default"].createElement("td",{className:"text-left"},e.lineItems[0].item),f["default"].createElement("td",null,"$",e.lineItems[0].amount.toFixed(2)),f["default"].createElement("td",null,e.paid?f["default"].createElement("span",{className:"fa fa-usd paid"}):f["default"].createElement("span",{className:"fa fa-usd unpaid"})),f["default"].createElement("td",null,f["default"].createElement(p.Link,{className:"invoice-list-btn preview-btn",to:"/invoices/"+e._id,target:"_blank"},"Preview")),f["default"].createElement("td",null,f["default"].createElement(E["default"],{invoice:e})))}):f["default"].createElement("tr",null,f["default"].createElement("td",{className:"loading-graphic",colSpan:"7"},f["default"].createElement("span",{className:"fa fa-refresh fa-spin"})))}},{key:"render",value:function(){return f["default"].createElement("table",{className:"invoices-table"},f["default"].createElement("thead",null,f["default"].createElement("tr",null,f["default"].createElement("th",null,"Date"),f["default"].createElement("th",null,"Invoice #"),f["default"].createElement("th",null,"Company"),f["default"].createElement("th",{className:"text-left"},"Description"),f["default"].createElement("th",null,"Amount"),f["default"].createElement("th",null,"Paid"),f["default"].createElement("th",null),f["default"].createElement("th",null))),f["default"].createElement("tbody",null,this.renderInvoices()))}}]),t}(s.Component);t["default"]=(0,d.connect)(u,h)(_)},469:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),l=n(470),i=(r(l),n(190)),u=function(e){var t=e.invoice,n="http://photopay.herokuapp.com/invoices/"+t._id,r="Your Photos from Panoractives are Ready!",o="Hi "+t.billTo.name+",\n\nThanks again for letting us shoot this home for you! Your photos are now ready. Please click the link below to see the invoice. Immediately after submitting payment you'll have the ability to access and download the photos.\n\n"+t.lineItems[0].item+":\n"+n+"\n\nIf you have any questions or need anything else please let me know!\n\nThank you,\n\nMark Foster\nPanoractives",l="mailto:"+t.billTo.email+"?subject="+encodeURI(r)+"&body="+encodeURI(o);return a["default"].createElement(i.Link,{className:"invoice-list-btn email-btn",to:l,target:"_blank"},"Send Email")};t["default"]=u},470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={dkGrey:"#444444",medGrey:"#787878",ltGrey:"",accentColor:"#00BDEE",whiteBg:"rgba(255,255,255,.8)",msgRed:{width:"100%",backgroundColor:"rgba(251, 87, 87, 0.46)",border:"1px solid #cc0000",borderRadius:"3px",padding:"8px 10px",marginBottom:"15px"}};t["default"]=n},471:254,473:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{invoice:e.invoicing.invoice}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=o(s),d=n(163),p=n(436),m=r(p),h=n(474),v=o(h),y=n(477),b=o(y),E=n(478),_=o(E),O=n(480),g=o(O);n(475);var w=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"componentWillMount",value:function(){this.props.fetchInvoice(this.props.params.id)}},{key:"render",value:function(){var e=this.props.invoice,t=void 0;return t=e.paid===!1?f["default"].createElement("div",{className:"invoice-show-content"},f["default"].createElement(v["default"],{invoice:e}),f["default"].createElement(b["default"],{invoice:e}),f["default"].createElement(_["default"],{invoice:e})):e.paid===!0?f["default"].createElement("div",{className:"invoice-show-content"},f["default"].createElement(v["default"],{invoice:e}),f["default"].createElement(b["default"],{invoice:e}),f["default"].createElement(g["default"],{invoice:e})):f["default"].createElement("div",null,"Loading..."),f["default"].createElement("div",{className:"invoice-show-background"},t)}}]),t}(s.Component);t["default"]=(0,d.connect)(u,m)(w)},474:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);n(475);var l=function(e){var t=e.invoice.billFrom,n=e.invoice.billTo;return a["default"].createElement("div",{className:"company-info-wrapper"},a["default"].createElement("div",{className:"float-left"},a["default"].createElement("div",{className:"label"},"INVOICE FROM"),a["default"].createElement("div",{className:"name"},t.name),a["default"].createElement("div",{className:"info"},t.email),a["default"].createElement("div",{className:"info"},t.phone)),a["default"].createElement("div",{className:"float-right text-right"},a["default"].createElement("div",{className:"label"},"BILL TO"),a["default"].createElement("div",{className:"name"},n.name),a["default"].createElement("div",{className:"info"},n.email),a["default"].createElement("div",{className:"info"},n.phone)))};t["default"]=l},475:254,477:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),l=n(468),i=r(l);n(475);var u=function(e){return a["default"].createElement("div",{className:"line-items-wrapper"},a["default"].createElement("div",{className:"title"},"Invoice Detail"),a["default"].createElement("div",{className:"label"},(0,i["default"])(e.invoice.date,"d mmm yyyy")),a["default"].createElement("div",{className:"line-item clearfix"},a["default"].createElement("div",{className:"description"},e.invoice.lineItems[0].item),a["default"].createElement("div",{className:"amount"},"$",e.invoice.lineItems[0].amount.toFixed(2))),a["default"].createElement("div",{className:"total-wrapper"},a["default"].createElement("span",{className:"total-due"},"TOTAL DUE: $",e.invoice.paid?"0":e.invoice.lineItems[0].amount.toFixed(2))))};t["default"]=u},478:function(e,t,n){(function(e){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=o(c),f=n(163),d=n(479),p=o(d),m=n(436),h=r(m);n(475);var v=function(t){function n(){return a(this,n),l(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),u(n,[{key:"onToken",value:function(e){this.props.createCharge(e,this.props.invoice._id)}},{key:"render",value:function(){var t=this.props.invoice;return s["default"].createElement("div",{className:"submit-payment-wrapper"},s["default"].createElement(p["default"],{invoiceId:t._id,token:this.onToken.bind(this),stripeKey:e.env.STRIPE_PUBLISHABLE_KEY,amount:100*t.lineItems[0].amount,name:t.billFrom.name,description:t.lineItems[0].item},s["default"].createElement("button",null,"Submit Payment & Access Photos")),s["default"].createElement("div",{className:"text"},"(You'll receive access to the entire photo collection immediately after payment has been made.)"))}}]),n}(c.Component);t["default"]=(0,f.connect)(null,h)(v)}).call(t,n(111))},480:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);n(190);n(475);var l=function(e){return a["default"].createElement("div",null,a["default"].createElement("div",{className:"display-link-wrapper"},a["default"].createElement("div",{className:"title"},"Thank You!"),a["default"].createElement("div",{className:"text"},"Your photos can be accessed here:",a["default"].createElement("br",null),a["default"].createElement("a",{href:e.invoice.shareUrl},e.invoice.shareUrl))))};t["default"]=l},481:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{customerList:e.customers.customerList}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),d=(n(190),n(260)),p=n(163),m=n(436),h=n(482),v=n(483),y=(r(v),n(495)),b=r(y),E=n(496);n(497);var _=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"componentWillMount",value:function(){this.props.fetchCustomers()}},{key:"handleFormSubmit",value:function(e){var t=(0,E.normalizeShareUrl)(e.shareUrl),n={customerName:this.props.customerList[e.customer-1].name,customerEmail:this.props.customerList[e.customer-1].email,invoiceNumber:e.invoiceNumber,item:e.item,amount:e.amount,shareUrl:t,displayShareLinkImmediately:e.displayShareLinkImmediately,paid:e.paid};console.info("expandedFormProps",n),this.props.createInvoice(n)}},{key:"renderAlert",value:function(){if(this.props.errorMessage)return f["default"].createElement("div",{className:"msg-red"
},this.props.errorMessage)}},{key:"render",value:function(){var e=this.props,t=(e.hasCustomerValue,e.customerValue,e.handleSubmit),n=[{}];return this.props.customerList.length>0&&(n=this.props.customerList.map(function(e,t){return{value:t+1,label:e.name}}),console.log("customerOptions",n)),f["default"].createElement("div",{className:"invoice-form-wrapper"},f["default"].createElement("h1",{className:"text-center"},"New Invoice"),f["default"].createElement("form",{onSubmit:t(this.handleFormSubmit.bind(this))},this.renderAlert(),f["default"].createElement("div",{className:"clearfix"},f["default"].createElement("fieldset",{className:"customer-field"},f["default"].createElement("label",{htmlFor:"customer"},"Customer:"),f["default"].createElement(d.Field,{name:"customer",component:function(e){return f["default"].createElement(b["default"],u({},e,{options:n,clearable:!1}))}})),f["default"].createElement("fieldset",{className:"invoice-number-field"},f["default"].createElement("label",{htmlFor:"invoiceNumber"},"Invoice #:"),f["default"].createElement(d.Field,{className:"text-input",name:"invoiceNumber",component:"input",type:"input"}))),f["default"].createElement("h2",{className:"text-center"},"Items"),f["default"].createElement("div",{className:"clearfix"},f["default"].createElement("div",{className:"clearfix"},f["default"].createElement("fieldset",{className:"item-field"},f["default"].createElement("label",null,"Item:"),f["default"].createElement(d.Field,{className:"text-input",name:"item",component:"input",type:"input"})),f["default"].createElement("fieldset",{className:"amount-field"},f["default"].createElement("label",null,"Amount:"),f["default"].createElement(d.Field,{className:"text-input",name:"amount",component:"input",type:"input"}))),f["default"].createElement("div",{className:"clearfix"},f["default"].createElement("div",{className:"total-label"},"Total:"),f["default"].createElement("div",{className:"total-amount"},"$"))),f["default"].createElement("h2",{className:"text-center"},"After Payment Has Been Received"),f["default"].createElement("fieldset",null,f["default"].createElement("label",null,"Share This Link:"),f["default"].createElement(d.Field,{className:"text-input",name:"shareUrl",component:"input",type:"input"})),f["default"].createElement("fieldset",null,f["default"].createElement(d.Field,{name:"displayShareLinkImmediately",component:"input",type:"checkbox"}),"Display share link immediately (even before payment has been received)",f["default"].createElement("br",null),f["default"].createElement(d.Field,{name:"paid",component:"input",type:"checkbox"}),"Mark invoice as paid",f["default"].createElement("br",null)),f["default"].createElement("button",{className:"save-btn clearfix",action:"submit"},"Save Invoice")))}}]),t}(s.Component),O=(0,d.reduxForm)({form:"createInvoice"});t["default"]=(0,p.connect)(i,{createInvoice:m.createInvoice,fetchCustomers:h.fetchCustomers})(O(_))},482:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){return function(e){i["default"].get(a.API_URL+"/customers",{headers:{authorization:localStorage.getItem("token")}}).then(function(t){e({type:u.FETCH_CUSTOMERS,payload:t.data})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchCustomers=o;var a=n(437),l=n(438),i=r(l),u=(n(190),n(460))},495:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),f=n(483),d=r(f),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"onChange",value:function(e){this.props.input.onChange&&this.props.input.onChange(e.value)}},{key:"render",value:function(){var e=this;return s["default"].createElement(d["default"],i({},this.props,{value:this.props.input.value||"",onBlur:function(){return e.props.input.onBlur(e.props.input.value)},onChange:this.onChange.bind(this),options:this.props.options}))}}]),t}(c.Component);t["default"]=p},496:function(e,t){"use strict";function n(e){return console.log("normalizing!!! Original:",e),e.startsWith("http://")||e.startsWith("https://")?e:"http://"+e}Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeShareUrl=n},497:254,499:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(170),a=n(260),l=n(500),i=r(l),u=n(501),c=r(u),s=n(502),f=r(s),d=(0,o.combineReducers)({auth:i["default"],invoicing:c["default"],customers:f["default"],form:a.reducer});t["default"]=d},500:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case o.AUTH_USER:return r({},e,{error:"",authenticated:!0});case o.UNAUTH_USER:return r({},e,{authenticated:!1});case o.AUTH_ERROR:return r({},e,{error:t.payload});case o.FETCH_MESSAGE:return r({},e,{message:t.payload})}return e};var o=n(460)},501:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{invoices:[],invoice:{}},t=arguments[1];switch(t.type){case o.FETCH_INVOICES:return r({},e,{invoices:t.payload});case o.CREATE_INVOICE:return r({},e);case o.FETCH_INVOICE:return r({},e,{invoice:t.payload});case o.CREATE_CHARGE:return r({},e,{invoice:t.payload})}return e};var o=n(460)},502:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{customerList:[],customer:{}},t=arguments[1];switch(t.type){case o.FETCH_CUSTOMERS:return r({},e,{customerList:t.payload})}return e};var o=n(460)},503:254});