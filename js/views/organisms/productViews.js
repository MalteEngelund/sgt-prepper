import { price2Dkk } from '../../utils/index.js';
import { Div, Fragment, Heading, Image, Link, Paragraph } from "../atoms/index.js"

export const ProductListView = (products) => {
    const element = Fragment()

    products.forEach(product => {
        const { imageUrl, name, price, slug, stockText, stockClass, teaser } = product
        
        const enter = Link(`?product=${slug}`, '', 'block w-full h-full')
        const div = Div('border flex justify-between m-10 shadow-lg')       
        const img = Image(`http://localhost:4000${imageUrl}`, name, 'max-w-[200px]')
        div.append(img)

        const info = Div()
        const h2 = Heading(name, 2)
        const p = Paragraph()
        p.innerHTML = teaser
        info.append(h2, p)
        div.append(info)

        const cost = Div('text-right border w-1/6 p-4')
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
    
    const element = Div('flex gap-8 mt-4')
    const img = Image(`http://localhost:4000${imageUrl}`, name, 'max-w-[300px]')
    element.append(img)

    const div1 = Div('')
    const h3 = Heading(name, 3, 'text-xl font-bold')
    div1.append(h3)
    
    const p = Paragraph('mt-4')
    p.innerHTML = description
    div1.append(p)

    const priceSection = Paragraph('text-2xl font-bold mt-4 text-right')
    priceSection.innerHTML = price2Dkk(price)
    div1.append(priceSection)

    element.append(div1)
    return element
}