<template>
    <div class="reg">
        <mytitle v-slot>登陆</Mytitle>
        <div class="regcon">
            <van-row type="flex" justify="space-around" class="regcon-nav">
               <span @click="change('Account')" :class="iscomponent==='Account' ? 'active' : '' ">账号密码登陆</span>
               <span @click="change('Dynamic')" :class="iscomponent==='Dynamic' ? 'active' : '' ">动态密码登陆</span>
               
            </van-row>
            <component :is='iscomponent'></component>
        </div>

    </div>
</template>
<script>
import Mytitle from './Mytitle.vue'
import Dynamic from './DynamicLogin.vue'
import Account from './AccountLogin.vue'

export default {
 components:{
     Mytitle,
     Dynamic,
     Account
 },
 data(){
     return {
         iscomponent:'Account'
     }
 },
 methods:{
     change(name){
        this.iscomponent=name
     }
 },
 created(){
    console.log(12321);
    
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

