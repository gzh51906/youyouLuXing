<template>
  <div class="footer">
    <van-grid>
      <van-grid-item
        v-for="(item ,index) of menu"
        :key="item.name"
        :icon="item.icon"
        :text="item.name"
        :v-model="index"
        @click="handleItemClick(index)"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: "首页",
          icon: "wap-home"
        },
        {
          name: "帮助",
          icon: "question-o"
        },
        {
          name: "客服电话",
          icon: "phone-o"
        },
        {
          name: "返回顶部",
          icon: "upgrade"
        }
      ]
    };
  },
  methods: {
    handleItemClick(index) {
      if(index==3){
          window.scrollTo(0,0);  
      }
    }
  }
};
</script>

<style scoped>
</style>