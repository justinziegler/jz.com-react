import React, { useState } from 'react';
import 'lazysizes';
import { getProductSkus } from '../../components/utils/getProductSkus';
import Hero from './content/hero';
import ValueProps from './content/value-props';
import KnowUs from './content/know-us';
import VideoModal from '../../components/video-modal';
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
            <li>Lock screen position on modal show?</li>
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