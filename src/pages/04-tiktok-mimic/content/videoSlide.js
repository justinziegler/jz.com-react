import React from 'react';
import { Player } from 'video-react';

function VideoSlide(props) {
  const slide = props.slide

  function handleVideoEnd(e) {
    console.log('its over!!!')
    // console.log('props.videoSwiper', props.videoSwiper)
    // if (props.videoSwiper !== undefined) {
    //   props.videoSwiper.slideNext()
    // }
  }
  return (
    <>
      <div className='overlay'>
        <div className='content'>
          <h2>{ slide.heading } { props.videoPlaying }</h2>
          <p>{ slide.content }</p>
        </div>
      </div>
      <Player
        playsInline
        autoPlay={ true }
        // loop 
        muted
        src={ slide.videoUrl }
        onEnded={ handleVideoEnd }
      />
    </>
  )
}

export default VideoSlide