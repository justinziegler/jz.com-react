import holidayModeThumb from '../assets/home/holiday-mode.jpg'
import tiktok           from '../assets/home/tiktok.jpg'
import productDisplay1  from '../assets/home/pd1.jpg'
import productDisplay2  from '../assets/home/pd2.jpg'
import productDisplay3  from '../assets/home/pd3.jpg' 
import mattress         from '../assets/home/mattress.jpg'
import frame            from '../assets/home/frame.jpg'
import sheets           from '../assets/home/sheets.jpg'
import cart             from '../assets/home/cart.jpg'

const pageDetails = [
  {
    url: '/',
    title: 'Home',
    intro: [
      <>I am a <strong>detail-oriented web developer</strong> specializing in  <strong>compelling user experiences</strong>. The links included here contain a few of my favorite projects, all rebuilt in <strong>React.</strong></>,
      <><strong>Source code</strong> for everything on this site can be found on <a href='https://github.com/justinziegler' target='_blank' rel='noreferrer' tabIndex='0'>my Github</a>.</>
    ],
    skills: [
      <>HTML</>,
      <>CSS</>,
      <>SCSS</>,
      <>JavaScript</>,
      <>JQuery</>,
      <>Node.js</>,
      <>React</>,
      <>Vue.js</>,
      <>Nunjucks / Jinja</>,
      <>Github</>,
      <>Adobe Photoshop &amp; Illustrator</>
    ]
  },
  {
    url: 'holiday-mode',
    title: 'Holiday Mode',
    intro: [
      <>At a previous position, we would theme the website for holiday sales multiple times a year, reverting to 'normal' after the holiday. In an effort to make this process less time-consuming, I developed <strong>Holiday Mode</strong> for the site. With <strong>Holiday Mode</strong>, we were able to switch between regular and holiday content by simply updating one variable.</>,
      <>Use the links below to toggle between the two versions.</>
    ],
    background: holidayModeThumb,
    toggleLinks: true
  },
  {
    url: 'tiktok',
    title: 'Tiktok Mimic',
    intro: [
      <>This promotion was created to engage social media users, and it turned out to be a hit. Features on display include:</>
    ],
    bullets: [
      'Slideshow of a dozen short videos that auto-advance when complete',
      'Popup overlays of user reviews and FAQs',
      'Email capture redirect to main website'
    ],
    background: tiktok
  },
  {
    url: 'product-display-mattress',
    title: <>Product Display &ndash; Basic</>,
    intro: [ 
      <>The next couple pages highlight the features of a <strong>Product Display</strong> component that I developed to support a line of bedding products. This is the basic configuration, which allows users to browse product details, view product images, and add a product to the cart.</>
    ],
    background: productDisplay1,
    backgroundColor: '#f7f5f3'
  },
  {
    title: 'Product Display with Options',
    url: 'product-display-frame',
    intro: [
      <>This is a more complex configuration of the <strong>Product Display</strong> component that offers customers a choice between fabric colors and model types. Product photos will change depending upon the user's selection, and the final product slide displays the dimensions of the currently selected product size.</>
    ],
    background: productDisplay2,
    backgroundColor: '#f7f5f3'
  },
  {
    title: 'Product Display with Upsells',
    url: 'product-display-sheets',
    intro: [
      <>This configuration of the <strong>Product Display</strong> component sorts through over 40 product variations, plus more than 100 upsell products from 6 product lines. The upsells update their currently offered product size when the main product size selection changes. In addition, the gallery updates with each selected bedding color.</>
    ],
    background: productDisplay3,
    backgroundColor: '#f7f5f3'
  },
  {
    title: <>Product Detail Page &ndash; Mattress</>,
    url: 'mattress',
    intro: [
      <>This <strong>Product Detail Page</strong> includes multiple interactive sections and features extensive image retouching work throughout.</>,
    ],
    background: mattress
  },
  {
    title: <>Product Detail Page &ndash; Frame</>,
    url: 'bed-frame',
    intro: [
      <>My favorite section on this <strong>Product Detail Page</strong> is the <strong>frame comparison slider</strong> (titled 'Timeless Classic'). You can see the tufted and untufted headboards side-by-side in a bedroom setting, and changing colors in the <strong>Product Display</strong> section updates the frame color in this section. Creating the images for this section was challenging on its own and required compositing from several source images.</>
    ],
    background: frame
  },
  {
    title: <>Product Detail Page &ndash; Sheets</>,
    url: 'sheets',
    intro: [
      <>This <strong>Product Detail Page</strong> includes multiple interactive sections and features extensive image retouching work throughout.</>
    ],
    background: sheets
  },
  {
    title: 'Shopping Cart',
    url: 'cart',
    intro: [
      <>This <strong>Cart</strong> was A/B tested against the original page for over a year. While it was ultimately shelved, some of the features developed here were later added to the original page. In addition to a refreshed interface, this page was designed to be a more visually fluid experience while interacting with cart items and upsells.</>
    ],
    background: cart
  }, 
]

export { pageDetails };