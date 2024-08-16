import React, { useState }  from 'react';
import Modal from 'react-bootstrap/Modal';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'lazysizes';

function UpsellModal(props) {
  const u = props.u
  let additionalClass = ''
  if (!u.showReview) {
    additionalClass = 'fixed'
  }
  const colorDisplayOrder = u.colorDisplayOrder
  let Items = [];
  for (let i = 0; i <= u.gallerySlides - 1; i++) {
    let colorItem = colorDisplayOrder[i]
    Items.push(
      <SwiperSlide 
        className={ `slide-${i + 1} lazyload ${ additionalClass }`} 
        data-color={ colorItem.color }
      >
      </SwiperSlide>
    )
  }
  return (
    <Modal 
      show={ props.showModal } 
      onHide={ () => props.setShowModal(false) }
      className='upsell-modal'
      id={ `upsell-modal-${ props.type }`}
    >
      
      <Modal.Body>
        <button className='close' onClick={ () => props.setShowModal(false) }>Close</button>
        <div className='row'>
          <Swiper 
            modules={[Pagination]} 
            pagination={{ clickable: true }}
            className='col-xs-12 col-sm-6 col-sm-push-6'
          >
            { Items }
          </Swiper>
          <div className='col-xs-12 col-sm-6 col-sm-pull-6'>
            <div className='row'>
              <div className='col-xs-12'>
                <h2>{ u.title }</h2>
                  <div className='star-rating'>
                    <div className='reviews-star-gauge'>
                      <div className='reviews-star-average' style={{ width: `${ u.reviewsAverage * 20 }%` }}>
                      </div>
                    </div>
                    <p>{ u.reviewsAverage } <span>({ u.reviewsTotal })*</span></p>
                  </div>
                <h3>Ships in 1-4 Business Days</h3>
                <p>{ u.subtitle }</p>

                <ul className='details'>
                  { u.details.map(item =>
                    <li>{ item.detail }</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default UpsellModal;