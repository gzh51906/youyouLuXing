<template>
    <div class='home'>
        <!-- 头部 logo -->
        <van-row type="flex" justify="space-between" align='center' class="header">
            <van-col span="6" offset='1'>
                <img :src="logourl" alt="" class="logo">
            </van-col>
            <van-col span="2">
             
                  <van-icon name="friends-o" size='20px' color='#1989fa' @click="tomine"/>
              
                </van-col>
        </van-row>
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" :height='175'>
            <van-swipe-item v-for='item in banner' :key='item'>
              <img :src="item" alt="" width="100%">
            </van-swipe-item>
        </van-swipe>
        <!-- 搜索弹出框 -->
        <div class="ejectbox">
            <van-row type="flex" align='center' class='searchbox'>
                <van-col span="6">
                    <van-button type="primary" @click="showPopup" class="eject">
                        {{active}}                     
                        <van-icon  name="arrow-down" size='7px' class="eject-icon"/>
                        <span class="eject-line"></span>
                  </van-button>
                    <!-- 弹出 -->
                    <van-popup v-model="show" class="showbox">
                        <van-col span="24" class="showbox-list" v-for='item in showContent' :key='item' :class='{active:active===item}' @click='changeActive(item)'>{{item}}</van-col>
                    </van-popup>
                </van-col>
                <van-col span="14">
                    <input type="text"  class='search' placeholder="穷游">
                </van-col>
                <van-col span="2" class='searchicon'>
                    <van-icon name="search" size='21px'/>
                </van-col>
            </van-row>

        </div>
         <!-- 跳转详情页图标 -->
    
        <div class="detailbox">
            <van-row type="flex" justify="space-around" class="detailicon">
              <van-col span="4" v-for='item in detailone' :key='item.text' class="detailcon-div" @click="tobus">
                  <img :src="item.img" alt="" class="imgicon">
                 <div class="texticon"> {{item.text}}</div>
              </van-col>
             
            </van-row>
             <van-row type="flex" justify="space-around" class="detailicon" >
              <van-col span="4" v-for='item in detailtwo' :key='item.text' class="detailcon-div" @click="tobus">
                  <img :src="item.img" alt="" class="imgicon">
                 <div class="texticon"> {{item.text}}</div>
              </van-col>
             
            </van-row>
        </div>
       
        <!-- 特价优惠 -->
        <div >
            <h3 class="title-name">
              <span class="line"></span>
              <span>特价优惠</span>
              </h3>
            <div>           
                <van-row type="flex" justify="center" class="youhui">
                  <van-col span="12">
                    <img :src="tejiaimg[0]" alt="" class="">
                  </van-col>
                  <van-col span="12">
                    <div><img :src="tejiaimg[1]" alt=""></div>
                    <div><img :src="tejiaimg[2]" alt=""></div>
                  </van-col>
                </van-row>
            </div>
        </div>
        <!-- 大巴游等 -->
        <div class="goodsbox">
          <div v-for='item in goodsname' :key='item' class="goods-listbox">
            <div v-if='item!="活动"'>
              <h3 class="title-name">
                <span class="line"></span>
                <span>{{item}}</span>
                </h3>
             <van-row type="flex" justify="space-around" class="goodslist">
              <van-col span="10"  v-for="goodsitem in goods" :key='goodsitem.gid' v-if='item===goodsitem.type'>
                   <div class="goodsimg-box">
                  <img :src="goodsitem.img" alt="" class="goods-img" />
               </div>
                <p class="goods-con">{{goodsitem.details}}</p>
                <div class="goods-price">
                  <!-- {{goodsitem.price}}
                  {{typeof(goodsitem.price)}} -->
                  <p v-if='typeof(goodsitem.price)==="number"'>€{{goodsitem.price.toFixed(2)}}起</p>
                  <p v-else> {{goodsitem.price}}</p>

                </div>
                
              </van-col>        
            </van-row>
            <div class='morelist'>
              <span @click="morelist(item)">查看更多</span>
            </div>
            </div>
            <div v-else>
              <h3 class="title-name">
                <span class="line"></span>
                <span>{{item}}</span>
                </h3>
              <van-row type="flex" justify="space-around" class="goodslist">
              <van-col span="22"  v-for="goodsitem in goods" :key='goodsitem.gid' v-if='item===goodsitem.type'>
             
                  <img :src="goodsitem.img" alt="" class="goods-img" />
               
                <p class="goods-con">{{goodsitem.details}}</p>
                <div class="goods-price">
                  <!-- {{goodsitem.price}}
                  {{typeof(goodsitem.price)}} -->
                  <p v-if='typeof(goodsitem.price)==="number"'>€{{goodsitem.price.toFixed(2)}}起</p>
                  <p v-else> {{goodsitem.price}}</p>

                </div>
                
              </van-col>    
              
            </van-row>
             <div class='morelist'>
               <span  @click="morelist(item)">查看更多</span>
               
               </div>   
            </div>
             
          </div>
        </div>

        <div class="call">
          <img :src="phoneurl" alt="">
        </div>       
      
    </div>
