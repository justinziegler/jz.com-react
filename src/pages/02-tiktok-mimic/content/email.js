
function Email(props) {
  const mattressDiscount = 200
  return (
    <section className='email' data-active={ props.activeNavItem === 'email' }>
      <div className='close' onClick={ props.closeSection }></div>
      <div className='email-capture container'>
        <div className='row'>
          <div className='col-xs-12'>
            <h2>UP TO</h2>
            { mattressDiscount > 1 ?
              <h3 className='up-to'><sup>$</sup>{ mattressDiscount } OFF</h3>
            :
              <h3 className='up-to'>{ mattressDiscount * 100 }<sup>%</sup> OFF</h3>
            }
            <h4><span className='any-size'>Lull Mattresses</span></h4>
            <h5>Fast, Free Shipping</h5>
          </div>
        </div>
        <div className='row'>
          <form>
            <div className='col-xs-12 col-sm-8 col-sm-offset-2'>
              <input id='modalEmail' 
                type='email' 
                placeholder='Enter email address' 
                aria-label='Enter email address' 
                required 
                tabIndex='2' 
              />
            </div>
            <div className='col-xs-12 col-sm-8 col-sm-offset-2'>
              <button id='modalSubscribe' className='submit btn btn-teal btn-md' type='button'  tabIndex='6'>
                { mattressDiscount < 1 ?
                  <>Get my { mattressDiscount * 100 }% OFF</>
                  :
                  <>
                    { mattressDiscount > 299 ?
                      <>My Exclusive Offer</>
                    :
                      <>Get my ${ mattressDiscount } OFF</>
                    }
                  </>
                }
              </button>  
            </div>
          </form>
        </div>
        <p>This form is not presently configured to gather emails.</p>
      </div>
    </section>
  )
}

export default Email