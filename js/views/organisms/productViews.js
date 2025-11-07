import { price2Dkk } from '../../utils/index.js';
import { Button, Div, Form, Fragment, Heading, Image, Input, Link, Paragraph } from "../atoms/index.js"

export const ProductListView = (products) => {
    const element = Fragment()

    products.forEach(product => {
        const { imageUrl, name, price, slug, stockText, stockClass, teaser } = product
        
        const enter = Link(`?product=${slug}`, '', 'block w-full h-full')
        const div = Div('border flex m-10 bg-sky-50 shadow-lg hover:shadow-2xl rounded-xl p-4 max-sm:m-2 max-sm:mt-10 max-md:flex-col max-md:items-center')
        const img = Image(`http://localhost:4000${imageUrl}`, name, 'max-w-[200px] min-w-[200px] max-h-[200px] overflow-hidden max-sm:w-[100px] rounded-[10px]')
        div.append(img)

        const info = Div('p-4 ml-4 max-sm:p-0 max-sm:m-0')
        const h2 = Heading(name, 2, 'max-md:text-center')
        const p = Paragraph()
        p.innerHTML = teaser
        info.append(h2, p)
        div.append(info)

        const cost = Div('text-right p-4 ml-auto max-md:ml-0')
        cost.innerText = price2Dkk(price)

        const stockElm = Paragraph(stockClass)
        stockElm.innerText = stockText
        cost.append(stockElm)
        div.append(cost)


        enter.append(div)
        element.append(enter);
    });

    return element
}


export const ProductDetailsView = (product) => {
    const { id, name, imageUrl, description, price} = product
    
    const element = Div('flex gap-8 my-4 mx-8 px-8 py-16 bg-sky-50 rounded-[20px] shadow-lg max-md:flex-col max-md:items-center max-md:m-2')
    const img = Image(`http://localhost:4000${imageUrl}`, name, 'max-w-[300px] max-h-[300px] rounded-[10px]')
    element.append(img)

    const div1 = Div('')
    const h3 = Heading(name, 3, 'text-xl font-bold')
    div1.append(h3)
    
    const p = Paragraph('mt-4')
    p.innerHTML = description
    div1.append(p)
    
    const form = Form('POST')
    form.className = 'flex gap-8 my-4 justify-end'
    const productId = Input('productId', '', 'hidden', id)
    const quantity = Input('quantity', '', 'number', 1, 'p-2 border text-center w-[64px] rounded border-[5px] border-green-500 focus:outline-offset-2')
    const button = Button('Læg i kurv', 'submit', 'p-2 text-white bg-green-500 hover:bg-green-700 rounded')

    form.append(productId, quantity, button)
    div1.append(form)

    

    const priceSection = Paragraph('text-2xl font-bold mt-4 text-right underline decoration-solid')
    priceSection.innerHTML = price2Dkk(price)
    div1.append(priceSection)

    element.append(div1)
    return element
}