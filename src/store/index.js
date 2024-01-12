/*
 * @Author: wou
 * @Date: 2023-06-26 14:47:55
 * @LastEditTime: 2023-08-04 08:56:48
 * @Description: 
 */
import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user';
import data from './modules/data';
Vue.use(Vuex);
//全局事件订阅
window.onload = function () {
  resize();
};
export default new Vuex.Store({
    state: {
    },
    getters:{
    },
    mutations: {
      resize(state) {
        resize();
      }
    },
    actions: {
    },
    modules: {
        app,
        user,
        data
    }
})

function resize(callback){
    let h = window.innerHeight;
    let w = window.innerWidth;
    app.state.bodyHeight =  h - app.state.headerHeight - (!!app.state.isBreadcrumb?app.state.breadrumbHeight:0)-(!!app.state.isTag?app.state.tagHeight:0);
    app.state.bodyWidth = w - app.state.leftMenuWidth;
    app.state.innerHeight =  h;
    app.state.innerWidth =  w;
    callback && callback();
}
let resizeStatus = false;
window.onresize = ()=>{
    if(!resizeStatus){
      resizeStatus = true;
      resize(()=>{
        setTimeout(()=>{
          resizeStatus = false;
        },500);
      });
    }
};