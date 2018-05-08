
import Vue from 'vue';
import Vuex from 'vuex';
import signatures from './modules/signatures';


Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        signatures
    }
});
