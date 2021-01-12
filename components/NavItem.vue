<template>
    <nuxt-link :to="to" class="link">
        <slot />
    </nuxt-link>
</template>

<script>
    export default {
        name: "NavItem",
        props: {
            to: {
                type: String,
                default: ""
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/styles/colors";
    .link{
        display: block;
        padding: 10px;
        color: $link-color;
    }

    .nuxt-link-active {
        color: $link-color-active
    }
</style>