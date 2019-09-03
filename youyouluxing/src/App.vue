<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from "vue";
import Vant from "vant";
import VueRouter from "vue-router";

import "vant/lib/index.css";

Vue.use(Vant);
export default {
  data() {
    return {
      navs: [
        {
          path: "/home",
          name: "home",
          text: "首页",
          icon: "wap-home"
        },
        {
          path: "/help",
          name: "help",
          text: "帮助中心",
          icon: "question-o"
        },
        {
          path: "/phone",
          name: "phone",
          text: "客服电话",
          icon: "phone-o"
        }
      ]
    };
  }
};
</script>



<style>
</style>
