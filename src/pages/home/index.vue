<template>
  <div class="home-container">
    <el-button type="success">{{userInfo.nickname}}</el-button>
    <el-button @click="logout" type="primary">退出</el-button>
    <el-row class="tac">
      <el-col :span="4">
        <el-menu default-active="1-1" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">所有收货人信息</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col class="content-right" :span="20">
        <el-table :data="receiverInfos" style="width: 100%">
          <el-table-column label="收货人信息">
            <el-table-column prop="receiver_name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="mobile" label="手机号" width="120"></el-table-column>
            <el-table-column label="地址">
              <el-table-column prop="province" label="省份" width="120"></el-table-column>
              <el-table-column prop="city" label="市区" width="120"></el-table-column>
              <el-table-column prop="area" label="区/镇" width="120"></el-table-column>
              <el-table-column prop="detailed_address" label="详细地址" width="300"></el-table-column>
              <el-table-column prop="postcode" label="邮编" width="120"></el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//main.js文件引入了 但是一直报错，在这里再次引入正常运行代码 ？？？？
import Vue from "vue"
Vue.prototype.$http = require("axios")

export default {
  data() {
    return {
      //       Object
      // area:"东湖高新区"
      // city:"武汉市"
      // common_used:1
      // detailed_address:"金融港B15栋"
      // id:2
      // mobile:"13030303030"
      // postcode:"430070"
      // province:"湖北省"
      // receiver_name:"传智人牛逼"
      receiverInfos: [],
      userInfo: {}
    };
  },
  created() {
    // 获取当前登录的用户信息
    this.userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    this.getReceiverInfos();
  },
  methods: {
    getReceiverInfos() {
      // let token = localStorage.getItem("token");
      this.$http
        .get("users/getReceiverAddress")
        .then(result => {
          // console.log(result.data);
          this.receiverInfos = result.data.data;
        })
        .catch(err => {
          console.dir(err);
        });
    },
    logout() {
      // 清除localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      // 跳转回登录页
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
.home-container {
  .el-menu {
    border-right: none;
  }
  .content-right {
    padding: 40px;
  }
}
</style>
