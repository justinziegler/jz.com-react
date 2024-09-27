import React      from 'react'
import { Player } from 'video-react'
import 'lazysizes'
import video      from '../../../assets/frame/ubf-16x9-no-audio.mp4'
import 'video-react/dist/video-react.css'
import '../../../scss/07-bed-frame/assembly.scss'

function Assembly(props) {
  return (
    <section className='assembly'>
      <div className='container'>
        <div className='row'>
          <div className='heading col-xs-12'>
            <h2>Quick &amp; Easy Assembly</h2>
            <h3>Elevated sleep awaits.</h3>
          </div>
          <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-12 col-md-offset-0 col-lg-10 col-lg-offset-1'>
            <Player
              playsInline
              autoPlay={ true }
              loop 
              muted
              src={ video }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Assembly