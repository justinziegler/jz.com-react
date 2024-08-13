
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function TypeSelect(props) {

  const handleType = (e) => {
    props.setType(e.target.dataset.type)
    props.setProductName(e.target.dataset.productname)
    props.handleSku();
  }

  const p = props.page
  const c = p.comboProduct[0]
  let addlClass = ''
  if (p.colorSelection) addlClass = 'inline'

  let type = ''
  let size = ''
  let productName = ''
  let showLabelOnDefaultCatId = true
  let showLabel = true
  let mainPrice = 0
  let difference = 0
  
  function getType(catId) {
    if (catId === p.defaultCatId && type == '') {
      type = p.defaultProductType
      productName = p.shortName 
    } else if (catId == c.comboProductId) {
      type = c.comboProductType
      productName = c.shortName
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
        overlay={<Tooltip id={ type }>{ productName }</Tooltip>}
      >
        <button data-type={ type }
          data-productname={ productName }
          data-active={ type === props.type }
          role='button' 
          tabIndex='0'
          onClick={ handleType }
          key={ `typeselect${ index }`}
        >
          <span className={ !p.comboProductButtonTitles && 'sr-only'}>
            { productName }
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
    data-active-product={ props.productName }
    data-label={ p.comboProductButtonLabels }
    data-product-types={ p.catIds.length }>
    { Items }
  </div>
  )
}

export default TypeSelect