<template>
  <div class="divClass">
    <h3>
      <span>西欧</span>
    </h3>
    <van-row>
      <van-col span="12" v-for="item of getMain" :key="item.gid" class="item">
        <img :src="item.imgurl" alt class="we" />
        <p class="title1">{{item.title}}</p>
        <p class="price1">€ {{item.price}} 起</p>
      </van-col>
    </van-row>
    <van-button size="small" type="warning" plain>查看更多</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return { data: {} };
  },
  computed: {
    getMain() {
      return this.$store.state.bus.westEurope;
    }
  }
};
</script>

<style scoped>
.divClass {
  margin-top: 10px;
}
h3 {
  width: 100%;
  font-weight: normal;
  height: 45px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  margin: 0;
  line-height: 45px;
}
h3 span {
  font-size: 18px;
  margin-left: 15px;
}
.van-row {
  width: 360px;
  padding: 7.5px;
  margin-left: 8px;
}
.we {
  width: 165px;
  height: 123px;
}
.title1 {
  width: 165px;
  height: 31px;
  font-size: 12px;
  overflow: hidden;
}
.price {
  font-size: 12px;
}
.van-button {
  margin-left: 147px;
}
</style>