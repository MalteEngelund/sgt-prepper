import { getCartList } from '../models/cartModel.js'
import { Div } from '../views/atoms/index.js'
import { cartListHeaderView, cartListView, cartTotalView } from '../views/organisms/cartViews.js'
import { Layout } from './layoutController.js'

export const CartPage = async () => {
  const data = await getCartList()

  const arrHeaderColumns = [
    {name: 'Antal', className: 'w-[10%] font-bold'},
    {name: 'Produkt', className: 'w-[60%] font-bold'},
    {name: 'Pris', className: 'w-[20%] font-bold text-right'},
    {name: 'Handling', className: 'w-[10%] font-bold text-right'}
  ]

  const totalPrice = data.reduce((sum, item) => {
    return sum + (item?.product?.price * item?.quantity || 0)
  }, 0)

  const html = Div()
  html.append(cartListHeaderView(arrHeaderColumns))
  html.append(cartListView(data))
  html.append(cartTotalView(totalPrice))


  return Layout('Indkøbskurv', html)
}