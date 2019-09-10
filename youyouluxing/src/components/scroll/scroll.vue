<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 使用此组件时，必须给wrapper设置高度和overflow: hidden

import BScroll from "better-scroll";
export default {
  name: "scroll",
  // 接收外部传来的 probeType和pullUpLoad 值，来决定是否监听position和pullUpLoad
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return { scroll: null, aa: 12 };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    });

    // 获取实时位置 (包括惯性拖动)
    this.scroll.on("scroll", position => {
      // console.log(position.y);
      this.$emit("scroll", position); //通过自定义事件，让需要接收position的组件，触发该事件
    });

    // 当完成一次拖动加载后，加载更多 需调用finishPullUp()
    this.scroll.on("pullingUp", () => {
      // console.log("pullingUp");
      this.$emit("pullingUp");

      setTimeout(() => {
        this.scroll.finishPullUp();
      }, 5000);
    });

    // 这步非常重要，当this.scroll，加载完成后，再重新计算可以滚动的高度，慎防图片加载慢，而造成滚动高度的偏差
    // 解决方案：方法1: 通过在main.js中注册, 事件总线$bus, Vue.prototype.$bus = new Vue(); 即: 通过给vue实例
    //                 添加$bus的方法, 使$bus可以监听vue中的事件;
    //                 在发送事件的组件中，this.$bus.$emit('事件名', 参数); 在接收事件的组件中,
    //                 this.$bus.$on('事件名',()=>{ 为所欲为  });

    //          方法2: 在每张图片外，添加一个div，并且div高度等于img的高度

    this.scroll.refresh();
  },
  methods: {
    scrollTo(x, y, time = 500) {
      // new BScroll实例中有一个scrollTo的方法
      // console.log(y);

      this.scroll && this.scroll.scrollTo(x, y, time);
    },

    finishPullUp() {
      this.scroll.finishPullUp();
    },

    refresh() {
      this.scroll && this.scroll.refresh();
      console.log("refresh");
    }
  }
};
</script>

<style scoped>
/* .wrapper {
  width: 375px;
  height: 500px;
  background: pink;
  overflow: hidden;
} */
</style>

