export const config = {
  name: 'Категории',
  crudName: 'categories',
  singleName: 'Категорию',
  pageName: 'CategoryPage',
  formName: 'CategoryForm',
  formTitle: 'Форма категории',
}

export const columns = [
  {key: 'title', name: 'Название Категории'}
]

export const actions = [
  {
    className: 'btn btn-warning text-white',
    label: 'Изменить',
    emit: 'onEdit',
    actionKey: '_id'
  },
  {
    className: 'btn btn-danger text-white',
    label: 'X',
    emit: 'onDelete',
    actionKey: '_id'
  },

]
