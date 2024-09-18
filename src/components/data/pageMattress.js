import { getColorName } from '../utils/getColorName';
import { numberWithCommas} from '../utils/numberWithCommas'
import { getProductSkus } from '../utils/getProductSkus';

const catIds = [1]
const discountActual = 200
const skus = getProductSkus(catIds, discountActual)
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
  }
] 
export { pageMattress }