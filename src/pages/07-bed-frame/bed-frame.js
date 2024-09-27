
import React, { useState }     from 'react'
import { getProductConfig }    from '../../components/utils/getProductConfig'
import { getPageId }           from '../../components/utils/getPageId'
import { Swiper, SwiperSlide } from 'swiper/react'
import Main                    from '../../components/sections/main'
import ProductDisplay          from '../../components/productDisplay'
import ScrollToAnchor          from '../../components/utils/scrollToAnchor'
import { ourWay }              from '../../components/data/ourWay'
import OurWay                  from '../../components/sections/ourWay'
import FinancingInfo           from './content/financingInfo'
import Features                from './content/features'
import Compare                 from './content/compare'
import Assembly                from './content/assembly'
import Ethical                 from './content/ethical'
import Versatile               from './content/versatile'
import { frameReviews }        from './content/frameReviews'
import Reviews                 from '../../components/sections/reviews'
import { suggestedItems }      from '../../components/data/suggestedItems'
import SuggestedItems          from '../../components/sections/suggestedItems'
import { faqs }                from './content/faqs'
import Faqs                    from '../../components/sections/faqs'
import Footer                  from '../../components/sections/footer'
import '../../scss/07-bed-frame/gallery.scss'

function BedFrame () {
  const [productName, setProductName] = useState(null)
  const [type, setType] = useState(null)
  const [color, setColor] = useState(null)
  const [price, setPrice] = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  const pageUrl = 'bed-frame'
  let page      = getProductConfig('frame');
  page.pageId   = getPageId(pageUrl)
  page.pageUrl  = pageUrl

  page.headerTitle = <>Product Detail Page &ndash; Bed Frame</>
  page.headerIntro = [
    <>REWRITE This product detail page features a number of interactive elements, including a slide-able product comparison module that I also developed the photography for.</>
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

      <OurWay ourWay={ ourWay } />

      <FinancingInfo productName={ productName } monthlyPayment={ monthlyPayment }/>

      <Versatile productName={ productName }/>

      <Features productName={ productName } Swiper={ Swiper } SwiperSlide={ SwiperSlide } />

      <Compare type={ type } color={ color } />

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