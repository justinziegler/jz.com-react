
import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../scss/section-suggested-items.scss'

function SuggestedItems(props) {

  return (
    <section className='suggestions'>
      <div className='container'>
        <div className='row'>
          { props.suggestedItems.map(si =>
            <>
              <div className='col-xs-12'>
                <h2>{ si.title }</h2>
              </div>
              <Swiper 
                className='suggested-items' 
                modules={[Navigation, Pagination]} 
                navigation
                pagination={{ clickable: true }}
                loop={ true }
                grabCursor={ true }
                breakpointsInverse={ true }
                centeredSlides={ true }
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 15
                  },
                  544: {
                    slidesPerView: 1.5,
                    spaceBetween: 15
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 7.5
                  }
                }}
              >
                { si.items.map(item =>
                  <SwiperSlide className='suggested'>
                    <div 
                      className={ `item ${ item.shortName } lazyload` }
                      role='img' 
                      aria-label={ `Image: ${ item.itemName }` }
                    >
                    </div>
                    <h3>{ item.itemName }</h3>
                    { item.description }
                    <a href={ `../${ item.url }` } className='btn btn-transparent' tabIndex='-1'>
                      See the { item.linkName }
                    </a>
                  </SwiperSlide>
                )}
              </Swiper>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default SuggestedItems