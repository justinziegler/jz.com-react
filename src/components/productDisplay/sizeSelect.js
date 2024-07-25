function SizeSelect(props) {
  const p = props.page;
  let additionalClass = '';
  if (p.colorSelection) additionalClass = 'product-color'
  let Items = [];
  for (let i = 1; i <= p.maxQty; i++) {
    p.skus.forEach((item, index) => {
      let displayRule = 'none'
      console.log('item.type', item.type)
      console.log('item.defaultProductType', item.defaultProductType)
      if ((item.type === p.defaultProductType) && (item.color === p.defaultColor) || (!p.colorSelection)) {
        displayRule = 'list-item'
      }
      Items.push(
        <li data-sku={ item.sku }
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
          onClick={ props.selectSize }
          data-active={ index === 0 }
          key={ `sizeselect-${ index }`}
          style={{ display: displayRule }}
        > 
          <div className='selected-item'>
            { item.sizeName }
          </div>
          <div className='selected-price'>
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
        </li>
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
                  { p.skus.map(item =>
                    <span data-sku={ item.sku } style={{ display: 'none' }}>
                      { item.w } x { item.l } 
                      { item.h !== undefined && 
                        <>
                          x { item.h }
                        </>
                      }
                    </span>
                  )}
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

      <ul className='size-select grid clearfix' data-long-title={ p.longTitle }>
        { Items }
      </ul>
      <div className='clearfix'></div>
    </>
  )
}

export default SizeSelect;