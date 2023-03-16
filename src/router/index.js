import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/to-dos',
      name: 'toDo',
      component: () => import('../views/ToDosView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token')
    if (!token) {
      next({ path: '/login' }) // Redirige al usuario a la página de inicio de sesión si no ha iniciado sesión
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
