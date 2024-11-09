import '../../../scss/08-sheets/sustainable.scss'

function Sustainable(props) {
  return (
    <section className='sustainable photo-module photo-left'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='photo-frame col-xs-12 col-md-6'>
            <div className='photo lazyload' role='img' aria-label='Image: Couple making bed'></div>
          </div>
          <div className='content right-col col-xs-12 col-md-6'>
            <div className='row'>
              <div className='col-xs-12'>
                <h2><strong>Organic Luxury</strong><br /> Made Sustainably</h2>
                <p>
                  Sleep easy knowing your bedding meets the <br /> 
                  highest safety and environmental standards.
                </p>
              </div>
            </div>
            <div className='certs row'>
              <div className='logo-col col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-0 col-md-3'>
                <div className='logo gots' role='img' aria-label='Global Organic Textile Standard'></div>
              </div>
              <div className='col-xs-12 col-sm-8 col-md-9'>
                <p>Lull's GOTS Certified (Global Organic <br className='visible-md' /> 
                  Textile Standard) organic sheets are <br className='visible-md' /> 
                  made with cotton that's grown without pesticides, herbicides, or fertilizers.</p>
              </div>
            </div>
            <div className='row'>
              <div className='logo-col col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-0 col-md-3'>
                <div className='logo oeko-tex' role='img' aria-label='Logo: Oeko-Tex Standard 100'></div>
              </div>
              <div className='col-xs-12 col-sm-8 col-md-9'>
                <p>The Lull Organic Sheets are STANDARD 100 by OEKO-TEX certified, which means the fabrics used are tested and verified to be free from harmful levels of over 300 substances.</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12'>
                <p className='last'>
                  From seed to your home, we scrutinize every ingredient <br className='visible-md visible-lg' /> 
                  so you don't have to. That means it's better for you and <br className='visible-md visible-lg' />
                  the environment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sustainable