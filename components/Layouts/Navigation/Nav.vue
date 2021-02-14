<template>
  <div class="fixed z-30 inset-y-0 left-0 w-64 bg-gray-900 lg:static lf:inset-0">
    <div class="flex items-center justify-center mt-8">
      <div class="flex items-center">

      <span class="span text-2xl mx-2 font-bold text-white">
        Dashboard
      </span>
      </div>
    </div>
    <nav class="mt-10">
      <nav-item v-for="(item, key) in menu" :to="item.to" :key="key">
        {{ item.name }}
      </nav-item>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Nav",
    props: {
      menu: {
        type: Array,
        default: () => []
      }
    },
    components: {
      NavItem: () => import('./NavItem')
    }
  }

</script>

<style lang="scss" scoped>
</style>
