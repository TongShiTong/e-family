<template>
  <div>
    <com-header></com-header>
    <router-view/>
  </div>
</template>

<script>
  import comHeader from '@/components/com-header'
  export default {
    components: {
      comHeader
    },
  }
</script>

<style scoped lang="scss">

</style>
