<template>

    <div class="login">
                   <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>用户登录</el-breadcrumb-item>
</el-breadcrumb>
   <h1>用户登录 :</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" plain @click="gotoReg">登录</el-button>
         <el-checkbox v-model="checked" style="margin:0px 10px">记住我</el-checkbox>
        <el-button type="text" icon="el-icon-question">忘记密码</el-button>
      </el-form-item>
    </el-form>
    </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.loginForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      checked: true,
      ruleForm: {
        username: "",
        pass: ""
      },
      rules: {
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }]
      }
    };
  },
  methods: {
    gotoReg() {
      this.$refs["loginForm"].validate(async valid => {
        if (valid) {
          let { data } = await this.$axios.post(
            "http://localhost:3003/adminuser/login",
            {
              username: this.ruleForm.username,
              password: this.ruleForm.pass
            }
          );
          if (data.code === 1) {
            // 保存token到本地
            // console.log(data);
            console.log(data.data.username);

            this.$store.commit("login", data.data.authorization);
            this.$store.commit("getusername", data.data.username);
            this.$router.push("/sortlist");
          } else {
            this.$message.error("用户或密码错了哦!");
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

