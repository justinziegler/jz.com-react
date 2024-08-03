export function getUpsellSize(size, catSizes) {
  if (catSizes === 2) {
    switch(size) {
      case 'TW': 
      case 'TX': 
      case 'FL':
      case 'QU': 
        return 'ST';
      case 'KG':
      case 'CK': 
        return 'KG';
    }
  }
  switch(size) {
    case 'TW': 
    case 'TX': 
      return 'TT';
    case 'FL':
    case 'QU': 
      return 'FQ';
    case 'KG':
    case 'CK': 
      return 'KC';
  }
}