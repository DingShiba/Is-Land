import $http from 'axios';
import routes from '@/router';
import {message} from 'ant-design-vue';
import avatar from "@/assets/images/user.jpg";
//模板
const Main = require("@/main/template/" + (GlobalConfig.defaultMain || 'main1') + "/main.vue").default;
import FullScreen from "@/main/template/fullScreen/index.vue";
import FullIframe from "@/main/template/fullScreen/iframe.vue";
import Blank from "@/main/error/brank.vue";

import {WriteCookie, ReadCookie, ReadLocalStorage, WriteLocalStorage, DelLocalStorage} from '@/libs/util';

import {removeWatermark, setWaterMark} from '@/libs/util'

let permission = '';
let routerList = {};
let menuListName = {};
let routerByPath = {};
let routerByName = {};
let selectMenuCache = [];
let areaList = {};
export default {
    state: {
        avatar: avatar,
        userName: '',
        loginName: "",
        userId: '',
        officeId: '',
        officeIds: '',
        officeGrade: "",
        officeType: "",
        companyId: "",
        areaId: '',
        homeMenuId: '',
        token: '',
        permission: '',
        routerByPath: {},
        routerByName: {},
        menuData: '',
        menuListName: [],
        menuLastList: [],
        favoriteData: [],
        currentRoute: '',
        selectMenuCache: [],
        noCacheRoute: "",
        isAdmin: false
    },
    getters: {
        getState(state, key) {
            return state[key]
        }
    },
    mutations: {
        setState(state, {key, value}) {
            state[key] = value;
            if (key == 'currentRoute') {
                this.commit('setSelectMenuCache', state['routerByName'][value]);
            }
        },
        resetState(state, callback) {
            state = {
                avatar: avatar,
                userName: '',
                loginName: "",
                userId: '',
                officeId: '',
                officeIds: '',
                officeGrade: "",
                officeType: "",
                officeName: "",
                companyId: "",
                areaId: '',
                homeMenuId: '',
                token: '',
                permission: '',
                routerByPath: {},
                routerByName: {},
                menuData: '',
                menuListName: [],
                menuLastList: [],
                favoriteData: [],
                currentRoute: '',
                selectMenuCache: [],
                noCacheRoute: "",
                isAdmin: false
            };
            if (GlobalConfig.isWaterMark) {
                removeWatermark();
            }
            callback && callback();
        },
        getSelectMenuCacheByName(state, name) {
            let cache = state['selectMenuCache'];
            for (let i in cache) {
                if (cache[i]['name'] = name) {
                    return cache[i];
                }
            }
            return null;
        },
        setSelectMenuCache(state, route) {
            if (!!route) {
                let r = null;
                let cache = state['selectMenuCache'];
                for (let i in cache) {
                    if (cache[i]['name'] == route.name) {
                        r = cache[i];
                        break;
                    }
                }
                if (!r) {
                    let menuCache = ReadLocalStorage('menuCache') || '';
                    menuCache = menuCache.replace(route.name, "");
                    menuCache += "|" + route.name;
                    WriteLocalStorage('menuCache', menuCache);
                    state['selectMenuCache'].push(state['routerByName'][route.name]);
                }
            }

        },
        closeAllMenuCache(state) {
            let cache = state['selectMenuCache'];
            // WriteCookie('menuCache', cache[0]['name']);
            DelLocalStorage('menuCache');
            state['selectMenuCache'] = [cache[0]];
        },
        delMenuCache(state, index) {
            let r = state.selectMenuCache;
            state['selectMenuCache'].splice(index, 1);
            let menuCache = '';
            for (let i in r) {
                menuCache += "|" + r[i].name;
            }
            WriteLocalStorage('menuCache', menuCache);
        },
        delMenuCacheSides(state, data) {
            /**
             * index: 下标
             * type 0 左侧 1右侧
             */
            let cache = state.selectMenuCache;
            let indexCache = cache[0];
            if (data.type == 0) {
                cache = cache.slice(data.index);
            } else {
                cache = cache.slice(1, data.index + 1);
            }
            cache.splice(0, 0, indexCache);
            let menuCache = "";
            for (let i in cache) {
                menuCache += "|" + cache[i]['name'];
            }
            WriteLocalStorage('menuCache', menuCache);
            state['selectMenuCache'] = cache;
        },
        //关闭其他
        closeOtherMenuCache(state, index) {
            let c = state.selectMenuCache;
            let cache = [];
            cache.push(c[0]);
            if (index > 0) {
                cache.push(c[index])
            }
            let menuCache = "";
            for (let i in cache) {
                menuCache += "|" + cache[i]['name'];
            }
            WriteLocalStorage('menuCache', menuCache);
            state['selectMenuCache'] = cache;
        },
        setMenuCache(state, data) {
            state['selectMenuCache'] = data;
            let menuCache = "";
            for (let i in data) {
                if (data[i]["name"] != state.homeMenuId && data[i]['template'].indexOf('main') > -1) {
                    menuCache += "|" + data[i]['name'];
                }
            }
            WriteLocalStorage('menuCache', menuCache);
        },
        setRouterByPath(state, {key, value}) {
            state['routerByPath'][key] = value;
        },
        setRouterByName(state, {key, value}) {
            state['routerByName'][key] = value;
        },
        setPermission(state, {value}) {
            // state['permission'] = state['permission'] + "," + value;
            state['permission'] = value;
        },
        addFavorite(state, data) {
            state['favoriteData'].push(data);
        },
        cancelFavorite(state, index) {
            state['favoriteData'].splice(index, 1);
        },
    },
    actions: {
        async setGlobalPrivacyConfig({commit, state}) {
            return new Promise((resolve, reject) => {
                $http({
                    url: "/zuul/upm/configuration/privacy"
                }).then(res => {
                    let data = res.data.data || {};
                    data = JSON.parse(data.config || "{}");
                    for (let i in data) {
                        GlobalConfig[i] = data[i];
                    }
                    resolve();
                }).catch(e => {
                    console.log("请求异常setGlobalPrivacyConfig:" + e);
                    resolve();
                });
            })
        },
        async setUserArea({commit, state}) {
            return new Promise((resolve, reject) => {
                $http({
                    url: "/zuul/upm/area/" + state.areaId
                }).then(res => {
                    recursionArea([res.data.data || {}]);
                    GlobalConfig.areaDict = areaList;
                    resolve();
                }).catch(e => {
                    console.log("请求异常setUserArea:" + e);
                    resolve();
                });
            })
        },
        async setUserOffice({commit, state}) {
            return new Promise((resolve, reject) => {
                let officeData = {};
                $http({
                    url: "/zuul/upm/office/dict",
                }).then(res => {
                    (res.data.data || []).forEach(e => {
                        officeData[e['value']] = e.label;
                    });
                    GlobalConfig.officeDict = officeData;
                    resolve();
                });
            })
        },
        setMenuList({commit, state}, info) {
            $http({
                url: "/zuul/upm/menu/headbar?menuId=" + info.id + "&menuMode=" + GlobalConfig.menuMode,
            }).then(res => {
                state.menuData = res.data.data.menuList;
                info.callback && info.callback();
            });
        },
        getUserInfo({dispatch, commit, state}, callback) {
            let timer = null;
            if (true) {
                $http({
                    url: "zuul/oauth/isLogin?menuMode=" + GlobalConfig.menuMode,
                    method: "get"
                }).then(async res => {
                    if (res.data.success) {
                        let data = res.data.data;
                        let menuData = data.menuList || [];
                        commit('setState', {key: 'userId', value: data.id});
                        commit('setState', {key: 'userName', value: data.name});
                        commit('setState', {key: 'ip', value: data.ip});
                        commit('setState', {key: 'officeId', value: data.officeId});
                        commit('setState', {key: 'officeIds', value: data.officeIds});
                        commit('setState', {key: 'loginName', value: data.loginName});
                        commit('setState', {key: 'officeGrade', value: data.officeGrade});
                        commit('setState', {key: 'officeType', value: data.officeType});
                        commit('setState', {key: 'officeName', value: data.officeName});
                        commit('setState', {key: 'companyId', value: data.companyId});
                        commit('setState', {key: 'areaId', value: data.areaId});
                        commit('setState', {key: 'homeMenuId', value: data.homeMenuId});
                        commit('setState', {key: 'isAdmin', value: data.isAdmin});
                        if (GlobalConfig.isWaterMark) {
                            setWaterMark(data.name, data.loginName, data.ip);
                        }
                        //初始化字典
                        await dispatch('setGlobalPrivacyConfig');
                        await dispatch('setUserArea');
                        await dispatch('setUserOffice');
                        getChildren(menuData);
                        permission = '';
                        routerList = {};
                        routerByPath = {};
                        routerByName = {};
                        selectMenuCache = [];
                        if (!data.homeMenuId) {
                            menuData.push({
                                cache: true,
                                children: [],
                                component: "index/index",
                                home: false,
                                icon: "md-expand",
                                menu: true,
                                name: "home",
                                path: "/home",
                                permission: null,
                                show: false,
                                target: "default",
                                template: "fullScreen",

                            });
                            data.homeMenuId = "home";
                        }
                        commit('setState', {key: 'menuData', value: menuData});
                        commit('setState', {key: 'menuListName', value: menuListName});
                        commit('setState', {key: 'token', value: res.data.message});
                        commit('setState', {key: 'favoriteData', value: data.favoriteList});
                        addRouters(menuData, commit, data.homeMenuId);
                        commit('setPermission', {value: data.permissions});
                        commit('setState', {key: 'routerByPath', value: routerByPath});
                        commit('setState', {key: 'routerByName', value: routerByName});
                        routes.$addRoutes(formRouter());
                        commit('setState', {key: 'selectMenuCache', value: getMenuCache()});
                        callback && callback(routerByName[data.homeMenuId], data);
                        //timer
                        clearInterval(timer);
                        timer = setInterval(() => {
                            if (!ReadCookie('LESITSID')) {
                                console.log("登录失效，请重新登录");
                                location.reload();
                            }
                        }, 5000);
                    } else {
                        message.info({
                            content: '登录已失效,请重新登录',
                            top: 50,
                            duration: 1
                        });
                        setTimeout(() => {
                            routes.push({
                                path: "/login"
                            });
                        }, 1000);
                    }
                });
            }
        },
    }
}

