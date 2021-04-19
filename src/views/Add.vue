<template>
  <div>
    <v-list-item>
      <Cover :cover="cover" @save="saveCoverSetting"></Cover>
      <v-btn class="ml-4" depressed outlined>
        保存
      </v-btn>
    </v-list-item>
    <v-list-item>
      <v-text-field
        v-model="title"
        label="标题"
        required
      ></v-text-field>
    </v-list-item>
    <v-list-item>
      <v-text-field
        v-model="subtitle"
        label="副标题"
        required
      ></v-text-field>
    </v-list-item>
    <MarkdownEdit @save="saveContent"></MarkdownEdit>
  </div>
</template>

<script>
import Cover from '@/components/Cover.vue';
import MarkdownEdit from '@/components/MarkdownEdit.vue';
import { addPost, updatePost } from '@/api/post';

export default {
  name: 'Add',
  components: {
    Cover,
    MarkdownEdit,
  },
  data() {
    return {
      cover: {},
      title: '',
      subtitle: '',
    };
  },
  methods: {
    saveContent(value) {
      addPost({
        title: this.title,
        content: value,
      });
    },
    saveCoverSetting(cover) {
      updatePost(this.id, {
        cover_url: cover.url,
        cover_desc: cover.desc,
      });
    },
  },
};
</script>

<style scoped>

</style>
