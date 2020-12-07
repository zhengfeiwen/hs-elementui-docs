```
<template>
  <div>
    <hsprogress type="circle" percentage="0"></hsprogress>
    <hsprogress type="circle" percentage="25"></hsprogress>
    <hsprogress type="circle" percentage="100" status="success"></hsprogress>
    <hsprogress type="circle" percentage="70" status="warning"></hsprogress>
    <hsprogress
      type="circle"
      percentage="50"
      status="exception"
    ></hsprogress>
  </div>
</template>
<script>
export default {
  name: 'demo2'
}
</script>
```