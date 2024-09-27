import React from 'react'
import { videos } from './content'
import VideoModal from '../../../components/pageSections/videoModal'
import '../../../scss/01-holiday-mode/know-us.scss'

function KnowUs(props) {
  return (
    <div className='know-us'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <a 
              onClick={ props.handleShow } 
              href='./' 
              className='pic lazyload' 
              data-videosrc={ videos[0] }
            >
              <h2>Get to know us<br className='visible-xs' /> in 30 seconds</h2>
              <div className='play'></div>
            </a>
          </div>
        </div>
      </div>
      <VideoModal 
        show={ props.show } 
        handleClose={ props.handleClose } 
        modal={ props.modal } />
    </div>
  )
}

export default KnowUs