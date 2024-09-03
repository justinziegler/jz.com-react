import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'

function CartItem(props) {
  const item = props.item
  const [active, setActive] = useState(true)
  const [order, setOrder] = useState(props.index + 1)
  const [quantity, setQuantity] = useState(1)

  const handleRemove = (e) => {
    e.preventDefault()
    setActive(false)
    props.setCartTotal(props.cartTotal - (item.salePrice * quantity))
    props.setDiscount(props.discount - (item.discount * quantity))
    setOrder(props.itemOrder + 1)
    props.setItemOrder(props.itemOrder + 1)
  }

  const handleRestore = (e) => {
    e.preventDefault()
    setActive(true)
    setQuantity(1)
    props.setCartTotal(props.cartTotal + item.salePrice)
    props.setDiscount(props.discount + item.discount)
    setOrder(props.itemOrder + 1)
    props.setItemOrder(props.itemOrder + 1)
  }

  const decreaseQty = (e) => {
    e.preventDefault()
    e.target.blur()
    if (quantity > 1) {
      setQuantity(quantity - 1)
      props.setCartTotal(props.cartTotal - item.salePrice)
      props.setDiscount(props.discount - item.discount)
    }
  }

  const increaseQty = (e) => {
    e.preventDefault()
    e.target.blur()
    setQuantity(quantity + 1)
    props.setCartTotal(props.cartTotal + item.salePrice)
    props.setDiscount(props.discount + item.discount)
  }

  return (
    <>
      <Collapse in={ active }>
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
                    <h3>{ item.name }</h3>
                    <h4>
                      { item.sizeName } { item.colorSelection && <> &ndash; { item.colorName } </> }
                    </h4>
                  </div>
                  <div className='pricing col-xs-3'>
                    <div className='item' data-sku={ item.sku } 
                      data-type={ item.type }
                      data-color={ item.color }
                      data-price={ item.salePrice }
                      data-discount={ item.discount }
                      data-active={ true }
                      data-upsell={ false }
                      data-quantity={ quantity }
                    >
                      <h4 className={ item.discount > 0 ? 'discounted price' : 'price' }>
                        { Math.round(item.salePrice) === item.salePrice ?
                          <>{ item.salePrice }</>
                          : 
                          <>{ item.salePrice.toFixed(2) }</>
                        }
                      </h4>
                      { item.discount > 0 &&
                        <h4 className='original-price'>{ item.price }</h4>
                      }
                    </div>
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
      { props.itemType === 'cartItem' &&
      <Collapse in={ !active }>
        <li className='removed-items' style={{ order: order + 100 }}>
          <p data-sku={ item.sku }>
            <span>{ item.name }</span> was removed. 
            <a className='cancel-remove' data-sku={ item.sku } title='Cancel' role='button' tabIndex='0' onClick={ handleRestore }>Undo</a>
          </p>
        </li>
      </Collapse>
      }
    </>
  )
}

export default CartItem