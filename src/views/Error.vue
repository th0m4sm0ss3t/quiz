<template>
  <div class="error">
    <Error404 />
  </div>
</template>

<script>
// @ is an alias to /src
import Error404 from '@/components/Error404.vue';

export default {
  name: 'Error',
  components: {
    Error404,
  },
};
</script>
