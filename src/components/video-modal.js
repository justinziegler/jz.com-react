import React from 'react';
import Modal from 'react-bootstrap/Modal';

function VideoModal(props) {
  return (
    <Modal 
      className="image-overlay" 
      show={ props.show } 
      onHide={ props.handleClose } >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {/* <img src={ props.modal.image } alt={ props.modal.title } data-mobile={ props.modal.mobile } /> */}
        <div className="embed-container">
          <iframe src={ props.modal.videoSrc } className="video" frameBorder="0" allowFullScreen></iframe>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default VideoModal;