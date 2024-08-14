
import React, { useState } from 'react';
import { getProductConfig } from '../../components/utils/getProductConfig';
import ProductDisplay from '../../components/productDisplay';
import '../../scss/product-display-color+quantity.scss'
import '../../scss/product-display-upsell-list.scss'
import '../../scss/product-cotton-sheets.scss'

function Sheets () {
  let page = getProductConfig('sheets');
  console.log('page', page)
  return (
    <ProductDisplay page={ page } />
  )
}

export default Sheets;