import React, { useState } from 'react'
import { getProductSkus }  from '../../components/utils/getProductSkus'
import Main                from '../../components/pageSections/main'
import Hero                from './content/hero'
import July4Promo          from '../../components/pageSections/july4Promo'
import ValueProps          from './content/value-props-1'
import KnowUs              from './content/know-us'
import VideoModal          from '../../components/pageSections/videoModal'
import ValuePropsDeux      from './content/value-props-2'
import Financing           from './content/financing'
import SizeGuide           from './content/size-guide'
import DIY                 from './content/diy'
import Reviews             from './content/reviews'
import MediaCollage        from './content/media-collage'
import Footer              from './content/footer'
import 'lazysizes'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/effect-flip'
import '../../scss/01-holiday-mode/holiday-mode.scss'

const page = {
  pageUrl: 'holiday-mode',
  headerTitle: 'Holiday Mode',
  headerIntro: [
    <>Several times a year we would theme key pages on the site for different holiday sales, then return them to normal after the holiday. In an effort to make this process less time-consuming, I developed <strong>Holiday Mode</strong> for the site. With <strong>Holiday Mode</strong>, we were able to switch between regular and holiday content by simply updating one variable.</>,
    <>Use the links below to toggle between the two versions.</>
  ],
  toggleLinks: true
}

let video = '';
const discountActual = 70;

function HolidayMode () {
  const [holidayMode, setHolidayMode] = useState(false)
  const mobile = (window.screen.width <= 500 && window.screen.height <= 880)
  const mattressDiscount = 200
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = (e) => {
    e.preventDefault();
    video = e.target.dataset.videosrc
    setShow(true)
  }
  const skus = getProductSkus([1], discountActual)

  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Mr+Dafoe' rel='stylesheet'></link>
      <Main 
        page={ page } 
        holidayMode={ holidayMode } 
        setHolidayMode={ setHolidayMode }
      >
        <Hero holidayMode={ holidayMode } />

        { holidayMode &&
          <July4Promo mattressDiscount={ mattressDiscount }/>
        }

        <ValueProps />
        <KnowUs handleShow={ handleShow } />
        { !mobile &&
          <ValuePropsDeux />
        }
        <Financing skus={ skus } />
        <SizeGuide skus={ skus } />
        <DIY />
        <Reviews />
        <MediaCollage handleShow={ handleShow } />
        <VideoModal 
          show={ show }
          handleClose={ handleClose } 
          video={ video } 
        />
        <Footer />
      </Main>
    </>
  )
}

export default HolidayMode