import React, { useState } from 'react';
import { getProductConfig } from '../../components/utils/getProductConfig';
import Main from '../../components/main';

function ProductDisplay () {
  const pageDetails = {
    pageUrl: 'mattress',
    headerTitle: 'Product Display Template',
    headerIntro: [
      <p>The links below highlight the features of a Product Display module that I developed to support a line of bedding products.</p>,
      <p><span className="toggle-blurb" data-target="product-display-mattress"><strong>Mattress:</strong> This is the basic configuration, which allows users to add a product to cart and optionally add an upsell from resulting modal.</span></p>,
      <p><span className="toggle-blurb" data-target="product-display-frame"><strong>Bed Frame:</strong> This configuration offers a choice between fabric colors and product lines.</span>'</p>,
      <p><span className="toggle-blurb" data-target="product-display-sheets"><strong>Sheets:</strong> This configuration sorts through 42 product skus and over 100 upsell skus from 6 product lines. The upsells update their currently offered product size when the main product size selection changes.</span>'</p>,
      <p>Toggle between different configurations with the links below.</p>
    ],
    toggleLinks: true
  }
  let page = getProductConfig(pageDetails);
  console.log('page', page)
  return (
    <Main page={ page }>
      <h1>Product Display</h1>
    </Main>
  )
}

export default ProductDisplay;