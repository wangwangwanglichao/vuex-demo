import * as types from './types'

export default {
  increment: ({commit}) => {
    commit(types.INCREMENT)
  },
  decrement: ({commit}) => {
    commit(types.DECREMENT)
  },
  oddAddThree: ({commit}) => {
    commit(types.ODDADDTHREE)
  },
  evenAdd: ({commit}) => {
    commit(types.EVENADD)
  },
  AddAsync: ({commit}) => {
    new Promise((resolve) => {
      setTimeout(() => {
        commit(types.INCREMENT);
      }, 2000);
      resolve();
    })
  }
}
