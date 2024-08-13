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
import Cart from './productDisplay/cart'
import { getUpsellSize } from './utils/getUpsellSize'
import { getSizeName } from './utils/getSizeName'
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
      initial.productName = item.name
      initial.type = p.defaultProductType 
      initial.color = p.defaultColor
      initial.colorName = p.defaultColorName
      initial.size = item.size
      initial.sizeName = item.sizeName
      initial.salePrice = item.salePrice
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
          initialItem.productName = item.name
          initialItem.type = item.type
          initialItem.color = item.color
          initialItem.colorName = item.colorName
          initialItem.size = item.size
          initialItem.sizeName = item.sizeName
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

  const [sku, setSku] = useState(initial.sku);
  const [type, setType] = useState(initial.type)
  const [productName, setProductName] = useState(initial.productName)
  const [color, setColor] = useState(initial.color)
  const [colorName, setColorName] = useState(initial.colorName)
  const [size, setSize] = useState(initial.size)
  const [sizeName, setSizeName] = useState(initial.sizeName)
  const [price, setPrice] = useState(initial.salePrice)
  
  const [upsell0Active, setUpsell0Active] = useState(false)
  const [upsell1Active, setUpsell1Active] = useState(false)

  const [upsell0Sku, setUpsell0Sku] = useState(initial.upsells[0].sku)
  const [upsell1Sku, setUpsell1Sku] = useState(initial.upsells[1].sku)

  const [upsell0Size, setUpsell0Size] = useState(getUpsellSize(size, initial.upsells[0].catSizes))
  const [upsell1Size, setUpsell1Size] = useState(getUpsellSize(size, initial.upsells[1].catSizes))

  const upsell0CatSizes = initial.upsells[0].catSizes
  const upsell1CatSizes = initial.upsells[1].catSizes

  const [upsell0Price, setUpsell0Price] = useState(initial.upsells[0].salePrice)
  const [upsell1Price, setUpsell1Price] = useState(initial.upsells[1].salePrice)

  const [showCart, setShowCart] = useState(false)

  const prefix = 'XX'
  const handleSku = () => {
    setSku(`${ prefix }-${ type }-${ color }-${ size }`);
    console.log('handlesku', sku)
  }

  const handleSize = (e) => {
    let outofstock = e.target.dataset.outofstock === 'true';
    if (!outofstock) {
      setSize(e.target.dataset.size)
      setSizeName(e.target.dataset.sizename)
      setSku(`${ prefix }-${ type }-${ color }-${ e.target.dataset.size }`);
      setPrice(Number(e.target.dataset.price))
      if (p.upsells !== undefined) {
        const size0 = getUpsellSize(e.target.dataset.size, upsell0CatSizes)
        setUpsell0Size(size0)

        const size1 = getUpsellSize(e.target.dataset.size, upsell1CatSizes)
        setUpsell1Size(size1)
      }
    }
  }
  const handleColor = (e) => {
    setColor(e.target.dataset.color)
    setColorName(e.target.dataset.colorName)
    handleSku();
  }
  const handleType = (e) => {
    // const utype = e.target.dataset.type
    setType(e.target.dataset.type)
    setProductName(e.target.dataset.productName)
    console.log('e.target.dataset.type', e.target.dataset.type)
    console.log('type', type)
    console.log('name', productName)
    handleSku();
  }


  // const handleShowUpsellModal = (e) => {
  //   e.preventDefault();
  //   console.log('show upsell modal')
  //   const index = Number(e.target.dataset.index)
  //   console.log('show upsell modal index', index)
  //   if (e.target.dataset.index === 0) {
  //     setShowUpsell0Modal(true)
  //     console.log('000')
  //   } else {
  //     setShowUpsell1Modal(true)
  //     console.log('111')
  //   }
  // }
  // const handleUpsellModalClose = (e) => {
  //   if (e.target.dataset.index === 0) {
  //     setShowUpsell0Modal(false)
  //   } else {
  //     setShowUpsell1Modal(false)
  //   }
  // }

  const displayCart = (e) => {
    setShowCart(true)
  }

  const hideCart = (e) => {
    setShowCart(false)
    console.log('hide cart')
  }

  console.log('game over man!')
  console.log('')


  return (
    <main 
      // data-active-type='none' 
      // data-active-color='none' 
      // data-active-size='none'
    >	
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
                        sku={ sku } 
                        setSku={ setSku } 
                        handleSku={ handleSku }
                        size={ size }
                        setSize={ setSize }
                        handleSize={ handleSize } 
                        type={ type }
                        color={ color }
                      />

                      { p.colorSelection &&
                        <ColorSelect 
                          page={ props.page } 
                          color={ color } 
                          colorName={ colorName } 
                          setColor={ setColor }
                          handleColor={ handleColor }
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
                          handleType={ handleType }
                        />
                      } 
                    </div>                
                  
                    {/* {{- _blocks.tooltips(p) -}}  */}              
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
        
                    <div className='col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 add-to-cart'>
                      <button 
                        className='btn' 
                        id='btn-addtocart'
                        onClick={ displayCart }
                        disabled={ showCart }
                        role='button'>
                        Add 
                        { ((upsell0Active && !upsell1Active) || (upsell1Active && !upsell0Active)) &&
                         <>
                          &nbsp;2
                         </>
                        }
                        { (upsell0Active && upsell1Active) &&
                         <>
                          &nbsp;3
                         </>
                        }
                        <span style={{ display: 'none' }} data-quantity='2'></span> to Cart
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
            
        <Cart 
          p={ p }
          initial={ initial }
          showCart={ showCart }
          hideCart={ hideCart }
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

      {/* {% block content %}
        <p>Missing content block</p>
      {% endblock %} */}

    </main>
  )
}

export default ProductDisplay;