
import '../../../scss/07-bed-frame/financing-info.scss'

function FinancingInfo(props) {
  return (
    <section className='financing-info lazyload'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-6'>
            <h2>A Luxury Bed Frame<br /> You Can Afford</h2>
            <h3>Get the { props.productName }<br /> for as low as</h3>
            <h4>
              <sup>$</sup>
              <span className='price monthly' data-mprice={ props.monthlyPayment }>/mo.</span>
            </h4>
            <p>Spread Payments Over 6 to 18 Months<br />
              As Low as 0% APR Financing Available
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinancingInfo