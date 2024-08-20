import React, { useState } from 'react';
import 'lazysizes';
import { getProductSkus } from '../../components/utils/getProductSkus';
import Main from '../../components/pageSections/main';
import Hero from './content/hero';
import ValueProps from './content/value-props';
import KnowUs from './content/know-us';
import VideoModal from '../../components/pageSections/videoModal';
import ValuePropsDeux from './content/value-props-deux';
import Financing from './content/financing';
import SizeGuide from './content/size-guide';
import DIY from './content/diy';
import Reviews from './content/reviews';
import MediaCollage from './content/media-collage';
import Footer from './content/footer';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import '../../scss/promotion-holiday-mode.scss';
import '../../scss/promotion-holiday.scss';

const page = {
  pageUrl: 'holiday-mode',
  headerTitle: 'Holiday Mode',
  headerIntro: [
    'Several times a year we would theme key pages on the site for different holiday sales, then return them to normal after the holiday. In an effort to make this process less time-consuming, I developed Holiday Mode for the site. With Holiday Mode, we were able to switch between regular and holiday content by simply updating one variable.',
    'Use the links below to toggle between the two versions.'
  ],
  toggleLinks: true
}

let video = '';
const discountActual = 70;

function HolidayMode () {
  const [holidayMode, setHolidayMode] = useState(true);
  const mobile = (window.screen.width <= 500 && window.screen.height <= 880);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    video = e.target.dataset.videosrc;
    setShow(true);
  }
  const skus = getProductSkus([1], discountActual);
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Mr+Dafoe" rel="stylesheet"></link>
      <Main page={ page } holidayMode={ holidayMode } setHolidayMode={ setHolidayMode }>
        <div className="to-do">
          <ul>
            <li>Fix ValueProps on mobile / width issue</li>
            <li>Fix swiper pagination</li>
            <li>Change heading weight</li>
            <li>Lock screen position on modal show?</li>
            <li> make sure lazysizes works</li>
          </ul>
          <a href="#" onClick={ () => setHolidayMode(!holidayMode) }>HolidayMode toggle</a>
        </div>
        <Hero holidayMode={ holidayMode } />

        { holidayMode &&
          <h1>Add July 4 promo</h1>
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

export default HolidayMode;