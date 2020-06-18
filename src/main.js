import Vue from 'vue'
import App from './App.vue'
import 'at-ui-style'
import AtUI from 'at-ui'
import VueRouter from 'vue-router'
import router from './router/index'
Vue.use(VueRouter)
Vue.use(AtUI)

new Vue({
  el: '#app',
  router:router,
  ...App
})