<template>
    <div class="homeclass">
        <div v-for="(item,index) of arr" :key="index" class="homeclass1">
            <router-link to="/">
                <img :src=item.url class="img">
                <p>{{item.name}}</p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          url: "/static/img/xiaomilogo.png",
          name: "新品"
        },
        {
          url: "/static/img/xiaomilogo.png",
          name: "手机"
        },
        {
          url: "/static/img/xiaomilogo.png",
          name: "电视"
        },
        {
          url: "/static/img/xiaomilogo.png",
          name: "电脑"
        },
        {
          url: "/static/img/xiaomilogo.png",
          name: "家电"
        },
        {
          url: "/static/img/xiaomilogo.png",
          name: "路由"
        },
        {
          url: "/static/img/xiaomilogo.png",
          name: "智能"
        },
        {
          url: "/static/img/xiaomilogo.png",
          name: "儿童"
        },
        {
          url: "/static/img/xiaomilogo.png",
          name: "电源"
        },
        {
          url: "/static/img/xiaomilogo.png",
          name: "分类"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/sass/css";
.img {
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
}
.homeclass {
    background: white;
  .homeclass1 {
    text-align: center;
    width: 20%;
    display: inline-block;
    padding: 1vw 0px;
    a {
      text-decoration: none;
      color: black;
      font-size: 2vw;
    }
  }
}
</style>
