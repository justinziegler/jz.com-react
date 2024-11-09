import React from 'react'
import { tweets } from './tweets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import '../../../css/swiper.css'

function Reviews(props) {
  return (
    <section 
      className='reviews-carousel navy' 
      data-active={ props.activeNavItem === 'reviews-carousel' }
    >
      <div className='close' onClick={ props.closeSection }></div>
      { tweets.map(items =>
        <div className='container' key='tweets'>
          <div className='row'>
            <div className='col-xs-12'>
              <h2>Join the Hundreds of Thousands<br />Of Happy Sleepers Who Love<br /> Waking Up on a Lull Mattress</h2>
            </div>
            <div className='col-xs-12'>
              <Swiper
                modules={[Navigation, Pagination]} 
                loop={ true }
                grabCursor={ true }
                breakpointsInverse={ true }
                centeredSlides={ true }
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 30
                  },
                }}
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
              >
                { items.reviews.map((reviews, index) =>
                  <React.Fragment key={ `review-${ index }` }>
                    <SwiperSlide key={ `slide-${ index }` }>
                      <div className='item'>
                        <h4 
                          data-source-type='social' 
                          data-source={ reviews.source } 
                          data-reviewer={ reviews.name } 
                          className='lazyload'
                        >
                          { reviews.name }
                        </h4>
                        <div className='review'>
                          <p>{ reviews.review }</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </React.Fragment>
                )}
              </Swiper>
              <div className='swiper-button-prev'></div>
              <div className='swiper-button-next'></div>
              <div className='swiper-pagination'></div>
              { items.cta !== undefined &&
                <>
                  { items.cta.map((cta, index) =>
                    <a 
                      href={ cta.link } 
                      className={ `btn btn-${ cta.buttonType }` }
                      key={ `cta-${index}` }
                    >
                      { cta.text }
                    </a>
                  )}
                </>
              }
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Reviews