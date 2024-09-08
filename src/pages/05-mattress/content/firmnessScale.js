import '../../../scss/section-firmness-scale.scss'

function FirmnessScale(props) {
  const softMedium = []
  if (!softMedium.length) {
    for (let i = 1; i <= 19; i++) {
      softMedium.push(
        <span></span>
      )
    }
  }

  const firm = []
  if (!firm.length) {
    for (let i = 1; i <= 10; i++) {
      firm.push(
        <span></span>
      )
    }
  }

  return (
    <section class='firmness'>
      <div class='container'>
        <div class='row'>
          <div class='col-xs-12'>
            <div class='row'>
              <div class='col-xs-12 col-sm-4 col-sm-offset-1'>
                <h2>Not Too Firm,<br /> 
                  Not Too Soft…
                  <span>Just Right.</span>
                </h2>
              </div>
              <div class='content col-xs-12 col-sm-6'>
                <div class='chart' role='img' aria-label='Illustration: a chart depicting 5-7 on a firmness scale of 1-10'>
                  <div class='scale'>
                    <div data-firmness='soft-medium'>
                      { softMedium }
                    </div>
                    <div data-firmness='firm'>              
                      { firm }
                    </div>
                  </div>
                  <div class='markers'>
                    <div data-firmness='soft'>1</div>
                    <div data-firmness='medium-firm'>5&ndash;7</div>
                    <div data-firmness='firm'>10</div>
                  </div>
                  <div class='labels'>
                    <div data-firmness='soft'></div>
                    <div data-firmness='medium-firm'></div>
                    <div data-firmness='firm'></div>
                  </div>
                </div>
                <div class='row'>
                  <div class='col-xs-12 col-md-9 col-md-offset-1 col-lg-10'>
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