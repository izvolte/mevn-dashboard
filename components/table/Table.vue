<template>
  <table class="min-w-full">
    <thead>
    <slot name="columns">
      <table-header>#</table-header>
      <table-header v-for="({name, key}, index) in columns" :key="index">
        {{name}}
      </table-header>
      <table-header v-if="actions.length !== 0"> Действия</table-header>
    </slot>
    </thead>
    <tbody>
    <tr v-for="(item, index) in data" :key="index">
      <slot :row="item">
        <table-cell>{{index + 1}}</table-cell>
        <table-cell v-for="({key}, tdIndex) in columns" :key="`columns-${tdIndex}`">
          {{ item[key] }}
        </table-cell>
        <table-cell v-for="({className, emit, actionKey, label}, actionIndex) in actions"
            :key="`action-${actionIndex}`">
          <button
            :class="className"
            @click="$emit(emit, { id: item[actionKey] })"
          >
            {{label}}
          </button>
        </table-cell>
      </slot>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "Table",
    props: {
      data: {
        type: Array,
        default: () => []
      },
      columns: {
        type: Array,
        default: () => []
      },
      actions: {
        type: Array,
        default: () => []
      },
    },
    components: {
      TableHeader: () => import('./components/TableHeader'),
      TableCell: () => import('./components/TableCell')
    }
  }
</script>

<style scoped>
  table{
    width: 100%;
  }
</style>
