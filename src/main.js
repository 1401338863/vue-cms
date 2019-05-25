import Vue from 'vue'
import App from './App'
import router from './router/router'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

// mui的css配置
import './assets/mui/css/mui.css'
import './assets/mui/css/icons-extra.css'

Vue.use(Mint)

new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
