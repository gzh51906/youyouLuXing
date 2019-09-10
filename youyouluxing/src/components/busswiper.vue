<template>
  <div class="swiperBox">
    <p class="p1">
      <span>大巴旅游推荐</span>
    </p>
    <van-swipe indicator-color="red" :autoplay="3000" :height="136">
      <van-swipe-item v-for="item of swiper" :key="item.gid">
        <div class="imgBox">
          <img :src="item.imgurl" alt />
        </div>
        <div class="details">
          <p class="title" style="border-bottom:none">{{item.title}}</p>
          <p class="button">
            <van-button plain type="warning" size="mini" round>{{item.class}}</van-button>
            <van-button plain type="warning" size="mini" round>{{item.data}}</van-button>
          </p>
          <p class="price">
            <b :style="`display:${item.price}=='电询'?'none':'block'`">€</b>
            {{item.price}}
          </p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "busswiper",
  data() {
    return {
      // listSwiper: []
      swiper: [
        {
          imgurl:
            "https://www.yoyoer.com/uploads/2018/1214/caa1565db87e4b37b1fe2e8c754e8c6e_312x212.jpeg",
          title:
            "【圣米歇尔山B线2日】单人仅售99欧元/人！9月14日和9月28日确认发，其他团期火热报名中，多团期任选！原价145欧元的法国海滨经典周末休闲游，莫奈花园--象鼻山--圣马洛--圣米歇尔山！追随印象派大师的步伐，一起去诺曼底看奇迹吧！",
          class: "有货",
          data: "大巴团",
          price: "99.00"
        },
        {
          imgurl:
            "https://www.yoyoer.com/uploads/2019/0517/9f29c2d204d2c133e6e884ec74896357_312x212.jpg",
          title:
            "【穷游一日-威斯特拉姆扇贝节】10月19铁发，10月20日铁发，一年一度威斯特拉姆扇贝节&剑滩一日，仅15欧起/人（已含司导小费）！原价75欧！一起去Ouistreham品尝新鲜扇贝与海产，去Sword Beach感受诺曼底登陆战况与海岸实景！",
          class: "春假",
          data: "大巴团",
          price: "19.00"
        },
        {
          imgurl:
            "https://www.yoyoer.com/uploads/2018/1217/529628a16e8d4d3abf35180af1778f81_312x212.jpg",
          title:
            "【全新瑞意7日(五渔村)】巴黎出发，每人仅售469欧起！10月19日铁发，多团期可选！法国瑞士意大利(五渔村)7日深度精华游！日内瓦，勃朗峰，罗马，威尼斯，五渔村！七日带您畅游瑞意！",
          class: "春假",
          data: "大巴团",
          price: "469.00"
        },
        {
          imgurl:
            "https://www.yoyoer.com/uploads/2019/0308/7f053f72b83d288bc7a10c5aa87f2ea0_312x212.png",
          title:
            "【【休闲新线-霞慕尼雪山温泉3日】巴黎出发包拼房！11月9日（铁发），阿尔卑斯山的阳台-最美小镇安纳西，冒险者的天堂霞慕尼小镇，冻结时间的冰海冰洞，瑞士温泉疗养！",
          class: "大巴团",
          data: "温泉游",
          price: "199.00"
        }
      ]
    };
  },
  created() {},
  computed: {
    swiper() {
      // return this.$store.state.bus.listSwiper;
    }
  }
};
</script>
<style scoped>
.swiperBox {
  margin-top: 10px;
  width: 375px;
  overflow: hidden;
}
.van-swipe {
  padding: 15px;
  box-sizing: border-box;
}
.p1 {
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 0;
}
.p1 span {
  font-size: 16px;
  padding-left: 15px;
}
.imgBox {
  float: left;
  width: 156px;
  height: 106px;
}
.button,
.title {
  margin-top: 0;
}
.details {
  float: left;
  margin-left: 10px;
  width: 178px;
}
img {
  width: 156px;
}
.title {
  width: 178px;
  height: 40px;
  overflow: hidden;
  font-size: 14px;
  margin-bottom: 10px;
}
.button {
  margin-bottom: 10px;
}
.price {
  margin: 0;
  font-size: 14px;
}
</style>
