
import React, { useState } from 'react';
import { getProductConfig } from '../../components/utils/getProductConfig';
import Main from '../../components/main'
import ProductDisplay from '../../components/productDisplay';
import '../../scss/product-frame.scss'
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

function BedFrame () {
  const [productName, setProductName] = useState('')
  const [type, setType] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [initialSelectionLoaded, setInitialSelectionLoaded] = useState(false)

  let page = getProductConfig('frame')
  page.pageUrl = 'bed-frame'
  page.header = true
  page.headerTitle = 'Bed Frame PDP'
  page.headerIntro = [
    <p>This product detail page features a number of interactive elements, including a slide-able product comparison module that I also developed the photography for.</p>
  ]

  const ourWay = [
    {
      title: 'Title One',
      titleClass: 'shipping',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis, leo in scelerisque laoreet, ligula nunc faucibus purus, at ornare lectus justo et neque. Duis hendrerit ante elit, vel congue mi luctus sed.'
    },
    {
      title: 'Title Two',
      titleClass: 'trial',
      content: 'Integer ullamcorper facilisis massa nec cursus. Praesent consequat, erat ac ullamcorper dignissim, ipsum neque fringilla orci, non condimentum mi mi vitae metus. Nunc dolor risus, semper cursus lorem cursus, efficitur placerat turpis.'
    },
    {
      title: 'Title Three',
      titleClass: 'returns',
      content: 'Phasellus eget urna vitae dolor ornare placerat condimentum vel tellus. Cras fermentum, ex ac pharetra mollis, elit enim vestibulum arcu, eget porttitor augue libero nec erat. Nam ac congue eros.'
    },
    {
      title: 'Title Four',
      titleClass: 'warranty',
      content: 'Cras vel eleifend sem. Pellentesque dignissim, felis non porta hendrerit, nunc nisl iaculis diam, nec fringilla enim mauris interdum nulla. Ut hendrerit lacus mauris, sed auctor est facilisis eget.'
    }
  ];

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