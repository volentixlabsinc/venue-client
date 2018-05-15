
import Vue from 'vue';
import Vuex from 'vuex';
import signatures from './modules/signatures';
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createPersistedState()], 
    modules: {
        signatures
    }
});
