import Vue from 'vue'
import {auth} from '../firebase'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import OverView from '../components/OverView.vue'
import ProductsView from '../views/ProductsView.vue'
import OrdersView from '../views/OrdersView.vue'
import LoginVue from '../components/LoginVue.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginVue
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: OverView,
      },
      {
        path: 'products',
        name: 'products',
        component: ProductsView,
      },
      {
        path: 'orders',
        name: 'orders',
        component: OrdersView,
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x=> x.meta.requiresAuth)
  const currentUser = auth.currentUser;

  if(requiresAuth && !currentUser) {
    next('/')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})
export default router
