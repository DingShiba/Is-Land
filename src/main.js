
import './assets/css/main.css'
import  i18n  from './assets/language/index.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
    .use(i18n)
    .mount('#app')
