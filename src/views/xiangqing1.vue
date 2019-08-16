<template>
    <div class="xiangqing">
        <div class="div1">
             <p @click="fn1">《</p>
        </div>
        <lunbox class="lun"></lunbox>
        <img src="/static/img/101.jpg" alt="">
        <div>
          <p>{{obj.p1}}</p>
            <p>{{obj.p2}}</p>
        </div>
        <div  class="div2">
            <img src="/static/img/102.jpg" alt="">
        </div>
        <tianjia :obj="obj"></tianjia>
    </div>
</template>
<script>
import lunbox from "../components/xiangqing/lunbox";
import tianjia from "../components/xiangqing/tianjia";
export default {
  data() {
    return {
      
        obj:{
          id:2,
          p1:"小米",
          p2:199,
          num:0,
        }
    };
  },
  components: {
    lunbox,
    tianjia
  },
  methods: {
    fn1() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/css";
.xiangqing {
  overflow: auto;
  width: 100%;
  height: 100%;
  background: #999;
  position: fixed;
  z-index: 666666;
  .div1 {
    width: 100%;
    height: 10vw;
    background: #666;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 666667;
  }
  .lun {
    margin-top: 10vw;
  }
  .div2 {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

