import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import './plugins/element'
import EleForm from 'vue-ele-form'
import router from './router'

Vue.config.productionTip = false
Vue.use(EleForm)
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
