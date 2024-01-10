

export default {
    install(Vue) {
      Vue.component('ElButton', () => import('@/element-ui/ElButton'))
      Vue.component('ElButtonGroup', () => import('@/element-ui/ElButtonGroup'))
      Vue.component('ElRow', () => import('@/element-ui/ElRow'))
      Vue.component('ElLink', () => import('@/element-ui/ElLink'))
      Vue.component('ElRadio', () => import('@/element-ui/ElRadio'))
    }
}