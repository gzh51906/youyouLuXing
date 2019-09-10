<template>
  <div class="goodsfooter">
    <van-goods-action>
      <van-goods-action-icon
        icon="service-o"
        text="电话客服"
        class="service"
        @click="handleServiceClick"
      />
      <van-goods-action-icon icon="like-o" text="收藏" class="save" @click.stop="handleSaveClick" />
      <van-goods-action-button
        color="#58BC58"
        type="warning"
        text="立即预定"
        class="booking"
        @click="handleBookingClick"
      />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "goodsfooter",
  data() {
    return {
      data: {}
    };
  },
  methods: {
    handleServiceClick() {
      console.log("service");
      this.$router.push({ name: "service" });
    },
    handleSaveClick() {
      // console.log("save");

      // 向上触发父组件(goods.vue)的aaa自定义事件
      // this.$emit("aaa");

      //编程时导航
      this.$router.push({ name: "save" });
    },
    handleBookingClick() {
      // console.log("booking");
      this.$router.push({ name: "booking" });
    }
  },
  mounted() {
    this.$bus.$on("getData", data => {
      this.data = data;
      console.log(this.data);
    });

  }
};
</script>

<style scoped>
.goodsfooter {
  position: fixed;
  width: 375px;
  height: 55px;
  top: 757px;
  margin-bottom: 10px;
  z-index: 2;
}
.van-goods-action {
  /* background: pink; */
  width: 375px;
  height: 55px;
}
.van-goods-action-icon {
  width: 70px;
  height: 55px !important;
  margin: 0;
}
.van-goods-action-button {
  border-radius: 0 !important;
}
</style>