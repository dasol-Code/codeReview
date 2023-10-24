import {createStore} from 'vuex'
import loginStorage from './loginStorage'
import createPersistedState from 'vuex-persistedstate';

 const store = createStore({
    state: {
        
    },
    mutations: {
        
    },
    action:{

    },
    modules:{
        loginStorage
    },
    plugins : [
        createPersistedState({
            paths:['loginStorage']
        })
    ]
});

export default store;