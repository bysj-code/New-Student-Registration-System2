<template>
	<view class="content">
		<form class="app-update-pv">
			 
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">学号</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.xuehao" v-model="ruleForm.xuehao" placeholder="学号"></input>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group" @tap="touxiangTap">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">头像</view>
				<view class="right-input" style="padding:0">
					<image :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 auto","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","borderRadius":"100%","borderWidth":"0","width":"88rpx","borderStyle":"solid","height":"88rpx"}' class="avator" v-if="ruleForm.touxiang" :src="baseUrl+ruleForm.touxiang" mode="aspectFill"></image>
					<image :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 auto","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","borderRadius":"100%","borderWidth":"0","width":"88rpx","borderStyle":"solid","height":"88rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
				</view>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">学生姓名</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.xueshengxingming" v-model="ruleForm.xueshengxingming" placeholder="学生姓名"></input>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">性别</view>
				<picker @change="xingbieChange" :value="xingbieIndex"  :range="xingbieOptions">
					<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0,0,0,.6)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">班级</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.banji" v-model="ruleForm.banji" placeholder="班级"></input>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">专业</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.zhuanye" v-model="ruleForm.zhuanye" placeholder="专业"></input>
			</view>
			<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(130, 163, 157, 1)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">录取时间</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(161, 161, 161, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' v-model="ruleForm.luqushijian" placeholder="录取时间" @tap="toggleTab('luqushijian')"></input>
			</view>
			
			<!-- 否 -->
 

			
			
			<view class="btn" >
				<button :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","margin":"0","backgroundColor":"rgba(130, 163, 157, 1)","borderColor":"rgba(130, 163, 157, 1)","borderRadius":"80rpx","color":"#fff","borderWidth":"1","width":"80%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="luqushijianConfirm" ref="luqushijian" themeColor="#333333"></w-picker>
			
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				xuehao: '',
				touxiang: '',
				xueshengxingming: '',
				xingbie: '',
				banji: '',
				zhuanye: '',
				luqushijian: '',
				},
				xingbieOptions: [],
				xingbieIndex: 0,
				// 登陆用户信息
				user: {},
                                ro:{
                                   xuehao : false,
                                   touxiang : false,
                                   xueshengxingming : false,
                                   xingbie : false,
                                   banji : false,
                                   zhuanye : false,
                                   luqushijian : false,
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
			
			
			
			
			
			
			
		},
		async onLoad(options) {
        		this.ruleForm.luqushijian = this.$utils.getCurDateTime();

			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 自定义下拉框值
			this.xingbieOptions = "男,女".split(',')

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
				res = await this.$api.info(`luquxinxi`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='xuehao'){
					this.ruleForm.xuehao = obj[o];
					this.ro.xuehao = true;
					continue;
					}
					if(o=='touxiang'){
					this.ruleForm.touxiang = obj[o];
					this.ro.touxiang = true;
					continue;
					}
					if(o=='xueshengxingming'){
					this.ruleForm.xueshengxingming = obj[o];
					this.ro.xueshengxingming = true;
					continue;
					}
					if(o=='xingbie'){
					this.ruleForm.xingbie = obj[o];
					this.ro.xingbie = true;
					continue;
					}
					if(o=='banji'){
					this.ruleForm.banji = obj[o];
					this.ro.banji = true;
					continue;
					}
					if(o=='zhuanye'){
					this.ruleForm.zhuanye = obj[o];
					this.ro.zhuanye = true;
					continue;
					}
					if(o=='luqushijian'){
					this.ruleForm.luqushijian = obj[o];
					this.ro.luqushijian = true;
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
			luqushijianConfirm(val) {
				console.log(val)
				this.ruleForm.luqushijian = val.result;
				this.$forceUpdate();
			},

			// 下拉变化
			xingbieChange(e) {
				this.xingbieIndex = e.target.value
				this.ruleForm.xingbie = this.xingbieOptions[this.xingbieIndex]
			},

			touxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {















//跨表计算判断
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
					let res = await this.$api.list(`luquxinxi`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`luquxinxi`, this.ruleForm);
						}else{
							await this.$api.add(`luquxinxi`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`luquxinxi`, this.ruleForm);
					}else{
						await this.$api.add(`luquxinxi`, this.ruleForm);
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
