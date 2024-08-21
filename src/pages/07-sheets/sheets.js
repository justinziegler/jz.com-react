
import React, { useState } from 'react';
import { getProductConfig } from '../../components/utils/getProductConfig';
import Main from '../../components/pageSections/main';
import ProductDisplay from '../../components/productDisplay';
import { valueProps } from './content/valueProps';
import ContentAccordion from '../../components/pageSections/contentAccordion';
import '../../scss/product-display-color+quantity.scss'
import '../../scss/product-display-upsell-list.scss'
import '../../scss/product-cotton-sheets.scss'

let page = getProductConfig('sheets')

function Sheets () {
  const [productName, setProductName] = useState('')
  const [type, setType] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [initialSelectionLoaded, setInitialSelectionLoaded] = useState(false) 
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
        setInitialSelectionLoaded={ setInitialSelectionLoaded }
      />
      <ContentAccordion accordionContent={ valueProps } />
    </Main>

  )
}

export default Sheets;