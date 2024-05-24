import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: to => {
        return { path: '/home' }
      }
    },
    {
      path: '/home',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      path: '/workout',
      component: () => import('@/pages/WorkoutPage.vue')
    },
    {
      path: '/settings',
      component: () => import('@/pages/SettingsPage.vue')
    }
  ]
})

export default router