<template>
    <div class="setgoodslist">
       
        <h1>编辑商品信息 :</h1>
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
    <el-switch v-model="ruleForm.delivery" @change="getswitch"></el-switch>
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
  <div class="block" v-for="item in ruleForm.src" :key="item" style="display: inline-block; padding:5px">
    <el-image
      style="width: 146px; height: 146px"
      :src="item"
      fit="fill"  :preview-src-list="ruleForm.src"></el-image>
     
  </div>

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
      ruleForm: {
        title: "",
        sales: "",
        oldprice: "",
        price: "",
        delivery:false,
        attr: "",
        attr1: "",
        attr2: "",
        src: [],
        storagesrc: []
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
      img: [],
      _id: "",
      classname: ""
    };
  },
  methods: {
    // async upload() {
    //   let mydata = new FormData();

    //   for (let i = 0; i < this.$refs.file.files.length; i++) {
    //     mydata.append("goods", this.$refs.file.files[i]);
    //   }
    //   let { data } = await this.$axios.post(
    //     "http://localhost:3003/upload/goods",
    //     mydata
    //   );
    //   console.log(data);
    // },
    cancel() {
      this.$router.push("/goodslist");
    },
    getswitch(val) {
    this.ruleForm.delivery = val;
  
    },
    submitForm(formName) {
      //  console.log(this._id);
      console.log(this.ruleForm);
      
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let _src = this.img.length != 0 ? this.img : this.storagesrc;
          let _classname = this.classname;
          let _id = this._id;
           console.log(this.ruleForm.delivery);
//  console.log(this.ruleForm.delivery);
          let { data } = await this.$axios.patch(
            `http://localhost:3003/${_classname}/${_id}`,
            {
              attr: this.ruleForm.attr,
              attr1: this.ruleForm.attr1,
              attr2: this.ruleForm.attr2,
              oldprice: this.ruleForm.oldprice,
              price: this.ruleForm.price,
              sales: this.ruleForm.sales,
              src: _src,
              title: this.ruleForm.title,
            delivery:this.ruleForm.delivery
            }
          );
          if (data.code === 1) {
            this.$message({
              message: "编辑成功!",
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
      this.img.forEach((ele, i) => {
        if (ele === response[0].filename) {
          this.img.splice(i, 1);
        }
      });
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    successful(response) {
      this.img.push(response[0].filename);
    }
  },
  async created() {
    let { classname, id } = this.$route.query;
    //   console.log(classname,id);
    let { data: { data } } = await this.$axios.get(
      `http://localhost:3003/${classname}/${id}`
    );
    for (const key in data[0]) {
      this.ruleForm[key] = data[0][key];
    }
    let arr = [];
    this.ruleForm.src.forEach(element => {
      arr.push(`/img/${element}`);
    });
    this.ruleForm.src = arr;
    this.classname = classname;
    this._id = id;
    this.storagesrc = data[0].src;
   
  }
};
</script>
<style>
</style>
