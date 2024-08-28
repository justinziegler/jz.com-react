import React, { useState } from 'react';
import lazySizes from 'lazysizes';
import { getProductSkus } from '../../components/utils/getProductSkus';
import { getUpsells } from './content/getUpsells';
import Main from '../../components/pageSections/main';
import CartItems from './content/cartItems';
import Upsells from './content/upsells'
import '../../scss/cart.scss'
import '../../scss/cart-images.scss'

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
  const [cartItems, setCartItems] = useState(cart)
  console.log('cartItems', cartItems)
  const upsells = getUpsells(cart);
  // const upsells = u.result[0];
  cartItems.push(upsells[0])
  console.log('cartItems', cartItems)
  console.log('cart', cart)
  console.log('upsells', upsells)
  return (
    <Main page={ page }>
      <div className='container'>
        <div className='row'>
          {/* Left column on tablet/desktop  */}
          <div className='cart col-xs-12 col-sm-7 col-md-6'>
            <div className='row'>
              <div className='cart-summary col-xs-12'>
                <div className='cart-head row'>
                  <div className='discount-message col-xs-12' style={{ display: 'none' }}>
                    <p>Congratulations, You're <span className='alert'>Saving <span className='discount'></span></span></p>
                  </div>				 
                  <div className='heading col-xs-12'>
                    <h2><span>Cart Summary</span></h2>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xs-12'>								
                    <ul>
                      <CartItems cart={ cart } itemType={ 'cartItem' } />

                      {/* Potential Upsells */}
                      <CartItems cart={ upsells } itemType={ 'upsell' } />
                     
                    </ul>
                    <div className='removed-items'>
                      {/* {% for item in cart.items %}
                        {%- set type = item.sku.slice(3, -6) -%}
                        <p data-sku='{{ item.sku }}' style='display: none;'>
                          <span>{{ item.name }}</span> was removed. 
                          <a className='cancel-remove' data-sku='{{ item.sku }}' title='Cancel' role='button' tabindex='0'>Undo</a>
                        </p>
                      {% endfor %} */}
                    </div>
                  </div>
                </div>
              </div>					
      
              <div className='upsells col-xs-12'>
                <h2><span>Frequently Bought Together</span></h2>
                <ul>
                    <Upsells cart={ cart } upsells={ upsells } />
                </ul>
              </div>
            </div>
          </div>
      
          {/* Right column in tablet/desktop  */}
          <div className='order-summary col-xs-12 col-sm-5 col-md-offset-1'>
            <div className='row'>
              <div className='col-xs-12 col-md-10 col-md-offset-2'>
                <div className='row'>
                  <div className='summary col-xs-12'>
                    <div className='col-xs-12'>
                      <h6 className='my-order'>My Order</h6>
                    </div>
                    <div className='options row'>
                      <div className='summary-total col-xs-6'>
                        <h5>Subtotal</h5>
                        <h6 className='total js-subtotal-output'></h6>
                      </div>
                      <div className='summary-monthly-payment col-xs-6'>
                        <h5>As Low As</h5>
                        <h6 className='monthly-payment'></h6>
                        <p className='small'>
                          Choose Affirm at Checkout<br />
                          APR as low as 0%<br />
                          <a data-toggle='modal' data-target='#financing-modal' role='button' tabindex='0' href=''>Learn More</a>
                        </p>
                      </div>
                    </div>
      
                    <div className='row'>
                      <div className='checkout col-xs-12'>
                        <p className='delivery'>Free Shipping, No-Contact Delivery</p>
                        <a href='#' className='btn btn-checkout toggle-description'><span></span>Checkout</a>
                      </div>
                    </div>
                  </div>
                  
                </div>
      
                <div className='apple-pay-wrapper col-xs-12' style={{ display: 'none' }}>
                  <h4><span>Or express checkout</span></h4>
                  <div className='apple-pay-button apple-pay-button-black'>
                    Pay with <span></span>
                  </div>
                </div>
                
                <div className='row'>
                  <div className='callouts col-xs-12'>
                    <div className='row'>
                      <div className='callout col-xs-12'>
                        <div className='row'>
                          <div className='badge warranty col-xs-4' role='img' aria-label='Image: Lifetime Warranty'></div>
                          <div className='tagline col-xs-8'>
                            <h4>Lifetime Warranty</h4>
                            <p>Guaranteed restful sleep</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className='callout col-xs-12'>
                        <div className='row'>
                          <div className='badge trial col-xs-4' role='img' aria-label='Image: 365 Night Trial'></div>
                          <div className='tagline col-xs-8'>
                            <h4>365 Night Stress-Free Trial</h4>
                            <p>Hassle-Free Returns</p>
                          </div>
                        </div>
                      </div>
      
                      <div className='callout col-xs-12'>
                        <div className='row'>
                          <div className='badge recommended col-xs-4' role='img' aria-label='Image: Best Buy and Recommended'></div>
                          <div className='tagline col-xs-8'>
                            <h4>Independently Rated</h4>
                            <p>BEST BUY and RECOMMENDED</p>
                          </div>
                        </div>
                      </div>
      
                    </div>	
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Cart;