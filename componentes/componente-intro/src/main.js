import Vue from 'vue'
import App from './App.vue'
import AppContadores from './AppContadores.vue'

Vue.config.productionTip = false
Vue.component('app-contadores', AppContadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
