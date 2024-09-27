import NavFooter from './content/nav-footer.js';
import About from './content/about.js';
import Recently from './content/recently.js';
import { mobile } from './content/constants.js';
import '../../scss/home/home.scss';

function HomeOld() {
  return (
    <div className="App">
      <NavFooter />
      <About />
      { !mobile && <Recently /> }
      { !mobile && <div className="background"></div> }
    </div>
  );
}

export default HomeOld;