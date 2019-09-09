<template>
  <div class="divClass">
    <h3>
      <span>西欧</span>
    </h3>
    <van-row>
      <van-col
        span="12"
        v-for="item of data"
        :key="item._id"
        class="item"
        @click="handleItemClick(item._id)"
      >
        <img :src="(item.src)[0]" alt class="we" />
        <p class="title1">{{item.title}}</p>
        <p class="price1">{{item.price}} 起</p>
      </van-col>
    </van-row>
    <van-button size="small" type="warning" plain @click="handleBtnClick(url)">查看更多</van-button>
  </div>
</template>

<script>
import { log } from "util";
// <img src="../static/img/0a97aaffe31d317db2fc3ee34a0f9291_220x150.jpg" alt="">

// <img src="../assets/img/53ad57f682c098676357ebc1cb410ddc_220x150.jpg" alt />;

export default {
  name: "busmain",
  data() {
    return {
      data: {},
      url: "http://localhost:3003/xiougoods?limit=20"
    };
  },
  computed: {},
  methods: {
    handleItemClick(_id) {
      // console.log(_id);

      this.$router.push({ name: "goods", query: { _id: _id, url: this.url } });
    },

    handleBtnClick(url) {
      // console.log(this.url);

      this.$router.push({ name: "more", query: { url: this.url } });
      // this.$store.commit("addXiOuDataUrl", this.url);
    },

    getData(url) {
      this.$axios
        .get(url)
        .then(response => {
          // 请求成功
          let {
            data: { data }
          } = response;
          // console.log(data);

          let data1;
          data1 = data.map(item => {
            let src = item.src.map(url => {
              url = "/img/" + url;
              return url;
            });
            item.src = src;
            return item;
          });
          // let data2 = data1.slice(0, 4);

          this.data = data1;
          // console.log(this.data);
        })
        .catch(function(error) {
          //请求失败
        });
    }
  },

  created() {
    this.getData("http://localhost:3003/xiougoods?limit=4");
  }
};
</script>

<style scoped>
.divClass {
  width: 375px;
  margin-top: 10px;
}
h3 {
  width: 100%;
  font-weight: normal;
  height: 45px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  margin: 0;
  line-height: 45px;
}
h3 span {
  font-size: 18px;
  margin-left: 15px;
}
.van-row {
  width: 360px;
  padding: 7.5px 0 7.5px 7.5px;
  margin-left: 7px;
  overflow: hidden;
}
.we {
  width: 165px !important;
  height: 123px !important;
}
.title1 {
  width: 165px;
  height: 31px;
  font-size: 12px;
  overflow: hidden;
}
.price {
  font-size: 12px;
}
.van-button {
  margin-left: 147px;
}
</style>