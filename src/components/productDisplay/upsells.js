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
              data-color-selection={ u.colorSelection }
              key={ `upsell${ index }` }
            >
              <ul className='inventory'>
                { u.skus.map(item =>
                  <li data-sku={ item.sku }
                    data-type={ item.type }
                    data-color={ item.color }
                    data-size={ item.size }
                    data-active={ 
                      index === 0 ? 
                      props.upsell0Active :
                      props.upsell1Active
                    }
                    data-out-of-stock={ item.outOfStock }
                    data-price={ item.salePrice }
                    onClick={ props.handleActiveUpsell }
                    role='button' tabIndex='0'
                    aria-label={ u.name }
                    data-visible={
                      index === 0 ? 
                      props.upsell0Sku === item.sku :
                      props.upsell1Sku === item.sku
                    }
                    data-index={ index }
                    aria-controls={ `options` }
                    aria-expanded={ 
                      index === 0 ? 
                      props.upsell0Active :
                      props.upsell1Active
                    }
                    key={ `upsell${ item.sku }` }
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
                <Collapse in={ index === 0 ? props.showOptions0 : props.showOptions1 }>
                  <div className='options' data-visible={ index === 0 ? props.showOptions0 : props.showOptions1 }>
                    <div className='color-select'>
                      { u.colorDisplayOrder.map(c =>
                        <button 
                          data-color={ c.color } 
                          data-colorname={ c.colorName } 
                          role='button' 
                          tabIndex='0' 
                          className='color' 
                          data-active={ 
                            index === 0 ?
                            c.color === props.upsell0Color :
                            c.color === props.upsell1Color
                          }
                          data-index={ index }
                          onClick={ props.handleUpsellColor }
                          key={ `color-select${ u.catId }${ c.color }${ index }` }
                        >
                        </button>
                      )}
                    </div>

                    { u.catIds.length > 1 &&
                      <div className='type-select'>
                        { u.catIds.map(catId =>
                          <React.Fragment key={ `type-select-${catId}` }>
                            { u.skus.map(item =>
                              item.catId === catId &&
                              <React.Fragment key={ `type-select-${item.sku}` }>
                                <button data-sku={ item.sku }
                                  data-name={ item.name }
                                  data-type={ item.type }
                                  data-color={ item.color }
                                  data-size={ item.sku.slice(9) }
                                  data-price={ item.salePrice }
                                  data-index={ index }
                                  data-active={ 
                                    index === 0 ?
                                      item.sku === props.upsell0Sku
                                    :
                                      item.sku === props.upsell1Sku
                                  } 
                                  role='button' 
                                  tabIndex='0'
                                  onClick={ props.handleUpsellType }
                                  key={ `type-select-${ item.sku }${ index }` }
                                  data-visible={
                                    index === 0 ?
                                      item.color === props.upsell0Color &&
                                      item.size === props.upsell0Size
                                    :
                                      item.color === props.upsell1Color && 
                                      item.size === props.upsell1Size
                                  }
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
                                </button>
                              </React.Fragment>
                            )}
                          </React.Fragment>
                        )}
                      </div>
                    }
                  </div>
                </Collapse>
              }
            </li>		
          )}
        </ul>
      </div>
    </div>
  )
}

export default Upsells