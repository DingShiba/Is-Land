import Vue from 'vue';
import App from './App.vue';
import axios from "./libs/axios";
import qs from 'qs';
import config from "@/config/index";
import vueScroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';
import '@/assets/css/common.css';
import antDesign from 'ant-design-vue';
import commonComponents from "@/main/components/index";
import moment from 'moment';
// import animated from "animate.css"
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import locale from 'view-design/dist/locale/zh-CN';
moment.locale('zh-cn');
// Vue.use(animated);
Vue.use(antDesign);
Vue.use(commonComponents);
Vue.use(ViewUI,{ locale });
Vue.locale = () => {};

Vue.use(vueScroll,{ops: {

}, name: 'vue-scroll'});
Vue.use(vueScroll);
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: '#4380FE',
    opacity: .9,
    // keepShow: true,
    size: '5px'
  },
  scrollPanel:{
    scrollingX: false,
  }
};
//自定义real-img指令
let imageIsExist = function (url) {
  return new Promise((resolve) => {
    let img = new Image();
    img.onload = function () {
      if (this.complete==true) {
        resolve(true)
        img=null
      }
    }
    img.onerror=function () {
      resolve(false)
      img=null
    }
    img.src=url
  })
}
Vue.directive('real-img', async function (el, binding) {
  let imgURL = binding.value
  if (imgURL) {
    let exist = await imageIsExist(imgURL)
    if (exist) el.setAttribute("src", imgURL)
  }
});

Vue.directive('drag-modal', (el, bindings, vnode) => {
  Vue.nextTick(() => {
    let { visible, destroyOnClose } = vnode.componentInstance
    // 防止未定义 destroyOnClose 关闭弹窗时dom未被销毁，指令被重复调用
    if (!visible) return
    let modal = el.getElementsByClassName('ant-modal')[0]
    let header = el.getElementsByClassName('ant-modal-header')[0]
    let left = 0
    let top = 0

    // 未定义 destroyOnClose 时，dom未被销毁，关闭弹窗再次打开，弹窗会停留在上一次拖动的位置
    if (!destroyOnClose) {
      left = modal.left || 0
      top = modal.top || 0
    }
    // top 初始值为 offsetTop
    top = top || modal.offsetTop
    header.onmousedown = e => {
      let startX = e.clientX;
      let startY = e.clientY;
      header.left = header.offsetLeft;
      header.top = header.offsetTop;
      el.onmousemove = event => {
        let endX = event.clientX;
        let endY = event.clientY;
        modal.left = header.left + (endX - startX) + left;
        modal.top = header.top + (endY - startY) + top;
        modal.style.left = modal.left + 'px'
        modal.style.top = modal.top + 'px'
      }
      el.onmouseup = event => {
        left = modal.left
        top = modal.top
        el.onmousemove = null;
        el.onmouseup = null;
        header.releaseCapture && header.releaseCapture();
      }
      header.setCapture && header.setCapture();
    }
  })
});
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$config = config;
Vue.prototype.$qs = qs;
Vue.prototype.$moment = moment;
Vue.prototype.$vue = Vue;
try{
  axios({
    url:"/zuul/upm/configuration/global"
  }).then(res=>{
    let data = res.data.data || {};
    data = JSON.parse(data.config || "{}");
    GlobalConfig = GlobalConfig || {};
	  GlobalConfig.title = GlobalConfig.title || "管理平台";
	  GlobalConfig.menuMode = GlobalConfig.menuMode || "1";
	  GlobalConfig.skinTheme = GlobalConfig.skinTheme || [{
        color: "rgb(0 198 255)",
        label: "白天",
        id:"theme-white",
        href: "static/css/white-theme.css"
      },{
        color: "rgb(50 247 24)",
        label: "黑夜",
        id:"theme-black",
        href: "static/css/dark-theme.css",
    }];
    for(let i in data){
      GlobalConfig[i] = GlobalConfig[i]?GlobalConfig[i]:data[i];
    }
	  document.title =  GlobalConfig.title;
    let router = require("./router/index").default;
    let store = require("./store/index").default;
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  })
}catch (e){
   console.log("配置异常:"+e.toString());
}
