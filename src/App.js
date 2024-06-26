import NavFooter from './components/nav-footer.js';
import About from './components/about.js';
import Recently from './components/recently.js';
import { mobile } from './components/constants.js';
import { underway } from './components/o-underway.js';
import { royalty } from './components/o-royalty.js';
import { justice } from './components/o-justice.js';
import './App.css';
import './scss/app.scss';


function Passengers(props) {
  function highlight(e) {
    e.preventDefault();
    const scene = e.target.getAttribute('scene');
    console.log('scene', e.target.getAttribute('scene'))
    const obraItems = document.querySelectorAll('#obra li');
    obraItems.forEach(item => {
      const labels = item.querySelectorAll('a');
      labels.forEach(l => {
        l.classList.remove('active');
      })
      const label = item.querySelector(`a[scene="${ scene }"]`);
      console.log('label', label)
      if (item.contains(label)) {
       label.classList.add('active');
      }
    })
  }
  return (
    <ul>
      { props.manifest.map(x =>
        <li style={{ top: x.top, left: x.left }}>
          { x.number }. { x.name }
            { x.scenes.map((scene, index) => 
                <a href="#" onClick={ highlight } scene={ scene } 
                  data-last={ index === x.scenes.length - 1 }>
                  { scene }
                  { x.activity != undefined && ` ${x.activity[index]}` }
                  { (index === x.scenes.length - 1) && x.dies ? ' (D)' : ''}
                  { (index === x.scenes.length - 1) && !x.dies ? ' (L)' : ''}
                </a>
              
              )
            }
        </li>
      )} 
    </ul>
  )
}


function App() {
  return (
    <div className="App">
      <div id="obra">
        <div id="under-way">
          <Passengers manifest={ underway }  />
        </div>
        <div id="royalty">
          <Passengers manifest={ royalty }  />
        </div>
        <div id="justice">
          <Passengers manifest={ justice }  />
        </div>
      </div>
    </div>
  );
}

export default App;
