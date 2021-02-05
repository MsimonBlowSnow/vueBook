import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import router from '@/routers/index'
import '@/lib/antdComponent/index'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
