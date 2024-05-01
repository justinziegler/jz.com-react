import React from 'react';

const galleryContent = [
  {
    id: 1,
    group: 'recently',
    category: 'products',
    class: 'divider',
    images: '',
    content: 
      <div>
        <h2>Recently<span></span></h2>
        <p>
          I spent the last few years building and refining the web presence of a bedding startup.<br /> 
          After joining the company in its first year, I worked on every corner of the website<br /> 
          as the product catalog slowly grew from one line to more than fifteen.
        </p>
        <p>
          The following slides contain a few of my favorite recent projects.<br />
          Thanks for visiting!
        </p>
      </div>
  },
  {
    id: 2,
    group: 'shop',
    category: 'products',
    class: 'cat1',
    groupSlide: 1,
    images: ['products/shop-d.jpg'],
    mobile: false,
    title: 'Original Mattress',
    type: 'Product Page',
    description: 'Showcase offering three mattress tiers. Includes animations and interactive elements. Page content swaps depending on selected product type.',
    link: 'https://lull.com/shop',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 3,
    group: 'shop',
    category: 'products',
    class: 'cat1',
    groupSlide: 2,
    images: ['products/shop-m.jpg'],
    mobile: true,
    title: 'Original Mattress',
    type: 'Product Page',
    description: 'Showcase offering three mattress tiers. Includes animations and interactive elements. Page content swaps depending on selected product type.',
    link: 'https://lull.com/shop',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 4,
    group: 'islay',
    category: 'products',
    class: 'cat1',
    groupSlide: 1,
    images: ['products/islay-d.jpg'],
    mobile: false,
    title: 'Islay Bed Frame',
    type: 'Product Page',
    description: 'Showcase offering a bed frame with color and headboard options. Includes interactive headboard comparison tool.',
    link: 'https://lull.com/islay-upholstered-bed',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 5,
    group: 'islay',
    category: 'products',
    class: 'cat1',
    groupSlide: 2,
    images: ['products/islay-m.jpg'],
    mobile: true,
    title: 'Islay Bed Frame',
    type: 'Product Page',
    description: 'Showcase offering a bed frame with color and headboard options. Includes interactive headboard comparison tool.',
    link: 'https://lull.com/islay-upholstered-bed',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 6,
    group: 'sheets',
    category: 'products',
    class: 'cat1',
    groupSlide: 1,
    images: ['products/sheets-d.jpg'],
    mobile: false,
    title: 'Cotton Sheets',
    type: 'Product Page',
    description: 'Showcase offering sheets in a variety of colors & patterns. Includes upsell module that offers additional products that are appropriate to the currently selected item.',
    link: 'https://lull.com/cotton-sheets',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 7,
    group: 'sheets',
    category: 'products',
    class: 'cat1',
    groupSlide: 2,
    images: ['products/sheets-m.jpg'],
    mobile: true,
    title: 'Cotton Sheets',
    type: 'Product Page',
    description: 'Showcase offering sheets in a variety of colors & patterns. Includes upsell module that offers additional products that are appropriate to the currently selected item.',
    link: 'https://lull.com/cotton-sheets',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 8,
    group: 'cl-01-04',
    category: 'promos',
    class: 'cat2',
    groupSlide: 1,
    images: ['promos/cl-01-04-d.jpg'],
    mobile: false,
    title: '\'Best Sleep Ever\'',
    type: 'Promo Page',
    description: 'Promotional page for a targeted marketing campaign. Includes animations and interactive elements.',
    link: 'https://lull.com/cl-01-04',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 9,
    group: 'cl-01-04',
    category: 'promos',
    class: 'cat2',
    groupSlide: 2,
    images: ['promos/cl-01-04-m.jpg'],
    mobile: true,
    title: '\'Best Sleep Ever\'',
    type: 'Promo Page',
    description: 'Promotional page for a targeted marketing campaign. Includes animations and interactive elements.',
    link: 'https://lull.com/cl-01-04',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 10,
    group: 'cl-03-01',
    category: 'promos',
    class: 'cat2',
    groupSlide: 1,
    images: ['promos/cl-03-01-d.jpg'],
    mobile: false,
    title: '\'Dream Mattress\'',
    type: 'Promo Page',
    description: 'Promotional page for a social media-targeted marketing campaign. Includes animations and interactive elements.',
    link: 'https://lull.com/cl-03-01',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 11,
    group: 'cl-03-01',
    category: 'promos',
    class: 'cat2',
    groupSlide: 2,
    images: ['promos/cl-03-01-m.jpg'],
    mobile: true,
    title: '\'Dream Mattress\'',
    type: 'Promo Page',
    description: 'Promotional page for a social media-targeted marketing campaign. Includes animations and interactive elements.',
    link: 'https://lull.com/cl-03-01',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 12,
    group: 'pr-05-03',
    category: 'promos',
    class: 'cat2',
    groupSlide: 1,
    images: ['promos/pr-05-03-d.jpg'],
    mobile: false,
    title: '\'Great Sleep\'',
    type: 'Promo Page',
    description: 'Promotional page for a social media-targeted marketing campaign. Includes animations and interactive elements.',
    link: 'https://lull.com/cl-03-01',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 13,
    group: 'pr-05-03',
    category: 'promos',
    class: 'cat2',
    groupSlide: 2,
    images: ['promos/pr-05-03-m.jpg'],
    mobile: true,
    title: '\'Great Sleep\'',
    type: 'Promo Page',
    description: 'Promotional page for a social media-targeted marketing campaign. Includes animations and interactive elements.',
    link: 'https://lull.com/cl-03-01',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 14,
    group: 'tiktok',
    category: 'promos',
    class: 'cat2',
    groupSlide: 1,
    images: ['promos/tiktok-01.jpg', 'promos/tiktok-02.jpg'],
    mobile: true,
    title: '\'Tiktok Copycat\'',
    type: 'Promo Page',
    description: 'Tiktok-styled mobile promotional page for a social media-targeted marketing campaign. Videos advance manually or automatically.',
    link: 'https://lull.com/tksale',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 15,
    group: 'tiktok',
    category: 'promos',
    class: 'cat2',
    groupSlide: 2,
    images: ['promos/tiktok-03.jpg', 'promos/tiktok-04.jpg'],
    mobile: true,
    title: '\'Tiktok Copycat\'',
    type: 'Promo Page',
    description: 'Tiktok-styled mobile promotional page for a social media-targeted marketing campaign. Videos advance manually or automatically.',
    link: 'https://lull.com/tksale',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 16,
    group: 'cart',
    category: 'checkout',
    class: 'cat3',
    groupSlide: 1,
    images: ['checkout/cart-d.jpg'],
    mobile: false,
    title: 'Shopping Cart',
    type: 'Checkout Page',
    description: 'Shopping cart with order management features. Upsells offered are tailored to the cart\'s contents.',
    link: 'https://lull.com/cart',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 17,
    group: 'cart',
    category: 'checkout',
    class: 'cat3',
    groupSlide: 2,
    images: ['checkout/cart-m.jpg'],
    mobile: true,
    title: 'Shopping Cart',
    type: 'Checkout Page',
    description: 'Shopping cart with order management features. Upsells offered are tailored to the cart\'s contents.',
    link: 'https://lull.com/cart',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 18,
    group: 'address',
    category: 'checkout',
    class: 'cat3',
    groupSlide: 1,
    images: ['checkout/address-d.jpg'],
    mobile: false,
    title: 'Address Page',
    type: 'Checkout Page',
    description: '',
    link: 'https://lull.com/checkout/address',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 19,
    group: 'address',
    category: 'checkout',
    class: 'cat3',
    groupSlide: 2,
    images: ['checkout/address-m-1.jpg', 'checkout/address-m-2.jpg'],
    mobile: true,
    title: 'Address Page',
    type: 'Checkout Page',
    description: '',
    link: 'https://lull.com/checkout/address',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 20,
    group: 'payment',
    category: 'checkout',
    class: 'cat3',
    groupSlide: 1,
    images: ['checkout/payment-d.jpg'],
    mobile: false,
    title: 'Payment Page',
    type: 'Checkout Page',
    description: '',
    link: 'https://lull.com/checkout/payment',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  },
  {
    id: 21,
    group: 'payment',
    category: 'checkout',
    class: 'cat3',
    groupSlide: 2,
    images: ['checkout/payment-m.jpg'],
    mobile: true,
    title: 'Payment Page',
    type: 'Checkout Page',
    description: '',
    link: 'https://lull.com/checkout/payment',
    tools: ['HTML', 'Nunjucks', 'jQuery', 'SCSS / CSS', 'Photoshop', 'Imgix']
  }
]

export { galleryContent };