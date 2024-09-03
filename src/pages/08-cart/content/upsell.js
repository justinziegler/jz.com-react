import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'

function Upsell(props) {
  const u = props.u
  const dualSizes = (u.type == 'DV' || u.type == 'DD' || u.type == 'FL')

  let itemOk = false
  const size = u.sku.slice(9)
  let activeColor = u.color
  if (u.colorSelection) {
    activeColor = u.colors[0].id
  }

  let totalUpsellSizes = 6
  if (u.size === 'ST' || u.size === 'KC' && (u.type === 'BP' || u.type === 'CP' || u.type === 'OP')) {
    totalUpsellSizes = 2
  }
  if (u.size === 'TT' || u.size === 'FQ' || u.size === 'KC') totalUpsellSizes = 3

  const [showUpsells, setShowUpsells] = useState(false)

  const handleShowUpsells = (e) => {
    e.preventDefault()
    setShowUpsells(!showUpsells)
  }

  const handleUpsellActive = (e) => {
    e.preventDefault()
    props.setUpsellActive(true)
    props.setCartTotal(props.cartTotal + props.upsellPrice)
  }

  const selectSize = (e) => {
    e.preventDefault()
    props.setUpsellSku(e.target.dataset.sku)
    props.setUpsellPrice(Number(e.target.dataset.price))
    setShowUpsells(false)
  }

  return (
    <Collapse in={ !props.upsellActive }>

      <li data-add-on='false'
        data-type={ u.type }
        data-color={ u.color }
        data-active={ false }>
        <div className='row'>
          <div className='product-image col-xs-3'>
            <div 
              className='lazyload' 
              role='img' 
              aria-label={ `${ u.name } product image` }>
              <a data-toggle='modal' 
                href='./' 
                data-target={ `#modal-${ u.type }` } 
                role='button' 
                tabIndex='0' 
                aria-label={ `Image: ${ u.name }` }></a>
            </div>
          </div>
          <div className='product-details col-xs-9' data-type={ u.type }>
            <div className='row'>
              <div className='details col-xs-9'>
                <h3>
                  { u.name }
                </h3>
                { u.showStarRating &&
                  <div className='star-rating'>
                    <div className='star-gauge'>
                      <div 
                        className='star-average' 
                        style={{ width: `${ u.avgReviews * 20 }` }} 
                        aria-label={ `${ u.avgReviews } Star Average` }
                      >
                      </div>
                    </div>
                    <p>{ u.avgReviews }</p>
                  </div>
                }
              </div>
              <div className='pricing col-xs-3'>
                { u.skus.map(item =>
                  <div className='item'
                    data-sku={ item.sku }
                    data-type={ item.type }
                    data-color={ item.color }
                    data-price={ item.price }
                    data-out-of-stock={ item.outOfStock }
                    data-active={ item.sku === props.upsellSku }
                    key={ `pricing-${ item.sku }`}>
                    <h4 
                      className={ u.price > u.salePrice ? 'discounted price' : 'price'}
                    >
                      { item.price }
                    </h4>
                  </div>
                )}
              </div>
            </div>
            <div className='row'>
              <div className='subtitle col-xs-12'>
                <h4>{ u.subtitle }</h4>
              </div>
            </div>
            <div className='buttons row'>
              <div className='size-select col-xs-6'>
                <div className='dropdown'>
                  <button 
                    className='btn btn-sm btn-white dropdown-toggle' 
                    type='button' 
                    id={ `upsell-LU-${ u.type }-${ u.color }` }
                    data-toggle='dropdown' 
                    aria-haspopup='true' 
                    aria-expanded={ showUpsells } 
                    tabIndex='0'
                    onClick={ handleShowUpsells }
                  >
                    { u.skus.map(item =>
                      <div className='current-size' 
                        data-sku={ item.sku }
                        data-active={ item.sku === props.upsellSku }
                        data-color-selection={ u.colorSelection }
                        data-active-color={ activeColor }
                        data-longtitle={ dualSizes }
                        key={ `current-${ item.sku }`}
                      >
                        { item.sizeName }
                      </div>
                    )}
                  </button>
                  <Collapse in={ showUpsells }>
                    <ul 
                      className='dropdown-menu' 
                      aria-labelledby={ `upsell-XX-${ u.type }-${ u.color }` } 
                      data-color-selection={ u.colorSelection }
                    >
                      <li className='upsell-select'>
                        <ul>
                          { u.skus.map(item =>
                            <li className='upsell-item'
                              data-sku={ item.sku }
                              data-type={ item.type }
                              data-price={ item.price }
                              data-out-of-stock={ item.outOfStock }
                              data-upsell-sizes={ totalUpsellSizes }
                              data-active={ item.sku === props.upsellSku }
                              data-color-selection={ u.colorSelection }
                              data-color={ item.color }
                              style={ item.color !== activeColor ? { display: 'none' } : { display: 'block' } }
                              role='button' 
                              tabIndex='0'
                              onClick={ selectSize }
                              key={ `select-${ item.sku }`}
                            >
                              <h5>{ item.sizeName }</h5>
                              <p>${ item.price }</p>
                            </li>
                          )}
                        </ul>
                      </li>
                    </ul>
                  </Collapse>
                </div>
              </div>
              <div className='add-to-cart col-xs-6'>
                <a 
                  className='btn btn-sm btn-dark block' 
                  role='button' 
                  tabIndex='0'
                  onClick={ handleUpsellActive }
                >Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
        <div 
          className='upsell-overlay' 
          data-visible={ showUpsells } 
          onClick={ () => setShowUpsells(false) }
        ></div>
      </li>
    </Collapse>
  )
}

export default Upsell