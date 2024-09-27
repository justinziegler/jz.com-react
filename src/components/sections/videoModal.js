import React from 'react';
import Modal from 'react-bootstrap/Modal';

function VideoModal(props) {
  return (
    <Modal 
      show={ props.show } 
      onHide={ props.handleClose }
      size='xl' >
      <Modal.Body>
        <div className='embed-container'>
          <iframe
            id='videoframe' 
            src={ props.video } 
            className='video'
            title='YouTube video player' 
            frameborder='0' 
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' 
            referrerpolicy='strict-origin-when-cross-origin' 
            allowFullscreen
          >
          </iframe>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default VideoModal;