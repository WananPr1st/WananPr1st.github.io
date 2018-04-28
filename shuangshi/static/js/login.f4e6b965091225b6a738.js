webpackJsonp([1],{"6tQU":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"login"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"Login",mounted:function(){}},a,!1,function(e){n("myPi")},null,null).exports,s=n("/ocq"),i=n("rsaY");function u(e,t,n){/^1[3|4|5|7|8][0-9]\d{8}$/.test(t)||n(new Error("手机号格式错误")),n()}var c=n("//Fk"),l=n.n(c),d=n("mtWM"),m=n.n(d);m.a.default.timeout=3e3,m.a.default.baseUrl="",m.a.interceptors.response.use(function(e){return 0!==e.data.code?(o.default.prototype.$Message.error(e.data.msg),l.a.reject(e)):e.data},function(e){return o.default.prototype.$Message.error("无网络，请您检查后再试！"),l.a.reject(e)});var f=m.a;var v={name:"Login",components:{LayoutHeader:i.a},data:function(){return{isSendCode:!1,count:60,captchStr:"发送验证码",loginForm:{userName:"",captchCode:""},ruleValidate:{userName:[{required:!0,message:"手机号不能为空",trigger:"blur"},{validator:u,trigger:"blur"}],captchCode:[{required:!0,message:"验证码不能为空",trigger:"blur"}]}}},methods:{login:function(e){if(!this.$refs[e].validate())return!1;var t={userName:e.userName,captchCode:e.captchCode};this.$store.dispatch("Login",t)},sendCode:function(){var e=this;e.$refs.loginForm.validateField("userName",function(t){t||(e.isSendCode=!0,f.post("/web/auth/sendCode").then(function(t){e.count=60,setInterval(function(){e.count=e.count-1,0===e.count&&(e.isSendCode=!1)},1e3)}))})}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("layout-header"),e._v(" "),n("Content",[n("div",{staticClass:"login-container"},[n("div",{staticClass:"cn-title"},[e._v("\n                百家云双师互动课堂\n            ")]),e._v(" "),n("div",{staticClass:"en-title"},[e._v("\n                BAIJIAYUN INTERACTIVE CLASSES LOGIN\n            ")]),e._v(" "),n("Form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.ruleValidate,"label-position":"top"}},[n("FormItem",{attrs:{label:"手机号",prop:"userName"}},[n("Input",{attrs:{size:"large"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}})],1),e._v(" "),n("FormItem",{attrs:{label:"验证码",prop:"captchCode"}},[n("Row",[n("Col",{attrs:{span:"16"}},[n("Input",{attrs:{size:"large"},model:{value:e.loginForm.captchCode,callback:function(t){e.$set(e.loginForm,"captchCode",t)},expression:"loginForm.captchCode"}})],1),e._v(" "),n("Col",{attrs:{span:"4",offset:"1"}},[e.isSendCode?e._e():n("Button",{on:{click:function(t){e.sendCode()}}},[e._v("发送验证码")]),e._v(" "),e.isSendCode?n("Button",{attrs:{disabled:""}},[e._v(e._s(e.count)+"s后重新发送")]):e._e()],1)],1)],1),e._v(" "),n("FormItem",{staticClass:"save-item"},[n("Button",{on:{click:function(t){e.login("loginForm")}}},[e._v("登录")])],1)],1)],1)])],1)},staticRenderFns:[]};var g=n("VU/8")(v,p,!1,function(e){n("KCD6")},"data-v-762fdd5d",null).exports;o.default.use(s.a);var h=new s.a({routes:[{path:"/",name:"Login",component:g}]}),C=n("BTaQ"),_=n.n(C),F=(n("RHhD"),n("NYxO")),I={state:{userInfo:{}},getters:{},actions:{Login:function(e,t){var n,o=e.commit;e.state;(n=t,f.post("/web/auth/login",{username:n.userName,captchCode:n.captchCode})).then(function(e){o("setUserInfo",e.data)})}},mutations:{setUserInfo:function(e,t){e.userInfo={name:t.name,id:t.id,role:t.role,sys_id:t.sys_id}}}};o.default.use(F.a);var b=new F.a.Store({modules:{user:I},strict:!1});o.default.use(_.a),new o.default({el:"#login",store:b,router:h,components:{Login:r},template:"<Login/>"})},"IP+o":function(e,t){},KCD6:function(e,t){},RHhD:function(e,t){},myPi:function(e,t){},rsaY:function(e,t,n){"use strict";var o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("Header",{style:{position:"fixed",width:"100%"}},[t("div",{staticClass:"logo"}),this._v(" "),t("div",{staticClass:"logo-info"},[this._v("\n    你好，请登录"),t("Icon",{attrs:{type:"power"}})],1)])},staticRenderFns:[]};var a=n("VU/8")({name:"LayoutHeader",data:function(){return{}}},o,!1,function(e){n("IP+o")},"data-v-01356d52",null);t.a=a.exports}},["6tQU"]);
//# sourceMappingURL=login.f4e6b965091225b6a738.js.map