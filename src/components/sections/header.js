import React           from 'react';
import Collapse        from 'react-bootstrap/Collapse';
import { navLinks }    from '../data/navLinks';
import { getPageId }   from '../utils/getPageId';
import { getPrevPage } from '../utils/getPrevPage';
import { getNextPage } from '../utils/getNextPage';

import '../../scss/sections/header.scss';
import '../../css/bootstrap-grid.css';

function Header(props) {
  const p = props.page
  const pageId = getPageId(p.pageUrl)
  const prevPage = getPrevPage(p.pageUrl)
  const nextPage = getNextPage(p.pageUrl)

  return (
    <nav id='nav' data-collapsed={ !props.open } data-current-page={ p.pageUrl }>
      <div className='nav-container'>
        <div className='nav-col left'>
            { p.pageUrl !== '/' &&
              <a className='nav-btn home' href='../'>
                <span className='sr-only'>Home</span>
              </a>
            }
            <h2>Justin Ziegler &nbsp;<span>Recent Work</span> </h2>
          </div>
        
        <div className='nav-col right'>
          <a href='#' 
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
                      <a href={ x.link } target='_blank' tabIndex='0'>{ x.title }</a>
                      :
                      <a href={ x.link } tabIndex='0'>{ x.title }</a>
                    }
                  </li>
                )}
            </ul>
          </Collapse>
        </div>
      </div>

      <div className='header-content bottom'>
        <div className='case-study-nav'>
          <div>
            { p.pageUrl !== '/' &&
              <div className='prev'>
                <a href={ prevPage }>
                  &laquo; Back
                </a>
              </div>
            }

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
                  { p.pageUrl === '/' ?
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
              </span> { p.headerTitle }
            </h3>
          </div>
        </div>
        
        <Collapse in={ props.open }>
          <div className='case-study'>
            <div className='case-study-content'>
              { p.headerIntro.map((item, index) =>
                <React.Fragment key={ `cs-${index}` }>
                  <p>{ item }</p>
                </React.Fragment>
              )}
              { p.headerBullets !== undefined &&
                <ul className='project-details'>
                  { p.headerBullets.map((bullet, index) =>
                    <li key={ `bullet${ index }`}>
                      { bullet }
                    </li>
                  )}
                </ul>
              }
              {p.toggleLinks && 
                <div className='toggle-links'>
                  { p.pageUrl === 'holiday-mode' ?
                    <>
                      <button onClick={ () => props.setHolidayMode(false) } data-active={ !props.holidayMode } key='toggleOff'>
                        Holiday Mode Off
                      </button>
                      <button onClick={ () => props.setHolidayMode(true) } data-active={ props.holidayMode } key='toggleOn'>
                        Holiday Mode On
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
    </nav>
  )
}

export default Header;