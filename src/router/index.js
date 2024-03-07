import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
// import HomeView from '../views/isLand.vue'
import HomeView from '../views/isLand.vue'
import ListView from '../views/list.vue'
const router = createRouter({
  // history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  scrollBehavior(to,from,savedPosition){
   /* if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }*/
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:"index"

    },{
      path: '/index',
      name: 'index',
      component:HomeView
    },{
      path: '/list',
      name: 'list',
      component:ListView
    }
  ]
})
router.afterEach(to => {
  window.scrollTo(0, 0);
});
router.$addRoutes = (params) => {
  router.addRoutes(params)
};

export default router
