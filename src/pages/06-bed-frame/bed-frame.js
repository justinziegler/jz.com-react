import React, { useState } from 'react';
import Main from '../../components/main';

function BedFrame () {
  const page = {
    pageUrl: 'bed-frame',
    headerTitle: 'Bed Frame PDP',
      headerIntro: [
        'This product detail page features a number of interactive elements, including a slide-able product comparison module that I also developed the photography for.'
      ]
  }
  return (
    <Main page={ page }>
      <h1>Bed Frame</h1>
    </Main>
  )
}

export default BedFrame;