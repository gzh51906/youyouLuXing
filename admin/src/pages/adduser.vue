
<template>
    <div >
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  <el-breadcrumb-item>添加用户</el-breadcrumb-item>
</el-breadcrumb>
        <h1>添加用户 :</h1>

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username" style="width:400px;">
    <el-input v-model="ruleForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password" style="width:400px">
    <el-input v-model="ruleForm.password"></el-input>
  </el-form-item>
 <el-form-item label="职位" prop="jobs" style="width:400px">
    <el-input v-model="ruleForm.jobs"></el-input>
  </el-form-item>
   <el-form-item label="性别" prop="gender" style="width:400px">
    <el-input v-model="ruleForm.gender"></el-input>
  </el-form-item>
 

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
        username: "",
        password: "",
        jobs: "",
        gender: ""
       
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur"
          }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        jobs: [
          { required: true, message: "请输入个人信息", trigger: "blur" }
        ],
        gender: [{ required: true, message: "请输入个人信息", trigger: "blur" }]
      }
     
    };
  },
  methods: {
    cancel() {
      this.$router.push("/userlist");
    },

    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
         
          let { data } = await this.$axios.post(
            `http://localhost:3003/adminuser/add`,
            {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              jobs: this.ruleForm.jobs,
              gender: this.ruleForm.gender
             
            }
          );
          if (data.code === 1) {
            this.$message({
              message: "添加成功!",
              type: "success"
            });
            setTimeout(() => {
              this.$router.push("/userlist");
            }, 500);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scope>

</style>
