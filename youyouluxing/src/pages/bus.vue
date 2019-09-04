<template>
  <div id="bus">
    <BusHeader></BusHeader>
    <BusSearch></BusSearch>
    <BusSwiper></BusSwiper>
    <BusMain></BusMain>
    <BusMain></BusMain>
    <BusMain></BusMain>
  </div>
</template>

<script>
import BusHeader from "../components/busheader.vue";
import BusSearch from "../components/bussearch.vue";
import BusSwiper from "../components/busswiper.vue";
import BusMain from "../components/busmain.vue";

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
    BusMain
  },
  methods: {},
  created() {
    this.$axios
      .get(
        "https://www.easy-mock.com/mock/5d6d17457d13025d9f04c61f/example/youyoulvxing"
      )
      .then(response => {
        //请求成功
        let {
          data: { data }
        } = response;

        this.data = data;
        this.bus = this.data.listSwiper;
        // console.log(this.bus);
        this.southEurope = this.data.southEurope;
        this.westEurope = this.data.westEurope;
        this.eastEurope = this.data.eastEurope;
        this.$store.commit("getDataBase", data);
      })
      .catch(function(error) {
        //请求失败
      });
  },
  mounted() {}
};
</script>

<style scoped>
#list {
  overflow: hidden;
}
</style>