import React, { useState } from 'react';
import { vpMobile } from '../../../components/constants';

function ValuePropsDeuxSlideContent(props) {
 return (
  <div className="slide-content col-sm-6">
    <div className="vp one" data-active={ props.vpIndex === 0}>
      <h1>More Sleep <span>More Happy</span></h1>
      <p>You snooze you win! Sleep so good,<br /> you’ll wake up smiling.</p>
      <a href="#" className="btn btn-default hidden-xs">Shop the Mattress</a>
      <div className="swiper-pagination"></div>
    </div>
    <div className="vp two" data-active={ props.vpIndex === 1}>
      <h2>No Store.<br />No Sales Pitch. <span>No Kidding</span></h2>
      <p>Order Lull online and it arrives<br className="hidden-xs" /> at your door compressed in a box.</p>
      <a href="@" className="btn btn-default hidden-xs">Shop the Mattress</a>
      <div className="swiper-pagination hidden-xs"></div>
    </div>
  </div>
 )
}

export default ValuePropsDeuxSlideContent;