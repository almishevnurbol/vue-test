import Vue from "vue";
import Vuex from "vuex";
import packages from './modules/package.module'
import search from './modules/search.module'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    packages,
    search
  }

})