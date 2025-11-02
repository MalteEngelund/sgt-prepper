import { Div, Heading, Image, Input, Label, Li, Link, Paragraph, Ul } from "../atoms/index.js"

export const HeaderView = () => {
    const element = document.createElement('header')
    const img = Image('./images/Sgt.PrepperHeader.png', 'Sgt. Prepper Logo')
    element.append(img)
    element.className = ''
    /* const h1 = Heading('Sgt. Prepper')
    h1.className = 'bg-slate-700 p-8 text-white'
    element.append(h1) */

    const div = Div('flex justify-between bg-slate-700 p-2 align-middle')
    const imgLogo = Image('./images/logo.svg', 'Sgt. Prepper Logo', 'ml-4')
    const sgtPrepper = Heading('Sgt. Prepper', 1, 'text-white mt-auto mb-auto')
    const p = Paragraph('mt-auto mb-auto mr-4')
    const a = Link('/index.htm#/login', 'Login', 'text-white p-2 align-middle bg-green-600 rounded hover:bg-green-700')
    p.append(a)
    div.append(imgLogo,sgtPrepper, p)

    const cart = Paragraph('bg-slate-700 text-white flex')
    const cartLink = Link('/Index.htm#/cart', 'Se kurv')
    cart.append(cartLink)
    
    element.append(div, cart)


   /*  const p = Paragraph()
    const a = Link('/index.htm#/login', 'Login', '')
    p.append(a)
    element.append(p) */
    return element
}

export const NavBarView = arrNavItems => {
    const element = document.createElement('nav')
    element.className = 'bg-sky-950'
    const ul = Ul('flex justify-between ml-4 mr-4')

    arrNavItems.forEach(item => {
        const { url, title, slug } = item // Destructure assignment - udskiller egenskaber fra objekt
        
        const li = Li('flex')
        const img = Image(`./images/icons/${slug}.svg`, 'nav-icon', 'w-6 h-6 mr-4 mt-auto mb-auto')
        const item1 = Link(url, title, 'flex flex-row-reverse p-4 text-white')
        item1.append(img)
        li.append(item1)
        ul.append(li)
    })

    element.append(ul)
    return element
}

export const MainView = (title, content) => {
    const element = document.createElement('main')
    element.className = "p-4 min-h-60"
    const h1 = Heading(title)
    element.append(h1, content)
    return element
}

export const FooterView = () => {
    const element = document.createElement('footer')
    element.className = "h-[170px] p-4 bg-[url(./images/footer-bg.svg)] bg-center bg-no-repeat"
    return element
}


export const FormGroup = (title, name, placeholder, type, value) => {
    const element = Div()
    const label = Label(title, name)
    const input = Input(name, placeholder, type, value)
    element.append(label, input)
    return element
}