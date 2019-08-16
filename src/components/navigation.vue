<template>
<div class="navigation" v-if="$store.state.msg">
    <div v-for="(item,index) of arr" :key="index" class="navigation1">
        <router-link :to='item.too' :class="{ali:index===btn}">
            <p :class=item.img class="navigation-p"></p>
            <p class="navigation-p2">{{item.name}}</p>
        </router-link>
    </div>
</div>
    
</template>
<script>
import "../assets/font/iconfont.css";
export default {
  data() {
    return {
      btn: 0,
      arr: [
        {
          too: "/home",
          img: "iconfont icon-shouye",
          name: "首页"
        },
        {
          too: "/classs",
          img: "iconfont icon-wsdzb_zzgzt_dyfw_dyjfgl_jffl-copy",
          name: "分类"
        },
        {
          too: "/shopping",
          img: "iconfont icon-gouwuche",
          name: "购物车"
        },
        {
          too: "/my",
          img: "iconfont icon-weixiao",
          name: "我的"
        }
      ]
    };
  },
  methods: {
    // fn1(index) {
    //   this.btn = index;
    // }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/css";

.router-link-active{
  color: red;
}
.navigation {
  background: white;
  position: fixed;
  z-index: 666666;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 54px;
  display: flex;
  flex: 1;
  // align-items: center;
  // justify-content: space-between;
}

.navigation1 {
  width: 25%;
  height: 100%;
  text-align: center;
}
.navigation-p {
  font-size: 1.5rem;
}
.navigation-p2 {
  font-size: 0.7rem;
}
</style>

