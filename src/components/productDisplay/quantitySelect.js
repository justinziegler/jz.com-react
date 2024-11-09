
function QuantitySelect(props) {
  const p = props.product;
  let addlClass = '';
  if (p.colorSelection && p.qtySelection) addlClass = 'inline';
  let Items = [];
  for (let i = 0; i <= p.maxQty; i++) {
    Items.push(
      <li
        data-quantity={ i + 1 } role='button' tabIndex='0'>
        { i + 1 }
      </li>
    )
  }
  return (
    <ul className={ `quantity-select ${ addlClass }` }>
      { Items }
    </ul>
  )
}

export default QuantitySelect