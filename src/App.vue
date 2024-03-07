<script>
import {  RouterView } from 'vue-router'
import enUS from 'ant-design-vue/lib/locale-provider/en_US';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn.js';
dayjs.locale('zh-cn')
export default {
  name:"App",
  data(){
    return{
      locale:zhCN
    }
  },
  components:{
    RouterView
  }
}
</script>

<template>
  <keep-alive>
    <a-config-provider :locale="locale">
      <RouterView />
    </a-config-provider>
  </keep-alive>
</template>


