import React, { useState } from 'react'
import { getPageDetails }  from '../../components/utils/getPageDetails'
import Main                from '../../components/sections/main'
import VideoSlideshow      from './content/videoSlideshow'
import Nav                 from './content/nav'
import Reviews             from './content/reviews'
import Email               from './content/email'
import Faqs                from './content/faqs'
import CTA                 from './content/cta'
import 'lazysizes'
import '../../scss/02-tiktok-mimic/tiktok.scss'

function TiktokMimic () {
  const page                              = getPageDetails('tiktok')  
  const [activeIndex, setActiveIndex]     = useState(0)
  const [navActive, setNavActive]         = useState(false)
  const [activeNavItem, setActiveNavItem] = useState(null)

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