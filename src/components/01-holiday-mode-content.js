import React from 'react';
import 'lazysizes';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element';
import { Pagination } from 'swiper/modules';
import { EffectFlip } from 'swiper/modules/effect-flip';
import { Autoplay } from 'swiper/modules/autoplay';
import { Virtual } from 'swiper/modules/virtual';
register();
import 'swiper/css';
import 'swiper/css/pagination';
import '../scss/promotion-holiday.scss';

const mobile = (window.screen.width <= 500 && window.screen.height <= 880);

function HolidayModeContent(props) {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Mr+Dafoe" rel="stylesheet"></link>
      <main>
        <div className="hero">
          <div className="container">
            <div className="row">
              <div className="column three col-xs-4">
                <div className="group one">
                  <div className="pic pic1 lazyload"></div>
                  <div className="pic pic2 lazyload"></div>
                  <div className="pic pic3 lazyload"></div>
                  <div className="pic pic1 lazyload"></div>
                  <div className="pic pic2 lazyload"></div>
                  <div className="pic pic3 lazyload"></div>
                  <div className="pic pic1 lazyload"></div>
                </div>
                <div className="group two">
                  <div className="pic pic1 lazyload"></div>
                  <div className="pic pic2 lazyload"></div>
                  <div className="pic pic3 lazyload"></div>
                  <div className="pic pic1 lazyload"></div>
                  <div className="pic pic2 lazyload"></div>
                  <div className="pic pic3 lazyload"></div>
                  <div className="pic pic1 lazyload"></div>
                </div>
                <div className="group three">
                  <div className="pic pic1 lazyload"></div>
                  <div className="pic pic2 lazyload"></div>
                  <div className="pic pic3 lazyload"></div>
                  <div className="pic pic1 lazyload"></div>
                  <div className="pic pic2 lazyload"></div>
                  <div className="pic pic3 lazyload"></div>
                  <div className="pic pic1 lazyload"></div>
                </div>
              </div>
              <div className="column four col-xs-4">
                <div className="group four">
                  <div className="pic pic1 lazyload"></div>
                  <div className="pic pic2 lazyload"></div>
                  <div className="pic pic3 lazyload"></div>
                  <div className="pic pic1 lazyload"></div>
                  <div className="pic pic2 lazyload"></div>
                  <div className="pic pic3 lazyload"></div>
                </div>
              </div>
              <div className="column five col-xs-4">
                <div className="group five">
                  <div className="pic pic1 lazyload"></div>
                  <div className="pic pic2 lazyload"></div>
                  <div className="pic pic3 lazyload"></div>
                  <div className="pic pic1 lazyload"></div>
                  <div className="pic pic2 lazyload"></div>
                  <div className="pic pic3 lazyload"></div>
                  <div className="pic pic1 lazyload"></div>
                </div>
              </div>
              
              <div className="group six">
                <div className="pic pic1 lazyload"></div>
                <div className="pic pic2 lazyload"></div>
                <div className="pic pic3 lazyload"></div>
                <div className="pic pic1 lazyload"></div>
                <div className="pic pic2 lazyload"></div>
                <div className="pic pic3 lazyload"></div>
                <div className="pic pic1 lazyload"></div>
              </div>
              
            </div>
          </div>
          <div className="logo"></div>
          { props.holidayMode ?
            <>
              <p>Life changing sleep from sea to shining sea.<br /> Don't miss our Labor Day Sale.</p>
              <a className="down-arrow" href="#july4-promo">More</a>
            </>
          :
            <>
              <p>Check Out the Mattress<br /> That's Changing Lives</p>
              <a className="down-arrow" href="#top-section">More</a>
            </>
          }
        </div>

        { props.holidayMode &&
          <h1>Add July 4 promo</h1>
        }

        <div id="value-props">
          <a name="top-section" className="anchor"></a>
          <div className="container">
            <div className="row">
              <div className="slide-content col-xs-6">
                <div className="vp one">
                  <h1>Find Comfort in <span>Great Sleep</span></h1>
                  <p>Great sleep reduces stress,<br className="visible-sm" /> boosts your immune system,<br className="visible-sm visible-lg" /> and helps you stay happy.</p>
                  <a href="#" className="btn btn-default hidden-xs">Shop the Mattress</a>
                  <div className="swiper-pagination hidden-xs"></div>
                </div>
                <div className="vp four">
                  <h2>Built For <span>Beauty Sleep</span></h2>
                  <p>Lull's three layers of memory foam are designed to relieve pressure points and support you in all the right places.</p>
                </div>
                <div className="vp two">
                  <h2>Shop Safe. Sleep Well. <span>Stay Healthy.</span></h2>
                  <p>Lull's three layers of memory foam are<br /> designed to relieve pressure points and<br /> support you in all the right places.</p>
                  <a href="#" className="btn btn-default hidden-xs">Shop the Mattress</a>
                  <div className="swiper-pagination hidden-xs"></div>
                </div>
                <div className="vp three">
                  { mobile ?
                    <>
                      <h2>More Sleep <span>More Happy</span></h2>
                      <p>You snooze you win! Sleep so good, you'll wake up smiling.</p>
                    </>
                  : 
                    <>
                      <h2>The Mattress Worth <span>Obsessing Over</span></h2>
                      <p>Fall asleep fast, stay asleep,<br className="visible-xs" /> and wake up ready to take on the day.</p>
                    </>
                  }
                  
                </div>
              </div>  
              
              <swiper-container
                className="col-xs-12 col-sm-5 col-lg-4 col-lg-offset-1"
                modules={[Pagination, EffectFlip, Autoplay, Virtual]}
                effect="flip"
                flipEffect={{ slideShadows: false }}
                grabCursor={ true }
                autoplay={{ delay: 5000, disableOnInteraction: true }}
                pagination={{ el: '#value-props .swiper-pagination', clickable: true }}
                // onSlideChange={() => {
                //   const currentIndex =  { virtualIndex };
                //   console.log('currentIndex', currentIndex)
                // }}
              >

                <swiper-slide className="one">
                  <h1>Find Comfort in <span>Great Sleep</span></h1>
                  <p>Great sleep reduces stress,<br className="visible-sm" /> boosts your immune system,<br className="visible-sm visible-lg" /> and helps you stay happy.</p>

                  {({ isActive }) => (
      <div>Current slide is {isActive ? 'active' : 'not active'}</div>
    )}
                </swiper-slide>

                <swiper-slide className="four">
                  <h2>Shop Safe. Sleep Well. <span>Stay Healthy.</span></h2>
                  <p>Lull's three layers of memory foam are<br className="visible-xs" /> designed to relieve pressure points and<br className="visible-xs" /> support you in all the right places.</p>
                </swiper-slide>

                { mobile &&
                  <>
                    <swiper-slide className="two">
                      <h2>No Store.<br />No Sales Pitch. <span>No Kidding</span></h2>
                      <p>Order Lull online and it arrives at<br className="visible-xs" /> your door compressed in a box.</p>
                    </swiper-slide>

                    <swiper-slide className="three">
                      <h2>More Sleep <span>More Happy</span></h2>
                      <p>You snooze you win! Sleep so good,<br className="visible-xs" /> you'll wake up smiling.</p>
                    </swiper-slide>
                  </>
                }
              </swiper-container>
              <div className="swiper-pagination mobile"></div>
              <a href="{{ ctaLink }}" className="btn btn-default visible-xs">Shop the Mattress</a>
              <div className="clearfix"></div>
            </div>
          </div>  
        </div>
      </main>
    </>
  )
}

export default HolidayModeContent;