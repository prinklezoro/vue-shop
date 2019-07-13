console.log('ok')

import Vue from 'vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import router from './router.js'
import app from './app.vue'
import './lib/mui/css/mui.css'
import 'mint-ui/lib/style.css'

Vue.use(VueRouter)
Vue.use(MintUI)

var vm = new Vue({
    el: '#app',
    render: e => e(app),
    router
})


