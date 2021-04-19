<template>
  <div>
      <v-card
        v-for="post in posts"
        :key="post.postId"
        :to="'/content/'+post.postId"
        width="740"
        outlined
        rounded
        class="ma-5"
      >
        <v-img v-if="post.coverURL" :src="post.coverURL" height="170px"></v-img>
        <v-card-title>{{ post.title }}</v-card-title>
        <v-card-subtitle>{{ post.subtitle }}</v-card-subtitle>
        <v-card-text>
          <v-row align="center" justify="end">
            <span class="mr-4">Created: {{ timeFormat(post.createdAt) }}</span>
            <span>Updated: {{ timeFormat(post.updatedAt) }}</span>
          </v-row>
        </v-card-text>
      </v-card>
  </div>
</template>

<script>
import { format } from '@/util/time';

export default {
  name: 'PostList',
  props: ['posts'],
  methods: {
    timeFormat(str) {
      return format(str);
    },
  },
};
</script>

<style scoped>

</style>
