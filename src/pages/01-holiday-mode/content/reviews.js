import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

function Reviews(props) {
  const reviews = [
    {
      review: 'The experience has been awesome. Easy to take out of the box and easy to set up. Mattress is really nice and for the price it\'s a bargain.',
      reviewer: 'Gregory'
    },
    {
      review: 'Its no longer a struggle to try to fall asleep or stay asleep. Buying a Lull is the best decision I ever made.',
      reviewer: 'Leolanie'
    },
    {
      review: 'We slept like freaking babies. It\'s so great! Not too soft or hard, easy sleep and hugs you just right without suffocating you!',
      reviewer: 'Jessica'
    },
    {
      review: 'My husband gets up early for work, and I do not feel him getting out of bed.',
      reviewer: 'Mia C.'
    },
    {
      review: 'I was skeptical a bed that comes in a box could be so comfortable.... but it is amazing! The price was fantastic and everyone I have dealt with was great!',
      reviewer: 'Christine H.'
    },
    {
      review: 'My lull mattress is the best thing ever! Every night when I sleep it feels like a marshmallow suggling and supporting me it is so comfortable.',
      reviewer: 'Tonia P.'
    },
  ]
  return (
    <div className="reviews">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h2>People Love Lull!</h2>
            <p>The best-reviewed mattress online.</p>
          </div>
        </div>
        <div className="row">
          <Swiper
            className="swiper-container-reviews"
            modules={[Pagination]}
            grabCursor={ true }
            loop={ true }
            pagination={{ 
              clickable: true,  
            }}
            breakpoints={{
              768: {
                  slidesPerView: 3,
                  spaceBetween: 0
              }
            }}
          >
            { reviews.map((r, index) =>
              <SwiperSlide key={ `review${index}`} >
                <div className="item">
                  <div className="stars"></div>
                  <div className="review">
                      { r.review.length < 100 ?
                        <p className="x2">{ r.review }</p>
                        :
                        <p>{ r.review }</p>
                      }
                  </div>
                  <h6>&mdash; { r.reviewer }</h6>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Reviews;