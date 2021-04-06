<template>
  <div class="d-flex flex-column align-center">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <v-hover
      v-for="post in posts"
      :key="post.postId"
      class="ma-2">
      <v-card
        :to="'/content/'+post.postId"
        min-width="740"
        outlined
        rounded
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>
        <v-card-title>{{ post.title }}</v-card-title>
        <!--        <v-card-subtitle>subtitle</v-card-subtitle>-->
        <v-card-text>
          <v-row align="center" justify="end">
            <span class="mr-4">CreatedAt 111</span>
            <span>UpdatedAt 222</span>
          </v-row>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
// @ is an alias to /src
import { getPost } from '@/api/post';

export default {
  name: 'Home',
  components: {},
  data: () => ({
    posts: [
      // {
      //   id: '0',
      //   title: 'title-0',
      //   content: 'content-0',
      // },
      // {
      //   id: '1',
      //   title: 'title-1',
      //   content: 'content-1',
      // },
      // {
      //   id: '2',
      //   title: 'title-2',
      //   content: 'content-2',
      // },
    ],
  }),
  mounted() {
    getPost()
      .then(((res) => {
        console.log(res);
        for (let i = 0; i < res.data.length; i += 1) {
          const post = res.data[i];
          this.posts.push({
            postId: post.post_id,
            title: post.title,
            content: post.content,
          });
        }
      }));
  },
};
</script>
<style scoped>

</style>
