<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ></v-avatar>
        <v-btn
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          text
        >
          {{ link.name }}
        </v-btn>
        <!--        <v-spacer></v-spacer>-->
        <!--        <v-responsive max-width="260">-->
        <!--          <v-text-field-->
        <!--            dense-->
        <!--            flat-->
        <!--            hide-details-->
        <!--            rounded-->
        <!--            solo-inverted-->
        <!--          ></v-text-field>-->
        <!--        </v-responsive>-->
      </v-container>
    </v-app-bar>

    <v-main class="lighten-3">
             <v-container fluid>
      <router-view :key="key"></router-view>
             </v-container>
    </v-main>

    <v-footer app fixed>
      Footer
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },
  computed: {
    key() {
      return this.$route.path + new Date();
    },
  },
  data: () => ({
    links: [
      {
        name: '首页',
        path: '/',
      },
      {
        name: '标签',
        path: '/tags',
      },
      {
        name: '时间轴',
        path: '/timeline',
      },
      {
        name: '关于',
        path: '/about',
      },
      {
        name: '写博客',
        path: '/add',
      },
    ],
  }),
};
</script>

<style>
.theme--light.v-application code {
  background-color: initial !important;
  color: currentColor;
}
</style>
