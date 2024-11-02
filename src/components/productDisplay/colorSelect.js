
import Tooltip        from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import '../../scss/product-display/color+quantity.scss'

function ColorSelect(props) {
  const p = props.product;

  const handleColor = (e) => {
    props.setColor(e.target.dataset.color)
    props.setColorName(e.target.dataset.colorName)
    props.handleSku();
  }

  let addlClass = '';
  if ((p.colorSelection && p.qtySelection) || (p.colorSelection && p.catIds.length > 1)) {
    addlClass = 'inline'
  }
  const colors = p.colorDisplayOrder;
  return (
    <div 
      className={ `color-select ${ addlClass }`}
      data-active-color={ props.colorName }>
      { colors.map((c, index) =>
        <OverlayTrigger 
          placement='top' 
          overlay={<Tooltip id={ c.color }>{ c.colorName }</Tooltip>}
          key={ c.color }
        >
          <button 
            className='color' 
            tabIndex='0' 
            data-color={ c.color }
            data-color-name={ c.colorName }
            data-active={ c.color === props.color }
            onClick={ handleColor }
            key={ `colorselect${ index }`}
          >
            <span className='sr-only'>{ c.colorName }</span>
          </button>
        </OverlayTrigger>
      )}
    </div>
  )
}

export default ColorSelect