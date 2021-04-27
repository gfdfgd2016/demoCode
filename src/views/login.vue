<template>
    <div id="login"> 
        <div class="log_bg"></div>
        <div class="login_box">
            <div class="login_left">
                <img src="/images/workInf2.jpg"/>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="login_right">
                <div class="log_label">登录</div>
                <el-form-item label="账号" prop="name">
                    <el-input  size="small"  v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input show-password size="small"   v-model="ruleForm.password"></el-input>
                </el-form-item>

             
                <el-button type="primary" size="small" @click="submitForm('ruleForm')">确认</el-button>
                <el-button size="small" @click="resetForm('ruleForm')">重置</el-button>
               
            </el-form>
        </div>
       
    </div>
    
</template>
<script>
    export default{
        data(){
            return {
                ruleForm: {
                    name: '',
                    password:'',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
             
                }
            
            }
        },
        mounted(){
            this.ruleForm.name="admin"
            this.ruleForm.password="admin"
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    if(this.ruleForm.name==='admin'&&this.ruleForm.password==='admin'){
                        this.$router.push({name:"index",params:{name:this.ruleForm.name}})
                    }else{
                        let msg="账户名称与密码不匹配"
                        this.$router.push({name:"error",params:{msg:msg}})
                    }
                } else {
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped lang="scss">
#login{
    width:100%;
    height:100%;
   
    display:flex;
    align-items:center;
    justify-content:center;
    .log_bg{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        filter:opacity(0.6);
        z-index:1;
        background:url("/images/bg1.jpg");
        background-size:cover;
        animation:bgChange 30s infinite;
        animation-timing-function:ease;
        -webkit-animation-timing-function:ease;
        -webkit-animation:bgChange 30s infinite;
    }
    .login_box{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        background:#ffffff;
        z-index:2;
        margin:0;
        padding:0;
        border-radius:6px;
        overflow:hidden;
        box-shadow:0 0 10px 0 rgba(0,0,0,0.2);
        height:420px;
        img{
            width:360px;
            height:100%;
            object-fit:cover;
        }
        .login_right{
            padding-right:60px;
            width:300px;
            height:100%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            .log_label{
                 color:#222222;
                 margin-bottom:40px;
                 font-size:24px;
                 font-weight:600;
                 letter-spacing:2px;
                 padding-left:80px;
            }
            button{
                width:calc(100% - 60px);
              
                margin:10px 0;
                margin-left:60px;
                text-align:center;
           
            }
        }
    }
}
@keyframes bgChange
{
	
	25% {
        background:url("/images/bg2.jpg");
        background-size:cover;
    }
    50% {
        background:url("/images/bg3.jpg");
        background-size:cover;
    }
    75% {
        background:url("/images/bg4.jpg");
        background-size:cover;
    }
    100% {
       background:url("/images/bg5.jpg");
        background-size:cover;
    }
}

@-webkit-keyframes mymove /*Safari and Chrome*/
{

	25% {
        background:url("/images/bg2.jpg");
        background-size:cover;
    }
    50% {
        background:url("/images/bg3.jpg");
        background-size:cover;
    }
    75% {
        background:url("/images/bg4.jpg");
        background-size:cover;
    }
    100% {
        background:url("/images/bg5.jpg");
        background-size:cover;
    }
}

</style>