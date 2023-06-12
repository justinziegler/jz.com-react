import NavFooter from './components/nav-footer.js';
import About from './components/about.js';
import Recently from './components/recently.js';
import { mobile } from './components/constants.js';
import './App.css';
import './scss/app.scss';

function App() {
  
  return (
    <div className="App">
      <NavFooter />
      <About />
      { !mobile && <Recently /> }
      { !mobile && <div className="background"></div> }
    </div>
  );
}

export default App;
