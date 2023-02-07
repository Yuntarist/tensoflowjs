import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/chart.vue'

const routes = [
  {
    path: '/',
    name: 'chart',
    component: HomeView
  },
  {
    path: '/cam',
    name: 'cam',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/cam.vue')
  },
  {
    path: '/camtest',
    name: 'camtest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/camtest.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
