<template>
  <div>
    <mavon-editor v-model="value"/>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';

export default {
  name: 'MarkdownEdit',
  components: { mavonEditor },
  data() {
    return {
      value: '',
    };
  },

};
</script>

<style scoped>

</style>
