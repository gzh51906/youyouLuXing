<template>
  <div>
    <BusHeader></BusHeader>
    <div class="swiperBox">
      <van-swipe indicator-color="white" :height="200" :autoplay="3000">
        <van-swipe-item v-for="url of data.src" :key="url">
          <div class="img">
            <img :src="url" alt />
          </div>
        </van-swipe-item>
      </van-swipe>
      <p>
        <span class="span1">{{data.attr1}}</span>
        <span class="span2">{{data.sales}}</span>
      </p>
    </div>
    <div class="product">
      <div class="productBox">
        <div class="tit-bar">{{data.title}}</div>
        <div class="bst-bar">
          <span>{{data.price}}</span>
          <span>{{data.oldprice}}</span>
          <span>200人出游</span>
          <span>100%满意</span>
        </div>
      </div>
    </div>
    <p class="before"></p>
    <div class="date">
      <p class="date-class">出发日期</p>
      <div class="date-box">
        <ul>
          <li v-for="item of date" :key="item.time">
            <span>{{item.time}}</span>
            <span class="spanDate">{{item.price}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="after"></div>
    <div class="qa">
      <div class="qa1">
        <span class="youke">游客问答</span>
        <span class="answerdata">0条问答</span>
      </div>
      <div class="qa2">
        <span class="answer">本产品无问答内容!</span>
        <van-button round type="primary" plain hairline size="small">去提问</van-button>
      </div>
    </div>
    <div class="after"></div>

    <div class="goodmain">
      <van-tabs>
        <van-tab v-for="item of goodslist" :key="item.type" :title="item.type">
          <div v-for="(url,index) of item.url" :key="index">
            <img :src="url" alt />
          </div>
        </van-tab>
      </van-tabs>
      <!-- <ul class="type-box">
        <li v-for="item of goodslist" :key="item.type" class="type" >{{item.type}}</li>
      </ul>-->
    </div>
    <GoodsFooter></GoodsFooter>
  </div>
</template>

<script>
import BusHeader from "../components/busheader.vue";
import GoodsFooter from "../components/goodsfooter.vue";
// import { log } from "util";
// import GoodsSwiper from '../components/goodsswiper.vue'
export default {
  name: "goods",
  components: {
    GoodsFooter,
    BusHeader
  },
  data() {
    return {
      data: {},
      date: [
        { time: "09-07", price: "€99.00起" },
        { time: "09-15", price: "€99.00起" },
        { time: "09-21", price: "€99.00起" },
        { time: "更多", price: "团购" }
      ],
      goodslist: [
        {
          type: "行程安排",
          url: [
            "/img/aaa.png",
            "/img/aaa-1.png",
            "/img/aaa-2.png",
            "/img/aaa-3.png",
            "/img/aaa-4.png",
            "/img/aaa-5.png",
            "/img/aaa-6.png",
            "/img/aaa-7.png",
            "/img/aaa-8.png"
          ]
        },
        {
          type: "费用说明",
          url: ["/img/bbb.png"]
        },
        {
          type: "报名须知",
          url: [
            "/img/ccc.png",
            "/img/ccc-1.png",
            "/img/ccc-2.png",
            "/img/ccc-3.png"
          ]
        },
        {
          type: "如何参团",
          url: ["/img/ddd.png"]
        }
      ]
    };
  },
  methods: {
    // 子组件向父组件触发事件，父组件接收@aaa="jump"
    // jump() {
    //   this.$router.push({ name: "save" });
    // }
  },

  async created() {
    let url = this.$route.query.url;
    // console.log(url);
    let urlQuery = url.split("?")[0];
    // console.log(urlQuery);

    let { _id } = this.$route.query;
    // console.log(_id);

    let {
      data: { data }
    } = await this.$axios.get(`${urlQuery}/${_id}`);
    data[0].src = data[0].src.map(url => {
      return `/img/${url}`;
    });
    this.data = data[0];
    // console.log(this.data);
  }
  // 路由组件守卫
  // beforeRouteEnter(to, from, next) {
  //   console.log(from);
  //   next();
  // }
};
</script>

<style scoped>
.swiperBox {
  width: 375px;
  height: 200px;
  background: #ccc;
  position: relative;
}

.van-swipe-item .img {
  width: 295px;
  height: 200px;
  background: pink;
  margin-left: 40px;
}
.img img {
  width: 295px;
  height: 200px;
}
.swiperBox p {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 375px;
  height: 30px;
  z-index: 2;
}
.span1,
.span2 {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: antiquewhite;
}
.span1 {
  float: left;
  margin-left: 15px;
}
.span2 {
  float: right;
  margin-right: 15px;
}
.product {
  width: 355px;
  height: 122px;
}
.productBox {
  position: absolute;
  top: 240px;
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 355px;
  height: 122px;
  padding: 10px;
  z-index: 2;
}
.tit-bar {
  width: 351px;
  height: 85px;
  font-size: 16px;
  overflow: hidden;
}
.bst-bar {
  margin-top: 10px;
}
.bst-bar span:nth-child(1) {
  color: orange;
  font-size: 18px;
}
.bst-bar span:nth-child(2) {
  color: #333;
  font-size: 14px;
  text-decoration: line-through;
  margin: 0 50px 0 10px;
}
.bst-bar span:nth-child(3) {
  color: #333;
  font-size: 14px;
  margin: 0 30px 0 10px;
}
.bst-bar span:nth-child(4) {
  color: #333;
  font-size: 14px;
  /* margin: 0 20px; */
}
.before {
  height: 10px;
  background: #ccc;
  margin-bottom: 0;
}
.date-class {
  width: 351px;
  height: 20px;
  font-size: 14px;
  margin: 0;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}
.date-box ul {
  overflow: hidden;
  margin: 6px;
  margin-left: 12px;
  margin-bottom: 10px;
}
.date-box span {
  display: block;
  font-size: 12px;
  text-align: center;
}
.date-box li {
  float: left;
  border: 1px solid #ccc;
  width: 88px;
  height: 31px;
  padding: 6px 0;
  margin-right: 6px;
}
.date-box ul li:nth-child(4) {
  width: 28px;
  height: 31px;
  padding: 6px 15px;
}
.date-box ul li:nth-child(4) span {
  color: #58bc58;
}
.spanDate {
  color: orange;
}
.after {
  height: 10px;
  background: #ccc;
}
.qa span {
  font-size: 14px;
}
.qa1 {
  margin: 10px 0;
  width: 351px;
  height: 19px;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}
.qa2 {
  width: 325px;
  height: 48px;
  padding: 0px 12.5px;
}
.youke {
  float: left;
}
.answerdata {
  float: right;
}
.answer {
  margin-right: 140px;
}
/* .van-tabs {
  margin-bottom: 55px;
} */
.type-box {
  width: 375px;
  overflow: hidden;
  display: flex;
}
.type {
  flex: 1;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
</style>