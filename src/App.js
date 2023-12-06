import NavFooter from './components/nav-footer.js';
import About from './components/about.js';
// import Recently from './components/recently.js';
import Gallery from './components/gallery.js';
import { mobile } from './components/constants.js';
import './App.css';
import './scss/app.scss';

function App() {
  
  return (
    <div className="App">

      <nav className="nav">
        <div className="nav-content">

          <div className="logo-container">
            <div className="logo">
              <h1>Justin Ziegler</h1>
              <h2>Recent Work</h2>
            </div>
          </div>
          <div className="nav-links">
            <ul>
              <li><a href="#">Products</a></li>
              <li><a href="#">Promotions</a></li>
              <li><a href="#">Checkout</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <article data-group="products">
          <section>
            <div className="container">
              <div className="row">
                <div className="main-content col-xs-12">
                  <Gallery />
                </div>
              </div>
            </div>
          </section>
        </article>   

      </main>

      <NavFooter />
      {/* <About /> */}
      {/* { !mobile && <Recently /> } */}
      { !mobile && <div className="background"></div> }
    </div>
  );
}

export default App;
