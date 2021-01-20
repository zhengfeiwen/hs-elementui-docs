import Vue, { DirectiveOptions } from 'vue'
import 'normalize.css'
import ElementUI from 'element-ui'
import SvgIcon from 'vue-svgicon'

import '@/styles/element-variables.scss'
import '@/styles/index.scss'

import App from '@/App.vue'
import store from '@/store'
import { AppModule } from '@/store/modules/app.ts'
import router from '@/router'
import i18n from '@/lang'
import 'hs-elementui/src/icons/components'
import '@/permission'
import '@/utils/error-log'
import '@/pwa/register-service-worker'
import * as directives from '@/directives'
import * as filters from '@/filters'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import 'prismjs/themes/prism.css'
import '@/styles/markdown-segmentfault.css'

import HsElementui from 'hs-elementui'
import 'hs-elementui/lib/hs-elementui.css'
import DemoBlock from '@/components/demo-block/DemoBlock.vue'
import DocumentTable from '@/components/DocumentTable.vue'

Vue.component(DemoBlock.name, DemoBlock)
Vue.component(DocumentTable.name, DocumentTable)

Vue.use(VXETable)

Vue.use(HsElementui)

Vue.use(ElementUI, {
  size: AppModule.size, // Set element-ui default size
  i18n: (key: string, value: string) => i18n.t(key, value)
})

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

// Register global directives
Object.keys(directives).forEach(key => {
  Vue.directive(key, (directives as { [key: string]: DirectiveOptions })[key])
})

// Register global filter functions
Object.keys(filters).forEach(key => {
  Vue.filter(key, (filters as { [key: string]: Function })[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
