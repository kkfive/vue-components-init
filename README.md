## 关于

本项目用于重构整个页面或者部分页面所需要的项目。

## 快速开始

1. 安装依赖包

   ```sh
   npm i

   # or yarn install
   ```

2. 开始开发

   参见下文[关于开发](#关于开发)

3. 打包构建

   ```sh
   npm run build

   # or yarn build
   ```

## 关于开发

### 项目目录

```
vue-pages
 ├── index.html
 ├── package.json
 ├── postcss.config.js
 ├── README.md
 ├── src ---------------项目主目录
 │   ├── api ---------------请求的api接口
 │   │   ├── cart.js
 │   │   └── member.js
 │   ├── components ---------------通用类型的组件
 │   │   ├── good-item ---------------购物车商品组件
 │   │   │   ├── good-item.vue
 │   │   │   ├── index.scss
 │   │   │   └── theme.js
 │   │   ├── head --------------- 头部组件
 │   │   │   └── head.vue
 │   │   └── scroll-view ---------------弹性滚动组件
 │   │       ├── index.js
 │   │       ├── index.scss
 │   │       └── scroll-view.vue
 │   ├── entry ---------------各页面入口
 │   │   └── cart-list.js
 │   ├── styles ---------------全局通用样式
 │   │   ├── init.css
 │   │   └── mixin.scss
 │   ├── utils ---------------工具包
 │   │   ├── http.js
 │   │   ├── useDatas ---------------自定义hooks
 │   │   │   └── useCarList.js
 │   │   └── utils.js
 │   └── views ---------------项目入口文件根组件
 │       └── cart_list
 │           ├── app.scss
 │           ├── App.vue
 │           └── modules
 ├── webpack ---------------webpack配置
 │   ├── getEntry.js
 │   └── loader
 │       ├── css.js
 │       ├── font.js
 │       ├── image.js
 │       ├── index.js
 │       ├── javascript.js
 │       ├── less.js
 │       ├── sass.js
 │       ├── scss.js
 │       ├── stylus.js
 │       └── vue.js
 └── webpack.config.js
```

### 快速开发

```sh
npm run dev
```

输入以上命令后会在本地开启服务器并编译当前项目内的文件，在`wap`端进行开发时需要在 head 处引入相关页面的 css 样式和 JavaScript 脚本。

> 本地开启服务器后所生成的脚本和样式文件地址为(以入口`src/entry/cart-list.js`为例，入口文件名为`cart-list`)：
>
> `http://localhost:8080/(你的入口文件名)/app.css`例如：`http://192.168.1.51:8080/cart-list/app.css`
>
> `http://localhost:8080/(你的入口文件名)/app.js`例如：`http://192.168.1.51:8080/cart-list/app.js`

```html
<body>
  <head>
    <link rel="stylesheet" type="text/css" href="http://192.168.1.51:8080/cart-list/app.css" />
  </head>
  <script type="text/javascript" src="http://192.168.1.51:8080/cart-list/app.js"></script>
</body>
```

### 开发流程

以新建一个重构购物车页面为例：

1. 在`src/entry`文件夹下新建`cart-list.js`文件，写入如下内如：

   ```javascript
   /**
    * 购物车列表 /tmpl/cart_list.html
    */

   import { createApp } from 'vue'
   import { ConfigProvider } from 'vant'
   // 导入页面根组件
   import App from '../views/cart_list/App.vue'

   const app = createApp(App)
   app.use(ConfigProvider)

   app.directive('link', (el, binding) => {
     el.addEventListener('click', () => {
       location.href = binding.value
     })
   })
   // 将vue创建的app暴露到全局
   window.VueApp = app
   ```

2. 在`views`目录下创建视图根组件目录

   ```sh
   mkdir cart_list
   ```

   创建视图根组件

   ```sh
   cd cart_list
   touch App.vue
   ```

   并在`App.vue`中写入业务相关内容即可

## 关于构建后引入

构建后将会将生成产物打包到`wap/js/vue/vue-new`文件中，只需要按照你当前文件的相对路径引入即可。

```html
<!-- 例如 -->
<body>
  <head>
    <link rel="stylesheet" type="text/css" href="../js/vue/vue-new/cart-list/app.css" />
  </head>
  <script type="text/javascript" src="../js/vue/vue-new/cart-list/app.js"></script>
</body>
```
