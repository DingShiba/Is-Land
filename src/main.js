
import './assets/css/main.css'
import  i18n  from './assets/language/index.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)

app.use(router)
    .use(i18n)
    .use(Antd)
    .mount('#app')
