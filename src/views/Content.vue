<template>
  <div>
    <div class="post-info">
      <span class="text-h4">{{ title }}</span>
      <div class="d-flex justify-end my-2">
        <v-btn depressed outlined :to="'/edit/'+id">编辑</v-btn>
      </div>
      <v-img :src="coverURL"></v-img>
    </div>
    <Markdown :content="content"/>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown.vue';
import { getPostByPostId } from '@/api/post';

export default {
  name: 'Content',
  components: { Markdown },
  props: ['id'],
  data: () => ({
    content: '',
    title: '',
    subtitle: '',
    coverURL: '',
    coverDesc: '',
  }),
  mounted() {
    getPostByPostId(this.id)
      .then((res) => {
        this.title = res.data.title;
        this.subtitle = res.data.subtitle;
        this.content = res.data.content;
        this.coverURL = res.data.cover_url;
        this.coverDesc = res.data.cover_desc;
      });
  },
};
</script>

<style scoped>
.post-info {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 30px 45px 0;
}

@media (max-width: 767px) {
  .post-info {
    padding: 15px;
  }
}
</style>
