import Dimensions from "./dimensions";

function SizeSelect(props) {
  const p = props.page;
  let additionalClass = '';
  if (p.colorSelection) additionalClass = 'product-color'
  let Items = [];
  for (let i = 1; i <= p.maxQty; i++) {
    p.skus.forEach((item, index) => {
      let displayRule = 'none'
      if ((item.type === p.defaultProductType) && (item.color === p.defaultColor) || (!p.colorSelection)) {
        displayRule = 'list-item'
      }
      Items.push(
        <button data-sku={ item.sku }
          data-name={ item.name }
          data-type={ item.type }
          data-color={ item.color }
          data-color-name={ item.colorName }
          data-color-selection={ p.colorSelection }
          data-size={ item.size }
          data-size-name={ item.sizeName }
          data-product-cat-sizes={ p.catSizes }
          data-price={ item.salePrice * i }
          data-outofstock={ item.outOfStock }
          data-quantity={ i }
          data-bundle={ p.bundle }
          data-discount={ item.discount } 
          className={ additionalClass } 
          role={ item.outOfStock ? 'none' : 'button' } 
          tabIndex={ item.outOfStock ? -1 : 0 }
          onClick={ props.handleSize }
          data-active={ item.sku === props.sku }
          data-visible={
            item.color === props.color && item.type === props.activeType
          }
          key={ `sizeselect-${ index }`}
          // style={{ display: displayRule }}
        > 
          <div className='selected-item'>
            { item.sizeName }
          </div>
          <div className='selected-price'>
            { item.sku }<br />
            <span>
              <span className='sr-only'>Now Priced at</span>
              ${ item.salePrice * i }
            </span>
            { item.discount !== 0 &&
              <>
                &nbsp;
                <span className='original-price'>
                  <span className='sr-only'>Originally Priced at</span>
                  ${ item.price * i  }
                </span>
              </>
            }
          </div>	
        </button>
      )
    });
    
  }
  return (
    <>
      <div className='product-details row'>
        { p.showSizeGuide ?
          <>
            { p.productDimensions ?
              <div className='dimensions left-col col-xs-8'>
                <p><strong>Dimensions: </strong>
                  <Dimensions page={ props.page } sku={ props.sku } setSku={ props.setSku } />
                </p>
              </div>
              :
              <div className='delivery-window left-col col-xs-8'>
                <p>{ p.deliveryWindowText }</p>
              </div>
            }
            <div className='size-guide right-col col-xs-4'>
              <p><a data-toggle='modal' role='button' tabIndex='0' 
              // save for later
                // {% if sizeGuide.mattressModal %}
                //   data-target='#mattress-size-guide-modal'
                // {% else %}
                //   data-target='#size-guide-modal'
                // {% endif %}
                href='#'>Size Guide</a></p>
            </div>
          </>
        :
          <div className="delivery-window left-col col-xs-12">
            <p>{ p.deliveryWindowText }</p>
          </div>
        }
      </div>	

      <div className='size-select grid clearfix' data-long-title={ p.longTitle }>
        {/* { Items } */}
        {
          [...Array(p.maxQty).keys()].map(key => 
            <>
              {
                p.skus.map((item, index) =>
                  <button data-sku={ item.sku }
                    data-name={ item.name }
                    data-type={ item.type }
                    data-color={ item.color }
                    data-color-name={ item.colorName }
                    data-color-selection={ p.colorSelection }
                    data-size={ item.size }
                    data-size-name={ item.sizeName }
                    data-product-cat-sizes={ p.catSizes }
                    data-price={ item.salePrice * (key + 1) }
                    data-outofstock={ item.outOfStock }
                    data-quantity={ key + 1 }
                    data-bundle={ p.bundle }
                    data-discount={ item.discount } 
                    className={ additionalClass } 
                    role={ item.outOfStock ? 'none' : 'button' } 
                    tabIndex={ item.outOfStock ? -1 : 0 }
                    onClick={ props.handleSize }
                    data-active={ item.type === props.activeType && item.color === props.activeColor && item.size === props.activeSize }
                    data-visible={
                      item.type === props.activeType && item.color === props.activeColor
                    }
                    key={ `sizeselect-${ index }`}
                    // style={{ display: displayRule }}
                  > 
                    <div className='selected-item'>
                      { item.sizeName }
                    </div>
                    <div className='selected-price'>
                      { item.sku }<br />
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
            </>
          )
        }
      </div>
      <div className='clearfix'></div>

    </>
  )
}

export default SizeSelect;