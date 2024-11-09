import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

function LayersDetails(props) {
  const details = [
    {
      title: 'Quilted Memory Foam Cover',
      details: <h3>Easily concealed beneath the<br className='hidden-md hidden-lg' /> sheets, this<br className='visible-md visible-lg' /> high-quality cover<br className='visible-sm' /> features quilted open-cell memory foam and a hexagonal, top-tick design for maximum airflow, keeping you comfortable both in and out of sleep.</h3>
    },
    {
      title: 'Cooling Comfort Layer',
      details: <h3>2" of cooling-gel bead infused memory<br className='visible-md' /> foam promotes increased<br className='visible-xxs' /> air circulation<br className='visible-md' /> by redirecting and releasing heat away from your body. The contouring memory foam promotes proper spine alignment<br className='hidden-md hidden-lg' /> for support<br className='visible-md' /> all night long.</h3>
    },
    {
      title: 'Fast Response Transition Layer',
      details: <h3>The 2' transitional layer is<br className='visible-xxs' /> composed of proprietary high resilience, medium-firm foam and works hard to distribute motion and add additional support. <br className='visible-xssm' />Rest easy with the perfect alignment <br className='visible-xssm' />and <br className='visible-xxs' />wake up feeling fully restored.</h3>
    },
    {
      title: 'Durable Base Layer',
      details: <h3>The foundation for better sleep<br className='hidden-md hidden-lg' /> starts here. <br className='visible-md visible-lg' />7" of sink-resistant, <br className='hidden-md hidden-lg' />high-density, foam maintains the appearance and feel of your mattress.  Unrivaled durability makes it the<br className='visible-md' /> perfect foundation for the comfort layers above.</h3>
    }
  ]
  return (
    <Swiper 
      index={ props.activeIndex }
      onSlideChange={ props.handleDots }
      onSwiper={ props.setGallerySwiper }
    >
      { details.map((layer, index) =>
        <SwiperSlide 
          data-slide={ index + 1 }
          key={ `slide-${index + 1}` }
        >
          <h4 data-slide={ index + 1 }>{ layer.title }</h4>
          { layer.details }
        </SwiperSlide>
      )}    
    </Swiper>
  )
}

export default LayersDetails