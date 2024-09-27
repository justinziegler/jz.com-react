import React        from 'react';
import { vpMobile } from '../../home/content/constants';

function Content(props) {
 return (
  <div className="slide-content col-xs-6">
    <div className="vp one" data-active={ props.currentIndex === 0}>
      <h1>Find Comfort in <span>Great Sleep</span></h1>
      <p>Great sleep reduces stress,<br className="visible-sm" /> boosts your immune system,<br className="visible-sm visible-lg" /> and helps you stay happy.</p>
      <a href="#" className="btn btn-default hidden-xs">Shop the Mattress</a>
      <div className="swiper-pagination hidden-xs"></div>
    </div>

    <div className="vp four" data-active={ props.currentIndex === 3}>
      <h2>Built For <span>Beauty Sleep</span></h2>
      <p>Lull's three layers of memory foam are designed to relieve pressure points and support you in all the right places.</p>
    </div>
    <div className="vp two" data-active={ props.currentIndex === 1}>
      <h2>Shop Safe. Sleep Well. <span>Stay Healthy.</span></h2>
      <p>Lull's three layers of memory foam are<br /> designed to relieve pressure points and<br /> support you in all the right places.</p>
      <a href="#" className="btn btn-default hidden-xs">Shop the Mattress</a>
      <div className="swiper-pagination hidden-xs"></div>
    </div>
    <div className="vp three" data-active={ props.currentIndex === 2}>
      { vpMobile ? 
        <>
          <h2>The Mattress Worth <span>Obsessing Over</span></h2>
          <p>Fall asleep fast, stay asleep,<br className="visible-xs" /> and wake up ready to take on the day.</p>
        </> :
        <>
          <h2>More Sleep <span>More Happy</span></h2>
          <p>You snooze you win! Sleep so good, you'll wake up smiling.</p>
        </>
      }
    </div>
  </div>  
 )
}

export default Content;