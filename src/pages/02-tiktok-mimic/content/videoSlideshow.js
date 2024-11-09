import React, { useState }                              from 'react';
import { Autoplay, Navigation, Pagination, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide }                          from 'swiper/react';
import VideoSlide                                       from './videoSlide';
import { slides }                                       from './slides';
import 'swiper/css';
import 'swiper/css/pagination';

function VideoSlideshow(props) {
  const [videoSwiper, setVideoSwiper] = useState(null)

  function handleVideoSwiperClick(e) {
    const activeSlide = document.getElementsByClassName('swiper-slide')[videoSwiper.activeIndex];
    const activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
    if (activeSlideVideo.paused) {
      activeSlideVideo.play();
    } else {
      activeSlideVideo.pause();
    }
  }

  function pauseAllVideos(e) {
    if (videoSwiper !== null) {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
      });
    }
  }

  function handleSlideTransition(e) {
    if (videoSwiper !== null) {
      props.setActiveIndex(videoSwiper.realIndex)
      const activeSlide = document.getElementsByClassName('swiper-slide')[videoSwiper.activeIndex]
      const activeSlideVideo = activeSlide.getElementsByTagName('video')[0]
      activeSlideVideo.play()
      activeSlideVideo.addEventListener('ended', (e) => {
        this.slideNext()
      })
    }
  }

  return (
    <Swiper
      className='slideshow'
      modules={[Autoplay, Navigation, Pagination, Mousewheel]} 
      loop={ true }
      grabCursor={ true }
      breakpointsInverse={ true }
      centeredSlides={ true }
      direction={ 'vertical' }
      speed={ 750 }
      mousewheel={{
        invert: true,
      }}
      navigation={{
        nextEl: '.slideshow-next',
        prevEl: '.slideshow-prev',
      }}
      autoplay={{
        delay: 12000
      }}
      onSwiper={ setVideoSwiper }
      onClick={ handleVideoSwiperClick }
      onTransitionStart={ pauseAllVideos }
      onTransitionEnd={ handleSlideTransition }
    >
      { slides.map((slide, index) =>
        <SwiperSlide
          id={ `slide${ index }` }
          key={ `slide${ index }` }
          data-slide={ index } 
          data-cta={ slide.cta }
        >
          <VideoSlide
            slide={ slide }
            index={ index }
            setAdvanceSlide={ props.setAdvanceSlide }
            videoSwiper={ videoSwiper }

          />
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default VideoSlideshow