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
  getters: {
    // Filter to find only the last quiz of the quizList array
    latestQuiz:
    (state) => (quizListLength) => state.quizList.find(
      (quiz) => quiz.id === quizListLength,
    ),
  },
});