//内部核心函数,动态路由
function addRouters(data, commit, homeMenuId) {
    let template = 'main/template/main';
    data.forEach((r, index) => {
        if (r.menu) {
            let child = r.children;
            if (!!child && child.length > 0) {
                //过滤权限组
                if (!child[0]['menu']) {
                    for (let i in child) {
                        permission = permission + child[i]['permission'];
                    }
                    template = r.template || 'main/template/main';
                    if (!routerList[template]) {
                        routerList[template] = [];
                    }
                    if (r.name != homeMenuId) {
                        routerByPath[r.path] = r;
                        routerByName[r.name] = r;
                        routerList[template].push(r);
                    }
                    r.children.length = 0;
                } else {
                    addRouters(child, commit, homeMenuId);
                }
            } else {
                template = r.template || 'main/template/main';
                if (!routerList[template]) {
                    routerList[template] = [];
                }
                if (r.name != homeMenuId) {
                    routerByPath[r.path] = r;
                    routerByName[r.name] = r;
                    routerList[template].push(r);
                }
            }
            if (r.name == homeMenuId) {
                // r.path = "/index";
                r.isHome = true;
                routerByPath[r.path] = r;
                routerByName[r.name] = r;
                if (!routerList[template]) {
                    routerList[template] = [];
                }
                routerList[template].push(r);
                selectMenuCache.push(r);
            }
        }
    });
}

