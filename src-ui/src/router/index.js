import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        redirect: to => {
          if (store.getters['user/isAuthenticated']) {
            return { path: '/home' }
          }
          return { path: '/login' }
        }
      },
      {
        path: 'login',
        component: () => import('@/pages/LoginPage.vue')
      },
      {
        path: 'signup',
        component: () => import('@/pages/SignUpPage.vue')
      },
      {
        path: 'reset-password',
        component: () => import('@/pages/ResetPasswordPage.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/AppLayout.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/pages/HomePage.vue')
      },
      {
        path: 'workout',
        component: () => import('@/pages/WorkoutPage.vue')
      },
      {
        path: 'settings',
        component: () => import('@/pages/SettingsPage.vue')
      }
    ]
  },
  {
    path: '/',
    children: [
      {
        path: 'about',
        component: () => import('@/pages/AboutPage.vue')
      },
      {
        path: 'error-401',
        component: () => import('@/pages/Error401Page.vue')
      },
      {
        path: 'error-404',
        component: () => import('@/pages/Error404Page.vue')
      }
    ]
  },
  {
    path: '/:unknownPath(.*)',
    redirect: to => {
      return { path: '/error-404' }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

router.afterEach((to, from) => {
const titleDefault = 'Repset'
const titleRoute = to.meta.title
const titleWindow = titleRoute || titleDefault
window.document.title = titleWindow
})

export default router
