import React from 'react';
import { directory } from '../constants';

// Upsells

// Mattresses
const origCatId = 1;
const origPremCatId = 51;
const luxeCatId	= 28;
const mattressCatIds = [1, 51, 28];

// Premium Frames - Islay and Anacapa
const islayBaseCatId = 40;
const islayCatIds = [40, 41];
const premiumFrameCatIds = [40, 41, 52];

// Frames - Chapala, Arrellaga, Gaviota & Foundation
const foundationCatId = 20;
const frameCatIds = [53, 10, 11, 20];

// Duvets - Original and Down
const duvetBaseCatId = 19;
const duvetCatIds = [19, 24];

// Sheets - Cotton Blend, Cotton & Organic Cotton
const sheetsBaseCatId = 30;
const sheetsCatIds = [30, 36, 31];

// Pillows - Original, Memory Foam & Down
const pillowBaseCatId = 9;
const pillowCatIds = [9, 27, 25];

// Other - Protector, Foundation Legs
const foundationLegsCatId =	[22];
const otherCatIds = [8, 22];

// Protection Plans
const origPPCatId = 29;
const origPremPPCatId = 54;
const luxePPCatId = 45;

let cartSkus, cartCatIds;

function convertSize(itemSize, catId) {
  let size = itemSize;
  if (itemSize === 'TT') size = 'TX'
  else if (itemSize === 'FQ' || itemSize === 'ST') size = 'QU'
  else if (itemSize === 'KC') size = 'CK';
  if (pillowCatIds.includes(catId)) {
    if (itemSize === 'KG' || itemSize === 'CK') size = 'KG'
    else size = 'ST';
  } else if (duvetCatIds.includes(catId) || foundationLegsCatId.includes(catId)) {
    if (itemSize === 'TW' || itemSize === 'TX') size = 'TT'
    else if (itemSize === 'FL' || itemSize === 'QU' || itemSize === 'ST') size = 'FQ'
    else if (itemSize === 'KG' || itemSize === 'CK') size = 'KC';
  }
  return size;
}

function checkUpsellGroup(catId) {
  switch (catId) {
    case pillowBaseCatId:
    case duvetBaseCatId:
    case sheetsBaseCatId:
    case islayBaseCatId: return true;
    default: return false;
  }
}

function getUpsellGroupCatIds(catId) {
  switch (catId) {
    case pillowBaseCatId: return pillowCatIds;
    case duvetBaseCatId: return duvetCatIds;
    case sheetsBaseCatId: return sheetsCatIds
    case islayBaseCatId: return islayCatIds;
    default: return null;
  }
}

