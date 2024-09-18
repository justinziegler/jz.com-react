import '../../../scss/section-firmness-scale.scss'

function FirmnessScale(props) {
  const softMedium = []
  if (!softMedium.length) {
    for (let i = 1; i <= 19; i++) {
      softMedium.push(
        <span key={ `soft-medium-${ i }` }></span>
      )
    }
  }

  const firm = []
  if (!firm.length) {
    for (let i = 1; i <= 10; i++) {
      firm.push(
        <span key={ `firm-${ i }` }></span>
      )
    }
  }

  return (
    <section className='firmness'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='row'>
              <div className='col-xs-12 col-sm-4 col-sm-offset-1'>
                <h2>Not Too Firm,<br /> 
                  Not Too Soft…
                  <span>Just Right.</span>
                </h2>
              </div>
              <div className='content col-xs-12 col-sm-6'>
                <div className='chart' role='img' aria-label='Illustration: a chart depicting 5-7 on a firmness scale of 1-10'>
                  <div className='scale'>
                    <div data-firmness='soft-medium'>
                      { softMedium }
                    </div>
                    <div data-firmness='firm'>              
                      { firm }
                    </div>
                  </div>
                  <div className='markers'>
                    <div data-firmness='soft'>1</div>
                    <div data-firmness='medium-firm'>5&ndash;7</div>
                    <div data-firmness='firm'>10</div>
                  </div>
                  <div className='labels'>
                    <div data-firmness='soft'></div>
                    <div data-firmness='medium-firm'></div>
                    <div data-firmness='firm'></div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xs-12 col-md-9 col-md-offset-1 col-lg-10'>
                    <h3>Balanced medium-firm construction seamlessly adapts to your body shape and sleep style for that “just right” feeling.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirmnessScale