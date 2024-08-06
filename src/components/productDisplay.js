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
          initialItem.catSizes = u.catSizes
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
  // const [cart, setCart] = useState(initial)
  console.log('activeType', activeType)
  console.log('activeColor', activeColor)
  // console.log('activeColorName', activeColorName)
  console.log('activeSize', activeSize)


  // const [upsell0Sku, setUpsell0Sku] = useState('')
  // const [activeUpsellSku1, setActiveUpsellSku1] = useState('')
  // const [activeUpsellType0, setActiveUpsellType0] = useState('')
  // const [activeUpsellType1, setActiveUpsellType1] = useState('')
  // const [activeUpsellColor0, setActiveUpsellColor0] = useState('')
  // const [activeUpsellColor1, setActiveUpsellColor1] = useState('')
  const [upsell0Active, setUpsell0Active] = useState(false)
  const [upsell1Active, setActiveUpsell1] = useState(false)
  const [upsell0Sku, setUpsell0Sku] = useState(initial.upsells[0].sku)
  const [upsell1Sku, setUpsell1Sku] = useState(initial.upsells[1].sku)
  const [activeUpsellType0, setActiveUpsellType0] = useState(initial.upsells[0].type)
  const [activeUpsellType1, setActiveUpsellType1] = useState(initial.upsells[1].type)
  const [activeUpsellColor0, setActiveUpsellColor0] = useState(initial.upsells[0].color)
  const [activeUpsellColor1, setActiveUpsellColor1] = useState(initial.upsells[1].color)
  const [upsellSize0, setUpsellSize0] = useState(getUpsellSize(activeSize, initial.upsells[0].catSizes))
  const [upsellSize1, setUpsellSize1] = useState(getUpsellSize(activeSize, initial.upsells[1].catSizes))
  const upsell0CatSizes = initial.upsells[0].catSizes
  const upsell1CatSizes = initial.upsells[1].catSizes
  const [showOptions0, setShowOptions0] = useState(false)
  const [showOptions1, setShowOptions1] = useState(false)

  console.log('upsell0Active', upsell0Active)
  console.log('upsell1Active', upsell1Active)
  console.log('upsell0Sku', upsell0Sku)
  console.log('upsell1Sku', upsell1Sku)
  console.log('activeUpsellColor0', activeUpsellColor0)
  console.log('activeUpsellColor1', activeUpsellColor1)
  console.log('upsellSize0', upsellSize0)
  console.log('upsellSize1', upsellSize1)

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
      if (p.upsells !== undefined) {
        const size0 = getUpsellSize(e.target.dataset.size, upsell0CatSizes)
        console.log('size0', size0)
        setUpsellSize0(size0)

        const size1 = getUpsellSize(e.target.dataset.size, upsell1CatSizes)
        console.log('size1', size1)
        setUpsellSize0(size1)
      }
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

  // we can set these


  const handleActiveUpsell = (e) => {
    e.preventDefault();
    console.log('e.target.dataset.index', e.target.dataset.index)
    const index = Number(e.target.dataset.index)
    if (index === 0) {
      setUpsell0Active(!upsell0Active)
      setShowOptions0(!showOptions0)
      console.log('index = 0')
    } else if (index === 1) {
      setActiveUpsell1(!upsell1Active)
      setShowOptions1(!showOptions1)
      console.log('index = 1')
    }
  }

  const handleUpsellSku = (index) => {
    console.log('handleUpsellSku index', index)
    if (index === 0) {
      setUpsell0Sku(`${ prefix }-${ activeUpsellType0 }-${ activeUpsellColor0 }-${ upsellSize0 }`)
      console.log('handleUpsellsku0', upsell0Sku)
    } else if (index === 1) {
      setUpsell1Sku(`${ prefix }-${ activeUpsellType1 }-${ activeUpsellColor1 }-${ upsellSize1 }`)
      console.log('handleUpsellsku1', upsell1Sku)
    }
  }
  const handleUpsellColor = (e) => {
    const index = Number(e.target.dataset.index)
    const color = e.target.dataset.color
    if (index === 0) {
      setActiveUpsellColor0(color)
      setUpsell0Sku(`${ prefix }-${ activeUpsellType0 }-${ color }-${ upsellSize0 }`)
      console.log('handleUpsellColor got hre')
      console.log('color', color)
    } else if (index === 1) {
      setActiveUpsellColor1(color)
      setUpsell1Sku(`${ prefix }-${ activeUpsellType1 }-${ color }-${ upsellSize1 }`)
    }
    // handleUpsellSku(index);
    console.log('handleUpsellColor')
    console.log('e.target.dataset.color', e.target.dataset.color)
    console.log('activeUpsellColor0', activeUpsellColor0)
  }

  console.log('game over man!')
  console.log('')


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
                        // cart={ cart }
                        handleActiveUpsell={ handleActiveUpsell }
                        handleUpsellColor={ handleUpsellColor }
                        upsell0Active={ upsell0Active }
                        upsell1Active={ upsell1Active }
                        setUpsell0Active={ setUpsell0Active }
                        setActiveUpsell1={ setActiveUpsell1 }
                        upsell0Sku={ upsell0Sku }
                        upsell1Sku={ upsell1Sku }
                        activeUpsellColor0={ activeUpsellColor0 }
                        activeUpsellColor1={ activeUpsellColor1 }
                        setActiveUpsellColor0={ setActiveUpsellColor0 }
                        setActiveUpsellColor1={ setActiveUpsellColor1 }
                        upsellSize0={ upsellSize0 }
                        upsellSize1={ upsellSize1 }
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