(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiaoshifenpei/add-or-update"],{2662:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"5b2c":function(e,n,t){"use strict";(function(e){t("cbff");r(t("66fd"));var n=r(t("93d8"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"93d8":function(e,n,t){"use strict";t.r(n);var r=t("2662"),a=t("be10");for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("a66b");var i,o=t("f0c5"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"4b7c770a",null,!1,r["a"],i);n["default"]=s.exports},a66b:function(e,n,t){"use strict";var r=t("de1b"),a=t.n(r);a.a},be10:function(e,n,t){"use strict";t.r(n);var r=t("f1f0"),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=a.a},de1b:function(e,n,t){},f1f0:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,a,u,i){try{var o=e[u](i),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(r,a)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){u(i,r,a,o,s,"next",e)}function s(e){u(i,r,a,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("ce71"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ruleForm:{jiaoxueloumingcheng:"",jiaoshihao:"",zuoweihao:"",weizhi:"",xuehao:"",xueshengxingming:"",banji:"",userid:""},xuehaoOptions:[],xuehaoIndex:0,user:{},ro:{jiaoxueloumingcheng:!1,jiaoshihao:!1,zuoweihao:!1,weizhi:!1,xuehao:!1,xueshengxingming:!1,banji:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return i(r.default.mark((function a(){var u,i,o,s;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,t.$api.session(u);case 3:return i=a.sent,t.user=i.data,a.next=7,t.$api.option("xuesheng","xuehao",{});case 7:if(i=a.sent,t.xuehaoOptions=i.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=17;break}return t.ruleForm.id=n.id,a.next=15,t.$api.info("jiaoshifenpei",t.ruleForm.id);case 15:i=a.sent,t.ruleForm=i.data;case 17:if(t.cross=n.cross,!n.cross){a.next=57;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 21:if((a.t1=a.t0()).done){a.next=57;break}if(s=a.t1.value,"jiaoxueloumingcheng"!=s){a.next=27;break}return t.ruleForm.jiaoxueloumingcheng=o[s],t.ro.jiaoxueloumingcheng=!0,a.abrupt("continue",21);case 27:if("jiaoshihao"!=s){a.next=31;break}return t.ruleForm.jiaoshihao=o[s],t.ro.jiaoshihao=!0,a.abrupt("continue",21);case 31:if("zuoweihao"!=s){a.next=35;break}return t.ruleForm.zuoweihao=o[s],t.ro.zuoweihao=!0,a.abrupt("continue",21);case 35:if("weizhi"!=s){a.next=39;break}return t.ruleForm.weizhi=o[s],t.ro.weizhi=!0,a.abrupt("continue",21);case 39:if("xuehao"!=s){a.next=43;break}return t.ruleForm.xuehao=o[s],t.ro.xuehao=!0,a.abrupt("continue",21);case 43:if("xueshengxingming"!=s){a.next=47;break}return t.ruleForm.xueshengxingming=o[s],t.ro.xueshengxingming=!0,a.abrupt("continue",21);case 47:if("banji"!=s){a.next=51;break}return t.ruleForm.banji=o[s],t.ro.banji=!0,a.abrupt("continue",21);case 51:if("userid"!=s){a.next=55;break}return t.ruleForm.userid=o[s],t.ro.userid=!0,a.abrupt("continue",21);case 55:a.next=21;break;case 57:t.styleChange();case 58:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xuehaoChange:function(e){var n=this;return i(r.default.mark((function t(){var a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.xuehaoIndex=e.target.value,n.ruleForm.xuehao=n.xuehaoOptions[n.xuehaoIndex],t.next=4,n.$api.follow("xuesheng","xuehao",{columnValue:n.ruleForm.xuehao});case 4:a=t.sent,a.data.xueshengxingming&&(n.ruleForm.xueshengxingming=a.data.xueshengxingming),a.data.banji&&(n.ruleForm.banji=a.data.banji);case 7:case"end":return t.stop()}}),t)})))()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(r.default.mark((function t(){var a,u,i,o,s,c,l,f,d,h;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.jiaoshihao){t.next=3;break}return n.$utils.msg("教室号不能为空"),t.abrupt("return");case 3:if(n.ruleForm.zuoweihao){t.next=6;break}return n.$utils.msg("座位号不能为空"),t.abrupt("return");case 6:if(!n.cross){t.next=22;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){t.next=22;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){t.next=18;break}for(l in c)l==o&&(c[l]=s);return f=e.getStorageSync("crossTable"),t.next=16,n.$api.update("".concat(f),c);case 16:t.next=22;break;case 18:a=Number(e.getStorageSync("userid")),u=c["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 22:if(!u||!a){t.next=44;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=u,d={page:1,limit:10,crossuserid:a,crossrefid:u},t.next=28,n.$api.list("jiaoshifenpei",d);case 28:if(h=t.sent,!(h.data.total>=i)){t.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 34:if(!n.ruleForm.id){t.next=39;break}return t.next=37,n.$api.update("jiaoshifenpei",n.ruleForm);case 37:t.next=41;break;case 39:return t.next=41,n.$api.add("jiaoshifenpei",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:t.next=52;break;case 44:if(!n.ruleForm.id){t.next=49;break}return t.next=47,n.$api.update("jiaoshifenpei",n.ruleForm);case 47:t.next=51;break;case 49:return t.next=51,n.$api.add("jiaoshifenpei",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])}},[["5b2c","common/runtime","common/vendor"]]]);