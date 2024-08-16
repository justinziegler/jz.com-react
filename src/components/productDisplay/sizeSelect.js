import React, { useState } from 'react';
import { getUpsellSize } from '../utils/getUpsellSize'
import Dimensions from "./dimensions";

function SizeSelect(props) {
  const p = props.p;

  const handleSize = (e) => {
    let outofstock = e.target.dataset.outofstock === 'true';
    if (!outofstock) {
      props.setSize(e.target.dataset.size)
      props.setSizeName(e.target.dataset.sizename)
      props.setSku(`${ props.prefix }-${ props.type }-${ props.color }-${ e.target.dataset.size }`);
      props.setPrice(Number(e.target.dataset.price))
      if (p.upsells !== undefined) {
        const size0 = getUpsellSize(e.target.dataset.size, props.upsell0CatSizes)
        props.setUpsell0Size(size0)

        const size1 = getUpsellSize(e.target.dataset.size, props.upsell1CatSizes)
        props.setUpsell1Size(size1)
      }
    }
  }

  let additionalClass = '';
  if (p.colorSelection) additionalClass = 'product-color'
  
  return (
    <React.Fragment key='size-select'>
      <div className='product-details row' >
        { p.showSizeGuide ?
          <React.Fragment key='product-details'>
            { p.productDimensions ?
              <div className='dimensions left-col col-xs-8'  key='product-details01'>
                <p><strong>Dimensions: </strong>
                  <Dimensions p={ props.p } sku={ props.sku } setSku={ props.setSku } />
                </p>
              </div>
              :
              <div className='delivery-window left-col col-xs-8' key='product-details02'>
                { p.deliveryWindowText }
              </div>
            }
            <div className='size-guide right-col col-xs-4' key='product-details03'>
              <p><a data-toggle='modal' role='button' tabIndex='0' 
              // save for later
                // {% if sizeGuide.mattressModal %}
                //   data-target='#mattress-size-guide-modal'
                // {% else %}
                //   data-target='#size-guide-modal'
                // {% endif %}
                href='#'>Size Guide</a></p>
            </div>
          </React.Fragment>
        :
          <div className="delivery-window left-col col-xs-12" key='product-details04'>
            { p.deliveryWindowText }
          </div>
        }
      </div>	

      <div className='size-select grid clearfix' data-long-title={ p.longTitle }>
        {
          [...Array(p.maxQty).keys()].map(key => 
            <React.Fragment key='size-select-grid'>
              {
                p.skus.map((item, index) =>
                  <button data-sku={ item.sku }
                    data-name={ item.name }
                    data-type={ item.type }
                    data-color={ item.color }
                    data-color-name={ item.colorName }
                    data-color-selection={ p.colorSelection }
                    data-size={ item.size }
                    data-sizename={ item.sizeName }
                    data-product-cat-sizes={ p.catSizes }
                    data-price={ item.salePrice * (key + 1) }
                    data-outofstock={ item.outOfStock }
                    data-quantity={ key + 1 }
                    data-bundle={ p.bundle }
                    data-discount={ item.discount } 
                    className={ additionalClass } 
                    role={ item.outOfStock ? 'none' : 'button' } 
                    tabIndex={ item.outOfStock ? -1 : 0 }
                    onClick={ handleSize }
                    data-active={ item.type === props.type && item.color === props.color && item.size === props.size }
                    data-visible={
                      item.type === props.type && item.color === props.color
                    }
                    key={ `sizeselect-${ index }`}
                  > 
                    <div className='selected-item'>
                      { item.sizeName }
                    </div>
                    <div className='selected-price'>
                      <span>
                        <span className='sr-only'>Now Priced at</span>
                        ${ item.salePrice * (key + 1) }
                      </span>
                      { item.discount !== 0 &&
                        <>
                          &nbsp;
                          <span className='original-price'>
                            <span className='sr-only'>Originally Priced at</span>
                            ${ item.price * (key + 1)  }
                          </span>
                        </>
                      }
                    </div>	
                  </button>
                )
              }
            </React.Fragment>
          )
        }
      </div>
      <div className='clearfix'></div>
      </React.Fragment>
  )
}

export default SizeSelect;