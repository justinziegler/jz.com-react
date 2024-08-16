
import React, { useState } from 'react';
import { getProductConfig } from '../../components/utils/getProductConfig';
import ProductDisplay from '../../components/productDisplay';
import '../../scss/product-display-color+quantity.scss'
import '../../scss/product-display-upsell-list.scss'
import '../../scss/product-cotton-sheets.scss'

function Sheets () {
  const [productName, setProductName] = useState('')
  const [price, setPrice] = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  let page = getProductConfig('sheets')
  return (
    <ProductDisplay 
      page={ page } 
      productName={ productName }
      setProductName={ setProductName }
      price={ price } 
      setPrice={ setPrice } 
      monthlyPayment={ monthlyPayment }
      setMonthlyPayment={ setMonthlyPayment }
    />
  )
}

export default Sheets;