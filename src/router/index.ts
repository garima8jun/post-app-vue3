import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: () => import('../views/UserView.vue')
  },
  {
    path: '/user/:userId/:postId',
    name: 'Post',
    component: () => import('../views/PostView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
