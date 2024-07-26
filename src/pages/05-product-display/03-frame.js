
import React, { useState } from 'react';
import { getProductConfig } from '../../components/utils/getProductConfig';
import ProductDisplay from '../../components/productDisplay';
import '../../scss/product-display-color+quantity.scss'

function Frame () {
  const page = getProductConfig('frame');
  return (
    <ProductDisplay page={ page } />
  )
}

export default Frame;