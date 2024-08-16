import React, { useState }  from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../scss/modal-custom.scss'
import '../../scss/section-our-way.scss'

function OurWayModal(props) {
  return (
    <Modal 
      show={ props.showModal } 
      onHide={ () => props.setShowModal(false) }
      className='our-way-modal content-modal'
    >
      <Modal.Header>
        <button className='close' onClick={ () => props.setShowModal(false) }>
          <span aria-hidden="true">Close</span>
        </button>
      </Modal.Header>
      <Modal.Body>
        <div class="item" data-content={ props.modalTitleClass }>
          <h2>{ props.modalTitle }</h2>
          <p>{ props.modalContent }</p>
        </div>
      </Modal.Body>
    </Modal>
  )
}

function OurWay(props) {
  const [showModal, setShowModal] = useState(false)
  const [modalTitle, setModalTitle] = useState(props.ourWay[0].title)
  const [modalTitleClass, setModalTitleClass] = useState(props.ourWay[0].titleClass)
  const [modalContent, setModalContent] = useState(props.ourWay[0].content)
  const handleShowModal = (e) => {
    e.preventDefault()
    console.log('got here')
    setModalTitle(props.ourWay[e.target.dataset.index].title)
    setModalTitleClass(props.ourWay[e.target.dataset.index].titleClass)
    setModalContent(props.ourWay[e.target.dataset.index].content)
    setShowModal(true)
  }

  const Items = []
  props.ourWay.forEach((item, index) => {
    const additionalClass = index === 0 ? 'col-lg-offset-2' : ''
    Items.push(
      <div 
        className={ `item col-xs-3 col-lg-2 ${ additionalClass }` }
        data-content={ item.titleClass } 
        data-index={ index }
        role='button' 
        tabIndex='0'
        onClick={ handleShowModal }
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
        modalTitle={ modalTitle }
        modalContent={ modalContent }
        showModal={ showModal }
        setShowModal={ setShowModal }
        modalTitleClass={ modalTitleClass }
      />
    </section>
  )
}

export default OurWay