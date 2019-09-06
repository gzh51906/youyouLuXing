<template>
    <div class="mine">
       <div class="title">
        <van-icon name="arrow-left" size='30px' color='#333' @click='tohome'/>
           我的会员中心
      </div>   
      <!-- 会员中心 根据登陆变化 -->
        <div>
            <div class="mystate" v-if='nologin'>            
                <div class="myproto"> <img src="https://www.yoyoer.com/phone/public/images/member_nopic.png" alt=""></div>               
                <div class="mystate-con">
                    <p class="regorlogin"><span @click="tomycon('login')">登陆</span><span>/</span><span @click="tomycon('reg')">注册</span></p>
                    <span class="huiyuan">会员俱乐部</span>
                </div>               
            </div>
            <div class="mystate" v-else>            
                <div class="myproto"> <img :src="logincon.imgurl" alt=""></div>               
                <div class="mystate-con">
                    <p class="regorlogin"><span >{{logincon.username}}</span><span class="dengji">{{logincon.dengji}}</span></p>
                    <span class="huiyuan">会员俱乐部</span>
                </div>        
                <div class="tomy" @click="tomycon('myaccount')"><van-icon name="arrow" size='30px' color='#ffffff'/></div>       
            </div>
          </div>
          <!-- 我的订单 -->
         <div class="myorder">
                <van-row type="flex" justify="space-between" class="myorder-top" align='center'>
                    <van-col span="6" class="myorder-top-left">我的订单</van-col>
                    <van-col span="6" class="myorder-top-right" @click="tomycon('myorder')">
                        全部订单
                        <van-icon name="arrow"/>
                    </van-col>
                
                </van-row>
                <van-row type="flex" class="myorder-bottom">
                    <van-col span="6" v-for="item in list" :key='item.text' @click="tomycon(item.path)">          
                          <div class="myorder-bottom-list">
                                <van-icon :name="item.icon" size='30px' color='#666666'/> 
                                <span class="myorder-bottom-list-span">{{item.text}}</span>
                          </div>                       
                    </van-col>            
                </van-row>
         </div>
         <!-- 登陆后出现 -->
        
                <van-row type="flex" v-if='!nologin'>
                    <van-col span="6" v-for="item in myproperty" :key='item.name'>          
                          <div class="myproperty">
                                <span>{{item.con}}</span>
                                <span class="myproperty-name">{{item.name}}</span>
                          </div>                       
                    </van-col>            
                </van-row>
       
         <!-- 分销商 -->
         <van-row type="flex" justify="space-between" class='list-group list-group-one'  @click="tomycon('distributor')">
            <van-col span="6"><van-icon name="shop-collect-o" color='#ff6b1a' size='20px'/><span class="list-group-one-left-span">分销商</span></van-col>
            <van-col span="1" class="list-group-one-right"> 
                  <span>立即申请</span>               
                 <van-icon name="arrow"/>
            </van-col>
           
        </van-row>
        <!-- 我的相关消息列表 -->
        <van-row type="flex" justify="space-between" class='list-group' v-for='item in mylistGroup' :key="item.text" @click="tomycon(item.path)" >
            <van-col span="6">{{item.text}}</van-col>
            <van-col span="1">                
                 <van-icon name="arrow"/>
            </van-col>
           
        </van-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          icon: "paid",
          text: "待付款",
          path: "awaitPayment"
        },
        {
          icon: "balance-list-o",
          text: "待消费",
          path: "awaitConsumption"
        },
        {
          icon: "smile-comment-o",
          text: "待点评",
          path: "awaitComment"
        },
        {
          icon: "description",
          text: "退款",
          path: "refund"
        }
      ],
      mylistGroup: [
        {
          text: "我的拼团",
          path: "mypintuan"
        },
        {
          text: "我的游记",
          path: "myyouji"
        },
        {
          text: "我的结伴",
          path: "myjieban"
        },
        {
          text: "我的收藏",
          path: "myCollection"
        },
        {
          text: "我的咨询",
          path: "myzixun"
        },
        {
          text: "订单查询",
          path: "myordersearch"
        },
        {
          text: "常用消息",
          path: "mynews"
        }
      ],
      nologin: true,
      logincon: {},
      myproperty:[
         {
              name:'我的钱包',
              con:'€0'
         }, {
              name:'优惠券',
              con:'0张'
         },{
              name:'红包',
              con:'0个'
         }, {
              name:'积分',
              con:'0'
         }
        
      ]
    };
  },
  methods: {
    tohome() {
      this.$router.push("/home");
    },
    tomycon(path) {
      this.$router.push("/mine/" + path);
    }
  },
  created() {
    let authorization = localStorage.getItem("Authorization");
    if (authorization) {
      this.$axios
        .get("http://localhost:3003/verify", {
          headers: { Authorization: authorization }
        })
        .then(res => {
          if (res.data.data.authorization) {
            //正确，发起请求获取用户名
            let username = localStorage.getItem("username");
            if (username) {
              this.$userajax
                .post("/user/usercontent", { username })
                .then(res => {
        
                  let { data: { msg, data } } = res;
                  if (msg === "success") {
                    this.logincon = {
                      username,
                      dengji: data.dengji || "Lv.1",
                      imgurl:
                        data.imgurl ||
                        "https://www.yoyoer.com/phone/public/images/member_nopic.png"
                    };
                    this.nologin = false;
                  }
                });
            }
          }
        });
    }
  }
};
</script>
<style scoped>
.mine {
  background: #f3f3f3;
}

