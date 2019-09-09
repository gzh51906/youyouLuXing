
<template>
    <div class="addgoods">
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
  <el-breadcrumb-item>添加商品</el-breadcrumb-item>
</el-breadcrumb>
        <h1>添加商品:</h1>
<div style="margin-bottom: 20px">
    <label for="" class="classification">分类</label>
  <el-select v-model="value" placeholder="请选择" style="margin-left:5px">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value" >
    </el-option>
  </el-select>

</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="商品名称" prop="title" style="width:800px;">
    <el-input v-model="ruleForm.title"></el-input>
  </el-form-item>
  <el-form-item label="销量" prop="sales" style="width:400px">
    <el-input v-model="ruleForm.sales"></el-input>
  </el-form-item>
 <el-form-item label="原价" prop="oldprice" style="width:400px">
    <el-input v-model="ruleForm.oldprice"></el-input>
  </el-form-item>
   <el-form-item label="现价" prop="price" style="width:400px">
    <el-input v-model="ruleForm.price"></el-input>
  </el-form-item>
  <el-form-item label="下架" prop="delivery">
    <el-switch v-model="ruleForm.delivery" ></el-switch>
  </el-form-item>
   <el-form-item label="商品标签" prop="attr" style="width:200px;  display: inline-block">
    <el-input v-model="ruleForm.attr"></el-input>
  </el-form-item>
   <el-form-item label="商品标签1" prop="attr1" style="width:200px;  display: inline-block ">
    <el-input v-model="ruleForm.attr1"></el-input>
  </el-form-item>
<el-form-item label="商品标签2" prop="attr2" style="width:200px;  display: inline-block ">
    <el-input v-model="ruleForm.attr2"></el-input>
  </el-form-item>
  <div class="demo-image">
  <el-upload
  action="http://localhost:3003/upload/goods"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove" 
  :on-success="successful"
  name="goods"
  >
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
</div>


  <el-form-item style="margin-top:30px">
    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
    <el-button @click="cancel">取消</el-button>
  </el-form-item>
  
</el-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "xiougoods",
          label: "西欧"
        },
        {
          value: "nanougoods",
          label: "南欧"
        },
        {
          value: "dongougoods",
          label: "东欧"
        }
      ],
      value: "西欧",
      ruleForm: {
        title: "",
        sales: "",
        oldprice: "",
        price: "",
        delivery: false,
        attr: "",
        attr1: "",
        attr2: "",
        src: []
      },
      rules: {
        title: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          {
            min: 3,
            max: 500,
            message: "长度在 3 到 500 个字符",
            trigger: "blur"
          }
        ],
        sales: [{ required: true, message: "请输入商品销量", trigger: "blur" }],
        oldprice: [
          { required: true, message: "请输入商品原价", trigger: "blur" }
        ],
        price: [{ required: true, message: "请输入商品现价", trigger: "blur" }]
      },
      dialogImageUrl: "",
      dialogVisible: false,
      classname: ""
    };
  },
  methods: {
    cancel() {
      this.$router.push("/goodslist");
    },

    submitForm(formName) {
      let classname = this.value;
      if (this.value == "西欧") {
        classname = "xiougoods";
      }

      //  console.log( this.ruleForm);

      this.$refs[formName].validate(async valid => {
        if (valid) {
          console.log(this.ruleForm.delivery);
          
          let { data } = await this.$axios.post(
            `http://localhost:3003/${classname}/add`,
            {
              attr: this.ruleForm.attr,
              attr1: this.ruleForm.attr1,
              attr2: this.ruleForm.attr2,
              oldprice: this.ruleForm.oldprice,
              price: this.ruleForm.price,
              sales: this.ruleForm.sales,
              src: this.ruleForm.src,
              title: this.ruleForm.title,
              delivery: this.ruleForm.delivery
            }
          );
          if (data.code === 1) {
            this.$message({
              message: "添加成功!",
              type: "success"
            });
            setTimeout(() => {
              this.$router.push("/goodslist");
            }, 500);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    handleRemove(file) {
      let { response } = file;
      this.ruleForm.src.forEach((ele, i) => {
        if (ele === response[0].filename) {
          this.ruleForm.src.splice(i, 1);
        }
      });
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    successful(response) {
      this.ruleForm.src.push(response[0].filename);
    }
  }
};
</script>
<style scope>
.classification {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
  margin-left: 58px;
}
</style>
