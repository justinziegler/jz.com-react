import React from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { navLinks } from './nav-links';
import { getPageId } from './utils/getPageId';
import { getPrevPage } from './utils/getPrevPage';
import { getNextPage } from './utils/getNextPage';
import '../scss/header.scss';

function Header(props) {
  const p = props.page;
  const pageId = getPageId(p.pageUrl);
  const prevPage = getPrevPage(p.pageUrl);
  const nextPage = getNextPage(p.pageUrl);

  return (
    <nav id="nav" data-collapsed={ !props.open } data-current-page={ p.pageUrl }>
      <div className="nav-container">
        <div className="nav-col left">
            { p.pageUrl !== '/' &&
              <a className="nav-btn home" href="../">
                <span className="sr-only">Home</span>
              </a>
            }
            <h2>Justin Ziegler &nbsp;<span>Recent Work</span> </h2>
          </div>
        
        <div className="nav-col right">
          <a href="#" 
            className="hamburger" 
            onClick={ props.handleOpenHamburger }
            aria-controls="nav-links"
            aria-expanded={ props.openHamburger }>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <Collapse in={ props.openHamburger }>
            <ul className="nav-links"> 
              { navLinks.map((x, index) =>
                <li className={ x.class } key={ `navlink${index}`}>
                  { x.target !== '' ?
                    <a href={ x.link }  target="_blank" tabIndex="0">{ x.title }</a>
                    :
                    <a href={ x.link }  tabIndex="0">{ x.title }</a>
                  }
                </li>
              )}
            </ul>
          </Collapse>
        </div>
      </div>

      <div className="header-content bottom">
        <div className="case-study-nav">
          <div>
            { p.pageUrl !== '/' &&
              <div className="prev">
                <a href={ prevPage }>
                  &laquo; Back
                </a>
              </div>
            }

            <div className="expand">
              <a
                href="/"
                className="toggleLink"                
                onClick={ props.handleOpen }
                aria-controls="case-study"
                aria-expanded={ props.open }
              >
                &nbsp;<span className="arrow">&raquo;</span>
              </a>
            </div>

            { nextPage !== undefined &&
              <div className="next">
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
              <span className="number">
                { pageId < 10 &&
                  0
                }
                { pageId }.
              </span> { p.headerTitle }
            </h3>
          </div>
        </div>
        
        <Collapse in={ props.open }>
          <div className="case-study">
            <div className="case-study-content">
              { p.headerIntro.map(item =>
                  item 
              )}
              { p.headerBullets !== undefined &&
                <ul className="project-details">
                  { p.headerBullets.map((bullet, index) =>
                    <li key={ `bullet${ index }`}>
                      { bullet }
                    </li>
                  )}
                </ul>
              }
              {p.toggleLinks !== undefined &&
                <ul className="toggle-links">
                  { p.toggleLinks.map((item, index) =>
                    <li key={ `link${ index }`}><a href="./" data-active={ index === 0 } data-target={ item.link }>
                      <span>{ item.title }</span>
                    </a></li>
                  )}
                </ul>
              }
            </div>
          </div>
        </Collapse>
      </div>
    </nav>
  )
}

export default Header;