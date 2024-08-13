import { getColorName } from '../utils/getColorName';
import { numberWithCommas} from '../utils/numberWithCommas'
import { getPageId } from '../utils/getPageId';
import { getProductSkus } from '../utils/getProductSkus';
import { getShortName } from '../utils/getShortName';
import { getProductName } from '../utils/getProductName';

const pageUrl = 'frame'
const catIds = [40, 41]
const discountActual = 200
const skus = getProductSkus(catIds, discountActual)
const pageId = getPageId(pageUrl)

const pageFrame = [
  {
    skus: skus,
    catIds: catIds,
    defaultCatId: 40,
    defaultProductType: 'UU',
    shortName: getShortName('UU'),
    catSizes: 6,
    discountActual: discountActual,
    bundle: false,
    bundleIds: [],
    comboPage: true,
    comboProductModal: false,
    comboProductButtonTitles: false,
    comboProductButtonLabels: true,
    comboProduct: [
      {
        toggleTitle: false,
        comboProductId: 41,
        comboProductType: 'TU',
        shortName: getShortName('TU'),
        discount: 200
      }
    ],
    productType: 'frame',
    gallerySlides: 5,
    galleryDimensions: 5,
    longTitle: false,
    heading: getProductName('UU'),
    subheading: 'Elevate your bedroom with a modern classic.',
    ratings: [
      { stars: true,
        total: numberWithCommas(3500),
        average: 4.3,
        tooltip: true,
        tooltipFootnote: '*Reviews based on all Bed Frames'
      }
    ],
    deliveryWindowText: <p>Ships in 1&ndash;4 business days</p>,
    readyToShipMessage: true,
    sizeGuide: [
      {
        show: true,
        productName: getProductName('UU'),
        mattressModal: false,
        dimensionsLink: false
      }
    ],
    productDimensions: false,
    colorSelection: true,
    colorDisplayOrder: [ 
      { color: 'CS', colorName: getColorName('CS') }, 
      { color: 'DS', colorName: getColorName('DS') },
    ],
    defaultColor: 'CS',
    defaultColorName: getColorName('CS'),
    qtySelection: false,
    maxQty: 1,
    productImage: '../assets/frame/gallery-straighton-withluxe-TU-CS.jpg',
    financingSection: true,
    scripts: [
      'nav',
      'modal.bootstrap',
      'swiper-lite',
      'tippy',
      'lazysizes.min'
    ],
    headerTitle: 'Product Display Template',
    headerIntro: [
      <p key='intro1'>The links below highlight the features of a Product Display module that I developed to support a line of bedding products.</p>,
      <p key='intro2'><span className='toggle-blurb' data-target='product-display-mattress'><strong>Mattress:</strong> This is the basic configuration, which allows users to add a product to cart and optionally add an upsell from resulting modal.</span></p>,
      <p key='intro3'><span className='toggle-blurb' data-target='product-display-frame'><strong>Bed Frame:</strong> This configuration offers a choice between fabric colors and product lines.</span>'</p>,
      <p key='intro4'><span className='toggle-blurb' data-target='product-display-sheets'><strong>Sheets:</strong> This configuration sorts through 42 product skus and over 100 upsell skus from 6 product lines. The upsells update their currently offered product size when the main product size selection changes.</span>'</p>,
      <p key='intro5'>Toggle between different configurations with the links below.</p>
    ],
  }
]

export { pageFrame }