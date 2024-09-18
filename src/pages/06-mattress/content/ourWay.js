
import { getProductName } from '../../../components/utils/getProductName';

export const ourWay = [
  {
    title: 'Free Shipping',
    className: 'shipping',
    content: 'Your mattress ships fast and free in the contiguous US (Alaska and Hawaii for a small fee). Once your order is placed it typically ships in 1-4 business days and arrives with no-contact delivery. Don\'t love it? Arrange a quick, stress-free return.'
  },
  {
    title: '365 Night Trial',
    className: 'trial',
    content: 'Skeptical about buying a mattress online? Try the ' + getProductName('PM') + ' in your home for an ENTIRE YEAR, stress-free! After 365 Nights, if you\'re not 100% satisfied with your sleep experience, arrange a quick and easy return. We\'ll even come pick up the mattress, for FREE!'
  },
  {
    title:'Returns',
    className: 'returns',
    content: 'After 365 Nights, if you\'re not 100% satisfied with your sleep experience, return your mattress. No need to save the box or package your items. We make every effort possible to donate returned mattresses to local charities and organizations in need of beds.'
  },
  {
    title: 'Lifetime Warranty',
    className: 'warranty',
    content: 'The ' + getProductName('PM') + ' has been subjected to rigorous independent testing ensuring a lifetime of comfortable and restful sleep. In the unlikely event something does go wrong, rest easy knowing you\'re covered.'
  }
]