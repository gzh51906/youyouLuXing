import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

let userajax=axios.create({
  baseURL:'http://localhost:3003'
})
let mycart=axios.create({
  baseURL:'http://localhost:3003/mycart'
})
Vue.prototype.$userajax = userajax;
Vue.prototype.$mycart = mycart;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
