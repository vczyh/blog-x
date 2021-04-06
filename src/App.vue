<template>
  <v-app id="inspire">
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
          {{ link.name}}
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
        <router-view></router-view>
    </v-main>

    <v-footer app>
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

  data: () => ({
    links: [
      {
        name: '首页',
        path: '/',
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
