import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  mvId: 0
}

const mutations={
  playMv(state,n){
      state.mvId = n;
  }
}

export default new Vuex.Store({
  state,
  mutations
});

