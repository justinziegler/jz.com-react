import { products } from '../../../components/data/products';
import { getProductName } from '../../../components/utils/getProductName';
import { getSizeName } from '../../../components/utils/getSizeName';

export function getUpsellDetails(skus) {
  let upsellItems = [];
  skus.forEach(item => {
    const type = item.sku.slice(3, -6);
    const size = item.sku.slice(9);
    const sizeName = getSizeName(size);
    const color = item.sku.slice(6, -3);
    const name = getProductName(type);
    const ci = [];
    const catItems = [];
    const dualSizes = (type === 'DV' || type == 'DD' || type == 'FL')
    products.forEach(p => p.catId === item.catId && ci.push(p));
    ci.forEach(c => {
      const sizeName = getSizeName(c.sku.slice(9));
      const item = {
        sku: c.sku,
        type: c.sku.slice(3, -6),
        color: c.sku.slice(6, -3),
        price: c.price,
        sizeName: sizeName,
        outOfStock: c.outOfStock,
        dualSizes: dualSizes
      }
      catItems.push(item);
    })
    let discount = 0;
    let details = [];
    switch (type) {
      case 'MA': 
        details = {
          title: 'Add an Original Lull Mattress',
          description: 'Add a Lull three layer gel memory foam mattress',
          url: 'shop',
          slug: 'mattress'
        }
        break;
      case 'PR': 
        discount = 0;
        details = {
          catId: item.catId,
          sku: item.sku,
          skus: catItems,
          name: name,
          quantity: 1,
          type: type,
          color: color,
          size: size,
          sizeName: sizeName,
          price: item.price,
          discount: 15,
          salePrice: item.price - discount,
          colorSelection: false,
          showStarRating: true,
          avgReviews: 4.3,
          totalReviews: 4321,
          subtitle: '100% waterproof barrier provides<br class="hidden-xs"> lasting protection',
          gallerySlides: 3,
          details: [{
            tagline: 'The mattress protector re-imagined. Ultra sturdy support that\'s easy to assemble.',
            bullets: [
              { bullet: 'Free Shipping and Free Returns' },
              { bullet: '365 Night Trial' },
              { bullet: '1-Year Warranty' }
            ]
          }],
          review: [{
            starTotal: 5,
            title: 'This mattress protector fits perfectly!',
            content: 'This mattress protector fits perfectly! It doesn\'t stretch out even after a night\'s sleep!',
            reviewer: 'Barbara B.'
          }],
          benefits: [
            {
              heading: '100% Waterproof',
              className: 'waterproof',
              content: 'The Lull Protector keeps liquids from reaching your mattress using a 100% waterproof barrier.'
            },
            {
              heading: 'Stain Resistant',
              className: 'stain',
              content: 'The Lull Protector uses chemical-free, stain-resistant fibers to repel liquids.'
            },
            {
              heading: 'Hypoallergenic',
              className: 'hypoallergenic',
              content: 'Machine washable to prevent a buildup of skin cells and dust mites (a common household allergen) on your mattress.'
            },
            {
              heading: 'Quiet',
              className: 'quiet',
              content: 'Unlike traditional noisy protectors, the Lull Protector won\’t move or crinkle beneath you. We use the same soft fabrics as the Lull Mattress cover for a perfect fit and a quiet night\’s sleep.'
            },
            {
              heading: 'Breathable',
              className: 'breathable',
              content: 'Lull\’s protection uses technology to allow air to pass through for a cool night\’s sleep.'
            },
            {
              heading: 'Lasting Protection',
              className: 'protection',
              content: 'Built to handle wear-and-tear, the Lull Protector keeps your mattress clean so you get years of enjoyment from your Lull Mattress.'
            }
          ],
          dimensions: [
            {
              catId: 8,
              dimensions: [
                { size: 'Twin', w: '39"', l: '75"', h: '', totalHeight: '', weight: '4 lbs.' },
                { size: 'Twin XL', w: '39"', l: '80"', h: '', totalHeight: '', weight: '4 lbs.' },
                { size: 'Full', w: '54"', l: '75"', h: '', totalHeight: '', weight: '4.5 lbs.' },
                { size: 'Queen', w: '60"', l: '80"', h: '', totalHeight: '', weight: '4.75 lbs.' },
                { size: 'King', w: '76"', l: '80"', h: '', totalHeight: '', weight: '6 lbs.' },
                { size: 'California King', w: '72"', l: '84"', h: '', totalHeight: '', weight: '6 lbs.' },
                { size: 'BOX', w: '15"', l: '12"', h: '5.75"', totalHeight: '', weight: '' }
              ]
            }
          ],
          specs: [
            {
              heading: '',
              details: [
                {
                  item: 'Construction',
                  details: '<strong>Knit Top:</strong> Polyester &amp; Rayon<br><strong>Skirting:</strong> Polyester &amp; Spandex',
                  classes: 'col-xs-12 col-sm-7'
                },
                {
                  item: 'Shipping Info',
                  details: 'Ships in 1-4 business days',
                  classes: 'col-xs-12 col-sm-5'
                },
                {
                  item: 'clearfix',
                  details: '',
                  classes: 'visible-xs'
                },
                {
                  item: 'Shipping Costs',
                  details: 'Free Shipping &amp; Returns',
                  classes: 'col-xs-12 col-sm-7'
                },
                {
                  item: 'Warranty',
                  details: '1 year',
                  classes: 'col-xs-12 col-sm-5'
                }
              ]
            }
          ]
        }
        break;
      case 'PW':
        details = {
          title: 'Add an Original Lull Pillow',
          description: 'Our best selling pillow made from high quality materials provides the perfect combination of comfort and support.',
          url: 'pillows',
          slug: 'pillow'
        }
        break;
      case 'FP': 
        details = {
          title: 'Add a Lull Memory Foam Pillow',
          description: 'The Lull Memory Foam Pillow adapts to your movement and provides support throughout the night.',
          url: 'pillows',
          slug: 'memory-foam-pillow'
        }
        break;
      case 'DP': 
        details = {
          title: 'Add a Premium Lull Down Pillow',
          description: 'Responsibly sourced premium white duck down provides responsive comfort and bounces back with just a quick fluff for your best sleep yet.',
          url: 'pillows',
          slug: 'down-pillow'
        }
        break;
      case 'SH':
      case 'CB': 
        details = {
          title: 'Add a Lull Sheet Set',
          description: 'Silky, soft, and breathable - high quality sheets at an unbeatable price. Includes fitted sheet, top sheet and <span class="sheets-quantity"></span> <span class="pillowcase-quantity">pillowcase</span>.',
          url: 'bed-sheets',
          slug: 'sheets'
        }
        break;
      case 'CS': 
        details = {
          title: 'Add a Lull Cotton Sheet Set',
          description: 'Premium 100% cotton percale sheets made for a cool night\'s sleep. Includes fitted sheet, top sheet and <span class="sheets-quantity"></span> <span class="pillowcase-quantity">pillowcase</span>',
          url: 'bed-sheets',
          slug: 'sheets'
        }
        break;
      case 'OC': 
        details = {
          title:  'Add a Lull Organic Cotton Sheet Set',
          description: '100% organic cotton sheets crafted with comfort, wellness, and luxury in mind. Includes fitted sheet, top sheet and <span class="sheets-quantity"></span> <span class="pillowcase-quantity">pillowcase</span>.',
          url: 'bed-sheets',
          slug: 'sheets'
        }
        break;
      case 'DV': 
        details = {
          title: 'Add an Original Lull Duvet',
          description: 'Get amazing sleep with the Original Lull Duvet. Millions of premium fibers keep you warm in the winter and cool in the summer.',
          url: 'duvet',
          slug: 'duvet',
          dualSizes: true
        }
        break;
      case 'DD': 
        details = {
          title: 'Add a Lull Down Duvet',
          description: 'Our most luxurious duvet is filled with medium weight, all-season down fill that keeps you warm in winter and cool in summer.',
          url: 'down-duvet',
          slug: 'down-duvet',
          dualSizes: true
        }
        break;
      case 'TU': 
      case 'UU': 
      details = {
        title: 'Add a Lull Islay Bed Frame',
        description: 'Classic style meets ultimate comfort. Complete any bedroom with Islay, Lull\'s most luxurious bed frame.',
        url: 'islay-upholstered-bed',
        slug: 'islay-frame'
      }
      break;
      case 'WF': 
        details = {
          catId: item.catId,
          sku: item.sku,
          skus: catItems,
          name: name,
          quantity: 1,
          type: type,
          color: color,
          size: size,
          sizeName: sizeName,
          price: item.price,
          discount: 15,
          salePrice: item.price - discount,
          catId: 11,
          outOfStock: item.outOfStock,
          colorSelection: false,
          showStarRating: true,
          avgReviews: 4.5,
          totalReviews: 2345,
          subtitle: 'Modern design built with your Lull mattress<br class="visible-lg"> in mind',
          gallerySlides: 5,
          details: [{
            tagline: 'Support your new mattress and complete your bedroom with Lull\'s modern platform bed.',
            bullets: [
              { bullet: 'Free Shipping and Free Returns' },
              { bullet: '365 Night Trial' },
              { bullet: '1-Year Warranty' }
            ]
          }],
          review: [{
            starTotal: 5,
            title: 'Great frame',
            content: 'Package was easy to handle. Matched the picture completely and the width and height are perfect for our bedroom. Very classy and easy to set up.',
            reviewer: 'Emily C.'
          }],
          benefits: [
            {
              heading: 'Quality Craftsmanship',
              className: 'craftsmanship',
              content: 'The Lull Platform Bed provides durability that lasts &ndash; made from pine wood and steel rail fittings.'
            },
            {
              heading: 'No Box Spring Needed',
              className: 'boxspring',
              content: 'The Lull Platform Bed Frame is the perfect complement to any style mattress &ndash; no box spring needed.'
            },
            {
              heading: 'Spine Alignment',
              className: 'support',
              content: 'The Lull Platform Bed Frame\'s slatted design works with your Lull Mattress to keep your back aligned and ensure quality sleep.'
            },
            {
              heading: 'Flexible Support',
              className: 'flexible',
              content: 'The Lull Platform Bed Frame adjusts to different sleeper types by absorbing body movements.'
            },
            {
              heading: 'Easy to Assemble',
              className: 'easy',
              content: 'Assembles in 5 easy steps in under 10 minutes &ndash; the only tools needed are an allen wrench (included) and a phillips head screwdriver (not included).'
            },
            {
              heading: 'Modern Design',
              className: 'modern',
              content: 'Lull\’s contemporary platform frame is an excellent addition to any bedroom with its stylish wood finish and simple design.'
            }
          ],
          dimensions: [
            {
              catId: 11,
              dimensions: [
                { size: 'Twin', w: '41"', l: '76.5"', h: '13.5"', totalHeight: '', weight: '68 lbs.' },
                { size: 'Twin XL', w: '41"', l: '81.5"', h: '13.5"', totalHeight: '', weight: '71 lbs.' },
                { size: 'Full', w: '55.7"', l: '76.8"', h: '14"', totalHeight: '', weight: '61 lbs.' },
                { size: 'Queen', w: '60.6"', l: '81.7"', h: '14"', totalHeight: '', weight: '61 lbs.' },
                { size: 'King', w: '77.7"', l: '81.7"', h: '14"', totalHeight: '', weight: '62 lbs.' },
                { size: 'California King', w: '73.7"', l: '85.7"', h: '14"', totalHeight: '', weight: '82 lbs.' },
                { size: 'BOX', w: 'A: 67" x 16" x 5"', l: 'B: 83" x 10" x 3"', h: '', totalHeight: '', weight: '' }
              ]
            }
          ],
          specs: [
            {
              heading: '',
              details: [
                {
                  item: 'Construction',
                  details: 'Pine Wood &amp; Steel',
                  classes: 'col-xs-12 col-sm-6'
                },
                {
                  item: 'Shipping Info',
                  details: 'Ships in 1-4 business days',
                  classes: 'col-xs-12 col-sm-6'
                },
                {
                  item: 'clearfix',
                  details: '',
                  classes: 'visible-xs'
                },
                {
                  item: 'Shipping Costs',
                  details: 'Free Shipping &amp; Returns',
                  classes: 'col-xs-12 col-sm-6'
                },
                {
                  item: 'Warranty',
                  details: '1 year',
                  classes: 'col-xs-12 col-sm-6'
                },
                {
                  item: 'clearfix',
                  details: '',
                  classes: 'visible-xs'
                },
                {
                  item: 'Care Instructions',
                  details: 'Dust with a soft dry cloth',
                  classes: 'col-xs-12 col-sm-6'
                },
                {
                  item: 'Assembly Instructions',
                  details: '<a href="https://static.lull.com/media/The_Lull_Platform_Bed_Frame_Insert_Booklet.pdf" target="_blank">Click here</a> to download',
                  classes: 'col-xs-12 col-sm-6'
                }
              ]
            }
          ]
        }
        break;
      case 'MF': 
        details = {
          title: 'Add a Lull Arrellaga Folding Bed Frame',
          description: 'Complement your new mattress with Lull\'s versatile and affordable Arrellaga folding bed frame.',
          url: 'arrellaga-metal-bed-frame',
          slug: 'metal-frame'
        }
        break;
      case 'FO': 
        details = {
          title: 'Add a Lull Mattress Foundation',
          description: 'Give your mattress the support it needs with Lull\'s easy to assemble foundation.',
          url: 'mattress-foundation',
          slug: 'foundation'
        }
        break;
      case 'FL': 
        details = {
          title: 'Add the Lull Foundation Legs',
          description: 'Add height and create instant under-bed<br class="visible-md visible-lg"> storage.',
          url: 'mattress-foundation',
          slug: 'foundation-legs',
          dualSizes: true
        }
        break;
      case 'HY':
        details = {
          title: 'Add a Lull Luxe Hybrid Mattress',
          description: 'Add a Lull Luxe Hybrid Mattress',
          url: 'shop-luxe',
          slug: 'luxe-hybrid'
        }
        break;
      case 'PP': 
        details = {
          title: 'Add a 10 Year Protection Plan',
          description: 'Add a 10 Year Protection Plan for coverage from accidents, stains, rips, tears, and more.',
          url: '#',
          slug: 'protection-plan'
        }
        break;
      case 'PM': 
        details = {
          title: 'Add a Lull Original Premium Mattress',
          description: 'Add a Lull Original Premium Mattress',
          url: 'original-premium-mattress',
          slug: 'original-premium'
        }
        break;
      case 'AF': 
        details = {
          title: 'Add a Lull Anacapa Bed Frame',
          description: 'The warm golden tones of Lull\'s Anacapa bed frame is the finishing touch your room has been waiting for.',
          url: 'anacapa-bed-frame',
          slug: 'anacapa-frame'
        }
        break;
      case 'SF': 
        details = {
          title: 'Add a Chapala Metal Bed Frame',
          description: 'Lull\'s sleek and modern Chapala bed frame is made with exceptional durability in mind to provide perfect support for your mattress.',
          url: 'chapala-metal-headboard-bed-frame',
          slug: 'chapala'
        }
        break;
      default: 
        details = {
          title: 'Add an Original Lull Mattress',
          description: 'Add a Lull three layer gel memory foam mattress',
          url: 'shop',
          slug: 'mattress'
        }
        break;
    }
    const d = details[0];
    upsellItems = upsellItems.concat(details);
    console.log('upsellItems', upsellItems)
  })
	return upsellItems;
}