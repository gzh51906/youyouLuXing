<template>
    <div class="toful">
        <van-row type="flex" justify="center" class="success">
            提交成功
        </van-row>
        <!-- 提示 -->
        <div class="success-tishi">
            <van-icon name="passed" size='20px' /> 您的订单提交成功，我们会尽快为您确认！
        </div>
        <!-- 订单内容  padd -->
        <div class="dingdan">
            <van-row class="dingdan-top">
                <van-col span="5">订单号：</van-col>
                <van-col span="19"></van-col>
            </van-row>
            <van-row class="dingdan-middle">
                <van-col span="5">产品名称：</van-col>
                <van-col span="19"></van-col>
            </van-row>
            <van-row class="dingdan-bottom">
                <van-col span="5">支付金额：</van-col>
                <van-col span="19" class="money"></van-col>
            </van-row>
        </div>
        <!-- 返回首页  查看订单 -->
        <van-row type="flex" justify="center" class="router">
            <van-col span="6" class="toorder" @click="tohome">返回首页</van-col>
            <van-col span="6" class="toorder" @click='tomyorder'>查看订单</van-col>
        </van-row>
    </div>

</template>
<script>
export default {
  data() {
    return {
        dingdan:''
    };
  },
  created() {
   this.dingdan= this.$route.params;
   this.$mycart.get(`/${this.$route.params}`).then(res=>{
       console.log(res);
       
   })
  },
  methods: {
    tohome() {
      this.$router.push("/home");
    },
    tomyorder() {
      this.$router.push("/mine/myorder");
    }
  }
};
</script>
<style scoped>
.toful {
  background: rgba(228, 208, 208, 0.4);
  position: absolute;

  top: 0%;
  bottom: 0%;
}
.success {
  height: 50px;
  line-height: 50px;
  background: #ffffff;
}
.success-tishi {
  height: 80px;
  background: orangered;
  color: #ffffff;
  padding: 20px 40px;
  box-sizing: border-box;
}
.dingdan {
  padding: 0 20px;
  font-size: 14px;
  line-height: 40px;
  background: #ffffff;
}
.dingdan-top {
  height: 40px;
  border-bottom: 1px solid #cccccc;
}
.dingdan-middle {
  border-bottom: 1px solid #cccccc;
}
.dingdan-bottom {
  height: 40px;
}
.toorder {
  border: 1px solid #cccccc;
  font-size: 14px;
  padding: 6px 20px;
  border-radius: 5px;
  margin-right: 10px;
}
.router {
  margin-top: 30px;
}
.money {
  color: orangered;
}
</style>

