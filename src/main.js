import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TableCompDynamic from './components/TableComponent.vue'
import Notifications from '@kyvg/vue3-notification'


const app = createApp(App);
app.component('TableCompDynamic', TableCompDynamic)
app.use(Notifications)
app.use(router).mount('#app')
