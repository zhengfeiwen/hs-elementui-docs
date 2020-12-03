<template>
  <div class="hs_container">
    <hs-tabs
      tabType="divi"
      :tabs="tabs"
      :defaultTab="0"
      @change="tabChange"
    ></hs-tabs>
    <div class="tab_body">
      <hs-documentary-data
        v-if="curTab === 'documentary'"
      ></hs-documentary-data>
      <hs-booking-data v-if="curTab === 'booking'"></hs-booking-data>
    </div>
  </div>
</template>

<script >
import documentarydata from './documentarydata'
import bookingdata from './bookingdata'
export default {
  name: 'resourcePool',
  components: {
    'hs-documentary-data': documentarydata,
    'hs-booking-data': bookingdata
  },
  data () {
    return {
      curTab: 'documentary',
      tabs: [
        {
          id: 'documentary',
          name: '跟单数据'
        },
        {
          id: 'booking',
          name: '订单数据'
        }
      ]
    }
  },
  methods: {
    tabChange: function (id) {
      // this.curTab = id
    }
  }
}
</script>

<style lang="scss" scoped>
.hs_container {
  width: 98%;
  height: 100%;
  margin: auto auto;
}
.tab_body {
  width: 100%;
  height: 100%;
  overflow: overlay;
}
</style>
