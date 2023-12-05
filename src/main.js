import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueWindowSizePlugin } from 'vue-window-size/plugin'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueWindowSizePlugin);

app.mount('#app')
