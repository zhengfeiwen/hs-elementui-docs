### Install
```npm
npm install hs-elementui --save
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
待完善


