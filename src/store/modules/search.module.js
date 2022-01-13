const state = {
    query: ''
}

const getters = {
    getQuery: state => state.query
}

const mutations = {
    setQuery(state, value = '') {
        state.query = value
    },
}

const actions = {
    updateQuery({ commit }, value) {
        commit("setQuery", value)
    }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}