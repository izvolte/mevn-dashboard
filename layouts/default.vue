<template>
  <div class="flex h-screen bg-gray-200">
    <mevn-nav :menu="menu" @onLogout="handleLogout"/>
    <div class="flex-1 flex flex-col overflow-hidden">
      <mevn-header @onLogout="handleLogout"></mevn-header>
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <Nuxt/>
      </main>
<!--      <mevn-footer/>-->
    </div>
    <icon-registry/>
  </div>
</template>

<script>
  import menu from './setup'

  export default {
    name: 'DefaultLayout',
    data: () => ({
      menu
    }),
    components: {
      mevnFooter: () => import('@/components/Layouts/Footer'),
      mevnNav: () => import('@/components/Layouts/Navigation/Nav'),
      mevnHeader: () => import('@/components/Layouts/Header'),
      IconRegistry: () => import('@/components/icon/Icon-registry'),
    },
    methods: {
      handleLogout() {
        this.$auth.logout()
        // this.$router.push('/login')
      }
    }
  }
</script>

<style lang="SCSS">

</style>
