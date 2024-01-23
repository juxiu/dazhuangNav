import { createApp } from 'vue'
import App from './App.vue'
import './style/normalize.css'
import router from './router'

createApp(App).use(router).mount('#app')