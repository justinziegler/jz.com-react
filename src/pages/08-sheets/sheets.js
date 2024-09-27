
import React, { useState }   from 'react';
import { getPageId }         from '../../components/utils/getPageId'
import { getProductConfig }  from '../../components/utils/getProductConfig'
import Main                  from '../../components/sections/main'
import ProductDisplay        from '../../components/productDisplay'
import ScrollToAnchor        from '../../components/utils/scrollToAnchor'
import { valueProps }        from './content/valueProps'
import ContentAccordion      from '../../components/sections/contentAccordion'
import Mission               from './content/mission'
import Ethical               from './content/ethical'
import { sheetsReviews }     from './content/sheetsReviews'
import Reviews               from '../../components/sections/reviews'
import { additionalDetails } from './content/additionalDetails'
import Sustainable           from './content/sustainable'
import Comfort               from './content/comfort'
import { suggestedItems }    from '../../components/data/suggestedItems'
import SuggestedItems        from '../../components/sections/suggestedItems'
import { faqs }              from './content/faqs'
import Faqs                  from '../../components/sections/faqs'
import Footer                from '../../components/sections/footer'
import '../../scss/product-cotton-sheets.scss'

function Sheets () {
  const [productName, setProductName]       = useState(null)
  const [type, setType]                     = useState(null)
  const [color, setColor]                   = useState(null)
  const [price, setPrice]                   = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  const pageUrl = 'sheets'
  let page      = getProductConfig('sheets')
  page.pageId   = getPageId(pageUrl)
  page.pageUrl  = pageUrl

  page.headerTitle = <>Product Detail Page &ndash; Bed Sheets</>
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
      <ScrollToAnchor monthlyPayment={ monthlyPayment } />
      <ContentAccordion accordionContent={ valueProps } />
      <Mission />
      <Ethical />
      <Reviews reviews={ sheetsReviews } />
      <ContentAccordion accordionContent={ additionalDetails } />
      <Sustainable />
      <Comfort />
      <SuggestedItems suggestedItems={ suggestedItems } />
      <Faqs faqs={ faqs } />
      <Footer />
    </Main>
  )
}

export default Sheets;