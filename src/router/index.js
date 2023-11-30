import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../views/AboutMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AboutME',
      component: AboutMe
    },

  ]
})

export default router
