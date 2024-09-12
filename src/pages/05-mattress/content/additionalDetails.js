import { getProductName } from "../../../components/utils/getProductName"

const additionalDetails = [
  {
    type: 'additional-details',
    heading: 'Additional Details',
    items: [
      {
        title: 'Size Guide',
        icon: false,
        className: 'size-guide-icons',
        bullets: false,
        contents: [{ item: 'This is pulled from the product details' }]
      },
      {
        title: 'Certifications',
        icon: false,
        className: 'certifications',
        bullets: true,
        contents: [
           { item: '<div class="certipur logo" role="img" aria-label="Logo: Certipur"></div><p>The Lull ' + getProductName('PM') + ' is <br class="visible-lg">CertiPUR-US®-Certified, meaning materials<br class="visible-lg"> used are non-toxic and non-carcinogenic and <br class="visible-lg">meet the highest standards for safe content, emissions, and durability.</p>' },
          {	item: '<div class="sfc logo" role="img" aria-label="Logo: Sustainable Furnishings Council Member"></div><p>Environmental and health impacts of all products <br class="visible-lg">are analyzed and all possible steps are taken to minimize carbon emissions, waste stream pollutants, and un-recyclable content.</p>' }
        ]
      },
      {
        title: 'Product Dimensions',
        icon: false,
        className: 'product-dimensions',
        bullets: false,
        contents: [{ item: 'This is pulled from the product details' }]
      }
    ]
  }
]

export { additionalDetails }