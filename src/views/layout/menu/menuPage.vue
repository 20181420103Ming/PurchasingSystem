<template>
  <div class="menu">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#112f50"
        text-color="#fff"
        active-text-color="#ffd04b" router :collapse="isCollapse">
        <el-menu-item >
          <span slot="title">采购管理系统</span>
        </el-menu-item>
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="/product">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>产品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/product/list">产品列表</el-menu-item>
            <el-menu-item index="/product/category">产品分类</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/order">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>产品订单</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/order/orderlist">订单管理</el-menu-item>
            <el-menu-item index="/order/ordergary">产品分类</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/advert">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>广告管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/advert/advertlist">广告列表</el-menu-item>
            <el-menu-item index="/advert/advertgary">广告分类</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
  </div>
  
</template>

<script>
export default {
  props:['isCollapse'],
data() {
  return {

  };
},
}
</script>

<style lang="less" scoped>
.menu{
  background: #112f50;
  .el-menu{
    border-right: 0;
  }
  .is-active{
    background: #1e78bf !important;
    color: #fff !important;
  }
 
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>