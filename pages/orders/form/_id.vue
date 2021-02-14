<template>
  <Page>
    <div class="row">
      <div class="col-md-9">
        <Card>
          <CrudForm v-if="model" :form-schema="schema" :form-model="model" @on-submit="onFormSubmit"
                    title="Форма продукта"/>
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
  import {mapActions, mapGetters} from 'vuex'
  import {schema} from "./fields"

  export default {
    name: "ProductForm",
    middleware: 'auth',
    components: {
      Card: () => import('@/components/Card'),
      Page: () => import('@/components/Page'),
      CrudForm: () => import('@/components/CrudForm')
    },
    computed: {
      ...mapGetters({product: 'products/item', error: 'products/itemError'}),
      isUpdating: ({$route: {params: {id}}}) => id !== undefined
    },
    data: () => ({
      model: null,
      schema,
    }),
    async mounted() {
      if (this.isUpdating) {
        await this.fetchProduct(this.$route.params.id)
        this.model = {...this.product}


        return
      }
      this.setModel()
    },
    methods: {
      ...mapActions({
        createProduct: 'products/create',
        fetchProduct: 'products/fetchOne',
        updateProduct: 'products/update'

      }),
      setModel() {
        this.model = {
          title: '',
          description: '',
          price: 0,
          amount: 0,
          imageUrl: ''
        }
      },
      async onFormSubmit() {
        if(this.isUpdating){
          await this.onProductUpdate()
          return
        }
        await this.onProductCreate()
      },
      async onProductUpdate() {
        await this.updateProduct({payload: this.model, id: this.$route.params.id})
        this.$router.back()
      },
      async onProductCreate() {
        await this.createProduct(this.model)
        this.$router.back()
      }
    }
  }
</script>

