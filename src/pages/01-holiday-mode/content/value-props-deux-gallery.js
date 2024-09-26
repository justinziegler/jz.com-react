import React, { useState }        from 'react'
import { Swiper, SwiperSlide }    from 'swiper/react'
import { Pagination, EffectFlip } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';

function ValuePropsDeuxGallery(props) {
  return (
    <>
      <Swiper
        modules={[EffectFlip, Pagination]} effect='flip'
        className='col-xs-12 col-sm-5 col-lg-4 col-lg-offset-1'
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
        <SwiperSlide className='two' key='galleryDeuxTwo' />
        <SwiperSlide className='one' key='galleryDeuxOne' />
      </Swiper>
      <a href='./' className='btn btn-default visible-xs'>Shop the Mattress</a>
      <div className='clearfix'></div>
    </>
  )
}

export default ValuePropsDeuxGallery;