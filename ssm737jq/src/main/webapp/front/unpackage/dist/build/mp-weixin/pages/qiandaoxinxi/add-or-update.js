(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qiandaoxinxi/add-or-update"],{"0592":function(e,n,r){"use strict";r.r(n);var t=r("5dc1"),a=r("c880");for(var i in a)"default"!==i&&function(e){r.d(n,e,(function(){return a[e]}))}(i);r("0b60");var o,u=r("f0c5"),s=Object(u["a"])(a["default"],t["b"],t["c"],!1,null,"5a8ed5ed",null,!1,t["a"],o);n["default"]=s.exports},"0b60":function(e,n,r){"use strict";var t=r("608d"),a=r.n(t);a.a},"16d1":function(e,n,r){"use strict";(function(e){r("cbff");t(r("66fd"));var n=t(r("0592"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"37ec":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,r,t,a,i,o){try{var u=e[i](o),s=u.value}catch(c){return void r(c)}u.done?n(s):Promise.resolve(s).then(t,a)}function o(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var o=e.apply(n,r);function u(e){i(o,t,a,u,s,"next",e)}function s(e){i(o,t,a,u,s,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("ce71"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{cross:"",ruleForm:{bianhao:this.getUUID(),biaoti:"",qiandaoneirong:"",qiandaoshijian:"",xuehao:"",xueshengxingming:"",banji:"",userid:""},user:{},ro:{bianhao:!1,biaoti:!1,qiandaoneirong:!1,qiandaoshijian:!1,xuehao:!1,xueshengxingming:!1,banji:!1,userid:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var r=this;return o(t.default.mark((function a(){var i,o,u,s;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r.ruleForm.qiandaoshijian=r.$utils.getCurDateTime(),i=e.getStorageSync("nowTable"),a.next=4,r.$api.session(i);case 4:if(o=a.sent,r.user=o.data,r.ruleForm.xuehao=r.user.xuehao,r.ro.xuehao=!0,r.ruleForm.xueshengxingming=r.user.xueshengxingming,r.ro.xueshengxingming=!0,r.ruleForm.banji=r.user.banji,r.ro.banji=!0,r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=20;break}return r.ruleForm.id=n.id,a.next=18,r.$api.info("qiandaoxinxi",r.ruleForm.id);case 18:o=a.sent,r.ruleForm=o.data;case 20:if(r.cross=n.cross,!n.cross){a.next=60;break}u=e.getStorageSync("crossObj"),a.t0=t.default.keys(u);case 24:if((a.t1=a.t0()).done){a.next=60;break}if(s=a.t1.value,"bianhao"!=s){a.next=30;break}return r.ruleForm.bianhao=u[s],r.ro.bianhao=!0,a.abrupt("continue",24);case 30:if("biaoti"!=s){a.next=34;break}return r.ruleForm.biaoti=u[s],r.ro.biaoti=!0,a.abrupt("continue",24);case 34:if("qiandaoneirong"!=s){a.next=38;break}return r.ruleForm.qiandaoneirong=u[s],r.ro.qiandaoneirong=!0,a.abrupt("continue",24);case 38:if("qiandaoshijian"!=s){a.next=42;break}return r.ruleForm.qiandaoshijian=u[s],r.ro.qiandaoshijian=!0,a.abrupt("continue",24);case 42:if("xuehao"!=s){a.next=46;break}return r.ruleForm.xuehao=u[s],r.ro.xuehao=!0,a.abrupt("continue",24);case 46:if("xueshengxingming"!=s){a.next=50;break}return r.ruleForm.xueshengxingming=u[s],r.ro.xueshengxingming=!0,a.abrupt("continue",24);case 50:if("banji"!=s){a.next=54;break}return r.ruleForm.banji=u[s],r.ro.banji=!0,a.abrupt("continue",24);case 54:if("userid"!=s){a.next=58;break}return r.ruleForm.userid=u[s],r.ro.userid=!0,a.abrupt("continue",24);case 58:a.next=24;break;case 60:r.styleChange();case 61:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},qiandaoshijianConfirm:function(e){console.log(e),this.ruleForm.qiandaoshijian=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(t.default.mark((function r(){var a,i,o,u,s,c,d,l,f,g;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n.ruleForm.biaoti){r.next=3;break}return n.$utils.msg("标题不能为空"),r.abrupt("return");case 3:if(!n.cross){r.next=19;break}if(u=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==u){r.next=19;break}if(c=e.getStorageSync("crossObj"),u.startsWith("[")){r.next=15;break}for(d in c)d==u&&(c[d]=s);return l=e.getStorageSync("crossTable"),r.next=13,n.$api.update("".concat(l),c);case 13:r.next=19;break;case 15:a=Number(e.getStorageSync("userid")),i=c["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 19:if(!i||!a){r.next=41;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=i,f={page:1,limit:10,crossuserid:a,crossrefid:i},r.next=25,n.$api.list("qiandaoxinxi",f);case 25:if(g=r.sent,!(g.data.total>=o)){r.next=31;break}return n.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 31:if(!n.ruleForm.id){r.next=36;break}return r.next=34,n.$api.update("qiandaoxinxi",n.ruleForm);case 34:r.next=38;break;case 36:return r.next=38,n.$api.add("qiandaoxinxi",n.ruleForm);case 38:n.$utils.msgBack("提交成功");case 39:r.next=49;break;case 41:if(!n.ruleForm.id){r.next=46;break}return r.next=44,n.$api.update("qiandaoxinxi",n.ruleForm);case 44:r.next=48;break;case 46:return r.next=48,n.$api.add("qiandaoxinxi",n.ruleForm);case 48:n.$utils.msgBack("提交成功");case 49:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),t=n.getMonth()+1,a=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(r,"-").concat(t,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,r("543d")["default"])},"5dc1":function(e,n,r){"use strict";r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return i})),r.d(n,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"ce71"))}},a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"608d":function(e,n,r){},c880:function(e,n,r){"use strict";r.r(n);var t=r("37ec"),a=r.n(t);for(var i in t)"default"!==i&&function(e){r.d(n,e,(function(){return t[e]}))}(i);n["default"]=a.a}},[["16d1","common/runtime","common/vendor"]]]);