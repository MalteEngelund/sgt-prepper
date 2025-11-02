import { Authenticate } from '../models/loginModel.js'
import { deleteSessionItem, getSessionItem, getToken, setSessionItem, setToken } from '../services/auth.js'
import { Button, Div, Form } from '../views/atoms/index.js'
import { FormGroup } from '../views/molecules/index.js'
import { LoginFormView, userInfoView } from '../views/organisms/loginView.js'
import { Layout } from './layoutController.js'

/* export const LoginPage = () => {
  const form = Form()
  const username = FormGroup('Brugernavn', 'username', 'Indtast dit brugernavn', 'text')
  const password = FormGroup('Adgangskode', 'password', 'Indtast dit password', 'text')
  const button = Button ('Send')
  form.append(username, password, button)

  return Layout('Login', form)
} */


export const LoginPage = () => {
  if(getToken()) {
    const token = getToken()
    console.log(token.user);
    
    const html = userInfoView(token.user)
    return Layout('Din side', html)

  } else {
    console.log('bruger er ikke logget ind');
    const element = LoginFormView()

    element.addEventListener('submit', (e) => {
        HandleLogin(e)  
    })
    return Layout('Login', element)
  }
  
}

export const HandleLogin = async (e) => {
  e.preventDefault()
  console.log(e);
  
  const form = e.currentTarget
  const username = form.username.value.trim()
  const password = form.password.value.trim()
  
  if(username && password) {
        const data = await Authenticate(username, password)
        console.log(data);

         if(data.accessToken) {
           setToken(data)
           
          location.href = "./index.htm"
         }
    }
}