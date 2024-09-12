import { numberWithCommas } from '../utils/numberWithCommas'
import '../../scss/section-ratings.scss'

function Ratings(props) {
  const starCount = 4.8
  const totalGoogleRounded = numberWithCommas(4567)

  return (
    <section className='ratings'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <div className='newsweek logo'></div>
            <p>America's Best Trending<br />Online Shops 2021</p>
          </div>	
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <div className='google logo'></div>
            <div className='star-rating'>
              <div className='reviews-star-gauge'>
                <div className='reviews-star-average' style={{ width: (starCount * 20) }}></div>
              </div>
            </div>
            <p className='star-count'><span>{ starCount } Stars</span> ({ totalGoogleRounded }+ Reviews)</p>
          </div>	
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <div className='today logo'></div>
            <p>'The biggest trend out there'</p>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <div className='bhg logo'></div>
            <p>'Lull is very comfortable and<br /> super convenient.'</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ratings