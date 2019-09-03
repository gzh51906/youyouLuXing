<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import Vant from "vant";
import Bus from "./pages/bus.vue";
import Goods from "./pages/goods.vue";

import "vant/lib/icon/local.css";
import "vant/lib/index.css";
import { Icon } from "vant";

Vue.use(Icon);
Vue.use(Vant);

export default {
  name: "app",
  data() {
    return {
      pages: [
        { title: "大巴游", name: "bus", path: "/bus" },
        { title: "邮轮", name: "ship", path: "/ship" },
        { title: "度假", name: "holiday", path: "/holiday" },
        { title: "门票", name: "ticket", path: "/ticket" },
        { title: "私人定制", name: "personal", path: "/personal" },
        { title: "问答", name: "qa", path: "/qa" },
        { title: "专题", name: "topic", path: "/topic" },
        { title: "活动", name: "function", path: "/function" }
      ]
    };
  },
  components: {},
  methods: {
    goto(name) {
      // console.log(123);
      // console.log(this.$router);
      this.$router.push({ name });
    }
  },
  computed: {},
  created() {}
};
</script>


<style>
</style>
