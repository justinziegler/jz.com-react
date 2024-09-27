import '../../scss/sections/july4-promo.scss'

function July4Promo(props) {
  return (
    <section className='july4-promo' data-theme={ 'dark' }>
      <a name='july4-promo' className='anchor'></a>
      <div className='container'>
        <div className='row'>
          <div className='box col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2'>
            <div className='border'>
              <p>Labor Day Sale</p>
              <div className='divider'>
                <span>UP TO</span>
              </div>
              <h2>${ props.mattressDiscount } OFF</h2>
              <h3>Lull Mattresses</h3>
              <div className='divider'></div>
              <p className='promo-cta'>Don't Sleep Through<br /> This Sale!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default July4Promo