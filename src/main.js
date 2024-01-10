import Vue from 'vue'
import App from './App.vue'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//  import ElButton from './components/ElButton'
// import ElButtonGroup from './components/ElButtonGroup'
// import ElRow from './components/ElRow'

// Vue.component('ElButton', ElButton)
// Vue.component('ElButtonGroup', ElButtonGroup)
// Vue.component('ElRow', ElRow)

// import ElementUI from './element-ui';
Vue.use(ElementUI);

Vue.config.productionTip = false
// Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  
}).$mount('#app')
