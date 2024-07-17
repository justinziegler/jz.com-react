export function getColorName(color) {
  switch (color) {
  case 'BW': return 'Brilliant White';
  case 'CD': return 'Cool Dot';
  case 'CS': return 'Cold Stone';
  case 'DS': return 'Desert Sand';
  case 'GG': return 'Granite Grey';
  case 'GR': return 'Grey';
  case 'MB': return 'Moon Beam';
  case 'PA': return 'Plein Air';
  case 'QG': return 'Quiet Grey';
  case 'WH': return 'White';
  case 'WP': return 'Windowpane';
  default: return 'White';
  }
}