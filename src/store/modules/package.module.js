import API from "../../api"

const state = {
    data: null,
    error: null,
    page: null,
    pending: true,
    detailData: null
}

const getters = {
    packagesList: state => state.data,
    pendingStatus: state => state.pending,
    packagesPage: state => state.page,
    packageDetailData: state => state.detailData
}

const mutations = {
    packageList(state, data = null, error = null) {
        state.pending = false
        state.data = JSON.parse(JSON.stringify(data))
        state.error = error
    },
    setPage(state, value = 1) {
        state.page = value
    },
    setPackageDetail(state, data = null) {
        state.detailData = JSON.parse(JSON.stringify(data))
    }
}

const actions = {
    async fetchPackageList({ commit }) {
        try {
            const { data } = await API.get("stats/packages")
            commit("packageList", data)
        } catch (error) {
            commit("packageList", { error })
        }
    },
    async fetchPackageDetail({ commit }, [type, name]) {
        try {
            const { data } = await API.get(`package/${type}/${name}`)
            commit("setPackageDetail", data)
        } catch (error) {
            console.log(error)
        }
    },
    updatePage({ commit }, value) {
        commit("setPage", value)
    }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}