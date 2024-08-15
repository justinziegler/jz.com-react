
import React, { useState } from 'react';
import { getProductConfig } from '../../components/utils/getProductConfig';
import ProductDisplay from '../../components/productDisplay';
import '../../assets/product-shop-opm-gallery.css'

function Mattress (props) {
  let page = getProductConfig('mattress');
  console.log('page', page)
  return (
    <ProductDisplay page={ page } />
  )
}

export default Mattress;