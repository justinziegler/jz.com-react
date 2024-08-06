

function ColorSelect(props) {
  const p = props.page;
  let addlClass = '';
  if ((p.colorSelection && p.qtySelection) || (p.colorSelection && p.catIds.length > 1)) {
    addlClass = 'inline'
  }
  const colors = p.colorDisplayOrder;
  return (
    <div 
      className={ `color-select ${ addlClass }`}
      data-active-color={ props.activeColorName }>
      { colors.map((c, index) =>
        <button 
          className='color' 
          role='button' 
          tabIndex='0' 
          data-color={ c.color }
          data-color-name={ c.colorName }
          data-active={ c.color === props.activeColor }
          onClick={ props.handleColor }
          key={ `colorselect${ index }`}
        >
          <span className='sr-only'>{ c.colorName }</span>
        </button>
      )}
    </div>
  )
}

export default ColorSelect;