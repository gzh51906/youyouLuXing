import Vue from 'vue'
import Vuex from 'vuex'
import bus from './bus'
import home from './home'
import more from './more'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    bus,
    home,
    more
  }

})