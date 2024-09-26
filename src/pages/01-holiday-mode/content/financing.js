
import React              from 'react';
import { preventDefault } from '../../../components/utils/preventDefault';

function Financing(props) {
  let monthlyPayment = 0;
  let name;
  const skus = props.skus;
  skus.forEach(item => {
    if (item.sku.slice(3) === 'MA-WH-TW')  {
      monthlyPayment = Math.round(item.monthlyPayment);
      name = item.name;
    } 
  })
  return (
    <div className='financing pic lazyload'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 col-sm-6'>
            <div className='content'>
              <h2>A Mattress You Can<br /> Actually Afford</h2>
              <p>
                Pay now or finance over time. <br />
                Get Your { name } for as low as<span className='visible-xs-inline'>:</span> 
                <span className='hidden-xs'>&nbsp;${ monthlyPayment }/mo.</span>
              </p>
              <a href='./' onClick={ preventDefault } className='btn btn-transparent hidden-xs'>Learn More</a>
            </div>
          </div>
          <div className='mattress-pic pic lazyload col-xs-12 col-sm-6'>
            <h3><sup>$</sup>{ monthlyPayment }<span>/mo</span></h3>
          </div>
          <div className='col-xs-12 visible-xs'>
            <a href='./' onClick={ preventDefault } className='btn btn-transparent visible-xs-inline-block'>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Financing;