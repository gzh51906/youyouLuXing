<template>
  <div class="header">
    <van-row>
      <van-col span="7" offset="1">
        <img src="../assets/img/logo.png" alt class="logo" />
      </van-col>
      <van-col span="6" class="type" offset="2">大巴游</van-col>
      <van-col span="3" offset="5">
        <van-icon name="bars" size="20px" class="menu" />
      </van-col>
    </van-row>
    <div class="boxlist">
      <van-row>
        <van-icon name="wap-home" size="20px" />首页
      </van-row>
      <van-row>
        <van-icon name="search" size="20px" />搜索
      </van-row>
      <van-row>
        <van-icon name="user-o" size="20px" />个人中心
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.header {
  position: relative;
}
.van-row {
  background: #fff;
  width: 100%;
  margin-top: 10px;
  height: 48px;
  font-size: 20px;
}
.logo {
  width: 127px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.menu {
  margin-top: 8px;
}
.boxlist {
  width: 135px;
  height: 138px;
  border-radius: 10px;
  float: right;
 display: none;
  /* position: absolute;
  top: 0; */
}
.boxlist .van-row {
  /* position: relative; */
  width: 135px;
  height: 46px;
  background: #263846;
  margin-top: 0;
  color: #fff;
  line-height: 46px;
  text-align: center;
  font-size: 16px;
}
i {
  margin-right: 5px;
  /* margin-top: 10px; */
}
</style>
