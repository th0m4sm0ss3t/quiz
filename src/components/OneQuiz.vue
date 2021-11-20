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
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'OneQuiz',
  created() {
    document.title = this.quiz.title;
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
      // console.log('playerAnswers');
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
        this.message = `${score} correct answer out of the ${questionsListArray.length} questions.`;
        this.gif = 'https://giphy.com/embed/9oF7EAvaFUOEU';

        return this.message;
      }

      // If answers are partially correct (ex: 3 out of 5)
      this.gif = 'https://giphy.com/embed/n5VaQoW39Z9S0';
      this.message = `${score} correct answer out of the ${questionsListArray.length} questions.`;

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
</style>
