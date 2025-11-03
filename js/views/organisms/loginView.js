import { clearToken, deleteSessionItem } from '../../services/auth.js'
import { Button, Form, Paragraph } from '../atoms/index.js'
import { FormGroup } from '../molecules/index.js'

export const LoginFormView = () => {
    const form = Form('POST', 'p-8')
      const username = FormGroup('Brugernavn:', 'username', 'Indtast dit brugernavn', 'text')
      const password = FormGroup('Adgangskode:', 'password', 'Indtast dit password', 'password')
      const button = Button ('Log Ind', 'submit', 'bg-green-500 text-white p-2 rounded hover:bg-green-700')
      form.append(username, password, button)
      return form
}


export const userInfoView = (user) => {
  const element = Paragraph('flex flex-col p-10 gap-4')
  element.innerText = `Velkommen ${user.firstname} ${user.lastname}!`
  const button = Button('Log ud', 'button', 'bg-red-500 flex text-white w-20 rounded p-2')
  button.addEventListener('click', () => {
    clearToken()
  })
  element.append(button)
  return element
}

// export const HandleLogin = (e) => {
//     e.preventDefault()
//     const form = e.currentTarget
//     const username = form.username.value.trim()
//     const password = form.password.value.trim()
//     console.log(`Username: ${username}, Password: ${password}`)
// }