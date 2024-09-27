import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../scss/sections/reviews.scss'

function Reviews(props) {
  return (
    <>
      { props.reviews.map(items =>
        <section className='reviews-carousel' key={ 'reviews' }>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                { items.heading !== '' &&
                  <h2>{ items.heading }</h2>
                }
              </div>
              <div className='col-xs-12 col-sm-6 col-sm-offset-3 col-md-12 col-md-offset-0'>
                <Swiper 
                  className='carousel' 
                  modules={[Navigation, Pagination]} 
                  navigation
                  pagination={{ clickable: true }}
                  loop={ true }
                  grabCursor={ true }
                  centeredSlides={ true }
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 30
                    },
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 7.5
                    },
                   }}
                >
                  { items.reviews.map((review, index) =>
                    <SwiperSlide key={ `review${ index }`}>
                      <div className='item'>
                        <div className='star-gauge'>
                          <div className='stars' style={{ width: `${ review .stars * 20 }` }}></div>
                        </div>
                        { review.reviewTitle !== '' &&
                          <div className='review-title'>
                            <h4 data-source-type='reviews'>{ review.reviewTitle }</h4>
                          </div>
                        }
                        <div className='review'>
                          <p>{ review.review }</p>
                        </div>
                        <p className='reviewer'>&mdash; { review.name }</p>
                      </div>
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Reviews