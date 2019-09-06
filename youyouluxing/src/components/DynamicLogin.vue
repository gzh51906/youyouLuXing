<template>
    <div>
         <van-row class="inputbox">
            <input type="text" placeholder="请输入手机号码前加国际区号（如：法国33）" v-model="username"> 
        </van-row>
        <van-row class="inputbox">
             <van-col span='14'><input type="text" placeholder="请输入短信验证码" v-model="uiyzm"></van-col>
            <van-col span='10' class="getyzm" @click="getyzm">获取动态验证码</van-col>     
        </van-row>
        <van-row class="login" @click="login">
             登陆
         </van-row>
         <van-row type="flex" justify="center" class="toreg">
            <van-col span="6" class="newreg">注册新用户</van-col>
            <van-col span="6">找回密码</van-col>            
        </van-row>
        <!-- 底部定位 -->
        <div class="orderlogin">
            <van-divider :style="{borderColor: '#cccccc',margin:'0px' }" :hairline='false'>其他方式登陆</van-divider>
             <van-row class="orderlogin-name" type="flex" justify="center">
               <img :src='weiboimgurl' alt=""/>
             </van-row>
        </div>

         <transition name="tishi">
              <span class="tishi" v-show="show">{{showText}}</span>
         </transition>

    </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      uiyzm: "",
      modelyzm: "",
      weiboimgurl: require("../assets/img/login-wb-icon.png"),
      showText: "",
      show: false
    };
  },
  methods: {
    regshow() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 3000);
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    getyzm() {
      let res = this.randomNum(1000, 9999);
      //弹出的验证码
      alert("验证码是" + res);
      //写入data
      this.modelyzm = res;
    },
    loginuser() {
      return this.$userajax({
        method: "post",
        url: "/user/dtlogin",
        data: {
          username: this.username
        }
      });
    },
    login() {
      let phoneRex = /^1[3-9][0-9]{9}$/;
      if (phoneRex.test(this.username)) {
        if (this.uiyzm == "") {
          this.showText = "动态码不能为空!";
          this.regshow();
        } else {
          if (this.uiyzm == this.modelyzm) {
            //成功
            this.loginuser().then(res => {
              let { data: { msg, data: { authorization } } } = res;
              if (msg === "success") {
                //成功跳转
                let targer = this.$route.query.targer || "/mine";

                this.$store.commit("login", {authorization,username:this.username});
                this.$router.push(targer);
              } else {
                this.showText = "登陆失败，账号不存在!";
              }
            });
          } else {
            this.showText = "动态码不正确!";
            this.regshow();
          }
        }
      } else {
        if (this.username == "") {
          this.showText = "手机号不能为空!";
        } else {
          this.showText = "手机号格式不正确!";
        }
        this.regshow();
      }
    }
  }
};
</script>
<style scoped>
.inputbox {
  border-bottom: 1px solid #cccccc;
}
input {
  border: none;
  padding: 16px 8px;
  width: 100%;
  font-size: 14px;
}
.login {
  background: #23cc27;
  padding: 10.5px 0;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
  margin-top: 15px;
  margin-bottom: 17px;
}
.toreg {
  font-size: 12px;
  text-align: center;
  line-height: 16px;
  color: #666666;
}
.newreg {
  border-right: 1px solid #666666;
}
.orderlogin {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.orderlogin-name {
  padding: 23px 0;
  height: 33.5px;
}
.orderlogin-name img {
  width: 33.5px;
}
.getyzm {
  color: rgb(35, 204, 119);
  line-height: 49px;
  text-align: right;
  font-size: 12px;
}
.tishi {
  position: absolute;
  background: #333;
  padding: 8px 15px;
  color: #ffffff;
  border-radius: 5px;
  font-size: 16px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 70%;
}
/* 提示动画效果*/
.tishi-enter {
  bottom: 0;
}
.tishi-enter-active {
  /* top: 30%; */
  transition: 0.3s bottom;
}
.tishi-enter-to {
  bottom: 70%;
}
</style>


