<template>

    <div id="app">
      <router-view></router-view>
    <div v-show="change" class="footbox">
         <!-- 模块 -->
        <div class="footer">      
            <div class="xieyi">
               <a href="">关于我们</a>
               <a href="">联系我们</a>
               <a href="">用户协议</a>
            </div>
           
            <div class="xieyi">
               <a>游游旅行</a>         
            </div>
        </div>
         <!-- 模块完 -->
          <van-tabbar route :fixed='false'>
            <van-tabbar-item
              replace
              :to="item.path"
              :icon="item.icon"
              v-for='item in navs'
              :key='item.name'
              active-color="#7d7e80"
              class="routeritem"
           
            >
              {{item.text}}
            </van-tabbar-item>
            <van-tabbar-item
              replace
              icon="upgrade"
              class="routeritem"
               @click="handleItemClick()"
            >
              返回顶端
            </van-tabbar-item>
</van-tabbar>
  </div>
     

  </div>
</template>
<script scoped>
import Vue from "vue";
import Vant from "vant";
import VueRouter from "vue-router";

import "vant/lib/index.css";

Vue.use(Vant);
export default {
  data() {
    return {
     routefootertoshow:'',
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
  },
  methods:{
      handleItemClick() {     
          window.scrollTo(0,0);        
    },
    routeshow(){
       let res=['/home','/help','/phone','/bus']
       let result=res.some((item)=>{return this.$route.path===item})
      //  console.log(mine);
      // this.routefootertoshow=result
    }

  },
  computed:{
      change(){
       return this.$store.state.home.routefootertoshow;
      }
  }
  
  
};
</script>
<style>
.routeritem {
  padding: 17px 0;
  height: 50px;

  font-size: 16px;
}

.van-icon-wap-home::before {
  display: inline-block;
  font-size: 30px;
}
.van-icon-question-o::before {
  display: inline-block;
  font-size: 30px;
}
.van-icon-phone-o::before {
  display: inline-block;
  font-size: 30px;
}
.van-icon-upgrade::before {
  display: inline-block;
  font-size: 30px;
}

.footer {
  padding-top: 9px;
  background: #ffffff;
}
.xieyi {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 0;
}

.xieyi a {
  text-decoration: none;
  display: inline-block;
  border-right: 1px solid #cccccc;
  padding: 0 9px;
  color: rgb(102, 102, 102);
  font-size: 14px;
  line-height: 14px;
}
.xieyi a:nth-last-child(1) {
  border-right: none;
}
</style>


