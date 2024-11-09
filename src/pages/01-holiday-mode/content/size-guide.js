import React from 'react'
import '../../../scss/01-holiday-mode/size-guide.scss'

function SizeGuide(props) {
  const skus = props.skus;
  return (
    <div className='size-guide'>
      <div className='specs panel-group' id='specs'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h6 className='panel-title'>
              <div className='collapsed'>
                Mattress Size Guide
              </div>
            </h6>
          </div>
          <div id='sizeGuide' 
            className='panel-collapse'
          >
            <div className='panel-body'>
              <div className='row'>
                { skus.map((p, index) => 
                  <div className='col-xs-6 col-sm-4' key={ `sz${index}` }>
                    <p><b>{ p.name }</b><br />
                    { p.w } x { p.l } x { p.h }<br />
                    { p.weight }</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SizeGuide