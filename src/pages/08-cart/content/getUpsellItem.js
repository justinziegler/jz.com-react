import { products } from '../../../components/data/products'
import { getColorName } from '../../../components/utils/getColorName'
import { getSizeName } from '../../../components/utils/getSizeName'
import { getUpsellDetails } from './getUpsellDetails'
import { getProductName } from '../../../components/utils/getProductName'
import { getShortName } from '../../../components/utils/getShortName'

export function getUpsellItem(catId) {
  const items = [];    
  products.forEach(p => p.catId === catId && items.push(p));
  let skus = [];
  items.forEach(item => { 
    const type = item.sku.slice(3, -6);
    const color = item.sku.slice(6, -3);
    const colorName = getColorName(color);
    const size = item.sku.slice(9);
    const sizeName = getSizeName(size);
    const details = getUpsellDetails(type);
    skus.push(
      {
        catId: item.catId,
        name: getProductName(type),
        sku: item.sku,
        type: type,
        shortName: getShortName(type),
        color: color,
        colorName: colorName,
        size: size,
        sizeName: sizeName,
        price: item.price,
        w: item.w,
        l: item.l,
        h: item.h,
        weight: item.weight,
        dimensions: item.dimensions,
        outOfStock: item.outOfStock,
        upsellTitle: details.title,
        upsellDescription: details.description,
        url: details.url,
        slug: details.slug
      }
    );
  })
  return skus;
}