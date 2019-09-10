<template>
  <div id="bus">
    <BusHeader></BusHeader>
    <BusSearch></BusSearch>
    <BusSwiper></BusSwiper>
    <BusXiOu></BusXiOu>
    <BusNanOu></BusNanOu>
    <BusDongOu></BusDongOu>
  </div>
</template>

<script>
import BusHeader from "../components/busheader.vue";
import BusSearch from "../components/bussearch.vue";
import BusSwiper from "../components/busswiper.vue";
import BusXiOu from "../components/busxiou.vue";
import BusNanOu from "../components/busnanou.vue";
import BusDongOu from "../components/busdongou.vue";

export default {
  data() {
    return {
      data: {},
      bus: {},
      southEurope: {},
      eastEurope: {},
      westEurope: {}
    };
  },
  components: {
    BusHeader,
    BusSearch,
    BusSwiper,
    BusXiOu,
    BusNanOu,
    BusDongOu
  },
  methods: {
    getDataMock(url) {
      this.$axios
        .get(url)
        .then(response => {
          // console.log(response);

          //请求成功
          let {
            data: { data }
          } = response;

          this.data = data;
          // console.log(this.data);

          this.bus = this.data.listSwiper;
          // console.log(this.bus);
          // this.southEurope = this.data.southEurope;
          // this.westEurope = this.data.westEurope;
          // this.eastEurope = this.data.eastEurope;
          this.$store.commit("getDataBase", data);
        })
        .catch(function(error) {
          //请求失败
        });
    }
  },
  created() {
    this.getDataMock(
      // "https://www.easy-mock.com/mock/5d6d17457d13025d9f04c61f/example/youyoulvxing",
    );
  },
  mounted() {}
};
</script>

<style scoped>
#list {
  overflow: hidden;
}
</style>