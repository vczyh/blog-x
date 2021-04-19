<template>
  <div>
    <mavon-editor class="editor" v-model="value" @save="$emit('save',value)" @change="change"/>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';

export default {
  name: 'MarkdownEdit',
  components: { mavonEditor },
  props: ['content'],
  data() {
    return {
      value: this.content,
    };
  },
  watch: {
    content() {
      this.value = this.content;
    },
  },
  // mounted() {
  //   this.value = this.content;
  // },

  methods: {
    change(value, render) {
      this.$emit('change', value, render);
    },
  },

};
</script>

<style scoped>
@import '~mavon-editor/dist/css/index.css';
.editor{
  /*height: 500px;*/
}

</style>
