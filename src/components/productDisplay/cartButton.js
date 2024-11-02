function CartButton(props) {
  const p = props.product
  const displayCart = (e) => {
    props.setShowCart(true)
  }

  return (
    <>
      <div className='col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 add-to-cart'>
        <button 
          className='btn' 
          id='btn-addtocart'
          onClick={ displayCart }
          disabled={ props.showCart }
          role='button'>
          Add&nbsp; 
            { ((props.upsell0Active && !props.upsell1Active) || 
              (props.upsell1Active && !props.upsell0Active)) &&
              <>
              2&nbsp;
              </>
            }
            { (props.upsell0Active && props.upsell1Active) &&
              <>
              3&nbsp;
              </>
            }
          to Cart
        </button>
      </div>
      { p.readyToShipMessage &&
        <div className='ready-to-ship col-xs-12'>
          <p><span className='bullet'><span></span></span> Ready to Ship | Free No-Contact Delivery</p>
        </div>
      }
    </>
  )
}

export default CartButton