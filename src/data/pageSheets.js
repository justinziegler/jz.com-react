import { getColorName }    from '../components/utils/getColorName'
import { numberWithCommas} from '../components/utils/numberWithCommas'
import { getPageId }       from '../components/utils/getPageId'
import { getProductSkus }  from '../components/utils/getProductSkus'
import video               from '../assets/sheets/organic-sheets-16x9-web.mp4'

const pageUrl = 'sheets'
const catIds = [30]
const discount = 70
const skus = getProductSkus(catIds, discount)
const pageId = getPageId(pageUrl)

const duvetCoverCatIds = [31, 32, 33]
const dcDiscount = 20
const duvetCoverSkus = getProductSkus(duvetCoverCatIds, dcDiscount)
    
const pillowcaseCatIds = [34, 35, 36]
const pcDiscount = 20
const pillowcaseSkus = getProductSkus(pillowcaseCatIds, pcDiscount)


const pageSheets = [
  {
    skus: skus,
    catIds: catIds,
    defaultCatId: 31,
    defaultProductType: 'OC',
    catSizes: 6,
    productType: 'sheets',
    discountActual: discount,
    pageUrl: pageUrl,
    pageId: pageId,
    gallerySlides: 5,
    galleryDimensions: 0,
    galleryVideo: true,
    galleryVideoSlide: 5,
    galleryVideoSource: '',
    galleryVideoUrl: video,
    galleryVideoPoster: '../assets/sheets/organic-sheets-16x9-web.mp4?fm=jpg&w=840&frame=1',
    longTitle: false,
    heading: 'The Organic Cotton Sheets',
    subheading: '100% organic cotton sheets crafted with comfort, wellness, and luxury in mind.',
    ratings: [
      { 
        stars: true,
        total: numberWithCommas(6543),
        average: 4.5,
        tooltip: true,
        tooltipFootnote: '*Reviews based on the Original Sheets set'
      }
    ],
    deliveryWindowText: <p>Included:<br />Fitted sheet, top sheet and <span className="hidden-xs">matching</span> <span className="pillowcase">pillowcase</span></p>,
    readyToShipMessage: true,
    sizeGuide: false,
    productDimensions: false,
    colorSelection: true,
    colorDisplayOrder: [ 
      { color: 'BW', colorName: getColorName('BW') }, 
      { color: 'QG', colorName: getColorName('QG') }, 
      { color: 'GG', colorName: getColorName('GG') }, 
      { color: 'MB', colorName: getColorName('MB') }, 
      { color: 'PA', colorName: getColorName('PA') }, 
      { color: 'WP', colorName: getColorName('WP') }, 
      { color: 'CD', colorName: getColorName('CD') }
    ],
    defaultColor: 'MB',
    defaultColorName: getColorName('MB'),
    qtySelection: false,
    maxQty: 1,
    productImage: '../assets/sheets-wh-01.jpg',
    financingSection: false,
    upsellModal: false,
    upsellModalCatId: 0,
    upsell: true,
    upsellListTitle: 'Complete Your Bed',
    upsellListSubtitle: 'Everything you need for great sleep',
    upsellMinimum: 1,
    upsells: [
      {
        skus: duvetCoverSkus,
        catIds: [31, 32, 33],
        catSizes: 3,
        defaultCatId: 33,
        category: 'bedding',
        slug: 'duvet-cover',
        name: 'Add a Duvet Cover',
        title: 'The Lull Duvet Cover',
        longtitle: false,
        subtitle: '',
        colorFilter: false,
        filteredColor: '',
        matchColor: false,
        colorSelection: true,
        colorDisplayOrder: [ 
          { color: 'BW', colorName: getColorName('BW') }, 
          { color: 'QG', colorName: getColorName('QG') }, 
          { color: 'GG', colorName: getColorName('GG') }, 
          { color: 'MB', colorName: getColorName('MB') }, 
          { color: 'PA', colorName: getColorName('PA') }, 
          { color: 'WP', colorName: getColorName('WP') }, 
          { color: 'CD', colorName: getColorName('CD') }
        ],
        defaultColor: 'MB',
        details: [
          {
            detail: 'Lorem ipsum dolor'
          },
          {
            detail: 'Integer ullamcorper facilisis'
          },
          {
            detail: 'Cras vel eleifend sem'
          }
        ],
        reviewsTotal: 600,
        reviewsAverage: 4.5,
        gallerySlides: 7 
      },
      {
        skus: pillowcaseSkus,
        catIds: [34, 35, 36],
        catSizes: 2,
        defaultCatId: 36,
        category: 'bedding',
        slug: 'pillowcase',
        name: 'Add a Pillowcase Set',
        title: 'The Lull Pillowcase',
        longtitle: false,
        subtitle: '',
        colorFilter: false,
        filteredColor: '',
        matchColor: false,
        colorSelection: true,
        colorDisplayOrder: [ 
          { color: 'BW', colorName: getColorName('BW') }, 
          { color: 'QG', colorName: getColorName('QG') }, 
          { color: 'GG', colorName: getColorName('GG') }, 
          { color: 'MB', colorName: getColorName('MB') }, 
          { color: 'PA', colorName: getColorName('PA') }, 
          { color: 'WP', colorName: getColorName('WP') }, 
          { color: 'CD', colorName: getColorName('CD') }
        ],
        defaultColor: 'MB',
        bundle: false,
        bundleItems: [
          {
            catId: 22
          }
        ],
        details: [
          {
            detail: 'Lorem ipsum dolor'
          },
          {
            detail: 'Integer ullamcorper facilisis'
          },
          {
            detail: 'Cras vel eleifend sem'
          }
        ],
        showReview: false,
        reviewsTotal: 500,
        reviewsAverage: 4.75,
        gallerySlides: 7
      }
    ],
    scripts: [
      'nav',
      'modal.bootstrap',
      'swiper-lite',
      'tippy',
      'lazysizes.min'
    ],
    headerTitle: 'Product Display Template',
    headerIntro: [
      <p>The links below highlight the features of a Product Display module that I developed to support a line of bedding products.</p>,
      <p><span className="toggle-blurb" data-target="product-display-mattress"><strong>Mattress:</strong> This is the basic configuration, which allows users to add a product to cart and optionally add an upsell from resulting modal.</span></p>,
      <p><span className="toggle-blurb" data-target="product-display-frame"><strong>Bed Frame:</strong> This configuration offers a choice between fabric colors and product lines.</span>'</p>,
      <p><span className="toggle-blurb" data-target="product-display-sheets"><strong>Sheets:</strong> This configuration sorts through 42 product skus and over 100 upsell skus from 6 product lines. The upsells update their currently offered product size when the main product size selection changes.</span>'</p>,
      <p>Toggle between different configurations with the links below.</p>
    ],
  }
]

export { pageSheets }