(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-center"],{"27ae":function(e,r,i){"use strict";i.r(r);var t=i("55b4"),o=i.n(t);for(var a in t)"default"!==a&&function(e){i.d(r,e,(function(){return t[e]}))}(a);r["default"]=o.a},"55b4":function(e,r,i){"use strict";var t=i("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,i("96cf");var o=t(i("3b8d")),a=t(i("2971")),n={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[],iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){var r,i,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=uni.getStorageSync("role"),r=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(r);case 4:i=e.sent,this.user=i.data,this.tableName=r,t=a.default.list(),this.menuList=t;case 9:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),onShow:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){var r,i,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.removeStorageSync("useridTag"),this.role=uni.getStorageSync("role"),r=uni.getStorageSync("nowTable"),e.next=5,this.$api.session(r);case 5:i=e.sent,this.user=i.data,this.tableName=r,t=a.default.list(),this.menuList=t;case 10:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),methods:{onPageTap:function(e){uni.setStorageSync("useridTag",1),uni.navigateTo({url:e,fail:function(){uni.switchTab({url:e})}})}}};r.default=n},7991:function(e,r,i){var t=i("24fb");r=t(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-e8fe5482]{background-color:#fff}.content[data-v-e8fe5482]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.header[data-v-e8fe5482]{background-color:#ff6364;width:100%;height:30vw;padding:0 4%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header.status[data-v-e8fe5482]{padding-top:0}.header .userinfo[data-v-e8fe5482]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header .userinfo .face[data-v-e8fe5482]{-webkit-flex-shrink:0;flex-shrink:0;width:15vw;height:15vw;overflow:hidden}.header .userinfo .face uni-image[data-v-e8fe5482]{width:100%;height:100%}.header .userinfo .info[data-v-e8fe5482]{-webkit-flex-flow:wrap;flex-flow:wrap}.header .userinfo .info .username[data-v-e8fe5482]{width:100%;color:#fff;font-size:%?40?%;margin:%?8?% 0}.header .userinfo .info .integral[data-v-e8fe5482]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?8?%;color:#fff;background-color:rgba(0,0,0,.1);border-radius:%?20?%;font-size:%?24?%;margin:%?8?% 0}.header .setting[data-v-e8fe5482]{-webkit-flex-shrink:0;flex-shrink:0}.header .setting uni-image[data-v-e8fe5482]{width:100%;height:100%}.hover[data-v-e8fe5482]{background-color:#eee}.orders[data-v-e8fe5482]{background-color:#ff6364;width:100%;height:11vw;padding:0 4%;margin-bottom:calc(11vw + %?40?%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;border-radius:0 0 100% 100%;margin-top:%?-1?%}.orders .box[data-v-e8fe5482]{width:100%;padding:0 1%;height:22vw;background-color:#fefefe;border-radius:%?24?%;box-shadow:0 0 %?20?% rgba(0,0,0,.15);margin-bottom:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.orders .box .label[data-v-e8fe5482]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-flow:wrap;flex-flow:wrap;width:100%;height:16vw;color:#666;font-size:%?26?%}.orders .box .label .icon[data-v-e8fe5482]{position:relative;width:7vw;height:7vw;margin:0 1vw}.orders .box .label .icon .badge[data-v-e8fe5482]{position:absolute;width:4vw;height:4vw;background-color:#ec6d2c;top:-1vw;right:-1vw;border-radius:100%;font-size:%?20?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:10}.orders .box .label .icon uni-image[data-v-e8fe5482]{width:7vw;height:7vw;z-index:9}.list[data-v-e8fe5482]{width:100%;border-bottom:solid %?26?% #f1f1f1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.list .li[data-v-e8fe5482]{width:100%;height:%?100?%;padding:0 4%;border-bottom:solid %?1?% #e7e7e7;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;font-size:%?33?%;-webkit-flex-wrap:wrap;flex-wrap:wrap}.list .li.noborder[data-v-e8fe5482]{border-bottom:0}.list .li .icon[data-v-e8fe5482]{-webkit-flex-shrink:0;flex-shrink:0;width:%?50?%;height:%?50?%}.list .li .icon uni-image[data-v-e8fe5482]{width:%?50?%;height:%?50?%}.list .li .text[data-v-e8fe5482]{padding-left:%?20?%;width:100%;color:#666}.list .li .to[data-v-e8fe5482]{-webkit-flex-shrink:0;flex-shrink:0;width:%?40?%;height:%?40?%}body.?%PAGE?%[data-v-e8fe5482]{background-color:#fff}',""]),e.exports=r},"82d2":function(e,r,i){var t=i("7991");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var o=i("4f06").default;o("a4249bbc",t,!0,{sourceMap:!1,shadowMode:!1})},c8ed:function(e,r,i){"use strict";var t,o=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"header",class:{status:e.isH5Plus},style:{padding:"0 24rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(80, 96, 93, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"260rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onPageTap("../user-info/user-info")}}},["xuesheng"==e.tableName?i("v-uni-view",{staticClass:"userinfo",style:{padding:"0 24rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"20rpx 0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0, 0, 0, 0)",borderRadius:"16rpx",borderWidth:"0",width:"calc(100% - 112rpx)",borderStyle:"solid",height:"160rpx"}},[i("v-uni-view",{staticClass:"face",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 20rpx 0 0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"120rpx",borderStyle:"solid",height:"120rpx"}},[i("v-uni-image",{attrs:{src:e.user.touxiang?e.baseUrl+e.user.touxiang:"/static/center/face.jpeg"}})],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"username",style:{padding:"0",boxShadow:"0 0 16rpx rgba(255,255,255,0)",margin:"6rpx 0",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(255,255,255,.3)",color:"#fff",textAlign:"left",borderRadius:"8rpx",borderWidth:"0",width:"auto",lineHeight:"36rpx",fontSize:"28rpx",borderStyle:"solid"}},[e._v(e._s(e.user.xuehao)),e.user.vip&&"是"==e.user.vip?i("v-uni-text",[e._v("(VIP)")]):e._e()],1)],1)],1):e._e(),i("v-uni-view",{staticClass:"setting"},[i("v-uni-view",{staticClass:"cuIcon-settings",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0 0 0 80rpx",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",borderRadius:"0",color:"#fff",borderWidth:"0",width:"32rpx",lineHeight:"32rpx",fontSize:"32rpx",borderStyle:"solid"}})],1)],1),i("v-uni-view",{staticClass:"list",style:{padding:"0 24rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"24rpx 0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[e._l(e.menuList,(function(r){return[e._l(r.backMenu,(function(t,o){return e.role==r.roleName?[e._l(t.child,(function(r,t){return["yifahuodingdan"!=r.tableName&&"yituikuandingdan"!=r.tableName&&"yiquxiaodingdan"!=r.tableName&&"weizhifudingdan"!=r.tableName&&"yizhifudingdan"!=r.tableName&&"yiwanchengdingdan"!=r.tableName?i("v-uni-view",{key:t+"_0",staticClass:"li",style:{padding:"0",boxShadow:"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"20rpx 10rpx",backgroundColor:"#fff",borderColor:"#ccc",borderRadius:"0",borderWidth:"0",width:"46%",borderStyle:"solid",height:"100rpx"},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onPageTap("../"+r.tableName+"/list?userid="+e.user.id)}}},[i("v-uni-view",{class:r.appFrontIcon,style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0 10rpx",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 186, 189, 1)",isShow:!0,borderRadius:"0",borderWidth:"0",width:"50rpx",lineHeight:"50rpx",fontSize:"64rpx",borderStyle:"solid"}}),i("v-uni-view",{staticClass:"text",style:{padding:"0 20rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 100rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[e._v(e._s(r.menu))]),i("v-uni-view",{staticClass:"cuIcon-right",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"#fff",color:"rgba(161, 161, 161, 1)",isShow:!0,borderRadius:"0",borderWidth:"0",width:"28rpx",lineHeight:"28rpx",fontSize:"28rpx",borderStyle:"solid"}})],1):e._e()]}))]:e._e()}))]})),i("v-uni-view",{staticClass:"li",style:{padding:"0",boxShadow:"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"20rpx 10rpx",backgroundColor:"#fff",borderColor:"#ccc",borderRadius:"0",borderWidth:"0",width:"46%",borderStyle:"solid",height:"100rpx"},attrs:{"hover-class":"hover"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onPageTap("../forum-add-or-update/forum-add-or-update")}}},[i("v-uni-view",{staticClass:"cuIcon-scan",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0 10rpx",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 186, 189, 1)",isShow:!0,borderRadius:"0",borderWidth:"0",width:"50rpx",lineHeight:"50rpx",fontSize:"64rpx",borderStyle:"solid"}}),i("v-uni-view",{staticClass:"text",style:{padding:"0 20rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 100rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[e._v("我要发贴")]),i("v-uni-view",{staticClass:"cuIcon-right",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"#fff",color:"rgba(161, 161, 161, 1)",isShow:!0,borderRadius:"0",borderWidth:"0",width:"28rpx",lineHeight:"28rpx",fontSize:"28rpx",borderStyle:"solid"}})],1),i("v-uni-view",{staticClass:"li",style:{padding:"0",boxShadow:"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"20rpx 10rpx",backgroundColor:"#fff",borderColor:"#ccc",borderRadius:"0",borderWidth:"0",width:"46%",borderStyle:"solid",height:"100rpx"},attrs:{"hover-class":"hover"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onPageTap("../forum-my/forum-my")}}},[i("v-uni-view",{staticClass:"cuIcon-scan",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0 10rpx",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 186, 189, 1)",isShow:!0,borderRadius:"0",borderWidth:"0",width:"50rpx",lineHeight:"50rpx",fontSize:"64rpx",borderStyle:"solid"}}),i("v-uni-view",{staticClass:"text",style:{padding:"0 20rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 100rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[e._v("我的发贴")]),i("v-uni-view",{staticClass:"cuIcon-right",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"#fff",color:"rgba(161, 161, 161, 1)",isShow:!0,borderRadius:"0",borderWidth:"0",width:"28rpx",lineHeight:"28rpx",fontSize:"28rpx",borderStyle:"solid"}})],1)],2)],1)},a=[];i.d(r,"b",(function(){return o})),i.d(r,"c",(function(){return a})),i.d(r,"a",(function(){return t}))},d2c0:function(e,r,i){"use strict";i.r(r);var t=i("c8ed"),o=i("27ae");for(var a in o)"default"!==a&&function(e){i.d(r,e,(function(){return o[e]}))}(a);i("db6a");var n,d=i("f0c5"),l=Object(d["a"])(o["default"],t["b"],t["c"],!1,null,"e8fe5482",null,!1,t["a"],n);r["default"]=l.exports},db6a:function(e,r,i){"use strict";var t=i("82d2"),o=i.n(t);o.a}}]);