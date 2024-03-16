import React from 'react';
import { useState } from 'react';
import { isElementInViewport, onVisibilityChange } from '../components/in-viewport.js';
import { nextSlide, prevSlide, setActive, slideshowDots } from '../components/slideshow.js';

import '../assets/fonts.css';
import '../assets/header.css';
import '../assets/bootstrap-grid.css';
import '../assets/modal.bootstrap.css';
import '../scss/product-display.scss';
import '../scss/promotion-value-propositions.scss';

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

const Slide = ({ isActive, onClick}) => {
  return <div onClick={ onClick }> {isActive ? 'Active' : 'Not active'}</div>
}



export const ValuePropositions = () => {
  var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

  ///
  const mobile = window.innerWidth < 992;
  let role = 'generic';
  let tabIndex = -1;
  if (mobile) {
    role = 'button';
    tabIndex = 0;
  }
  const stageItems = document.querySelectorAll('.made-simple .stage > div');
  const btns = document.querySelectorAll('.made-simple .dots button');


  const frame = document.querySelector('.made-simple .frame');
  const dotsContainer = document.querySelector('.made-simple .dots');

  var handler = onVisibilityChange(frame, function() {
    frame.classList.add('autoplay');
  });
  

  // const madeSimple = new SwipeIt('.made-simple .frame');

  // madeSimple
  // .on('swipeLeft',function(e) {
  //   frame.classList.remove('autoplay');
  //   nextSlide(e.target);
  // })
  // .on('swipeRight',function(e){
  //   frame.classList.remove('autoplay');
  //   prevSlide(e.target);
  // });

  btns.forEach(btn => {
    btn.addEventListener('click', event => {
      frame.classList.remove('autoplay');
      slideshowDots(btn, dotsContainer);
    })
  });

  // stageItems.forEach(item => { 
  //   item.addEventListener('click', event => {
  //     if (window.innerWidth > 767) {
  //       stageItems.forEach(s => { s.setAttribute('data-active', false); });
  //       item.setAttribute('data-active', true);
  //       const slide = item.dataset.slide;
  //       const dot = item.closest('.frame').querySelector(`.dots button[data-slide="${slide}"]`);
  //       slideshowDots(dot, dotsContainer);
  //     }
  //   })
  // })

  

  function navigateSlides(e) {
    console.log('got here');
    stageItems.forEach(s => { s.setAttribute('data-active', false); });
    stageItems.forEach(s => { s.setAttribute('data-active', false); });
    e.target.setAttribute('data-active', true);
  }

  const [activeElement, setActiveElement] = useState(0);

const updateActiveElement = (id) => {
    setActiveElement(activeElement !== id ? id : 0);
}
  return (
    <>
      <section className="made-simple">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-5 col-lg-offset-1">
              <h2>Mattress Buying<br /> Made Simple</h2>
              <div className="frame" data-current="1">
                <div className="stage">
                  { items.map(function(item, index){
                    const active = this.state.activeIndex === index; 
                    // <div 
                    //   data-slide={`${index + 1}`} 
                    //   data-active={ active } 
                    //   key={ `slide-${ index + 1}`}
                    //   role={ role }
                    //   tabIndex={ tabIndex }
                    //   onClick={handleClick.bind(this, index, this.props)}
                    //   >
                    //   <h4>{ item.title }</h4>
                    //   <div className="content">
                    //     <p>{ item.details }</p>
                    //   </div>
                    // </div>
                    <Slide active={ index === activeElement} onClick={() => updateActiveElement(index)} />
                  })}
                </div>
                <div className="dots">
                  { items.map((item, index) =>
                    <button data-slide={`${index + 1}`}
                      data-active={`${index === 0}`}
                      key={ `btn-${ index + 1}`}
                      tabIndex={ tabIndex }
                      >
                  </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}