import React                   from 'react'
import { Pagination }          from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Player }              from 'video-react'
import                              'lazysizes'
import                              'swiper/css'
import                              'swiper/css/pagination'
import                              'video-react/dist/video-react.css'

function Gallery(props) {
  const p = props.product

  let Items = []
  for (let i = 1; i <= p.gallerySlides; i++) {
    let additionalClass = ''
    if (i === p.galleryDimensions) additionalClass = 'dimensions'
    Items.push(
      <SwiperSlide 
        className={ `slide-${i} lazyload ${ additionalClass }`} 
        role='img' 
        aria-label={ `Image: ${ p.heading } image ${ i }`}
        key={ `slide-${ i }`}
      >
        { i === p.galleryDimensions &&
          <>
            { p.skus.map((item, index) => 
              <React.Fragment key={ `dimensions-${ index }` }>  
                { (item.type === p.defaultProductType && item.color === p.defaultColor) &&
                  <span 
                    data-visible={ item.size === props.size }
                    key={ item.sku }
                  >
                    <span className='length' data-length={ item.l }></span>
                    <span className='width' data-width={ item.w }></span>
                    <span className='height' data-height={ item.h }></span>
                  </span>
                }
              </React.Fragment>
            )}
          </>
        }
        { p.galleryVideo &&
          <>
            { i === p.galleryVideoSlide &&
              <Player
                playsInline
                autoPlay={ true }
                loop={ true }
                muted={ true }
                volume={ 0 }
                poster={ p.galleryVideoPoster } 
                src={ p.galleryVideoUrl }
              />
            }
          </>
        }
      </SwiperSlide>
    )
  }
  return (
    <div className='product-gallery col-xs-12 col-sm-6 gallery-left'
      data-color={ props.color }
      data-type={ props.type }
      data-upsell-selected='false'>
      <Swiper className='carousel' modules={[Pagination]} pagination={{ clickable: true }}>
        { Items }
      </Swiper>
    </div>
  )
} 

export default Gallery;