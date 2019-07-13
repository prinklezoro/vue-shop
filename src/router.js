import VueRouter from 'vue-router'
import index from './template/index.vue'
import person from './template/person.vue'
import cart from './template/cart.vue'
import search from './template/search.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/index', component: index },
        { path: '/cart', component: cart },
        { path: '/person', component: person },
        { path: '/search', component: search }
    ]
})

export default router