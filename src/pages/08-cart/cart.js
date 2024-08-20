import React from 'react';
import Main from '../../components/pageSections/main';

function Cart () {
  const page = {
    pageUrl: 'cart',
    headerTitle: 'Shopping Cart',
    headerIntro: [
      'This page was A/B tested against our existing page for over a year. While it was ultimately shelved, some of the features developed here were later ported over to the existing cart. Features on display here include:'
    ],
    headerBullets: [
      'Upsells are preset to the same size as the primary cart item, but users can select another size if desired.',
      'Upsells each have a corresponding modal with an image gallery and product details.',
      'Adding and removing upsells to the cart is visually fluid.'
    ]
  }
  return (
    <Main page={ page }>
      <h1>Cart</h1>
    </Main>
  )
}

export default Cart;