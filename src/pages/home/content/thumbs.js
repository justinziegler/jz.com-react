import React from 'react';
import { galleryContent } from './gallery-content.js';

import { Thumbs, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Thumbnails(props) {
  return (
    <Swiper
      className="thumbs"
      spaceBetween={10}
      slidesPerView={8}
      modules={[Thumbs, FreeMode]}
      watchSlidesProgress
      freeMode={true}
      onSwiper={props.setThumbsSwiper}
      data-current={ props.currentGroup }
      speed={500}
    >
      { galleryContent.map(x =>
        <SwiperSlide 
          className={ x.class + ' ' + x.group } 
          data-group-name={ x.group }
          data-group-slide={ x.groupSlide }
          key={ 'thumb' + x.id }
        >
          { x.class === 'divider' && <div className="next-icon"></div> }
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default Thumbnails;