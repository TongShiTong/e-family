<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  * {
  margin: 0;
  padding: 0;
  }

  .fll {
    float: left;
  }

  .flr {
    float: right;
  }

  .clearfix::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }

  .container {
    margin-top: 60px;
  }
</style>
