import React from 'react';
import Modal from 'react-bootstrap/Modal';

function GalleryModal(props) {
  return (
    <Modal 
      className="image-overlay" 
      show={ props.show } 
      onHide={ props.handleClose } 
      size={ props.modal.size }>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <img src={ props.modal.image } alt={ props.modal.title } data-mobile={ props.modal.mobile } />
      </Modal.Body>
    </Modal>
  )
}

export default GalleryModal;