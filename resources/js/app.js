/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap")

window.Vue = require("vue")

import App from "./App.vue"

// plugins
import store from "./store"
import vuetify from "./plugins/vuetify"

import "./plugins/vuelidate"

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
  el: "#app",
  vuetify,
  store,
  render: (h) => h(App)
})
