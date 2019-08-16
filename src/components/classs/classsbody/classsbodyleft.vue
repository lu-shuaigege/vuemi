<template>
    <div class="classsbodyleft">
        <div v-for="(item,index) of arr" :key="index">
            <p>{{item.name}}</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "新品"
        },
        {
          name: "手机"
        },

        {
          name: "电视"
        },
        {
          name: "电脑"
        },
        {
          name: "家电"
        },
        {
          name: "路由"
        },
        {
          name: "智能"
        },
        {
          name: "儿童"
        },
        {
          name: "电源"
        },
        {
          name: "耳机"
        },
        {
          name: "生活"
        },
        {
          name: "音响"
        },
        {
          name: "礼品"
        },
        {
          name: "生活"
        },
        {
          name: "服务"
        },
        {
          name: "米粉卡"
        },
        {
          name: "零售店"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.classsbodyleft {
  overflow: auto;
  width: 20%;
  height: 100%;
  border-right: 1px solid #999;
  float: left;
  div{
      width: 100%;
      height: 10vw;
      text-align: center;
      p{
          line-height: 10vw;
      }
  }
}
</style>
