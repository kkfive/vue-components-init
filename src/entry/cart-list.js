/**
 * 购物车列表 /tmpl/cart_list.html
 */

import { createApp } from 'vue'
import { ConfigProvider } from 'vant'
// 导入头部组件
import App from '../views/cart_list/App.vue'

const app = createApp(App)
app.use(ConfigProvider)

app.directive('link', (el, binding) => {
  el.addEventListener('click', () => {
    location.href = binding.value
  })
})

window['VueApp'] = app
