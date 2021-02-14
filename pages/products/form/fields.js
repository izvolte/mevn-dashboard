export const schema = {
  fields: [
    {
      type: 'input',
      label: 'Название игры',
      model: 'title',
      placeholder: 'Введите название игры',
      styleClasses: 'col-md-6',
      inputType: 'text'
    },
    {
      type: 'vueMultiSelect',
      model: 'category',
      label: 'Категория',
      placeholder: 'Добавить категорию',
      styleClasses: 'col-md-6',
      selectOptions: {
        multiple: false,
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
      type: 'input',
      label: 'Стоимость игры',
      model: 'price',
      placeholder: 'Введите стоимость игры',
      styleClasses: 'col-md-6',
      inputType: 'text'
    },
    {
      type: 'textArea',
      label: 'Описание',
      model: 'description',
      hint: "Максимум 500 символов",
      max: 500,
      rows: 10,
      placeholder: 'Опишите игру',
      styleClasses: 'col-md-12',
      inputType: 'text'
    },
    {
      type: 'input',
      label: 'Количество',
      model: 'amount',
      placeholder: 'Введите кол-во доступных продуктов',
      styleClasses: 'col-md-6',
      inputType: 'text'
    },
    {
      type: 'input',
      label: 'Изображение',
      model: 'imageUrl',
      placeholder: 'Введите ссылку на картинку',
      styleClasses: 'col-md-6',
      inputType: 'text'
    },
  ]
}

export const defaultForm = {
  title: '',
  description: '',
  price: 0,
  amount: 0,
  imageUrl: '',
  category: ''
}
