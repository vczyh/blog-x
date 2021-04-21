<template>
  <div>
    <div class="post-info">
      <span class="text-h4">{{ title }}</span>
      <v-divider class="my-2"></v-divider>
      <div class="d-flex">
        <span class="d-flex">
          <v-icon left>mdi-clock-time-eight</v-icon>
          {{ timeFormat(createdAt) }}
        </span>
        <div v-if="tags" class="d-flex ml-5">
          <v-icon left>mdi-label</v-icon>
          <span
            v-for="tag in tags"
            :key="tag.tag_id"
            @click="$router.push({name: 'Tag', params:{id:tag.tag_id}})"
            class="mr-3"
            style="cursor: pointer"
          >
            {{ tag.name }}
          </span>
        </div>
      </div>
      <div class="d-flex justify-end my-2">
        <v-btn
          :to="{name:'Edit',params:{id:id}}"
          depressed
          outlined
          small
        >编辑
        </v-btn>
      </div>
      <v-img :src="coverURL"></v-img>
    </div>
    <Markdown :content="content"/>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown.vue';
import { getPostByPostId } from '@/api/post';
import { format } from '@/util/time';

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
    tags: '',
    createdAt: '',
  }),
  mounted() {
    getPostByPostId(this.id)
      .then((res) => {
        this.title = res.data.title;
        this.subtitle = res.data.subtitle;
        this.content = res.data.content;
        this.coverURL = res.data.cover_url;
        this.coverDesc = res.data.cover_desc;
        this.tags = res.data.tags;
        this.createdAt = res.data.created_at;
      });
  },
  methods: {
    timeFormat(str) {
      return format(str);
    },
  },
};
</script>

<style scoped>
.post-info {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 0px 45px;
}

@media (max-width: 767px) {
  .post-info {
    padding: 15px;
  }
}
</style>
