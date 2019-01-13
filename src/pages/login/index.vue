<template>
  <div class="loginConta">
      <h1 class="title">登陆页面</h1>
 <el-form :label-position="labelPosition" label-width="80px" >
  <el-form-item label="用户名">
    <el-input v-model="username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input type="password" v-model="password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="login">立即创建</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script> 
  export default {
    data() {
      return {
          labelPosition: 'left',
          username: '',
          password: '',
        
      };
    },
    methods:{
        login(){

        }
    }
  }
</script>

<style lang="less">
.loginConta{
    text-align: center;
    width: 600px;
    margin: 100px auto;
    padding: 30px;
    box-shadow:0 0 10px #ccc;
    .title{
        font-weight: bold;
        padding-bottom: 10px;
    }
}
</style>
