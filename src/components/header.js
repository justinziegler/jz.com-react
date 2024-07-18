

function Header(props) {
  const p = props.page;

  
  return (
    <nav id="nav" data-collapsed="false" data-current-page={ p.pageUrl }>
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
          <a href="#" className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </a>
          <ul> 
            { p.navLinks.map(x =>
              <li className={ x.class }>
                { x.target !== '' ?
                  <a href={ x.link }  target="_blank" tabindex="0">{ x.title }</a>
                  :
                  <a href={ x.link }  tabindex="0">{ x.title }</a>
                }
              </li>
            )}
          </ul>
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
              <a href="#" className="toggle-description">
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
        
        <div className="case-study">
          <div className="case-study-content">
            { p.headerIntro.map(item =>
                 item 
            )}
            { p.headerBullets !== undefined &&
              <ul className="project-details">
                { p.headerBullets.map(bullet =>
                  <li>
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
                  <li><a href="./" data-active={ index === 0 } data-target={ item.link }>
                    <span>{ item.title }</span>
                  </a></li>
                )}
              </ul>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;