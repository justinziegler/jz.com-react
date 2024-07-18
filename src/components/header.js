import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Header(props) {
  const p = props.page;

  const root = document.getElementById('root');
  

  // const [collapse, setCollapse] = useState(false);
  // const handleRestore = () => setCollapse(false);
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  }
  const [openHamburger, setOpenHamburger] = useState(false);
  const handleOpenHamburger = (e) => {
    e.preventDefault();
    setOpenHamburger(!openHamburger);
  }


  return (
    <nav id="nav" data-collapsed={ !open } data-current-page={ p.pageUrl }>
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
            onClick={ handleOpenHamburger }
            aria-controls="nav-links"
            aria-expanded={ openHamburger }>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <Collapse in={ openHamburger }>
            <ul class="nav-links"> 
              { p.navLinks.map((x, index) =>
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
                <a href={ p.prevPage }>
                  &laquo; Back
                </a>
              </div>
            }

            <div className="expand">
              <a
                href="/"
                className="toggleLink"                
                onClick={ handleOpen }
                aria-controls="case-study"
                aria-expanded={ open }
              >
                &nbsp;<span className="arrow">&raquo;</span>
              </a>
            </div>

            { p.nextPage !== undefined &&
              <div className="next">
                <a href={ p.nextPage }>
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
                { p.pageId < 10 &&
                  0
                }
                { p.pageId }.
              </span> { p.headerTitle }
            </h3>
          </div>
        </div>
        
        <Collapse in={ open }>
          <div className="case-study">
            <div className="case-study-content">
              { p.headerIntro.map(item =>
                  item 
              )}
              
              { p.headerBullets !== undefined &&
                <ul className="project-details">
                  { p.headerBullets.map((bullet, index) =>
                    <li key={ `bullet${ index }`}>
                      { bullet
                        // had 'safe' 
                      }
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