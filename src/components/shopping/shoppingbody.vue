<template>
    <div class="shoppingbody">
        <div v-for="(item,index) of arra" :key="index">
            <p>{{item.p1}}</p>
            <p>{{item.p2*item.num}}</p>
            <button @click="fn2(item)">-</button>
            <span>{{item.num}}</span>
            <button @click="fn1(item)">+</button>
            <input type="checkbox" @click="fn4($event,item)">
            <!-- $event当前元素 -->
            <button @click="fn3(index)">删除</button>
        </div>
        <img src="/static/img/111.jpg" alt="">
        <img src="/static/img/112.jpg" alt="" class="img2">
        <shoppingbody1></shoppingbody1>
        <shoppingbody2></shoppingbody2>
        <div class="box1">
            <div class="box11">
                <p>共{{arrs.length}}件金额:</p>
                <p>{{yuan}}元</p>
            </div>
            <div class="box12">
                <p>继续购物</p>
            </div>
            <div class="box13">
                <p>去结算</p> 
            </div>
        </div>    
    </div>
</template>
<script>
import shoppingbody1 from "./shoppingbody/shoppingbody1";
import shoppingbody2 from "./shoppingbody/shoppingbody2";
export default {
  data() {
    return {
      arra: [],
      arrs: [],
      yuan: 0
    };
  },
  created() {
    console.log(this.arra);
    this.arra = this.$store.state.arr1;
    console.log(this.$store.state.arr1);
  },
  components: {
    shoppingbody1,
    shoppingbody2
  },
  methods: {
    fn1(item) {
      console.log(item);
      item.num++;
    },
    fn2(item) {
      console.log(item);
      item.num--;
      if (item.num === 0) {
        alert("已经最少了");
      }
      return;
    },
    fn3(index) {
      this.$store.state.arr1.splice(index, 1);
      console.log(this.$store.state.arr1);
    },
    fn4(e, item) {
      console.log(e.toElement.checked, item);
      //   e.toElement当前的dom元素e.toElement.checked当前元素存在不存在返回ture或false
      let arr5=[];
      if (e.toElement.checked) {
        console.log(1);
        this.arrs.push(item);
        console.log(this.arrs);
      } else {
        console.log(2);
        this.arrs.splice(this.arrs.indexOf(item), 1);
        // this.arrs.indexOf(item)找到当前对象的下表
      }
      for (let itemx of this.arrs) {
          arr5.push(itemx.num*itemx.p2);
      };
      let alls = arr5.reduce((x,y)=>{
          return x+y;
      });
      this.yuan = alls
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/css";
.shoppingbody {
  margin: 56px 0px 54px 0px;
  width: pxToVw(375);
  height: 100%;
  background: white;
  overflow: auto;
  position: relative;
  .img2 {
    margin-top: -3px;
  }
}
.box1 {
  width: pxToVw(375);
  height: 60px;
  position: fixed;
  left: 0px;
  bottom: 54px;
  background: #ccc;
  p {
    display: inline-block;
    text-align: center;
  }
  .box11 {
    display: flex;
    
    // display: inline-block;
    // width: 32.4%;
    // height: 60px;
    // background: white;
    // text-align: center;
  }
  .box12 {
    display: inline-block;
    width: 32.4%;
    height: 60px;
    background: #ccc;
    text-align: center;
  }
  .box13 {
    display: inline-block;
    width: 32.4%;
    height: 60px;
    background: #fe6500;
    text-align: center;
  }
}
</style>






