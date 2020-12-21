```
<template>
  <div>
    <hs-logobutton
      flexStyle="horizontal"
      :buttons="buttons"
      @handleClick="handleClick"
    >
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
          color: 'yellow',
          icon: 'cir-book'
        },
        {
          title: '书店',
          icon: 'edit',
          color: 'green'
        },
        {
          title: '圆桌',
          icon: 'org',
          color: 'lightbule'
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