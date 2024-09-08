import React, { useState } from 'react';

function MadeSimple(props) {
  const items = [
    {
      title: 'Free Shipping & Easy Returns',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies nisi a euismod bibendum. Sed congue sem at aliquet interdum.'
    },
    {
      title: '365 Night Trial',
      details: 'Donec vehicula porta metus, id malesuada massa ornare in. Vivamus vitae nisi aliquet, luctus urna sed, viverra leo.'
    },
    {
      title: 'Lifetime Warranty',
      details: 'Ut pellentesque id nisi vitae bibendum. Proin a consectetur magna. Nam sit amet metus ac metus condimentum aliquet.'
    },
    {
      title: 'Easy Financing Available',
      details: 'Aliquam erat volutpat. Suspendisse vitae lectus id massa tristique mattis. Nunc consectetur luctus augue sed'
    }
  ]

  const [active, setActive] = useState(0)

  return (
    <section class="made-simple">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-lg-5 col-lg-offset-1">
            <h2>Mattress Buying<br /> Made Simple</h2>
            <div class="frame" data-current={ active }>
              <div class="stage">
                { items.map((item, index) =>
                  <div data-slide={ index } data-active={ index === active }>
                    <h4>{ item.title }</h4>
                    <div class="content">
                      <p>{ item.details }</p>
                    </div>
                  </div>
                )}
              </div>
              <div class="dots">
                { items.map((item, index) =>
                  <button data-slide={ index } 
                    data-active={ index === active } 
                    tabIndex="0"
                    >
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MadeSimple