import { preventDefault } from '../../../components/utils/preventDefault'

function CTA(props) {
  return (
    <section className='cta' data-active={ props.activeNavItem === 'cta' }>
      <div className='close' onClick={ props.closeSection }></div>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <h2>Hurry, Grab Your Lull Today!<br /> Give it a Try Stress-Free</h2>
            <p>Unsure about buying a mattress online? <br />
              Try the Original Mattress in your home<br />
              for 365 Nights.</p>
            <p>Don't love it? Arrange a quick,<br /> stress-free return.</p>
            <a 
              className='btn btn-md block' 
              href='/shop' 
              onClick={ preventDefault }
            >
              Shop the Mattress
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA