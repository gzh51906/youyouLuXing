<template>
  <div class="header-class">
    <van-sticky :z-index="2">
      <p class="header">
        <van-icon name="arrow-left" @click="handleIconBack()" />
        <span>大巴游</span>
        <van-icon name="bars" />
      </p>
    </van-sticky>
  </div>
</template>

<script>
export default {
  methods: {
    handleIconBack() {
      // 返回上一层菜单
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
/* .header-class{
  position: fixed;
  top:0;
  z-index: 2;
} */
.header {
  width: 100%;
  height: 47px;
  margin: 0;
}
.header span {
  height: 47px;
  line-height: 47px;
  font-size: 22px;
  margin-left: 90px;
  margin-right: 110px;
}
.van-icon-arrow-left {
  font-size: 16px;
  margin-left: 20px;
  margin-right: 30px;
}
.van-icon-bars {
  font-size: 22px;
}
</style>