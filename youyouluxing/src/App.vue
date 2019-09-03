<template>

  <div id="app">
    <router-view></router-view>
<van-tabbar route>
  <van-tabbar-item
    replace
    :to="item.path"
    :icon="item.icon"
    v-for='item in navs'
    :key='item.name'
    active-color="#7d7e80"
  >
    {{item.text}}
  </van-tabbar-item>
  <van-tabbar-item
    replace
    icon="upgrade"
  >
    返回顶端
  </van-tabbar-item>
</van-tabbar>
     

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



