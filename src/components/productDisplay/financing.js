import React, { useState } from 'react';

function Financing(props) {
  React.useEffect(()=> {
    let total = props.price;
    if (props.upsell0Active) total += props.upsell0Price
    if (props.upsell1Active) total += props.upsell1Price
    const monthlyPayment = Math.round(total / 18)
    if (total > 0) props.setMonthlyPayment(monthlyPayment)
    props.setCartTotal(total)
  }, [props.price, props.upsell0Active, props.upsell1Active, props.upsell0Sku, props.upsell1Sku]);

  const p = props.page;
  let additionalClass = ''
  if (p.discountActual > 0) additionalClass = 'discounted'
  let Items = [];
  for (let i = 1; i <= p.maxQty; i++) {
    p.skus.forEach((item, index) => {
      let displayRule = 'none'
      if (index === 0) displayRule = 'block'
      Items.push(
        <div 
          data-sku={ item.sku }
          key={ `financing${ index }`}
          data-visible={ item.sku === props.sku }
          data-propssku={ props.sku }
        >
          <p className='price' 
            data-sku={ item.sku } 
            data-quantity={ i } 
            key={ `price${ index }`}
          >
            0% APR financing as low as 
            <span> $
              { (props.upsell0Active && props.upsell1Active) ?
                <>{ Math.round((props.price + props.upsell0Price + props.upsell1Price) / 18) }</> :
                <>
                  { (props.upsell0Active && !props.upsell1Active) ?
                      <>{ Math.round((props.price + props.upsell0Price) / 18) }</> :
                    <>
                      { (!props.upsell0Active && props.upsell1Active) ?
                        <>{ Math.round((props.price + props.upsell1Price) / 18) }</> :
                        <>{ Math.round(props.price / 18) }</>
                      }
                    </>
                  }
                </>
              }
              /month
            </span>
          </p>
        </div>
      )
    })
  }
  return (
    <div className='col-xs-12'>
      <div className={ `financing ${ additionalClass }`} key='asdf'> 
        {/* { Items } */}
        <div>
          <p className='price'>
            0% APR financing as low as 
            <span> ${ props.monthlyPayment }/month</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Financing