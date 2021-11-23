<template>
  <div class="home">
    <h1 class="home-title">Check your knowledge with our quiz !</h1>
    <div class="home-quiz">
    <div id="latest-quiz">
      <h2 class="home-subtitle">Our latest quiz</h2>
      <router-link :to="`/quiz/${latestQuiz.slug}`">
        <img
          :src="latestQuiz.img"
          :alt="`Poster of ${latestQuiz.title}`"
        >
      </router-link>
    </div>
      <div class="subQuiz">
        <h2 class="home-subtitle">Don't know what quiz to take ? Try these !</h2>
        <router-link
          v-for="randomQuiz in randomQuiz"
          :key="randomQuiz.id"
          :to="`/quiz/${randomQuiz.slug}`"
          class="router-link"
        >
          <img
            :src="randomQuiz.img"
            :alt="`Poster of ${randomQuiz.title}`"
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  created() {
    document.title = 'Home';
    // Emptying the array of results for search bar
    this.$store.state.searchResults = [];
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['quizList']),
    latestQuiz() {
      return this.$store.getters.latestQuiz(this.quizListLength);
    },
    quizListLength() {
      return this.$store.state.quizList.length - 1;
    },
    randomQuiz() {
      // Clone the original quizList array
      const listOfQuiz = [...this.$store.state.quizList];
      // Get the length...

      const lastQuizListId = listOfQuiz.length;
      // ...to remove the last quiz item of the array
      // (latest quiz already appears on the home)
      listOfQuiz.pop(lastQuizListId);

      // Get 6 random quiz out of the array
      const listOfRandomQuiz = listOfQuiz.sort(() => 0.5 - Math.random()).slice(0, 6);

      return listOfRandomQuiz;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/css/vars.scss';

.home {
  width: 80%;
  margin: 5rem auto;
  padding: 1rem;

  &-title {
    margin-bottom: 4rem;
    font-family: $titleFont;
    color: $color;
  }

  &-subtitle {
    margin-bottom: 2rem;
    font-family: $titleFont;
    color: $color;
    width: 100%;
  }
}

.home-quiz {
  display: flex;
  justify-content: center;
}

#latest-quiz {
  box-sizing: border-box;
  width: 55%;
}

#latest-quiz img {
  border: solid 2px $color;
}

/* Small screen */
@media only screen and (max-width: 800px) {
  .home-quiz {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  #latest-quiz {
    width: 75%;
  }

  #latest-quiz img {
    height: auto;
    width: 100%;
  }

  .subQuiz {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    height: auto;
    margin: 2rem 0.5rem;
  }

  .router-link {
    width: 40%;
    margin: 1rem 0.5rem;
  }

  .subQuiz img {
    height: auto;
    width: 100%;
  }
}

/* Medium screen */
@media only screen and (min-width: 801px) {
  .home-quiz {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  #latest-quiz img {
    height: auto;
    width: 80%;
    margin-bottom: 2rem;
  }

  .subQuiz {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    height: auto;
    margin: 2rem 0.5rem;
  }

  .router-link {
    width: 15%;
  }

  .subQuiz img {
    height: auto;
    width: 100%;
  }
}

/* Big screen */
@media only screen and (min-width: 1500px) {
  .home-quiz {
    display: flex;
    justify-content: center;
  }
  #latest-quiz {
    box-sizing: border-box;
    width: 35%;
  }

  #latest-quiz img {
    height: 50%;
    width: auto;
  }

  .subQuiz {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 45%;
    height: 100%;
    margin: 0 0 0 0.5rem;
  }

  .router-link {
    width: 25%;
    margin: 1rem 0.5rem;
  }

  .subQuiz img {
    height: auto;
    width: 100%;
  }
}
</style>
