import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home                    = lazy(() => import('./pages/00-home/home'))
const HolidayMode             = lazy(() => import('./pages/01-holiday-mode/holiday-mode'))
const TiktokMimic             = lazy(() => import('./pages/02-tiktok-mimic/tiktok-mimic'))
const ProductDisplayMattress  = lazy(() => import('./pages/03-product-display-basic/mattress'))
const ProductDisplayFrame     = lazy(() => import('./pages/04-product-display-intermediate/frame'))
const ProductDisplaySheets    = lazy(() => import('./pages/05-product-display-advanced/sheets'))
const Mattress                = lazy(() => import('./pages/06-mattress/mattress'))
const BedFrame                = lazy(() => import('./pages/07-bed-frame/bed-frame'))
const Sheets                  = lazy(() => import('./pages/08-sheets/sheets'))
const Cart                    = lazy(() => import('./pages/09-cart/cart'))
const HomeOld                 = lazy(() => import('./pages/home/home'))

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/'                   element={ <Suspense><Home /></Suspense> } />
          <Route path='/holiday-mode'             element={ <Suspense><HolidayMode /></Suspense> } />
          <Route path='/tiktok'                   element={ <Suspense><TiktokMimic /></Suspense> } />
          <Route path='/product-display-mattress' element={ <Suspense><ProductDisplayMattress /></Suspense> } />
          <Route path='/product-display-frame'    element={ <Suspense><ProductDisplayFrame /></Suspense> } />
          <Route path='/product-display-sheets'   element={ <Suspense><ProductDisplaySheets /></Suspense> } />
          <Route path='/mattress'                 element={ <Suspense><Mattress /></Suspense> } />
          <Route path='/bed-frame'                element={ <Suspense><BedFrame /></Suspense> } />
          <Route path='/sheets'                   element={ <Suspense><Sheets /></Suspense> } />
          <Route path='/cart'                     element={ <Suspense><Cart /></Suspense> } />
          <Route path='/home'                     element={ <Suspense><HomeOld /></Suspense> } />
        </Routes>
    </Router>
  );
}

export default App;
