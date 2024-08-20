import React from 'react';
import { galleryContent } from './gallery-content.js';
import { Controller, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function GalleryInfo(props) {
  return (
    <div className="gallery-info" data-current={ props.currentGroup }>  
      <Swiper 
        className=""
        modules={[Controller, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={ props.setInfoSwiper }
        controller={{ control: props.gallerySwiper }}
        speed={500}
      >
        { galleryContent.map(x =>
          <SwiperSlide 
            data-group-name={ x.group } 
            data-category={ x.category } 
            key={ 'info' + x.id }
          >
            { x.class !== 'divider' &&
              <>
                <div className="details">
                  { x.type !== 'Website' ?
                    <h3>
                      <span className="title">{ x.title }</span>
                      { x.mobile ? 
                        <span className="version" data-slide="2">(mobile)</span> : 
                        <span className="version" data-slide="1">(desktop)</span>
                      }
                    </h3>
                    : 
                    <h3>
                      <span className="title">{ x.title }</span>
                    </h3>
                  }
                  { x.category !== 'more' &&
                    <div className="group-nav"> 
                      { x.groupSlide === 1 ?
                        <div>
                          <span 
                            className="dot" 
                            data-slide="1" 
                            data-active={ !x.mobile } 
                          ></span>                                    
                          <span className="dot" 
                            data-slide="2" 
                            data-active={ x.mobile } 
                            onClick={ props.nextSlide }
                          ></span>
                        </div>
                      :
                        <div>
                          <span 
                            className="dot" data-slide="1" data-active={ !x.mobile } 
                            onClick={ props.prevSlide }
                          ></span>                                    
                          <span className="dot" 
                            data-slide="2" 
                            data-active={ x.mobile } 
                          ></span>
                        </div>
                      }
                    </div>
                  }
                </div>
                
                <div className="info">
                  { x.description !== '' && <p>{ x.description }</p> }
                  { x.link !== null && (
                    <ul className="site-link">
                      <li key={ x.group }><a href={ x.link } rel="noopener noreferrer" target="_blank">Visit page</a> &raquo;
                      { (x.type === 'Checkout Page' && x.group !== 'cart') && 
                        <span>
                          <br />
                          (requires an item added to cart)
                        </span>
                      }
                      </li>
                    </ul>
                  )}
                </div>
              </>
            }

            { x.class !== 'divider' &&
              <div className="footer">
                <ul className="tools">
                  { x.tools != null && (
                      x.tools.map((tool, index) => 
                      <li key={ 'footer' + x.id + '-' + index }>{ tool }</li>
                    )
                  )}
                </ul>
              </div>
            }
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default GalleryInfo;