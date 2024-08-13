import { getUpsellSize } from "./getUpsellSize"

export function getInitialSelection(p, initial) {
  let initialUpsells = []
  p.skus.forEach(item => {
    if (!item.outofstock && initial.sku === undefined) {
      initial.sku = item.sku
      initial.productName = item.name
      initial.type = p.defaultProductType 
      initial.color = p.defaultColor
      initial.colorName = p.defaultColorName
      initial.size = item.size
      initial.sizeName = item.sizeName
      initial.salePrice = item.salePrice
    }
  })
  if (p.upsells !== undefined) {
    p.upsells.forEach(u => {
      let initialItem = { }
      u.skus.forEach(item => {
        if (item.catId === u.defaultCatId && 
            item.color == initial.color && 
            getUpsellSize(initial.size, u.catSizes) === item.size) {
          initialItem.sku = item.sku
          initialItem.productName = item.name
          initialItem.type = item.type
          initialItem.color = item.color
          initialItem.colorName = item.colorName
          initialItem.size = item.size
          initialItem.sizeName = item.sizeName
          initialItem.price = item.price
          initialItem.salePrice = item.salePrice
          initialItem.catSizes = u.catSizes
          initialItem.active = false
        }
      })
      initialUpsells.push(initialItem)
    })
    initial.upsells = initialUpsells
  }
}