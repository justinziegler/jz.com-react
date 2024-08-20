import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

function Features(props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const items = [
    {
      title: 'Modern Design',
      content: 'Offering a modern take on a classic design, this versatile bed frame comes tufted or untufted and in two neutral colors, to complement any bedroom.',
      className: 'design'
    },
    {
      title: 'Ultimate Comfort',
      content: `Indulge in unparalleled lounge-ability.  Fully upholstered in linen-like fabric and padded with high quality foam – the Lull ${ props.productName } doesn't skimp on comfort.`,
      className: 'comfort'
    },
    {
      title: 'Quality Craftsmanship',
      content: 'Materials matter.  Every component, from wood to fabric, is carefully selected to provide the best in design, quality and support.',
      className: 'quality'
    },
  ]

  const handleChangeIndex = (index) => {
    setActiveIndex(index)
  };

  return (
    <section className='features'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='photo lazyload col-xs-12 col-sm-6' data-current={ activeIndex + 1 }></div>
          <div style={{ opacity: 0, height: 0, overflow: 'hidden' }}>
            {/* This is to help preload images  */}
            <div className='photo lazyload' data-current='2'></div>
            <div className='photo lazyload' data-current='3'></div>
          </div>
          <div className='content col-xs-12 col-sm-6 col-md-5 col-md-offset-1'>
            <div className='frame' data-current={ activeIndex + 1 } >
              <div className='dots'>
                { items.map((item, index) =>
                  <button 
                    data-slide={ index + 1 } 
                    role='button' 
                    tabIndex='0'  
                    key={ `slide-${index + 1}` }
                    onClick={ () => setActiveIndex(index) } 
                  >
                    { item.className }
                  </button>
                )}
              </div>
              <SwipeableViews 
                enableMouseEvents 
                index={ activeIndex }
                onChangeIndex={ handleChangeIndex }
              >
                { items.map((item, index) =>
                  <div className={ item.className } key={ `slide-${index + 1}` }>
                    <h4>{ item.title } { SwipeableViews.index }</h4>
                    <p>{ item.content }</p>
                  </div>
                )}
              </SwipeableViews>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features