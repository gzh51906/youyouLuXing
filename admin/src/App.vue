<template>
  <div id="app">
<div class="nav">
  <el-container style="height: 900px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246); height: 900px;"  >
    <el-menu :default-openeds="active">
             <template >
              <div class="logo"><i class="el-icon-monitor pic" ></i>后台管理系统</div>
               </template>
<template v-for="item in navs">
  <el-submenu :index="item.index" :key="item.name">
        <template slot="title"><i :class="item.icon"></i>{{item.text}}</template>
        <el-menu-item-group>
          <template slot="title">SET</template>
          <el-menu-item :index="dx.index" v-for="dx in item.classify" :key="dx.text"  @click="goto(dx.path)">{{dx.text}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
</template>
    
    <template v-for="item in admin"  v-if ="setname === '花花'">
  <el-submenu :index="item.index" :key="item.name">
        <template slot="title"><i :class="item.icon"></i>{{item.text}}</template>
        <el-menu-item-group>
          <template slot="title">SET</template>
          <el-menu-item :index="dx.index" v-for="dx in item.classify" :key="dx.text"  @click="goto(dx.path)">{{dx.text}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
</template>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-user" style="margin-right: 10px; font-size: 20px; color:#fff"></i>
        <el-dropdown-menu slot="dropdown"  >
          <el-dropdown-item @click.native="out" >退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="user" v-model="setname">{{setname}}</span>
    </el-header>
    
    <el-main>
    <router-view></router-view>
    </el-main>
  </el-container>
</el-container>


</div>
  </div>
</template>

<script>
import Vue from "vue";
import ELement from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ELement);

export default {
  name: "app",
  data() {
    return {
      username: '',
      active: ["1", "3"],
      navs: [
        {
          name: "sort",
          path: "/sort",
          text: "分类管理",
          index: "1",
          icon: "el-icon-message",
          classify: [
            {
              text: "分类列表",
              index: "1-1",
              name: "sortlist",
              path: "/sortlist"
            },
            {
              text: "添加分类",
              index: "1-2",
              name: "addsort",
              path: "/addsort"
            }
          ]
        },
        {
          name: "goods",
          path: "/goods",
          text: "商品管理",
          index: "2",
          icon: "el-icon-menu",
          classify: [
            {
              text: "商品列表",
              index: "2-1",
              name: "goodslist",
              path: "/goodslist"
            },
            {
              text: "添加商品",
              index: "2-2",
              name: "addgoods",
              path: "/addgoods"
            }
          ]
        },
        {
          name: "order",
          path: "/order",
          text: "订单管理",
          index: "3",
          icon: "el-icon-shopping-bag-2",
          classify: [
            {
              text: "待处理订单",
              index: "3-1",
              name: "order",
              path: "/order"
            }
          ]
        }
      ],
      admin:[
        {
          name: "user",
          path: "/user",
          text: "用户管理",
          index: "4",
          icon: "el-icon-setting",
          classify: [
            {
              text: "用户列表",
              index: "4-1",
              name: "userlist",
              path: "/userlist"
            },
            {
              text: "添加用户",
              index: "4-2",
              name: "adduser",
              path: "/adduser"
            }
          ]
        }
      ]
    };
  },
  methods: {
    goto(path) {
      // console.log(path);
      this.$router.push({ path });
    },
    out(){    
      this.$store.commit("logout");
      this.$router.push("/login");
    }
  },
  created() {
   // console.log(this.$store.state.username);
    
  },
  computed: {
    setname(){
      this.username = this.$store.state.common.username;
     return   this.username
    }
  },

};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.nav .logo {
  width: 159px;
  height: 60px;
  line-height: 56px;
  font-size: 20px;
  color: #fff;
  padding: 0 20px;
  font-weight: 600;
  background: #b3c0d1;
}
.nav .pic {
  margin-right: 10px;
}
.nav .user {
  font-size: 20px;
  color: #fff;
}
</style>
