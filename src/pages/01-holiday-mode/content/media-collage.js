import { videos } from './content'
import '../../../scss/01-holiday-mode/media-collage.scss'

function MediaCollage(props) {
  return (
    <div className='media-collage'>
      <div className='container'>
        <div className='row'>
          <div className='collection col-xs-12 col-sm-6 col-md-4'>
            <div className='group row'>
              <div className='col-1 col-xs-6'>
                <div className='row'>
                  <div className='col-xs-12'>
                    <div className='collage1 pic lazyload sq'>
                      <div className='play' 
                        onClick={ props.handleShow } 
                        data-videosrc={ videos[1] }>
                      </div>
                    </div>
                  </div>
                  <div className='col-xs-12'>
                    <div className='collage3 pic lazyload sq'></div>
                  </div>
                </div>
              </div>
              <div className='col-2 col-xs-6'>
                <div className='collage2 pic lazyload tall'></div>
              </div>
            </div>
          </div>
          <div className='collection col-xs-12 col-sm-6 col-md-4'>
            <div className='row'>
              <div className='col-xs-12'>
                <div className='collage4 pic lazyload wide'></div>
              </div>
              <div className='col-1 col-xs-6'>
                <div className='collage5 pic lazyload sq'>
                  <div className='play' 
                    onClick={ props.handleShow } 
                    data-videosrc={ videos[2] }>
                  </div>
                </div>
              </div>
              <div className='col-2 col-xs-6'>
                <div className='collage6 pic lazyload sq'>
                  <div className='play' 
                    onClick={ props.handleShow } 
                    data-videosrc={ videos[3] }>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='collection col-xs-12 col-md-4'>
            <div className='group row'>
              <div className='col-1 col-xs-6'>
                <div className='collage7 pic lazyload tall'></div>
              </div>
              <div className='col-2 col-xs-6'>
                <div className='collage8 pic lazyload sq'></div>
                <div className='collage9 pic lazyload sq'>
                  <div className='play' 
                    onClick={ props.handleShow } 
                    data-videosrc={ videos[4] }>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaCollage