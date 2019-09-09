<template>
    <div class="help">
        <Helptitle v-slot>帮助中心</Helptitle>
        <div class="query">
            <div v-for="item in con" :key='item.title' class="querybox">
                <div class="querytitle">{{item.title}}</div>
                <van-row type="flex" class="queryone" justify="space-between" align='center' v-for="items in item.content" :key='items'>
                    <van-col>{{items}}</van-col>
                    <van-icon name="arrow" />
                </van-row>
                <div class="more">查看更多</div>
            </div>
        </div>
        <div class="querytitle updataquery">取消和修改条例</div>
        <div class="kong"></div>
    </div>

</template>
<script>
import Helptitle from "./Helptitle.vue";
export default {
  components: {
    Helptitle
  },
  data() {
    return {
      con: [
        {
          title: "预定问题",
          content: [
            "实体门票如何领取？",
            "如何领取电子门票？",
            "可否提供办理签字的旅行证明？"
          ]
        },
        {
          title: "财务相关",
          content: [
            "手机端如何使用VISA和Master银行卡付款？",
            "在电脑上如何使用VISA和Master银行卡付款？",
            "关于退款的规定？"
          ]
        },
        {
          title: "签订合同",
          content: [
            "定金支付比例如何？",
            "本地游客如何付款？",
            "对于支付团队的建议？"
          ]
        },
        {
          title: "其他问题",
          content: ["如何办理护照？", "行程中常见的问题？", "单房差是什么？"]
        },
        {
          title: "游客中心",
          content: ["能不能脱团自己玩？", "合同的签订？", "证明参考样本？"]
        }
      ]
    };
  }
};
</script>
<style scoped>
.help {
  background: #f3f3f3;
}
.querybox {
  background: #ffffff;
  margin: 10px 0;
}
.querytitle {
  height: 50px;
  line-height: 50px;
  color: rgb(142, 223, 248);
  padding: 0 10px;
  border-bottom: 1px solid #f3f3f3;
}
.queryone {
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #f3f3f3;
  font-size: 14px;
}
.more {
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  color: #cccccc;
  text-align: center;
}
.query {
  margin-bottom: 20px;
}
.updataquery {
  background: #ffffff;
}
.kong {
  height: 30px;
}
</style>


