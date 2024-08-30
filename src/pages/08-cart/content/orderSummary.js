import React, { useState } from "react"

let initialMonthlyPayment = 0

function OrderSummary(props) {
  
  // let initialTotal = 0
  // if (initialTotal === 0) {
  //   props.cart.forEach(item => {
  //     initialTotal += item.salePrice
  //   })
  //   initialMonthlyPayment = Math.round(initialTotal / 18)
  // }
  // const [cartTotal, setCartTotal] = useState(initialTotal)
  const [monthlyPayment, setMonthlyPayment] = useState(initialMonthlyPayment)

  // React.useEffect(()=> {
  //   let total = cartTotal;
  //   if (props.upsell0Active) total += props.upsell0Price
  //   if (props.upsell1Active) total += props.upsell1Price
  //   const payment = Math.round(total / 18)
  //   if (total > 0) setMonthlyPayment(payment)
  //   setCartTotal(total)
  // }, [props.upsell0Active, props.upsell1Active, props.upsell0Sku, props.upsell1Sku]);

  return (
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
                  <h6 className='total'>
                    { props.cartTotal }
                  </h6>
                </div>
                <div className='summary-monthly-payment col-xs-6'>
                  <h5>As Low As</h5>
                  <h6 className='monthly-payment'>
                    { monthlyPayment }
                  </h6>
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
  )
}

export default OrderSummary