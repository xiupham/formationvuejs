import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    init(state, items) {
      state.items = items;
    }
  },
  actions: {}
});
