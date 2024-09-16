import React, { useState }  from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Player } from 'video-react';
// import ReactPlayer from 'react-player'
import 'lazysizes';
import { preventDefault } from '../../components/utils/preventDefault'
import Main from '../../components/pageSections/main';
import { slides } from './content/slides';
import { tweets } from './content/tweets';
import { faqs } from './content/faqs';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../scss/promotion-tiktok.scss'

const nav = [
  { 
    title: <>
            <span className='mute'>Mute</span>
            <span className='unmute'>Unmute</span>
           </>,
    className: 'mute-btn'
  },
  { 
    title: 'Reviews',
    target: 'reviews-carousel',
    className: 'nav-btn'
  },
  { 
    title: 'FAQs',
    target: 'faqs',
    className: 'nav-btn'
  },
  { 
    title: 'Save Now',
    target: 'email',
    className: 'nav-btn'
  },
  { 
    title: 'Lull',
    target: 'cta',
    className: 'nav-btn'
  },
]

function TiktokMimic () {
  const page = {
    pageUrl: 'tiktok',
    headerIntro: [
      'This promotion was created to engage social media users, and it turned out to be a hit. Features on display include:'
    ],
    headerBullets: [
      'Slideshow of a dozen short videos that auto-advance when complete',
      'Popup overlays of user reviews and FAQs',
      'Email capture redirect to main website'
    ]
  }
  const mattressDiscount = 200

  return (
    <Main page={ page }>
      <>
        <Swiper
          className='slideshow'

        >
          { slides.map((slide, index) =>
            <SwiperSlide
              id={ `slide${ index }`}
              key={ `slide${ index }`}
              data-slide={ index } 
              data-cta={ slide.cta }
            >
              <Player
                playsInline
                autoPlay={ true }
                loop 
                muted
                src={ slide.videoUrl }
              />
            </SwiperSlide>
          )}
        </Swiper>

        <div className='nav-overlay'></div>
        <div className='nav'>
          <ul>
            { nav.map(item => 
              <li className={ item.target === 'email' ? 'email-btn' : undefined }>
                <a href='./' 
                  className={ item.className } 
                  data-muted={ item.className === 'mute-btn' ? true : undefined }
                  data-target={ item.target !== undefined ? item.target : undefined }
                  role='button' 
                  tabIndex='0'
                  onClick={ preventDefault }
                >
                  { item.title }
                </a>
              </li>
            )}
          </ul>
          <a href='/shop' className='btn btn-md' role='button' tabIndex='-1'>
            Shop the Mattress
          </a>
        </div>

        <section className='reviews-carousel navy' data-active='false'>
          <div className='close'></div>
          { tweets.map(items =>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-12'>
                  <h2>Join the Hundreds of Thousands<br />Of Happy Sleepers Who Love<br /> Waking Up on a Lull Mattress</h2>
                </div>
                <div className='col-xs-12'>
                  <Swiper>
                    { items.reviews.map(reviews =>
                      <SwiperSlide>
                        <div className='item'>
                          <h4 
                            data-source-type='social' 
                            data-source={ reviews.source } 
                            data-reviewer={ reviews.name } 
                            className='lazyload'
                          >
                            { reviews.name }
                          </h4>
                          <div className='review'>
                            <p>{ reviews.review }</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    )}
                  </Swiper>
                </div>
              </div>
            </div>
          )}
          
        </section>

        <section className='faqs' data-active='false'>
          <div className='close'></div>
          <div className='faqs-heading'>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className='container faqs-container'>
            <div className='row'>
              <div className='faqs-content col-xs-12'>
                { faqs.map(faq =>
                  <div className='faq-question'>
                    <div className='user icon'></div>
                    <h3>{ faq.username }</h3>
                    <p>{ faq.question }</p>
                    <p className='date'>{ faq.date }</p>
                    <div className='faq-answer'>
                      <div className='logo icon'></div>
                      <h3>
                        lull <span className='checkmark icon'></span> 
                        <span className='teal'> <sup>.</sup></span> 
                        <span className='pink'>Creator</span>
                      </h3>
                      <p>{ faq.answer }</p>
                      <p className='date'>{ faq.date }</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className='email' data-active='false'>
          <div className='close'></div>
          <div className='email-capture container'>
            <div className='row'>
              <div className='col-xs-12'>
                <h2>UP TO</h2>
                { mattressDiscount > 1 ?
                  <h3 className='up-to'><sup>$</sup>{ mattressDiscount } OFF</h3>
                :
                  <h3 className='up-to'>{ mattressDiscount * 100 }<sup>%</sup> OFF</h3>
                }
                <h4><span className='any-size'>Lull Mattresses</span></h4>
                <h5>Fast, Free Shipping</h5>
              </div>
            </div>
            <div className='row'>
              <form>
                <div className='col-xs-12 col-sm-8 col-sm-offset-2'>
                  <input id='modalEmail' 
                    type='email' 
                    placeholder='Enter email address' 
                    aria-label='Enter email address' 
                    required 
                    tabIndex='2' 
                  />
                  <div id='emailsuggdiv'>
                    <input type='hidden' id='emailsugg' />
                  </div>
                </div>
                <div className='col-xs-12 col-sm-8 col-sm-offset-2'>
                  <button id='modalSubscribe' className='submit btn btn-teal btn-md' type='button'  tabIndex='6'>
                    Get  
                      { mattressDiscount < 1 ?
                        <>my { mattressDiscount * 100 }% OFF</>
                        :
                        <>
                          { mattressDiscount > 299 ?
                            <>My Exclusive Offer</>
                          :
                            <>my ${ mattressDiscount } OFF</>
                          }
                        </>
                      }
                  </button>  
                </div>
              </form>
            </div>
            <p>This form is not presently configured to gather emails.</p>
          </div>
        </section>

        <section className='cta' data-active={ false }>
          <div className='close'></div>
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

        
      </>
    </Main>
  )
}

export default TiktokMimic