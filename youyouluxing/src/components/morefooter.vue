<template>
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
        @click.native="seleteRank(url,22222)"
      />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  name: "morefooter",
  data() {
    return {
      value2: "a",
      option2: [
        { text: "综合排序", value: "a" },
        { text: "价格由高到低", value: "b" },
        { text: "价格由低到高", value: "c" },
        { text: "销量优先", value: "d" },
        { text: "人气推荐", value: "e" }
      ]
    };
  },
  methods: {
    seleteRank() {
      // console.log(this.url);
      // this.$store.commit("addDataUrl",this.url)
    }
  },
  created() {
    // console.log(this.url);
  }
};
</script>

<style scoped>
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
  /* background: #2e343b; */
  /* color: #fff; */
}
</style>