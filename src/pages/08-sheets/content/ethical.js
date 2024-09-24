function Ethical(props) {
  const items = [
    {
      org: 'Oeko-Tex Standard 100',
      className: 'oeko-tex',
      content: <p>Standard 100 by Oeko-Tex certified, which means the fabrics used are tested and verified to be free from harmful levels of more than 300 substances.</p>
    },
    {
      org: 'Global Organic Textile Standard',
      className: 'gots',
      content: <p>The Global Organic Textile Standard ensures that the sourcing and manufacturing of textile material is done in a social and environmentally responsible manner.</p>
    },
    {
      org: 'Sustainable Furnishing Council Member',
      className: 'sfc',
      content: <p>Environmental and health impacts of all products are analyzed and all possible steps are taken to minimize carbon emissions, waste stream pollutants, and un-recyclable content.
    </p>
    },
    {
      org: 'Newsweek',
      className: 'newsweek',
      content: <p>Lull has been recognized as one of <strong>America's Best Trending Online Shops</strong> by Newsweek for our commitment to offering exceptional customer service, 
      a painless ordering process, and an easy-to-use website.</p>
    }
  ]
  return (
    <section className='ethical lazyload'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='row'>
              <div className='col-xs-12'>
                <h2>Safe, Sustainable,
                  <br className='visible-xxs' /> and Award-Winning</h2>
              </div>
            </div>
            <div className='content row'>
              { items.map(item =>
                <div 
                  className='col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-0'
                  key={ item.className }
                >
                  <div className='row'>
                    <div className='logo-col col-xs-4 col-sm-3 col-md-offset-1'>
                      <div 
                        className={ `logo ${ item.className }` } 
                        role='img' 
                        aria-label={ `Logo: ${ item.org }`}>
                      </div>
                    </div>
                    <div className='col-xs-8 col-sm-offset-1 col-md-offset-0'>
                      { item.content }
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ethical
