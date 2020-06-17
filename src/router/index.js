import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Table from '../views/Table'
import CreateTable from '../views/CreateTable'
import Login from '../views/Login'
import Signup from '../views/Signup'
import Player from '../views/Player'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/mesa', name: 'Table', component: Table },
  { path: '/crearmesa', name: 'CreateTable', component: CreateTable },
  { path: '/cartas', name: 'Player', component: Player },
  { path: '/login', name: 'Login', component: Login },
  { path: '/registrase', name: 'Signup', component: Signup },
]

const router = new VueRouter({
  routes
})

export default router
