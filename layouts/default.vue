<template>
    <div class="app">
        <mevnNav :menu="menu"/>
        <div class="content">
            <main>
                <Nuxt/>
            </main>
            <mevnFooter/>
        </div>
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
            mevnNav: () => import('@/components/Layouts/Nav'),
        }
    }
</script>

<style lang="SCSS">
    @import "@/assets/styles/colors";

    .app {
        height: 100vh;
        width: 100vw;
        margin: 0;
        display: flex;
        flex-direction: row;
    }

    .content {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 85vw;
    }

    main {
        height: 95%;
        background: $main-bg;
    }

</style>
