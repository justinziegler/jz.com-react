import React, { useState } from 'react';

function CartUpsell(props) {
  const [productName, setProductName] = useState('')
  const [colorName, setColorName] = useState('')
  const [sizeName, setSizeName] = useState('')
  const p = props.p
  const u = p.upsells[props.index]
  const skus = u.skus
  React.useEffect(()=> {
    skus.forEach(item => {
      if (item.sku === props.sku) {
        setProductName(item.name)
        setColorName(item.colorName)
        setSizeName(item.sizeName)
        props.setPrice(item.salePrice)
      }
    })
  }, [props.sku]);
  if (props.active) {
    return (
      <li>{ sizeName } { productName } &ndash; { colorName }</li>
    )
  }
}

export default CartUpsell