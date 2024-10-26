import { directory }   from '../../components/data/directory';
import { pageDetails } from './content';
import Main            from '../../components/sections/main';
import                      '../../css/bootstrap-grid.css';
import                      '../../scss/00-home/home.scss';

function Home(props) {
  const page = {
    pageUrl: '/',
    headerTitle: 'Home',
    headerIntro: [
      <>I am a <strong>detail-oriented web developer</strong> specializing in  <strong>compelling user experiences</strong>. The links included here contain a few of my favorite projects, all rebuilt in <strong>React.</strong></>,
      <><strong>Source code</strong> for everything on this site can be found on <a href='https://github.com/justinziegler' target='_blank' rel='noreferrer' tabIndex='0'>my Github</a>.</>
    ],
    skills: [
      <>HTML</>,
      <>CSS</>,
      <>SCSS</>,
      <>JavaScript</>,
      <>JQuery</>,
      <>Node.js</>,
      <>React</>,
      <>Vue.js</>,
      <>Nunjucks / Jinja</>,
      <>Github</>,
      <>Adobe Photoshop &amp; Illustrator</>
    ]
  }

  let caseStudies = [];
  let pageId = -1;
  let startHereUrl;

  directory.forEach(url => {
    pageId++
    pageDetails.forEach(page => {
      if (startHereUrl === undefined) {
        startHereUrl = page.url;
      }
      if (url === page.url) {
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
      <section className='case-study'>
        <div className='container'>
          <div className='row'>
            <div className='intro'>
              <h1>
                Justin Ziegler<br /><span>Recent Work</span>
              </h1>
              <div className='content'>
                <div className='info'>
                  { page.headerIntro.map(item =>
                    <p>{ item }</p>
                  )}
                </div>
                <div className='skills'>
                  <ul>
                    { page.skills.map(skill =>
                      <li>{ skill }</li>
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