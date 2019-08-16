<template>
    <div class="box1">
        <div class="box11">
            <p>共0件金额:</p>
            <p>0元</p>
        </div>
        <div class="box12">
            <p>继续购物</p>
        </div>
        <div class="box13">
            <p>去结算</p> 
        </div>
    </div>    
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/css";
.box1{
    width: pxToVw(375);
    height: 60px;
    position: fixed;
    left: 0px;
    bottom:54px;
    background: #ccc;
    p{
        display: inline-block;
        text-align: center;
    }
    .box11{
        display: inline-block;
        width: 32.4%;
        height: 60px;
        background: white;
        text-align: center;
    }
    .box12{
        display: inline-block;
        width: 32.4%;
        height: 60px;
        background: #ccc;
        text-align: center;
    }
    .box13{
        display: inline-block;
        width: 32.4%;
        height: 60px;
        background: #fe6500;
        text-align: center;
    }
}






</style>

