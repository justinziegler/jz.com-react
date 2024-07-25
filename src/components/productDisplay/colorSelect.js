

function ColorSelect(props) {
  const p = props.page;
  let addlClass = '';
  if ((p.colorSelection && p.qtySelection) || (p.colorSelection && p.catIds.length > 1)) {
    addlClass = 'inline'
  }
  const colors = p.colorDisplayOrder;
  return (
    <ul 
      className={ `color-select ${ addlClass }`}
      data-active-color={ p.defaultColorName }>
      { colors.map((c, index) =>
        <li 
          className='color' 
          role='button' 
          tabIndex='0' 
          data-color={ c.color }
          data-color-name={ c.colorName }
          data-active={ c.color === p.defaultColor }
          key={ `colorselect${ index }`}
        >
          <span className='sr-only'>{ c.colorName }</span>
        </li>
      )}
    </ul>
  )
}

export default ColorSelect;