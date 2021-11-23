<template>
  <div class="quizList">
    <h1 class="title">All quiz</h1>
    <section class="list">
      <ul v-for="quiz in quizList" :key="quiz.id" class="card-deck">
        <li>
          <kinesis-container>
            <kinesis-element :strength="8" type="depth">
              <div class="card border-dark" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">{{ quiz.title }}</h5>
                  <p class="card-text">{{ quiz.description }}</p>
                    <router-link
                      :to="{
                        name: 'Quiz', params: { slug: quiz.slug }
                      }"
                      class="btn btn-success"
                    >
                      Start the quiz
                    </router-link>
                </div>
              </div>
            </kinesis-element>
          </kinesis-container>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'quizList',
  created() {
    document.title = 'Quiz list';
    // Emptying the array of results for search bar
    this.$store.state.searchResults = [];
  },
  computed: {
    ...mapState(['quizList']),
  },
};
</script>

<style scoped lang="scss">
@import '@/css/vars.scss';
.quizList {
  width: 80%;
  margin: 5rem auto;
}

.card-deck {
  padding: 0;
}

.title {
  font-family: $titleFont;
  text-transform: uppercase;
  color: $color;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 5rem 1rem;
}

.list li {
  list-style: none;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 15rem;
}

/* Small screen */
@media only screen and (max-width: 800px) {
  .list {
    justify-content: center;
  }
}

/* Medium screen */
@media only screen and (min-width: 801px) {
  .list {
    justify-content: center;
  }

  .card {
    margin: 0 0.5rem;
  }
}

/* Big screen */
@media only screen and (min-width: 1500px) {
  .card {
    margin: 0 0.5rem;
  }
}

</style>
