<template>
    <div class="classstitle">
        <p>
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
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/sass/css";
.classstitle{
    // overflow: auto;
    width: 100%;
    height: 56px;
    background: #666;
    // position: fixed;
    // left: 0px;
    // top: 0px;
    p{
        line-height:15vw; 
        text-align: center;
      .sousuo{
          font-size:6vw;
          float: right;
      }  
    }
}
</style>
