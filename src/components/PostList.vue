<template>
  <div>
    <v-card
      v-for="post in posts"
      :key="post.postId"
      :to="{name: 'Post',params:{id:post.postId}}"
      outlined
      rounded
      class="mb-5"
      :style="style"
    >
      <v-img v-if="post.coverURL" :src="post.coverURL" height="170px"></v-img>
      <v-card-title>{{ post.title }}</v-card-title>
      <!--      <v-card-subtitle>{{ post.subtitle }}</v-card-subtitle>-->
      <v-card-text class="d-flex flex-wrap">
        <div class="d-flex flex-wrap mr-5">
          <v-icon dense class="mr-1">mdi-clock-time-eight</v-icon>
          <span>{{ timeFormat(post.createdAt) }}</span>
        </div>
        <div
          v-if="post.tags"
          class="d-flex flex-wrap"
        >
          <v-icon dense class="mr-1">mdi-label</v-icon>
          <span
            v-for="tag in post.tags"
            :key="tag.tag_id"
            class="mr-2"
          >
            {{ tag.name }}
          </span>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { format } from '@/util/time';

export default {
  name: 'PostList',
  props: ['posts'],
  computed: {
    style() {
      return {
        width: this.$vuetify.breakpoint.mobile ? '90vw' : '800px',
      };
    },
  },
  methods: {
    timeFormat(str) {
      return format(str);
    },
  },
};
</script>

<style scoped>

</style>
