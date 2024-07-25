
import React, { useState } from 'react';
import { getProductConfig } from '../../components/utils/getProductConfig';
import ProductDisplay from '../../components/productDisplay';
import '../../scss/product-display-color+quantity.scss'

function Frame () {
  const pageDetails = {
    pageUrl: 'frame',
    catIds: [40, 41],
    discountActual: 200,
    upsellDiscountActual: 0,
    headerTitle: 'Product Display Template',
    headerIntro: [
      <p key='intro1'>The links below highlight the features of a Product Display module that I developed to support a line of bedding products.</p>,
      <p key='intro2'><span className='toggle-blurb' data-target='product-display-mattress'><strong>Mattress:</strong> This is the basic configuration, which allows users to add a product to cart and optionally add an upsell from resulting modal.</span></p>,
      <p key='intro3'><span className='toggle-blurb' data-target='product-display-frame'><strong>Bed Frame:</strong> This configuration offers a choice between fabric colors and product lines.</span>'</p>,
      <p key='intro4'><span className='toggle-blurb' data-target='product-display-sheets'><strong>Sheets:</strong> This configuration sorts through 42 product skus and over 100 upsell skus from 6 product lines. The upsells update their currently offered product size when the main product size selection changes.</span>'</p>,
      <p key='intro5'>Toggle between different configurations with the links below.</p>
    ],
    toggleLinks: true
  }
  let page = getProductConfig(pageDetails);
  console.log('page', page)
  return (
    <ProductDisplay page={ page } />
  )
}

export default Frame;