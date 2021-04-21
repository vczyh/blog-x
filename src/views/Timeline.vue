<template>
  <div class="timeline" :style="style">
    <!--    <div class="font-weight-bold ml-8 mb-2">-->
    <!--      Today-->
    <!--    </div>-->
    <v-timeline
      dense
    >
      <v-timeline-item
        v-for="t in timeline"
        :key="t.year || t.post.post_id"
        small
        hide-dot
        color="grey"
      >
        <span v-if="t.year" class="title">{{ t.year }}</span>
        <div v-else>
          <v-btn
            :to="'/content/' + t.post.post_id"
            text
            block
            class="pa-0 btn"
          >
            <span>{{ timeFormat(t.post.created_at) }}</span>
            <span class="ml-3">{{ t.post.title }}</span>
          </v-btn>
          <v-divider class="mt-1"></v-divider>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import { getPostList } from '@/api/post';
import { monthAndDay } from '@/util/time';

export default {
  name: 'Timeline',
  data() {
    return {
      timeline: [],
    };
  },
  mounted() {
    this.getPostList();
  },
  computed: {
    style() {
      return {
        width: this.$vuetify.breakpoint.mobile ? '90vw' : '800px',
      };
    },
  },
  methods: {
    timeFormat(str) {
      return monthAndDay(str);
    },
    async getPostList() {
      const res = await getPostList('timeline');
      if (res.data == null) {
        return;
      }
      const timeline = [];
      res.data.forEach((e) => {
        timeline.push({
          year: e.year,
        });
        e.list.forEach((post) => {
          timeline.push({
            post,
          });
        });
      });
      this.timeline = timeline;
    },
  },
};
</script>

<style scoped>
.timeline {
  margin: 0 auto
}
.timeline .btn {
  justify-content:start;
  text-transform:initial;
  font-size: 16px;
  font-weight: normal;
  color: #7F7F7F;
}
</style>
