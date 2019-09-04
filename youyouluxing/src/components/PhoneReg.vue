<template>
   <div class="phonereg">
         <van-row class="inputbox">
            <input type="text" placeholder="请输入手机号码"> 
        </van-row>
        <van-row class="inputbox">
            <van-col span='18'><input type="text" placeholder="图形验证码"></van-col>
            <van-col span='6' class="canvasbox">
                <div class="verify-box" @click="refreshCode">
                    <Sidentify :identifyCode="identifyCode"></Sidentify>
                </div>
                </van-col>           
        </van-row>
         <van-row class="inputbox">
            <van-col span='18'><input type="text" placeholder="获取动态验证码"></van-col>
            <van-col span='6'></van-col>      
        </van-row>
         <van-row class="inputbox">
            <input type="text" placeholder="设置登陆密码(至少6位)"> 
        </van-row>
         <van-row  type="flex" class="customeragree">
            <van-checkbox class="opac" v-model="checked" checked-color="#07c160" icon-size='12'></van-checkbox>
            <span class="opac">同意我们的</span>
            <span>《游游用户注册协议和隐私政策》</span>
        </van-row>
         <van-row class="reg">
             注册
        </van-row>
   </div>
    
</template>
<script>
import Sidentify from '../unit/identify.vue'

export default {
    data(){
        return {
            identifyCode:'',
              checked: true
        }
    },
    components:{
        Sidentify
    },  
     created(){
      this.refreshCode()
    },
    methods:{
        randomNum(min,max){
            return Math.floor(Math.random()*(max-min)+min)
        },
        refreshCode(){
            this.identifyCode='';
            this.makeCode(this.identifyCode,4);
           this.identifyCode=this.identifyCode.slice(8)
  

        },
        makeCode(o,l){
            for(let i =0 ; i<l ;i++){
                this.identifyCode += this.identifyCode[
                    this.randomNum(0,this.identifyCode.length)
                    
                ]
            }

        }
    }
}
</script>
<style scoped>
.inputbox{
    border-bottom: 1px solid #cccccc;
}
input{
    border:none;
    padding: 16px 8px;
    width: 100%;
}
.customeragree{
    font-size: 12px;
    margin-top: 16px;
}
.opac{
    opacity: 0.3;
}
.reg{
    background: rgb(189, 239, 214);
    padding: 10.5px 0;
    color:#ffffff;
    text-align: center;
    border-radius: 4px;
    margin-top: 15px;

}
.canvasbox{
    position: relative;
}
.verify-box{
position: absolute;
right:0;
top: 6px;
}
</style>


