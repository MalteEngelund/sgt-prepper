import { price2Dkk } from '../../utils/index.js'
import { Button, Div, Li, Ul } from '../atoms/index.js'

export const cartListView = (data = []) => {
  const element = Ul()

  data.forEach(item => {
    const li = Li('flex justify-between py-2')

    const quantity = Div('w-[10%]')
    quantity.innerText = item.quantity
    li.append(quantity)

    const name = Div('w-[60%] px-3')
    name.innerText = item.product.name
    li.append(name)

    const price = Div('w-[20%] text-right pr-2')
    price.innerText = price2Dkk(item.product.price)
    li.append(price)

    const action = Div('w-[10%] text-right')
    const delBtn = Button('Slet', 'button', 'p-2 text-white bg-red-500 hover:bg-red-700 rounded')
    delBtn.dataset.cartid = item.id
    action.append(delBtn)
    li.append(action)

    element.append(li)
  })

  return element
}


export const cartListHeaderView = arrColumns => {
    const cartHeader = Div('flex gap-4 border-b border-black py-1 justify-between')

    arrColumns.forEach(item => {
        const col = Div(item.className)
        col.textContent = item.name
        cartHeader.append(col)
    })

    return cartHeader
}

export const cartTotalView = totalPrice => {
    const totalRow = Div('flex gap-3 border-b border-t mt-4 py-1 justify-between')

    const textCol = Div('w-[65%] text-bold ')
    textCol.innerText = 'Total'

    const totalCol = Div('w-[25%] text-right font-bold')
    totalCol.innerText = price2Dkk(totalPrice)

    const spacerCol = Div('w-[10%] ')

    totalRow.append(textCol, totalCol, spacerCol)

    return totalRow
}