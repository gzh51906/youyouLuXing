import axios from 'axios';

export default {
    name: "storebus",
    state: {
        data: [],
        listSwiper: [],
        westEurope: [],
        southEurope: [],
        eastEurope: [],
        dataItem: {}
    },
    mutations: {
        getDataBase(state, data) {
            state.data = data
            state.listSwiper = data.listSwiper
        },

        getDataItem(state, dataItem) {
            state.dataItem = dataItem
            // console.log(state.dataItem);

        }
    },
    actions: {},


}