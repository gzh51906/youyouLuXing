<template>
    <div>
         <van-row class="inputbox">
            <input type="text" placeholder="手机号码前加国际区号（如：法国33）/邮箱" v-model="username"> 
        </van-row>
        <van-row class="inputbox">
            <input type="password" placeholder="登陆密码" v-model="password"> 
        </van-row>
            <!-- 显示？ -->
          <van-row class="inputbox" v-if='txmshow'>
            <van-col span='18'><input type="text" placeholder="图形验证码" v-model="tuxingma"></van-col>
            <van-col span='6' class="canvasbox">
                <div class="verify-box" @click="refreshCode">
                    <Sidentify :identifyCode="identifyCode"></Sidentify>
                </div>
            </van-col>           
        </van-row>
            <!--  -->
        <van-row class="login" @click="tologin">
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
              <span class="tishi" v-if="show">{{showText}}</span>
         </transition>

    </div>
</template>
<script>
import Sidentify from "../unit/identify.vue";

export default {
  data() {
    return {
      username: "",
      password: "",
      weiboimgurl: require("../assets/img/login-wb-icon.png"),
      show: false,
      showText: "",
      txmshow: false,
      tuxingma: "",
      identifyCode: ""
    };
  },

  components: {
    Sidentify
  },
  created() {
    this.refreshCode();
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
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCode, 4);
      this.identifyCode = this.identifyCode.slice(8);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCode[
          this.randomNum(0, this.identifyCode.length)
        ];
      }
    },
    loginuser() {
      return this.$userajax({
        method: "post",
        url: "/user/login",
        data: {
          username: this.username,
          password: this.password
        }
      });
    },
    async tologin() {
      let phoneRex = /^1[3-9][0-9]{9}$/;
      let emailRex = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      let passRex = /^\S{6,}$/;
      //有图形验证码的情况
      if (this.txmshow) {
        //   用户格式正确
        if (phoneRex.test(this.username) || emailRex.test(this.username)) {
            // 密码格式正确
          if (passRex.test(this.password)) {
            if (this.tuxingma == this.identifyCode) {
              //发送请求返回数据
              let { data: { msg,data:{authorization} } } = await this.loginuser();

              if (msg === "success") {
                //成功跳转
                   let targer = this.$route.query.targer || '/mine'
                   this.$router.push(targer)

                 this.$store.commit('login',{authorization,username:this.username})
              } else {
                this.showText = "登陆失败，账号或密码不正确!";
                this.regshow();
              }
            } else {
              if (this.tuxingma == "") {
                this.showText = "验证码不能为空!";
              } else {
                this.showText = "验证码不正确";
              }
              this.regshow();
            }
          } else {
            if (this.password === "") {
              this.showText = "密码不能为空!";
            } else {
              this.showText = "密码不能少于6位数!";
            }

            this.regshow();
          }
        } else {
          if (this.username === "") {
            this.showText = "邮箱不能为空!";
          } else {
            this.showText = "邮箱格式不正确!";
          }

          this.regshow();
        }
      } else {
        //   没有图形验证码的情况下
        // 用户格式正确
        if (phoneRex.test(this.username) || emailRex.test(this.username)) {
            // 密码格式正确
          if (passRex.test(this.password)) {
            //发送请求
            
            let { data: { msg,data:{authorization} } } = await this.loginuser();
            // console.log(this.$store.state.loginuser);
            
            if (msg === "success") {
                 //成功跳转
                   let targer = this.$route.query.targer || '/mine'
                //    console.log('zhanghao',targer);
                   this.$store.commit('login',{authorization,username:this.username})
                   this.$router.push(targer)


            } else {
              this.showText = "登陆失败，账号或密码不正确!";
              this.regshow();
              this.txmshow = true;
            }
          } else {
            if (this.password === "") {
              this.showText = "密码不能为空!";
            } else {
              this.showText = "密码不能少于6位数!";
            }

            this.regshow();
          }
        } else {
          if (this.username === "") {
            this.showText = "邮箱不能为空!";
          } else {
            this.showText = "邮箱格式不正确!";
          }

          this.regshow();
        }
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
.canvasbox {
  position: relative;
}
.verify-box {
  position: absolute;
  right: 0;
  top: 6px;
}
</style>

