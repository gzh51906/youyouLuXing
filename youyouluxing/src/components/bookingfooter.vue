<template>
  <div class="pricebar">
    <span class="tprice">总额：</span>
    <span class="price">€{{getTotalPrice}}</span>
    <span class="fullpay">全款支付</span>
    <van-button type="primary">下一步</van-button>
  </div>
</template>

<script>
export default {
  name: "BookingFooter",
  data() {
    return { data: {}, totalPrice1: 0 };
  },
  props: ["totalPrice", "num", "sub", "number"],
  computed: {
    getTotalPrice() {
      this.totalPrice1 = this.totalPrice * this.num + this.sub * this.number;
      return this.totalPrice1;
    }
  },
  created() {
    // console.log(this.price);
  }
};
</script>

<style scoped>
.pricebar {
  width: 375px;
  height: 45px;
  position: fixed;
  top: 767px;
  background: #fff;
  /* margin-top: 50px; */
}
.tprice {
  padding-left: 15px;
  height: 45px;
  line-height: 45px;
  font-size: 14px;
}
.price {
  color: orange;
}
.fullpay {
  font-size: 12px;
  color: #999;
  margin-left: 80px;
}
.van-button {
  float: right;
  height: 44px;
  width: 135px;
}
</style>