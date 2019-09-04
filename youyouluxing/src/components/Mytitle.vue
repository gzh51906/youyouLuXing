<template>
     <div class="title">
        <van-icon name="arrow-left" size='30px' color='#333' @click='tomine'/>
           <slot></slot>
      </div>
</template>


<script>
export default {
methods:{
    tomine(){
        this.$router.push('/mine')
    }
}
}
</script>

<style>
.title{
    height: 52px;
    text-align: center;
    line-height: 52px;
    font-size: 20px;
   background: #ffffff;
   border-bottom: 1px solid #cccccc;

}
.title .van-icon{
    position: absolute;
    left: 10px;
    top: 11px;
    
}
</style>

