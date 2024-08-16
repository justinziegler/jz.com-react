
import React, { useState } from 'react';
import { getProductConfig } from '../../components/utils/getProductConfig';
import Main from '../../components/main'
import ProductDisplay from '../../components/productDisplay';
import '../../scss/product-frame.scss'
import OurWay from '../../components/pageSections/ourWay';

function BedFrame () {
  const [productName, setProductName] = useState('')
  const [price, setPrice] = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  let page = getProductConfig('frame')
  page.pageUrl = 'bed-frame'
  page.header = true
  page.headerTitle = 'Bed Frame PDP'
  page.headerIntro = [
    <p>This product detail page features a number of interactive elements, including a slide-able product comparison module that I also developed the photography for.</p>
  ]

  const ourWay = [
    {
      title: 'Title One',
      titleClass: 'shipping',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis, leo in scelerisque laoreet, ligula nunc faucibus purus, at ornare lectus justo et neque. Duis hendrerit ante elit, vel congue mi luctus sed.'
    },
    {
      title: 'Title Two',
      titleClass: 'trial',
      content: 'Integer ullamcorper facilisis massa nec cursus. Praesent consequat, erat ac ullamcorper dignissim, ipsum neque fringilla orci, non condimentum mi mi vitae metus. Nunc dolor risus, semper cursus lorem cursus, efficitur placerat turpis.'
    },
    {
      title: 'Title Three',
      titleClass: 'returns',
      content: 'Phasellus eget urna vitae dolor ornare placerat condimentum vel tellus. Cras fermentum, ex ac pharetra mollis, elit enim vestibulum arcu, eget porttitor augue libero nec erat. Nam ac congue eros.'
    },
    {
      title: 'Title Four',
      titleClass: 'warranty',
      content: 'Cras vel eleifend sem. Pellentesque dignissim, felis non porta hendrerit, nunc nisl iaculis diam, nec fringilla enim mauris interdum nulla. Ut hendrerit lacus mauris, sed auctor est facilisis eget.'
    }
  ];

  return (
    <Main page={ page }>
      <ProductDisplay 
        page={ page } 
        productName={ productName }
        setProductName={ setProductName }
        price={ price } 
        setPrice={ setPrice } 
        monthlyPayment={ monthlyPayment }
        setMonthlyPayment={ setMonthlyPayment }
      />
      <OurWay ourWay={ ourWay } />
      <section className='financing-info lazyload'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-6'>
              <h2>A Luxury Bed Frame<br /> You Can Afford</h2>
              <h3>Get the { productName }<br /> for as low as</h3>
              <h4>
                <sup>$</sup>
                <span className='price monthly' data-mprice={ monthlyPayment }>/mo.</span>
              </h4>
              <p>Spread Payments Over 6 to 18 Months<br />
                As Low as 0% APR Financing Available
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='versatile'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <h2>Versatile, Luxurious and Seriously Comfortable</h2>
              <h3>The { productName } is<br className='visible-xs' /> everything you and your bedroom<br className='visible-xs' /> have been dreaming of.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className='features'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='photo lazyload col-xs-12 col-sm-6'></div>
            <div style={{ opacity: 0, height: 0, overflow: 'hidden' }}>
              {/* This is to help preload images  */}
              <div className='photo lazyload' data-current='2'></div>
              <div className='photo lazyload' data-current='3'></div>
            </div>
            <div className='content col-xs-12 col-sm-6 col-md-5 col-md-offset-1'>
              <div className='frame' data-current='1'>
                <div className='dots'>
                  <button data-slide='1' role='button' tabindex='0'>Design</button>
                  <button data-slide='2' role='button' tabindex='0'>Comfort</button>
                  <button data-slide='3' role='button' tabindex='0'>Quality</button>
                </div>
                <div className='stage'>
                  <div data-slide='1' className='design'>
                    <h4>Modern Design</h4>
                    <p>Offering a modern take on a classic design, this versatile bed frame comes tufted or untufted and in two neutral colors, to complement any bedroom.</p>
                  </div>
                  <div data-slide='2' className='comfort'>
                    <h4>Ultimate Comfort</h4>
                    <p>Indulge in unparalleled lounge-ability.  Fully upholstered in linen-like fabric and padded with high quality foam &ndash; the Lull !!! name !!! doesn't skimp on comfort.</p>
                  </div>
                  <div data-slide='3' className='quality'>
                    <h4>Quality Craftsmanship</h4>
                    <p>Materials matter.  Every component, from wood to fabric, is carefully selected to provide the best in design, quality and support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='compare lazyload'>
        <div id='handle'></div>
        <h2 data-type='UU'>Timeless Classic</h2>
        <h2 data-type='TU'>Modern Minimalism</h2>
        <ul>
          <li data-type='UU'>Classic</li>
          <li data-type='TU'>Tufted</li>
        </ul>
        <div className='photo lazyload'></div>
      </section>

      <section className='assembly'>
        <div className='container'>
          <div className='row'>
            <div className='heading col-xs-12'>
              <h2>Quick &amp; Easy Assembly</h2>
              <h3>Elevated sleep awaits.</h3>
            </div>
            <div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-12 col-md-offset-0 col-lg-10 col-lg-offset-1'>
              <div className='embed-container'>
                <video role='img' aria-label='Assembly video' autoplay playsinline loop muted>
                  <source src='../assets/frame/ubf-16x9-no-audio.mp4' className='lazyload' type='video/mp4' />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className='ethical lazyload'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='row'>
                <div className='col-xs-12'>
                  <h2>Sustainable &amp; <br className='visible-xxs' />Award-Winning</h2>
                </div>
              </div>
              <div className='content row'>
                <div className='col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-0'>
                  <div className='row'>
                    <div className='logo-col col-xs-4 col-sm-3 col-md-offset-1'>
                      <div className='logo sfc' role='img' aria-label='Logo: Sustainable Furnishing Council Member'></div>
                    </div>
                    <div className='col-xs-8 col-sm-offset-1 col-md-offset-0'>
                      <p>As a member of the Sustainable Furnishings Council Lull is committed to reducing the environmental impact of the furnishings industry, while educating ourselves and our customers on the importance of sustainability and conservation.</p>
                    </div>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-0'>
                  <div className='row'>
                    <div className='logo-col col-xs-4 col-sm-3 col-md-offset-1'>
                      <div className='logo newsweek' role='img' aria-label='Logo: Newsweek'></div>
                    </div>
                    <div className='col-xs-8 col-sm-offset-1 col-md-offset-0'>
                      <p>Lull has been recognized<br className='visible-xxs' /> as one of <strong>America's Best Trending Online Shops</strong> <br className='visible-xxs' />by Newsweek<br className='visible-xssm visible-sm' /> for our commitment to offering exceptional customer service,<br className='visible-xssm visible-md visible-lg' /> a painless ordering process,<br className='visible-xssm' /> and an easy-to-use website.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Main>
  )
}

export default BedFrame;