import React, { useState } from 'react'
import { getProductSkus }  from '../../components/utils/getProductSkus'
import { getUpsells }      from './content/getUpsells'
import Main                from '../../components/sections/main'
import CartItems           from './content/cartItems'
import Upsells             from './content/upsells'
import OrderSummary        from './content/orderSummary'
// eslint-disable-next-line
import lazySizes           from 'lazysizes'
import '../../scss/09-cart/cart.scss'
import '../../scss/09-cart/cart-images.scss'

let initialTotal = 0
let initialDiscount = 0

function Cart () {
  const page = {
    pageUrl: 'cart',
    headerTitle: 'Shopping Cart',
    headerIntro: [
      'This page was A/B tested against our existing page for over a year. While it was ultimately shelved, some of the features developed here were later ported over to the existing cart. Features on display here include:'
    ],
    headerBullets: [
      'Upsells are preset to the same size as the primary cart item, but users can select another size if desired.',
      'Upsells each have a corresponding modal with an image gallery and product details.',
      'Adding and removing upsells to the cart is visually fluid.'
    ]
  }
  let cart = [];
  const mattressSkus = getProductSkus([1], 300)
  cart.push(mattressSkus[5]);
  const sheetsSkus = getProductSkus([30], 30);
  sheetsSkus.forEach(item => {
    if (item.size === 'CK' && item.color === 'GG') {
      cart.push(item);
    }
  })
  const upsells = getUpsells(cart);

  if (initialTotal === 0) {
    cart.forEach(item => {
      initialTotal += item.salePrice
      initialDiscount += item.discount
    })
  }

  const [upsell0Active, setUpsell0Active] = useState(false)
  const [upsell1Active, setUpsell1Active] = useState(false)
  const [upsell0Sku, setUpsell0Sku]       = useState(upsells[0].sku)
  const [upsell1Sku, setUpsell1Sku]       = useState(upsells[1].sku)
  const [upsell0Price, setUpsell0Price]   = useState(upsells[0].salePrice)
  const [upsell1Price, setUpsell1Price]   = useState(upsells[1].salePrice)
  const [cartTotal, setCartTotal]         = useState(initialTotal)
  const [discount, setDiscount]           = useState(initialDiscount)

  return (
    <Main page={ page }>
      <div className='container'>
        <div className='row'>
          <div className='cart col-xs-12 col-sm-7 col-md-6'>
            <div className='row'>
              <CartItems 
                cart={ cart }
                upsells={ upsells }
                upsell0Active={ upsell0Active }
                upsell1Active={ upsell1Active }
                setUpsell0Active={ setUpsell0Active }
                setUpsell1Active={ setUpsell1Active }
                upsell0Sku={ upsell0Sku }
                upsell1Sku={ upsell1Sku }
                upsell0Price={ upsell0Price }
                upsell1Price={ upsell1Price }
                cartTotal={ cartTotal }
                setCartTotal={ setCartTotal }
                discount={ discount }
                setDiscount={ setDiscount }
              />			
              <Upsells 
                cart={ cart } 
                upsells={ upsells }  
                upsell0Active={ upsell0Active }
                upsell1Active={ upsell1Active }
                setUpsell0Active={ setUpsell0Active }
                setUpsell1Active={ setUpsell1Active }
                upsell0Sku={ upsell0Sku }
                upsell1Sku={ upsell1Sku }
                setUpsell0Sku={ setUpsell0Sku }
                setUpsell1Sku={ setUpsell1Sku }
                upsell0Price={ upsell0Price }
                upsell1Price={ upsell1Price }
                setUpsell0Price={ setUpsell0Price }
                setUpsell1Price={ setUpsell1Price }
                cartTotal={ cartTotal }
                setCartTotal={ setCartTotal }
              />
            </div>
          </div>
      
          <OrderSummary 
            cart={ cart } 
            upsell0Active={ upsell0Active }
            upsell1Active={ upsell1Active }
            upsell0Sku={ upsell0Sku }
            upsell1Sku={ upsell1Sku }
            setUpsell0Sku={ setUpsell0Sku }
            setUpsell1Sku={ setUpsell1Sku }
            upsell0Price={ upsell0Price }
            upsell1Price={ upsell1Price }
            setUpsell0Price={ setUpsell0Price }
            setUpsell1Price={ setUpsell1Price }
            cartTotal={ cartTotal }
            setCartTotal={ setCartTotal }
          />
        </div>
      </div>
      <div className='desktop-backdrop'></div>
    </Main>
  )
}

export default Cart