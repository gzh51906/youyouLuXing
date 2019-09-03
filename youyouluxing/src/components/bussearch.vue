<template>
  <div class="search">
    <van-search
      v-model="value"
      placeholder="搜索大巴游"
      @search="onSearch"
      left-icon="false"
      right-icon="search"
      @click="onSearch"
    ></van-search>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch() {},
  },
};
</script>

<style scoped>
.search {
  border-top: 1px solid #000;
}
img {
  width: 100px;
  height: 100px;
}
</style>