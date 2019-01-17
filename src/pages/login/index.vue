<template>
  <div class="loginConta">
    <h1 class="title">登陆页面</h1>
    <el-form :label-position="labelPosition" label-width="80px">
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
      labelPosition: "left",
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (!this.username.trim() || !this.password.trim()) {
        return alert("请输入用户名与密码");
      };
      this.axios
        .post("/users/login", {
          username: this.username,
          password: this.password
        })
        .then(result=> {
          console.log(result)
          alert(this.data.succMsg)
          //把token 与用户信息 存储到本地localStorage中
          localStorage.setItem("token",result.data.data.token)
           localStorage.setItem("userInfo", JSON.stringify(result.data.data));
          this.$message({
                    message: result.data.succMsg,
                    type: "success"
          });
           this.$router.push("/home");
        })
        .catch(function(error) {
          
        });
    }
  }
};
</script>

<style lang="less">
.loginConta {
  text-align: center;
  width: 600px;
  margin: 100px auto;
  padding: 30px;
  box-shadow: 0 0 10px #ccc;
  .title {
    font-weight: bold;
    padding-bottom: 10px;
  }
}
</style>
