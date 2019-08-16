<template>
        <div class="tianjia">
            <div class="tianjia11">
              <router-link to='/home'>
                <p class="iconfont icon-shouye im"></p>
                <p class="p2">首页</p>
              </router-link>
            </div>
            <div class="tianjia11">
              <router-link to='/shopping'>
                <p class="iconfont icon-shouye im"></p>
                <p  class="p2">购物车</p>
              </router-link>
            </div>
            <div class="tianjia12" @click="fn1">
              <p>加入购物车</p>
            </div>
        </div>
</template>
<script>
export default {
  props: ["obj"],
  data() {
    return {};
  },
  components: {},
  methods: {
    fn2(arr, obj) {
      for (let item of arr) {
        if (item.id === obj.id) {
          let index = arr.indexOf(item)
          return {
            istrue: true,
            index: index
          };
        }
      }
      return {
        istrue: false
      };
    },
    fn1() {
      if (this.$store.state.arr1.length === 0) {
        console.log(1);
        this.$store.state.arr1.push(this.obj);
      }
      if (!this.fn2(this.$store.state.arr1, this.obj).istrue) {
        console.log(2);
        this.obj.num++;
        this.$store.state.arr1.push(this.obj);
      } else {
        // console.log(this.fn2(this.$store.state.arr1, this.obj).index)  
        this.$store.state.arr1[this.fn2(this.$store.state.arr1, this.obj).index].num++;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/css";
.tianjia {
  width: 100%;
  height: 15vw;
  background: white;
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 666667;
  .tianjia11 {
    width: 25%;
    height: 100%;
    display: inline-block;
    text-align: center;
    border-right: 1px solid #999;
    box-sizing: border-box;
    a {
      text-decoration: none;
    }
    .im {
      font-size: 6vw;
      margin-top: pxToVw(5);
      margin: 0.5vw;
      color: #999;
    }
    .p2 {
      font-size: 3vw;
      margin: 0.5vw;
      color: #999;
    }
  }
  .tianjia12 {
    width: pxToVw(181);
    height: 15vw;
    float: right;
    text-align: center;
    background: #ff6700;
    box-sizing: border-box;
    p {
      line-height: 15vw;
    }
  }
}
</style>

