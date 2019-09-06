export default {
    name: "storeMore",
    state: {
        dataUrl: ""
    },
    getters: {},
    mutations: {
        addDataUrl(state, url) {
            console.log(url);

            state.dataUrl = `${url}?sort=price&asc=true`;
            console.log(state.dataUrl);
            
        }

    }
}