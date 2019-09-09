<template>
    <div class="myorder">
        <Mytitle v-slot>我的订单</Mytitle>
        <van-tabs v-model="active" class="myorder-box" @click="onClick" :swipe-threshold='5' color='rgb(86, 150, 247)' line-width='20%' line-height='2px' title-active-color='rgb(86, 150, 247)'>
            <van-tab :title="item" v-for="item in navs" :key='item'>
                <!-- 订单内容   有 / 无  -->
                <div v-if='havelist'>
                    <!-- 循环列表 -->
                      <div class="dingdanbox" v-for="item in list" :key='item._id'>
                          <!-- 下单时间 -->
                            <van-row class="paytime">
                               {{item.time}}
                            </van-row>
                            <!-- 下单内容 -->
                            <div class="paycontentbox"> 
                                <van-row class="paycontent">
                                    <van-col span='10' class="paycontent-img">
                                        <img :src="item.src[1]" alt="">
                                    </van-col>
                                    <van-col span='14' class="paycontent-title">
                                            <p>{{item.title}}</p>
                                            <div>前20单80欧/人</div>
                                    </van-col>
                                </van-row>
                            </div>
                            
                            <!-- 下单价格 -->
                            <van-row class="payprice">
                                <van-col span='12'>总额：<span class="price-span">{{item.price}}</span></van-col>
                                <van-col span='12' class="payprice-right">
                                    全额支付：<span class="price-span">{{item.pay}}</span>
                                </van-col>
                            </van-row>
                            <!-- 下单状态 -->
                            <van-row class="paystatus">
                                <van-col span='12'>订单状态：{{item.status}}</van-col>
                                <!-- 根据订单状态生成按钮 -->
                                <van-col span='12' class="paystatus-right">
                                  <div v-if='item.status==="待付款"'>
                                     <span class="failpay" @click="removepay(item._id)">取消订单</span>
                                     <span class="successpay" @click="topay(item.id)">去付款</span>
                                  </div>
                                  <div v-else-if='item.status==="待消费"'>
                                     <span class="failpay" @click='torefund(item._id)'>退款</span>
                                     <span class="successpay">去使用</span>
                                  </div>
                                  <div v-else-if='item.status==="待点评"'>
                                     <!-- <span class="failpay">评论</span> -->
                                     <span class="successpay">评论</span>
                                  </div>
                                  <div v-else-if='item.status==="退款"'>
                                     <!-- <span class="failpay"></span> -->
                                     <span class="successpay">已退款</span>
                                  </div>
                                   
                                </van-col>
                            </van-row>
                      </div>
                      <div class="theend">没有更多结果了!</div>
                </div>
                <div v-else>
                   
                    <van-row type="flex" justify="center">
                        <img :src="kongurl" alt="" class="nolistimg">                    
                    </van-row>
                </div>


                
            </van-tab>
            
        </van-tabs>


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
      active: 0,
      navs: ["全部", "待付款", "待消费", "待点评", "退款"],
      list: [],
      havelist: true,
      kongurl: require("../assets/img/kong.gif")
    };
  },

  methods: {
    activelist() {
      // 获取全部的请求
      this.$mycart.get().then(res => {
        let { data: { data } } = res;
        this.changestatus(data);
        // console.log(data);
      });
    },
    changestatus(data) {
      if (data[0]) {
        //如果有数据
        this.havelist = true;
        data.forEach(element => {
          if (element.status == '1') {
            element.status = "待付款";
          }
          if (element.status == '2') {
            element.status = "待消费";
          }
          if (element.status == '3') {
            element.status = "待点评";
          }
          if (element.status == '4') {
            element.status = "退款";
          }
        });
      } else {
        this.havelist = false;
      }
      this.list = data;
    },
    onClick(name, title) {
      // 发送请求获取数据
      if (name == 0) {
        // 如果是全部
        this.activelist();
      } else {
        // 不是全部
        this.$mycart.post("/status", { status: String(name) }).then(res => {
          let { data: { data } } = res;
          this.changestatus(data);
        });
      }
    },
    removepay(id) {
      // 取消订单
      this.$mycart.delete(`/${id}`).then(res => {
        if (this.active == 0) {
          this.activelist();
        } else {
          // 如果是待付款
          this.$mycart.post("/status", { status: '1' }).then(res => {                    
            let { data: { data } } = res;
            this.changestatus(data);
          });
        }
      });
    },
   torefund(id) {
      // 退款  改变状态  待消费==》退款
     this.$mycart({
        url: `/${id}`,
        method: "patch",
        data: {
          status: '4'
        }
      }).then(res=>{
         if(res.data.msg=='success'){
           this.active=4;
           this.onClick(4,'退款')
         }
      })
   

      // this.active=4;
    }
    ,topay(id){
      // 去付款 改变状态  待付款==》 待消费
        this.$mycart({
        url: `/${id}`,
        method: "patch",
        data: {
          status: '1'
        }
      }).then(res=>{
         if(res.data.msg=='success'){
           this.active=1;
           this.onClick(1,'待消费')
         }
      })
    }
    
  },
  created() {
    this.activelist();
  }
};
</script>
<style scoped>
.myorder-box {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f3f3f3;
  top: 52px;
}
.dingdanbox {
  background: #ffffff;
  margin: 10px 0;
}

.paycontentbox {
  padding: 0 10px;
}
.paycontent {

  padding: 10px 0;
  border-bottom: 1px solid #f3f3f3;
}

.paycontent-img img {
  width: 100%;
  max-height: 100%;
}

.paycontent-title {
  padding-left: 15px;
}
.paycontent-title > p {
  font-size: 14px;
  margin: 0;
}
.paycontent-title > div {
  color: #cccccc;
  font-size: 12px;
  margin-top: 10px;
}
.payprice {
  height: 35px;
  line-height: 35px;
  padding: 0 10px;
  border-bottom: 1px solid #f3f3f3;
  font-size: 14px;
}
.price-span {
  color: orangered;
}

.payprice-right {
  text-align: right;
}
.paystatus {
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  color: #666666;
  font-size: 14px;
}

.failpay {
  display: inline-block;
  background: #cccccc;
  color: #ffffff;
  padding: 5px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 12px;
}

.successpay {
  display: inline-block;
  background: #ee4b45;
  color: #ffffff;
  padding: 5px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 12px;
  margin-left: 5px;
}

.paytime {
  height: 30px;
  font-size: 12px;
  line-height: 30px;
  padding: 0 15px;
  color: #666666;
  border-bottom: 1px solid #f3f3f3;
}

.paystatus-right {
  text-align: right;
}
.theend {
  text-align: center;
  color: #666666;
  font-size: 12px;
  /* margin: 20px 0; */
  padding: 30px 0 50px 0;
  margin-top: -10px;
  background: #f3f3f3;
}
.nolistimg {
  margin-top: 30px;
}
</style>
