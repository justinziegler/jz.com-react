import React, { useState } from 'react';
import Main from '../../components/main';

function ValuePropositions () {
  const page = {
    pageUrl: 'value-props',
    headerTitle: 'Value Propositions',
    headerIntro: [
      <p>I would often be tasked with developing page sections that looked and functioned differently depending on device type. This project came about from a desire to build something lightweight that allowed for alternate functionality on different devices. This page features a swipe-able slideshow on mobile and a content accordion on larger screens. Check out the <a href="mattress-animation">following page</a> for another example.'</p>
    ]
  }
  return (
    <Main page={ page }>
      <h1>Value Propositions</h1>
    </Main>
  )
}

export default ValuePropositions;