</template>
<script>
export default {
  data() {
    return {
      logourl:'/img/logo.png',
      goodsname: [],
      phoneurl:'/img/phone-float.png',
      show: false,
      tejiaimg:['/img/index.jpg','/img/index2.jpg','/img/index3.jpg'],
      active: "大巴游",
      showContent: ["大巴游", "邮轮", "度假", "门票", "活动"],
      banner: [
        "/img/856c94190ad678bf9b0d8c6d8a336a82_750x320.jpg",
        "/img/1e4ec352cd5d2ec59c413d62fc66ef14_750x320.jpg",
        "/img/ca692d1a8d9922cb6a1d2f6ed63955db_750x320.jpg",
        "/img/4cb18699a757addaaa1a50a7f14eb3b8_750x320.jpg",
        "/img/b6debc5eb01edd8e18b179b3b4bafda9_750x320.png",
        '/img/f700afc9cdeccaa60e3fdf7e189c970f_750x320.jpg'
      ],
      detailone: [
        {
          img: "/img/menu_ico02.png",
          text: "大巴游"
        },
        {
          img: "/img/menu_ico104.png",
          text: "游轮"
        },
        {
          img: "/img/menu_ico01.png",
          text: "度假"
        },
        {
          img: "/img/menu_ico03.png",
          text: "门票"
        },
        {
          img: "/img/menu_ico08.png",
          text: "私人定制"
        }
      ],
      detailtwo: [
        {
          img: "/img/menu_ico12.png",
          text: "问答"
        },
        {
          img: "/img/menu_no_ico.png",
          text: "专题"
        },
        {
          img: "/img/menu_ico114.png",
          text: "活动"
        },
        {
          img:
            "/img/6b9c1d9ed8cacaabf69c4a4b0cd7d461.png",
          text: "店面导航"
        },
        {
          img: "",
          text: ""
        }
      ],
      goods: [
        {
          gid: "001",
          type: "大巴游",
          name:
            "QY:法国，拥有历史悠久的捕鱼河航海传统； 海滩沙质优良，景色优美，民风朴实，受到大量艺术家和作家的青睐； 豪华漂亮的特色建筑，赌场等娱乐设施齐全； 游览时间充裕，行程舒适轻松，悠闲的在海边享受阳光，海鲜美酒；",
          details:
            "【穷游海滩-多维尔&特鲁维尔1日】仅15欧起/人（已含司导小费）！8月3日铁发、8月4日铁发、8月17日铁发！8月3日8月4日是特鲁维尔海洋鲭鱼节！一起去多维尔Deauville低调奢华的玩耍、欣赏莫奈名画特鲁维尔TROUVILLE海岸实景！",
          price: "电询",
          img:
            "/img/529628a16e8d4d3abf35180af1778f81_330x225.jpg"
        },
        {
          gid: "002",
          type: "大巴游",
          name: "QY:法国，9月7日，9月21日，10月5日，10月19日",
          details:
            "【穷游莫奈花园&奥维1日】巴黎出发！单人仅售15欧起（已含司导小费）！原价75欧的莫奈花园&奥维一日游！参观梵高最后的故居奥维小镇，寻找梵高画中实景！游览莫奈花园！法国历史文化风情等你来体验！",
          price: 15.0,
          img:
            "/img/7f053f72b83d288bc7a10c5aa87f2ea0_330x225.png"
        },
        {
          gid: "003",
          type: "大巴游",
          name:
            "OT 九日纵览东欧六国风光；畅游伏尔塔瓦河上的金色布拉格，多瑙河上的明珠布达佩斯，音乐之都维也纳； 美丽的斯洛伐克首都布拉迪斯拉发，音乐神童莫扎特的故乡萨尔斯堡，水晶之城因斯布鲁克；",
          details:
            "【经典东欧6国9日壮丽情怀之旅C线】巴黎出发，多团期可选。东欧六国九日风情之旅, 金色布拉格、多瑙河上的明珠布达佩斯、音乐之都维也纳、邮票之都列支敦士登、水晶之城因斯布鲁克! ",
          price: 469,
          img:
            "/img/697eb50ca9720205567927a0a330c38c_330x225.jpg"
        },
        {
          gid: "004",
          type: "大巴游",
          name:
            "OT:瑞士，日内瓦，勃朗峰，罗马，威尼斯，梵蒂冈，五渔村，佛罗伦萨，意大利",
          details:
            "【全新瑞意7日(五渔村)】巴黎出发，每人仅售469欧起！多团期可选！法国瑞士意大利(五渔村)7日深度精华游！日内瓦，勃朗峰，罗马，威尼斯，五渔村！七日带您畅游瑞意！",
          price: 15.0,
          img:
            "/img/9f29c2d204d2c133e6e884ec74896357_330x225.jpg"
        },
        {
          gid: "005",
          type: "邮轮",
          name: "地中海方向",
          details:
            "【COSTA幸运号】马赛出港8天7夜，途经巴塞罗那、瓦伦西亚、奇维塔韦基亚、拉斯佩齐亚、热那亚，8天7夜极致浪漫之旅，特价出售，欲购从速！",
          price: 529.0,
          date: "出发时间：2019-09-28",
          img:
            "/img/e021d4b45385a06fc84efeacfd8e3694_330x225.jpg"
        },
        {
          gid: "006",
          type: "邮轮",
          name: "",
          details:
            "【COSTA辉宏号】马赛出发，11天10夜西葡航线，途径马拉加，里斯本，加的斯，巴塞罗那",
          price: 499.0,
          date: "出发时间：2019-10-02",
          img:
            "/img/cd4deea4228dba9479e73abf11be7d5a_330x225.jpg"
        },
        {
          gid: "007",
          type: "邮轮",
          name: "爱琴海方向",
          details:
            "【MSC序曲号】威尼斯出发希腊克罗地亚之旅8天7夜，途径斯普利特，圣托里尼，米克诺斯、杜布罗夫尼克，安科纳饱览希腊克罗地亚，体验极致自然风光的希腊克罗地亚的经典邮轮之旅！",
          price: 799.0,
          date: "出发时间：2019-09-07",
          img:
            "/img/a8acac8456de321ddeac046bde0ee032_330x225.jpg"
        },
        {
          gid: "008",
          type: "邮轮",
          name: "",
          details:
            "【COSTA辉宏号】德国瓦尔内明德出港8天7夜，北欧航线特价邮轮！途径丹麦哥本哈根，饱览挪威峡湾，体验极致自然风光的北欧经典邮轮之旅！",
          price: "电询",
          date: "",
          img:
            "/img/88616bec38cce671df4258f62ed653e9_330x225.jpg"
        },
        {
          gid: "009",
          type: "度假",
          name:
            "8天7晚， 每周都有特价，持续5个月！分别有四人间和六人间可选！库存有限，先到先得！",
          details: "【戛纳度假村，18欧起/人/晚， 专属于你的美丽传说】",
          price: "电询",
          img:
            "/img/fb4f6784376b66ba7e672bc5489b82a8_330x225.jpg"
        },
        {
          gid: "010",
          type: "度假",
          name:
            "Hôtel Maxi Club Vacances Menorca Resort 4* 具体价钱请电询客服！",
          details:
            "【西班牙梅诺卡岛度假村，8天7夜，一价式全含，单人仅638欧起！】超低价4星级酒店，感受西班牙风情！",
          price: "电询",
          img:
            "/img/b5c69dd0551ca68be66639cd49257ff4_330x225.jpg"
        },
        {
          gid: "011",
          type: "度假",
          name:
            "若克里特岛被称为爱琴海的王冠，那么Sitia Beach 度假村就是王冠上最亮的那颗宝石！",
          details:
            "【克里特岛Sitia Beach 度假村， 7天6晚，一价式全包，887欧/人起！】有海有山有峡谷，有世界尽头；神话般的异域风情；惊艳的料理；精品酒店服务；不是天堂似天堂！",
          price: "电询",
          img:
            "/img/ef769277d721f572168a91fbc436a3cd_330x225.jpg"
        },
        {
          gid: "012",
          type: "度假",
          name: "",
          details: "普罗旺斯Pont Royal度假村8天7晚",
          price: "电询",
          img:
            "/img/594bbe291d4b16bf74862e6c38150b2e_330x225.jpg"
        },
        {
          gid: "017",
          type: "门票",
          name:
            "内分两大主要园区，五大主题区域，全欧最大的文化娱乐度假中心；不同的园区体验不同的乐趣，寻找久违的童真或惊险与刺激；地处巴黎东郊，是周末和节假日的休闲好去处。迪斯尼",
          details: "巴黎迪士尼乐园 Disneyland Paris",
          price: 48.0,
          img:
            "/img/3a35e3c1b08b37471f7a39a19c44a22c_330x225.png"
        },
        {
          gid: "018",
          type: "门票",
          name:
            "-- Grand Parc门票价格36欧/位，Grand Parc+Cinéscénie门票59欧/位，Passe Emotion 15欧/位，可根据需要联系客服修改价格。   -- 5岁以下儿童免费，5-13岁儿童票Grand Parc门票价格为26欧/位，Grand Parc+Cinéscénie门票48欧/位   -- 狂人国公园地处旺代(Vendée)大区，占地面积300公顷，是法国最具吸引力的主题公园之一；  -- 19场场面盛大的真人、动物表演，真实生动地展现法国历史；  -- 震撼人心、目不",
          details: "狂人国门票 Puy du Fou",
          price: 15.0,
          img:
            "/img/71b0c5d831a26ef015c60834a67bd45b_330x225.jpg"
        },
        {
          gid: "019",
          type: "门票",
          name: "世界上第一个水族馆，五星级海洋生活区",
          details: "巴黎水族馆 Aquarium de Paris",
          price: 11.0,
          img:
            "/img/4994d370da051dca71393350fcf9cf5e_330x225.jpg"
        },
        {
          gid: "020",
          type: "门票",
          name: "双层观光巴士，游览巴黎40个知名景点",
          details: "巴黎观光巴士 Open Tour 2日游单人通票",
          price: 16.0,
          img:
            "/img/c7fa67c6781dba7cdb25c689ca9db568_330x225.jpg"
        },
        {
          gid: "021",
          type: "活动",
          name: "09月20日,3天",
          details:
            "【意想不到的夏天】安纳西户外  三天两晚体验活动 露营，烧烤，滑翔伞，皮划艇，溪降, Segway",
          price: 295.0,
          img:
            "/img/a8d2240e5d29e4a7fad341fd68d6e0bc_450x225.jpg"
        },
        {
          gid: "022",
          type: "活动",
          name: "09月01日,7天",
          details:
            "【Let's 潜水，暑期多个团期可选】 在这个初夏潜逃到另一个充满不同色彩，环境和稀奇古怪的新世界！",
          price: 580.0,
          img:
            "/img/2e407b2f1d653785b148311ebd52b30c_450x225.jpg"
        },
        {
          gid: "023",
          type: "活动",
          name: "09月12日,1天",
          details: "絕色莫文蔚世界巡迴演唱會巴黎站 新欧洲购票通道",
          price: 68.0,
          img:
            "/img/8d3244efeea4a412aa5d89a2c0743a7d_450x225.png"
        },
        {
          gid: "024",
          type: "活动",
          name: "12月22日,7天",
          details: "2019圣诞滑雪季-CHARMONIX UCPA",
          price: 568.0,
          img:
            "/img/2d248c2703a954ec77502494ecc78089_450x225.png"
        }
      ]
    };
  },
  created() {
    let res = this.goods.map(e => {
      return e.type;
    });
    res = new Set(res);

    this.goodsname = [...res];
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    changeActive(item) {
      if (item) {
        // console.log(item);

        this.active = item;
        // console.log(this.active);
      }
      this.show = false;
    },
    tomine(){
      this.$router.push('/mine')
    },
    tobus(){
      this.$router.push('/bus')
    },
    morelist(type){

    //  this.$router.push({path:`/bus`,query:{type}})
      this.$router.push('/bus')

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
  background: #ffffff;
}
.logo {
  width: 127px;
}
.eject {
  position: relative;
}
.ejectbox {
  padding: 11px 0 11px 19px;
}
.eject-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.eject-line {
  border: 1px solid #cccccc;
  height: 20px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.searchbox > div {
  height: 41px;
}
.showbox {
  margin-top: -100px;
  width: 318px;
  height: 312px;
  padding: 0 16px;
  box-sizing: border-box;
}
.showbox-list {
  height: 45px;
  border-bottom: 1px solid #e3e3e3;
  line-height: 45px;
  font-size: 14px;
}
.eject {
  background: #ffffff;
  border: none;
  color: #000000;
  height: 41px;
  width: 100%;

  padding: 0;
}
.active {
  color: #3daff0;
}

.search {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  padding: 0 19px;
  box-sizing: border-box;
}
.searchicon {
  background: #ffffff;
  line-height: 41px;
}
.detailbox {
  padding: 8px;
  background: #ffffff;
  margin-bottom: 8px;
}
.detailicon {
  padding: 6px 0;
}
.imgicon {
  width: 36px;
}
.texticon {
  font-size: 12px;
}
.detailcon-div {
  text-align: center;
}
.title-name {
  background: #ffffff;
  height: 49px;
  line-height: 49px;
  padding: 0 10px;
  margin: 0px;
  font-size: 20px;
  border-bottom: 1px solid #cccccc;
}
.title-name span {
  vertical-align: middle;
}
.line {
  display: inline-block;
  height: 20px;
  border: 2px solid #ff6b1a;
  margin-right: 9px;
  margin-left: 3px;
}
/* .youhui{
  height: 170px;
}  */
.youhui img {
  width: 100%;
  display: inline-block;
}

.goodslist {
  flex-wrap: wrap;
  padding: 8px;
}
.goodsimg-box {
  height: 120px;
  display: flex;
  /* align-content: center; */
  align-items: center;
  background: #f3f3f3;
}
.goods-img {
  width: 100%;
  max-height: 120px;
  margin-bottom: 9px;
}
.goods-con {
  margin: 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #333;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 4px;
}
.goods-price {
  margin: 0;
  color: rgb(255, 107, 26);
}

.goods-listbox {
  margin-bottom: 10px;
  background: #ffffff;
}

.morelist {
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.morelist > span {
  display: inline-block;
  width: 120px;
  height: 38px;
  text-align: center;
  line-height: 38px;
  color: #ff6b1a;
  border: 1px solid #e9e9e9;
}
.call{
  position: fixed;
  width: 32px;
  height: 32px;
  background: rgba(0, 192, 255, 0.81);
  left:15px ;
  top: 80%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.call img{
  width: 18px;
}
</style>


