<template>
  <div class="contentPage">
    <div class="header">
      <div class="open">
        <span v-if="!isCollapse" class="iconfont icon-right-indent" @click="changeMenu"></span>
        <span v-if="isCollapse" class="iconfont icon-left-indent" @click="changeMenu"></span>
      </div>
      <h3></h3>
    </div>
    <div class="contentMain">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props:['isCollapse'],
  data() {
    return {
      
    };
  },
  components: {
    
  },
  methods:{
    changeMenu:function(){
      this.$emit('changeShow')
    }
  }
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
  }
}
</style>