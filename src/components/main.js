// 导入头部组件
import App from '../App.vue'
// import head from '../components/head/head.vue'
const app = Vue.createApp(App)
// app.component('SearchInput', SearchInputComponent)
// app.component(head.name, head)

// Vue.config.devtools = process.env.NODE_ENV === 'production' ? false : true
// window.vueApp = app
app.mount('#page')
