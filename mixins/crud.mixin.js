import {mapGetters, mapActions} from "vuex";

export const crudMixin = ({config}) => ({
  components: {
    Table: () => import('@/components/table/Table'),
    TablePageWrapper: () => import('@/components/TablePageWrapper'),
  },
  computed: {
    ...mapGetters({
      items: `${config.crudName}/items`,
    }),
  },
  methods: {
    ...mapActions({
      fetchItems: `${config.crudName}/fetchAll`,
      deleteItem: `${config.crudName}/delete`
    }),

  }
})
