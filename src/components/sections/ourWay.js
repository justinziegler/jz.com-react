import React, { useState } from 'react'
import Modal               from 'react-bootstrap/Modal'
import '../../scss/modal-custom.scss'
import '../../scss/sections/our-way.scss'

function OurWayModal(props) {
  return (
    <Modal 
      show={ props.showModal } 
      onHide={ () => props.setShowModal(false) }
      className='our-way-modal content-modal'
    >
      <Modal.Header>
        <button className='close' onClick={ () => props.setShowModal(false) }>
          <span aria-hidden='true'>Close</span>
        </button>
      </Modal.Header>
      <Modal.Body>
        { props.ourWay.map((item, index) => 
          <div className='item' 
            data-content={ item.className } 
            data-visible={ item.className === props.modalContent }
            key={ `ow-${ index }` }
          >
            <h2>{ item.title }</h2>
            <p>{ item.content }</p>
          </div>
        )}        
      </Modal.Body>
    </Modal>
  )
}

function OurWay(props) {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(props.ourWay[0].className)
  const handleShowModal = (e) => {
    e.preventDefault()
    setModalContent(e.target.dataset.content)
    setShowModal(true)
  }

  const Items = []
  props.ourWay.forEach((item, index) => {
    const additionalClass = index === 0 ? 'col-lg-offset-2' : ''
    Items.push(
      <div 
        className={ `item col-xs-3 col-lg-2 ${ additionalClass }` }
        data-content={ item.className } 
        data-index={ index }
        role='button' 
        tabIndex='0'
        onClick={ handleShowModal }
        key={ `ourway-${ index }` }
      >
        { item.title }
      </div>
    )
  });

  return (
    <section className='our-way module'>
      <div className='container'>
        <div className='page-content row'>
          { Items }
        </div>
      </div>
      <OurWayModal 
        modalContent={ modalContent }
        ourWay={ props.ourWay }
        showModal={ showModal }
        setShowModal={ setShowModal }
      />
    </section>
  )
}

export default OurWay