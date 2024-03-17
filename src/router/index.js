import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VisitorList from '../views/VisitorList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/visitor/',
    name: 'visitor',
    component: VisitorList
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
