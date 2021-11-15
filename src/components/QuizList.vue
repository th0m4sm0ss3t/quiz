<template>
  <div class="quizList">
    <h1 class="title">All quiz</h1>
    <section class="list">
      <ul v-for="quiz in quizList" :key="quiz.id" class="card-deck">
        <li>
          <div class="card border-dark" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{{ quiz.title }}</h5>
              <p class="card-text">{{ quiz.description }}</p>
                <router-link
                  :to="{
                    name: 'Quiz', params: { slug: quiz.slug }
                  }"
                  v-if="quiz.result === ''"
                  class="btn btn-success"
                >
                  Start the quiz
                </router-link>
                <router-link
                  :to="{
                    name: 'Quiz', params: { slug: quiz.slug }
                  }"
                  v-else
                  class="btn btn-success"
                >
                  I want to better my score !
                </router-link>
            </div>
          </div>
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
  },
  computed: {
    ...mapState(['quizList']),
  },
};
</script>

<style scoped lang="scss">
@import '@/css/vars.scss';

.title {
  font-family: $titleFont;
  text-transform: uppercase;
  color: $color;
}

.list {
  display: flex;
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

</style>
