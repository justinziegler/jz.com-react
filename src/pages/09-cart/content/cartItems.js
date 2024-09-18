import React, { useState } from 'react'
import CartItem from "./cartItem"
import UpsellItem from './upsellItem'
import Collapse from 'react-bootstrap/Collapse'

function CartItems(props) {
  const [itemOrder, setItemOrder] = useState(props.cart.length + props.upsells.length)
  const cartItems = Array.from({ length : props.cart.length }).map((_, index) => (
    <CartItem 
      key={index}
      index={ index }
      item={ props.cart[index] }
      itemType={ 'cartItem' }
      cartTotal={ props.cartTotal }
      setCartTotal={ props.setCartTotal }
      itemOrder={ itemOrder }
      setItemOrder={ setItemOrder }
      discount={ props.discount }
      setDiscount={ props.setDiscount }
    />
  ))
  const upsellItems = Array.from({ length : props.upsells.length }).map((_, index) => (
    <UpsellItem 
      key={index} 
      index={ index }
      item={ props.upsells[index] } 
      upsellActive={ index === 0 ? props.upsell0Active : props.upsell1Active }
      setUpsellActive={ index === 0 ? props.setUpsell0Active : props.setUpsell1Active }
      upsellSku={ index === 0 ? props.upsell0Sku : props.upsell1Sku }
      setUpsellSku={ index === 0 ? props.setUpsell0Sku : props.setUpsell1Sku }
      upsellPrice={ index === 0 ? props.upsell0Price : props.upsell1Price }
      cart={ props.cart }
      cartTotal={ props.cartTotal }
      setCartTotal={ props.setCartTotal }
      itemOrder={ itemOrder }
      setItemOrder={ setItemOrder }
    />
  ))
  
  return (
    <div className='cart-summary col-xs-12'>
      <div className='cart-head row'>
        <Collapse in={ props.discount > 0 }>
          <div className='discount-message col-xs-12'>
            <p>Congratulations, You're <span className='alert'>Saving&nbsp;
                <span className='discount'>
                  ${ props.discount }
                </span>
              </span>
            </p>
          </div>				 
        </Collapse>
        <div className='heading col-xs-12'>
          <h2><span>Cart Summary</span></h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12'>								
          <ul>
            { cartItems }
            { upsellItems }
          </ul>
        </div>
      </div>
    </div>		    
  )
}

export default CartItems