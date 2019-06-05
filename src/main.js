import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/TweenMax.min'
import '../static/index'
import router from './router'

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
