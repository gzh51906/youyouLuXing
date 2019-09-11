<template>
   <div class="emailreg">
     <!-- 邮箱 -->
         <van-row class="inputbox">
            <input type="text" placeholder="请输入电子邮箱" v-model="userEmail"> 
        </van-row>
        <!-- 图形码 -->
        <van-row class="inputbox">
            <van-col span='18'><input type="text" placeholder="图形验证码" v-model="tuxingma"></van-col>
             <van-col span='6' class="canvasbox">
                <div class="verify-box" @click="refreshCode">
                    <Sidentify :identifyCode="identifyCode"></Sidentify>
                </div>
                </van-col>               
        </van-row>
        <!-- 动态验证码 -->
         <van-row class="inputbox">
            <van-col span='14'><input type="text" placeholder="获取邮箱验证码" v-model="uiyzm"></van-col>
            <van-col span='10' class="getyzm" @click="getyzm">获取动态验证码</van-col>        
        </van-row>
        <!-- 密码 -->
         <van-row class="inputbox">
            <input type="password" placeholder="设置登陆密码(至少6位)" v-model="password"> 
        </van-row>
        <!-- 用户协议 -->
         <van-row  type="flex" class="customeragree">
            <van-checkbox class="opac" v-model="checked" checked-color="#07c160" icon-size='12'></van-checkbox>
            <span class="opac">同意我们的</span>
            <span>《游游用户注册协议和隐私政策》</span>
        </van-row>
        <!-- 注册 -->
         <van-row class="reg"  @click="reg">
             注册
        </van-row>
          <!-- 错误提示 -->
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
      identifyCode: "",
      checked: true,
      userEmail: "",
      tuxingma: "",
      uiyzm: "",
      password: "",
      modelyzm: "",
      show: false,
      showText: ""
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
    getyzm() {
      let res = this.randomNum(1000, 9999);
      //弹出的验证码
      alert("验证码是" + res);

      //写入data
      this.modelyzm = res;
    },
    reg() {
      let emailRex = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      let passRex = /^\S{6,}$/;
      setTimeout(() => {
        this.tuxingma = "";
      }, 10 * 60 * 1000);

      if (this.checked) {
        //邮箱正确
        if (emailRex.test(this.userEmail)) {
          // 图形验证码
          if (this.tuxingma == "") {
            this.showText = "验证码不能为空!";
            this.regshow();
          } else {
            // 动态验证码
            if (this.uiyzm == "") {
              this.showText = "动态码不能为空!";
              this.regshow();
            } else {
              //密码
              if (passRex.test(this.password)) {
                //密码正确，匹配图形码与验证码
                if (this.tuxingma === this.identifyCode) {
                  if (this.uiyzm == this.modelyzm) {
                    //通过 匹配成功 查询数据库
                    this.$userajax({
                      method: "post",
                      url: "/user/check",
                      data: {
                        username: this.userEmail
                      }
                    }).then(res => {
                      let { data: { msg } } = res;
                      if (msg === "success") {
                        this.$userajax({
                          method: "post",
                          url: "/user/reg",
                          data: {
                            username: this.userEmail,
                            password: this.password
                          }
                        });

                        this.$router.push("/mine/login");
                      } else {
                        this.showText = "用户已存在";
                        this.regshow();
                      }
                    });
                  } else {
                    this.showText = "动态码不正确或过期!";
                    this.regshow();
                  }
                } else {
                  this.showText = "验证码不正确!";
                  this.regshow();
                }
              } else {
                if (this.password == "") {
                  this.showText = "密码不能为空!";
                } else {
                  this.showText = "密码不少于6位数!";
                }
                this.regshow();
              }
            }
          }
        } else {
          if (this.showText == "") {
            this.showText = "邮箱不能为空!";
          } else {
            this.showText = "邮箱式不正确!";
          }
          this.regshow();
        }
      } else {
        this.showText = "请先阅读并同意我们的服务条款!";
        this.regshow();
      }
    }
  }
};
</script>
<style scoped>
.emailreg {
  background: #ffffff;
}
.inputbox {
  border-bottom: 1px solid #cccccc;
}
input {
  border: none;
  padding: 16px 8px;
  width: 100%;
}
.customeragree {
  font-size: 12px;
  margin-top: 16px;
}
.opac {
  opacity: 0.3;
}
.reg {
  background: rgb(189, 239, 214);
  padding: 10.5px 0;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
  margin-top: 15px;
}
.canvasbox {
  position: relative;
}
.verify-box {
  position: absolute;
  right: 0;
  top: 6px;
}
.getyzm {
  color: rgb(35, 204, 119);
  line-height: 52px;
  text-align: right;
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
