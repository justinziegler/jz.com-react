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
  let defaultType = '' 
  let defaultTypeName = ''
  let defaultSize = '';
  let defaultColor = p.defaultColor;
  const [pageLoaded, setPageLoaded] = useState(false);

  function loadPage() {
    console.log('pageLoaded', pageLoaded)
    if (!pageLoaded) {
      skus.forEach(item => {
        if (!item.outofstock && defaultSku == '') {
          defaultType = p.defaultProductType
          defaultTypeName = item.name
          defaultSku = item.sku
          defaultSize = item.size
          console.log('defaultSku', defaultSku)
          console.log('defaultType', defaultType)
          console.log('defaultColor', p.defaultColor)
          console.log('defaultSize', defaultSize)
          console.log('!!!!!!!')
        }
      })
      setPageLoaded(true);
    }
  }
  loadPage();
  
  const [activeSku, setActiveSku] = useState(defaultSku);
  const [activeType, setActiveType] = useState(defaultType)
  const [activeTypeName, setActiveTypeName] = useState(defaultTypeName)
  const [activeColor, setActiveColor] = useState(p.defaultColor)
  const [activeColorName, setActiveColorName] = useState(p.defaultColorName)
  const [activeSize, setActiveSize] = useState(defaultSize)
  console.log('activeType', activeType)
  console.log('activeColor', activeColor)
  console.log('activeColorName', activeColorName)
  console.log('activeSize', activeSize)
  const prefix = 'XX'
  const handleSku = () => {
    setActiveSku(`${ prefix }-${ activeType }-${ activeColor }-${ activeSize }`);
    console.log('handlesku', activeSku)
  }
  const handleSize = (e) => {
    let outofstock = e.target.dataset.outofstock === 'true';
    if (!outofstock) {
      setActiveSize(e.target.dataset.size);
      setActiveSku(`${ prefix }-${ activeType }-${ activeColor }-${ e.target.dataset.size }`);
      console.log('handlesize: activeSize', activeSize)
      console.log('handlesize: activeSku', activeSku)
    }
  }
  const handleColor = (e) => {
    setActiveColor(e.target.dataset.color)
    setActiveColorName(e.target.dataset.colorName)
    console.log('activeColor', activeColor)
    handleSku();
  }
  const handleType = (e) => {
    // const utype = e.target.dataset.type
    setActiveType(e.target.dataset.type)
    setActiveTypeName(e.target.dataset.typename)
    console.log('e.target.dataset.type', e.target.dataset.type)
    console.log('activeType', activeType)
    console.log('activeTypeName', activeTypeName)
    handleSku();
  }



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
                      <SizeSelect 
                        page={ props.page } 
                        activeSku={ activeSku } 
                        setActiveSku={ setActiveSku } 
                        handleSku={ handleSku }
                        activeSize={ activeSize }
                        setActiveSize={ setActiveSize }
                        handleSize={ handleSize } 
                        activeType={ activeType }
                        activeColor={ activeColor }
                      />

                      { p.colorSelection &&
                        <ColorSelect 
                          page={ props.page } 
                          activeColor={ activeColor } 
                          activeColorName={ activeColorName } 
                          setActiveColor={ setActiveColor }
                          handleColor={ handleColor }
                        />
                      }

                      { p.qtySelection &&
                        <QuantitySelect page={ props.page } />
                      }

                      { p.comboPage &&
                        <TypeSelect 
                          page={ props.page } 
                          activeType={ activeType } 
                          setActiveType={ setActiveType }
                          activeTypeName={ activeTypeName } 
                          setActiveTypeName={ setActiveTypeName }
                          handleType={ handleType }
                        />
                      } 
                    </div>                
                  
                    {/* {{- _blocks.tooltips(p) -}}  */}              
                    <Financing page={ props.page } activeSku={ activeSku } setActiveSku={ setActiveSku } />

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