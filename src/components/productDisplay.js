import React from 'react';
import ProductDisplayGallery from './productDisplay/productDisplayGallery';
import SizeSelect from './productDisplay/sizeSelect';
import '../css/bootstrap-grid.css'
import '../scss/product-display.scss'

function ProductDisplay(props) {
  const p = props.page;

  let wrap = false;
  if (p.colorSelection) {
    if (p.qtySelection || p.catIds.length > 1) wrap = true;
  }

  return (
    <main data-active-type='none' data-active-color='none' data-active-size='none'>	
      <div class='product-display'>  
        <div class='container-fluid'>
          <div class='row'>
            <ProductDisplayGallery page={ props.page } />
            <div class='product col-xs-12 col-sm-6'>
              <div class='row'>
                <div class='product-description col-xs-12'>
                  <div class='row'>
                    <div class='col-xs-12'>
                      <h1 data-type={ p.defaultProductType }>{ p.heading }</h1>
                      { p.comboPage &&
                        <>
                          { p.comboProduct.map(c =>
                            <>
                              { c.toggleTitle &&
                                <h1 style={{ display: 'none' }} data-type={ c.comboProductType }>{ c.comboProductTitle }</h1>
                              }
                            </>
                          )}
                        </>
                      }                  
                      {/* {{ _blocks.ratings(p) }} */}
                      <p class='subheading'>{ p.subheading }</p>
                    </div>
                  </div>
                  
                  <div class='row'>
                    <div class='product-selection col-xs-12' 
                      data-order='{{ state.displayOrder }}' 
                      data-wrap={ wrap }
                      data-comparison-accordion={ p.comboProductAccordion }
                      data-comparison-accordion-active='false'
                    >
                      <SizeSelect page={ props.page } />
                      {/* {%- if p.colorSelection -%}
                        {{ _blocks.colorSelect(p) }}
                      {%- endif -%}

                      {%- if p.qtySelection -%}
                        {{ _blocks.qtySelect(p) }}
                      {%- endif -%}

                      {%- if p.comboPage -%}
                        {{ _blocks.typeSelect(p) }}
                      {%- endif -%} */} */}
                    </div>                
                  
                    {/* {{- _blocks.tooltips(p) -}}                
                    {{- _blocks.financing(p, discountActual) -}}

                    {% if p.upsell %}
                      {{- _blocks.upsells(p) -}}
                    {% endif %} */}
        
                    <div class='col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 add-to-cart'>
                      <button class='btn { p.addToCartButtonClass }' id='btn-addtocart' role='button'>
                        Add <span style={{ display: 'none' }} data-quantity='2'></span> to Cart
                      </button>
                    </div>
                    { p.readyToShipMessage &&
                      <div class='ready-to-ship col-xs-12'>
                        <p><span class='bullet'><span></span></span> Ready to Ship | Free No-Contact Delivery</p>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
            {/* {{- _blocks.richtext(p) -}} */}
          </div>
        </div>

        <div class='cart-contents'>
          <ul></ul>
        </div>

        {/* {% block productDisplayContent %}
        {% endblock %} */}
      </div>

      {/* {% block content %}
        <p>Missing content block</p>
      {% endblock %} */}

    </main>
  )
}

export default ProductDisplay;