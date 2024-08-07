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

  const [activeSku, setActiveSku] = useState(initial.sku);
  const [type, setType] = useState(initial.type)
  const [productName, setProductName] = useState(initial.productName)
  const [activeColor, setActiveColor] = useState(initial.color)
  const [activeColorName, setActiveColorName] = useState(initial.colorName)
  const [size, setSize] = useState(initial.size)
  const [sizeName, setSizeName] = useState(initial.sizeName)
  const [price, setPrice] = useState(initial.salePrice)
  // const [cart, setCart] = useState(initial)
  console.log('type', type)
  console.log('activeColor', activeColor)
  // console.log('activeColorName', activeColorName)
  console.log('size', size)


  // const [upsell0Sku, setUpsell0Sku] = useState('')
  // const [activeUpsellSku1, setActiveUpsellSku1] = useState('')
  // const [upsell0Type, setUpsell0Type] = useState('')
  // const [upsell1Type, setUpsell1Type] = useState('')
  // const [upsell0Color, setUpsell0Color] = useState('')
  // const [upsell1Color, setUpsell1Color] = useState('')
  const [upsell0Active, setUpsell0Active] = useState(false)
  const [upsell1Active, setUpsell1Active] = useState(false)

  const [upsell0Sku, setUpsell0Sku] = useState(initial.upsells[0].sku)
  const [upsell1Sku, setUpsell1Sku] = useState(initial.upsells[1].sku)

  const [upsell0ProductName, setUpsell0ProductName] = useState(initial.upsells[0].productName)
  const [upsell1ProductName, setUpsell1ProductName] = useState(initial.upsells[1].productName)

  const [upsell0Type, setUpsell0Type] = useState(initial.upsells[0].type)
  const [upsell1Type, setUpsell1Type] = useState(initial.upsells[1].type)

  const [upsell0Color, setUpsell0Color] = useState(initial.upsells[0].color)
  const [upsell1Color, setUpsell1Color] = useState(initial.upsells[1].color)

  const [upsell0ColorName, setUpsell0ColorName] = useState(initial.upsells[0].colorName)
  const [upsell1ColorName, setUpsell1ColorName] = useState(initial.upsells[1].colorName)

  const [upsell0Size, setUpsell0Size] = useState(getUpsellSize(size, initial.upsells[0].catSizes))
  const [upsell1Size, setUpsell1Size] = useState(getUpsellSize(size, initial.upsells[1].catSizes))

  const [upsell0SizeName, setUpsell0SizeName] = useState(initial.upsells[0].sizeName)
  const [upsell1SizeName, setUpsell1SizeName] = useState(initial.upsells[1].sizeName)

  const upsell0CatSizes = initial.upsells[0].catSizes
  const upsell1CatSizes = initial.upsells[1].catSizes

  const [upsell0Price, setUpsell0Price] = useState(initial.upsells[0].salePrice)
  const [upsell1Price, setUpsell1Price] = useState(initial.upsells[1].salePrice)

  const [showOptions0, setShowOptions0] = useState(false)
  const [showOptions1, setShowOptions1] = useState(false)

  const [cartTotal, setCartTotal] = useState(price)
  const [showCart, setShowCart] = useState(false)

  console.log('upsell0Active', upsell0Active)
  console.log('upsell1Active', upsell1Active)
  console.log('upsell0Sku', upsell0Sku)
  console.log('upsell1Sku', upsell1Sku)
  console.log('upsell0Color', upsell0Color)
  console.log('upsell1Color', upsell1Color)
  console.log('upsell0Size', upsell0Size)
  console.log('upsell1Size', upsell1Size)

  const prefix = 'XX'
  const handleSku = () => {
    setActiveSku(`${ prefix }-${ type }-${ activeColor }-${ size }`);
    console.log('handlesku', activeSku)
  }

  const handleSize = (e) => {
    let outofstock = e.target.dataset.outofstock === 'true';
    if (!outofstock) {
      setSize(e.target.dataset.size)
      setSizeName(e.target.dataset.sizename)
      setActiveSku(`${ prefix }-${ type }-${ activeColor }-${ e.target.dataset.size }`);
      setPrice(e.target.dataset.price)
      setCartTotal(getCartTotal)
      if (p.upsells !== undefined) {
        const size0 = getUpsellSize(e.target.dataset.size, upsell0CatSizes)
        const sizeName0 = getSizeName(size0)
        setUpsell0Size(size0)
        setUpsell0SizeName(sizeName0)
        setUpsell0Sku(`${ prefix }-${ upsell0Type }-${ upsell0Color }-${ size0 }`)

        const size1 = getUpsellSize(e.target.dataset.size, upsell1CatSizes)
        const sizeName1 = getSizeName(size1)
        setUpsell1Size(size1)
        setUpsell1SizeName(sizeName1)
        setUpsell1Sku(`${ prefix }-${ upsell1Type }-${ upsell1Color }-${ size1 }`)
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
    setType(e.target.dataset.type)
    setProductName(e.target.dataset.productName)
    console.log('e.target.dataset.type', e.target.dataset.type)
    console.log('type', type)
    console.log('name', productName)
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
      setUpsell1Active(!upsell1Active)
      setShowOptions1(!showOptions1)
      console.log('index = 1')
    }
    getCartTotal()
  }

  const handleUpsellSku = (index) => {
    console.log('handleUpsellSku index', index)
    if (index === 0) {
      setUpsell0Sku(`${ prefix }-${ upsell0Type }-${ upsell0Color }-${ upsell0Size }`)
      console.log('handleUpsellsku0', upsell0Sku)
    } else if (index === 1) {
      setUpsell1Sku(`${ prefix }-${ upsell1Type }-${ upsell1Color }-${ upsell1Size }`)
      console.log('handleUpsellsku1', upsell1Sku)
    }
  }
  const handleUpsellColor = (e) => {
    const index = Number(e.target.dataset.index)
    const color = e.target.dataset.color
    const colorName = e.target.dataset.colorname
    if (index === 0) {
      setUpsell0Color(color)
      setUpsell0ColorName(colorName)
      setUpsell0Sku(`${ prefix }-${ upsell0Type }-${ color }-${ upsell0Size }`)
      console.log('handleUpsellColor got hre')
      console.log('color', color)
    } else if (index === 1) {
      setUpsell1Color(color)
      setUpsell1ColorName(colorName)
      setUpsell1Sku(`${ prefix }-${ upsell1Type }-${ color }-${ upsell1Size }`)
    }
    // handleUpsellSku(index);
    console.log('handleUpsellColor')
    console.log('e.target.dataset.color', e.target.dataset.color)
    console.log('upsell0Color', upsell0Color)
  }

  const handleUpsellType = (e) => {
    const index = Number(e.target.dataset.index)
    const type = e.target.dataset.type
    const name = e.target.dataset.name
    console.log('handleUpsellType')
    if (index === 0) {
      setUpsell0Type(type)
      setUpsell0ProductName(name)
      setUpsell0Price(e.target.dataset.price)
      setUpsell0Sku(`${ prefix }-${ type }-${ upsell0Color }-${ upsell0Size }`)
      console.log('handleUpsellType 0')
    } else if (index === 1) {
      setUpsell1Type(type)
      setUpsell1ProductName(name)
      setUpsell1Price(e.target.dataset.price)
      setUpsell1Sku(`${ prefix }-${ type }-${ upsell1Color }-${ upsell1Size }`)
      console.log('handleUpsellType 1')
    }
    getCartTotal()
  }

  function getCartTotal() {
    let total = price
    console.log('upsell0Active', upsell0Active)
    if (upsell0Active) total += upsell0Price
    if (upsell1Active) total += upsell1Price
    console.log('total', total)
    setCartTotal(total)
  }

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
                        activeSku={ activeSku } 
                        setActiveSku={ setActiveSku } 
                        handleSku={ handleSku }
                        size={ size }
                        setSize={ setSize }
                        handleSize={ handleSize } 
                        type={ type }
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
                          type={ type } 
                          setType={ setType }
                          productName={ productName } 
                          setProductName={ setProductName }
                          handleType={ handleType }
                        />
                      } 
                    </div>                
                  
                    {/* {{- _blocks.tooltips(p) -}}  */}              
                    <Financing page={ props.page } activeSku={ activeSku } setActiveSku={ setActiveSku } />

                    { p.upsell &&
                      <Upsells 
                        page={ props.page } 
                        type={ type }
                        activeColor={ activeColor } 
                        size={ size } 
                        // cart={ cart }
                        handleActiveUpsell={ handleActiveUpsell }
                        handleUpsellColor={ handleUpsellColor }
                        handleUpsellType={ handleUpsellType }
                        upsell0Active={ upsell0Active }
                        upsell1Active={ upsell1Active }
                        setUpsell0Active={ setUpsell0Active }
                        setUpsell1Active={ setUpsell1Active }
                        upsell0Sku={ upsell0Sku }
                        upsell1Sku={ upsell1Sku }
                        upsell0Color={ upsell0Color }
                        upsell1Color={ upsell1Color }
                        setUpsell0Color={ setUpsell0Color }
                        setUpsell1Color={ setUpsell1Color }
                        upsell0Size={ upsell0Size }
                        upsell1Size={ upsell1Size }
                        showOptions0={ showOptions0 }
                        showOptions1={ showOptions1 }
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
            
        <div 
          className='cart-contents' 
          data-visible={ showCart }
        >
          <button 
            onClick={ hideCart }
            ></button>
          <ul>
            <li>
              { sizeName } { productName }
              { p.colorSelection &&
                <>
                  &nbsp;&ndash; { activeColorName }
                </>
              } 
            </li>
            { p.upsells &&
              <>
                { (upsell0Sku.length && upsell0Active) && 
                  <li>
                    { upsell0SizeName } { upsell0ProductName } &ndash; { upsell0ColorName }
                  </li>
                }
                { (upsell1Sku.length && upsell1Active) && 
                  <li>
                    { upsell1SizeName } { upsell1ProductName } &ndash; { upsell1ColorName }
                  </li>
                }
              </>
            }
          </ul>
          <p>Cart total: { cartTotal }</p>
        </div>
        <div className='cart-overlay' data-visible={ showCart } onClick={ hideCart }></div>

      </div>

      {/* {% block content %}
        <p>Missing content block</p>
      {% endblock %} */}

    </main>
  )
}

export default ProductDisplay;