<template>
    <div id="home">
        <h1>用户名:{{name}}</h1>
    </div>
</template>
<script>
    export default{
        computed:{
            name(){
                let name=this.$route.params?this.$route.params.name:null
                if(name){
                    return name
                }else{
                    this.$router.push("/login")
                    return
                }
               
            }
        }
    }
</script>
<style scoped>
    #home{
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
</style>