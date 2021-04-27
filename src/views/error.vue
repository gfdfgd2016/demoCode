<template>
    <div id="error">
        <h1>报错信息:{{msg}}</h1>
        <el-button @click="toLogin">返回</el-button>
    </div>
</template>
<script>
    export default{
        computed:{
            msg(){
                let msg=this.$route.params?this.$route.params.msg:null
                if(msg){
                    return msg
                }else{
                    this.$router.push("/login")
                    return
                }
               
            }
        },
        methods:{
            toLogin(){
                this.$router.push("/login")
            }
        }
    }
</script>
<style scoped>
    #error{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
</style>