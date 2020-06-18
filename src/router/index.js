import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Table from '../views/Table'
import CreateTable from '../views/CreateTable'
import Search from '../views/Search'
import Signup from '../views/Signup'
import Player from '../views/Player'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Login', component: Home },
  { path: '/buscar', name: 'Search', component: Search },
  { path: '/mesa', name: 'Table', component: Table },
  { path: '/crearmesa', name: 'CreateTable', component: CreateTable },
  { path: '/cartas', name: 'Player', component: Player },
  { path: '/registrase', name: 'Signup', component: Signup },
]

const router = new VueRouter({
  routes
})

export default router
