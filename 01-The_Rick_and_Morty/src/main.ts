import { createApp } from 'vue';
import App from './App.vue';
import routerMain from './router';
import { VueQueryPlugin } from '@tanstack/vue-query';

// Stores
import '@/stores/characters.store';

// Styles
import './assets/main.css';

const app = createApp(App);
// app.use(VueQueryPlugin);
VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 120, // 2 minutos
        refetchOnReconnect: 'always'
      }
    }
  }
});
app.use(routerMain);

app.mount('#app');
