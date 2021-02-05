import Vue from 'vue'
import VueRouter from 'vue-router'
import loginRouter from './login/index';
Vue.use(VueRouter);
const routes =  [
  {
    path: '/',
    redirect: '/login' 
  },
  loginRouter
];
const router = new VueRouter({
  routes
})
export default router;