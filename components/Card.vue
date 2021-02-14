<template>
  <div class="card">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "Card"
  }
</script>

<style lang="scss" scoped>
  .card {
    padding: 10px;
  }
</style>
