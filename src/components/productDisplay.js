import React, { useState } from 'react';
import ProductDisplayGallery from './productDisplay/productDisplayGallery';
import Ratings from './productDisplay/ratings';
import SizeSelect from './productDisplay/sizeSelect';
import ColorSelect from './productDisplay/colorSelect';
import QuantitySelect from './productDisplay/quantitySelect';
import TypeSelect from './productDisplay/typeSelect';
import RichText from './productDisplay/richText';
import Financing from './productDisplay/financing';
import '../css/bootstrap-grid.css'
import '../scss/product-display.scss'

function ProductDisplay(props) {
  const p = props.page;
  const skus = p.skus

  let wrap = false;
  console.log('p.colorSelection', p.colorSelection)
  if (p.colorSelection) {
    if (p.qtySelection || p.catIds.length > 1) wrap = true;
  }


  let selectedProduct = {
    sku: 'empty',
    name: '',
    type: '',
    size: '',
    price: '',
    colorName: ''
  }
  
  let defaultSku = '';
  skus.forEach(item => {
    if (!item.outofstock && defaultSku == '') {
      defaultSku = item.sku
      console.log('defaultSku', defaultSku)
    }
  })
  
  const [sku, setSku] = useState(defaultSku);
  const selectSize = (e) => {
    e.preventDefault();
    let oos = e.target.dataset.outofstock === 'true';
    console.log('oos', oos)
    if (!oos) {
      console.log('hello')
      const sizes = document.querySelectorAll('.size-select li');
      sizes.forEach(size => {
        size.setAttribute('data-active', false);
      })
      e.target.setAttribute('data-active', true);

      setSku(e.target.dataset.sku);

      selectedProduct.sku = e.target.dataset.sku;
      selectedProduct.name = e.target.dataset.name;
      selectedProduct.type = e.target.dataset.type;
      selectedProduct.size = e.target.dataset.size;
      selectedProduct.price = e.target.dataset.price;
      selectedProduct.colorName = e.target.dataset.colorName;
      console.log('selectedProduct', selectedProduct)
    }
  }

  console.log('selectedProduct2', selectedProduct)

  // page load
  // sizes.forEach(size => {
  //   console.log('selectedProduct1', selectedProduct.sku)
  //   if ((size.dataset.active)) {
      // selectedProduct.sku = size.dataset.sku;
      // selectedProduct.name = size.dataset.name;
      // selectedProduct.type = size.dataset.type;
      // selectedProduct.size = size.dataset.size;
      // selectedProduct.price = size.dataset.price;
      // selectedProduct.colorName = size.dataset.colorName;
  //     size.setAttribute('data-active', true);
  //     console.log('selectedProduct3', selectedProduct)
  //   }
  // })
  // function loadPage() {
    // skus.forEach(item => {
    //   if ((!item.outofstock) && (selectedProduct.sku === 'empty')) {
    //     // selectedProduct.sku = item.sku;
    //     // selectedProduct.name = item.name;
    //     // selectedProduct.type = item.type;
    //     // selectedProduct.size = item.size;
    //     // selectedProduct.price = item.price;
    //     // selectedProduct.colorName = item.colorName;
    //     setSku()
    //   }
    // })
  //   const dimensions = document.querySelectorAll('.dimensions span');
  //   dimensions.forEach(d => {
  //     d.setAttribute('style', 'display: none');
  //   })
  //   const selectedDimensions = document.querySelector(`.dimensions span[data-sku=${ selectedProduct.sku }]`);
  //   // selectedDimensions.setAttribute('style', 'display: inline');
  // }
  // loadPage();
  // console.log('skus', skus)
  // console.log('selectedProduct3', selectedProduct.sku)

  return (
    <main data-active-type='none' data-active-color='none' data-active-size='none'>	
      <div className='product-display'>  
        <div className='container-fluid'>
          <div className='row'>
            <ProductDisplayGallery page={ props.page } />
            <div className='product col-xs-12 col-sm-6'>
              <div className='row'>
                <div className='product-description col-xs-12'>
                  <div className='row'>
                    <div className='col-xs-12'>
                      <h1 data-type={ p.defaultProductType } key='heading-0'>{ p.heading }</h1>
                      <Ratings page={ props.page } />
                      <p className='subheading'>{ p.subheading }</p>
                    </div>
                  </div>
                  
                  <div className='row'>
                    <div className='product-selection col-xs-12' 
                      data-order='{{ state.displayOrder }}' 
                      data-wrap={ wrap }
                      data-comparison-accordion={ p.comboProductAccordion }
                      data-comparison-accordion-active={ false }
                    >
                      <SizeSelect page={ props.page } selectSize={ selectSize } />

                      { p.colorSelection &&
                        <ColorSelect page={ props.page } />
                      }

                      { p.qtySelection &&
                        <QuantitySelect page={ props.page } />
                      }

                      { p.comboPage &&
                        <TypeSelect page={ props.page } />
                      } 
                    </div>                
                  
                    {/* {{- _blocks.tooltips(p) -}}  */}              
                    <Financing page={ props.page } />

                    {/* {% if p.upsell %}
                      {{- _blocks.upsells(p) -}}
                    {% endif %} */}
        
                    <div className='col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 add-to-cart'>
                      <button className='btn { p.addToCartButtonClass }' id='btn-addtocart' role='button'>
                        Add <span style={{ display: 'none' }} data-quantity='2'></span> to Cart
                      </button>
                    </div>
                    { p.readyToShipMessage &&
                      <div className='ready-to-ship col-xs-12'>
                        <p><span className='bullet'><span></span></span> Ready to Ship | Free No-Contact Delivery</p>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
            <RichText page={ props.page } />
          </div>
        </div>

        <div className='cart-contents'>
          <ul></ul>
        </div>
      </div>

      {/* {% block content %}
        <p>Missing content block</p>
      {% endblock %} */}

    </main>
  )
}

export default ProductDisplay;