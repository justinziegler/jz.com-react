import React, { useState } from 'react';
import { vpMobile } from '../../home/content/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFlip } from 'swiper';

function ValuePropsGallery(props) {
  let valueProps = [
    {
      class: 'one',
      title: <h2>Find Comfort in <span>Great Sleep</span></h2>,
      content: <p>Great sleep reduces stress,<br /> boosts your immune system,<br className="visible-sm visible-lg" /> and helps you stay happy.</p>
    }
  ];
  const vpMobileContent = [
    {
      class: 'four',
      title: <h2>Shop Safe. Sleep Well. <span>Stay Healthy.</span></h2>,
      content: <p>Lull's three layers of memory foam are<br className="visible-xs" /> designed to relieve pressure points and<br className="visible-xs" /> support you in all the right places.</p>
    },
    {
      class: 'two',
      title: <h2>No Store.<br />No Sales Pitch. <span>No Kidding</span></h2>,
      content: <p>Order Lull online and it arrives at<br className="visible-xs" /> your door compressed in a box.</p>
    }
  ]
  const vp = {
    class: 'three',
    title: <h2>More Sleep <span>More Happy</span></h2>,
    content: <p>You snooze you win! Sleep so good,<br className="visible-xs" /> you'll wake up smiling.</p>
  }
  if (vpMobile) {
    valueProps = valueProps.concat(vpMobileContent);
  } 
  valueProps.push(vp);
  
  return (
    <>
      <Swiper
        modules={[EffectFlip, Pagination]} effect="flip"
        className="col-xs-12 col-sm-5 col-lg-4 col-lg-offset-1"
        flipEffect={{
            slideShadows: false
        }}
        onSwiper={ props.setVPSwiper }
        onSlideChange={ props.vpUpdate }
        grabCursor='true'
        pagination={{ clickable: true }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: true,
        }}
      >
        { valueProps.map((x, index) =>
          <SwiperSlide 
            className={ x.class } 
            key={ `gallery${index}` }
          >
            { x.title }
            { x.content }
          </SwiperSlide>
        )}
      </Swiper>
      <div className="swiper-pagination mobile"></div>
      <a href="#" className="btn btn-default visible-xs">Shop the Mattress</a>
      <div className="clearfix"></div>
    </>
  )
}

export default ValuePropsGallery;