
import React, { useState } from 'react';
import { getProductConfig } from '../../components/utils/getProductConfig';
import Main from '../../components/pageSections/main'
import ProductDisplay from '../../components/productDisplay';
import '../../scss/product-frame.scss'
import { ourWay } from '../../components/data/ourWay';
import OurWay from '../../components/pageSections/ourWay';
import FinancingInfo from './content/financingInfo'
import Features from './content/features'
import Compare from './content/compare';
import Assembly from './content/assembly';
import Ethical from './content/ethical';
import Versatile from './content/versatile';
import { frameReviews } from './content/frameReviews';
import Reviews from '../../components/pageSections/reviews';
import { suggestedItems } from '../../components/data/suggestedItems';
import SuggestedItems from '../../components/pageSections/suggestedItems';
import { faqs } from './content/faqs';
import Faqs from '../../components/pageSections/faqs';
import Footer from '../../components/pageSections/footer'

let page = getProductConfig('frame')
page.pageUrl = 'bed-frame'
page.header = true
page.headerTitle = 'Bed Frame PDP'
page.headerIntro = [
  <p>This product detail page features a number of interactive elements, including a slide-able product comparison module that I also developed the photography for.</p>
]

function BedFrame () {
  const [productName, setProductName] = useState('')
  const [type, setType] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [initialSelectionLoaded, setInitialSelectionLoaded] = useState(false)  

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
        setInitialSelectionLoaded={ setInitialSelectionLoaded }
      />

      <OurWay ourWay={ ourWay } />

      <FinancingInfo productName={ productName } monthlyPayment={ monthlyPayment }/>

      <Versatile productName={ productName }/>

      <Features productName={ productName } />

      <Compare type={ type } color={ color } initialSelectionLoaded={ initialSelectionLoaded } />

      <Assembly />

      <Ethical />
     
      <Reviews reviews={ frameReviews } />

      <SuggestedItems suggestedItems={ suggestedItems } />

      <Faqs faqs={ faqs } />

      <Footer />

    </Main>
  )
}

export default BedFrame;