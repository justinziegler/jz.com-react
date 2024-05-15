import React from 'react';
import { galleryContent } from './gallery-content.js';
import { Navigation, Thumbs, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function navigateTOC(slide) {

}

function GalleryTOC(props) {
  const toc = [];
  galleryContent.forEach(item => {
    if (item.groupSlide === 1) {
      toc.push(item);
    }
  })
  return (
    <ul className="gallery-contents">
      { toc.map(y =>
        <li data-group-name={ y.group } className={ y.class } key={ `galleryTOC${y.id}` }>
          <a href="./" 
            target={ y.id - 1 }
            onClick={ props.navigateGallery }>
            <span>{ y.title }</span>
          </a>
        </li>
      )}
    </ul>
  )
}

function Gallery(props) {
  return (
    <Swiper
      modules={[Navigation, Thumbs, Controller]}
      className="gallery"
      spaceBetween={50}
      slidesPerView={1}
      thumbs={{ swiper: props.thumbsSwiper }}
      navigation={{
        nextEl: ".next",
        prevEl: ".prev",
      }}
      onSwiper={ props.setGallerySwiper }
      controller={{ control: props.infoSwiper }}
      onSlideChange={ props.galleryUpdate }
      data-current={ props.currentGroup }
      speed={500}
    >
      { galleryContent.map(x =>
        <SwiperSlide 
          className={ x.class } 
          data-group-name={ x.group } 
          key={ `gallery${x.id}` }
        >
          { x.content }
          { x.class === 'divider' &&
            <GalleryTOC navigateGallery={ props.navigateGallery } />
          }
          { x.images.length === 1 && 
            <img 
              src={ require(`../img/${x.images[0]}`)} 
              className="lazyload"
              data-mobile={ x.mobile }
              alt={ x.title } 
              onClick={ props.handleShow }
            />
          }
          { x.images.length === 2 && 
            <div className="two-up">
              { x.images.map((image, index) => 
                <img 
                  src={ require(`../img/${image}`)} 
                  className="lazyload"
                  data-mobile={ x.mobile }
                  alt={ x.title }
                  onClick={ props.handleShow }
                  key={ `gallery${x.id}-${index}` }
                />
              )}
            </div>
          }
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default Gallery;