import React, { useState } from "react"
import Callouts from './callouts'

function OrderSummary(props) {
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  React.useEffect(()=> {
    setMonthlyPayment(Math.round(props.cartTotal / 18))
  }, [props.cartTotal]);

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
                    APR as low as 0%
                  </p>
                </div>
              </div>

              <div className='row'>
                <div className='checkout col-xs-12'>
                  <p className='delivery'>Free Shipping, No-Contact Delivery</p>
                  <a href='./' className='btn btn-checkout toggle-description'><span></span>Checkout</a>
                </div>
              </div>
            </div>
          </div>
          
          <Callouts/>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary