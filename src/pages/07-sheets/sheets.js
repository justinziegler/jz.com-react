import React, { useState } from 'react';
import Main from '../../components/main';

function Sheets () {
  const page = {
    pageUrl: 'sheets',
    headerTitle: 'Sheets PDP',
    headerIntro: [
      'This product detail page allows users to easily add a custom combination of sheets, duvet cover and pillowcases.'
    ]
  }
  return (
    <Main page={ page }>
      <h1>Sheets</h1>
    </Main>
  )
}

export default Sheets;