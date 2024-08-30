import React, { useState, useEffect } from 'react'
import CartItem from "./cartItem"
import UpsellItem from './upsellItem'

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
      style={{ order: index }}
    />
  ))
  const upsellItems = Array.from({ length : props.upsells.length }).map((_, index) => (
    <UpsellItem 
      key={index} 
      item={ props.upsells[index] } 
      upsellActive={ index === 0 ? props.upsell0Active : props.upsell1Active }
      setUpsellActive={ index === 0 ? props.setUpsell0Active : props.setUpsell1Active }
      upsellSku={ index === 0 ? props.upsell0Sku : props.upsell1Sku }
      setUpsellSku={ index === 0 ? props.setUpsell0Sku : props.setUpsell1Sku }
      cart={ props.cart }
      cartTotal={ props.cartTotal }
      setCartTotal={ props.setCartTotal }
    />
  ))

  React.useEffect(()=> {
    console.log('cart change', props.cart)
    

  }, [props.upsell0Active]);
  
  return (
    <>
      { cartItems }
      { upsellItems }
    </>
    
  )
}

export default CartItems