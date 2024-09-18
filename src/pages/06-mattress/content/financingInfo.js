import '../../../scss/section-financing-info.scss'

function FinancingInfo(props) {

  return (
    <section className='financing-info lazyload' data-product-id='PM'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-6'>
            <h2>A Premium Mattress<br /> You Can Actually Afford</h2>
            <h3>Why wait? Financing options available<br /> starting at</h3>
              <h4><sup>$</sup><span className='price monthly' data-mprice={ props.monthlyPayment }>/mo.</span></h4>
              <p>Spread Payments Over 6 to 24 Months<br />
              As Low as <strong>0% APR</strong> Financing Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinancingInfo