function Callouts(props) {
  const items = [
    {
      title: 'Lifetime Warranty',
      content: 'Guaranteed restful sleep',
      className: 'warranty'
    },
    {
      title: '365 Night Stress-Free Trial',
      content: 'Hassle-Free Returns',
      className: 'trial'
    },
    {
      title: 'Independently Rated',
      content: 'BEST BUY and RECOMMENDED',
      className: 'recommended'
    }
  ]
  return (
    <div className='row'>
      <div className='callouts col-xs-12'>
        <div className='row'>
          { items.map((item, index) => 
            <div className='callout col-xs-12' key={ `callout${ index }` }>
              <div className='row'>
                <div 
                  className={ `badge ${ item.className } col-xs-4 `} 
                  role='img' 
                  aria-label={ item.title }>
                </div>
                <div className='tagline col-xs-8'>
                  <h4>{ item.title }</h4>
                  <p>{ item.content }</p>
                </div>
              </div>
            </div>
          )}
        </div>	
      </div>
    </div>
  )
}

export default Callouts