.mystate {
  height: 68px;
  padding: 16.5px 26px;
  display: flex;
  background: url("https://www.yoyoer.com/phone/public/images/user-center-home-bg.jpg")
    no-repeat;
  background-size: cover;
  position: relative;
}
.myproto {
  height: 100%;
  margin-right: 14px;
}
.myproto img {
  height: 100%;
}
.mystate-con {
  color: #ffffff;
}
.regorlogin {
  font-size: 20px;
  line-height: 20px;
  margin: 0 0 13px 0;
}
.huiyuan {
  display: inline-block;
  padding: 0 14px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  font-size: 12px;
}
.dengji {
  background: rgb(250, 132, 21);
  font-size: 12px;
  line-height: 12px;
  border-radius: 10px;
  padding: 2px 7px;
  margin-left: 10px;
}
.tomy {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.myorder {
  padding: 0 13px;
  height: 125px;
  border-radius: 13px 13px 0 0;
  margin-top: -10px;
  background: #ffffff;
  margin-bottom: 10px;
}
.myorder-top {
  padding: 13px 0 8px 0;
  border-bottom: 1px solid #cccccc;
}
.myorder-top-right {
  font-size: 14px;
  color: #cccccc;
  line-height: 19px;
}
.myorder-top-left {
  font-size: 15px;
  line-height: 19px;
}
.myorder-bottom {
  padding: 13px 0;
}
.myorder-bottom-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.myorder-bottom-list-span {
  margin-top: 3px;
}
.list-group {
  padding: 0 13px;
  background: #ffffff;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #cccccc;
}
.list-group-one {
  margin: 10px 0;
  position: relative;
  border:none;
}

.van-icon-shop-collect-o::before {
  vertical-align: middle;
}
.list-group-one-left-span {
  margin-left: 3px;
  line-height: 52px;
}
.list-group-one-right span {
  color: green;
  font-size: 12px;
  line-height: 52px;
  position: absolute;
  display: inline-block;
  height: 52px;
  right: 8%;
}

.title {
  height: 52px;
  text-align: center;
  line-height: 52px;
  font-size: 20px;
  background: #ffffff;
  border-bottom: 1px solid #cccccc;
}
.title .van-icon {
  position: absolute;
  left: 10px;
  top: 11px;
}

.myproperty{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 0;
    background: #ffffff;
    padding: 10px 0;
    font-size: 14px;
}
.myproperty-name{
    color:#ccc;
    font-size: 13px;


   
}
</style>


