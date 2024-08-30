import React, { useState, useEffect } from 'react'
import Collapse from 'react-bootstrap/Collapse'

function UpsellItem(props) {
  const item = props.item
  const [active, setActive] = useState(true)
  const [order, setOrder] = useState(props.index + 1)
  const [quantity, setQuantity] = useState(1)

  // React.useEffect(()=> {
  //   if (props.upsellActive) {
  //     props.setCartTotal(props.cartTotal + item.salePrice)
  //   } else {
  //     props.setCartTotal(props.cartTotal - (item.salePrice * quantity))
  //   }
  // }, [props.upsellActive]);

  return (
    <Collapse in={ props.upsellActive }>
      <li data-sku={ item.sku }
        data-type={ item.type }
        data-color={ item.color }
      >
        <div className='product row'>
          <div className='product-image col-xs-3'>
            <div className='lazyload' role='img' aria-label={ `Image: ${ item.name }` }>
            </div>
          </div>
          <div className='product-details col-xs-9'>
            <div className='row'>
              <div className='details col-xs-9'>
                { item.skus.map(u =>
                  <>
                    <h3 className='current-size' data-sku={ u.sku } data-active={ u.sku === props.upsellSku }>
                      { item.name }
                    </h3>
                    <h4 className='current-size' data-sku={ u.sku } data-active={ u.sku === props.upsellSku }>
                      { u.sizeName }
                    </h4>
                  </>
                )}
              </div>
              <div className='pricing col-xs-3'>
                { item.skus.map(u =>
                  <div className='item' data-sku={ u.sku } 
                    data-type={ u.type }
                    data-color={ u.color }
                    data-price={ u.price }
                    data-discount='0'
                    data-active={ u.sku === props.upsellSku }
                    data-upsell={ true }
                    data-quantity='1'
                  >
                    <h4 className='price'>
                      { u.price }
                    </h4>
                  </div>
                )}
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-9'>
                <div className='quantity'>
                  <button 
                    className='qty minus disabled' 
                    aria-label='Decrease Quantity' 
                    tabIndex='0'
                  >-</button>
                  <div className='qty-display' data-quantity={ item.quantity }>
                  </div>
                  <button className='qty plus' aria-label='Increase Quantity' tabIndex='0'>+</button>
                </div>
              </div>
            </div>
            <a className='remove' role='button' aria-label='Remove Item' tabIndex='0'></a>
          </div>
        </div>
      </li>
    </Collapse>
  )
}

export default UpsellItem