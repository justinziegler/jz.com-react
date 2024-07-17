import React from 'react';


function SizeGuide(props) {
  const skus = props.skus;

  return (
    <div className="size-guide">
      <div className="specs panel-group" id="specs" role="tablist" aria-multiselectable="true">
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="detailsHeadingOne">
            <h6 className="panel-title">
              <div className="collapsed" role="button" data-toggle="collapse" data-parent="#details" href="#">
                Mattress Size Guide
              </div>
            </h6>
          </div>
          <div id="sizeGuide" 
            className="panel-collapse" role="tabpanel" aria-labelledby="detailsHeadingOne"
          >
            <div className="panel-body">
              <div className="row">
                { skus.map(p => 
                  <div className="col-xs-6 col-sm-4">
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

export default SizeGuide;