
import React, { useState }  from 'react';
import { getPageId }        from '../../components/utils/getPageId'
import { getProductConfig } from '../../components/utils/getProductConfig';
import Main                 from '../../components/sections/main';
import ProductDisplay       from '../../components/productDisplay';
import ScrollToAnchor       from '../../components/utils/scrollToAnchor'
import { ourWay }           from './content/ourWay';
import OurWay               from '../../components/sections/ourWay'
import Upgrade              from './content/upgrade';
import { valueProps }       from './content/valueProps';
import ValueProps           from '../../components/sections/valueProps';
import Layers               from './content/layers';
import FinancingInfo        from './content/financingInfo';
import FirmnessScale        from './content/firmnessScale';
import MadeSimple           from './content/madeSimple';
import Ratings              from '../../components/sections/ratings';
import { mattressReviews }  from './content/mattressReviews';
import Reviews              from '../../components/sections/reviews';
import BedFrames            from './content/bedFrames';
import { suggestedItems }   from './content/suggestedItems';
import SuggestedItems       from '../../components/sections/suggestedItems';
import { faqs }             from './content/faqs';
import Faqs                 from '../../components/sections/faqs';
import Footer               from '../../components/sections/footer';
import '../../css/product-shop-opm-gallery.css'

function Mattress (props) {
  const [productName, setProductName]       = useState(null)
  const [type, setType]                     = useState(null)
  const [color, setColor]                   = useState(null)
  const [price, setPrice]                   = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [scrolled, setScrolled]             = useState(false)

  const pageUrl = 'mattress'
  let page      = getProductConfig('mattress')
  page.pageId   = getPageId(pageUrl)
  page.pageUrl  = pageUrl

  page.headerTitle = 'Product Display – Basic Config'
  page.headerIntro = [
    <>REWRITE The links below highlight the features of a Product Display module that I developed to support a line of bedding products.</>,
    <><strong>Mattress:</strong> This is the basic configuration, which allows users to add a product to cart and optionally add an upsell from resulting modal.</>
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
      <ScrollToAnchor 
        monthlyPayment={ monthlyPayment } 
        scrolled={ scrolled }
        setScrolled={ setScrolled }
      />
      <OurWay ourWay={ ourWay } />
      <Upgrade />
      <ValueProps vp={ valueProps } />
      <Layers />
      <FinancingInfo monthlyPayment={ monthlyPayment } />
      <FirmnessScale />
      <MadeSimple />
      <Ratings />
      <Reviews reviews={ mattressReviews } />
      <BedFrames />
      <SuggestedItems suggestedItems={ suggestedItems } />
      <Faqs faqs={ faqs } />
      <Footer />
    </Main>
  )
}

export default Mattress