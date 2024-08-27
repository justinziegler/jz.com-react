import React, { useState }  from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Player } from 'video-react';
// import ReactPlayer from 'react-player'
import 'lazysizes';
import 'swiper/css';
import 'swiper/css/pagination';
import Main from '../../components/pageSections/main';
import { slides } from './content/slides';

function TiktokMimic () {
  const page = {
    pageUrl: 'tiktok',
    headerIntro: [
      'This promotion was created to engage social media users, and it turned out to be a hit. Features on display include:'
    ],
    headerBullets: [
      'Slideshow of a dozen short videos that auto-advance when complete',
      'Popup overlays of user reviews and FAQs',
      'Email capture redirect to main website'
    ]
  }
  return (
    <Main page={ page }>
      <Swiper
        className='slideshow'

      >
        { slides.map(slide =>
          <SwiperSlide
            id={ `slide${ index }`}
            data-slide={ index } data-cta={ slide.cta }
          >

          </SwiperSlide>
        )}
      </Swiper>
    </Main>
  )
}

export default TiktokMimic;