<template>
  <div class="bookingmain">
    <div class="title1">
      <div class="tit1">
        <span>套餐类型</span>
      </div>
      <div class="tit2">
        <ul>
          <li
            v-for="(item,index) of tit2"
            :key="item.num"
            @click="handleLiClick(item,index)"
            ref="li"
          >
            <span>
              {{item.num}}
              <span>{{item.price}}</span>欧/人
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="after"></div>
    <van-datetime-picker type="date" />
    <div class="after"></div>
    <div class="many">
      <div class="num">
        <span>数量</span>
      </div>
      <div class="pr">
        <div class="people">
          <span>成人</span>
          <van-stepper v-model="value1" input-width="29px" button-size="28px" integer />
        </div>
        <div class="room">
          <span>单房差</span>
          <van-icon name="warning-o" color="#58bc58" size="14px" />
          <span class="oy">€</span>
          <span class="cj">35</span>
          <span class="man">/人</span>
          <van-stepper v-model="value2" input-width="29px" button-size="28px" integer min="0" />
        </div>
      </div>
    </div>
    <div class="imgBox">
      <img :src="imgurl" alt />
    </div>
    <BookingFooter :totalPrice="totalPrice" :num="value1" :sub="sub" :number="value2"></BookingFooter>
  </div>
</template>

<script>
import BookingFooter from "../components/bookingfooter.vue";

export default {
  name: "bookingmain",
  components: { BookingFooter },
  data() {
    return {
      imgurl: "/img/goodsmain.png",
      sub: 0,
      value1: 1,
      value2: 0,
      data: {},
      // disabled: true,
      active: 0,
      active1: 1,
      tit2: [
        {
          num: "前20单",
          price: 89
        },
        {
          num: "第21单起",
          price: 99
        }
      ],
      price: 0,
      totalPrice: 0
    };
  },
  methods: {
    handleLiClick(item, index) {
      let { li } = this.$refs;
      // console.log(li[index]);

      if (index == this.active || index == this.active1) {
        li[index].className = li[index].className === "active" ? "" : "active";
      }
      if (li[index].className === "active") {
        this.totalPrice = item.price;
        this.sub = 35;
        // this.disabled = false;
      } else {
        this.totalPrice = 0;
        // this.disabled = true;
      }
    }
  },
  computed: {
    getTotalPrice() {
      this.price * this.value1;
    }
  }
};
</script>

<style scoped>
.bookingmain {
  overflow: hidden;
}
.title1 {
  margin-top: 55px;
  overflow: hidden;
  margin-bottom: 5px;
}
.tit1 {
  width: 350px;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}
.tit2 {
  width: 363px;
  padding: 6px;
}
.tit2 li {
  float: left;
  font-size: 11px;
  width: 90px;
  height: 15px;
  padding: 9px;
  padding-left: 15px;
  margin: 5px;
  border: 1px solid #58bc58;
  color: #58bc58;
}
.after {
  width: 375px;
  height: 10px;
  background: #ccc;
}
.many {
  width: 375px;
  height: 136px;
}
.num {
  width: 351px;
  height: 19px;
  padding: 12px;
}
.num span {
  font-size: 14px;
}
.pr {
  width: 363px;
  height: 80px;
  padding: 6px;
}
.people,
.room {
  width: 351px;
  height: 28px;
  padding: 6px;
  font-size: 16px;
}
.van-stepper {
  float: right;
}
.imgBox {
  background: #f3f3f3;
  margin-bottom: 50px;
}
.imgBox img {
  width: 350px;
  height: 290px;
  padding: 12px;
}
.van-icon {
  margin-left: 10px;
}
.oy,
.cj,
.man {
  font-size: 14px;
  color: #333;
}
.oy {
  margin-left: 100px;
}
.cj {
  margin: 0 3px;
}
.active {
  background: #58bc58;
  color: #fff !important;
}
</style>