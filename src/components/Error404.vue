<template>
  <div class="error">
    <h1 class="title">Error 404</h1>
    <h2>Oups !</h2>
    <p class="text">The page that you are looking for does not exist.</p>
      <kinesis-container>
        <kinesis-element :strength="8" type="depth">
          <iframe src="https://giphy.com/embed/tJ0esXPejKnaseFklX" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </kinesis-element>
      </kinesis-container>
    <button type="button" class="btn btn-success">
       <router-link to="/" class="router-link">Go back to the homepage</router-link>
    </button>
  </div>
</template>

<script>

export default {
  name: 'quizList',
  created() {
    document.title = 'Error 404';
    // Emptying the array of results for search bar
    this.$store.state.searchResults = [];
  },
};
</script>

<style scoped lang="scss">
@import '@/css/vars.scss';

.title {
  font-family: $titleFont;
  text-transform: uppercase;
  color: $color;
  margin: 5rem 0;
}

.text {
  margin: 1rem 0 2rem;
}

.btn {
  margin: 4rem 0;
}

.router-link {
  color: white;
  text-decoration: none;
}

</style>
