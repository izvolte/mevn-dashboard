export const config = {
  name: 'Заказы',
  crudName: 'orders',
  singleName: 'Заказ',
  pageName: 'OrderPage'
}

export const columns = [
  {key: 'fullname', name: 'Название покупателя'},
  {key: 'email', name: 'Почта'},
  {key: 'phone', name: 'Телефон'},
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
