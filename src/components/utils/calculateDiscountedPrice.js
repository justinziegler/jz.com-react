import { calculateDiscount } from "./calculateDiscount";

export function calculateDiscountedPrice(price, discount) {
  const discountActual = calculateDiscount(price, discount);
  return Math.round((price - discountActual) * 100) / 100;
}