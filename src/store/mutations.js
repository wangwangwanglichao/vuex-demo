import {
  INCREMENT,
  DECREMENT,
  ODDADDTHREE,
  EVENADD,
  ADDASYNC
} from "./types";

import getters from './getters'

const state = {
  count: 0
};

const mutations = {
  [INCREMENT](state) {
    state.count++;
  },
  [DECREMENT](state) {
    state.count--;
  },
  [ODDADDTHREE](state) {
    if (state.count % 2 !== 0) {
      state.count += 3;
    }
  },
  [EVENADD](state) {
    if (state.count % 2 === 0) {
      state.count++;
    }
  },
  /*[ADDASYNC](state) {
    new Promise((resolve) => {
      setTimeout(() => {
        state.count++;
      }, 2000);
      resolve();
    })
  }*/
};

export default {
  state,
  mutations,
  getters
}
