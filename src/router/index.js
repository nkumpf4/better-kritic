import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/feed',
    name: 'Feed',
    component: () => import('../views/Feed/Feed.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/profile/:name',
    name: 'Profile',
    component: () => import('../views/Profile/Profile.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/discover',
    name: 'Discover',
    component: () => import('../views/Discover/Discover.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () => import('../views/Movie/Movie.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth: true,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    if (localStorage.getItem('bk-authenticated')) {
      next();
    } else {
      next('/signin')
    }
  } else {
    next();
  }
})

export default router
