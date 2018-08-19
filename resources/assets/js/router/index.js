import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Ex from '../components/ExampleComponent.vue'

export const constantRouterMap = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Ex,
    //redirect: '/',
    name: 'Exemplo',
    hidden: true
  },
]

export default new Router({
  // mode: 'history',
  //scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

