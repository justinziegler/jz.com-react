import React, { useState } from 'react'
import Gallery             from './value-props-2-gallery.js'
import Content             from './value-props-2-content.js'

function ValuePropsDeux() {
  const [vpSwiper, setVPSwiper] = useState(null);
  const [vpIndex, setVPIndex] = useState(0);

  function vpUpdate() {
    setVPIndex(vpSwiper.activeIndex);
  }

  return (
    <div id='value-props-deux'
    className={ vpIndex === 0 ? 'slide-two' : 'slide-one'}>
      <div className='container'>
        <div className='row'>
          <Gallery
            setVPSwiper={ setVPSwiper }
            vpUpdate={ vpUpdate } 
          />
          <Content vpIndex={ vpIndex } />
          <div className='clearfix'></div>
        </div>
      </div>
    </div>
  )
}

export default ValuePropsDeux