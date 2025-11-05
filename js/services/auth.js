export const setSessionItem = (name, value) => {
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


// jeg bruger ikke setCookie og getCookie pt.
export const setCookie = (name, value, days = 30) => {
	const expires = new Date(Date.now() + days * 864e5).toUTCString()
	document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/` // regex
}

export const getCookie = (name) => {
	 const cookies = document.cookie.split('; ')
	 for (let c of cookies) {
    const [key, value] = c.split('=')
    if (key === name) return decodeURIComponent(value)
  }
  return null
}

