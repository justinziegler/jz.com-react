import React, { useState } from 'react';
import ValuePropsDeuxGallery from './value-props-deux-gallery';
import ValuePropsDeuxSlideContent from './value-props-deux-slide-content.js';

function ValuePropsDeux() {
  const [vpSwiper, setVPSwiper] = useState(null);
  const [vpIndex, setVPIndex] = useState(0);
  function vpUpdate() {
    setVPIndex(vpSwiper.activeIndex);
    console.log('vpIndex', vpIndex)
  }
  return (
    <div id="value-props-deux"
    className={ vpIndex === 0 ? 'slide-two' : 'slide-one'}>
      <div className="container">
        <div className="row">
          <ValuePropsDeuxGallery
            setVPSwiper={ setVPSwiper }
            vpUpdate={ vpUpdate } 
          />
          <ValuePropsDeuxSlideContent vpIndex={ vpIndex } />
            
          <div className="swiper-pagination mobile"></div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  )
}

export default ValuePropsDeux;