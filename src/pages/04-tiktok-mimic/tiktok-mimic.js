import React from 'react';
import Main from '../../components/pageSections/main';

function TiktokMimic () {
  const page = {
    pageUrl: 'tiktok',
    headerIntro: [
      'This promotion was created to engage social media users, and it turned out to be a hit. Features on display include:'
    ],
    headerBullets: [
      'Slideshow of a dozen short videos that auto-advance when complete',
      'Popup overlays of user reviews and FAQs',
      'Email capture redirect to main website'
    ]
  }
  return (
    <Main page={ page }>
      <h1>Tiktok Mimic</h1>
    </Main>
  )
}

export default TiktokMimic;