
import Vue from 'vue'
import VueRouter from 'vue-router'

import ViewLogin from './components/views/Login.vue'
import ViewRegister from './components/views/Register.vue'
import ViewProfile from './components/views/Profile.vue'
import ViewNotFound from './components/views/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  pageRouting: true,
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'auth-login',
      component: ViewLogin
    }, {
      path: '/register',
      name: 'auth-register',
      component: ViewRegister
    }, {
      path: '/users/:id',
      name: 'profile',
      component: ViewProfile
    }, {
      path: '*',
      name: 'not-found',
      component: ViewNotFound
    }
  ]
})

export default router
