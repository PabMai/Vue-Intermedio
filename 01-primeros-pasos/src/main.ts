import { createApp } from 'vue';
import App from './App.vue';
import routerMain from './router';

// Styles
import './assets/main.css';

const app = createApp(App);
app.use(routerMain);

app.mount('#app');
