import { getCookie, setCookie } from '../services/auth.js'
import { cookieBannerView } from '../views/organisms/cookieBannerView.js'

export const cookieBanner = () => {

  const KEY = 'cookieConsent'
  // const getConsent = () => JSON.parse(localStorage.getItem(KEY) || null)
  const getConsent = () => JSON.parse(getCookie(KEY) || null)
  // const setConsent = (c) => localStorage.setItem(KEY, JSON.stringify(c))
  const setConsent = (c) => setCookie(KEY, JSON.stringify(c), 7)
  const saved = getConsent()


  const banner = cookieBannerView()

  const all = banner.querySelector('#cookie-acceptall')
  const some = banner.querySelector('#cookie-acceptsome')

  if(!saved) {
    banner.style.display = 'block'
  }

  all.addEventListener('click', () => {
    setConsent({ accepted: true })
    banner.style.display = 'none'
  })

  some.addEventListener('click', () => {
    setConsent({ accepted: false })
   // banner.style.display = 'none'  brugeren skal acceptere alle pt. >:)
  })

  return banner
}

