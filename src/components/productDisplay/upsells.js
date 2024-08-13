import React from 'react';
import Upsell from './upsell';

function Upsells(props) {
  const p = props.page
  const upsells = p.upsells
  let singleUpsell = true
  let additionalClass = 'single'
  if (upsells.length > 1) {
    singleUpsell = false
    additionalClass = 'multiple'
  }

  return (
    <div className='col-xs-12'>
      <div className={ `upsell-list ${ additionalClass }`}>
        { p.upsellListTitle !== '' &&
          <h2><span>{ p.upsellListTitle }</span></h2>
        }
        { p.upsellListSubtitle !== '' &&
          <p>{ p.upsellListSubtitle }</p>
        }
        <ul className='upsells'>
          { upsells.map((u, index) =>
            <Upsell 
              u={ u }
              initial={ props.initial.upsells[index]}
              index={ index }
              singleUpsell={ singleUpsell }
              prefix={ props.prefix }
              active={ index === 0 ? props.upsell0Active : props.upsell1Active }
              setActive={ index === 0 ? props.setUpsell0Active : props.setUpsell1Active }
              upsellSku={ index === 0 ? props.upsell0Sku : props.upsell1Sku }
              setUpsellSku={ index === 0 ? props.setUpsell0Sku : props.setUpsell1Sku }
              size={ index === 0 ? props.upsell0Size : props.upsell1Size }
              upsellSize={ index === 0 ? props.upsell0Size : props.upsell1Size }
            />
          )}
        </ul>
      </div>
    </div>
  )
}

export default Upsells