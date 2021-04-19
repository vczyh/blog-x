<template>
  <div class="d-flex flex-column align-center">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <post-list :posts="posts"></post-list>
    <v-row justify="center">
<!--      {{pagination.page}}-->
<!--      {{pagination.len}}-->
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
import PostList from '@/components/PostList.vue';
import { getPostList } from '@/api/post';

export default {
  name: 'Home',
  components: { PostList },
  data: () => ({
    posts: [],
    pagination: {
      page: 1,
      len: 1,
      pageSize: 3,
      total: 0,
    },
  }),
  mounted() {
    this.getPostList();
  },
  watch: {
    'pagination.page': function () {
      this.getPostList();
    },
  },
  computed: {
    showPagination() {
      return this.pagination.total > this.pagination.pageSize;
    },
  },
  methods: {
    async  getPostList() {
      const res = await getPostList('', this.pagination.page, this.pagination.pageSize);
      this.pagination.page = res.data.page;
      this.pagination.len = res.data.page_number;
      this.pagination.total = res.data.total;
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

</style>
