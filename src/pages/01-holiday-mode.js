import React, { useState } from 'react';
import 'lazysizes';
import Hero from '../components/01-holiday-mode/hero';
import ValueProps from '../components/01-holiday-mode/value-props';
import KnowUs from '../components/01-holiday-mode/know-us';
import VideoModal from '../components/video-modal';
import '../scss/promotion-holiday-mode.scss';
import '../scss/promotion-holiday.scss';

export const HolidayMode = () => {
  
  let holidayMode = true;

  let modal = {
    videosrc: '',
    mobile: false,
    size: 'xl',
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    modal.videosrc = e.target.dataset.videosrc;
    console.log('e', modal.videosrc);

    // modal.mobile = e.target.dataset.mobile === 'true';
    // modal.mobile ? modal.size = 'md' : modal.size = 'xl';
    // modal.title = e.target.alt;
    // console.log('e.target.videosrc', e.target.dataset.adsf)
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
          handleShow={ handleShow }
        />
        
        <VideoModal
          show={ show } 
          handleClose={ handleClose } 
          modal={ modal } />
      </main>
    </>
  )
}
