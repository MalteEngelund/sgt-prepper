/* export const setSessionItem = (name, value) => {
  sessionStorage.setItem(name, JSON.stringify(value))

}

export const getSessionItem = name => {
  try {
    const value = sessionStorage.getItem(name)
    return value ? JSON.parse(value) : null
  } catch (error) {
    console.error(error);
    (error)
    return null
  }
}

export const deleteSessionItem = name => {
  sessionStorage.removeItem(name)
  location.reload()
  console.log(location);
  
}


export const getToken = () => {
  return getSessionItem('sgtprepper_token')
}

export const setToken = token => {
  setSessionItem('sgtprepper_token', token)
}

export const clearToken = () => {
  deleteSessionItem('sgtprepper_token')
  location.reload()
}


const isTokenExpired = accessToken => {
	if(!accessToken) return true

	try {
		const payload = JSON.parse(atob(accessToken.split('.')[1]))
		if(payload.exp && payload.exp * 1000 < Date.now()) {

			return true
		}
		return false
	} catch (error) {
		
	}
}


export const isLoggedIn = () => {
	const token = getToken()

	if(!token?.accessToken) {
		return false
	}

	if(isTokenExpired(token.accessToken)){
		clearToken()
		return false
	}
	return true
}



// github cookie guide
// Gem cookie
export function setCookie(name, value, days = 7) {
    const expires = new Date()
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`
}

// Hent cookie
export function getCookie(name) {
    const nameEQ = name + "="
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim()
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length)
        }
    }
    return null
}

// Slet cookie
export function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`
}

// Brug
setCookie('username', 'Peter', 30) // Gem i 30 dage
const navn = getCookie('username') // Hent værdi
deleteCookie('username') // Slet cookie



     */


// konverteret til cookies. temp (jeg tror det virker :S)
export function setCookie(name, value, days = 7) {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Strict`
}

export function getCookie(name) {
  const nameEQ = name + "="
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim()
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length))
    }
  }
  return null
}

export function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Strict`
}


export const getToken = () => {
  const token = getCookie('sgtprepper_token')
  return token ? JSON.parse(token) : null
}

export const setToken = (token) => {
  setCookie('sgtprepper_token', JSON.stringify(token), 7)
}

export const clearToken = () => {
  deleteCookie('sgtprepper_token')
  location.reload()
}


export const isTokenExpired = (accessToken) => {
  if (!accessToken) return true
  try {
    const payload = JSON.parse(atob(accessToken.split('.')[1]))
    return payload.exp && payload.exp * 1000 < Date.now()
  } catch {
    return true
  }
}

export const isLoggedIn = () => {
  const token = getToken()
  if (!token?.accessToken) return false

  if (isTokenExpired(token.accessToken)) {
    clearToken()
    return false
  }
  return true
}


// test
export const deleteSessionItem = name => {
  sessionStorage.removeItem(name)
  location.reload()
  console.log(location);
  
}
export const getSessionItem = name => {
  try {
    const value = sessionStorage.getItem(name)
    return value ? JSON.parse(value) : null
  } catch (error) {
    console.error(error);
    (error)
    return null
  }
}