<template>
  <div>
    <MarkdownEdit @save="save"></MarkdownEdit>
  </div>
</template>

<script>
import MarkdownEdit from '@/components/MarkdownEdit.vue';
import { addPost } from '@/api/post';

export default {
  name: 'Add',
  components: { MarkdownEdit },
  methods: {
    save(value) {
      console.log('saveeeee', value);
      addPost({
        title: 'title',
        content: value,
      });
    },
  },
};
</script>

<style scoped>

</style>
