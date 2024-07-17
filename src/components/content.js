import holidayModeThumb from '../assets/holiday-promotion/carousel01-mob-vp.jpg';
import valueProps from '../assets/luxe-vp-couple-md.jpg'
import exploded from '../assets/exploded-thumb.jpg'
import tiktok from '../assets/promos/tiktok-02.jpg'
import productDisplay from '../assets/sheets/closeup-making-bed.jpg'
import frame from '../assets/frame/couple-in-bed-mobile.jpg'
import sheets from '../assets/sheets/photo-parachute.jpg'
import cart from '../assets/wood-frame-2.jpg'

const pageDetails = [
  {
    title: 'Holiday Mode',
    url: 'holiday-mode',
    intro: 'Several times a year we would theme key pages on the site for different holiday sales, then return them to normal after the holiday. In an effort to make this process less time-consuming, I developed Holiday Mode for the site. With Holiday Mode, we were able to switch between regular and holiday content by simply updating one variable. Use the links below to toggle between the two versions. ',
    background: holidayModeThumb
  },
  {
    title: 'Value Propositions',
    url: 'value-props',
    intro: 'In my previous position, I would often be required to develop page sections that looked and functioned differently depending if users were on mobile vs. a larger screen. This project came about from a desire to:',
    background: valueProps
  },
  {
    title: 'Exploded Product View',
    url: 'mattress-animation',
    intro: 'In my previous position, I would often be required to develop page sections that looked and functioned different ly depending if users were on mobile vs. a larger screen. This project came about from a desire to:',
    background: exploded
  },
  {
    title: 'Tiktok Mimic',
    url: 'tiktok',
    intro: 'Tiktok-styled mobile promotional page for a social media-targeted marketing campaign. Videos advance manually or automatically.',
    background: tiktok
  },
  {
    title: 'Product Display',
    url: 'product-display',
    intro: 'The following pages highlight the features of a Product Display module that I developed to support a line of bedding products. This project came about from a need to:',
    background: productDisplay
  },
  {
    title: 'Bed Frame PDP',
    url: 'bed-frame',
    intro: 'The following pages highlight the features of a Product Display template that I developed to support a line of bedding products. This project came about from a need to:',
    background: frame
  },
  {
    title: 'Bed Sheets PDP',
    url: 'sheets',
    intro: 'The following pages highlight the features of a Product Display template that I developed to support a line of bedding products. This project came about from a need to:',
    background: sheets
  },
  {
    title: 'Shopping Cart',
    url: 'cart',
    intro: 'This page was developed to replace the company\'s existing shopping cart with an experience that:',
    background: cart
  }, 
]

const navLinks = [
  {
    title: 'Github',
    link: 'https://github.com/justinziegler',
    target: '_blank',
    class: 'gh'
  },
  {
    title: 'Resume',
    link: '../assets/resume-JustinZiegler-2024.pdf',
    target: '_blank',
    class: 'resume'
  },
  {
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/jzieglersb',
    target: '_blank',
    class: 'li'
  },
  {
    title: 'Email',
    email: 'justin.ziegler@gmail.com',
    link: 'mailto:justin.ziegler@gmail.com',
    target: '',
    class: 'email'
  }
]

export { pageDetails, navLinks, holidayModeThumb };