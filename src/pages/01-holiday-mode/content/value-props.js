import React, { useState } from 'react';
import ValuePropsSlideContent from './value-props-slide-content.js';
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
          <ValuePropsSlideContent currentIndex={ currentIndex } />
          <ValuePropsGallery
            setVPSwiper={ setVPSwiper }
            vpUpdate={ vpUpdate }
          />
        </div>
        <a href="#" className="btn btn-default visible-xs">Shop the Mattress</a>
        <div className="clearfix"></div>
      </div>  
    </div>
  )
}

export default ValueProps;