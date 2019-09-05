import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

let userajax=axios.create({
  baseURL:'http://localhost:3003/user'
})
Vue.prototype.$userajax = userajax;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
