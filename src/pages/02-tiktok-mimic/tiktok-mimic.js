import React, { useState }  from 'react';
import 'lazysizes'
import Main from '../../components/pageSections/main';
import VideoSlideshow from './content/videoSlideshow';
import Nav from './content/nav'
import Reviews from './content/reviews';
import Email from './content/email';
import Faqs from './content/faqs';
import CTA from './content/cta';
import '../../scss/promotion-tiktok.scss'

function TiktokMimic () {
  const page = {
    pageUrl: 'tiktok',
    headerTitle: 'Tiktok Mimic',
    headerIntro: [
      <>This promotion was created to engage social media users, and it turned out to be a hit. Features on display include:</>
    ],
    headerBullets: [
      'Slideshow of a dozen short videos that auto-advance when complete',
      'Popup overlays of user reviews and FAQs',
      'Email capture redirect to main website'
    ]
  }
  
  const [activeIndex, setActiveIndex] = useState(0)
  const [navActive, setNavActive] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState(null)

  const [advanceSlide, setAdvanceSlide] = useState(false)

  function closeSection(e) {
    if (e.which === 13 || e.type === 'click') {
      setNavActive(false)
      setActiveNavItem(null)
    }
  }

  return (
    <>
      <Main page={ page } activeIndex={ activeIndex } navActive={ navActive }>
        <>
          <VideoSlideshow 
            activeIndex={ activeIndex }
            setActiveIndex={ setActiveIndex }
            setAdvanceSlide={ setAdvanceSlide }
          />
          <Nav 
            activeIndex={ activeIndex } 
            setNavActive={ setNavActive }
            setActiveNavItem={ setActiveNavItem }
            closeSection={ closeSection }
          />
          <Reviews 
            closeSection={ closeSection }
            activeNavItem={ activeNavItem }
          />
          <Faqs 
            closeSection={ closeSection }
            activeNavItem={ activeNavItem }
          />
          <Email 
            closeSection={ closeSection }
            activeNavItem={ activeNavItem }
          />
          <CTA 
            closeSection={ closeSection }
            activeNavItem={ activeNavItem }
          />
        </>
      </Main>
      <div className='slideshow-pagination'>
        <div className='slideshow-btn slideshow-prev'></div>
        <div className='slideshow-btn slideshow-next'></div>
      </div>
    </>
  )
}

export default TiktokMimic