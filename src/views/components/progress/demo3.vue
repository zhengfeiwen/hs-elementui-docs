<template>
  <div class="hs-progress_container">
    <hs-progress type="circle" :percentage="0"></hs-progress>
    <hs-progress type="circle" :percentage="25"></hs-progress>
    <hs-progress type="circle" :percentage="100" status="success"></hs-progress>
    <hs-progress type="circle" :percentage="70" status="warning"></hs-progress>
    <hs-progress
      type="circle"
      :percentage="50"
      status="exception"
    ></hs-progress>
  </div>
</template>
<script>
export default {
  name: 'demo2'
}
</script>

<style scoped>
.hs-progress_container{
  display:flex;
  flex-direction: row;
}
.hs-progress{
  margin-right: 20px;

}
</style>
