<template>
  <div>
    <mavon-editor v-model="value" @save="$emit('save',value)"/>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';

export default {
  name: 'MarkdownEdit',
  components: { mavonEditor },
  props: ['content'],
  data() {
    return {
      value: '',
    };
  },
  watch: {
    content() {
      this.value = this.content;
    },
  },
  mounted() {
    this.value = this.content;
  },

};
</script>

<style scoped>
@import '~mavon-editor/dist/css/index.css';
</style>
