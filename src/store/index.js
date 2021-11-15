import { createStore } from 'vuex';

import data from '@/data/data';

export default createStore({
  state() {
    return {
      quizList: data,
    };
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
