<template>
  <div class="backTop">
    <span>
      <van-icon name="upgrade" size="20px" color="#fff" />
    </span>
  </div>
</template>

<script>
export default {
  name: "backTop"
};
</script>

<style scoped>
.backTop {
  width: 50px;
  height: 50px;
  border: 1px solid #fff;
  background: red;
  border-radius: 50%;
  z-index: 10;
  position: fixed;
  bottom: 80px;
  right: 20px;
  text-align: center;
}
.van-icon {
  /* vertical-align: middle; */
  margin-top: 12px;
}
</style>