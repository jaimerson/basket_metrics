import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio.vue'
import Partidas from './views/Partidas.vue'
import Times from './views/Times.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/partidas',
      name: 'partidas',
      component: Partidas
    },
    {
      path: '/times',
      name: 'times',
      component: Times
    }
  ]
})
