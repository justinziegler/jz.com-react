function SizeSelect(props) {
  const p = props.page;
  return (
    <>
      <div className='product-details row'>
        { p.showSizeGuide ?
          <>
            { p.productDimensions ?
              <div className='dimensions left-col col-xs-8'>
                <p><strong>Dimensions:</strong>
                  { p.skus.map(item =>
                    <span data-sku={ item.sku } style={{ display: 'none' }}>
                      { item.w } x { item.l } 
                      { item.h !== undefined && 
                        <>
                          `x ${ item.h }`
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
          <div class="delivery-window left-col col-xs-12">
            <p>{ p.deliveryWindowText }</p>
          </div>
        }
      </div>	

      <ul className='size-select grid clearfix' data-long-title={ p.longTitle }>
        { p.skus.map(item => {
          <>
            
          </>
        })}

      </ul>

    {/* <ul className='size-select grid {% if p.longTitle %}long-title{% endif %} clearfix'>
      {% for item in p.skus %}
        {% for i in range(0, p.maxQty) %}
          <li 
            data-sku='{{ item.sku }}'
            data-name='{{ item.name }}'
            data-type='{{ item.type }}'
            data-color='{{ item.color }}'
            data-color-name='{{ item.colorName }}'
            data-color-selection='{{ p.colorSelection }}'
            data-size='{{ item.size }}'
            data-size-name='{{ item.sizeName }}'
            data-product-cat-sizes='{{ p.catSizes }}'
            data-price='{{ item.salePrice * (i + 1) }}' 
            data-out-of-stock='{{ item.outOfStock }}'
            data-quantity='{{ i + 1 }}' 
            data-bundle='{{ p.bundle }}'
            data-discount='{{ item.discount }}'
            className='{% if p.colorSelection %}product-color{% endif %}'
            {% if not item.outOfStock %} 
              role='button' tabindex='0' 
            {% endif %}
            style='display: none;'
            >
            {% set originalPrice = item.price %}
            {% set salePrice = item.salePrice %}
            {%- if p.bundle -%}
              {% for b in item.bundleSkus %}
                <input type='hidden'																		 
                data-sku='{{ b.sku }}' 
                data-type='{{ b.type }}' 
                data-color='{{ b.color }}' 
                data-size='{{ b.size }}' 
                data-qty='{{ b.quantity }}' 
                data-price='{{ b.price }}'>
              {% endfor %}
            {% endif %}
                
            {# end bundle #}
          
            <div className='selected-item'>
              {{- item.sizeName -}}
            </div>

            <div className='selected-price'>
              <span>
                <span className='sr-only'>Now Priced at</span>
                ${{ salePrice * (i + 1) }}
              </span>
              {% if item.discount !== 0 %}
                <span className='original-price'>
                  <span className='sr-only'>Originally Priced at</span>
                  ${{ originalPrice * (i + 1) }}
                </span>
              {% endif %}
            </div>															
          </li>
        {% endfor %}
      {% endfor %}
    </ul>` */}
    <div className='clearfix'></div>
    </>
  )
}

export default SizeSelect;