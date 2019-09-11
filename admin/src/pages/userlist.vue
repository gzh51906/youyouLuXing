<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  <el-breadcrumb-item>用户列表</el-breadcrumb-item>
</el-breadcrumb>
        <h1>用户列表 :</h1>
         <el-button type="primary" plain icon="el-icon-edit">添 加</el-button>
            <el-button type="danger" plain icon="el-icon-delete">全部删除</el-button>
      <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%" :header-cell-style="{color:'#67C23A'}" :stripe="stripe">
      <el-table-column
      type="selection"
      width="70">
    </el-table-column>

      <el-table-column
      type="index"
      width="70">
    </el-table-column>
    <el-table-column
      label="修改时间"
      prop="date">
    </el-table-column>
    <el-table-column 
      label="用户名"
      prop="username">
    </el-table-column>
    <el-table-column 
      label="职位"
      prop="jobs">
    </el-table-column>
    <el-table-column 
      label="性别"
      prop="gender">
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
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      console.log(2);
      
      let { data } = await this.$axios.delete(
        `../adminuser/${row._id}`
      );
      if (data.code === 1) {
        this.render();
        this.$message({
          message: "删除成功!",
          type: "warning"
        });
      }
    },
    getCurrentDate() {
      var timeStr = "-";
      var curDate = new Date();
      var curYear = curDate.getFullYear(); //获取完整的年份(4位,1970-????)
      var curMonth = curDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
      var curDay = curDate.getDate(); //获取当前日(1-31)
      var curWeekDay = curDate.getDay(); //获取当前星期X(0-6,0代表星期天)
      var curHour = curDate.getHours(); //获取当前小时数(0-23)
      var curMinute = curDate.getMinutes(); // 获取当前分钟数(0-59)
      var curSec = curDate.getSeconds(); //获取当前秒数(0-59)
      var Current = curYear + timeStr + curMonth + timeStr + curDay; //console.log(Current); // this.datetime=Current;
      return Current;
    },

    async render() {
      let { data: { data } } = await this.$axios.get(
        "../adminuser"
      );
      // console.log(data);
      this.tableData = data;
      this.tableData.forEach(value => {
        value.date = this.getCurrentDate();
      });
    }
  },
  created() {
    this.render();
  }
};
</script>
<style scope>
</style>






