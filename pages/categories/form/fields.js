export const schema = {
  fields: [
    {
      type: 'input',
      label: 'Название категории',
      model: 'title',
      placeholder: 'Введите название категории',
      styleClasses: 'col-md-6',
      inputType: 'text'
    },
    {
      type: 'vueMultiSelect',
      model: 'products',
      label: 'Продукты',
      placeholder: 'Добавить продукты',
      styleClasses: 'col-md-6',
      selectOptions: {
        multiple: true,
        key: 'title',
        id: '_id',
        trackBy: 'title',
        label: 'title',
        searchable: true,
        hideSelected: true
      },
      values: []
    },
    {
      type: 'textArea',
      label: 'Описание категории',
      model: 'description',
      hint: "Максимум 500 символов",
      max: 500,
      rows: 10,
      placeholder: 'Опишите категорию',
      styleClasses: 'col-md-12',
      inputType: 'text'
    },
  ]
}

export const defaultForm = {
  title: '',
  descriptions: '',
  products: []
}
