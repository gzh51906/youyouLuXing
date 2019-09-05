import Vue from 'vue'
import Vuex from 'vuex'
import bus from './bus'
import home from './home'
import loginuser from './user'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    bus,
    home,
    loginuser
  }

})