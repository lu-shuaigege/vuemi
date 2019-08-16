<template>
    <div class="classsbody">
<classsbodyleft></classsbodyleft>
<classsbodyright></classsbodyright>
    </div>
</template>
<script>
import classsbodyleft from"./classsbody/classsbodyleft"
import classsbodyright from"./classsbody/classsbodyright"
export default {
    data(){
        return{

        }
    },
    components:{
        classsbodyleft,
        classsbodyright,
    }
}
</script>
<style lang="scss" scoped>
.classsbody{
    width: pxToVw(375);
    height: 148.5vw;
    background: white;
}
</style>
