<template>
  <div class="quiz">
    <h1>Welcome to the <span class="name">{{ quiz.title }}</span> quiz !</h1>
    <form class="questionsList bg-light" @submit="playerAnswersForm" >
      <div
        class="question"
        v-for="question in quiz.questions"
        :key="question.id"
      >
        <label
          :for="question.id"
          class="question-label"
        >
          {{ question.id + 1 }}) {{ question.questionTitle }}
        </label>

        <div
          v-for="response in question.responses"
          :key="response.id"
          class="form-check form-check-inline"
        >
          <label :for="response.id" class="form-check-label">{{ response.responseTitle }}</label>
          <input
            type="radio"
            :name="question.questionTitle"
            :id="response.responseTitle"
            :value="response.responseTitle"
            class="form-check-input"
            required
            @click="checkIfRadioBtnIsSelected(response.responseTitle)"
          >
        </div>
      </div>
      <button
        v-if="message === ''"
        type="submit"
        class="btn btn-success"
      >
        See result
      </button>

      <button
        v-else
        type="button"
        class="btn btn-success"
        @click="tryQuizAgain"
      >
        Try Again !
      </button>
    </form>
    <p>{{ message }}</p>
    <iframe
      v-if="gif != ''"
      :src="gif"
      width="480"
      height="270"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    ></iframe>
    <section class="vote" v-if="gif != ''">
      <h2 class="vote-title">Rate this quiz</h2>
      <button
        type="button"
        class="btn btn-success vote-btn"
        @click.once="voteUp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="50" height="50" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M7 11v8a1 1 0 0 1 -1
          1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4
          0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"/>
        </svg>
      </button>
      <button
        type="button"
        class="btn btn-danger vote-btn"
        @click.once="voteDown"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-down" width="50" height="50" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1
          0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2
          3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
        </svg>
      </button>

      <p v-if="quiz.vote <= 0 || quiz.vote === 1" class="vote-numberOfVote">
        This quiz has {{ quiz.vote }} vote.
      </p>
      <p v-else class="vote-numberOfVote">
        This quiz has {{ quiz.vote }} votes.
      </p>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'OneQuiz',
  created() {
    document.title = this.quiz.title;
    // Emptying the array of results for search bar
    this.$store.state.searchResults = [];
  },
  data() {
    return {
      routerSlug: this.$route.params.slug,
      playerAnswers: [],
      message: '',
      gif: '',
    };
  },
  computed: {
    ...mapState(['quizList']),
    quiz() {
      return this.quizList.find(
        (quiz) => quiz.slug === this.routerSlug,
      );
    },
  },
  methods: {
    playerAnswersForm(event) {
      event.preventDefault();
      return this.checkCorrectAnswer();
    },
    checkCorrectAnswer() {
      // Getting the current quiz
      const currentQuiz = this.quizList.find(
        (quiz) => quiz.slug === this.routerSlug,
      );

      // Getting the related questions list for the current quiz
      const questionsListArray = currentQuiz.questions;

      let score = 0;

      // For each question, check the correct answer
      questionsListArray.forEach((question) => {
        const { correctAnswer } = question;

        // For each answer inside the player answers array
        this.playerAnswers.forEach((playerAnswer) => {
          // If correct answer, add 1 to the score
          if (correctAnswer === playerAnswer) {
            score += 1;
          }
        });
      });

      // If all answers are correct
      if (score === questionsListArray.length) {
        this.message = '100% correct !';
        this.gif = 'https://giphy.com/embed/g9582DNuQppxC';

        return this.message;
      }

      // If all answers are incorrect
      if (score === 0) {
        this.message = `${score} correct answers out of the ${questionsListArray.length} questions.`;
        this.gif = 'https://giphy.com/embed/9oF7EAvaFUOEU';

        return this.message;
      }

      // If answers are partially correct (ex: 3 out of 5)
      this.gif = 'https://giphy.com/embed/n5VaQoW39Z9S0';
      this.message = `${score} correct answers out of the ${questionsListArray.length} questions.`;

      return this.message;
    },
    checkIfRadioBtnIsSelected(responseTitle) {
      const name = document.getElementById(responseTitle).checked;

      this.playerAnswers.push(responseTitle);

      console.log('Checked ->', name);
    },
    tryQuizAgain() {
      this.message = '';
      this.gif = '';
      this.playerAnswers = [];

      const allRadiosBtn = document.getElementsByTagName('input');

      for (let i = 0; allRadiosBtn.length; i += 1) {
        allRadiosBtn[i].checked = false;
      }
    },
    voteUp() {
      // Getting the current quiz
      const currentQuiz = this.quizList.find(
        (quiz) => quiz.slug === this.routerSlug,
      );

      currentQuiz.vote += 1;
    },
    voteDown() {
      // Getting the current quiz
      const currentQuiz = this.quizList.find(
        (quiz) => quiz.slug === this.routerSlug,
      );

      currentQuiz.vote -= 1;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/css/vars.scss';

.name {
  color: $color;
}

.questionsList {
  width: 80%;
  margin: 5rem auto;
  padding: 1rem;
}

.question {
  margin: 2rem 0.5rem;

  &-label {
    width: 100%;
    font-weight: bold;
    margin-bottom: 0.7rem;
  }
}

.giphy-embed {
  margin-bottom: 5rem;
}

.vote {
  margin: 0 auto 5rem;
  background: rgba(0, 0, 0, 0.089);
  border: 1px solid $main ;
  border-radius: .25rem;
  padding: 1rem;
  width: 60%;

  &-title {
    color: $main;
    margin-bottom: 1rem;
  }

  &-btn {
    margin: 0 0.5rem;
  }

  &-numberOfVote {
    margin-top: 1rem;
  }
}
</style>
