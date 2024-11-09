import '../../../scss/08-sheets/comfort.scss'

function Comfort(props) {
  return (
    <section className='comfort photo-module photo-right'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='photo-frame col-xs-12 col-md-6 col-md-push-6'>
            <div className='photo lazyload' role='img' aria-label='Image: Silky smooth sheets'></div>
          </div>
          <div className='content left-col col-xs-12 col-md-6 col-md-pull-6'>
            <h2>Beautifully Designed with <strong>Comfort in Mind</strong></h2>
            <p>Silky, soft, and buttery, Lull's signature Organic Cotton Sheets have a 400 thread count making them long lasting and softer with each wash.</p>
            <p>Lull's specialty three-over, one-under sateen weave feels silky and smooth against your skin keeping you cool on summer nights and cozy all winter long.</p>
            <p>The set is available in calming neutral colors and patterns designed to complement your bedroom. Your body will feel well-rested with colors and designs that soothe you<br className='visible-md' /> to sleep.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comfort