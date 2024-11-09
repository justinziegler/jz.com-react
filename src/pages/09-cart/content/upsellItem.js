import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'

function UpsellItem(props) {
  const item = props.item
  const [order, setOrder] = useState(props.cart.length + props.index + 1)
  const [quantity, setQuantity] = useState(1)

  const handleRemove = (e) => {
    e.preventDefault()
    props.setUpsellActive(false)
    props.setCartTotal(props.cartTotal - (item.salePrice * quantity))
    setOrder(props.itemOrder + 1)
    props.setItemOrder(props.itemOrder + 1)
  }

  const decreaseQty = (e) => {
    e.preventDefault()
    e.target.blur()
    if (quantity > 1) {
      setQuantity(quantity - 1)
      props.setCartTotal(props.cartTotal - props.upsellPrice)
    }
  }

  const increaseQty = (e) => {
    e.preventDefault()
    e.target.blur()
    setQuantity(quantity + 1)
    props.setCartTotal(props.cartTotal + props.upsellPrice)
  }

  return (
    <Collapse in={ props.upsellActive }>
      <li data-sku={ item.sku }
        data-type={ item.type }
        data-color={ item.color }
        style={{ order: order }}
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
                  <React.Fragment key={ `details-${ u.sku }` }>
                    <h3 className='current-size' data-sku={ u.sku } data-active={ u.sku === props.upsellSku }>
                      { item.name }
                    </h3>
                    <h4 className='current-size' data-sku={ u.sku } data-active={ u.sku === props.upsellSku }>
                      { u.sizeName }
                    </h4>
                  </React.Fragment>
                )}
              </div>
              <div className='pricing col-xs-3'>
                { item.skus.map(u =>
                  <div className='item' data-sku={ u.sku } 
                    data-active={ u.sku === props.upsellSku }
                    key={ u.sku }
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
                    className={ quantity === 1 ? 'qty minus disabled' : 'qty minus' }
                    aria-label='Decrease Quantity' 
                    tabIndex='0'
                    onClick={ decreaseQty }
                  >-</button>
                  <div className='qty-display' data-quantity={ quantity }>
                  </div>
                  <button 
                    className='qty plus' 
                    aria-label='Increase Quantity' 
                    tabIndex='0'
                    onClick={ increaseQty }
                  >+</button>
                </div>
              </div>
            </div>
            <a
              href='./'
              className='remove' 
              role='button' 
              aria-label='Remove Item' 
              tabIndex='0'
              onClick={ handleRemove }
            > 
            </a>
          </div>
        </div>
      </li>
    </Collapse>
  )
}

export default UpsellItem