import React              from 'react'
import Modal              from 'react-bootstrap/Modal'
import { preventDefault } from '../utils/preventDefault'
import                         '../../scss/modal-custom.scss'

function SizeGuideModal(props) {
  const p = props.p
  let Items = []
  let defaultType = ''
  let modalId = 'size-guide-modal'
  if (p.sizeGuideMattressModal) {
    modalId = 'mattress-size-guide-modal'
    p.skus.forEach((item, index) => {
      let size = item.size
      let type = item.type
      if (item.size.length > 2) {
        size = item.size.slice(9)
        type = item.size.slice(3, -6)
        if (defaultType == '') {
          defaultType = item.size.slice(3, -6)
        }
      }
      Items.push(
        <li 
          data-size={ size }
          data-toggle-visibility={ true } 
          data-product-id={ type }
          key={ `sg${ index }`}
        >
          <span className='title'>{ item.sizeName } </span>
          <span className='dimensions'>{ item.w } x { item.l }</span>
          <div className='bed' data-size={ size }></div>
        </li>
      )
    })
  } else {
    p.skus.forEach((item, index) => {
      if (item.catId === p.defaultCatId && item.color == p.defaultColor) {
        Items.push(
          <li 
            data-size={ item.size } 
            key={ `msg${ index }`}
          >
            <span>
              { item.sizeName }
            </span>{ item.w } x { item.l }
            { item.h !== '' && 
              <>x { item.h }</>
            }
          </li>
        )
      }
    })
  }

  return (
    <Modal 
      show={ props.showModal } 
      onHide={ () => props.setShowModal(false) }
      id={ modalId }
      className='modal-lg content-modal'
    >     
      <Modal.Body>
        <button className='close' onClick={ () => props.setShowModal(false) }>Close</button>
        { p.sizeGuideMattressModal ?
          <>
            <ul className='mattress-sizes'>
              { Items }
            </ul>     
            <p>Not sure which size? <br className='visible-xxs' /> 
              See our guide to <a href='./' onClick={ preventDefault }>mattress sizes and dimensions.</a>
            </p>     
          </>
        :
          <>
            <h2>{ p.sizeGuideProductName } Size Guide</h2>
            <div className='row'>
              <div className='col-xs-12 col-sm-7'>
                <div className='mattress-size-guide'></div>
              </div>
              <div className='col-xs-12 col-sm-5'>
                <ul>
                  { Items }
                </ul>
              </div>
            </div>          
          </>
          }
      </Modal.Body>
    </Modal>
  )
}

export default SizeGuideModal