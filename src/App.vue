<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mdAndDown"
        @click.stop="drawer = !drawer"
      />
      <template v-if="$vuetify.breakpoint.smAndUp">
        <Logo
          v-if="$vuetify.breakpoint.smAndUp"
          :to="{name: 'Home'}"
          class="ml-10"
        />
        <v-spacer></v-spacer>
        <v-btn
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          text
        >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.name }}
        </v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      app
      temporary
    >
      <template #prepend>
        <v-toolbar
          flat
        >
          <v-list-item class="pa-0 mx-n1">
            <!--            <Logo></Logo>-->
            <v-spacer/>
            <!--            vczyh-->
          </v-list-item>
        </v-toolbar>
      </template>
      <v-list
        nav
      >
        <v-list-item-group
          v-model="group"
          color="primary"
        >
          <v-list-item
            v-for="link in links"
            :key="link.name"
            :to="link.path"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

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
import Logo from '@/components/Logo.vue';

export default {
  name: 'App',
  components: {
    Logo,
  },
  data: () => ({
    links: [
      {
        name: '首页',
        path: '/',
        icon: 'mdi-home',
      },
      {
        name: '标签',
        path: '/tags',
        icon: 'mdi-tag',
      },
      {
        name: '时间轴',
        path: '/timeline',
        icon: 'mdi-timeline',
      },
      // {
      //   name: '关于',
      //   path: '/about',
      // },
      {
        name: '写博客',
        path: '/add',
        icon: 'mdi-plus-box',
      },
    ],
    drawer: null,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  computed: {
    key() {
      return this.$route.path + new Date();
    },
  },
};
</script>

<style>
.theme--light.v-application code {
  background-color: initial !important;
  color: currentColor;
}
</style>
