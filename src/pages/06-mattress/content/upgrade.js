import '../../../scss/sections/upgrade.scss'

function Upgrade(props) {
  return (
    <section className='upgrade new lazyload'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-6'>
            <div className='logo-lull'></div>
            <h2>It's Time for an Upgrade</h2>
            <h3>Better mattress. Better rest. Better you.<br /> Meet our four-layer premium memory foam mattress<br className='visible-xssm visible-lg' /> with enhanced cooling, comfort, and support.</h3>
              <ul>
                <li className='layers'>4<br /> Layers</li>
                <li className='memory-foam'>Memory<br /> Foam</li>
                <li className='cooling'>Cooling<br /> Technology</li>
                <li className='height'>12'<br /> Height</li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Upgrade