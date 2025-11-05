import { request } from '../services/fetch.js'


const url = `http://localhost:4000/api/cart`


/**
 * funktion til hent af liste
 * @returns Array
 */

export const getCartList = async () => {
  try {
    const data = await request(url)
    if(data) {
      return data
    }
  } catch (error) {
    console.error(`fejl i kald af indkøbskurv model liste: ${error}`);
    
  }
} 


/**
 * funktion til  at opdatere kurv
 * @param {Number} productId 
 * @param {Number} quantity 
 */

export const addToCart = async (productId, quantity) => {
  try {
    const data = await request(url, 'POST', {
      productId, quantity
    })
    return data
  } catch (error) {
    console.error(`fejl i cart model addToCart: ${error}`);
    
  }
}


/**
 * 
 * @param {Number} id 
 */
export const removeFromCart = async id => {
  try {
    const data = await request(`${url}/${id}`, 'DELETE')
    if(data.message) {
      location.reload()
    }
  } catch (error) {
    console.error(error);
    
  }
}