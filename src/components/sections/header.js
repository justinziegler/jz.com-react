import React           from 'react'
import Collapse        from 'react-bootstrap/Collapse'
import { navLinks }    from '../../data/navLinks'
import { getPageId }   from '../utils/getPageId'
import { getPrevPage } from '../utils/getPrevPage'
import { getNextPage } from '../utils/getNextPage'
import { useWidth }    from '../utils/useWidth'
import                      '../../scss/sections/header.scss'
import                      '../../css/bootstrap-grid.css'

function Header(props) {
  const p        = props.page
  const pageId   = getPageId(p.url)
  const prevPage = getPrevPage(p.url)
  const nextPage = getNextPage(p.url)
  let mobile     = useWidth() < 768

  return (
    <nav id='nav' data-collapsed={ !props.open } data-current-page={ p.url }>
      <div className='nav-container'>
        <div className='nav-col left'>
          { p.url !== '/' &&
            <>
              <a className='nav-btn home' href='../'>
                <span className='sr-only'>Home</span>
              </a>
              <h2>Justin Ziegler &nbsp;<span>Recent Work</span> </h2>
            </>
          }
        </div>
        
        { mobile ?
          <div className='nav-col right'>
            <a href='./' 
              className='hamburger' 
              onClick={ props.handleOpenHamburger }
              aria-controls='nav-links'
              aria-expanded={ props.openHamburger }>
              <span></span>
              <span></span>
              <span></span>
            </a>
            <Collapse in={ props.openHamburger }>
              <ul className='nav-links'> 
                  { navLinks.map((x, index) =>
                    <li className={ x.class } key={ `navlink${index}`}>
                      { x.target !== '' ?
                        <a href={ x.link } target='_blank' rel='noreferrer' tabIndex='0'>{ x.title }</a>
                        :
                        <a href={ x.link } rel='noreferrer' tabIndex='0'>{ x.title }</a>
                      }
                    </li>
                  )}
              </ul>
            </Collapse>
          </div>
          :
          <div className='nav-col right'>              
            <ul className='nav-links'> 
                { navLinks.map((x, index) =>
                  <li className={ x.class } key={ `navlink${index}`}>
                    { x.target !== '' ?
                      <a href={ x.link } target='_blank' rel='noreferrer' tabIndex='0'>{ x.title }</a>
                      :
                      <a href={ x.link } rel='noreferrer' tabIndex='0'>{ x.title }</a>
                    }
                  </li>
                )}
            </ul>
          </div>
        }
          
      </div>

      { p.url !== '/' &&
        <div className='header-content bottom'>
          <div className='case-study-nav'>
            <div>
              <div className='prev'>
                <a href={ prevPage }>
                  &laquo; Back
                </a>
              </div>

              <div className='expand'>
                <a
                  href='/'
                  className='toggleLink'                
                  onClick={ props.handleOpen }
                  aria-controls='case-study'
                  aria-expanded={ props.open }
                >
                  &nbsp;<span className='arrow'>&raquo;</span>
                </a>
              </div>

              { nextPage === undefined ?
                <div className='next'>
                  <a className='nav-btn home' href='../'>
                    Home
                  </a>
                </div>
              :
                <div className='next'>
                  <a href={ nextPage }>
                    { p.url === '/' ?
                      <span>Start</span>
                    :
                      <span>Next</span>
                    }
                    &raquo;
                  </a>
                </div>
              }
            </div>
            <div>
              <h3>
                <span className='number'>
                  { pageId < 10 &&
                    0
                  }
                  { pageId }.
                </span> { p.title }
              </h3>
            </div>
          </div>
          <Collapse in={ props.open }>
            <div className='case-study'>
              <div className='case-study-content'>
                { p.intro.map((item, index) =>
                  <React.Fragment key={ `cs-${index}` }>
                    <p>{ item }</p>
                  </React.Fragment>
                )}
                { p.bullets !== undefined &&
                  <ul className='project-details'>
                    { p.bullets.map((bullet, index) =>
                      <li key={ `bullet${ index }`}>
                        { bullet }
                      </li>
                    )}
                  </ul>
                }
                {p.toggleLinks && 
                  <div className='toggle-links'>
                    { p.url === 'holiday-mode' ?
                      <>
                        <button onClick={ () => props.setHolidayMode(false) } data-active={ !props.holidayMode } key='toggleOff'>
                          Normal Mode
                        </button>
                        <button onClick={ () => props.setHolidayMode(true) } data-active={ props.holidayMode } key='toggleOn'>
                          Holiday Mode
                        </button>
                      </>
                    :
                      <>
                        <button 
                          onClick={ () => props.setActiveDisplay('mattress') } 
                          data-active={ props.activeDisplay === 'mattress' }
                          key='toggleMattress'
                        >
                          Mattress
                        </button>
                        <button 
                          onClick={ () => props.setActiveDisplay('frame') } 
                          data-active={ props.activeDisplay === 'frame' }
                          key='toggleFrame'
                        >
                          Bed Frame
                        </button>
                        <button 
                          onClick={ () => props.setActiveDisplay('sheets') } 
                          data-active={ props.activeDisplay === 'sheets' }
                          key='toggleSheets'
                        >
                          Sheets
                        </button>
                      </>
                    }
                  </div>
                }
              </div>
            </div>
          </Collapse>
        </div>
      }
    </nav>
  )
}

export default Header