<template>
  <div class="main">
    <scroll
      class="wrapper"
      ref="scroll"
      :probeType="3"
      @scroll="display"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <div v-for="item of data" :key="item._id" class="main1" @click="handleMainClick(item._id)">
        <div class="pic">
          <img :src="(item.src)[0]" alt @load="loadImg" />
        </div>
        <div class="details">
          <div class="details1">
            <span>{{item.title}}</span>
          </div>
          <div class="btn-Box">
            <van-button
              round
              plain
              hairline
              color="orange"
              size="mini"
              v-if="item.attr!=null"
              :text="item.attr"
            ></van-button>
            <van-button
              round
              plain
              hairline
              color="orange"
              size="mini"
              v-if="item.attr1!=null"
            >{{item.attr1}}</van-button>
          </div>
          <div class="p-box">
            <span class="attr">{{item.attr}}</span>
            <span class="attr1">{{item.sales}}</span>
            <span class="p">
              <b>{{item.price}}</b>
              <i>起</i>
            </span>
          </div>
        </div>
      </div>
    </scroll>

    <div class="morefooter">
      <div class="footer">
        <div>
          <van-icon name="location-o" />
          <span>目的地</span>
        </div>
        <div class="ranking">
          <van-dropdown-menu direction="up">
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
        </div>
        <div>
          <van-icon name="filter-o" />
          <span>筛选</span>
        </div>
      </div>
      <van-dropdown-menu
        direction="up"
        style="width:125px;height:45px;"
        active-color="orange"
        color="red"
        text="aaa"
      >
        <van-dropdown-item
          v-model="value2"
          :options="option2"
          style="color:#fff"
          @click.native="seleteRank(url)"
        />
      </van-dropdown-menu>
    </div>
    <BackTop @click.native="backTo" v-show="isShow"></BackTop>
  </div>
</template>

<script>
import Scroll from "./scroll/scroll.vue";
import BackTop from "./backTop/backTop.vue";
import { clearTimeout, setTimeout } from "timers";
export default {
  name: "moremain",
  components: { Scroll, BackTop },
  props: ["url"],
  data() {
    return {
      data: [],
      value2: "a",
      isShow: false,
      option2: [
        { text: "综合排序", value: "a" },
        { text: "价格由高到低", value: "b" },
        { text: "价格由低到高", value: "c" },
        { text: "销量优先", value: "d" },
        { text: "人气推荐", value: "e" }
      ],
      skip: 0,
      limit: "limit=20",
      queryUrl: "",
      num: 0
    };
  },
  methods: {
    // 渲染页面的方法
    async render(url) {
      let {
        data: { data }
      } = await this.$axios.get(url);
      let data1;
      data1 = data.map(item => {
        let src = item.src.map(url => {
          url = "/img/" + url;
          return url;
        });
        item.src = src;
        return item;
      });
      // console.log(data1);

      this.data.push(...data1);
      // console.log(this.data);
    },

    handleMainClick(_id) {
      this.$router.push({ name: "goods", query: { _id: _id, url: this.url } });
    },
    seleteRank() {
      let url = `${this.url}?sort=price&asc=true`;
      this.render(url);
    },

    backTo() {
      // console.log(this.$refs.scroll);
      // console.log(this.$refs.scroll.aa);
      // 调用实例里的方法
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },

    // 监听better-scroll页面的垂直位置, 设置返回顶部按钮的隐藏和显示
    display(position) {
      // console.log(-position.y);
      this.isShow = -position.y > 1000 ? true : false;
    },

    // 监听底部加载更多
    loadMore() {
      // this.skip++;
      this.skip += 1;
      // console.log(this.skip);

      this.queryUrl = `${this.queryUrl}${this.skip}`;
      this.render(this.queryUrl);

      // console.log(this.queryUrl);

      this.$refs.scroll.finishPullUp();
    },

    loadImg() {
      // 虽然可以执行，但每张图片加载成功都执行一次，性能较差，所以需要防抖
      this.$refs.scroll.refresh();
      // this.dubounce(this.$refs.scroll.refresh); ? 不懂
    },

    //防抖函数
    dubounce(func, delay = 1000) {
      let timer = null;
      return function(...args) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    }
  },
  created() {
    // console.log(this.url);
    // let { url } = this.$route.query;
    // this.url = url;
    // console.log(this.url);
    console.log(this.url);

    this.render(this.url);

    let url = this.url.split("?")[0];
    // console.log(url);

    this.queryUrl = `${url}?${this.limit}&skip=`;
    // console.log(this.queryUrl);
  }
};
</script>

<style scoped>
.main {
  margin-top: 50px;
  width: 375px;
  position: relative;
  height: calc(100vh - 50px);
}
.main1 {
  width: 375px;
  height: 106px;
  border-bottom: 1px solid #ccc;
}
.pic {
  margin-top: 10px;
  margin-left: 10px;
  width: 110px;
  height: 75px;
  float: left;
}
.pic img {
  width: 100%;
  height: 100%;
}
.details {
  margin-top: 10px;
  float: left;
  width: 227px;
  height: 75px;
  padding-left: 7.5px;
}

.details1 span {
  display: block;
  width: 100%;
  height: 34px;
  font-size: 12px;
  overflow: hidden;
}
.btn-Box {
  height: 25px;
}
.btn-Box .van-button {
  /* max-width: 30px !important; */
  height: 18px !important;
  font-size: 8px;
}
.p-box {
  width: 227px;
  height: 20px;
  margin-top: 2px;
}
.attr,
.attr1 {
  color: #999;
  font-size: 12px;
}
.attr1 {
  margin-left: 10px;
}
.p {
  float: right;
}
.p b {
  color: orange;
  font-size: 18px;
  font-weight: normal;
  margin-right: 5px;
}
.p i {
  color: #999;
  font-style: normal;
}
* {
  margin: 0;
  padding: 0;
}
.morefooter {
  width: 375px;
  position: fixed;
  top: 767px;
  z-index: 2;
  height: 45px;
}
.footer {
  display: flex;
  height: 45px;
}
.footer div {
  height: 45px;
  font-size: 14px;
  flex: 1;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #2e343b;
  color: #fff;
}
.footer div .van-icon {
  margin-top: 5px;
  margin-bottom: 2px;
}
.van-dropdown-menu {
  position: absolute;
  top: 0;
  left: 125px;
}
.wrapper {
  width: 375px;
  height: calc(100% - 40px);
  /* background: pink; */
  overflow: hidden;
}
</style>