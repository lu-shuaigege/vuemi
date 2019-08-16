<template>
    <div class="shoppingtop">
        <p>
            <span @click="fn1" class="sp">《</span>
            <span>分类</span>
            <router-link to="/sousuo">
            <i class="iconfont icon-sousuo sousuo"></i>
            </router-link>
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        fn1(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/sass/css";
.shoppingtop{
    // overflow: auto;
    width: 100%;
    height: 56px;
    background: #ebebeb;
    border-bottom: 1px solid;
    position: fixed;
    left: 0px;
    top: 0px;
    p{
        line-height:15vw; 
        text-align: center;
        .sp
        {
            display: inline-block;
            float: left;
        }
      .sousuo{
          font-size:6vw;
          float: right;
          color: black;
      }  
    }
}
</style>
