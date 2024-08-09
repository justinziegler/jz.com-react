import React, { useState }  from 'react';
import Modal from 'react-bootstrap/Modal';

function UpsellModal(props) {
  return (
    <Modal 
      show={ props.show } 
      onHide={ props.handleClose }
      size="xl" >
      {/* <Modal.Header closeButton></Modal.Header> */}
      <Modal.Body>
        <h1>Upsell modal { props.showUpsell0Modal } !! { props.u.colorSelection }</h1>
      </Modal.Body>
    </Modal>
  )
}

export default UpsellModal;