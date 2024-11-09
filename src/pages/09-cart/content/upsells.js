import React, { useState } from 'react'
import Upsell from './upsell'
import Collapse from 'react-bootstrap/Collapse'

function Upsells(props) {
  const [showHeading, setShowHeading] = useState(true)
  React.useEffect(()=> {
    if (props.upsell0Active && props.upsell1Active) {
      setShowHeading(false)
    } else {
      setShowHeading(true)
    }
  }, [props.upsell0Active, props.upsell1Active]);

  const Items = Array.from({ length : props.upsells.length }).map((_, index) => (
    <Upsell 
      key=            { index } 
      u=              { props.upsells[index] } 
      cart=           { props.cart } 
      index=          { index }
      upsellActive=   { index === 0 ? props.upsell0Active : props.upsell1Active }
      setUpsellActive={ index === 0 ? props.setUpsell0Active : props.setUpsell1Active }
      upsellSku=      { index === 0 ? props.upsell0Sku : props.upsell1Sku }
      setUpsellSku=   { index === 0 ? props.setUpsell0Sku : props.setUpsell1Sku }
      upsellPrice=    { index === 0 ? props.upsell0Price : props.upsell1Price }
      setUpsellPrice= { index === 0 ? props.setUpsell0Price : props.setUpsell1Price }
      cartTotal=      { props.cartTotal }
      setCartTotal=   { props.setCartTotal }
    />
  ))
  return (
    <div className='upsells col-xs-12'>
      <Collapse in={ showHeading }>
        <h2><span>Frequently Bought Together</span></h2>
      </Collapse>
      <ul>
        { Items }
      </ul>
    </div>

  )
}

export default Upsells