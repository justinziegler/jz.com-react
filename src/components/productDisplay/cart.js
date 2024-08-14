import React from 'react';
import CartUpsell from './cartUpsell';

function Cart(props) {
  const p = props.page

  const hideCart = (e) => {
    props.setShowCart(false)
  }
  
  return (
    <>
      <div className='cart-contents' data-visible={ props.showCart }>
        <button onClick={ hideCart }></button>
        <ul>
          <li>
            { props.sizeName } { props.productName }
            { p.colorSelection &&
              <>
                &nbsp;&ndash; { props.colorName }
              </>
            } 
          </li>
          { p.upsells &&
            <>
              <CartUpsell p={ p } index={ 0 } active={ props.upsell0Active } sku={ props.upsell0Sku } setPrice={ props.setUpsell0Price } />
              <CartUpsell p={ p } index={ 1 } active={ props.upsell1Active } sku={ props.upsell1Sku } setPrice={ props.setUpsell1Price } />
            </>
          }
        </ul>
        <p>
          Cart total: <strong>$
            { (props.upsell0Active && props.upsell1Active) ?
              <>{ props.price + props.upsell0Price + props.upsell1Price }</> :
              <>
                { (props.upsell0Active && !props.upsell1Active) ?
                    <>{ props.price + props.upsell0Price }</> :
                  <>
                    { (!props.upsell0Active && props.upsell1Active) ?
                      <>{ props.price + props.upsell1Price }</> :
                      <>{ props.price }</>
                    }
                  </>
                }
              </>
            }
          </strong>
        </p>
      </div>
      <div className='cart-overlay' data-visible={ props.showCart } onClick={ hideCart }></div>
    </>
  )
}

export default Cart