<!--
 * @Author: wou
 * @Date: 2023-06-26 14:47:55
 * @LastEditTime: 2023-08-04 08:57:26
 * @Description: 
-->
<template>
  <div id="app" :class="currentTheme.id">
    <a-config-provider :locale="locale">
      <keep-alive>
        <router-view />
      </keep-alive>
    </a-config-provider>
  </div>
</template>
<script>
import enUS from 'ant-design-vue/lib/locale-provider/en_US';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
export default {
  name: 'App',
  data(){
    return{
        locale: zhCN,
        currentTheme:{}
    }
  },
  computed: {
    lang: function () {
      return this.$store.state.app.lang;
    },
    isDebug(){
      return this.$config.debug;
    },
    themeIndex(){
      return this.$store.state.app.themeIndex;
    }
  },
  watch:{
    'lang':{
       handler(n){
         this.$store.commit("setTitleByLang", n);
         this.locale = n=='en'?enUS:zhCN
       },
    　  immediate: true
    },
    'themeIndex':{
      handler(){
         this.currentTheme = this.$store.state.app.currentTheme || {};
      },
      immediate: true
    }
  }
};
</script>
<style lang="less">
  #app{
    height: 100%;
  }
</style>
<style>

</style>
