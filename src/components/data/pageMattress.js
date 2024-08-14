import { getColorName } from '../utils/getColorName';
import { numberWithCommas} from '../utils/numberWithCommas'
import { getPageId } from '../utils/getPageId';
import { getProductSkus } from '../utils/getProductSkus';

const pageUrl = 'mattress'
const catIds = [1]
const discountActual = 200
const skus = getProductSkus(catIds, discountActual)
const pageId = getPageId(pageUrl)
const pageMattress = [
  {
    skus: skus,
    catIds: catIds,
    defaultCatId: 1,
    defaultProductType: 'MA',
    catSizes: 6,
    catType: 'mattress',
    discountActual: discountActual,
    comboPage: false,
    comboProductModal: false,
    comboProductAccordion: false,
    comboProductButtonTitles: true,
    comboProductButtonLabels: false,
    pageUrl: pageUrl,
    pageId: pageId,
    gallerySlides: 4,
    galleryDimensions: 0,
    longTitle: false,
    heading: 'The Original Mattress',
    subheading: 'Ships in 1-4 business days',
    deliveryWindowText: 'Ships in 1-4 business days',
    ratings: [
      { 
        stars: true,
        total: numberWithCommas(5555),
        average: 4.7,
        googleTotal: numberWithCommas(2345),
        googleAverage: 4.2,
        tooltip: true,
        mattressTooltip: true
      }
    ],
    showSizeGuide: true,
    sizeGuideProductName: 'Mattress',
    sizeGuideMattressModal: true,
    sizeGuideDimensionsLink: true,
    productDimensions: true,
    colorSelection: false,
    defaultColor: 'WH',
    defaultColorName: getColorName('WH'),
    qtySelection: false,
    maxQty: 1,
    financingSection: true,
    upsellModal: true,
    upsellModalCatId: 8,
    upsellDiscountActual: 0,
    // upsellModalSkus: ctx.upsellSkus,
    scripts: [
      'nav',
      'modal.bootstrap',
      'swiper-lite',
      'tippy',
      'lazysizes.min'
    ],
    prevPage: 'tiktok',
    nextPage: 'frame',
    headerTitle: 'Product Display Template',
    headerIntro:  [
      <p>The links below highlight the features of a Product Display module that I developed to support a line of bedding products.</p>,
      <p><span className="toggle-blurb" data-target="product-display-mattress"><strong>Mattress:</strong> This is the basic configuration, which allows users to add a product to cart and optionally add an upsell from resulting modal.</span></p>,
      <p><span className="toggle-blurb" data-target="product-display-frame"><strong>Bed Frame:</strong> This configuration offers a choice between fabric colors and product lines.</span>'</p>,
      <p><span className="toggle-blurb" data-target="product-display-sheets"><strong>Sheets:</strong> This configuration sorts through 42 product skus and over 100 upsell skus from 6 product lines. The upsells update their currently offered product size when the main product size selection changes.</span>'</p>,
      <p>Toggle between different configurations with the links below.</p>
    ],
  }
] 
export { pageMattress }