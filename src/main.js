import Vue from 'vue';
import mavonEditor from 'mavon-editor';
import App from './App.vue';
import router from './router';

import 'mavon-editor/dist/css/index.css';

Vue.use(mavonEditor);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
