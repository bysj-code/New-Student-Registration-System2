<template>
  <div class="addEdit-block">
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
	  :style="{backgroundColor:addEditForm.addEditBoxColor}"
    >
      <el-row >
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'" label="订单编号" prop="dingdanbianhao">
            <el-input v-model="ruleForm.dingdanbianhao" 
                placeholder="订单编号" readonly></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.dingdanbianhao" label="订单编号" prop="dingdanbianhao">
              <el-input v-model="ruleForm.dingdanbianhao" 
                placeholder="订单编号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="名称" prop="mingcheng">
          <el-input v-model="ruleForm.mingcheng" 
              placeholder="名称" clearable  :readonly="ro.mingcheng"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="名称" prop="mingcheng">
              <el-input v-model="ruleForm.mingcheng" 
                placeholder="名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="学号" prop="xuehao">
          <el-input v-model="ruleForm.xuehao" 
              placeholder="学号" clearable  :readonly="ro.xuehao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="学号" prop="xuehao">
              <el-input v-model="ruleForm.xuehao" 
                placeholder="学号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="学生姓名" prop="xueshengxingming">
          <el-input v-model="ruleForm.xueshengxingming" 
              placeholder="学生姓名" clearable  :readonly="ro.xueshengxingming"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="学生姓名" prop="xueshengxingming">
              <el-input v-model="ruleForm.xueshengxingming" 
                placeholder="学生姓名" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="班级" prop="banji">
          <el-input v-model="ruleForm.banji" 
              placeholder="班级" clearable  :readonly="ro.banji"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="班级" prop="banji">
              <el-input v-model="ruleForm.banji" 
                placeholder="班级" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="学费" prop="xuefei">
          <el-input v-model="ruleForm.xuefei" 
              placeholder="学费" clearable  :readonly="ro.xuefei"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="学费" prop="xuefei">
              <el-input v-model="ruleForm.xuefei" 
                placeholder="学费" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="住宿费" prop="zhusufei">
          <el-input v-model="ruleForm.zhusufei" 
              placeholder="住宿费" clearable  :readonly="ro.zhusufei"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="住宿费" prop="zhusufei">
              <el-input v-model="ruleForm.zhusufei" 
                placeholder="住宿费" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="水费" prop="shuifei">
          <el-input v-model="ruleForm.shuifei" 
              placeholder="水费" clearable  :readonly="ro.shuifei"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="水费" prop="shuifei">
              <el-input v-model="ruleForm.shuifei" 
                placeholder="水费" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="电费" prop="dianfei">
          <el-input v-model="ruleForm.dianfei" 
              placeholder="电费" clearable  :readonly="ro.dianfei"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="电费" prop="dianfei">
              <el-input v-model="ruleForm.dianfei" 
                placeholder="电费" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'" label="总费用" prop="zongfeiyong">
            <el-input v-model="zongfeiyong"
                placeholder="总费用" readonly></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.zongfeiyong" label="总费用" prop="zongfeiyong">
              <el-input v-model="ruleForm.zongfeiyong" 
                placeholder="总费用" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="缴费时间" prop="jiaofeishijian">
            <el-date-picker
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="ruleForm.jiaofeishijian" 
                type="datetime"
                :readonly="ro.jiaofeishijian"
                placeholder="缴费时间">
            </el-date-picker>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.jiaofeishijian" label="缴费时间" prop="jiaofeishijian">
              <el-input v-model="ruleForm.jiaofeishijian" 
                placeholder="缴费时间" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="备注" prop="beizhu">
          <el-input v-model="ruleForm.beizhu" 
              placeholder="备注" clearable  :readonly="ro.beizhu"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="备注" prop="beizhu">
              <el-input v-model="ruleForm.beizhu" 
                placeholder="备注" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      </el-row>
      <el-form-item class="btn">
        <el-button  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    let self = this
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
	  addEditForm: {"btnSaveFontColor":"rgba(0, 0, 0, 1)","selectFontSize":"14px","btnCancelBorderColor":"rgba(193, 193, 193, 1)","inputBorderRadius":"4px","inputFontSize":"14px","textareaBgColor":"#fff","btnSaveFontSize":"14px","textareaBorderRadius":"4px","uploadBgColor":"#fff","textareaBorderStyle":"solid","btnCancelWidth":"88px","textareaHeight":"120px","dateBgColor":"#fff","btnSaveBorderRadius":"40px 40px 0 40px","uploadLableFontSize":"14px","textareaBorderWidth":"1px","inputLableColor":"#606266","addEditBoxColor":"rgba(255, 255, 255, 0)","dateIconFontSize":"14px","btnSaveBgColor":"rgba(227, 201, 176, 1)","uploadIconFontColor":"#8c939d","textareaBorderColor":"#DCDFE6","btnCancelBgColor":"rgba(243, 243, 243, 1)","selectLableColor":"#606266","btnSaveBorderStyle":"solid","dateBorderWidth":"1px","dateLableFontSize":"14px","dateBorderRadius":"4px","btnCancelBorderStyle":"solid","selectLableFontSize":"14px","selectBorderStyle":"solid","selectIconFontColor":"#C0C4CC","btnCancelHeight":"44px","inputHeight":"40px","btnCancelFontColor":"#606266","dateBorderColor":"#DCDFE6","dateIconFontColor":"#C0C4CC","uploadBorderStyle":"solid","dateBorderStyle":"solid","dateLableColor":"#606266","dateFontSize":"14px","inputBorderWidth":"1px","uploadIconFontSize":"28px","selectHeight":"40px","inputFontColor":"#606266","uploadHeight":"148px","textareaLableColor":"#606266","textareaLableFontSize":"14px","btnCancelFontSize":"14px","inputBorderStyle":"solid","btnCancelBorderRadius":"40px 40px 0 40px","inputBgColor":"#fff","inputLableFontSize":"14px","uploadLableColor":"#606266","uploadBorderRadius":"4px","btnSaveHeight":"44px","selectBgColor":"#fff","btnSaveWidth":"88px","selectIconFontSize":"14px","dateHeight":"40px","selectBorderColor":"#DCDFE6","inputBorderColor":"#DCDFE6","uploadBorderColor":"#DCDFE6","textareaFontColor":"#606266","selectBorderWidth":"1px","dateFontColor":"#606266","btnCancelBorderWidth":"4px","uploadBorderWidth":"1px","textareaFontSize":"14px","selectBorderRadius":"4px","selectFontColor":"#606266","btnSaveBorderColor":"rgba(194, 161, 49, 1)","btnSaveBorderWidth":"4px"},
      id: '',
      type: '',
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
        userid: '',
      },
      rules: {
          dingdanbianhao: [
          ],
          mingcheng: [
                { required: true, message: '名称不能为空', trigger: 'blur' },
          ],
          xuehao: [
          ],
          xueshengxingming: [
          ],
          banji: [
          ],
          xuefei: [
                { required: true, message: '学费不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          zhusufei: [
                { required: true, message: '住宿费不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          shuifei: [
                { required: true, message: '水费不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          dianfei: [
                { required: true, message: '电费不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          zongfeiyong: [
                { required: true, message: '总费用不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          jiaofeishijian: [
          ],
          beizhu: [
          ],
          ispay: [
          ],
          userid: [
          ],
      }
    };
  },
  props: ["parent"],
  computed: {
    zongfeiyong: {
      get: function () {
        return 0+parseFloat(this.ruleForm.xuefei==""?0:this.ruleForm.xuefei)+parseFloat(this.ruleForm.zhusufei==""?0:this.ruleForm.zhusufei)+parseFloat(this.ruleForm.shuifei==""?0:this.ruleForm.shuifei)+parseFloat(this.ruleForm.dianfei==""?0:this.ruleForm.dianfei) || 0
      }
    },
  },
  created() {
	this.ruleForm.jiaofeishijian = this.getCurDateTime()

	this.addEditStyleChange()
	this.addEditUploadStyleChange()
  },
  methods: {
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='logistics'){
        this.logistics=false;
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
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
      // 获取用户信息
      this.$http({
        url: `${this.$storage.get('sessionTable')}/session`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 多级联动参数
    info(id) {
      this.$http({
        url: `zaixianjiaofei/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
        this.ruleForm.zongfeiyong = this.zongfeiyong





























var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(!statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "zaixianjiaofei/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `zaixianjiaofei/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.zaixianjiaofeiCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `zaixianjiaofei/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.zaixianjiaofeiCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.zaixianjiaofeiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
	addEditStyleChange() {
	  this.$nextTick(()=>{
	    // input
	    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputFontColor
	      el.style.fontSize = this.addEditForm.inputFontSize
	      el.style.borderWidth = this.addEditForm.inputBorderWidth
	      el.style.borderStyle = this.addEditForm.inputBorderStyle
	      el.style.borderColor = this.addEditForm.inputBorderColor
	      el.style.borderRadius = this.addEditForm.inputBorderRadius
	      el.style.backgroundColor = this.addEditForm.inputBgColor
	    })
	    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputLableColor
	      el.style.fontSize = this.addEditForm.inputLableFontSize
	    })
	    // select
	    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectFontColor
	      el.style.fontSize = this.addEditForm.selectFontSize
	      el.style.borderWidth = this.addEditForm.selectBorderWidth
	      el.style.borderStyle = this.addEditForm.selectBorderStyle
	      el.style.borderColor = this.addEditForm.selectBorderColor
	      el.style.borderRadius = this.addEditForm.selectBorderRadius
	      el.style.backgroundColor = this.addEditForm.selectBgColor
	    })
	    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectLableColor
	      el.style.fontSize = this.addEditForm.selectLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
	      el.style.color = this.addEditForm.selectIconFontColor
	      el.style.fontSize = this.addEditForm.selectIconFontSize
	    })
	    // date
	    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateFontColor
	      el.style.fontSize = this.addEditForm.dateFontSize
	      el.style.borderWidth = this.addEditForm.dateBorderWidth
	      el.style.borderStyle = this.addEditForm.dateBorderStyle
	      el.style.borderColor = this.addEditForm.dateBorderColor
	      el.style.borderRadius = this.addEditForm.dateBorderRadius
	      el.style.backgroundColor = this.addEditForm.dateBgColor
	    })
	    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateLableColor
	      el.style.fontSize = this.addEditForm.dateLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
	      el.style.color = this.addEditForm.dateIconFontColor
	      el.style.fontSize = this.addEditForm.dateIconFontSize
	      el.style.lineHeight = this.addEditForm.dateHeight
	    })
	    // upload
	    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
	    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
	      el.style.width = this.addEditForm.uploadHeight
	      el.style.height = this.addEditForm.uploadHeight
	      el.style.borderWidth = this.addEditForm.uploadBorderWidth
	      el.style.borderStyle = this.addEditForm.uploadBorderStyle
	      el.style.borderColor = this.addEditForm.uploadBorderColor
	      el.style.borderRadius = this.addEditForm.uploadBorderRadius
	      el.style.backgroundColor = this.addEditForm.uploadBgColor
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.uploadHeight
	      el.style.color = this.addEditForm.uploadLableColor
	      el.style.fontSize = this.addEditForm.uploadLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
	      el.style.color = this.addEditForm.uploadIconFontColor
	      el.style.fontSize = this.addEditForm.uploadIconFontSize
	      el.style.lineHeight = iconLineHeight
	      el.style.display = 'block'
	    })
	    // 多文本输入框
	    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
	      el.style.height = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaFontColor
	      el.style.fontSize = this.addEditForm.textareaFontSize
	      el.style.borderWidth = this.addEditForm.textareaBorderWidth
	      el.style.borderStyle = this.addEditForm.textareaBorderStyle
	      el.style.borderColor = this.addEditForm.textareaBorderColor
	      el.style.borderRadius = this.addEditForm.textareaBorderRadius
	      el.style.backgroundColor = this.addEditForm.textareaBgColor
	    })
	    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
	      // el.style.lineHeight = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaLableColor
	      el.style.fontSize = this.addEditForm.textareaLableFontSize
	    })
	    // 保存
	    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
	      el.style.width = this.addEditForm.btnSaveWidth
	      el.style.height = this.addEditForm.btnSaveHeight
	      el.style.color = this.addEditForm.btnSaveFontColor
	      el.style.fontSize = this.addEditForm.btnSaveFontSize
	      el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
	      el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
	      el.style.borderColor = this.addEditForm.btnSaveBorderColor
	      el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnSaveBgColor
	    })
	    // 返回
	    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
	      el.style.width = this.addEditForm.btnCancelWidth
	      el.style.height = this.addEditForm.btnCancelHeight
	      el.style.color = this.addEditForm.btnCancelFontColor
	      el.style.fontSize = this.addEditForm.btnCancelFontSize
	      el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
	      el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
	      el.style.borderColor = this.addEditForm.btnCancelBorderColor
	      el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnCancelBgColor
	    })
	  })
	},
	addEditUploadStyleChange() {
		this.$nextTick(()=>{
		  document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
			el.style.width = this.addEditForm.uploadHeight
			el.style.height = this.addEditForm.uploadHeight
			el.style.borderWidth = this.addEditForm.uploadBorderWidth
			el.style.borderStyle = this.addEditForm.uploadBorderStyle
			el.style.borderColor = this.addEditForm.uploadBorderColor
			el.style.borderRadius = this.addEditForm.uploadBorderRadius
			el.style.backgroundColor = this.addEditForm.uploadBgColor
		  })
	  })
	},
  }
};
</script>
<style lang="scss">
.editor{
  height: 500px;
  
  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
	background-color: transparent;
}
.btn .el-button {
  padding: 0;
}
</style>
