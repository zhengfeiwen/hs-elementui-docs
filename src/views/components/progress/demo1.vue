<template>
  <div>
    <hs-progress
      :text-inside="true"
      :stroke-width="26"
      :percentage="70"
    ></hs-progress>
    <hs-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="100"
      status="success"
    ></hs-progress>
    <hs-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning"
    ></hs-progress>
    <hs-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    ></hs-progress>
  </div>
</template>
<script>
export default {
  name: 'demo1'
}
</script>
<style scoped>
.hs-progress{
  margin-bottom: 20px;
}
</style>
