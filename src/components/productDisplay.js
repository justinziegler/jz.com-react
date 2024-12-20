import React, { useState, useEffect } from 'react';
import                                     '../css/bootstrap-grid.css'
import                                     '../scss/product-display/product-display.scss'
import Gallery                        from './productDisplay/gallery';
import Ratings                        from './productDisplay/ratings';
import SizeSelect                     from './productDisplay/sizeSelect';
import ColorSelect                    from './productDisplay/colorSelect';
import QuantitySelect                 from './productDisplay/quantitySelect';
import TypeSelect                     from './productDisplay/typeSelect';
import RichText                       from './productDisplay/richText';
import Financing                      from './productDisplay/financing';
import Upsells                        from './productDisplay/upsells';
import CartButton                     from './productDisplay/cartButton'
import Cart                           from './productDisplay/cart'
import { getUpsellSize }              from './utils/getUpsellSize'
import { getInitialSelection }        from './utils/getInitialSelection'

let initial = []

function ProductDisplay(props) {
  const p = props.product

  let wrap = false;
  if (p.colorSelection) {
    if (p.qtySelection || p.catIds.length > 1) wrap = true;
  }

  if (!initial.length) {
    getInitialSelection(p, initial);
  }

  const [sku, setSku] =                 useState(initial.sku);
  const [typeName, setTypeName] =       useState(initial.typeName)
  const [colorName, setColorName] =     useState(initial.colorName)
  const [size, setSize] =               useState(initial.size)
  const [sizeName, setSizeName] =       useState(initial.sizeName)
  const [showCart, setShowCart] =       useState(false)
  const [cartTotal, setCartTotal] =     useState(initial.salePrice)
  
  useEffect(() => {
    if (props.productName === null)     props.setProductName(initial.productName)
    if (props.type === null)            props.setType(initial.type)
    if (props.color === null)           props.setColor(initial.color)
    if (props.price === 0)              props.setPrice(initial.salePrice)
    if (props.setMonthlyPayment === 0)  props.setMonthlyPayment(Math.round(initial.salePrice / 18))
  }, [props]);

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
    setSku(`${ prefix }-${ props.type }-${ props.color }-${ size }`);
    p.skus.forEach(item => {
      if (item.sku === sku) {
        props.setPrice(item.salePrice)
      }
    })
  }
  
  return (
    <>
      <div className='product-display' data-visible={ props.visible }>  
        <div className='container-fluid'>
          <div className='row'>
            <Gallery 
              product={ props.product } 
              type={ props.type } 
              color={ props.color } 
              size={ size } 
            />
            <div className='product col-xs-12 col-sm-6'>
              <div className='row'>
                <div className='product-description col-xs-12'>
                  <div className='row'>
                    <div className='col-xs-12'>
                      <h1 data-type={ p.defaultProductType } key='heading-0'>{ p.heading }</h1>
                      <Ratings product={ props.product } />
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
                        setPrice={ props.setPrice }
                        type={ props.type }
                        color={ props.color }
                        setUpsell0Size={ setUpsell0Size }
                        setUpsell1Size={ setUpsell1Size }
                        upsell0CatSizes={ upsell0CatSizes }
                        upsell1CatSizes={ upsell1CatSizes }
                        prefix={ prefix }
                      />

                      { p.colorSelection &&
                        <ColorSelect 
                          product={ props.product }
                          handleSku={ handleSku }
                          color={ props.color } 
                          colorName={ colorName } 
                          setColor={ props.setColor }
                          setColorName={ setColorName }
                        />
                      }

                      { p.qtySelection &&
                        <QuantitySelect product={ props.product } />
                      }

                      { p.comboPage &&
                        <TypeSelect 
                          product={ props.product }
                          type={ props.type } 
                          setType={ props.setType }
                          typeName={ typeName } 
                          setTypeName={ setTypeName }
                          productName={ props.productName } 
                          setProductName={ props.setProductName }
                          handleSku={ handleSku }
                        />
                      } 
                    </div>                
                              
                    <Financing 
                      product={ props.product }
                      sku={ sku } 
                      setSku={ setSku } 
                      upsell0Active={ upsell0Active }
                      upsell1Active={ upsell1Active }
                      upsell0Sku={ upsell0Sku }
                      upsell1Sku={ upsell1Sku }
                      price={ props.price }
                      upsell0Price={ upsell0Price }
                      upsell1Price={ upsell1Price }
                      cartTotal={ cartTotal }
                      setCartTotal={ setCartTotal }
                      monthlyPayment={ props.monthlyPayment }
                      setMonthlyPayment={ props.setMonthlyPayment }
                    />

                    { p.upsell &&
                      <Upsells 
                        product={ props.product }
                        prefix={ prefix }
                        type={ props.type }
                        color={ props.color } 
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
                        setUpsell0Price={ setUpsell0Price }
                        setUpsell1Price={ setUpsell1Price }
                        upsell0Price={ upsell0Price }
                        upsell1Price={ upsell1Price }
                        initial={ initial }
                      />
                    }

                    <CartButton 
                      product={ props.product }
                      showCart={ showCart }
                      setShowCart={ setShowCart }
                      upsell0Active={ upsell0Active }
                      upsell1Active={ upsell1Active }
                    />
                  </div>
                </div>
              </div>
            </div>
            <RichText product={ props.product } />
          </div>
        </div>
            
        <Cart 
          product={ props.product }
          initial={ initial }
          showCart={ showCart }
          setShowCart={ setShowCart }
          sizeName={ sizeName }
          productName={ props.productName }
          price={ props.price }
          colorName={ colorName }
          upsell0Sku={ upsell0Sku }
          upsell0Active={ upsell0Active }
          upsell1Sku={ upsell1Sku }
          upsell1Active={ upsell1Active }
          upsell0Price={ upsell0Price }
          upsell1Price={ upsell1Price }
          setUpsell0Price={ setUpsell0Price }
          setUpsell1Price={ setUpsell1Price }
          cartTotal={ cartTotal }
        />

      </div>
    </>
  )
}

export default ProductDisplay;