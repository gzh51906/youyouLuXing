import axios from 'axios';

export default {
    name: "storebus",
    state: {
        data: [],
        listSwiper: [],
        westEurope: [],
        southEurope: [],
        eastEurope: []
    },
    mutations: {
        getDataBase(state, data) {
            state.data = data
            // console.log(data);

            state.listSwiper = data.listSwiper
            // console.log(state.listSwiper);
            // state.westEurope = data.westEurope
            // state.southEurope = data.southEurope
            // state.eastEurope = data.eastEurope
        }
    },
    actions: {},


}