import React from 'react';
import 'lazysizes';
import '../scss/promotion-holiday.scss';

function HolidayModeContent(props) {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Mr+Dafoe" rel="stylesheet"></link>
      <main>
        <div class="hero">
          <div class="container">
            <div class="row">
              <div class="column three col-xs-4">
                <div class="group one">
                  <div class="pic pic1 lazyload"></div>
                  <div class="pic pic2 lazyload"></div>
                  <div class="pic pic3 lazyload"></div>
                  <div class="pic pic1 lazyload"></div>
                  <div class="pic pic2 lazyload"></div>
                  <div class="pic pic3 lazyload"></div>
                  <div class="pic pic1 lazyload"></div>
                </div>
                <div class="group two">
                  <div class="pic pic1 lazyload"></div>
                  <div class="pic pic2 lazyload"></div>
                  <div class="pic pic3 lazyload"></div>
                  <div class="pic pic1 lazyload"></div>
                  <div class="pic pic2 lazyload"></div>
                  <div class="pic pic3 lazyload"></div>
                  <div class="pic pic1 lazyload"></div>
                </div>
                <div class="group three">
                  <div class="pic pic1 lazyload"></div>
                  <div class="pic pic2 lazyload"></div>
                  <div class="pic pic3 lazyload"></div>
                  <div class="pic pic1 lazyload"></div>
                  <div class="pic pic2 lazyload"></div>
                  <div class="pic pic3 lazyload"></div>
                  <div class="pic pic1 lazyload"></div>
                </div>
              </div>
              <div class="column four col-xs-4">
                <div class="group four">
                  <div class="pic pic1 lazyload"></div>
                  <div class="pic pic2 lazyload"></div>
                  <div class="pic pic3 lazyload"></div>
                  <div class="pic pic1 lazyload"></div>
                  <div class="pic pic2 lazyload"></div>
                  <div class="pic pic3 lazyload"></div>
                </div>
              </div>
              <div class="column five col-xs-4">
                <div class="group five">
                  <div class="pic pic1 lazyload"></div>
                  <div class="pic pic2 lazyload"></div>
                  <div class="pic pic3 lazyload"></div>
                  <div class="pic pic1 lazyload"></div>
                  <div class="pic pic2 lazyload"></div>
                  <div class="pic pic3 lazyload"></div>
                  <div class="pic pic1 lazyload"></div>
                </div>
              </div>
              
              <div class="group six">
                <div class="pic pic1 lazyload"></div>
                <div class="pic pic2 lazyload"></div>
                <div class="pic pic3 lazyload"></div>
                <div class="pic pic1 lazyload"></div>
                <div class="pic pic2 lazyload"></div>
                <div class="pic pic3 lazyload"></div>
                <div class="pic pic1 lazyload"></div>
              </div>
              
            </div>
          </div>
          <div class="logo"></div>
          { props.holidayMode ?
            <>
              <p>Life changing sleep from sea to shining sea.<br /> Don't miss our Labor Day Sale.</p>
              <a class="down-arrow" href="#july4-promo">More</a>
            </>
          :
            <>
              <p>Check Out the Mattress<br /> That's Changing Lives</p>
              <a class="down-arrow" href="#top-section">More</a>
            </>
          }
        </div>

        { props.holidayMode &&
          <h1>Add July 4 promo</h1>
        }

        <div id="value-props">
          <a name="top-section" class="anchor"></a>
          <div class="container">
            <div class="row">
              <div class="slide-content col-xs-6">
                <div class="vp one">
                  <h1>Find Comfort in <span>Great Sleep</span></h1>
                  <p>Great sleep reduces stress,<br class="visible-sm" /> boosts your immune system,<br class="visible-sm visible-lg" /> and helps you stay happy.</p>
                  <a href="#" class="btn btn-default hidden-xs">Shop the Mattress</a>
                  <div class="swiper-pagination hidden-xs"></div>
                </div>
                <div class="vp four">
                  <h2>Built For <span>Beauty Sleep</span></h2>
                  <p>Lull's three layers of memory foam are designed to relieve pressure points and support you in all the right places.</p>
                </div>
                <div class="vp two">
                  <h2>Shop Safe. Sleep Well. <span>Stay Healthy.</span></h2>
                  <p>Lull's three layers of memory foam are<br /> designed to relieve pressure points and<br /> support you in all the right places.</p>
                  <a href="#" class="btn btn-default hidden-xs">Shop the Mattress</a>
                  <div class="swiper-pagination hidden-xs"></div>
                </div>
                <div class="vp three">
                  <h2>More Sleep <span>More Happy</span></h2>
                  <p>You snooze you win! Sleep so good, you'll wake up smiling.</p>
                </div>
              </div>  
            </div>

            <div class="swiper-container col-xs-12 col-sm-5 col-lg-4 col-lg-offset-1">
              <div class="swiper-wrapper">
                <div class="swiper-slide one">
                  <h1>Find Comfort in <span>Great Sleep</span></h1>
                  <p>Great sleep reduces stress,<br class="visible-sm" /> boosts your immune system,<br class="visible-sm visible-lg" /> and helps you stay happy.</p>
                </div>
                <div class="swiper-slide four">
                  <h2>Shop Safe. Sleep Well. <span>Stay Healthy.</span></h2>
                  <p>Lull's three layers of memory foam are<br class="visible-xs" /> designed to relieve pressure points and<br class="visible-xs" /> support you in all the right places.</p>
                </div>
                <div class="swiper-slide two">
                  <h2>No Store.<br />No Sales Pitch. <span>No Kidding</span></h2>
                  <p>Order Lull online and it arrives at<br class="visible-xs" /> your door compressed in a box.</p>
                </div>
                <div class="swiper-slide three">
                  <h2>More Sleep <span>More Happy</span></h2>
                  <p>You snooze you win! Sleep so good,<br class="visible-xs" /> you'll wake up smiling.</p>
                </div>
              </div>
            </div>
            <div class="swiper-pagination mobile"></div>
            <a href="#" class="btn btn-default visible-xs">Shop the Mattress</a>
            <div class="clearfix"></div>
          </div>  
        </div>
      </main>
    </>
  )
}

export default HolidayModeContent;