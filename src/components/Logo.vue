<template>
  <router-link v-bind="$attrs">
    <v-avatar>
      <v-img
        src="https://p.vczyh.com/avatar.jpg"
      />
    </v-avatar>
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
  computed: {
    // size() {
    //   return this.$vuetify.breakpoint.smAndUp ? 400 : 250;
    // },
  },
};
</script>

<style scoped>

</style>
