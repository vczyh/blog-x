<template>
  <div class="markdown-body" v-html="render">
<!--    <h1>Unicorns</h1>-->
<!--    <p>All the things</p>-->
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  name: 'Markdown',
  props: ['content'],
  data: () => ({
    // rendered: '',
  }),
  computed: {
    render() {
      const md = new MarkdownIt();
      // console.log('mk', this.content);
      return md.render(this.content);
    },
  },
  // watch: {
  //   content() {
  //     this.render();
  //   },
  // },
  // methods: {
  //   render() {
  //     const md = new MarkdownIt();
  //     // console.log('mk', this.content);
  //     this.rendered = md.render(this.content);
  //   },
  // },
  // created() {
  //   this.render();
  // },
};
</script>
<style scoped>
@import '~github-markdown-css/github-markdown.css';

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
