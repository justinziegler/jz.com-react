
import React, { useState }     from 'react'
import { getPageDetails }      from '../../components/utils/getPageDetails'
import { getProductConfig }    from '../../components/utils/getProductConfig'
import { Swiper, SwiperSlide } from 'swiper/react'
import Main                    from '../../components/sections/main'
import ProductDisplay          from '../../components/productDisplay'
import ScrollToAnchor          from '../../components/utils/scrollToAnchor'
import { ourWay }              from '../../data/ourWay'
import OurWay                  from '../../components/sections/ourWay'
import FinancingInfo           from './content/financingInfo'
import Features                from './content/features'
import Compare                 from './content/compare'
import Assembly                from './content/assembly'
import Ethical                 from './content/ethical'
import Versatile               from './content/versatile'
import { frameReviews }        from './content/frameReviews'
import Reviews                 from '../../components/sections/reviews'
import { suggestedItems }      from '../../data/suggestedItems'
import SuggestedItems          from '../../components/sections/suggestedItems'
import { faqs }                from './content/faqs'
import Faqs                    from '../../components/sections/faqs'
import Footer                  from '../../components/sections/footer'
import                              '../../scss/07-bed-frame/gallery.scss'
import                              '../../scss/product-display/size-guide-modal.scss'

function BedFrame () {
  const page                                = getPageDetails('bed-frame')
  const product                             = getProductConfig('frame')
  const [productName, setProductName]       = useState(null)
  const [type, setType]                     = useState(null)
  const [color, setColor]                   = useState(null)
  const [price, setPrice]                   = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [scrolled, setScrolled]             = useState(false)

  return (
    <Main page={ page }>
      <ProductDisplay 
        product={ product } 
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