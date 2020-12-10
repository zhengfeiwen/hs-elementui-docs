### Install
```npm
npm install hs-elementui --save --registry http://192.168.0.177:4873
```
基于`element-ui v2.14.1`开发，如出现组件显示异常，请确保版本兼容
### Start  
#####完整引入
在 `main.ts` 中写入以下内容：
```javascript
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import HsElementui from 'hs-elementui'
import 'hs-elementui/lib/hs-elementui.css'

import Ea from 'e-admin';
import 'e-admin/lib/index.css';

Vue.use(HsElementui)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
```
#####按需引入

借助 [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component) 引入需要的组件，以达到减小项目体积的目的。
安装 babel-plugin-component
```npm
npm install babel-plugin-component --save
```
待完善


