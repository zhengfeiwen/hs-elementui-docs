<template>
  <div class="user-info-container">
    <div class="item" v-for="(item, i) in infos" :key="i">
      <label for="">{{ item.label }}</label>
      <div class="content">{{ item.value }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'user-info'
})
export default class UserInfo extends Vue {
  @Prop({ type: Array })
  private infos!: []
}
</script>
<style lang="scss" scoped>
  .user-info-container{
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .item{
      width: 300px;
      display: flex;
      flex-direction: row;
      label{
        font-size: 16px;
        font-weight: bold;
        &::after{
          content: ':';
          margin: 0 6px 0 2px;
        }
      }
      .content{
        font-size: 16px;
      }
    }
  }
</style>
