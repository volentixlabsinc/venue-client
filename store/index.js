
import Vuex from 'vuex';
import signatures from './modules/signatures';
import user from './modules/user';
// import createPersistedState from 'vuex-persistedstate'

const createStore = () =>   {
    return new Vuex.Store({
        // plugins: [createPersistedState()], 
        modules: {
            signatures,
            user
        }
    });
}

export default createStore