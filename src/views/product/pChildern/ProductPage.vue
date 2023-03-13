<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="3"
        ><div class="nav">
          <el-menu class="nav-menu" :default-active="$route.path" router>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
            <el-menu-item index="1-4-2">选项2</el-menu-item>
            <el-menu-item index="1-4-3">选项3</el-menu-item>
            <el-menu-item index="1-4-4">选项4</el-menu-item>
          </el-menu>
        </div></el-col
      >
      <el-col style="margin-left: 10px;" :span="20"><div class="content">22</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.main {
  margin: 0 0 20px 20px;
}
.el-col {
  border-radius: 4px;
  background: #9ec3f8;
  margin-top: 20px;

  .nav-menu {
    background: #9ec3f8;
    border: none;
    border-radius: 5px;
    height: 600px;
  }
}
</style>