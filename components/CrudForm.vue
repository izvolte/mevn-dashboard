<template>
  <div class="panel-body">
    <h2>{{title}}</h2>
    <form @submit.prevent="validate">
      <vue-form-generator
        :schema="formSchema"
        :model="formModel"
        :options="formOptions"
        ref="form"
        @model-updated="onUpdate"
      />
      <hr/>
      <div class="text-center">
        <button class="btn btn-success" type="submit">
          Подтвердить
        </button>
      </div>
    </form>

  </div>
</template>

<script>
  export default {
    name: "CrudForm",
    props: {
      formSchema: {
        type: Object,
        default: () => {}
      },
      formModel: {
        type: Object,
        default: () => {}
      },
      formOptions: {
        type: Object,
        default: () => ({
          validateAsync: true
        })
      },
      title: {
        type: String,
        default: ''
      }
    },
    methods: {
      async validate(){
        const errors = await this.$refs.form.validate()
        const isValid = errors.length === 0
        if(isValid){
          this.$emit('on-submit', this.formModel)
        }
      },
      onUpdate(val, field){
        this.$emit(`on${field}`, val)
      }
    }
  }
</script>

<style scoped>

</style>
