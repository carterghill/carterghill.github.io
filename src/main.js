import Vue from 'vue'
import App from './App.vue'
import Navbar from './Navbar.vue'

var main = new Vue({
  el: '#app',
  render: h => h(App)
})

var navbar = new Vue({
  el: '#navbar',
  render: h => h(Navbar)
})
