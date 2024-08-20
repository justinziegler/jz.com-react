
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function TypeSelect(props) {

  const handleType = (e) => {
    props.setType(e.target.dataset.type)
    props.setTypeName(e.target.dataset.typename)
    props.handleSku();
  }

  const p = props.page
  const c = p.comboProduct[0]
  let addlClass = ''
  if (p.colorSelection) addlClass = 'inline'

  let type = ''
  let size = ''
  let typeName = ''
  let showLabelOnDefaultCatId = true
  let showLabel = true
  let mainPrice = 0
  let difference = 0
  
  function getType(catId) {
    if (catId === p.defaultCatId && type == '') {
      type = p.defaultProductType
      typeName = p.shortName 
    } else if (catId == c.comboProductId) {
      type = c.comboProductType
      typeName = c.shortName
    }
    p.skus.forEach(item => {
      size = item.size
      if (catId === item.catId) {
        mainPrice = 0
        difference = item.discount
        showLabel = true

        if (p.catType !== 'mattress') {
          showLabel = false
        } else if (catId === p.defaultCatId && !showLabelOnDefaultCatId) {
          showLabel = false
        } else if (catId !== p.defaultCatId) {
          p.skus.forEach(main => {
            if (main.catId == p.defaultCatId && main.size === item.size) {
              mainPrice = main.salePrice
            }
          })
          difference = item.salePrice - mainPrice
          if (difference <= 0 && !showLabelOnDefaultCatId) {
            showLabel = false
          }
        }
      }
    })
  }

  let Items = []
  p.catIds.forEach((catId, index) => {
    getType(catId)
    Items.push(
      <OverlayTrigger 
        placement='top' 
        overlay={<Tooltip id={ type }>{ typeName }</Tooltip>}
        key={ `typeselect${ index }`}
      >
        <button data-type={ type }
          data-typename={ typeName }
          data-active={ type === props.type }
          role='button' 
          tabIndex='0'
          onClick={ handleType }
        >
          <span className={ !p.comboProductButtonTitles && 'sr-only'}>
            { typeName }
          </span>
          { showLabel &&
            <label data-active-size={ size }>
              { showLabelOnDefaultCatId ?
                `${ difference } Off`
              :
                `Upgrade for +${ difference }`
              }
            </label>
          }
        </button>
      </OverlayTrigger>
    )
  })

  return (
  <div className={ `type-select ${ addlClass }` }
    data-active-product={ props.typeName }
    data-label={ p.comboProductButtonLabels }
    data-product-types={ p.catIds.length }
  >
    { Items }
  </div>
  )
}

export default TypeSelect