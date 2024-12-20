import '../../../scss/01-holiday-mode/hero.scss'
import '../../../scss/01-holiday-mode/hero-images.scss'
import '../../../scss/01-holiday-mode/hero-images-alt.scss'

function Hero(props) {
  function Pics() {
    const columnOrder = ['three', 'four', 'five'];
    const col3Groups = ['one', 'two', 'three'];
    const picOrder = [1, 2, 3, 1, 2, 3, 1];
    return (
      <div className='container'>
        <div className='row'>
          { columnOrder.map(colNo =>
            <div className={`column ${ colNo } col-xs-4`} key={ colNo }>
              { colNo === 'three' ?
                <>
                  { col3Groups.map(groupNo =>
                    <div className={`group ${groupNo}`} key={ groupNo }>
                      { picOrder.map((picNo, index) =>
                        <div className={`pic pic${ picNo } lazyload`} key={ `pic${index}` }></div>
                      )}
                    </div>
                  )}
                </>
                :
                <>
                <div className={`group ${colNo}`}>
                  { picOrder.map((pic, index) =>
                    <div className={`pic pic${ pic } lazyload`} key={ `pic${index}` }></div>
                  )}
                </div>
                </>
              }
            </div>
          )}
        </div>
      </div>
    )
  } 
  
  const scrollToNext = (e) => {
    e.preventDefault();
    const anchor = document.getElementById('scroll-anchor');
    anchor.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={ props.holidayMode ? 'hero holiday' : 'hero' }>
      <Pics />
      <div className='logo'></div>
      { props.holidayMode ?
        <>
          <p>Life changing sleep from sea to shining sea.<br /> Don't miss our Labor Day Sale.</p>
        </>
      :
        <>
          <p>Check Out the Mattress<br /> That's Changing Lives</p>
        </>
      }
      <a className='down-arrow' href='./' onClick={ scrollToNext }>More</a>
      <div id='scroll-anchor'></div>
    </section>
  )
}

export default Hero;