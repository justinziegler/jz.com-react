import React, { useState } from 'react'
import LayersDetails       from './layersDetails'
import { ViewportAnchor }  from '../../../components/utils/viewportAnchor'
import                          '../../../scss/06-mattress/mattress-animation.scss'
import                          '../../../scss/06-mattress/layers.scss'

function Layers(props) {
  const [activeIndex, setActiveIndex]     = useState('default')
  const [gallerySwiper, setGallerySwiper] = useState(null) 
  const [inViewport, setInViewport]       = useState(false)

  const handleActiveIndex = (e) => {
    e.preventDefault()
    gallerySwiper.slideTo(Number(e.target.dataset.slide - 1))
    setActiveIndex(Number(e.target.dataset.slide))
  };

  const handleDots = () => {
    setActiveIndex(gallerySwiper.activeIndex + 1)
  }
  const Layers = []
  for (let i = 1; i <=5; i++) {
    Layers.push(
      <div 
        className={ inViewport ? `layer lazyload bounce${ i }` : 'layer lazyload' }
        style={ inViewport ? { opacity: 1 } : { opacity : 0 } }
        data-slide={ i } 
        role='img' 
        aria-label={ `Layer ${ i }` }
        data-active={ 
          activeIndex === 'default' ?
            null
          :
            i === activeIndex 
        }
        key={ `layer-${ i }`}
      >
        <div className='lazyload'></div>
        <div className='lazyload'></div>
      </div>
    )
  }

  const Dots = []
  for (let i = 1; i <=4; i++) {
    Dots.push(
      <button 
        data-slide={ i }
        data-active={ i === 1 ? (activeIndex === 'default' || activeIndex === i) : activeIndex === i } 
        aria-label={ `Layer ${ i }` } 
        tabIndex='0'
        onClick={ handleActiveIndex }
        className={ inViewport ? 'animate' : null }
        style={ inViewport ? { opacity: 1 } : { opacity : 0 } }
        key={ `layer-${ i }-btn`}
      >
        <span></span>
      </button>
    )
  }
  
  return (
    <section className='op-mattress-3d' data-current={ activeIndex }>
      <div className='container-fluid'>
        <div className='row visible-xs visible-sm'>
          <div className='heading col-xs-12'>
            <h2>Four Premium Layers Bring Better Rest</h2>
            <h3>Four layers of premium foam work together to provide<br className='visible-sm' /> 
              active cooling, comfort, and therapeutic support</h3>
          </div>
        </div>
        <div className='content row'>
          <div className='layers col-xs-12 col-sm-6'>
            <div className='frame' data-current={ activeIndex }>
              <div className='stage'>
                { Layers }
              </div>
              <div className='dots'>
                { Dots }
              </div>
            </div>
          </div>

          <div className='details col-xs-12 col-sm-6'>
            <div className='row'>
              <div className='heading col-xs-12 hidden-xs hidden-sm'>
                <h2>Four Premium Layers<br /> Bring Better Rest</h2>
                <h3>Four layers of premium foam work together to provide<br className='visible-sm' /> 
                  active cooling, comfort, and therapeutic support</h3>
              </div>
            </div>
            <div className='frame' data-current='1'>
              <div className='stage'>
                <LayersDetails 
                  activeIndex={ activeIndex }
                  setGallerySwiper={ setGallerySwiper }
                  handleDots={ handleDots }
                />         
              </div>
            </div>
          </div>
        </div>
      </div>
      <ViewportAnchor 
        inViewport= { inViewport } 
        setInViewport={ setInViewport } 
      />
    </section>
  )
}

export default Layers