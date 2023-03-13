<template>
  <div class="contentPage">
    <div class="header">
      <div class="open">
        <span
          v-if="!isCollapse"
          class="iconfont icon-right-indent"
          @click="changeMenu"
        ></span>
        <span
          v-if="isCollapse"
          class="iconfont icon-left-indent"
          @click="changeMenu"
        ></span>
      </div>
      <div class="dataTime" style="display:inline-block;margin-left:70%">{{ dateTime }}</div>
      <div class="choosepicker" style="display:inline-block;margin-left: 2%;">
        <el-dropdown @command="hanldCommand">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="4">黄金糕</el-dropdown-item>
            <el-dropdown-item command="3">狮子头</el-dropdown-item>
            <el-dropdown-item command="2">螺蛳粉</el-dropdown-item>
            <el-dropdown-item command="1" disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item command="0" divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="contentMain">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  data() {
    return {
      dateTime: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.dateChange();
    }, 1000);
  },
  components: {},
  methods: {
    hanldCommand(command){
this.$message({
  message: command,
  type: 'success'
})
    },
    //时间格式
    dateChange() {
      const oldDate = new Date();
      this.dateTime =
        oldDate.getFullYear() +
        "-" +
        (oldDate.getMonth() + 1) +
        "-" +
        oldDate.getDate() +
        "  " +
        oldDate.toLocaleTimeString();
    },

    changeMenu: function () {
      this.$emit("changeShow");
    },
  },
};
</script>

<style lang="less" scoped>
.contentPage {
  height: 50px;
  .header {
    height: 50px;
    background: #364ee6;
    text-align: center;
    line-height: 50px;
    color: #fff;
    .open {
      display: inline-block;
      float: left;
      .iconfont {
        font-size: 18px;
        cursor: pointer;
      }
      
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #fff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>