import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';
import checkout from './modules/checkout';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state,
  mutations,
  // actions,
  // getters,
  modules: {
    checkout
  },
  strict: debug
});
