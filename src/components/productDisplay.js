import React, { useState } from 'react';
import ProductDisplayGallery from './productDisplay/productDisplayGallery';
import Ratings from './productDisplay/ratings';
import SizeSelect from './productDisplay/sizeSelect';
import ColorSelect from './productDisplay/colorSelect';
import QuantitySelect from './productDisplay/quantitySelect';
import TypeSelect from './productDisplay/typeSelect';
import RichText from './productDisplay/richText';
import Financing from './productDisplay/financing';
import Upsells from './productDisplay/upsells';
import { getUpsellSize } from './utils/getUpsellSize'
import '../css/bootstrap-grid.css'
import '../scss/product-display.scss'
// Remove below line when able (only included for BS collapse css)
import '../scss/header.scss';


let initial = []
let initialUpsells = []

function getInitialSelection(p) {
  p.skus.forEach(item => {
    if (!item.outofstock && initial.sku === undefined) {
      initial.sku = item.sku
      initial.type = p.defaultProductType 
      initial.typeName = item.name
      initial.color = p.defaultColor
      initial.colorName = p.defaultColorName
      initial.size = item.size
    }
  })
  if (p.upsells !== undefined) {
    p.upsells.forEach(u => {
      let initialItem = { }
      u.skus.forEach(item => {
        if (item.catId === u.defaultCatId && 
            item.color == initial.color && 
            getUpsellSize(initial.size, u.catSizes) === item.size) {
          initialItem.sku = item.sku
          initialItem.name = item.name
          initialItem.type = item.type
          initialItem.color = item.color
          initialItem.colorName = item.colorName
          initialItem.size = item.size
          initialItem.price = item.price
          initialItem.salePrice = item.salePrice
          initialItem.active = false
        }
      })
      initialUpsells.push(initialItem)
    })
    initial.upsells = initialUpsells
  }
}

function ProductDisplay(props) {
  const p = props.page

  let wrap = false;
  if (p.colorSelection) {
    if (p.qtySelection || p.catIds.length > 1) wrap = true;
  }

  if (!initial.length) {
    getInitialSelection(p);
  }

  const [activeSku, setActiveSku] = useState(initial.sku);
  const [activeType, setActiveType] = useState(initial.type)
  const [activeTypeName, setActiveTypeName] = useState(initial.typeName)
  const [activeColor, setActiveColor] = useState(initial.color)
  const [activeColorName, setActiveColorName] = useState(initial.colorName)
  const [activeSize, setActiveSize] = useState(initial.size)
  const [cart, setCart] = useState(initial)
  console.log('activeType', activeType)
  console.log('activeColor', activeColor)
  console.log('activeColorName', activeColorName)
  console.log('activeSize', activeSize)


  // let cart = {
  //   sku: activeSku,
  //   type: activeType,
  //   typeName: activeTypeName,
  //   size: activeSize,
  //   price: '',
  //   colorName: activeColorName,
  //   upsells: initialUpsells

  // }
  console.log('cart!', cart)

  

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

  
  const [activeUpsellSku0, setActiveUpsellSku0] = useState('')
  const [activeUpsellSku1, setActiveUpsellSku1] = useState('')
  const [showOptions0, setShowOptions0] = useState(false)
  const [showOptions1, setShowOptions1] = useState(false)

  const handleActiveUpsell = (e) => {
    e.preventDefault();
    console.log('handleUposellActive', cart.upsells[0])
    console.log('e.target.dataset.index', e.target.dataset.index)
    const index = Number(e.target.dataset.index)
    // switch (index) {
    //   case 0: setActiveUpsellSku0(e.target.dataset.sku)
    //   case 1: setActiveUpsellSku1(e.target.dataset.sku)
    // }
    if (index === 0) {
      if (activeUpsellSku0.length) {
        setActiveUpsellSku0('')
        setShowOptions0(false)
      } else {
        setActiveUpsellSku0(e.target.dataset.sku)
        setShowOptions0(true)
      }
      console.log('index = 0')
    } else if (index === 1) {
      if (activeUpsellSku1.length) {
        setActiveUpsellSku1('')
        setShowOptions1(false)
      } else {
        setActiveUpsellSku1(e.target.dataset.sku)
        setShowOptions1(true)
      }
      console.log('index = 1')
    }
    console.log('activeUpsell0', activeUpsellSku0)
    console.log('activeUpsell1', activeUpsellSku1)
  }

  
  // const handleUpsell = (e) => {
  //   console.log('handleUpsell', handleUpsell)
  //   e.target.setAttribute('data-default-state', true)
  //   const active = e.target.dataset.active === 'true'
  //   console.log('handleUpsell active:', active);
  //   e.target.setAttribute('data-active', !active)
  //   // console.log('handleUpsell active2:', active);
  // }

  


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

                    { p.upsell &&
                      <Upsells 
                        page={ props.page } 
                        activeType={ activeType }
                        activeColor={ activeColor } 
                        activeSize={ activeSize } 
                        cart={ cart }
                        handleActiveUpsell={ handleActiveUpsell }
                        activeUpsellSku0={ activeUpsellSku0 }
                        activeUpsellSku1={ activeUpsellSku1 }
                        showOptions0={ showOptions0 }
                        showOptions1={ showOptions1 }
                      />
                    }
        
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