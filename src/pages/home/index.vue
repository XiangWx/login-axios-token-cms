<template>
  <div>
    <!-- 头部tabs-->
    <el-tabs value="first" :stretch="true">
      <el-tab-pane label="用户管理" name="first">
        <el-row class="tac">
          <el-col :span="6">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              :default-openeds="['1']"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              @select="handleSelect"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">我的订单</template>
                  <el-menu-item index="1-1">待发货</el-menu-item>
                  <el-menu-item index="1-2">待收货</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="收获人信息管理">
                  <el-menu-item index="/register">地址
                    <router-view></router-view>
                  </el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">全部商品评价</template>
                  <el-menu-item index="1-4-1">评价</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-message"></i>
                  <span>会员中心</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-3">
                    <template slot="title">会员管理</template>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">消息列表</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">投诉反馈</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <!-- <el-col :span="16" class="content-wrapper"> -->
          <!-- <transition name="fade" mode="out-in"> -->
          <!-- <router-view></router-view> -->
          <!-- </transition> -->
          <!-- </el-col> -->
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">
          <!-- 收货地址 -->
        <el-table :data="tableData" stripe style="width: 100% height:467px">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
     tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    handleSelect(index) {
      this.currentTopMenu = index;
    }
  }
};
</script>