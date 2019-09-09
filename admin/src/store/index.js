import Vue from 'vue';

import Vuex from 'vuex';
Vue.use(Vuex);

import common from './common';


// store实例化,配置参数
let store = new Vuex.Store({
    modules: {
        common
    }
});



export default store;