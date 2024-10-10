import React, { useState } from 'react';
import Collapse            from 'react-bootstrap/Collapse';
import Tooltip             from 'react-bootstrap/Tooltip';
import OverlayTrigger      from 'react-bootstrap/OverlayTrigger';
import UpsellModal         from './upsellModal';

function Upsell(props) {
  const u = props.u
  const index = props.index
  const initial = props.initial

  const [type, setType]               = useState(initial.type)
  const [color, setColor]             = useState(initial.color)
  const [showOptions, setShowOptions] = useState(false)
  const [showModal, setShowModal]     = useState(false)
  
  const handleActive = (e) => {
    e.preventDefault();
    props.setActive(!props.active)
    setShowOptions(!showOptions)
  }

  const handlePrice = (sku) => {
    const skus = u.skus
    skus.forEach(item => {
      if (item.sku === sku) {
        props.setPrice(item.salePrice)
      } 
    })
  }

  const handleColor = (e) => {
    setColor(e.target.dataset.color)
    const sku = `${ props.prefix }-${ type }-${ e.target.dataset.color }-${ props.size }`
    props.setUpsellSku(sku)
    handlePrice(sku)
  }

  const handleType = (e) => {
    setType(e.target.dataset.type)
    const sku = `${ props.prefix }-${ e.target.dataset.type }-${ color }-${ props.size }`
    props.setUpsellSku(sku)
    handlePrice(sku)
  }
  
  

  const HandleSize = (props) => {
    React.useEffect(()=> {
      const sku = `${ props.prefix }-${ props.type }-${ props.color }-${ props.size }`
      props.setUpsellSku(sku)
      props.handlePrice(sku)
    }, [props])
  }


  const handleShowModal = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setShowModal(true)
  }

  return (
    <li className='item' 
      key={ `upsell${ index }` }
    >
      <HandleSize 
        prefix={ props.prefix }
        type={ type }
        color={ color }
        size={ props.size }
        setUpsellSku={ props.setUpsellSku }
        handlePrice={ handlePrice }
      />
      <UpsellModal 
        showModal={ showModal }
        setShowModal={ setShowModal }
        u={ u }
        index={ index }
        type={ type }
      />
      <ul className='inventory'>
        { u.skus.map(item =>
          <li data-sku={ item.sku }
            data-type={ item.type }
            data-color={ item.color }
            data-size={ item.size }
            data-active={ props.active }
            onClick={ handleActive }
            role='button' tabIndex='0'
            aria-label={ u.name }
            data-visible={ 
              (item.type === type) &&
              (item.color === color) &&
              (item.size === props.size)
            }
            data-index={ index }
            aria-controls={ `options` }
            aria-expanded={ props.active }
            key={ `upsell${ item.sku }` }
          >
            &nbsp;
            { props.singleUpsell ?				
              <span className='price'>
                { u.subtitle !== '' ?
                  <>{ u.subtitle }</>
                :
                  <>{ item.colorName }</>
                } &bull; 
                { item.discount !== 0 ?
                  <>
                    { item.salePrice }
                    <span className='original price'>${ item.price }</span>
                  </>
                :
                  <>${ item.price }</>
                }
              </span>
            :
              <>
                { item.discount !== 0 &&
                  <span className='original price'>${ item.price }</span>
                }
                <span className='price'>
                  ${ item.salePrice }
                </span>
              </>
            }

            <label className={ u.longtitle ? 'longtitle' : undefined }>
              { props.singleUpsell ?
                <span>{ u.name }</span>
              :
                <a 
                  onClick={ handleShowModal }
                  role='button' 
                  tabIndex='0' 
                  href='./'
                >
                  <span>{ u.name }</span>
                </a>
              }
            </label>
          </li>
        )}										
      </ul>
      
      { u.colorSelection &&
        <Collapse in={ showOptions }>
          <div className='options' data-visible={ showOptions }>
            <div className='color-select'>
              { u.colorDisplayOrder.map(c =>
                <OverlayTrigger 
                  placement='top' 
                  overlay={<Tooltip id={ c.color }>{ c.colorName }</Tooltip>}
                  key={ `overlay${ c.color }` }
                >
                  <button 
                    data-color={ c.color } 
                    data-colorname={ c.colorName } 
                    className='color' 
                    tabIndex='0' 
                    data-active={ c.color === color }
                    data-index={ index }
                    onClick={ handleColor }
                    key={ `color-select${ u.catId }${ c.color }${ index }` }
                  >
                  </button>
                </OverlayTrigger>                          
              )}
            </div>

            { u.catIds.length > 1 &&
              <div className='type-select'>
                { u.catIds.map(catId =>
                  <React.Fragment key={ `type-select-${catId}` }>
                    { u.skus.map(item =>
                      item.catId === catId &&
                      <React.Fragment key={ `type-select-${item.sku}` }>
                        <button data-sku={ item.sku }
                          data-name={ item.name }
                          data-type={ item.type }
                          data-color={ item.color }
                          data-size={ item.size }
                          data-price={ item.salePrice }
                          data-index={ index }
                          data-active={ item.sku === props.upsellSku } 
                          tabIndex='0'
                          onClick={ handleType }
                          key={ `type-select-${ item.sku }${ index }` }
                          data-visible={
                            item.color === color &&
                            item.size === props.size
                          }
                        >
                          <div className='selected-item'>
                            { item.shortName }
                          </div>
                          <div className='selected-price'>
                              <span className='price'>
                                ${ item.salePrice }
                              </span>
                              { item.discount !== 0 &&
                                <span className='original-price'> ${ item.price }</span>
                              }
                          </div>
                        </button>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
              </div>
            }
          </div>
        </Collapse>
      }
    </li>
  )
}

export default Upsell