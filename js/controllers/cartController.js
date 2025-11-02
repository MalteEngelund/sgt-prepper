import { getCartList } from '../models/cartModel.js'
import { cartListView } from '../views/organisms/cartViews.js'
import { Layout } from './layoutController.js'

export const CartPage = async () => {
  const data = await getCartList()
  const html = cartListView(data)
  return Layout('Indkøbskurv', html)
}