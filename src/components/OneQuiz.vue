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
    };
  },
  computed: {
    ...mapState(['quizList', 'chosenResponse1', 'chosenResponse2']),
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
            // console.log('correctAnswer ->', correctAnswer);
            // console.log('playerAnswer ->', playerAnswer);
          }
        });
      });

      if (score <= 1) {
        this.message = `You have answered correctly to ${score} question !`;
        return this.message;
      }

      this.message = `You have answered correctly to ${score} questions !`;
      return this.message;
    },
    checkIfRadioBtnIsSelected(responseTitle) {
      const name = document.getElementById(responseTitle).checked;

      this.playerAnswers.push(responseTitle);

      console.log('Checked ->', name);
    },
    tryQuizAgain() {
      this.message = '';
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
</style>
