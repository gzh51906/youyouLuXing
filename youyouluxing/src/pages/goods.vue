<template>
  <div></div>
</template>

<script>
export default {
  name: "goods",
  data() {
    return { data: {} };
  },
  methods: {
    getDetails(id) {
      console.log(23);

      console.log(typeof this.data);

      for (item in this.data) {
        console.log(item);
      }
    }
  },
  created() {
    let { id } = this.$route.params;
    // console.log(id);

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
        // console.log(this.data);
        this.getDetails(id);
      })
      .catch(function(error) {
        //请求失败
      });
  }
};
</script>

<style scoped>
</style>