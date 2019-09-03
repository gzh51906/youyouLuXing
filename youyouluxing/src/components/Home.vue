<template>
    <div class='home'>
        <!-- 头部 logo -->
        <van-row type="flex" justify="space-between" align='center' class="header">
            <van-col span="6">span: 6</van-col>
            <van-col span="2">
                <van-icon name="friends-o" size='20px' color='#1989fa' /></van-col>
        </van-row>
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" :height='175'>
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <!-- 搜索弹出框 -->
        <div class="ejectbox">
            <van-row type="flex" align='center' class='searchbox'>
                <van-col span="6">
                    <van-button type="primary" @click="showPopup" class="eject">
                        {{active}}
                           <van-icon name="arrow-down" size='7px'/>
                    </van-button>
                    <van-popup v-model="show">
                        <van-col span="6" v-for='item in showContent' :key='item' :class='{active:active===item}' @click='changeActive(item)'>{{item}}</van-col>
                    </van-popup>
                </van-col>
                <van-col span="14">
                    <input type="text"  class='search'>
                </van-col>
                <van-col span="2" class='searchicon'>
                    <van-icon name="search" size='21px'/>
                </van-col>
            </van-row>

        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      active: "大巴游",
      showContent: ["大巴游", "邮轮", "度假", "门票", "活动"]
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    changeActive(item) {
      if (item) {
        console.log(item);

        this.active = item;
        console.log(this.active);
      }
      this.show = false;
    }
  }
};
</script>
<style  scoped>
.home {
  background: #f3f3f3;
}
.header {
  height: 53px;
}
.ejectbox {
  padding: 11px 0 11px 19px;
}
.searchbox>div{
    height:41px;
}
.eject {
      background: #ffffff;
  border: none;
  color: #000000;
  height:41px;
  width: 100%
}
.active {
  color: red;
}
.search{
    width:100%;
    height:100%;
    outline:none;
    border:none;
    padding: 0 19px;
box-sizing: border-box
}
.searchicon{
  background: #ffffff;
line-height: 41px;
}
</style>


