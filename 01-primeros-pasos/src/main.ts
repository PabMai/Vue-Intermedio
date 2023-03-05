import { createApp } from 'vue';
import App from './App.vue';
import routerMain from './router';
import { VueQueryPlugin } from '@tanstack/vue-query';

// Styles
import './assets/main.css';

const app = createApp(App);
app.use(VueQueryPlugin);
app.use(routerMain);

app.mount('#app');
