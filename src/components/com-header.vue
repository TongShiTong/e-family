<template>
  <!--fixed绝对定位到上面-->
    <mt-header :title="title" fixed>
      <div @click="handleBack" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
</template>

<script>
    export default {
      name: "com-header",
      computed: {
        title() {
          return this.$route.meta.title;
        }
      },
      methods: {
        handleBack() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style lang="scss">
  .mint-header {
    height: 50px;
    background: #c50206;

    .mint-header-title {
      font-size: 16px;
      font-weight: 400;
    }
  }
</style>
