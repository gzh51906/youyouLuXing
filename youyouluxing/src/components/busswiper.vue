<template>
  <div class="swiperBox">
    <p class="p1">
      <span>大巴旅游推荐</span>
    </p>
    <van-swipe indicator-color="red" :autoplay="3000" :height="136">
      <van-swipe-item v-for="item of swiper" :key="item.gid">
        <div class="imgBox">
          <img :src="item.imgurl" alt />
        </div>
        <div class="details">
          <p class="title">{{item.title}}</p>
          <p class="button">
            <van-button plain type="warning" size="mini" round>{{item.class}}</van-button>
            <van-button plain type="warning" size="mini" round>{{item.data}}</van-button>
          </p>
          <p class="price">
            <b :style="`display:${item.price}=='电询'?'none':'block'`">€</b>
            {{item.price}}
          </p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "busswiper",
  data() {
    return { listSwiper: [] };
  },
  created() {},
  computed: {
    swiper() {
      return this.$store.state.bus.listSwiper;
    }
  }
};
</script>
<style scoped>
.swiperBox {
  margin-top: 10px;
  width: 375px;
  overflow: hidden;
}
.van-swipe {
  padding: 15px;
  box-sizing: border-box;
}
.p1 {
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 0;
}
.p1 span {
  font-size: 16px;
  padding-left: 15px;
}
.imgBox {
  float: left;
  width: 156px;
  height: 106px;
}
.button,
.title {
  margin-top: 0;
}
.details {
  float: left;
  margin-left: 10px;
  width: 178px;
}
img {
  width: 156px;
}
.title {
  width: 178px;
  height: 40px;
  overflow: hidden;
  font-size: 14px;
  margin-bottom: 10px;
}
.button {
  margin-bottom: 10px;
}
.price {
  margin: 0;
  font-size: 14px;
}
</style>
