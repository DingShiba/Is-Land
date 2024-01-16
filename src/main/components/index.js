/*
 * @Author: wou
 * @Date: 2023-08-04 11:29:44
 * @LastEditTime: 2023-08-04 11:34:17
 * @Description: 
 */
import lang from "./lang/index.vue";
import shiro from "./shiro/shiro.vue";
import disabled from "./shiro/disabled.vue";
const component = {
  install:function(Vue){
    Vue.component('les-lang',lang);
    Vue.component('shiro-hasPermission',shiro);
    Vue.component('shiro-hasDisabled',disabled);
  }
};
// 导出该组件
export default component