export function getUpsells(items, ctx) {
  cartSkus = items.map(item => item.sku);
  cartCatIds = items.map(item => item.catId);
	let cartTier;
	// const products = await content.getProducts();

	function getProtectionPlanCatId(itemCatId) {
		switch (itemCatId) {
			case origCatId: return origPPCatId;
			case luxeCatId: return luxePPCatId;
			case origPremCatId: return origPremPPCatId;
			default: return null;
		}
	}
	function getProtectionPlanSize(upsellCatId, itemSize) {
		if (upsellCatId === luxePPCatId) {
			switch (itemSize) {
				case 'TW': return 'HT';
				case 'TX': return 'HX';
				case 'FL': return 'HF';
				case 'QU': return 'HQ';
				case 'KG': return 'HK';
				case 'CK': return 'HC';
				default: return null;
			}
		} else if (upsellCatId === origPremPPCatId) {
			switch (itemSize) {
				case 'TW': return 'OT';
				case 'TX': return 'OX';
				case 'FL': return 'OF';
				case 'QU': return 'OQ';
				case 'KG': return 'OK';
				case 'CK': return 'OC';
				default: return null;
			}
		} else { // Original
			return itemSize;
		}
	}

  function getUpsellItem(catId) {
    const items = [];    
    products.forEach(p => p.catId === catId && items.push(p));
    let skus = [];
    items.forEach(item => { 
      const type = item.sku.slice(3, -6);
      const color = item.sku.slice(6, -3);
      const colorName = module.exports.getColorName(color);
      const size = item.sku.slice(9);
      const sizeName = module.exports.getSizeName(size);
      const details = content.getUpsellDetails(type);
      skus.push(
        {
          catId: item.catId,
          name: module.exports.getProductName(type),
          sku: item.sku,
          type: type,
          shortName: module.exports.getShortName(type),
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

	function getUpsellTargetGroups(catIds) {
		let cartItems = [];
		catIds.forEach(catId => {
			const x = items.filter(item => item.catId === catId);
			cartItems = cartItems.concat(x);
		});
		return cartItems;
	}

	function getUpsellTargets(catItems, productTier) {
		if (catItems.length) {
			cartTier = productTier;
			while (catItems.length > 1) {
				const x = catItems[0];
				const y = catItems[catItems.length - 1];
				if (Number(x.price) > Number(y.price)) {
					catItems.pop();
				} else {
					catItems.shift();
				}
			}
		}
	}

  const products = await content.getProducts();
  let upsellSkus = [];
  assignUpsells = function (catIds, itemSize, tier, ctx) {
    
    let upsellItems = [];
    catIds.forEach(catId => {
      const size = convertSize(itemSize, catId);
      const upsellGroup = checkUpsellGroup(catId);
      const upsellGroupCatIds = getUpsellGroupCatIds(catId);
      let catUpsellItems = [];
      if (upsellGroup) {
        let upsellOk = true;
        upsellGroupCatIds.forEach(gCatId => {
          if (ctx.cartCatIds.includes(gCatId)) upsellOk = false;
          const g = getUpsellItem(gCatId);
          const catItems = g.filter(item => item.sku.slice(9) === size);
          catUpsellItems = catUpsellItems.concat(catItems);
        })
        if (upsellOk) {
          let priorityType = 'CB';
          let typeOrder = ['CB', 'CS', 'OC'];
          let colorOrder = ['BW', 'QG', 'GG', 'MB', 'PA', 'WP', 'CD'];
          let label = 'Color &amp; Fabric';
          let colorSelect = false;
          const typeSelect = true;
          if (catId === sheetsBaseCatId) {
            colorSelect = true;
            if (tier === 'premiumMattress') {
              priorityType = 'OC';
              typeOrder = ['OC', 'CS', 'CB'];
            }
          } else if (catId === islayBaseCatId) {
            priorityType = 'TU';
            typeOrder = ['TU', 'UU'];
            colorOrder = ['CS', 'DS'];
            label = 'Color &amp; Style';
            colorSelect = true;
          } else if (catId === pillowBaseCatId) {
            label = 'Type';
            priorityType = 'PW';
            typeOrder = ['PW', 'DP', 'FP'];
            colorOrder = ['WH'];
            if (tier === 'premiumMattress' || tier === 'premiumFrame') {
              priorityType = 'DP';
            }
          } else if (catId === duvetBaseCatId) {
            label = 'Type';
            priorityType = 'DV';
            typeOrder = ['DV', 'DD'];
            colorOrder = ['WH'];
            if (tier === 'premiumMattress' || tier === 'premiumFrame') {
              priorityType = 'DD';
            }
          }
          const b = catUpsellItems.filter(item => item.sku.slice(3, -6) === priorityType);
          const c = b.filter(item => item.sku.slice(6, -3) === colorOrder[0]);
          const d = c.filter(item => item.sku.slice(9) === size);
          const upsellItem = {
            upsellTitle: d[0].upsellTitle,
            upsellDescription: d[0].upsellDescription,
            url: d[0].url,
            slug: d[0].slug,
            sku: d[0].sku,
            skus: catUpsellItems,
            name: d[0].name,
            type: d[0].type,
            color: d[0].color,
            size: d[0].size,
            price: d[0].price,
            discountPrice: d[0].discount,
            priorityProductType: priorityType,
            productTypeOrder: typeOrder,
            colorSelection: colorSelect,
            typeSelection: typeSelect,
            colorDisplayOrder: colorOrder,
            dropdownLabel: label
          }
          upsellItems = upsellItems.concat(upsellItem);
        }
      } else if (!(cartCatIds.includes(catId))) {
        const catItems = products.filter(item => item.catId === catId);
        let catItem = catItems.filter(item => item.sku.slice(9) === size);
        
        // const details = content.getUpsellDetails(catItem[0].sku); 
        // catItem.push(details);
        upsellSkus = upsellSkus.concat(catItem[0]);
      }
    })
    // upsellItems = await content.getUpsellDetails(upsellSkus); 
    return upsellSkus;
  }

	// Separate cart into product tiers
	const allMattressItems = getUpsellTargetGroups(mattressCatIds);
	const premiumFrameItems = getUpsellTargetGroups(premiumFrameCatIds);
	const frameItems = getUpsellTargetGroups(frameCatIds);
	const duvetItems = getUpsellTargetGroups(duvetCatIds);
	const sheetsItems = getUpsellTargetGroups(sheetsCatIds);
	const pillowItems = getUpsellTargetGroups(pillowCatIds);
	const otherItems = getUpsellTargetGroups(otherCatIds);

	// Separate cart mattresses into two tiers
	const premiumMattressItems = [];
	const mattressItems = [];
	if (allMattressItems.length) {
		allMattressItems.forEach(item => {
			if (item.catId === origCatId) mattressItems.push(item);
			else if (item.catId === luxeCatId) premiumMattressItems.push(item);
			else if (item.size === 'KG' || item.size === 'CK') premiumMattressItems.push(item);
			else mattressItems.push(item);
		})
	}

	// Find highest price item of each tier
	getUpsellTargets(otherItems, 'other');
	getUpsellTargets(pillowItems, 'pillow');
	getUpsellTargets(sheetsItems, 'sheets');
	getUpsellTargets(duvetItems, 'duvet');
	getUpsellTargets(frameItems, 'frame');
	getUpsellTargets(premiumFrameItems, 'premiumFrame');
	getUpsellTargets(mattressItems, 'mattress');
	getUpsellTargets(premiumMattressItems, 'premiumMattress');

	let addUpsellItems = [];
	if (cartTier === 'premiumMattress') {
		const catIds = [8, 9, 30, 19, 46, 53, 52, 20];
		// protector, pillows, sheets, duvets, islay, chapala, anacapa, foundation
		// pillows, sheets & duvets default to premium selections

		addUpsellItems 	= module.exports.assignUpsells(catIds, premiumMattressItems[0].size, cartTier);
	} else if (cartTier === 'mattress') {
		// const catIds = [8, 9, 30, 19, 46, 11, 10, 20];
		const catIds = [8, 11];
		// protector, pillows, sheets, duvets, islay, gaviota, arrellaga, foundation

		// addUpsellItems = module.exports.assignUpsells(catIds, mattressItems[0].size, cartTier);
    let x = assignUpsells(catIds, mattressItems[0].size, cartTier);
		addUpsellItems = await content.getUpsellDetails(upsellSkus);
	} else if (cartTier === 'premiumFrame') {
		let catIds = [1, 51, 28, 8, 9, 30, 19, 20];
		// mattresses, protector, pillows, sheets, duvets, foundation

		addUpsellItems 	= module.exports.assignUpsells(catIds, premiumFrameItems[0].size);
	} else if (cartTier === 'frame') {
		let catIds = [1, 51, 28, 46, 52, 8, 9, 30, 19];
		// mattresses, protector, pillows, foundation, sheets, duvets, anacapa

		addUpsellItems = module.exports.assignUpsells(catIds, frameItems[0].size, cartTier);
	} else if (cartTier === 'duvet') {
		let catIds = [8, 9, 30, 46, 52, 53, 11, 10, 20];
		// protector, pillows, sheets, islay, anacapa, chapala, gaviota, arrellaga, foundation

		addUpsellItems = module.exports.assignUpsells(catIds, duvetItems[0].size, cartTier);
	} else if (cartTier === 'sheets') {
		let catIds = [8, 9, 19, 46, 52, 53, 11, 10, 20]
		// protector, pillows, duvets, islay, anacapa, chapala, gaviota, arrellaga, foundation

		addUpsellItems = module.exports.assignUpsells(catIds, sheetsItems[0].size, cartTier);
	} else if (cartTier === 'pillow') {
		let catIds = [8, 30, 19, 46, 52, 53, 11, 10, 20]
    // protector, sheets, og duvet, islay, anacapa, chapala, gaviota, arrellaga, foundation

		addUpsellItems = module.exports.assignUpsells(catIds, pillowItems[0].size, cartTier);
	} else {
		const catIds = [1, 51, 28, 30]; // mattresses and sheets - default
		addUpsellItems = module.exports.assignUpsells(catIds, otherItems[0].size, cartTier);
	}

	// Specific upsells
	// Offer foundation legs with each foundation
	const foundationItems	= getUpsellTargetGroups([foundationCatId]);
	let addLegsItems = [];
	if (foundationItems.length) {
		foundationItems.forEach(item => {
			const x = module.exports.assignUpsells(foundationLegsCatId, item.size, cartTier);
			addLegsItems = addLegsItems.concat(x);
		})
	}

	// Assign protection plans to all mattresses in cart
	let addPlanItems = [];
	// if (allMattressItems.length) {
	// 	addPlanItems = assignProtectionPlans(allMattressItems);
	// }

	// addUpsellItems = addUpsellItems.concat(addLegsItems).concat(addPlanItems);

	let filteredUpsells = [];
	if (addUpsellItems.length > 0) {
		filteredUpsells = addUpsellItems.filter(item => !item.outOfStock);
	}
	const upsells = [
		filteredUpsells
	];

	if (upsells.length > 0) {
		return { ok: true, result: upsells };
	}
	return { ok: false, result: null };
}