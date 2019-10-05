import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BlogPost from './components/BlogPost'

Vue.config.productionTip = false

Vue.component('blog-post', BlogPost)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
