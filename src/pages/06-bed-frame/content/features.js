import React, { useState } from 'react';

function Gallery(props) {
  return (
    <props.Swiper 
      enableMouseEvents 
      index={ props.activeIndex }
      onSlideChange={ props.handleTabs }
      onSwiper={ props.setGallerySwiper }
    >
      { props.items.map((item, index) =>
        <props.SwiperSlide className={ item.className } key={ `slide-${index + 1}` }>
          <h4>{ item.title }</h4>
          <p>{ item.content }</p>
        </props.SwiperSlide>
      )}
    </props.Swiper>
  )
}

function Features(props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [gallerySwiper, setGallerySwiper] = useState(null) 
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

  const handleActiveIndex = (e) => {
    // setActiveIndex(index)
    e.preventDefault()
    gallerySwiper.slideTo(Number(e.target.dataset.index))
    setActiveIndex(Number(e.target.dataset.index))
  };

  const handleTabs = () => {
    setActiveIndex(gallerySwiper.activeIndex)
  }

  

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
                    data-index={ index }
                    tabIndex='0'  
                    key={ `slide-${index + 1}` }
                    onClick={ handleActiveIndex } 
                  >
                    { item.className }
                  </button>
                )}
              </div>
              <Gallery 
                Swiper={ props.Swiper }
                SwiperSlide={ props.SwiperSlide }
                items={ items }
                setGallerySwiper={ setGallerySwiper }
                setActiveIndex={ setActiveIndex }
                handleTabs={ handleTabs }
              />
              {/* <props.Swiper 
                enableMouseEvents 
                index={ activeIndex }
                onChangeIndex={ handleChangeIndex }
                items={ items }
              >
                { items.map((item, index) =>
                  <props.SwiperSlide className={ item.className } key={ `slide-${index + 1}` }>
                    <h4>{ item.title }</h4>
                    <p>{ item.content }</p>
                  </props.SwiperSlide>
                )}
              </props.Swiper> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features