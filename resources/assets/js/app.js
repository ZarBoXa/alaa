
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import router from './routes.js'

Vue.component('app-layout-header', require('./components/layouts/Header.vue'));
Vue.component('app-layout-footer', require('./components/layouts/Footer.vue'));

const app = new Vue({
  el: '#app',
  router,
  data () {
    return {
      message: 'hello'
    }
  }
})
