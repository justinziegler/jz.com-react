import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { getUpsellSize } from '../utils/getUpsellSize'

function Upsells(props) {
  const p = props.page
  const upsells = p.upsells
  const skus = upsells.skus
  let singleUpsell = true
  let additionalClass = 'single'
  if (upsells.length > 1) {
    singleUpsell = false
    additionalClass = 'multiple'
  }
  console.log('skus', upsells)

  

  return (
    <div className='col-xs-12'>
      <div className={ `upsell-list ${ additionalClass }`}>
        { p.upsellListTitle !== '' &&
          <h2><span>{ p.upsellListTitle }</span></h2>
        }
        { p.upsellListSubtitle !== '' &&
          <p>{ p.upsellListSubtitle }</p>
        }
        <ul className='upsells'>
          { upsells.map((u, index) =>
            
            <li className='item' 
              data-type={ 'xType' } 
              data-product-cat-sizes={ u.catSizes }
              data-match-color={ u.matchColor } 
              data-color-selection={ u.colorSelection }
              data-slug={ u.slug }
              data-default-state={ true }
              // data-active={ props.activeUpsell1 }
              
              key={ `upsell${ index }` }
            >
              <ul className='inventory'>
                { u.skus.map(item =>
                  <li data-sku={ item.sku }
                    data-name={ item.name }
                    data-type={ item.type }
                    data-color={ item.color }
                    data-color-name={ item.colorName }
                    data-size={ item.size }
                    data-size-name={ item.sizeName }
                    data-active={ index === 0 ? 
                                  props.activeUpsellSku0 === item.sku :
                                  props.activeUpsellSku1 === item.sku
                                }
                    data-out-of-stock={ item.outOfStock }
                    data-price={ item.salePrice }
                    onClick={ props.handleActiveUpsell }
                    role='button' tabIndex='0'
                    aria-label={ u.name }
                    data-visible={
                      item.sku === props.cart.upsells[index].sku
                    }
                    data-index={ index }
                    aria-controls={ `options` }
                    aria-expanded={ props.upsellActive }
                    key={ `upsell${ item.sku }` }
                    // style={{ display: 'none' }}
                  >
                    &nbsp;
                    { singleUpsell ?				
                      <span className='price'>
                        { u.subtitle !== '' ?
                          <>
                            { u.subtitle }
                          </>
                        :
                          <>
                            { item.colorName }
                          </>
                        } &bull; 
                        { item.discount !== 0 ?
                          <>
                            { item.salePrice }
                            <span className='original price'>${ item.price }</span>
                          </>
                        :
                          <>
                            ${ item.price }
                          </>
                        }
                      </span>
                    :
                      <>
                        { item.discount !== 0 &&
                          <span className='original price'>${ item.price }</span>
                        }
                        <span className='price'>
                          ${ item.salePrice }
                        </span>
                      </>
                    }

                    <label className={ u.longtitle ? 'longtitle' : undefined }>
                      { singleUpsell ?
                        <span>{ u.name }</span>
                      :
                        <a data-toggle='modal' data-target='#upsell-modal-{{ xType }}' role='button' tabIndex='0' href='#'>
                          <span>{ u.name }</span>
                        </a>
                      }
                    </label>
                  </li>
                )}										
              </ul>
              {/* Color Selection */}
              { u.colorSelection &&
                // <Collapse in={ props.upsellActiveSku0 }>
                  <div className='options' data-visible={ index === 0 ? props.showOptions0 : props.showOptions1 }>
                    <ul className='color-select'>
                      { u.colorDisplayOrder.map((c, index) =>
                        <li data-color={ c.color } role='button' tabIndex='0' 
                          className='color' 
                          data-active={ index === 0}
                          key={ `color-select${ u.catId }${ c.color }${ index }` }
                        >
                          { props.upsellActiveSku0 } asdf
                        </li>
                      )}
                    </ul>

                    { u.catIds.length > 1 &&
                      <ul className='type-select'>
                        { u.catIds.map(catId =>
                          <React.Fragment key={ `type-select-${catId}` }>
                            { u.skus.map(item =>
                              <li data-sku={ item.sku }
                                data-type={ item.type }
                                data-color={ item.color }
                                data-size={ item.sku.slice(9) }
                                data-active={ catId == u.defaultCatId && item.color == u.defaultColor } 
                                role='button' 
                                tabIndex='0'
                                key={ `type-select-${ item.sku }${ index }` }
                                style={{ display: 'none' }}
                              >
                              <div className='selected-item'>
                                { item.shortName }
                              </div>
                              <div className='selected-price'>
                                  <span className='price'>
                                    ${ item.salePrice }
                                  </span>
                                  { item.discount !== 0 &&
                                    <span className='original-price'> ${ item.price }</span>
                                  }
                              </div>
                            </li>
                            )}
                          </React.Fragment>
                        )}
                      </ul>
                    }
                  </div>
                // </Collapse>
              }
            </li>		
          )}
        </ul>
      </div>
    </div>
  )
}

export default Upsells