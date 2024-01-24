import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import router from './router'
import pinia from './store'

createApp(App).use(pinia).use(router).mount('#app')
