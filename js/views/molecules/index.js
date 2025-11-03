import { Div, Heading, Image, Input, Label, Li, Link, Paragraph, Ul } from "../atoms/index.js"

export const HeaderView = () => {
    const element = document.createElement('header')
    const img = Image('./images/Sgt.PrepperHeader.png', 'Sgt. Prepper Logo', 'h-[65vh] overflow-hidden w-[100%] object-cover')
    element.append(img)
    element.className = ''
    /* const h1 = Heading('Sgt. Prepper')
    h1.className = 'bg-slate-700 p-8 text-white'
    element.append(h1) */

    const div = Div('flex justify-between bg-slate-700 py-2 px-6 align-middle')
    const logoTitle = Div('flex gap-8')
    const imgLogo = Image('./images/logo.svg', 'Sgt. Prepper Logo', '')
    const sgtPrepper = Heading('Sgt. Prepper', 1, 'text-white mt-auto mb-auto')
    logoTitle.append(imgLogo, sgtPrepper)

    const p = Paragraph('flex gap-8 mt-auto mb-auto align-center')
    const a = Link('/index.htm#/login', 'Login', 'text-white p-2 align-middle bg-green-600 rounded hover:bg-green-700')
    const cart = Paragraph('flex bg-slate-500 text-white p-2 rounded')
    const cartLink = Link('/Index.htm#/cart', 'Se kurv')
    cart.append(cartLink)
    p.append(a, cart)
    div.append(logoTitle, p)

    
    element.append(div)


   /*  const p = Paragraph()
    const a = Link('/index.htm#/login', 'Login', '')
    p.append(a)
    element.append(p) */
    return element
}

export const NavBarView = arrNavItems => {
    const element = document.createElement('nav')
    element.className = 'bg-sky-950'
    const ul = Ul('flex justify-between ml-4 mr-4 max-sm:flex-col')

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
    const h1 = Heading(title, '1', 'px-10')
    element.append(h1, content)
    return element
}

export const FooterView = () => {
    const element = document.createElement('footer')
    element.className = "h-[170px] p-4 bg-[url(./images/footer-bg.svg)] bg-center bg-no-repeat"
    return element
}


export const FormGroup = (title, name, placeholder, type, value) => {
    const element = Div('flex')
    const label = Label(title, name, 'w-[128px]')
    const input = Input(name, placeholder, type, value,)
    element.append(label, input)
    return element
}