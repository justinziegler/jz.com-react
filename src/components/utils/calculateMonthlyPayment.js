import { calculateDiscountedPrice } from "./calculateDiscountedPrice";

export function calculateMonthlyPayment(price, discount) {
  let term = 18;
  const paymentPrice = calculateDiscountedPrice(price, discount);
  if (paymentPrice >= 799) {
      term = 24;
  }
  return paymentPrice / term;
}
