<template>
    <div class="setsortlist">
        
        <h1>编辑列表分类 :</h1>
        <el-form ref="form" :model="form" label-width="80px">
<el-form-item label="原分类">
    <el-input v-model="form.name" readonly :placeholder="form.name" ></el-input>
  </el-form-item>  
      <el-form-item label="更改为">
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
        readonly: true,
        name: "",
        _id: "",
        newname: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      let { data } = await this.$axios.patch(
        `http://localhost:3003/sortlist/${this.form._id}`,
        {
          name: this.form.newname
        }
      );
      // console.log(data);
      if (data.code === 1) {
        this.$message({
          message: "编辑成功!",
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
  },
  created() {
    // console.log(this.$route.query);
    let { name, id } = this.$route.query;
    this.form.name = name;
    this.form._id = id;
  }
};
</script>