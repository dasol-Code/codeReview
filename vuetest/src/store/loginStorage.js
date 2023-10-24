import router from '@/router'

const loginStorage = {
    state: {
        id: '',
        name: '',
        token: ''
    },
    mutations: {
        login: function (state, payload) {
            state.id = payload.id
            state.name = payload.name
            state.token = payload.token
        },
        loginCheck: function (state) {
            if (!state.token) {
                router.push({
                    name: 'login'
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        logout: function(state){
            state.id = ''
            state.name = ''
            state.token = ''
        }

    },
    actions:{
        logout ({commit}) {
            commit('logout')
        }  
    }
}

export default loginStorage