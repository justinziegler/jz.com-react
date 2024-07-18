import Header from '../../components/header';
import { directory } from '../../components/data/directory';
import { pageDetails, navLinks } from './content';
import { getNextPage } from '../../components/utils/getNextPage';
import collage from '../../assets/holiday-promotion/collage01.jpg';
import '../../scss/header.scss';
import '../../scss/case-studies.scss';

function Home(props) {
  let title = 'Case Studies';
  const pageUrl = '/';
  const nextPage = getNextPage(pageUrl);
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
    title: 'Start from Beginning »',
    background: collage
  }
  caseStudies.push(startHere);
  // const home = {
  //   title: title,
  //   p: {
  //     header: true,
  //     headerTitle: 'Home',
  //     pageUrl: pageUrl,
  //     pageId: 0,
  //     nextPage: nextPage,
  //     navLinks: navLinks
  //   },
  //   caseStudies: caseStudies
  // }
  const page = {
    header: true,
    headerTitle: 'Home',
    pageUrl: pageUrl,
    pageId: 0,
    nextPage: nextPage,
    navLinks: navLinks,
    headerIntro: [
      <p key="intro1">ADD SKILL LIST UNDER LEFT HEADING</p>,
      <p key="intro2">I am a web developer who spent the last few years building and refining the web presence of a bedding startup. After joining the company in its first year, I worked on every corner of the website as the product catalog slowly grew from one line to more than fifteen.</p>,
      <p key="intro3">The links included here contain a few of my favorite recent projects. Code samples for everything on this site can be found on <a href="https://github.com/justinziegler" target="_blank" tabIndex="0">my Github</a>. Thanks for visiting!</p>
    ],
  }
  
  return (
    <main>
      <Header page={ page } />
      <section className="case-study">
        <div className="container">
          <div className="row">
            <div className="intro">
              <h1>Justin Ziegler<br className="hidden-sm" /><span>Recent Work</span></h1>
            </div>
            <div className="case-studies">
              { caseStudies.map((cs, index) =>
                <div className="item" 
                  style={{ backgroundImage: `url('${ cs.background }')` }} key={ `cs${ index }`}>
                  <a href={ cs.url } title={ cs.title }>
                    { index !== caseStudies.length - 1 && 
                      <span className="case-number">0{ cs.pageId }.</span>
                    }
                    <span className="case-title">{ cs.title }</span> 
                  </a>
                
                </div>

              )}
            </div>
            
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home;