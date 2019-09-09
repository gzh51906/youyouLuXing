
<template>
    <div class="addsortlist">
      <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>分类管理</el-breadcrumb-item>
  <el-breadcrumb-item>添加分类</el-breadcrumb-item>
</el-breadcrumb>
        <h1>添加列表分类 :</h1>
        <el-form ref="form" :model="form" label-width="80px">
 
      <el-form-item label="新分类">
    <el-input v-model="form.newname"></el-input>
  </el-form-item>  
  <el-form-item>
    <el-button type="primary" @click="onSubmit">保存</el-button>
    <el-button @click="cancel">取消</el-button>
  </el-form-item>
</el-form>
    </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        newname: ""
      }
    };
  },
  methods: {
   async onSubmit() {
        let { data } = await this.$axios.post(
        `http://localhost:3003/sortlist/add`,
        {
          name: this.form.newname
        }
      );
      // console.log(data);
      if (data.code === 1) {
        this.$message({
          message: "添加成功!",
          type: "success"
        });
        setTimeout(() => {
          this.$router.push("/sortlist");
        }, 500);
      }
    },
    cancel() {
      this.$router.push("/sortlist");
    }
  }
};
</script>