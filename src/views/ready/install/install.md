### 安装
```npm
npm install hs-elementui -s
```
基于`element-ui v2.14.1`开发，如出现组件显示异常，请确保版本兼容
### 配置  
#####加载组件配置
在 `main.ts` 中写入以下内容：
```
import Vue from 'vue';
import App from './App.vue';

import HsElementui from 'hs-elementui'
import 'hs-elementui/src/icons/components'
import 'hs-elementui/lib/hs-elementui.css'

Vue.use(HsElementui)
```
之后就可以使用组件库中的组件了。


