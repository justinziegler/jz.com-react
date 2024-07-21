import React, { useState } from 'react';
import Main from '../../components/main';
import '../../scss/product-display.scss'
import '../../scss/promotion-mattress-animation.scss'
import '../../scss/promotion-value-propositions.scss'

function ValuePropositions () {
  const page = {
    pageUrl: 'value-props',
    headerTitle: 'Value Propositions',
    headerIntro: [
      <p key="vp1">I would often be tasked with developing page sections that looked and functioned differently depending on device type. This project came about from a desire to build something lightweight that allowed for alternate functionality on different devices. This page features a swipe-able slideshow on mobile and a content accordion on larger screens. Check out the <a href="mattress-animation">following page</a> for another example.'</p>
    ]
  }
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
  return (
    <Main page={ page }>
      <section className="made-simple">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-5 col-lg-offset-1">
              <h2>Mattress Buying<br /> Made Simple</h2>
              <div className="frame" data-current="1">
                <div className="stage">
                  { items.map((item, index) =>
                    <div data-slide={ index + 1 } data-active={ index === 0} key={ `item${ index}` }>
                      <h4>{ item.title }</h4>
                      <div className="content">
                        <p>{ item.details }</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="dots">
                  { items.map((item, index) =>
                    <button data-slide={ index + 1 } 
                      data-active={ index === 0 }
                      role="button" 
                      key={ `btn${index}`}
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
    </Main>
  )
}

export default ValuePropositions;