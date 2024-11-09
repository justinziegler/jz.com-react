import { directory }      from '../../data/directory';
import { pageDetails }    from '../../data/pageDetails';
import { getPageDetails } from '../../components/utils/getPageDetails';
import Main               from '../../components/sections/main';
import                         '../../css/bootstrap-grid.css';
import                         '../../scss/00-home/home.scss';

function Home(props) {
  const page = getPageDetails('/')

  let caseStudies = [];
  let pageId = -1;
  let startHereUrl;

  directory.forEach(url => {
    pageId++
    pageDetails.forEach(page => {
      if (url === page.url && url !== '/') {
        if (startHereUrl === undefined) {
          startHereUrl = page.url;
        }
        const item = {
          url: url,
          pageId: pageId,
          title: page.title,
          intro: page.intro,
          background: page.background
        }
        caseStudies.push(item);
      }
    })
  })
  const startHere = {
    url: startHereUrl,
    title: 'Start from Beginning',
  }
  caseStudies.push(startHere);
  
  return (
    <Main page={ page }>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='intro'>
              <h1>
                Justin Ziegler<br /><span>Recent Work</span>
              </h1>
              <div className='content'>
                <div className='info'>
                  { page.intro.map((item, index) =>
                    <p key={ `info-${ index }`}>{ item }</p>
                  )}
                </div>
                <div className='skills'>
                  <ul>
                    { page.skills.map((skill, index) =>
                      <li key={ `skill-${ index }`}>{ skill }</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className='case-studies'>
              { caseStudies.map((cs, index) =>
                <div
                  className={ index === 9 ? 'last item' : 'item' }
                  style={{ backgroundImage: `url('${ cs.background }')` }}
                  key={ `cs${ index }`}
                >
                  <a href={ cs.url } title={ cs.title }>
                    { index !== caseStudies.length - 1 && 
                      <span className='case-number'>0{ cs.pageId }.</span>
                    }
                    <span className='case-title'>{ cs.title }</span> 
                  </a>
                </div>
              )}
            </div>            
          </div>
        </div>
      </section>
    </Main>
  )
}

export default Home;