<template>
  <div class="pricebar">
    <span class="tprice">总额：</span>
    <span class="price">€{{getTotalPrice}}</span>
    <span class="fullpay">全款支付</span>
    <van-button type="primary" @click.native="next">下一步</van-button>
  </div>
</template>

<script>
export default {
  name: "BookingFooter",
  data() {
    return {
      data: {},
      totalPrice1: 89,
      time: "",
      title: "",
      type: "",
      src: "",
      price: "",
      sales: "",

      dataDB: {
        status: "1",
        price: "",
        oldprice: "",
        src: "",
        pay: "",
        time: "",
        title: "",
        type: "",
        _id: ""
      }
    };
  },
  props: ["totalPrice", "num", "sub", "number", "typeT"],
  computed: {
    getTotalPrice() {
      this.totalPrice1 = this.totalPrice * this.num + this.sub * this.number;
      return this.totalPrice1;
    }
  },
  created() {
    console.log(this.totalPrice);

    this.data = this.$store.state.bus.dataItem;
    console.log(this.data);
    let time = new Date().getTime();
    this.time = time;
  },

  methods: {
    async next() {
      let data = await this.$axios.post("../mycart/add", {
        num: this.num,
        _id: this.data._id,
        oldprice: this.data.oldprice,
        price: this.data.price,
        sales: this.data.sales,
        pay: this.totalPrice1,
        src: this.data.src[0],
        time: this.time,
        title: this.data.title,
        status: "1",
        type: this.typeT
      });
      console.log(data);

      this.$router.push(`/successtoful/${this.data._id}`);
    }
  }
};
</script>

<style scoped>
.pricebar {
  width: 375px;
  height: 45px;
  position: fixed;
  /* top: 767px; */
  bottom: 0px;
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