import React, { useState } from 'react';
import 'lazysizes';
import Hero from '../components/01-holiday-mode/hero';
import ValueProps from '../components/01-holiday-mode/value-props';
import KnowUs from '../components/01-holiday-mode/know-us';
import VideoModal from '../components/video-modal';
import '../scss/promotion-holiday-mode.scss';
import '../scss/promotion-holiday.scss';
import { holidayModeThumb } from "../components/content";
import ValuePropsDeux from '../components/01-holiday-mode/value-props-deux';

let vmodal = {
  image: holidayModeThumb,
  video: 'https://www.youtube.com/embed/wujNIrlYa4I?autoplay=1&rel=0'
}

let video = '';

function HolidayMode () {
  
  let holidayMode = true;

  let videoimage = '';
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    video = e.target.dataset.videosrc;
    console.log('e', video);
    vmodal.image = holidayModeThumb;
    console.log('vmodal', vmodal);
    setShow(true);
  }

  
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Mr+Dafoe" rel="stylesheet"></link>
      <main>
        <Hero holidayMode={ holidayMode } />

        { holidayMode &&
          <h1>Add July 4 promo</h1>
        }

        <ValueProps />
        <KnowUs
          handleShow={ handleShow } />
        <ValuePropsDeux />
        <VideoModal 
          show={ show }
          handleClose={ handleClose } 
          video={ video } 
        />
      </main>
    </>
  )
}

export default HolidayMode;