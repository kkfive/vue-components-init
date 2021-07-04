// 导入头部组件
import { Button } from 'element-ui'
import head from '../components/head/head.vue'
/**
 * 全局filter
 */
import filterInit from '../util/filter'

filterInit(Vue)

Vue.component(head.name, head)
Vue.component(Button.name, Button)

Vue.config.devtools = process.env.NODE_ENV === 'production' ? false : true
window.Vue = Vue
