<template>

    <nav>
        <ul>
            <li v-for="(item, key) in menu">
                <NavItem :to="item.to" :key="key">
                    {{ item.name }}
                </NavItem>
            </li>
        </ul>
    </nav>
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
            NavItem: () => import('@/components/NavItem')
        }
    }

</script>

<style lang="scss" scoped>
    @import "@/assets/styles/colors";
    nav {
        height: 100vh;
        width: 15vw;
        padding: 1rem;
        box-shadow: $menu-shadow;
        display: flex;
        flex-direction: column;
    }
    ul{
        list-style-type: none;
        padding: 0;
    }
</style>