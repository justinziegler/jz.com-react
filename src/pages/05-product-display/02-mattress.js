
import React, { useState } from 'react';
import { getProductConfig } from '../../components/utils/getProductConfig';
import ProductDisplay from '../../components/productDisplay';
import '../../assets/product-shop-opm-gallery.css'

function ProductDisplayMattress (props) {
  const [productName, setProductName] = useState('')
  const [type, setType] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  let page = getProductConfig('mattress');
  console.log('page', page)
  return (
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
  )
}

export default ProductDisplayMattress;