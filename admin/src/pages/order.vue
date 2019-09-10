
<template>
    <div class="order">
         <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>订单管理</el-breadcrumb-item>
  <el-breadcrumb-item>待处理订单</el-breadcrumb-item>
</el-breadcrumb>
      <h1>待退款订单 :</h1>  
      <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%" :header-cell-style="{color:'#67C23A'}" :stripe="stripe">
     
      <el-table-column
      type="index"
      width="70">
    </el-table-column>
    <el-table-column
      label="下单时间"
      prop="time">
    </el-table-column>
    <el-table-column 
      label="订单"
      prop="title">
    </el-table-column>
      <el-table-column 
      label="数量"
      prop="num">
    </el-table-column>
     <el-table-column 
      label="单价"
      prop="price">
    </el-table-column>
      <el-table-column 
      label="退款总额"
      prop="pay">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
            placeholder="输入关键字搜索" />
              
      </template>
      <template slot-scope="scope">
        
        <el-button
          size="mini"
           type="danger"
          @click="handleDelete(scope.$index, scope.row)">确认退款</el-button>
       
      </template>
    </el-table-column>
  </el-table>

    </div>
</template>

<script>
export default {
  data() {
    return {
      stripe: true,
      tableData: [],
      search: ""
    };
  },
  methods: {
    async handleDelete(index, row) {
      this.$confirm("确认退款?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(async () => {
          let { data } = await this.$axios.patch(
            `http://localhost:3003/mycart/${row._id}`,
            {
              status: "5"
            }
          );
          if (data.code === 1) {
             this.render();
            this.$message({
              type: "success",
              message: "退款成功!"
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });

      // let { data } = await this.$axios.patch(
      //   `http://localhost:3003/mycart/${row._id}`,
      //   {
      //     status: "5"
      //   }
      // );
      // console.log(data);

      // if (data.code === 1) {
      //   this.render();
      //   this.$message({
      //     message: "退款成功!",
      //     type: "warning"
      //   });
      // }
    },

    async render() {
      let { data: { data } } = await this.$axios.post(
        "http://localhost:3003/mycart/status",
        {
          status: "4"
        }
      );
      this.tableData = data;
    }
  },
  created() {
    this.render();
  }
};
</script>
<style scope>
.order .cell {
  height: 42px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
