import {createApp} from 'vue'
import App from './App.vue'
import './style.css';
import Antd from 'ant-design-vue';
import { pinia } from './stores';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)
app.use(Antd)
app.use(pinia)
app.mount('#app')
