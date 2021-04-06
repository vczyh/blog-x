<template>
  <div>
    <MarkdownEdit :content="content" @save="save"></MarkdownEdit>
  </div>
</template>

<script>
import MarkdownEdit from '@/components/MarkdownEdit.vue';
import { getPostByPostId, updatePost } from '@/api/post';

export default {
  name: 'Edit',
  components: { MarkdownEdit },
  props: ['id'],
  data: () => ({
    content: '',
  }),
  mounted() {
    console.log('id', this.id);
    getPostByPostId(this.id)
      .then((res) => {
        // console.log(res.data);
        this.content = res.data.content;
      });
  },
  methods: {
    save(value) {
      updatePost(this.id, {
        content: value,
      });
    },
  },
};
</script>

<style scoped>

</style>
