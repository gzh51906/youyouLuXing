<template>
  <div class="more">
    <BusHeader></BusHeader>
    <!-- <test></test> -->
    <MoreMain :url="url"></MoreMain>
  </div>
</template>

<script>
import BusHeader from "../components/busheader.vue";
import MoreFooter from "../components/morefooter.vue";
import MoreMain from "../components/moremain.vue";
// import test from "./test";

export default {
  name: "more",
  data() {
    return { data: {}, url: "" };
  },
  components: {
    BusHeader,
    MoreFooter,
    MoreMain,
    // test
  },
  created() {
    let { url } = this.$route.query;
    // console.log(url);
    this.url = url;
  }
};
</script>

<style scoped>
.more {
  position: relative;
  width: 375px;
  overflow: hidden;
}
</style>