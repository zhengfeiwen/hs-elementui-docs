```
<template>
  <hs-actionline
    :actionFunc="actionsLine.func"
    :actionQuery="actionsLine.query"
  ></hs-actionline>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
export default class App extends Vue {
  public actionsLine: object = {
    func: [
      {
        text: '新增',
        handle: () => {
          alert('新增');
        },
      },
      {
        text: '删除',
        type: 'danger',
        handle: () => {
          alert('删除');
        },
      },
    ],
    query: [
      {
        text: '查询',
        iclass: 'el-icon-search',
        handle: () => {
          alert('查询');
        },
      },
    ],
  };
</script>
```