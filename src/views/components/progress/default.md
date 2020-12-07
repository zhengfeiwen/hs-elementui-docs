```
<template>
  <div>
    <hs-progress percentage="50"></hs-progress>
    <hs-progress percentage="100" :format="format"></hs-progress>
    <hs-progress percentage="100" status="success"></hs-progress>
    <hs-progress percentage="100" status="warning"></hs-progress>
    <hs-progress percentage="50" status="exception"></hs-progress>
  </div>
</template>

<script>
export default {
  methods: {
    format (percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    }
  }
}
</script>
```