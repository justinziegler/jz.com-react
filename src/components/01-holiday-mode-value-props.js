import React from 'react';
import { Pagination, EffectFlip } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function HolidayModeVP() {
  return (
    <Swiper
      className="col-xs-12 col-sm-5 col-lg-4 col-lg-offset-1"
      modules={[Pagination, EffectFlip]}
      effect="flip"
      flipEffect={{ slideShadows: false }}
      grabCursor={ true }
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      pagination={{ el: '#value-props .swiper-pagination', clickable: true }}
    >

      <SwiperSlide className="one">
        <h1>Find Comfort in <span>Great Sleep</span></h1>
        <p>Great sleep reduces stress,<br class="visible-sm" /> boosts your immune system,<br class="visible-sm visible-lg" /> and helps you stay happy.</p>
      </SwiperSlide>

      <SwiperSlide className="four">
        <h2>Shop Safe. Sleep Well. <span>Stay Healthy.</span></h2>
        <p>Lull's three layers of memory foam are<br class="visible-xs" /> designed to relieve pressure points and<br class="visible-xs" /> support you in all the right places.</p>
      </SwiperSlide>

      <SwiperSlide className="two">
        <h2>No Store.<br />No Sales Pitch. <span>No Kidding</span></h2>
        <p>Order Lull online and it arrives at<br class="visible-xs" /> your door compressed in a box.</p>
      </SwiperSlide>
    </Swiper>
  )
}

export { HolidayModeVP };