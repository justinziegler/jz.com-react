import React, { useState }    from 'react'
import { preventDefault }     from '../../../components/utils/preventDefault.js'
import Content                from './value-props-1-content.js'
import Gallery                from './value-props-1-gallery.js'
import '../../../scss/01-holiday-mode/value-props.scss'

function ValueProps() {
  const [vpSwiper, setVPSwiper]         = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  function vpUpdate() {
    setCurrentIndex(vpSwiper.activeIndex)
  }
  return (
    <div 
      id='value-props' 
      className={ currentIndex === 0 ? 'slide-one' : 'slide-two'}
    >
      <div className='container'>
        <div className='row'>
          <Content currentIndex={ currentIndex } />
          <Gallery
            setVPSwiper={ setVPSwiper }
            vpUpdate={ vpUpdate }
          />
        </div>
        <a href='./' 
          className='btn btn-default visible-xs' 
          onClick={ preventDefault }
        >
          Shop the Mattress
        </a>
        <div className='clearfix'></div>
      </div>  
    </div>
  )
}

export default ValueProps