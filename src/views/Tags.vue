<template>
  <div class="d-flex flex-column align-center">
    <div class="tags ma-2">
      <v-btn
        v-for="tag in tags"
        :key="tag.tagId"
        :to="'/tag/'+tag.tagId"
        text
      >
        {{ tag.name }}
      </v-btn>
    </div>
    <post-list :posts="posts"></post-list>
    <v-row justify="center">
      <v-container class="max-width">
        <v-pagination
          v-if="showPagination"
          v-model="pagination.page"
          class="my-4"
          :length="pagination.len"
          :total-visible="7"
        ></v-pagination>
      </v-container>
    </v-row>
  </div>
</template>

<script>
import { getTagList } from '@/api/tag';
import { getPostList } from '@/api/post';
import PostList from '@/components/PostList.vue';

export default {
  name: 'Tags',
  components: { PostList },
  props: ['id'],
  data() {
    return {
      tags: [],
      posts: [],
      pagination: {
        page: 1,
        len: 1,
        pageSize: 2,
        total: 0,
      },
    };
  },
  watch: {
    'pagination.page': function () {
      this.getPostListByTagId();
    },
  },
  mounted() {
    this.getTagList();
    this.getPostListByTagId();
  },
  computed: {
    showPagination() {
      return this.pagination.total > this.pagination.pageSize;
    },
  },
  methods: {
    async getTagList() {
      const res = await getTagList();
      console.log(res);
      const tags = [];
      if (res.data == null) {
        this.tags = tags;
        return;
      }
      for (let i = 0; i < res.data.length; i += 1) {
        tags.push({
          tagId: res.data[i].tag_id,
          name: res.data[i].name,
        });
      }
      this.tags = tags;
    },
    async getPostListByTagId() {
      const res = await getPostList('', this.pagination.page, this.pagination.pageSize, this.id);
      console.log(res);
      this.pagination.page = res.data.page;
      this.pagination.len = res.data.page_number;
      this.pagination.total = res.data.total;
      if (res.data.list === null) {
        return;
      }
      const posts = [];
      for (let i = 0; i < res.data.list.length; i += 1) {
        const post = res.data.list[i];
        posts.push({
          postId: post.post_id,
          title: post.title,
          subtitle: post.subtitle,
          content: post.content,
          coverURL: post.cover_url,
          coverDesc: post.cover_desc,
          createdAt: post.created_at,
          updatedAt: post.updated_at,
        });
      }
      this.posts = posts;
    },
  },
};
</script>

<style scoped>
.tags {
  width: 740px
}
</style>
