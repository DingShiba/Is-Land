let loginCom;
try {
  loginCom = require('@/main/login/index.vue').default;
} catch (e) {
  loginCom = () => import('@/main/error/500');
}
const Main = require("@/main/template/"+(GlobalConfig.defaultMain || 'main1')+"/main.vue").default;
export default [
    {
        path: '/',
        name: 'index',
        redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'Login - 登录',
        hideInMenu: true
      },
      component: loginCom
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        title: '用户注册',
        hideInMenu: true
      },
      component: () => import('@/main/register/index')
    },
    {
      path: '/403',
      name: '403',
      meta: {
        title: '暂无权限',
        hideInMenu: true
      },
      component: () => import('@/main/error/403')
    },
    {
      path: '/404',
      name: '404',
      meta: {
        title: '暂无页面',
        hideInMenu: true
      },
//      component: () => import('@/main/error/404')
      component: loginCom
    },
    {
      path: '/500',
      name: '500',
      meta: {
        title: '服务端异常',
        hideInMenu: true
      },
      component: () => import('@/main/error/500')
    },
    // {
    //   path: '/index',
    //   name: 'index',
    //   meta: {
    //     title: '首页',
    //     hideInMenu: true
    //   },
    //   component: Main,
    //   children:[{
    //     name: 'index',
    //     path:"/index",
    //     meta: {
    //       title: '首页',
    //       hideInMenu: true
    //     },
    //     component: () => import('@/views/index/index')
    //   }]
    // },
  ]
