import React, { useState } from 'react';
import 'lazysizes';
import { getProductSkus } from '../components/utils/getProductSkus';
import Hero from '../components/01-holiday-mode/hero';
import ValueProps from '../components/01-holiday-mode/value-props';
import KnowUs from '../components/01-holiday-mode/know-us';
import VideoModal from '../components/video-modal';
import ValuePropsDeux from '../components/01-holiday-mode/value-props-deux';
import Financing from '../components/01-holiday-mode/financing';
import SizeGuide from '../components/01-holiday-mode/size-guide';
import DIY from '../components/01-holiday-mode/diy';
import Reviews from '../components/01-holiday-mode/reviews';
import MediaCollage from '../components/01-holiday-mode/media-collage';
import Footer from '../components/01-holiday-mode/footer';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import '../scss/promotion-holiday-mode.scss';
import '../scss/promotion-holiday.scss';

let video = '';
const discountActual = 70;

function HolidayMode () {
  let holidayMode = true; 
  const mobile = (window.screen.width <= 500 && window.screen.height <= 880);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    video = e.target.dataset.videosrc;
    setShow(true);
  }
  const skus = getProductSkus(1, discountActual);
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Mr+Dafoe" rel="stylesheet"></link>
      <main>
        <div className="to-do">
          <ul>
            <li>Fix ValueProps on mobile</li>
            <li>Fix swiper pagination</li>
            <li>Change heading weight</li>
          </ul>
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
      </main>
    </>
  )
}

export default HolidayMode;