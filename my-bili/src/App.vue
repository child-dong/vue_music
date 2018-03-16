<template>
  <div id="app">
    <div class="header">
      <iheader></iheader>
    </div>
    <div class="link">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/video">音乐</router-link>
      <router-link to="/ranking">排行榜</router-link>

    </div>
    <div class="footer">
      <ifooter></ifooter>
    </div>
    
    <router-view/>
  </div>
</template>

<script>
  import iheader from './components/header/header' 
  import ifooter from './components/footer/footer' 
  export default {
    name: 'App',
    components: {
    'iheader': iheader,
    'ifooter': ifooter
    } 
  }
</script>

<style scoped lang='less'>
  @import 'assets/css/common.less';
  #app {
    .header{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 25px
    }
    .link{
      margin-top: 80px;
      font-size: 0;
      a{
        display: inline-block;
        font-size: 20px;
        margin-left: 40px
      }
    }
    .footer{
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 40px;
      text-align: center;
      font-size: 25px
    }
  }
</style>
