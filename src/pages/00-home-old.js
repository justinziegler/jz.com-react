import NavFooter from '../components/nav-footer.js';
import About from '../components/about.js';
import Recently from '../components/recently.js';
import { mobile } from '../components/constants.js';
import '../scss/app.scss';

function Home(props) {
  return (
    <>
     <NavFooter />
       <About />
         { !mobile && <Recently /> }
         { !mobile && <div className="background"></div> }
     </>
  )
}

export default Home;