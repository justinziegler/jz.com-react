import React, { useState } from 'react';
import Main from '../../components/main';

function MattressAnimation () {
  const page = {
    pageUrl: 'mattress-animation',
    headerTitle: 'Exploded Product View',
    headerIntro: [
      'This is another example utilizing the slideshow script from the <a href="value-props">previous page</a>. On display here is a swipe-able slideshow of text content with a corresponding animation of mattress layers.'
    ]
  }
  return (
    <Main page={ page }>
      <h1>Mattress Animation</h1>
    </Main>
  )
}

export default MattressAnimation;