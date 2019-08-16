<template>
    <div class="classsbodyright1">
      <img src="/static/img/66.jpg" alt="" class="img1">
      <div class="div2">
        <p class="p1">--小米手机--</p>
        <div class="div22" v-for="(item,index) of arr" :key="index">
          <img :src="item.url" alt="">
          <p>{{item.name}}</p>
        </div>
      </div>
      <div class="div2">
        <p class="p1">--红米手机--</p>
        <div class="div22" v-for="(item,index) of arr" :key="index">
          <img :src="item.url" alt="">
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
    
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          url: "/static/img/10.jpg",
          name: "小米MIX 2s"
        },
        {
          url: "/static/img/10.jpg",
          name: "黑鲨游戏手机"
        },
        {
          url: "/static/img/10.jpg",
          name: "红米note"
        },
        {
          url: "/static/img/10.jpg",
          name: "小米max"
        },
        {
          url: "/static/img/10.jpg",
          name: "小米note"
        },
        {
          url: "/static/img/10.jpg",
          name: "小米8"
        }
      ],
      arr2: [
        {
          url: "/static/img/10.jpg",
          name: "小米MIX 2s"
        },
        {
          url: "/static/img/10.jpg",
          name: "黑鲨游戏手机"
        },
        {
          url: "/static/img/10.jpg",
          name: "红米note"
        },
        {
          url: "/static/img/10.jpg",
          name: "小米max"
        },
        {
          url: "/static/img/10.jpg",
          name: "小米note"
        },
        {
          url: "/static/img/10.jpg",
          name: "小米8"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../../../assets/sass/css";
.classsbodyright1 {
  width: 100%;
  // height: 100%;
  .img1 {
    width: 100%;
    height: 30vw;
  }
  .div2 {
    text-align: center;
    .p1 {
      width: 100%;
      height: 20vw;
      line-height: 20vw;
    }
    .div22 {
      width: 30%;
      text-align: center;
      display: inline-block;
      margin: 3vw 0px;
      img {
        width: 10vw;
        height: 10vw;
      }
      p {
        font-size: 3vw;
      }
    }
  }
}
</style>
