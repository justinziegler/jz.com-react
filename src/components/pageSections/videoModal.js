import React, { useState }  from 'react';
import Modal from 'react-bootstrap/Modal';

function VideoModal(props) {
  return (
    <Modal 
      show={ props.show } 
      onHide={ props.handleClose }
      size="xl" >
      {/* <Modal.Header closeButton></Modal.Header> */}
      <Modal.Body>
        <div className="embed-container">
          <iframe id="videoframe" src={ props.video } className="video" frameBorder="0" allowFullScreen></iframe>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default VideoModal;