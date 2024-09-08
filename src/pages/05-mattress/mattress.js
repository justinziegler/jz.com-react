
import React, { useState } from 'react';
import { getProductConfig } from '../../components/utils/getProductConfig';
import Main from '../../components/pageSections/main';
import ProductDisplay from '../../components/productDisplay';
import { ourWay } from './content/ourWay';
import OurWay from '../../components/pageSections/ourWay'
import Upgrade from './content/upgrade';
import { valueProps } from './content/valueProps';
import ValueProps from '../../components/pageSections/valueProps';
import Layers from './content/layers';
import FinancingInfo from './content/financingInfo';
import FirmnessScale from './content/firmnessScale';
import '../../assets/product-shop-opm-gallery.css'
import MadeSimple from './content/madeSimple';


function Mattress (props) {
  const [productName, setProductName] = useState('')
  const [type, setType] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [initialSelectionLoaded, setInitialSelectionLoaded] = useState(false)  
  let page = getProductConfig('mattress');

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
  
      <OurWay ourWay={ ourWay } />

      <Upgrade />

      <ValueProps vp={ valueProps } />

      <Layers />

      <FinancingInfo monthlyPayment={ monthlyPayment } />

      <FirmnessScale />

      <MadeSimple monthlyPayment={ monthlyPayment } />
    </Main>
  )
}

export default Mattress;