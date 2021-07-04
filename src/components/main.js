// 导入头部组件
import head from '../components/head/head.vue'

/**
 * 全局filter
 */
import filterInit from '../util/filter'

filterInit(Vue)

Vue.component('xk-head', head)

Vue.config.devtools = true
window.Vue = Vue
