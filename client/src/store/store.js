import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: [{ id: 1, name: 'Binh' }, { id: 2, name: 'Anh' }],
        dangky: [],
        result: 0,
        value: 2,
    },
    mutations: {
        tang(state) {
            state.value++;
        }
    },
    actions: {

    },
    getters: {

    }



});