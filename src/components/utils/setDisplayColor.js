export function setDisplayColor(type) {
  switch (type) {
  case 'SH':
  case 'DC':
  case 'PC':
  case 'CB':
  case 'BD':
  case 'BP':
  case 'CS':
  case 'CD':
  case 'CP':
  case 'OC':
  case 'OD':
  case 'OP':
  case 'TU':
  case 'UU':
    return true;
  default:
    return false;
  }
}