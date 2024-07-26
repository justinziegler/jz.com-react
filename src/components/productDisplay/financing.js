import React, { useState } from 'react';

function Financing(props) {
  const p = props.page;
  let additionalClass = ''
  if (p.discountActual > 0) additionalClass = 'discounted'
  let Items = [];
  for (let i = 1; i <= p.maxQty; i++) {
    p.skus.forEach((item, index) => {
      let displayRule = 'none'
      if (index === 0) displayRule = 'block'
      Items.push(
        <div 
          data-sku={ item.sku }
          key={ `financing${ index }`}
          data-visible={ item.sku === props.activeSku }
          data-propssku={ props.sku }
        >
          <p className='price' 
            data-sku={ item.sku } 
            data-quantity={ i } 
            key={ `price${ index }`}
          >
            0% APR financing as low as 
            <span>
              <span className='monthly-payment'> ${ Math.round(item.monthlyPayment) }</span>
              { p.upsell &&
                <span className='current-monthly-payment'></span>
              }/month
            </span> <span 
              className='tooltip question' 
              data-sku={ item.sku } 
              data-quantity={ i }>
            </span>
          </p>

          {/* Tooltip */}
          <div className='monthly-apr' 
            data-sku={ item.sku } 
            data-quantity={ i } 
            key={ `monthly${ index }`}
            style={{ display: 'none' }}
          >
            APR as Low as 0% for { item.paymentTerm } months.<br />
            <a 
              href='#' 
              className='financing-modal-link' 
              data-toggle='modal' 
              data-sku={ item.sku } 
              data-quantity={ i } 
              data-target='#financing-modal'
              //  onClick='updateFinancing('item.sku ,  i )'
            >
              Learn more
            </a>.
          </div>
        </div>
      )
    })
  }
  return (
    <div className='col-xs-12'>
      <div className={ `financing ${ additionalClass }`} key='asdf'> 
        { Items }
      </div>
    </div>
  )
}

export default Financing