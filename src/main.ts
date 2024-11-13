import { createApp } from 'vue'
import App from './App.vue'

// import YmUI from '../components/index'
import YmUI from 'vue-ym-ui'
import 'vue-ym-ui/dist/style.css'

const app = createApp(App)

app.use(YmUI).mount('#app')
