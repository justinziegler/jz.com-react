
import React, { useState } from 'react';
import { getProductConfig } from '../../components/utils/getProductConfig';
import ProductDisplay from '../../components/productDisplay';

function Mattress () {
  let page = getProductConfig('mattress');
  console.log('page', page)
  return (
    <ProductDisplay page={ page } />
  )
}

export default Mattress;