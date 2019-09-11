<template>
    <div class="goods">
        <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>商品管理</el-breadcrumb-item>
  <el-breadcrumb-item>商品列表</el-breadcrumb-item>
</el-breadcrumb>
        <h1>goods列表 :</h1>
  <el-button type="primary" plain icon="el-icon-edit">添 加</el-button>
   <el-button type="danger" plain icon="el-icon-delete">全部删除</el-button>

  <el-select v-model="value" placeholder="请选择" @change="getvalue">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value" >
    </el-option>
  </el-select>

      <el-table
    :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
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
      label="标题"
      prop="title">
    </el-table-column>
    <el-table-column 
      label="价格"
      prop="price">
    </el-table-column>
    <el-table-column 
      label="销量"
      prop="sales">
    </el-table-column>
    <el-table-column
      align="right">

        <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
            placeholder="输入关键字搜索" />
              
      </template>
<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value" >
    </el-option>
  </el-select>
</template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
      search: "",
      stripe: true,
      tableData: [],
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
      value: "西欧"
    };
  },
  methods: {
    handleEdit(index, row) {
     // console.log(row);
      let classname = this.value;
      if (this.value == "西欧") {
        classname = "xiougoods";
      }
      this.$router.push({
        path: "/setgoodslist",
        query: { classname: classname, id: row._id }
      });
      // console.log(this.$route);
    },
    async handleDelete(index, row) {
      // console.log(index, row);
      //   console.log(row._id);
      let classname = this.value;
      if (this.value == "西欧") {
        classname = "xiougoods";
      }

      let { data } = await this.$axios.delete(
        `../${classname}/${row._id}`
      );
      if (data.code === 1) {
        this.render(classname);
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

    async render(list) {
      let { data: { data } } = await this.$axios.get(
        `../${list}`
      );
      // console.log(data);
      this.tableData = data;
      this.tableData.forEach(value => {
        value.date = this.getCurrentDate();
      });
    },
    getvalue(val) {
      // console.log(val);
      this.render(val);
    }
  },
  created() {
    this.render("xiougoods");
   
    
  }
};
</script>

<style scope>
.el-select {
  margin-left: 20%;
}
.goods .cell {
  height: 42px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
