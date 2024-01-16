export default [
    {
        path: '/',
        name: 'index',
        redirect: '/isLand-0'
    },
    {
      path: '/isLand-0',
      name: 'isLand-0',
      meta: {
        title: 'isLand - 首页',
        hideInMenu: true
      },
      component: () => import('@/views/page0/page0.vue')
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



  ]
