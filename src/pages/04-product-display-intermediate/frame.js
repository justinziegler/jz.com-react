
import React, { useState }  from 'react'
import { getPageId }        from '../../components/utils/getPageId'
import { getProductConfig } from '../../components/utils/getProductConfig'
import Main                 from '../../components/sections/main'
import ProductDisplay       from '../../components/productDisplay'
import '../../scss/07-bed-frame/gallery.scss'

function ProductDisplayFrame () {
  const [productName, setProductName]       = useState(null)
  const [type, setType]                     = useState(null)
  const [color, setColor]                   = useState(null)
  const [price, setPrice]                   = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  const pageUrl = 'product-display-frame'
  let page      = getProductConfig('frame');
  page.pageId   = getPageId(pageUrl)
  page.pageUrl  = pageUrl

  page.headerTitle = <>Product Display &ndash; Intermediate Config</>
  page.headerIntro = [
    <>REWRITE The links below highlight the features of a Product Display module that I developed to support a line of bedding products.</>,
    <> This configuration offers a choice between fabric colors and product lines.</>
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

export default ProductDisplayFrame