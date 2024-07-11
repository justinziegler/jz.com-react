import React from 'react';
import 'lazysizes';
import 'swiper/css';
import 'swiper/css/effect-flip';
import '../scss/promotion-holiday.scss';
import { EffectFlip } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFlip } from 'swiper/modules';

function HolidayModeContent(props) {
  const mobile = (window.screen.width <= 500 && window.screen.height <= 880);
  let valueProps = [
    {
      class: 'one',
      title: 'Find Comfort in <span>Great Sleep</span>',
      content: 'Great sleep reduces stress,<br className="visible-sm" /> boosts your immune system,<br className="visible-sm visible-lg" /> and helps you stay happy.'
    }
  ]; // build this array based on above
  const vpMobile = [
    {
      class: 'four',
      title: 'Shop Safe. Sleep Well. <span>Stay Healthy.</span>',
      content: 'Lull\'s three layers of memory foam are<br className="visible-xs" /> designed to relieve pressure points and<br className="visible-xs" /> support you in all the right places.'
    },
    {
      class: 'two',
      title: 'No Store.<br />No Sales Pitch. <span>No Kidding</span>',
      content: 'Order Lull online and it arrives at<br className="visible-xs" /> your door compressed in a box.'
    }
  ]
  const vp = {
    class: 'three',
    title: 'More Sleep <span>More Happy</span>',
    content: 'You snooze you win! Sleep so good,<br className="visible-xs" /> you\'ll wake up smiling.'
  }
  if (mobile) {
    valueProps = valueProps.concat(vpMobile);
  } 
  valueProps.push(vp);

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
                      <h2>The Mattress Worth <span>Obsessing Over</span></h2>
                      <p>Fall asleep fast, stay asleep,<br class="visible-xs" /> and wake up ready to take on the day.</p>
                    </> :
                    <>
                      <h2>More Sleep <span>More Happy</span></h2>
                      <p>You snooze you win! Sleep so good, you'll wake up smiling.</p>
                    </>
                }
                  
                </div>
              </div>  
              <Swiper
                modules={[EffectFlip]} effect="flip"
                className="col-xs-12 col-sm-5 col-lg-4 col-lg-offset-1"
                flipEffect={{
                    slideShadows: false
                }}
                grabCursor='true'
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
              >
                { valueProps.map((x, index) =>
                  <SwiperSlide 
                    className={ x.class } 
                    key={ `gallery${index}` }
                  >
                    <h2>{ x.title }</h2>
                    <p>{ x.content }</p>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>

            

            {/* <div className="swiper-container col-xs-12 col-sm-5 col-lg-4 col-lg-offset-1">
              <div className="swiper-wrapper">
                <div className="swiper-slide one">
                  <h1>Find Comfort in <span>Great Sleep</span></h1>
                  <p>Great sleep reduces stress,<br className="visible-sm" /> boosts your immune system,<br className="visible-sm visible-lg" /> and helps you stay happy.</p>
                </div>
                <div className="swiper-slide four">
                  <h2>Shop Safe. Sleep Well. <span>Stay Healthy.</span></h2>
                  <p>Lull's three layers of memory foam are<br className="visible-xs" /> designed to relieve pressure points and<br className="visible-xs" /> support you in all the right places.</p>
                </div>
                <div className="swiper-slide two">
                  <h2>No Store.<br />No Sales Pitch. <span>No Kidding</span></h2>
                  <p>Order Lull online and it arrives at<br className="visible-xs" /> your door compressed in a box.</p>
                </div>
                <div className="swiper-slide three">
                  <h2>More Sleep <span>More Happy</span></h2>
                  <p>You snooze you win! Sleep so good,<br className="visible-xs" /> you'll wake up smiling.</p>
                </div>
              </div>
            </div>
            <div className="swiper-pagination mobile"></div> */}
            <a href="#" className="btn btn-default visible-xs">Shop the Mattress</a>
            <div className="clearfix"></div>
          </div>  
        </div>
      </main>
    </>
  )
}

export default HolidayModeContent;