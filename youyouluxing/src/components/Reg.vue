<template>
    <div class="reg">
        <mytitle v-slot>注册</Mytitle>
        <div class="regcon">
            <van-row type="flex" justify="space-around" class="regcon-nav">
               <span @click="change('Phone')" :class="iscomponent==='Phone' ? 'active' : '' ">手机号码注册</span>
               <span @click="change('Email')" :class="iscomponent==='Email' ? 'active' : '' ">电子邮箱注册</span>
               
            </van-row>
            <component :is='iscomponent'></component>
        </div>

    </div>
</template>
<script>
import Mytitle from './Mytitle.vue'
import Phone from './PhoneReg.vue'
import Email from './EmailReg.vue'
export default {
 components:{
     Mytitle,
     Phone,
     Email
 },
 data(){
     return {
         iscomponent:'Phone'
     }
 },
 methods:{
     change(name){
     this.iscomponent=name
     }
 }
};
</script>
<style scoped>
.regcon{
    padding: 0 32px;
}
.regcon-nav{
    padding: 33px 0;
    font-size: 15px;
}
.regcon-nav .active{
    color:rgb(35, 204, 119);
   border-bottom: 1px solid rgb(35, 204, 119);
}
</style>

