export function getSizeName(size) {
  switch (size) {
    case 'TW': return 'Twin';
    case 'TX': return 'Twin XL';
    case 'FL': return 'Full';
    case 'QU': return 'Queen';
    case 'KG': return 'King';
    case 'CK': return 'Cal King';
    case 'TT': return 'Twin / Twin XL';
    case 'FQ': return 'Full / Queen';
    case 'KC': return 'King / Cal King';
    case 'ST': return 'Standard';
    default: return 'Twin';
  }
}