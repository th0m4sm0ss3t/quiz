<template>
  <div class="quiz">
    <QuizList />
  </div>
</template>

<script>
// @ is an alias to /src
import QuizList from '@/components/QuizList.vue';

export default {
  name: 'AllQuiz',
  components: {
    QuizList,
  },
};
</script>
