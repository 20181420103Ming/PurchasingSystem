
import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import './assets/css/icfont.css'
import './plugins/element.js'
import router from './router'
import store from './store'

Vue.prototype.$ajax=axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
