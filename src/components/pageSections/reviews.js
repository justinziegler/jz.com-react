import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../scss/section-reviews.scss'

function Reviews(props) {
  return (
    <>
      { props.reviews.map(items =>
        <section class='reviews-carousel'>
          <div class='container'>
            <div class='row'>
              <div class='col-xs-12'>
                { items.heading !== '' &&
                  <h2>{ items.heading }</h2>
                }
              </div>
              <div class='col-xs-12 col-sm-6 col-sm-offset-3 col-md-12 col-md-offset-0'>
                <Swiper 
                  className='carousel' 
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
                      spaceBetween: 30
                    },
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 7.5
                    },
                   }}
                >
                  { items.reviews.map(review =>
                    <SwiperSlide>
                      <div class='item'>
                        <div class='star-gauge'>
                          <div class='stars' style={{ width: `${ review .stars * 20 }` }}></div>
                        </div>
                        { review.reviewTitle !== '' &&
                          <div class='review-title'>
                            <h4 data-source-type='reviews'>{ review.reviewTitle }</h4>
                          </div>
                        }
                        <div class='review'>
                          <p>{ review.review }</p>
                        </div>
                        <p class='reviewer'>&mdash; { review.name }</p>
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