<template>
  <div class="quiz">
    <OneQuiz />
  </div>
</template>

<script>
// @ is an alias to /src
import OneQuiz from '@/components/OneQuiz.vue';

export default {
  name: 'Quiz',
  components: {
    OneQuiz,
  },
};
</script>
