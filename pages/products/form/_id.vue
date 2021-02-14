<template>
  <Page>
    <div class="row">
      <div class="col-md-9">
        <Card>
          <CrudForm v-if="model" :form-schema="schema" :form-model="model" @on-submit="onFormSubmit"
                    :title="config.formTitle"/>
        </Card>
        <p class="text-danger">
          {{ error }}
        </p>
      </div>
      <div class="col-md-3"></div>
    </div>
  </Page>
</template>

<script>
  //state
  import {mapActions, mapGetters} from 'vuex'

  //Setups
  import {schema, defaultForm} from "./fields"
  import {config} from "../setup"

  //Mixins
  import {relationsMixin} from "@/mixins/relations.mixin";

  export default {
    name: config.formName,
    middleware: 'auth',
    mixins: [relationsMixin],
    components: {
      Card: () => import('@/components/Card'),
      Page: () => import('@/components/Page'),
      CrudForm: () => import('@/components/CrudForm')
    },
    computed: {
      ...mapGetters({
        item: `${config.crudName}/item`,
        error: `${config.crudName}/itemError`,
        categories: `categories/items`,
      }),
      isUpdating: ({$route: {params: {id}}}) => id !== undefined
    },
    data: () => ({
      model: null,
      schema,
      config
    }),
    async mounted() {
      await this.fetchCategories()
      this.setFields({fieldKey: 'category', values: this.categories})

      if (this.isUpdating) {
        await this.fetchItem(this.$route.params.id)
        this.model = {...this.item}

        return
      }
      this.setModel()
    },
    methods: {
      ...mapActions({
        //generic
        createItem: `${config.crudName}/create`,
        fetchItem: `${config.crudName}/fetchOne`,
        updateItem: `${config.crudName}/update`,

        //bl
        fetchCategories: `categories/fetchAll`,
      }),
      setModel() {
        this.model = {
          ...defaultForm
        }
      },
      async onFormSubmit() {
        if(this.isUpdating){
          await this.onItemUpdate()
          return
        }
        await this.onItemCreate()
      },
      async onItemUpdate() {
        const updatedModel = {
          ...this.model,
          category: this.model.category
        }

        await this.updateItem({payload: updatedModel, id: this.$route.params.id})
        this.$router.back()
      },
      async onItemCreate() {
        await this.createItem(this.model)
        this.$router.back()
      }
    }
  }
</script>

