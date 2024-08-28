
function CartItem(props) {
  const item = props.item
  console.log('upsell', item)
  return (
    <li data-sku={ item.sku }
        data-type={ item.type }
        data-color={ item.color }
        data-cart-item={ props.itemType === 'cartItem' }
        data-upsell={ props.itemType === 'upsell' }
        data-visible={ props.itemType === 'cartItem' }
    >
      <div className='product row'>
        <div className='product-image col-xs-3'>
          <div className='lazyload' role='img' aria-label={ `Image: ${ item.name }` }>
          </div>
        </div>
        <div className='product-details col-xs-9'>
          <div className='row'>
            <div className='details col-xs-9'>
              { props.itemType === 'upsell' ?
                <>
                  { item.skus.map(u =>
                    <>
                      <h3 className='current-size' data-sku={ u.sku } data-active='false'>
                        { item.name }
                      </h3>
                      <h4 className='current-size' data-sku={ u.sku } data-active='false'>
                        { u.sizeName }
                      </h4>
                    </>
                  )}
                </>
                :
                <>
                  <h3>{ item.name }</h3>
                  <h4>
                    { item.sizeName } { item.colorSelection && <> &ndash; { item.colorName } </> }
                  </h4>
                </>
              }
            </div>
            <div className='pricing col-xs-3'>
              { props.itemType === 'upsell' ?
                <>
                  { item.skus.map(u =>
                    <div className='item' data-sku={ u.sku } 
                      data-type={ u.type }
                      data-color={ u.color }
                      data-price={ u.price }
                      data-discount='0'
                      data-active={ false }
                      data-upsell={ true }
                      data-quantity='1'
                    >
                      <h4 className='price'>
                        { u.price }
                      </h4>
                    </div>
                  )}
                </>
              :
                <div className='item' data-sku={ item.sku } 
                  data-type={ item.type }
                  data-color={ item.color }
                  data-price={ item.salePrice }
                  data-discount={ item.discount }
                  data-active={ true }
                  data-upsell={ false }
                  data-quantity={ 1 }
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
              }
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-9'>
              <div className='quantity'>
                <button 
                  className='qty minus disabled' 
                  aria-label='Decrease Quantity' 
                  tabIndex='0'
                >-</button>
                <div className='qty-display' data-quantity={ item.quantity }>
                </div>
                <button className='qty plus' aria-label='Increase Quantity' tabIndex='0'>+</button>
              </div>
            </div>
          </div>
          <a className='remove' role='button' aria-label='Remove Item' tabIndex='0'></a>
        </div>
      </div>
    </li>
  )
}

export default CartItem