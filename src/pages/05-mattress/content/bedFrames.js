import React, { useState } from 'react';
import { preventDefault } from '../../../components/utils/preventDefault'
import { ViewportAnchor } from '../../../components/utils/viewportAnchor';
import '../../../scss/section-bed-frames.scss'

function BedFrames(props) {
  const [inViewport, setInViewport] = useState(false)

  const framesPrimary = [
    {
      type: 'wood',
      className: 'slide-in',
      title: <span>Gaviota Platform<br className='visible-xxs visible-sm' /> Bed Frame</span>
    },
    {
      type: 'metal',
      className: 'slide-in-2',
      title: <span>Arrellaga Folding<br className='visible-xxs visible-sm' /> Bed Frame</span>
    },
    {
      type: 'foundation',
      className: 'slide-in',
      title: <span>Lull Mattress<br className='visible-xxs' /> Foundation</span>
    }
  ]

  const framesSecondary = [
    {
      type: 'flat',
      className: 'slide-in-2',
      title: 'Flat Platform'
    },
    {
      type: 'adjustable',
      className: 'slide-in-3',
      title: 'Adjustable Bed'
    },
    {
      type: 'slatted',
      className: 'slide-in-2',
      title: 'Slatted Base'
    }
  ]

  return (
    <section className='bed-frames'>
      <a name='bedframes'></a>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <h2>Lull Mattresses Pair Best with Lull<br className='hidden-xxs' /> Bed Frames and Foundations</h2>
          </div>
          <div className='frames primary col-xs-12'>
            <ul>
              { framesPrimary.map(frame =>
                <li 
                  data-type={ frame.type }
                  class={ inViewport ? frame.className : null }
                >
                  <a href='./' role='button' tabIndex='0' onClick={ preventDefault }>
                    { frame.title }
                  </a>              
                </li>
              )}
            </ul>
          </div>
          
          <div className='frames secondary col-xs-12 col-sm-8 col-sm-offset-2'>
            <h3>Also works with other bed frames and more.<br className='hidden-xxs' /> Use with or without a box spring.</h3>
            <ViewportAnchor 
              inViewport= { inViewport } 
              setInViewport={ setInViewport } 
            />
            <ul>
              { framesSecondary.map(frame =>
                <li data-type={ frame.type }
                  class={ inViewport ? frame.className : null }
                >
                  { frame.title }
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BedFrames