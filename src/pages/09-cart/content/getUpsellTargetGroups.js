export function getUpsellTargetGroups(items, catIds) {
  let cartItems = []
  catIds.forEach(catId => {
    const x = items.filter(item => item.catId === catId)
    cartItems = cartItems.concat(x)
  });
  return cartItems
}