<template>
    <div>
        <van-row type="flex" justify="space-between" class="title">
            <van-col class="title-span" @click="fanhui" span="2"><van-icon name="arrow-left" size='30px'/></van-col>
            <van-col class="title-span" span="8"><slot></slot></van-col>            
            <van-col class="title-span" @click="toshow" span='2'><van-icon name="bars" size='30px'/>
            <div class="show" v-show="isshow">
                <div v-for="item in showbox" :key='item.text' @click="towhat(item.path)">
                   <van-icon :name="item.icon" size='30px'/> {{item.text}}
                </div>
                
            </div>
              
            </van-col>
        </van-row>


    </div>
</template>
<script>
export default {
    data(){
        return {
            isshow:false,
            showbox:[
                {
                    icon:'wap-home',
                    text:'首页',
                    path:'/home'

                },
                {
                    icon:'search',
                    text:'搜索',
                    path:'/bus'

                },
                {
                    icon:'friends-o',
                    text:'个人中心',
                    path:'/mine'

                }
            ]

        }
    },
    methods:{
        fanhui(){
            // console.log(this.$route);
            this.$router.push('/home')
            
        },
        toshow(){
          this.isshow= true
        },
        towhat(path){
       this.$router.push(path)
        }
    }
}
</script>
<style scoped>
.title{
    padding: 0 10px ;
    height: 52px;
    line-height: 52px;
}
.title-span{
    position: relative;
}

.van-icon-arrow-left::before{
    position: absolute;
    left: -10px;
    top: 0
}
.van-icon-bars::before{
 position: absolute;
    left: -10px;
}

.show{
    position: absolute;
    top: 45px;
    right: 10px;
    background: #666;
    width: 150px;
    /* height: 750px; */
    z-index: 33;
}
.show>div{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #cccccc;
    position: relative;
}
</style>


