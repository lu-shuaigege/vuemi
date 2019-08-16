<template>
  <div>
     <p>
         用户账号：
         <input type="text"/>
     </p>
     <p>
         用户密码：
         <input type="password"/>
     </p>
     <button @click="signin" >登录</button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },

  methods: {
    signin() {
      this.bus.$emit("send-flag", true);
      console.log(this.$route.query.redirect);
      let name = this.$route.query.redirect || "shoppingcart";
      console.log(this.$route.query.required)
      this.$router.push({name:this.$route.query.required});
      this.$store.state.msg=true;
    }
  },
  created() {
    console.log(this.bus);
    this.$store.state.msg=false;
    this.bus.$emit("send-flag", false);
  }
};
</script>

<style>
</style>
