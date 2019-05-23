// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import './assets/mui/css/mui.css'

// import { Header } from 'mint-ui';
// Vue.config.productionTip = false

Vue.use(Mint)
// Vue.component(Header.name, Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
