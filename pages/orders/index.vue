<template>
  <Page :title="config.name">
    <nuxt-link class="btn btn-success" :to="`${config.crudName}/form`">
      <icon icon="icon-plus"/>
      Добавить {{config.singleName}}
    </nuxt-link>
    <table-page-wrapper>
      <Table :columns="columns" :actions="actions" :data="items" @onEdit="handleEdit" @onDelete="handleDelete"/>
    </table-page-wrapper>
  </Page>

</template>

<script>

  //Mixins

  import {crudMixin} from '@/mixins/crud.mixin'

  //setup

  import {columns, actions, config} from "./setup"

  export default {
    name: config.pageName,
    middleware: 'auth',
    mixins: [crudMixin({config})],
    data: () => ({
      columns,
      actions,
      config
    }),
    components: {
      Card: () => import('@/components/Card'),
      Page: () => import('@/components/Page'),
      Icon: () => import('@/components/icon/Icon'),
      Table: () => import('@/components/table/Table'),
    },
    methods: {
      handleEdit({id}) {
        this.$router.push(`/${config.crudName}/form/${id}`)
      },
      async handleDelete({id}) {
        await this.deleteItem(id)
        this.fetchItems();
      }

    },
    mounted() {
      this.fetchItems()
    },
  }
</script>

<style scoped>

</style>
