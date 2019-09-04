<template>
  <div class="divClass">
    <h3>
      <span>东欧</span>
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
    <van-button size="small" type="warning" plain>查看更多</van-button>
  </div>
</template>

<script>
// <img src="../assets/img/53ad57f682c098676357ebc1cb410ddc_220x150.jpg" alt />;

export default {
  name: "busmain",
  data() {
    return { data: {} };
  },
  computed: {},
  methods: {
    handleItemClick(_id) {
      // console.log(_id);

      this.$router.push({ name: "goods", query: { _id: _id } });
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
          this.data = data.slice(0, 4);
        //   console.log(this.data);

          // data = data.map(item => {
          //   item.src[0] = require("../assets" +
          //     item.src[0].replace("../assets", ""));
          //   return item;
          // });
          // console.log(data);

          // this.$store.commit("getDataBase", data);
        })
        .catch(function(error) {
          //请求失败
        });
    }
  },

  created() {
    this.getData("http://localhost:3003/dongougoods");
  }
};
</script>

<style scoped>
.divClass {
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
  padding: 7.5px;
  margin-left: 8px;
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