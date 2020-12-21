```
<template>
  <div>
    <hs-logobutton
      flexStyle="horizontal"
      :buttons="buttons"
      @handleClick="handleClick"
    >
      <template slot="ext0">
        <i class="el-icon-date" />
      </template>
      <template slot="ext1">
        <i class="el-icon-mobile-phone" />
      </template>
    </hs-logobutton>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttons: [
        {
          id: 'live',
          title: 'Live',
          color: 'yellow'
        },
        {
          id: 'store',
          title: '书店',
          color: 'green'
        }
      ]
    }
  },
  methods: {
    handleClick (key) {
      alert(key)
    }
  }
}
</script>
```