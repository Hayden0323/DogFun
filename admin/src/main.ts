import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import './plugins/element'
import './plugins/avue'

import router from './router'

Vue.config.productionTip = false
// import EleForm from 'vue-ele-form'
// Vue.use(EleForm)

const http = axios.create({
  baseURL: 'http://localhost:3000'
})
Vue.prototype.$httpajax = http
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
