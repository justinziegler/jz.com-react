import { getColorName }    from '../components/utils/getColorName'
import { numberWithCommas} from '../components/utils/numberWithCommas'
import { getProductSkus }  from '../components/utils/getProductSkus'
import { getShortName }    from '../components/utils/getShortName'
import { getProductName }  from '../components/utils/getProductName'

const catIds = [40, 41]
const discountActual = 200
const skus = getProductSkus(catIds, discountActual)

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
    sizeGuide: true,
    sizeGuideProductName: getProductName('UU'),
    sizeGuideMattressModal: false,
    sizeGuideDimensionsLink: false,
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
    financingSection: true
  }
]

export { pageFrame }