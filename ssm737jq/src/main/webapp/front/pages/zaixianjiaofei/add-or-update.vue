<template>
	<view class="content">
		<form class="app-update-pv">
			 
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">订单编号</view>
				<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="right-input">
					{{ruleForm.dingdanbianhao}}
				</view>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">名称</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.mingcheng" v-model="ruleForm.mingcheng" placeholder="名称"></input>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">学号</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.xuehao" v-model="ruleForm.xuehao" placeholder="学号"></input>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">学生姓名</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.xueshengxingming" v-model="ruleForm.xueshengxingming" placeholder="学生姓名"></input>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">班级</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.banji" v-model="ruleForm.banji" placeholder="班级"></input>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">学费</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.xuefei" v-model="ruleForm.xuefei" placeholder="学费"></input>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">住宿费</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.zhusufei" v-model="ruleForm.zhusufei" placeholder="住宿费"></input>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">水费</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.shuifei" v-model="ruleForm.shuifei" placeholder="水费"></input>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">电费</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.dianfei" v-model="ruleForm.dianfei" placeholder="电费"></input>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">总费用</view>
				<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="right-input">
					{{zongfeiyong}}
				</view>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">缴费时间</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.jiaofeishijian" placeholder="缴费时间" @tap="toggleTab('jiaofeishijian')"></input>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">备注</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.beizhu" v-model="ruleForm.beizhu" placeholder="备注"></input>
			</view>
			
			<!-- 否 -->
 

			
			
			<view class="btn" >
				<button :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","margin":"0","backgroundColor":"rgba(130, 163, 157, 1)","borderColor":"rgba(130, 163, 157, 1)","borderRadius":"80rpx","color":"#fff","borderWidth":"1","width":"80%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="jiaofeishijianConfirm" ref="jiaofeishijian" themeColor="#333333"></w-picker>
			
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				dingdanbianhao: this.getUUID(),
				mingcheng: '',
				xuehao: '',
				xueshengxingming: '',
				banji: '',
				xuefei: '',
				zhusufei: '',
				shuifei: '',
				dianfei: '',
				zongfeiyong: '',
				jiaofeishijian: '',
				beizhu: '',
				ispay: '',
				userid: '',
				},
				// 登陆用户信息
				user: {},
                                ro:{
                                   dingdanbianhao : false,
                                   mingcheng : false,
                                   xuehao : false,
                                   xueshengxingming : false,
                                   banji : false,
                                   xuefei : false,
                                   zhusufei : false,
                                   shuifei : false,
                                   dianfei : false,
                                   zongfeiyong : false,
                                   jiaofeishijian : false,
                                   beizhu : false,
                                   ispay : false,
                                   userid : false,
                                },
			}
		},
		components: {
			wPicker
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
			
			
			
			
			
			
			
			
			
			
			zongfeiyong: {
			get: function () {
				return 0+parseFloat(this.ruleForm.xuefei)+parseFloat(this.ruleForm.zhusufei)+parseFloat(this.ruleForm.shuifei)+parseFloat(this.ruleForm.dianfei) || ''
			}
			},
			
			
			
			
		},
		async onLoad(options) {
        		this.ruleForm.jiaofeishijian = this.$utils.getCurDateTime();

			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取



			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`zaixianjiaofei`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='dingdanbianhao'){
					this.ruleForm.dingdanbianhao = obj[o];
					this.ro.dingdanbianhao = true;
					continue;
					}
					if(o=='mingcheng'){
					this.ruleForm.mingcheng = obj[o];
					this.ro.mingcheng = true;
					continue;
					}
					if(o=='xuehao'){
					this.ruleForm.xuehao = obj[o];
					this.ro.xuehao = true;
					continue;
					}
					if(o=='xueshengxingming'){
					this.ruleForm.xueshengxingming = obj[o];
					this.ro.xueshengxingming = true;
					continue;
					}
					if(o=='banji'){
					this.ruleForm.banji = obj[o];
					this.ro.banji = true;
					continue;
					}
					if(o=='xuefei'){
					this.ruleForm.xuefei = obj[o];
					this.ro.xuefei = true;
					continue;
					}
					if(o=='zhusufei'){
					this.ruleForm.zhusufei = obj[o];
					this.ro.zhusufei = true;
					continue;
					}
					if(o=='shuifei'){
					this.ruleForm.shuifei = obj[o];
					this.ro.shuifei = true;
					continue;
					}
					if(o=='dianfei'){
					this.ruleForm.dianfei = obj[o];
					this.ro.dianfei = true;
					continue;
					}
					if(o=='zongfeiyong'){
					this.ruleForm.zongfeiyong = obj[o];
					this.ro.zongfeiyong = true;
					continue;
					}
					if(o=='jiaofeishijian'){
					this.ruleForm.jiaofeishijian = obj[o];
					this.ro.jiaofeishijian = true;
					continue;
					}
					if(o=='beizhu'){
					this.ruleForm.beizhu = obj[o];
					this.ro.beizhu = true;
					continue;
					}
					if(o=='userid'){
					this.ruleForm.userid = obj[o];
					this.ro.userid = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv .cu-form-group .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数


			// 日长控件选择日期时间
			jiaofeishijianConfirm(val) {
				console.log(val)
				this.ruleForm.jiaofeishijian = val.result;
				this.$forceUpdate();
			},



			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {

				this.ruleForm.zongfeiyong = this.zongfeiyong




























//跨表计算判断
				if((!this.ruleForm.mingcheng)){
					this.$utils.msg(`名称不能为空`);
					return
				}
				if((!this.ruleForm.xuefei)){
					this.$utils.msg(`学费不能为空`);
					return
				}
				if(this.ruleForm.xuefei&&(!this.$validate.isNumber(this.ruleForm.xuefei))){
					this.$utils.msg(`学费应输入数字`);
					return
				}
				if((!this.ruleForm.zhusufei)){
					this.$utils.msg(`住宿费不能为空`);
					return
				}
				if(this.ruleForm.zhusufei&&(!this.$validate.isNumber(this.ruleForm.zhusufei))){
					this.$utils.msg(`住宿费应输入数字`);
					return
				}
				if((!this.ruleForm.shuifei)){
					this.$utils.msg(`水费不能为空`);
					return
				}
				if(this.ruleForm.shuifei&&(!this.$validate.isNumber(this.ruleForm.shuifei))){
					this.$utils.msg(`水费应输入数字`);
					return
				}
				if((!this.ruleForm.dianfei)){
					this.$utils.msg(`电费不能为空`);
					return
				}
				if(this.ruleForm.dianfei&&(!this.$validate.isNumber(this.ruleForm.dianfei))){
					this.$utils.msg(`电费应输入数字`);
					return
				}
				if((!this.ruleForm.zongfeiyong)){
					this.$utils.msg(`总费用不能为空`);
					return
				}
				if(this.ruleForm.zongfeiyong&&(!this.$validate.isNumber(this.ruleForm.zongfeiyong))){
					this.$utils.msg(`总费用应输入数字`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
						var obj = uni.getStorageSync('crossObj');
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`zaixianjiaofei`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`zaixianjiaofei`, this.ruleForm);
						}else{
							await this.$api.add(`zaixianjiaofei`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`zaixianjiaofei`, this.ruleForm);
					}else{
						await this.$api.add(`zaixianjiaofei`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20upx;
	}
	
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
		background-image: url(http://codegen.caihongy.cn/20220210/87bd12d356ac4a8e90125da208a7597e.png);
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	textarea {
		border: 1upx solid #EEEEEE;
		border-radius: 20upx;
		padding: 20upx;
	}

	.title {
		width: 180upx;
	}

	.avator {
		width: 150upx;
		height: 60upx;
	}

	.right-input {
		flex: 1;
		text-align: left;
		padding: 0 24upx;
	}
	
	.cu-form-group.active {
		justify-content: space-between;
	}
	
	.btn {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-wrap: wrap;
	  padding: 20upx 0;
	}
	
	.cu-form-group {
		padding: 0 24upx;
		background-color: transparent;
		min-height: inherit;
	}
	
	.cu-form-group+.cu-form-group {
		border: 0;
	}
	
	.cu-form-group uni-input {
		padding: 0 30upx;
	}
	
	.uni-input {
		padding: 0 30upx;
	}
	
	.cu-form-group uni-textarea {
		padding: 30upx;
		margin: 0;
	}
	
	.cu-form-group uni-picker::after {
		line-height: 80rpx;
	}
	
	.select .uni-input {
		line-height: 80rpx;
	}
	
	.input .right-input {
		line-height: 88rpx;
	}
</style>
