import { products } from '../data/products';
import { calculateDiscountedPrice } from './calculateDiscountedPrice';
import { calculateMonthlyPayment } from './calculateMonthlyPayment';
import { calculatePaymentTerm } from './calculatePaymentTerm';
import { getColorName } from './getColorName';
import { getSizeName } from './getSizeName';
import { getProductName } from './getProductName';
import { getShortName } from './getShortName';
import { setDisplayColor } from './setDisplayColor';

export function getProductSkus(catIds, discount) {
  const items = [];
  catIds.forEach(catId =>
    products.forEach(p => p.catId === catId && items.push(p))
  )
	let skus = [];
	items.forEach(item => { 
    let price = item.price;
    let salePrice = calculateDiscountedPrice(item.price, discount);
    let monthlyPayment = calculateMonthlyPayment(item.price, discount);
    let paymentTerm = calculatePaymentTerm(item.price, discount);
    const type = item.sku.slice(3, -6);
    const color = item.sku.slice(6, -3);
    const colorName = getColorName(color);
    const size = item.sku.slice(9);
    const sizeName = getSizeName(size);
    let maxQty = 1;
    skus.push(
      {
        catId: item.catId,
        sku: item.sku,
        type: type,
        name: getProductName(type),
        shortName: getShortName(type),
        color: color,
        colorName: colorName,
        colorSelection: setDisplayColor(type),
        size: size,
        sizeName: sizeName,
        price: price,
        discount: discount,
        salePrice: salePrice,
        monthlyPayment: monthlyPayment.toFixed(2),
        paymentTerm: paymentTerm,
        w: item.w,
        l: item.l,
        h: item.h,
        weight: item.weight,
        dimensions: item.dimensions,
        outOfStock: item.outOfStock,
        maxQty: maxQty
      }
    );
	})
	return skus;
}