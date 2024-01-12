/*
 * @Author: wou
 * @Date: 2023-12-26 16:43:16
 */
import Vue from 'vue';
import Router from 'vue-router';
import routes from './router';
import { message } from 'ant-design-vue';
import store from '@/store';
import { WriteCookie, getLocationHash, parseQueryString } from "@/libs/util";
import config from '../config';
Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};
const router = new Router({
    routes,
    mode: 'hash'
});
router.beforeEach((to, from, next) => {
    //监测主题
    checkTheme();
    if (!!to.name) {
        store.commit('setState', { key: 'currentRoute', value: to.name });
        if(!!to.meta.template && (to.meta.template.indexOf('main')>-1 || to.meta.template.indexOf('admin')>-1)){
            store.commit('setSelectMenuCache',to);
            next();
        } else {
            next();
        }
    } else {
        //直接刷新页面
        let hash = getLocationHash();
        let path = hash.split('#')[1];
        let params = parseQueryString(window.location.href);
        if(!!params.LESITSID){
            WriteCookie("LESITSID",params.LESITSID);
        }
        store.dispatch("getUserInfo", () => {
            let r = router.match(path);
            if (!!r.name) {
                if(!r.meta.parentIds){
                    router.push({
                        path: r.path,
                        params: params
                    });
                    return;
                }
                let parentId = r.meta.parentIds.length>0?r.meta.parentIds[0]:"";
                if(!parentId){
                    store.dispatch("setMenuList",{
                        id:parentId,
                        callback: () => {
                            router.push({
                                path:"/upm/menu"
                            });
                        }
                    });
                    return false;
                }else{
                    router.push({
                        path: r.path,
                        params: params
                    });
                }
                store.commit('setState', { key: 'currentRoute', value: r.name });
            } else {
                if (path == '/index') {
                    message.error('首页未设置');
                    router.push({
                        path: '/500'
                    });
                } else {
                    router.push({
                        path: '/404'
                    });
                }
            }
        });
    }
});
router.afterEach(to => {
    window.scrollTo(0, 0);
});
router.$addRoutes = (params) => {
    router.addRoutes(params)
};

function checkTheme(){
    let themeIndex = localStorage.getItem("theme") || config.themeIndex || '0';
    if(themeIndex != -1){
        localStorage.setItem("theme",themeIndex)
        let cssLinkId =  document.getElementById('link-antd');
        let themeCss = cssLinkId.getAttribute("href");
        if(config.skinTheme[themeIndex]["href"] != themeCss){
            cssLinkId.setAttribute("href","./"+config.skinTheme[themeIndex]["href"]);
        }
    }
}
export default router
