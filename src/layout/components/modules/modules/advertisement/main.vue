<template>
  <div :class="advertisementContainer">
    <a class="Banner-link" href="https://www.zhihu.com/xen/market/ecom-page/1314315500319326208?utm_source=webjuxing" target="_blank">
      <div class="Banner-adTag">广告</div>
      <img class="Banner-image" src="https://pic1.zhimg.com/v2-2f3f161ed602b9ccb8e1fd70c3b0d9e4_540x450.jpeg" alt="广告">
    </a>
    <div @click="close" class="Pc-card-button-close " title="不再显示"><svg viewBox="0 0 12 12" class="Icon Icon--close Pc-card-button-close-svg "><path fill-rule="evenodd" d="M3 2L2 3l3 3-3 3 1 1 3-3 3 3 1-1-3-3 3-3-1-1-3 3"></path></svg></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'advertisement',
  components: {
  }
})
export default class extends Vue {
  private advertisementContainer = {
    advertisement_container: true,
    hide: false
  }

  public close () {
    this.advertisementContainer.hide = true
  }
}
</script>

<style lang="scss" scoped>
.advertisement_container {
  width: 296px;
  height:247px;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 3px rgba(18,18,18,.1);
  -moz-box-shadow: 0 1px 3px rgba(18,18,18,.1);
  box-shadow: 0 1px 3px rgba(18,18,18,.1);
  margin: 5px;
  overflow: hidden;
  position: relative;
  .Banner-link{
    height:100%;
    width: 100%;
    color: inherit;
    text-decoration: none;
    font-size: 14px;
    .Banner-adTag{
      position: absolute;
      right: 5px;
      bottom: 5px;
      width: 45px;
      border: 1px solid #ebebeb;
      border-radius: 5px;
      color: #ebebeb;
      background-color: #000;
      opacity: .5;
      font-size: 12px;
      line-height: 27px;
      text-align: center;
    }
    .Banner-image{
      display: block;
      width: 100%;
      border-radius: 2px;
    }
  }
  &:hover{
    .Pc-card-button-close {
      opacity: 1;
    }
  }
  .Pc-card-button-close {
    position: absolute;
    top: 12px;
    right: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 18px;
    height: 18px;
    padding: 0;
    border-color: transparent;
    border-radius: 50%;
    background-color: #1a1a1a;
    opacity: 0;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
    .Pc-card-button-close-svg {
      width: 14px;
      height: 16px;
      fill: #fff;
      cursor: pointer;
    }
  }
}
.advertisement_container.hide{
  height: 0;
  opacity: 0;
  transition: height,opacity, .8s;
}
</style>
