<template>
  <div>
    <form class="form-inline" @submit.prevent="getRequestedQuiz(requestedQuiz)">
      <input
        class="form-control"
        type="search"
        placeholder="Search for a specific quiz"
        aria-label="Search"
        v-model="requestedQuiz"
      >
      <button
        class="btn btn-success"
        type="submit"
      >
        Search
      </button>
    </form>

    <!-- If Search bar is empty -->
    <p v-if="errorMsg" class="errorMsg text-danger">{{ errorMsg }}</p>

    <!-- If search did not find a match -->
    <p v-if="errorMessage">{{ errorMessage }}</p>

    <section class="list">
      <p
        class="resultMsg"
        v-if="searchResults.length === 1"
      >
        {{ searchResults.length }} result found.
      </p>
      <p
        class="resultMsg"
        v-if="searchResults.length >= 2"
      >
        {{ searchResults.length }} results found.
      </p>

      <ul v-for="quiz in searchResults" :key="quiz.id" class="card-deck">
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
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'SearchBar',
  created() {
    if (this.routerSlug === 'search') {
      this.$store.state.searchResults = [];
    }
  },
  data() {
    return {
      errorMsg: '',
      requestedQuiz: '',
    };
  },
  methods: {
    getRequestedQuiz(requestedQuiz) {
      if (this.requestedQuiz === '') {
        this.errorMsg = 'Please enter a name for the requested quiz !';
        // supp msg after 4 sec
        setTimeout(this.suppressErrorMsg, 4000);
      } else {
        this.requestedQuiz = '';
        this.requestedQuizThroughSearchBar(requestedQuiz);
      }
    },
    suppressErrorMsg() {
      this.errorMsg = '';
    },
  },
  computed: {
    ...mapState(['searchResults', 'errorMessage']),
    ...mapGetters(['requestedQuizThroughSearchBar']),
  },
};
</script>

<style scoped lang="scss">
@import '@/css/vars.scss';

div {
  margin: 5rem auto;
}

/* Form */
.form-inline {
  width: 90%;
  margin: 0 auto 4rem;
  display: flex;
  justify-content: center;
}

.form-control {
  width: 100%;
  margin-right: 0.5rem;
}

.form-control:focus {
  border: $color 2px solid;
}
/* End Form */

/* Messages */
.errorMsg {
  margin: 0 auto 4rem;
  padding: 1rem;
  font-weight: bold;
  width: fit-content;
  background: #dc35463a;
  border: solid #DC3545 2px;
  border-radius: 6px;
}

.resultMsg {
  width: 100%;
}

/* End Messages */

.title {
  font-family: $titleFont;
  text-transform: uppercase;
  color: $color;
}

/* Card result */
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 5rem 1rem;
}

.list li {
  list-style: none;
}

.card-deck {
  padding: 0;
}

.card {
  margin: 0 0.5rem;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 15rem;
}
/* End Card result */

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

  .form-inline {
    width: 70%;
  }
}

/* Big screen */
@media only screen and (min-width: 1500px) {
  .form-inline {
    width: 50%;
  }
}

</style>
