
import React, { useState }  from 'react'
import { getPageDetails }   from '../../components/utils/getPageDetails'
import { getProductConfig } from '../../components/utils/getProductConfig'
import Main                 from '../../components/sections/main'
import ProductDisplay       from '../../components/productDisplay'
import                           '../../scss/08-sheets/gallery.scss'

function ProductDisplaySheets () {
  const page                                = getPageDetails('product-display-sheets')
  const product                             = getProductConfig('sheets')
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

export default ProductDisplaySheets