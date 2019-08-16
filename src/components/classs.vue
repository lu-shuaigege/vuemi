<template>
    <div class="classs">

<classstitle></classstitle>
<classsbody></classsbody>
    </div>
</template>
<script>
import classsbody from"./classs/classsbody"
import classstitle from"./classs/classstitle"
export default {
    data(){
        return{

        }
    },
    components:{
        classsbody,
        classstitle,
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/sass/css";
.classs{
    // overflow: auto;
    height: 100%;
}
</style>