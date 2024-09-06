import '../../scss/section-value-props.scss'

function ValueProps(props) {
  return (
    <section className='value-props'>
      <div className='container'>
        { props.vp.map(valueProps =>
          <>
            { valueProps.heading !== '' &&
              <div className='row'>
                <div className='col-xs-12'>
                  <h2 className={ valueProps.subheading === undefined ? 'no-subhead' : '' }>
                    { valueProps.heading  }
                  </h2>
                  { valueProps.subheading !== undefined &&
                    <h3>{ valueProps.subheading }</h3>
                  }
                </div>
              </div> 
            }
            <div className='row'>
              { valueProps.items.map(item =>
                <>
                  { item.title === 'clearfix' ?
                    <div className={ `clearfix ${ item.classes }`}></div>
                    :
                    <div className={ `col-xs-10 col-xs-offset-2 ${ item.classes }` }>
                      <h4 className={ item.titleClass }>{ item.title }</h4>
                      { item.content }
                    </div>
                  }
                </>
              )}
            </div>
          </>
        )}        
      </div>
    </section>
  )
}

export default ValueProps