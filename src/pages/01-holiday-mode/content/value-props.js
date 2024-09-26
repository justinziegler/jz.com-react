import React, { useState } from 'react';
import { preventDefault } from '../../../components/utils/preventDefault.js'
import ValuePropsSlideContent from './value-props-slide-content.js';
import ValuePropsGallery from './value-props-gallery';

function ValueProps() {
  const [vpSwiper, setVPSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  function vpUpdate() {
    setCurrentIndex(vpSwiper.activeIndex);
  }
  return (
    <div id="value-props" 
      className={ currentIndex === 0 ? 'slide-one' : 'slide-two'}>
      <div id="top-section" className="anchor"></div>
      <div className="container">
        <div className="row">
          <ValuePropsSlideContent currentIndex={ currentIndex } />
          <ValuePropsGallery
            setVPSwiper={ setVPSwiper }
            vpUpdate={ vpUpdate }
          />
        </div>
        <a href="./" className="btn btn-default visible-xs" onClick={ preventDefault }>Shop the Mattress</a>
        <div className="clearfix"></div>
      </div>  
    </div>
  )
}

export default ValueProps;