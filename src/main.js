import Vue from 'vue'
import App from './App.vue'
import store from './store';

// styles
import vuetify from './plugins/vuetify'
import './styles/app.scss'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
