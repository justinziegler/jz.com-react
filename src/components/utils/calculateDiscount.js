

export function calculateDiscount(price, discount) {
  let discountActual = discount;
  // if (typeof discount === 'string' && (discount.indexOf('%') > -1 || discount.indexOf('$') > -1)) {
  //     discountActual = module.exports.parseDiscountActual(discount);
  // }
  if (Number.isNaN(parseFloat(discountActual))) {
      discountActual = 0;
  }
  if (discountActual < 1 && discountActual > 0) {
      return Math.round(price * discountActual * 100) / 100;
  }
  return Math.round(discountActual * 100) / 100;
}