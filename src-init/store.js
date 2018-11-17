import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
  count: 10
};

// 处理状态(数据)变化
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
  oddAddThree(state) {
    state.count += 3;
  }
};

// 处理你要干什么(异步请求,判断,流程控制等等)
const actions = {
  increment: ({commit}) => {
    commit('increment');
  },
  decrement: ({commit}) => {
    commit('decrement');
  },
  oddAddThree: ({commit, state}) => {
    if (state.count % 2 !== 0) {
      commit('oddAddThree')
    }
  },
  evenAdd: ({commit, state}) => {
    if (state.count % 2 === 0) {
      commit('increment')
    }
  },
  AddAsync: ({commit, state}) => {
    new Promise((resolve, reject) => {
      setTimeout(()=> {
        commit('increment');
        resolve();
      }, 1000)
    })
  }
};

const getters = {
  count(state) {
    return state.count;
  },
  oddOrEven(state) {
    return state.count % 2 === 0 ? "偶数" : "奇数"
  }
};

// 需要导出store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
