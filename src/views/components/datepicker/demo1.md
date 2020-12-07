```
<template>
  <div>
    <hs-datepicker
      @change="daterangeHandle"
    ></hs-datepicker>
  </div>
</template>
<script>
  export default {
    methods: {
      daterangeHandle: function (dateVal) {
        // doing someing
      }
    }
  }
</script>
```