
import React, { useState }  from 'react';
import { getPageId }        from '../../components/utils/getPageId'
import { getProductConfig } from '../../components/utils/getProductConfig';
import Main                 from '../../components/pageSections/main';
import ProductDisplay       from '../../components/productDisplay';
import '../../scss/product-display-color+quantity.scss'
import '../../scss/product-display-upsell-list.scss'
import '../../scss/product-cotton-sheets.scss'

function ProductDisplaySheets () {
  const [productName, setProductName]       = useState(null)
  const [type, setType]                     = useState(null)
  const [color, setColor]                   = useState(null)
  const [price, setPrice]                   = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  const pageUrl = 'product-display-sheets'
  let page      = getProductConfig('sheets')
  page.pageId   = getPageId(pageUrl)
  page.pageUrl  = pageUrl

  page.headerTitle = 'Product Display – Advanced Config'
  page.headerIntro = [
    <>REWRITE This configuration sorts through 42 product skus and over 100 upsell skus from 6 product lines. The upsells update their currently offered product size when the main product size selection changes.</>
  ]

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
      />
    </Main>
  )
}

export default ProductDisplaySheets;