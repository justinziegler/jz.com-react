import NavFooter from '../components/nav-footer.js';
import About from '../components/about.js';
import Recently from '../components/recently.js';
import { mobile } from '../components/constants.js';

export const Home = () => {
  return (
    <>
    <NavFooter />
      <About />
        { !mobile && <Recently /> }
        { !mobile && <div className="background"></div> }
    </>
  );
}