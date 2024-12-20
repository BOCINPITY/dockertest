import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { router } from '@/router/index'
import useResize from 'v-resize-cles'
import Loading from './components/ClesLoading'
const app = createApp(App)
app.use(Loading)
app.use(useResize)
app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')

declare module 'vue' {
  export interface ComponentCustomProperties {
    $clesLoading: {
      show: () => void,
      hide: () => void
    }
  }
}
