<template>
  <div>
    <hs-iconbutton
      icon="wechat"
      desc="聊天"
      @click="click"
    >
    </hs-iconbutton>
  </div>
</template>

<script>
export default {
  methods: {
    click () {
      alert('开始聊天')
    }
  }
}
</script>
