<template>
  <div>
    <v-list-item>
      <Cover :cover="cover" @save="saveCoverSetting"></Cover>
      <Tags class="ml-4" :post-id="id"></Tags>
      <v-btn class="ml-4" depressed outlined @click="save">
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
    <MarkdownEdit :content="initContent" @change="change" @save="saveContent"></MarkdownEdit>
  </div>
</template>

<script>
import MarkdownEdit from '@/components/MarkdownEdit.vue';
import Cover from '@/components/Cover.vue';
import Tags from '@/components/Tags.vue';
import { addPost, getPostByPostId, updatePost } from '@/api/post';

export default {
  name: 'Edit',
  components: {
    Cover,
    Tags,
    MarkdownEdit,
  },
  props: ['id'],
  data() {
    return {
      postId: this.id,
      title: '',
      subtitle: '',
      initContent: '',
      content: '',
      cover: {
        url: '',
        desc: '',
      },
    };
  },
  mounted() {
    if (this.postId) {
      this.getPostInfo();
    }
  },
  methods: {
    getPostInfo() {
      getPostByPostId(this.postId)
        .then((res) => {
          // console.log(res.data);
          this.title = res.data.title;
          this.subtitle = res.data.subtitle;
          this.initContent = res.data.content;
          this.content = res.data.content;
          this.cover.url = res.data.cover_url;
          this.cover.desc = res.data.cover_desc;
        });
    },
    save() {
      // 修改
      if (this.postId) {
        updatePost(this.postId, {
          title: this.title,
          subtitle: this.subtitle,
          content: this.content,
        });
      } else {
        // 创建
        addPost({
          title: this.title,
          subtitle: this.subtitle,
          content: this.content,
        }).then((res) => {
          this.postId = res.data;
        });
      }
    },
    saveContent(value) {
      // 修改
      if (this.postId) {
        updatePost(this.postId, {
          content: value,
        });
      }
    },
    saveCoverSetting(cover) {
      // 修改
      if (this.postId) {
        updatePost(this.postId, {
          cover_url: cover.url,
          cover_desc: cover.desc,
        });
      } else {
        // 创建
        addPost({
          cover_url: cover.url,
          cover_desc: cover.desc,
        }).then((res) => {
          this.postId = res.data;
        });
      }
    },
    change(value) {
      this.content = value;
    },
  },
};
</script>

<style scoped>

</style>
