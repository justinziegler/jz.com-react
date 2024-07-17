import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { videos } from "./content";
import VideoModal from '../video-modal';

function KnowUs(props) {
  return (
    <div className="know-us">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <a href="#" className="pic lazyload" onClick={ props.handleShow } data-videosrc={ videos[0] }>
              <h2>Get to know us<br className="visible-xs" /> in 30 seconds</h2>
              <div className="play"></div>
            </a>
          </div>
        </div>
      </div>
      <VideoModal show={ props.show }
        handleClose={ props.handleClose } modal={ props.modal } />
    </div>
  )
}

export default KnowUs;