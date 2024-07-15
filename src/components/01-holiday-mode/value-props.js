import React, { useState } from 'react';
import SlideContent from './value-props-slide-content.js';
import ValuePropsGallery from './value-props-gallery';

function ValueProps() {
  const [vpSwiper, setVPSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  function vpUpdate() {
    setCurrentIndex(vpSwiper.activeIndex);
    console.log('currentIndex', currentIndex)
  }
  return (
    <div id="value-props" 
      className={ currentIndex === 0 ? 'slide-one' : 'slide-two'}>
      <a name="top-section" className="anchor"></a>
      <div className="container">
        <div className="row">
          <SlideContent currentIndex={ currentIndex } />
          <ValuePropsGallery
            setVPSwiper={ setVPSwiper }
            vpUpdate={ vpUpdate }
          />
        </div>

        

        {/* <div className="swiper-container col-xs-12 col-sm-5 col-lg-4 col-lg-offset-1">
          <div className="swiper-wrapper">
            <div className="swiper-slide one">
              <h1>Find Comfort in <span>Great Sleep</span></h1>
              <p>Great sleep reduces stress,<br className="visible-sm" /> boosts your immune system,<br className="visible-sm visible-lg" /> and helps you stay happy.</p>
            </div>
            <div className="swiper-slide four">
              <h2>Shop Safe. Sleep Well. <span>Stay Healthy.</span></h2>
              <p>Lull's three layers of memory foam are<br className="visible-xs" /> designed to relieve pressure points and<br className="visible-xs" /> support you in all the right places.</p>
            </div>
            <div className="swiper-slide two">
              <h2>No Store.<br />No Sales Pitch. <span>No Kidding</span></h2>
              <p>Order Lull online and it arrives at<br className="visible-xs" /> your door compressed in a box.</p>
            </div>
            <div className="swiper-slide three">
              <h2>More Sleep <span>More Happy</span></h2>
              <p>You snooze you win! Sleep so good,<br className="visible-xs" /> you'll wake up smiling.</p>
            </div>
          </div>
        </div>
        <div className="swiper-pagination mobile"></div> */}
        <a href="#" className="btn btn-default visible-xs">Shop the Mattress</a>
        <div className="clearfix"></div>
      </div>  
    </div>
  )
}

export default ValueProps;