<template>
  <div>
    <van-sticky :z-index="2">
      <p class="header">
        <van-icon name="arrow-left" />
        <span>大巴游</span>
        <van-icon name="bars" />
      </p>
    </van-sticky>
    <div class="swiperBox">
      <van-swipe indicator-color="white" :height="200" :autoplay="3000">
        <van-swipe-item>
          <div class="img">1</div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="img">2</div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="img">3</div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="img">4</div>
        </van-swipe-item>
      </van-swipe>
      <p>
        <span class="span1">{{data.attr1}}</span>
        <span class="span2">{{data.sales}}</span>
      </p>
    </div>
    <div class="product">
      <div class="productBox">
        <div class="tit-bar">{{data.title}}</div>
        <div class="bst-bar">
          <span>{{data.price}}</span>
          <span>{{data.oldprice}}</span>
          <span>200人出游</span>
          <span>100%满意</span>
        </div>
      </div>
    </div>
    <p class="before"></p>
    <div class="date">
      
    </div>
  </div>
</template>

<script>
// import { log } from "util";
// import GoodsSwiper from '../components/goodsswiper.vue'
export default {
  name: "goods",
  data() {
    return { data: {} };
  },
  methods: {
    // getDetails(id) {}
  },

  async created() {
    let { _id } = this.$route.query;

    let {
      data: { data }
    } = await this.$axios.get(`http://localhost:3003/xiougoods/${_id}`);
    this.data = data[0];
    console.log(this.data);
  }
};
</script>

<style scoped>
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
.swiperBox {
  width: 100%;
  height: 200px;
  background: #ccc;
  position: relative;
}

.van-swipe-item .img {
  width: 295px;
  height: 200px;
  background: pink;
  margin-left: 40px;
}
.swiperBox p {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30px;
  z-index: 2;
}
.span1,
.span2 {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: antiquewhite;
}
.span1 {
  float: left;
  margin-left: 15px;
}
.span2 {
  float: right;
  margin-right: 15px;
}
.product {
  width: 355px;
  height: 122px;
}
.productBox {
  position: absolute;
  top: 240px;
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 355px;
  height: 122px;
  padding: 12px;
  z-index: 2;
}
.tit-bar {
  width: 351px;
  height: 96px;
  font-size: 16px;
}
.bst-bar span:nth-child(1) {
  color: orange;
  font-size: 18px;
}
.bst-bar span:nth-child(2) {
  color: #333;
  font-size: 14px;
  text-decoration: line-through;
  margin: 0 50px 0 10px;
}
.bst-bar span:nth-child(3) {
  color: #333;
  font-size: 14px;
  margin: 0 30px 0 10px;
}
.bst-bar span:nth-child(4) {
  color: #333;
  font-size: 14px;
  /* margin: 0 20px; */
}
.before{
  height: 10px;
  background: #ccc;
}
</style>