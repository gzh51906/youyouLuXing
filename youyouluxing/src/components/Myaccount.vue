<template>
    <div class="myaccount">
        <Mytitle v-slot>我的账号</Mytitle>
       <div class="mycon">
       <div class="mycon-one">
            <!-- 账号 -->
            <van-row class="groupbox">
                <van-col span="14">{{logincon.username}}</van-col>
                <van-col span="10"  class="groupbox-right">
                        <van-col span="18">修改</van-col>
                        <van-col span="6"><van-icon size='16px' color='#ccc' name="arrow" /></van-col>
                </van-col>
            </van-row>
            <!-- 会员等级 -->
            <van-row class="groupbox">
                <van-col span="14">会员等级</van-col>
                <van-col span="10"  class="groupbox-right">
                        <van-col span="18">{{logincon.dengji}}</van-col>
                        <van-col span="6"><van-icon size='16px' color='#ccc' name="arrow" /></van-col>
                </van-col>
            </van-row>
       </div>
        <!-- 绑定手机 -->
        <van-row class="groupbox">
            <van-col span="14">绑定手机</van-col>
            <van-col span="10"  class="groupbox-right">
                     <van-col span="18">请绑定手机号</van-col>
                      <van-col span="6"><van-icon size='16px' color='#ccc' name="arrow" /></van-col>
            </van-col>
        </van-row>
        <!-- 绑定邮箱 -->
         <van-row class="groupbox">
            <van-col span="14">绑定邮箱</van-col>
            <van-col span="10"  class="groupbox-right">
                     <van-col span="18">请绑定邮箱</van-col>
                      <van-col span="6"><van-icon  size='16px' color='#ccc' name="arrow" /></van-col>
            </van-col>
        </van-row>
        <!-- 修改登陆密码 -->
        <van-row class="groupbox">
            <van-col span="14">修改登陆密码</van-col>
            <van-col span="10"  class="groupbox-right">
                     <van-col span="18"></van-col>
                      <van-col span="6"><van-icon size='16px' color='#ccc' name="arrow" /></van-col>
            </van-col>
        </van-row>
        <!-- 实名验证 -->
        <van-row class="groupbox groupbox-shiming">
            <van-col span="14">实名验证</van-col>
            <van-col span="10"  class="groupbox-right">
                     <van-col span="18">未验证</van-col>
                      <van-col span="6"><van-icon size='16px' color='#ccc' name="arrow" /></van-col>
            </van-col>
        </van-row>
         <!-- 退出登陆 -->
        <van-row type="flex" justify="center" class="loginout" @click="loginout">
         退出登陆
        </van-row>
       </div>
    </div>
</template>
<script>
import Mytitle from "./Mytitle.vue";
export default {
  components: {
    Mytitle
  },
  data() {
    return {
      logincon: {}
    };
  },
  async created() {
    let { data: { data: { authorization } } } = await this.mycon();
    //    console.log(authorization);
    if (authorization) {
      let username = localStorage.getItem("username");
      if (username) {
        let res = await this.$userajax.post("/user/usercontent", { username });
        if (res.data.msg == "success") {
          this.logincon = {
            username,
            dengji: res.data.data.dengji || "Lv.1",
            imgurl:
              res.data.data.imgurl ||
              "https://www.yoyoer.com/phone/public/images/member_nopic.png"
          };
        }
      }
    }
  },
  methods: {
    loginout() {
      this.$store.commit("loginout");
      this.$router.push("/home");
    },
    mycon() {
      let authorization = localStorage.getItem("Authorization");
      if (authorization) {
        return this.$userajax.get("/verify", {
          headers: { Authorization: authorization }
        });
      }
    }
  }
};
</script>
<style scoped>
.myaccount {
  background: #f3f3f3;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.loginout {
  height: 52px;
  background: #ffffff;
  line-height: 52px;
  margin-top: 10px;
}
.mycon-one{
    margin: 10px 0;
}
.groupbox {
  padding: 0 10px;
  height: 52px;
  background: #ffffff;
  line-height: 52px;
  margin-bottom: 1px;
  font-size: 12px;
}
.groupbox-right {
  text-align: right;
}
.groupbox-shiming {
  margin: 10px 0;
}
</style>
