
import React, { useState }  from 'react'
import { getPageId }        from '../../components/utils/getPageId'
import { getProductConfig } from '../../components/utils/getProductConfig'
import Main                 from '../../components/sections/main'
import ProductDisplay       from '../../components/productDisplay'
import '../../css/product-shop-opm-gallery.css'

function ProductDisplayMattress() {
  const [productName, setProductName]       = useState(null)
  const [type, setType]                     = useState(null)
  const [color, setColor]                   = useState(null)
  const [price, setPrice]                   = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  const pageUrl = 'product-display-mattress'
  let page      = getProductConfig('mattress')
  page.pageId   = getPageId(pageUrl)
  page.pageUrl  = pageUrl

  page.headerTitle = <>Product Display &ndash; Basic Config</>
  page.headerIntro = [
    <>REWRITE The links below highlight the features of a Product Display module that I developed to support a line of bedding products.</>,
    <><strong>Mattress:</strong> This is the basic configuration, which allows users to add a product to cart and optionally add an upsell from resulting modal.</>
  ]
  
  return (
    <Main page={ page }>
      <ProductDisplay 
        page={ page } 
        productName={ productName }
        setProductName={ setProductName }
        type={ type }
        setType={ setType }
        color={ color }
        setColor={ setColor }
        price={ price } 
        setPrice={ setPrice } 
        monthlyPayment={ monthlyPayment }
        setMonthlyPayment={ setMonthlyPayment }
      />
    </Main>
  )
}

export default ProductDisplayMattress