//格式化路由
function formRouter() {
    let dynamicRoute = [];
    let template = "";
    for (let i in routerList) {
        let isFrame = false;
        let r = routerList[i];
        if (i.indexOf("fullScreen/iframe") > -1) {
            template = FullIframe;
        } else if (i.indexOf("fullScreen") > -1) {
            template = FullScreen;
        } else if (i.indexOf("admin") > -1) {
            template = Main;
        } else {
            //默认后台管理
            template = Main;
        }
        if (i.indexOf("iframe") > -1) {
            isFrame = true;
        }
        if(GlobalConfig.version == 'v2'){
            template = FullScreen;
        }
        dynamicRoute.push({
            path: "/" + i,
            name: i,
            meta: {
                cache: false
            },
            _component: i,
            component: template,
            children: []
        });
        for (let j in r) {
            let p = r[j];
            let obj = {
                path: p.path,
                name: p.name,
                meta: {
                    parentIds: p.parentIds,
                    title: p.title,
                    icon: p.icon,
                    isShow: p.show,
                    home: p.home,
                    isHome: p.isHome,
                    target: p.target,
                    href: p.component,
                    template: i,
                    isFrame: isFrame,
                    cache: p.cache //后续研究使用,目前使用配置全局缓存,全true
                },
                component: null,
            };
            try {
                if (isFrame) {
                    obj.component = Blank;
                } else {
                    obj.component = require('@/views/' + p.component + '.vue').default;
                    obj.componentName = obj.component.name;
                }
            } catch (e) {
                // console.log(p.component + ":" + e);
                obj.component = () =>
                    import ("@/main/error/404.vue");
            }
            dynamicRoute[dynamicRoute.length - 1]['children'].push(obj);
        }
    }
    return dynamicRoute;
}

//读取菜单缓存
function getMenuCache() {
    // let menuCache = ReadCookie('menuCache') || "";
    let menuCache = ReadLocalStorage('menuCache') || "";
    let menuJson = {}; //过滤重复数据
    menuCache = menuCache.split('|');
    for (let i in menuCache) {
        let r = routerByName[menuCache[i]];
        if (!!r && !menuJson[r.name] && !r['isHome']) {
            menuJson[r.name] = true;
            selectMenuCache.push(r);
        }
    }
    menuJson = null;
    return selectMenuCache;
}

//生成状态树
function getChildren(node) {
    for (let i in node) {
        if (!!node[i].children && node[i].children.length > 0) {

            if (!node[i]['children'][0]["permission"]) {
                getChildren(node[i]["children"]);
            }
        }
        menuListName[node[i]['name']] = {
            title: node[i]['title'],
            parents: node[i]['parentIds']
        };
    }
}

//递归获取区域树
function recursionArea(data) {
    data.forEach(n => {
        if (!areaList[n.code]) {
            areaList[n.code] = n.name;
        }
        recursionArea(n.children || []);
    });
}
