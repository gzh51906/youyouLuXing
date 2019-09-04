import Vue from 'vue'
import Vuex from 'vuex'
import bus from './bus'
import home from './home'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    bus,
    home
  }

})