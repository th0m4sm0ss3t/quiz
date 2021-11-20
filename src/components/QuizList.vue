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
                  class="btn btn-success"
                >
                  Start the quiz
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
.quizList {
  width: 80%;
  margin: 5rem auto;
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
}

</style>
