<!--
 * @Author: kim
 * @Date: 2021-04-30 20:14:46
 * @LastEditors: kim
 * @LastEditTime: 2021-05-07 19:43:33
 * @FilePath: /derify-finance/src/components/appFooter/index.vue
-->
<template>
  <div class="app-footer">
    <div class="app-footer-content">
      <div class="desc">
        Meet the future of derivatives trading and contact us at
      </div>
      <div class="link">
        <a href="https://github.com/derivationlab" target="_blank">GH</a>
        <a href="https://twitter.com/DerifyProtocol" target="_black">Tw</a>
        <a href="https://discord.gg/kSR6tz2pdm" target="_black">Dsc</a>
        <a href="https://derify.medium.com/" target="_black">Med</a>
        <a href="https://t.me/DerifyProtocol_Official" target="_black">Tele</a>
        <a href="mailto:contact@derify.org" target="_black">Em</a>
      </div>
      <div class="copy-right">© 2020 DERIVATION LAB</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.app-footer {
  background: #140b32;
  padding: 4rem 2rem;
  text-align: center;
  &-content {
    color: #96a7c7;
    .desc {
      font-size: 1.8rem;
    }
    .link {
      margin: 2rem 0 3.5rem;
      a {
        font-size: 1.4rem;
        display: inline-block;
        width: 3.6rem;
        height: 3.6rem;
        line-height: 3.6rem;
        text-align: center;
        color: #96a7c7;
        border: 1px solid #96a7c7;
        border-radius: 0.6rem;
        margin: 1rem 1.5rem 0;
        &:first-child{
          margin-left: 0;
        }
        &:last-child{
          margin-right: 0;
        }
      }
    }
    .copy-right {
      font-size: 1.6rem;
    }
  }
}
</style>