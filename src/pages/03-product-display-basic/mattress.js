
import React, { useState }  from 'react'
import { getPageDetails }   from '../../components/utils/getPageDetails'
import { getProductConfig } from '../../components/utils/getProductConfig'
import Main                 from '../../components/sections/main'
import ProductDisplay       from '../../components/productDisplay'
import                           '../../css/product-shop-opm-gallery.css'

function ProductDisplayMattress() {
  const page                                = getPageDetails('product-display-mattress')
  const product                             = getProductConfig('mattress')
  const [productName, setProductName]       = useState(null)
  const [type, setType]                     = useState(null)
  const [color, setColor]                   = useState(null)
  const [price, setPrice]                   = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  return (
    <Main page={ page }>
      <ProductDisplay 
        page={ page } 
        product={ product }
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