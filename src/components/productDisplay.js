import React, { useState } from 'react';
import Gallery from './productDisplay/gallery';
import Ratings from './productDisplay/ratings';
import SizeSelect from './productDisplay/sizeSelect';
import ColorSelect from './productDisplay/colorSelect';
import QuantitySelect from './productDisplay/quantitySelect';
import TypeSelect from './productDisplay/typeSelect';
import RichText from './productDisplay/richText';
import Financing from './productDisplay/financing';
import Upsells from './productDisplay/upsells';
import CartButton from './productDisplay/cartButton'
import Cart from './productDisplay/cart'
import { getUpsellSize } from './utils/getUpsellSize'
import { getInitialSelection } from './utils/getInitialSelection';
import '../css/bootstrap-grid.css'
import '../scss/product-display.scss'
// Remove below line when able (only included for BS collapse css)
// import '../scss/header.scss';
import '../scss/product-display-color+quantity.scss'

let initial = []

function ProductDisplay(props) {
  const p = props.page
  console.log('p!', p)

  let wrap = false;
  if (p.colorSelection) {
    if (p.qtySelection || p.catIds.length > 1) wrap = true;
  }

  if (!initial.length) {
    getInitialSelection(p, initial);
  }

  const [sku, setSku] =                 useState(initial.sku);
  const [type, setType] =               useState(initial.type)
  const [productName, setProductName] = useState(initial.productName)
  const [color, setColor] =             useState(initial.color)
  const [colorName, setColorName] =     useState(initial.colorName)
  const [size, setSize] =               useState(initial.size)
  const [sizeName, setSizeName] =       useState(initial.sizeName)
  const [price, setPrice] =             useState(initial.salePrice)
  const [showCart, setShowCart] =       useState(false)

  const [upsell0Active, setUpsell0Active] = useState(false)
  const [upsell1Active, setUpsell1Active] = useState(false)
  const [upsell0Sku, setUpsell0Sku] = 
    useState(initial.upsells !== undefined ? initial.upsells[0].sku : undefined)
  const [upsell1Sku, setUpsell1Sku] = 
    useState(initial.upsells !== undefined ? initial.upsells[1].sku : undefined)

  const [upsell0Size, setUpsell0Size] = 
    useState(initial.upsells !== undefined ? getUpsellSize(size, initial.upsells[0].catSizes) : undefined)
  const [upsell1Size, setUpsell1Size] = 
    useState(initial.upsells !== undefined ? getUpsellSize(size, initial.upsells[1].catSizes) : undefined)

  let upsell0CatSizes = initial.upsells !== undefined ? initial.upsells[0].catSizes : undefined
  let upsell1CatSizes = initial.upsells !== undefined ? initial.upsells[1].catSizes : undefined
  const [upsell0Price, setUpsell0Price] = 
    useState(initial.upsells !== undefined ? initial.upsells[0].salePrice : undefined)
  const [upsell1Price, setUpsell1Price] = 
    useState(initial.upsells !== undefined ? initial.upsells[1].salePrice : undefined)

  const prefix = 'XX'
  const handleSku = () => {
    setSku(`${ prefix }-${ type }-${ color }-${ size }`);
    p.skus.forEach(item => {
      if (item.sku === sku) {
        setPrice(item.salePrice)
      }
    })
  }

  console.log('game over man!')
  console.log('')


  return (
    <div className='product-display' data-visible={ props.visible }>  
      <div className='container-fluid'>
        <div className='row'>
          <Gallery page={ props.page } type={ type } color={ color } size={ size } />
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
                    data-wrap={ wrap }
                    data-comparison-accordion={ p.comboProductAccordion }
                    data-comparison-accordion-active={ false }
                  >
                    <SizeSelect 
                      p={ p } 
                      sku={ sku } 
                      setSku={ setSku } 
                      handleSku={ handleSku }
                      size={ size }
                      setSize={ setSize }
                      setSizeName={ setSizeName }
                      setPrice={ setPrice }
                      type={ type }
                      color={ color }
                      setUpsell0Size={ setUpsell0Size }
                      setUpsell1Size={ setUpsell1Size }
                      upsell0CatSizes={ upsell0CatSizes }
                      upsell1CatSizes={ upsell1CatSizes }
                      prefix={ prefix }
                    />

                    { p.colorSelection &&
                      <ColorSelect 
                        page={ props.page } 
                        handleSku={ handleSku }
                        color={ color } 
                        colorName={ colorName } 
                        setColor={ setColor }
                        setColorName={ setColorName }
                      />
                    }

                    { p.qtySelection &&
                      <QuantitySelect page={ props.page } />
                    }

                    { p.comboPage &&
                      <TypeSelect 
                        page={ props.page } 
                        type={ type } 
                        setType={ setType }
                        productName={ productName } 
                        setProductName={ setProductName }
                        handleSku={ handleSku }
                      />
                    } 
                  </div>                
                            
                  <Financing 
                    page={ props.page } 
                    sku={ sku } 
                    setSku={ setSku } 
                    upsell0Active={ upsell0Active }
                    upsell1Active={ upsell1Active }
                    price={ price }
                    upsell0Price={ upsell0Price }
                    upsell1Price={ upsell1Price }
                  />

                  { p.upsell &&
                    <Upsells 
                      page={ props.page }
                      prefix={ prefix }
                      type={ type }
                      color={ color } 
                      size={ size } 
                      upsell0Active={ upsell0Active }
                      upsell1Active={ upsell1Active }
                      setUpsell0Active={ setUpsell0Active }
                      setUpsell1Active={ setUpsell1Active }
                      upsell0Sku={ upsell0Sku }
                      upsell1Sku={ upsell1Sku }
                      setUpsell0Sku={ setUpsell0Sku }
                      setUpsell1Sku={ setUpsell1Sku }
                      upsell0Size={ upsell0Size }
                      upsell1Size={ upsell1Size }
                      initial={ initial }
                    />
                  }

                  <CartButton 
                    page={ props.page }
                    showCart={ showCart }
                    setShowCart={ setShowCart }
                    upsell0Active={ upsell0Active }
                    upsell1Active={ upsell1Active }
                  />
                </div>
              </div>
            </div>
          </div>
          <RichText page={ props.page } />
        </div>
      </div>
          
      <Cart 
        page={ props.page } 
        initial={ initial }
        showCart={ showCart }
        setShowCart={ setShowCart }
        sizeName={ sizeName }
        productName={ productName }
        price={ price }
        colorName={ colorName }
        upsell0Sku={ upsell0Sku }
        upsell0Active={ upsell0Active }
        upsell1Sku={ upsell1Sku }
        upsell1Active={ upsell1Active }
        upsell0Price={ upsell0Price }
        upsell1Price={ upsell1Price }
        setUpsell0Price={ setUpsell0Price }
        setUpsell1Price={ setUpsell1Price }
      />

    </div>
  )
}

export default ProductDisplay;