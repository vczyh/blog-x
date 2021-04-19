<template>
  <div>
    <v-btn
      outlined
      depressed
      @click="showDialog">标签设置
    </v-btn>

    <v-dialog
      style="z-index: 10000"
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">标签设置</span>
        </v-card-title>
        <v-card-text>
          <v-chip
            v-for="tag in postTags"
            :key="tag.tagId"
            close
            @click:close="deletePostTag(tag)"
            class="ma-1"
          >
            {{ tag.name }}
          </v-chip>
          <v-divider class="my-4"></v-divider>
          <v-chip
            v-for="tag in allTags"
            :key="tag.tagId"
            class="ma-1"
            @click="addPostTag(tag)"
          >
            {{ tag.name }}
          </v-chip>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false">关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { getTagList } from '@/api/tag';
import { getPostByPostId, addPostTag, deletePostTag } from '@/api/post';

export default {
  name: 'Tags',
  props: ['postId'],
  data() {
    return {
      dialog: false,
      tags: [],
    };
  },
  computed: {
    allTags() {
      return this.tags.filter((tag) => !tag.selected);
    },
    postTags() {
      return this.tags.filter((tag) => tag.selected);
    },
  },
  methods: {
    showDialog() {
      this.dialog = true;
      this.getTags();
    },
    addPostTag(tag) {
      addPostTag(this.postId, {
        tag_ids: [tag.tagId],
        // eslint-disable-next-line no-param-reassign
      }).then(() => { tag.selected = true; });
    },
    deletePostTag(tag) {
      // eslint-disable-next-line no-param-reassign
      deletePostTag(this.postId, tag.tagId).then(() => { tag.selected = false; });
    },
    async getTags() {
      // all tags
      let res = await getTagList();
      console.log('alltags', res);
      const tags = [];
      const resTags = res.data;
      if (resTags == null) {
        this.tags = tags;
        return;
      }
      for (let i = 0; i < resTags.length; i += 1) {
        tags.push({
          tagId: resTags[i].tag_id,
          name: resTags[i].name,
          selected: false,
        });
      }
      // post tags
      res = await getPostByPostId(this.postId);
      console.log('postTags', res);
      const resPostTags = res.data.tags;
      if (resPostTags == null) {
        this.tags = tags;
        return;
      }
      for (let i = 0; i < resPostTags.length; i += 1) {
        for (let j = 0; j < tags.length; j += 1) {
          if (tags[j].tagId === resPostTags[i].tag_id) {
            tags[j].selected = true;
            break;
          }
        }
      }
      this.tags = tags;
    },
  },
};
</script>

<style scoped>

</style>
