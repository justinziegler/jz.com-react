export function getShortName(type) {
  switch (type) {
  case 'CB':
  case 'BD':
  case 'BP':
    return 'Cotton Blend';
  case 'CS':
  case 'CD':
  case 'CP':
    return 'Cotton';
  case 'OC':
  case 'OD':
  case 'OP':
    return 'Organic Cotton';
  case 'UU':
    return 'Classic Headboard';
  case 'TU':
    return 'Tufted Headboard';
  case 'MA':
    return 'Original';
  case 'HY':
    return 'Luxe Hybrid';
  case 'PM':
    return 'Original Premium';
  case 'AF':
    return 'Anacapa';
  case 'SF':
    return 'Chapala';
  case 'PW':
  case 'DV':
    return 'Original';
  case 'DP':
  case 'DD':
    return 'Down';
  case 'FP':
    return 'Memory Foam';
  default: return 'Cotton';
  }
}