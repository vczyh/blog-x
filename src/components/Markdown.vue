<template>
  <article class="markdown-body">
    <h1>Unicorns</h1>
    <p>All the things</p>
  </article>
</template>

<script>
export default {
  name: 'Markdown',
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
