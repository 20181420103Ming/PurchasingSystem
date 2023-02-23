<template>
  <div class="layout">
    <div class="menu">
        <Menu :isCollapse="isCollapse"></Menu>
    </div>
    <div class="content" :class="{small:isCollapse}">
        <Content :isCollapse="isCollapse" @changeShow="changeShow"></Content>
    </div>
  </div>
  
</template>

<script>
import Content from './content/ContentPage.vue';
import Menu from './menu/menuPage.vue';
export default {
    data(){
        return{
            isCollapse:false
        }
    },
    methods:{
        changeShow(){
            this.isCollapse=!this.isCollapse
        }
    },
components:{
    Menu,Content
}
}
</script>

<style lang="less" scoped>
.layout{
   margin: 0;
   padding: 0;
    .menu{
        background: #112f50;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
    }
    .content{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        padding-left:200px ;
    }
    .small{
        padding-left: 64px;
        transition: 0.4s;
    }
}
</style>