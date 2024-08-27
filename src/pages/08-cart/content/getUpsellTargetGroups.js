export function getUpsellTargetGroups(items, catIds) {
  let cartItems = [];
  console.log('items', items)
  console.log('catIds', catIds)
  catIds.forEach(catId => {
    const x = items.filter(item => item.catId === catId);
    cartItems = cartItems.concat(x);
  });
  return cartItems;
}