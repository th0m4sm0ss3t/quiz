import { createStore } from 'vuex';

import data from '@/data/data';

export default createStore({
  state() {
    return {
      quizList: data,
      searchResults: [],
      errorMessage: '',
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
    // For searchbar
    requestedQuizThroughSearchBar: (state) => (request) => {
      // Emptying the search array before the search
      state.searchResults = [];

      state.quizList.forEach((quiz) => {
        const UppercasedFirstLetterRequest = request.charAt(0).toUpperCase() + request.slice(1);

        if (quiz.title.includes(UppercasedFirstLetterRequest)) {
          // Emptying the message error
          state.errorMessage = '';

          state.searchResults.push(quiz);
        }

        if (state.searchResults.length === 0) {
          state.errorMessage = 'Sorry, the search did not find any match. Try something else !';

          return state.errorMessage;
        }

        return console.log('INSIDE FOREACH');
      });

      return state.searchResults;
    },
  },
});
